USE [CRC.DeveloperInterview]
GO
SELECT CustomerOrderId 
FROM dbo.OrderProduct
GROUP BY CustomerOrderId
HAVING count(ProductId) = 0;
GO