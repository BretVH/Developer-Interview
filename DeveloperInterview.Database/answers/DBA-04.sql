USE [CRC.DeveloperInterview]
GO
SELECT C.Id, C.FirstName, C.LastName 
FROM dbo.Customer C
	left join dbo.CustomerOrder CO on C.Id = CO.CustomerId
WHERE CO.CustomerId IS NULL;
GO