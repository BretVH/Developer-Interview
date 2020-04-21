USE [CRC.DeveloperInterview]
GO
SELECT CO.customerId, SUM(P.Price * (OU.quantity)) AS MoneySpent
	FROM dbo.Customer C 
	inner join dbo.CustomerOrder CO ON C.Id = CO.CustomerId
	inner join dbo.OrderProduct OP2 ON OP2.CustomerOrderId = CO.Id
	inner join dbo.Product P ON P.Id = OP2.ProductId
	outer apply (SELECT SUM(Quantity) AS quantity FROM dbo.OrderProduct OP inner join dbo.Customer C2 ON C2.Id = C.Id WHERE OP.ProductId = P.Id) OU
	GROUP BY CO.CustomerId
	ORDER BY MoneySpent DESC;
GO