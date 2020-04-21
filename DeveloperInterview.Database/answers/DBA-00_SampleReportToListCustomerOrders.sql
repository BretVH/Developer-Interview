SELECT
	   C.FirstName+' '+C.LastName AS CustomerName
	 , CO.AddedDate AS DateOrdered
	 , OP.ItemCount AS NumberOfProductsOrdered
FROM dbo.Customer C
	 INNER JOIN dbo.CustomerOrder CO ON C.Id = CO.CustomerId
	 INNER JOIN
(
	SELECT
		   CustomerOrderId
		 , SUM(Quantity) AS ItemCount
	FROM dbo.OrderProduct
	GROUP BY
			 CustomerOrderId
) AS OP ON OP.CustomerOrderId = CO.Id;