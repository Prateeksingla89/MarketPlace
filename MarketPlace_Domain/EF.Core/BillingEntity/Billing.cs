using MarketPlace_Domain.EF.Core.BuyerEntity;
using MarketPlace_Domain.EF.Core.LoginEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core.BillingEntity
{
   public class Billing: BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BillingId { get; set; }

        [ForeignKey("Buyer")]
        public int BuyerId { get; set; }
        public virtual Buyer Buyer { get; set; }

        [ForeignKey("Login")]
        public int LoginId { get; set; }
        public virtual Login Login { get; set; }
    }
}
