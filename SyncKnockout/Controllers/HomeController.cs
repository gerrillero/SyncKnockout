﻿using SyncKnockout.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SyncKnockout.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        // Activiteiten method's
        public ActionResult Activiteit()
        {
            List<ActiviteitGebruikerViewModel> gebruikers = new List<ActiviteitGebruikerViewModel>();
            gebruikers.Add(new ActiviteitGebruikerViewModel { Id = new Guid("d3f8d314-8a14-49ea-ace7-35154e61508a"), Gebruikersnaam = "Antonio" });
            gebruikers.Add(new ActiviteitGebruikerViewModel { Id = new Guid("693a4ada-e919-4e20-900b-0bd4de7aa40c"), Gebruikersnaam = "Aitor" });
            gebruikers.Add(new ActiviteitGebruikerViewModel { Id = new Guid("507d5f41-8f0f-478e-9ff0-817e12c83364"), Gebruikersnaam = "Raúl" });

            ActiviteitViewModel model = new ActiviteitViewModel();
            model.Id = Guid.NewGuid();
            model.Onderwerp = "Test onderwerp";
            model.Gebruikers = gebruikers;
            model.UitgevoerdVoor = "693a4ada-e919-4e20-900b-0bd4de7aa40c,507d5f41-8f0f-478e-9ff0-817e12c83364";

            return View(model);
        }

        public JsonResult Save(ActiviteitViewModel act)
        {
            var activiteit = act;

            String bericht = "Data has been saved!";
            return Json(new { activiteit, bericht }, JsonRequestBehavior.AllowGet);
        } 

        // Bestanden method's
        public ActionResult Bestand()
        {



            return View();
        }

    }
}