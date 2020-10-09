using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarketPlace_Domain.EF.Core
{
    public class BaseEntity
    {
        public Nullable<DateTime> CreatedDate { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<DateTime> ModifiedDate { get; set; }
        public Nullable<int> ModifiedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }

        public BaseEntity()
        {
            IsActive = true;
            IsDeleted = false;
            CreatedDate = DateTime.UtcNow;
        }
    }
}
