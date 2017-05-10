app.controller("registrationCtrl", ["US", function (US) {
    var vm = this;
    vm.RegistrUser = function () {
        if (vm.Un !== vm.Ps) {
            var newUser = {};
            newUser.photourl ="image/avatar.jpeg";
            newUser.name = vm.Un;
            newUser.sname = vm.Ln;
            newUser.password = vm.Ps;
            newUser.chat = [];
            newUser.friends = [];
            US.getUsers().push(newUser);
            vm.z = "#myModal";
        }
    }
}])