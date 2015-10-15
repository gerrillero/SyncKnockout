

ActiviteitViewModel = function (data) {
    var self = this;
    ko.mapping.fromJS(data, {}, self);
    debugger;
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