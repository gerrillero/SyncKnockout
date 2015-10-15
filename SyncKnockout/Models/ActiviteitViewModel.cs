using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SyncKnockout.Models
{
    public class ActiviteitViewModel
    {
        public Guid Id { get; set; }
        public String Onderwerp { get; set; }
        public String UitgevoerdVoor { get; set; }
        public List<ActiviteitGebruikerViewModel> Gebruikers { get; set; }
        public List<ActiviteitBestedeTijd> Tijden { get; set; }
    }
}
