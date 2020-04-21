#   Developer Interview

##  System Requirements
*   Windows 10 or higher
*   SQL 2012 or higher
    *   Instance name needs to be SQLEXPRESS
    *   [Helpful instructions for getting a development environment setup on Windows for free](https://www.microsoft.com/en-us/sql-server/developer-get-started/csharp/win/)
*   Visual Studio 2015 or higher
    *   [Free Community Download that has all the needed features](https://www.visualstudio.com/downloads/)

##  Baseline Technologies
*   .NET Framework 4.5.2
*   ASP.NET MVC 5
*   Microsoft SQL Server

## Getting Started

Once you have the repository cloned locally, then run **_GetStarted.bat_**.  This should setup the database for you.  If you ever need to reset your local database environment, then just run GetStarted.bat (note, this will delete everything you've created at this point...so be careful).

You'll be utilizing a database migration tool to apply database scripts to the local instance.  [RoundhousE is the particular tool, and more information can be found here.](https://github.com/chucknorris/roundhouse/wiki).  Essentially, you'll put all of your database schema change scripts in the "up" folder (i.e. table creates, foreign key additions, data updates, etc...) and your answers to the query questions in the "answers" folders.  See the DeveloperInterview.Database project for more details.

When you're ready to apply your database scripts, run either **_RunDbScripts.bat_** (which will invoke the RoundhousE migration procedure) or run **_GetStarted.bat_** (which will reset your database and run your scripts).


##  Assignment

### Scenario:

Your technical lead has been approached by a company that is having data integrity and reporting issues with their current order management system.  She has identified a few key areas that need to be addressed. She knows the database has some major data integrity issues so she's asking you to address those with the schema changes listed below.  She suspects data exists that will violate the schema changes she'd like to introduce.  She has received confirmation from the client that any data prohibiting the schema changes below can be safely deleted.

The technical lead also wants to get a jump start on some reports requested by the client.  She has tasked you with creating scripts to retrieve the data that will ultimately be used in those reports.  Finally, she wants you to take a stab at creating a basic web interface that will list all the orders in the database along with the ability to add a new order.

### Requirements:
#### DB Schema Changes:
*   DBS-01: Identify the current heap table and create a script to introduce a clustered index on that table (we generally create the clustered index on columns titled "Id")
*   DBS-02: Create a script to establish a foreign key relationship between dbo.Customer and dbo.CustomerOrder
*   DBS-03: Create a script to ensure a Customer Order cannot have the same Product specified multiple times in an Order

#### SQL Queries for Reporting:
*   DBA-01: Create a script to list all Orders that have no Products
*   DBA-02: Create a script to list all Products, along with the total number of units sold, sorted by highest total units sold to lowest total units sold
*   DBA-03: Create a script to list all Customers, along with how much money they've spent, sorted by highest amount spent to lowest amount spent
*   DBA-04: Create a script to list all Customers with no Orders  (must use a JOIN in the answer)

#### Code:
*   CODE-01: Create a page that lists all orders (do NOT use Entity Framework)
*   CODE-02: Create a page to add a new order (do NOT use Entity Framework)


##  How We'll Evaluate Your Work

The Essential Requirements:
*   **_GetStarted.bat_** must run successfully on the evaluator's computer (Windows 10)
*   Web application must compile and work (CODE-01 and CODE-02 requirements must be satisfied)
*   **_"DB Schema Changes"_** scripts will go in the "up" folder in the DeveloperInterview.Database project.  Name each script according to it's Assignment ID (i.e. DBS-01, DBS-02, DBS-03)
*   **_"SQL Queries for Reporting"_** scripts will go in the "answers" folder in the DeveloperInterview.Database project.  Name each script according to it's Assignment ID (i.e. DBA-01, DBA-02, DBA-03, DBA-04)
*   Every commit must be prefaced by the Assignment ID of the current problem you are working on.  For example, every commit I make for the first problem in the "DB Schema Changes" section should begin with "DBS-01".  This goes for the database work and the code work.

The "Extras":
*   We tend to value frequent, descriptive commits
*   We tend to value creativity
*   We tend to value aesthetics
*   We tend to value good documentation
*   We tend to value good communication

In a real-world scenario, aspects like authentication/authorization, security, error handling, and data validation are of extreme importance.  Due to the nature of this assignment, we will choose to ignore and/or severely reduce the importance of these items.  That said, bonus points for solutions that have this stuff included :)


##  Contact

If you have any questions during the process, please feel free to reach out to Jake Seward (jseward@crcemail.com). He will respond as soon as he has availability to review the email.

When you're finished with the assignment, then submit a PULL REQUEST via GitHub and we'll evaluate.  We will reach out once we've had a chance to evaluate!

Good luck!


##  Further Reading
*   [RoundhousE Database Migration Tool](https://github.com/chucknorris/roundhouse/wiki)
*   [GitHub Help](https://help.github.com/)
*   [Create C# apps using SQL Server on Windows](https://www.microsoft.com/en-us/sql-server/developer-get-started/csharp/win/)
*   [ASP.NET](https://www.asp.net/)