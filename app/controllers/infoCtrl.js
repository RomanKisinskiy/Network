app.controller("infoCtrl", ["US", function (US) {
    var vm = this;
    vm.pn = US.getUsers()[US.getNumber].phonenumber;
    vm.co = US.getUsers()[US.getNumber].country;
    vm.ci = US.getUsers()[US.getNumber].city;
    vm.sk = US.getUsers()[US.getNumber].skype;
    vm.gh = US.getUsers()[US.getNumber].github;
    vm.ds = US.getUsers()[US.getNumber].description;
    vm.UpdateInfo = function () {
        US.getUsers()[US.getNumber].phonenumber = vm.pn;
        US.getUsers()[US.getNumber].country = vm.co;
        US.getUsers()[US.getNumber].city = vm.ci;
        US.getUsers()[US.getNumber].skype = vm.sk;
        US.getUsers()[US.getNumber].github = vm.gh;
        US.getUsers()[US.getNumber].description = vm.ds;
    }
}])