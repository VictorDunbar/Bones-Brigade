function random(quarters) {

    var winnings = Math.floor((Math.random() * 50) + 50);
    var loser = "0";

    while (quarters > 0) {
        if ((Math.random() * 100) < 1) {
            quarters = quarters + winnings;
            return quarters;
        } else
            quarters--;
    }
    if (quarters === 0) {
        return loser;
    }
}
random(50);