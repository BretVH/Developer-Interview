USE [CRC.DeveloperInterview]
GO
DELETE FROM dbo.CustomerOrder
WHERE customerID IN (
	SELECT CustomerId 
	FROM [CRC.DeveloperInterview].dbo.CustomerOrder 
	WHERE CustomerId NOT IN (
		SELECT Id FROM [CRC.DeveloperInterview].dbo.Customer))
GO
ALTER TABLE dbo.CustomerOrder
  ADD CONSTRAINT FK_Customer_CustomerOrder FOREIGN KEY (CustomerId)     
      REFERENCES dbo.Customer (Id)
      ON DELETE CASCADE    
      ON UPDATE CASCADE
  ;
GO