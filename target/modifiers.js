var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (meters) {
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal2;
})();
