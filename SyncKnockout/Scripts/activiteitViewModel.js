var ObjectState = {
    Unchanged: 0,
    Added: 1,
    Modified: 2,
    Deleted: 3
};

var itemsMapping = {
    'Tijden': {
        key: function (tijd) {
            return ko.utils.unwrapObservable(tijd);
        },
        create: function (options) {
            return new TijdViewModel(options.data);
        }
    },
    'Locaties': {
        key: function (locatie) {
            return ko.utils.unwrapObservable(locatie);
        },
        create: function (options) {
            return new LocatieViewModel(options.data);
        }
    }
};


TijdViewModel = function (data) {
    var self = this;
    ko.mapping.fromJS(data, itemsMapping, self);
}

LocatieViewModel = function (data) {
    var self = this;
    ko.mapping.fromJS(data, itemsMapping, self);
}


ActiviteitViewModel = function (data) {
    var self = this;
    ko.mapping.fromJS(data, itemsMapping, self);

    dataLocaties = ko.observableArray(data.Locaties);
    self.Locaties(dataLocaties);

    var flag = -1;
    //var deletedTijden = [];
    actionBegin = function (args) {
        debugger;
        if (args.requestType == "add") { flag = 1; }
        else if (args.requestType == "beginedit") { flag = 2; }
        else if (args.requestType == "cancel") { flag = -1; };
        if (args.requestType == "delete") {
            //args.data.ObjectState = ObjectState.Deleted;
            //if (args.data.Id > 0) {
            //    self.BestedeTijdenToDelete.push(args.data);
            //}
        }
        if (args.requestType == "save") {
            if (flag == 1) {
                args.data.Id = tempIdLocatie;
                //args.data.ObjectState = ObjectState.Added;
                tempIdLocatie--;
            }
            else if (flag == 2 && (args.data.Id > 0)) {
                //args.data.ObjectState = ObjectState.Modified;
            }
        }
    };

    actionComplete = function (args) {

        $('#GridLocaties div.e-editform-btn').hide();
        $('.e-inlineform-titlebar').hide();

        if (args.requestType == "beginedit" || args.requestType == "add") {
            debugger;
            $("#Adres\\.Land").ejDropDownList({
                dataSource: ddlLanden,
                fields: { value: 'value', text: 'text' },
                width: '100%',
                watermarkText: 'Selecteer land',
            });
            $("#Adres\\.Huisnummer").ejNumericTextbox();

            if (args.requestType == "beginedit") {
            };
        }

        if (args.requestType == "save") {

        }

        if (args.requestType == "delete") {

        }

    }

    
    dataGebruikers = ko.observable(data.Gebruikers);
    dataUitgevoerdVoor = ko.observable(data.UitgevoerdVoor);

    dataTijden = ko.observableArray(data.Tijden);
    self.Tijden(dataTijden);
    
    self.UitgevoerdVoor(dataUitgevoerdVoor);

    self.Save = function () {

        $.ajax({
            url: "/Home/Save/",
            type: "POST",
            data: ko.toJSON(self),
            contentType: "application/json",
            success: function (data) {
                if (data != null) {
                    alert(data.bericht);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (XMLHttpRequest.status == 400) {
                    alert(XMLHttpRequest.reponseText);
                }
                else {
                    alert("The web server had an error.");
                }
            }

        });
    };

};


//(function () {
//    var existing = ko.bindingProvider.instance;

//    ko.bindingProvider.instance = {
//        nodeHasBindings: existing.nodeHasBindings,
//        getBindings: function (node, bindingContext) {
//            var bindings;
//            try {
//                bindings = existing.getBindings(node, bindingContext);
//            }
//            catch (ex) {
//                if (window.console && console.log) {
//                    console.log("binding error", ex.message, node, bindingContext);
//                }
//            }

//            return bindings;
//        }
//    };

//})();