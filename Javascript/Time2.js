function MayIHaveTheTime(hour, minute, period) {


    if (minute === 3 && minute <= 30 && period === "am") {
        console.log("just after 3" + "am");
    }
}
MayIHaveTheTime(3, 23, "am");