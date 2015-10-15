using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SyncKnockout.Models
{

    public enum TestEnum
    {
        test1 = 0,
        test2 = 1,
        test3 = 3
    }

    public class ActiviteitBestedeTijd
    {
        public Int32 Id { get; set; }
        //public DateTime Date { get; set; }
        public TestEnum Testenum { get; set; }
        public String Oms { get; set; }
    }

}
