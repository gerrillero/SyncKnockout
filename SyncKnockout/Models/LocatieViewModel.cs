using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SyncKnockout.Models
{
    public class LocatieViewModel
    {
        public Guid Id { get; set; }
        public AdresViewModel Adres { get; set; }
        public String Toelichting { get; set; }
    }

    public class AdresViewModel
    {
        public Guid Id { get; set; }
        public Int32 Huisnummer { get; set; }
        public String Straatnaam { get; set; }
        public String Postcode { get; set; }
        public String Woonplaats { get; set; }
        public Land Land { get; set; }
        public String Volledig
        {
            get
            {
                return this.Straatnaam + " " + this.Huisnummer + " " + this.Postcode;
            }
            set
            {
                value = this.Straatnaam + " " + this.Huisnummer + " " + this.Postcode;
            }
        }
    }

    public enum Land
    {
        land1 = 1111,
        land2 = 2222,
        land3 = 3333
    }
}