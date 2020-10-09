using MarketPlace_Domain.EF.Core.BillingEntity;
using MarketPlace_Domain.EF.Core.BillingInvoiceLinesEntity;
using MarketPlace_Domain.EF.Core.BuyerEntity;
using MarketPlace_Domain.EF.Core.ItemEntity;
using MarketPlace_Domain.EF.Core.LoginEntity;
using MarketPlace_Domain.EF.Core.SellerEntity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Data.CommonDbContext
{
    public class MarketPlaceDbContext : DbContext
    {
        public MarketPlaceDbContext() : base("MarketPlaceConnection")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<MarketPlaceDbContext,Migrations.Configuration>());
        }

        public DbSet<Login> Login { get; set; }
        public DbSet<Billing> Billing { get; set; }
        public DbSet<BillMapping> BillMapping { get; set; }
        public DbSet<Buyer> Buyer { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<Seller> Seller { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }

    }
}
