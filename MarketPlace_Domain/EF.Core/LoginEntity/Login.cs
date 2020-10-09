using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core.LoginEntity
{
    public class Login:BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LoginId { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string UserName { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string Email { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string FirmName { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(100)]
        public string Password { get; set; }
    }
}
