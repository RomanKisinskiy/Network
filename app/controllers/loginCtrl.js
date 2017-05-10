app.controller("loginCtrl", ["US", function (US) {
    var vm = this;
    vm.CheckUs = function () {
        for (var i in US.getUsers()) {
            if (US.getUsers()[i].name == vm.nam && US.getUsers()[i].password == vm.pas) {
                vm.urlm = "#mainpage";
                US.getNumber = i;
            };
        };
    };
}])