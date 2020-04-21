using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Configuration;

namespace DeveloperInterview.DataLayer
{
    public class CRCDeveloperInterviewHandle
    {
        private SqlConnection con;
        private void connection()
        {
            string constring = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            con = new SqlConnection(constring);
        }

        // ********** VIEW Order DETAILS ********************
        public DataTable GetOrders()
        {
            connection();
            string queryString = "SELECT FirstName, LastName, C.Id AS CustomerId, CO.Id AS OrderId, CO.AddedDate, ProductId, Quantity, ProductRating, \"Name\", Price" +
                " FROM dbo.Customer C inner join dbo.CustomerOrder CO ON C.Id = CO.CustomerId inner join dbo.OrderProduct OP ON CO.Id = OP.CustomerOrderId inner join dbo.Product P ON P.Id = OP.ProductId ORDER BY CustomerOrderId DESC";
            SqlCommand cmd = new SqlCommand(queryString, con);
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            return dt;
        }

        // **************** ADD NEW ORDER*********************
        public int AddOrder(string FirstName, string LastName, Dictionary<int, int> products)
        {
            bool success = true;
            connection();
            using (con)
            {
                con.Open();
                int customerId = getCustomerId(FirstName, LastName);

                if (customerId == -1)
                {
                    customerId = insertCustomer(FirstName, LastName);
                }

                int orderId = insertCustomerOrder(customerId);

                string queryString = "INSERT INTO dbo.OrderProduct (CustomerOrderId, ProductId, Quantity) VALUES (@CustomerOrderId, @ProductId, @Quantity)";

                SqlCommand cmd = new SqlCommand(queryString, con);

                foreach (KeyValuePair<int, int> product in products)
                {
                    cmd.Parameters.AddWithValue("@CustomerOrderId", orderId);
                    cmd.Parameters.AddWithValue("@ProductId", product.Key);
                    cmd.Parameters.AddWithValue("@Quantity", product.Value);

                    int i = cmd.ExecuteNonQuery();
                    cmd.Parameters.Clear();
                    if (i <= 0)
                        success = false;
                }
                con.Close();
            }
            return success ? 1 : 0;
        }

        private int insertCustomerOrder(int customerId)
        {
            string queryString = "INSERT INTO dbo.CustomerOrder (CustomerId, AddedDate) VALUES (@customerId, @AddedDate)";
            SqlCommand cmd = new SqlCommand(queryString, con);
            DateTime insertDate = DateTime.Now;
            cmd.Parameters.AddWithValue("@CustomerId", customerId);
            cmd.Parameters.AddWithValue("@AddedDate", insertDate);
            cmd.ExecuteNonQuery();
            customerId = getCustomerOrderId(customerId, insertDate);
            return customerId;
        }

        private int getCustomerOrderId(int customerId, DateTime insertDate)
        {
            string queryString = "Select Id from dbo.CustomerOrder where CustomerId = @CustomerId and AddedDate = @InsertDate";
            SqlCommand cmd = new SqlCommand(queryString, con);
            cmd.Parameters.AddWithValue("@CustomerID", customerId);
            cmd.Parameters.AddWithValue("@InsertDate", insertDate);
            SqlDataReader dr = cmd.ExecuteReader();
            int customerOrderId = 0;
            while (dr.Read())
                if (!dr.IsDBNull(0))
                    customerOrderId = dr.GetInt32(0);
            dr.Close();
            return customerOrderId;
        }

        private int insertCustomer(string firstName, string lastName)
        {
            int customerId = -1;
            string queryString = "INSERT INTO dbo.Customer (FirstName, LastName, AddedDate) VALUES (@FirstName, @LastName, @AddedDate)";
            SqlCommand cmd = new SqlCommand(queryString, con);
            cmd.Parameters.AddWithValue("@FirstName", firstName);
            cmd.Parameters.AddWithValue("@LastName", lastName);
            cmd.Parameters.AddWithValue("@AddedDate", DateTime.Now);
            cmd.ExecuteNonQuery();
            customerId = getCustomerId(firstName, lastName);
            return customerId;
        }

        private int getCustomerId(string fName, string lName)
        {
            int customerId = -1;
            string queryString = "Select Id from dbo.Customer where FirstName = @FirstName and LastName = @LastName";
            SqlCommand cmd = new SqlCommand(queryString, con);
            cmd.Parameters.AddWithValue("@FirstName", fName);
            cmd.Parameters.AddWithValue("@LastName", lName);

            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
                if (!dr.IsDBNull(0))
                    customerId = dr.GetInt32(0);
            dr.Close();
            return customerId;
        }


        public DataTable GetProducts()
        {
            connection();
            string queryString = "SELECT * FROM[CRC.DeveloperInterview].dbo.Product";
            SqlCommand cmd = new SqlCommand(queryString, con);
            SqlDataAdapter sd = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();

            con.Open();
            sd.Fill(dt);
            con.Close();

            return dt;
        }
    }
}
