using MarketPlace_Domain.EF.Core.LoginEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core.SellerEntity
{
    public class Seller: BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SellerId { get; set; }
        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string SellerName { get; set; }
        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string Address { get; set; }

        [ForeignKey("Login")]
        public int LoginId { get; set; }
        public virtual Login Login { get; set; }
    }
}
