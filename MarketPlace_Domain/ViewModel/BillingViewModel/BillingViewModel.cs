using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MarketPlace_Domain.ViewModel.DropDownViewModel;

namespace MarketPlace_Domain.ViewModel.BillingViewModel
{
    public class BillingViewModel
    {

        public int BillingId { get; set; }
        public int BuyerId { get; set; }
        public int LoginId { get; set; }
        public string BillingNumber { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ModificationDate { get; set; }
        public List<lstBillingViewModel> lstBilling { get; set; }
        public List<CommonDropDownViewModel> lstBuyer { get; set; }
        public List<CommonDropDownViewModel> lstSeller { get; set; }
        public List<CommonDropDownViewModel> lstItem { get; set; }

        public BillingViewModel()
        {
            BillingId = 0;
        }

        public String Title
        {
            get
            {
                return BillingId != 0 ? "Edit Invoice" : "Add New Invoice";
            }
        }

        
    }


    public class lstBillingViewModel
    {

        public int SellerId { get; set; }
        public int ItemId { get; set; }
        public decimal CostPrice { get; set; }
        public decimal SellingPrice { get; set; }
        public decimal CommissionPrice { get; set; }
        public bool IsDeleted { get; set; }

    }
}
