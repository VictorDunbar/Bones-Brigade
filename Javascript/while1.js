function ForAFewBillion() {
    var total = .01;
    for (var i = 1; i < 31; i++) {
        console.log("day" + i + " - total is" + total);
        total = total * 2

    }
}
ForAFewBillion();