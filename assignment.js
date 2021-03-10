
// 1.Kilometer to Meter
function kilometerToMeter(value) {
    var output = 1000*value;
    if ( output<0) {
        return "Error";
    }
    return output;
}

// 2.Budget Calculator
function budgetCalculator(watch,mobile,laptop) {
    var watchPrice = 50*watch;              //* Price per watch 50 taka.
    var moblilePrice = 100*mobile;          //* Price per mobile 100 taka.
    var laptopPrice = 500*laptop;           //* Price per laptop 500 taka.
    var totalAmount = watchPrice+moblilePrice+laptopPrice;
    return totalAmount;
}

// 3.Hotel Cost
function hotelCost(days) {
    if (days<=10) {
        var totalCost = 100*days;           //* first ten days cost per day 100 taka.
            return totalCost;
    }
    else if (days<=20 && days!==10) {
        var firstTenDays = 100*10;
        var tendaysUp = (days-10)* 80;      //* Ten days above cost per day 80 taka.
        var totalCost = firstTenDays+tendaysUp;
            return totalCost;
    }
    else {
        var firstTenDays = 100*10;
        var tendaysUp = 10*80;
        var twentyDaysUp = (days-20)*50;      //* Twenty days above cost per day 50 taka.
        var totalCost = firstTenDays+tendaysUp+twentyDaysUp;
            return totalCost;
    }
}

// 4.Mega Friend
function megaFriend(array){
    var temp = 0;
    for ( var i = 0; i<array.length; i++) {
        var result = array[i].length;
            if ( result>temp) {
            index = i;
            temp = result;
        }
    }
    return array[index];
}