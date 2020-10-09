using MarketPlace_Domain.EF.Core.LoginEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core.BuyerEntity
{
   public class Buyer: BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BuyerId { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string BuyerName { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(500)]
        public string Address { get; set; }

        [ForeignKey("Login")]
        public int LoginId { get; set; }
        public virtual Login Login { get; set; }
    }
}
