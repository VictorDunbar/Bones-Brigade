function Mayihavethetime(hour, minute, period) {
    var msg = "in the evening";
    var msg1 = "in the morning";

    if (minute <= 30) {
        console.log("its just after " + " " + hour + " " + msg);
    }
    if (minute >= 30) {
        console.log("its almost " + " " + (hour + 1) + " " + msg1);
    }
}
Mayihavethetime(8, 50, "AM");
Mayihavethetime(7, 15, "PM");