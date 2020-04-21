USE [CRC.DeveloperInterview]
GO
CREATE FUNCTION uniqueProduct()
RETURNS INT
AS
BEGIN
    RETURN  (SELECT count(*) FROM (
		SELECT CustomerOrderId 
		FROM dbo.OrderProduct 
		GROUP BY CustomerOrderId 
		HAVING count(DISTINCT ProductId) > 1
		) AS r)
        
END
GO
DELETE FROM [CRC.DeveloperInterview].dbo.OrderProduct 
WHERE CustomerOrderId IN (
		SELECT CustomerOrderId 
		FROM dbo.OrderProduct 
		GROUP BY CustomerOrderId 
		HAVING count(DISTINCT ProductId) > 1);
GO
ALTER TABLE dbo.OrderProduct
ADD CONSTRAINT Product_Is_Unique_Per_Order 
CHECK (dbo.uniqueProduct() <= 1);
GO