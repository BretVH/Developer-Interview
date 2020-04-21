USE [CRC.DeveloperInterview]
GO
SELECT ProductId, SUM(Quantity) 
FROM dbo.OrderProduct 
GROUP BY ProductId 
ORDER BY SUM(Quantity) DESC;
GO