using MarketPlace_Domain.EF.Core.BillingEntity;
using MarketPlace_Domain.EF.Core.ItemEntity;
using MarketPlace_Domain.EF.Core.SellerEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core.BillingInvoiceLinesEntity
{
    public class BillMapping: BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BillMappingId { get; set; }

        [ForeignKey("Billing")]
        public int BillingId { get; set; }
        public virtual Billing Billing { get; set; }

        [ForeignKey("Seller")]
        public int SellerId { get; set; }
        public virtual Seller Seller { get; set; }


        [ForeignKey("Item")]
        public int ItemId { get; set; }
        public virtual Item Item { get; set; }


        public decimal? CostPrice { get; set; }

        public decimal? SellingPrice { get; set; }

        public decimal? CommissionPrice { get; set; }
    }
}
