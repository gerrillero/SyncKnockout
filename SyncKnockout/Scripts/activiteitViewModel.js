

ActiviteitViewModel = function (data) {
    var self = this;
    ko.mapping.fromJS(data, {}, self);

    dataGebruikers = ko.observable(data.Gebruikers);
    dataUitgevoerdVoor = ko.observable(data.UitgevoerdVoor);
    
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
