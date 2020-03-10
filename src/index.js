module.exports = function toReadable(number) {
    let arr_numbers_less20 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let arr_numbers_multipal10 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let stringNumber = String(number);

    if (stringNumber.length == 1) {
        return arr_numbers_less20[number];
    }

    if (stringNumber.length == 2 && number < 20) {
        console.log(arr_numbers_less20[number]);
        return arr_numbers_less20[number];
    }

    if (stringNumber.length == 2 && number > 19) {
        return get_numberXX_over19();
    }

    if (stringNumber.length == 3 && number % 100 == 0) {
       return get_numberXXX_multipal100();
    }

    if (stringNumber.length == 3  && number % 100 < 20) {  
        return get_numberXXX_less20();
    }

    if (stringNumber.length == 3 && number % 10 !== 0 && number % 100 > 19) {
        return get_numberXXX_over19();
    }

    if (stringNumber.length == 3 && number % 10 == 0 && number % 100 > 19){
        return get_numberXXX_multipal10();
    }

    function get_numberXX_over19() {
        if (number % 10 == 0) {
            return arr_numbers_multipal10[number / 10];
        } else {
            let number_less10 = number % 10;
            let number_over19 = Math.floor(number / 10);
            let numberXX = `${arr_numbers_multipal10[number_over19]} ${arr_numbers_less20[number_less10]}`;
            return numberXX;
        }
    }

    function get_numberXXX_multipal100() {
        let numbers_multipal100 
        if (stringNumber.length == 3 && number % 100 == 0) {
            numbers_multipal100 = `${
                arr_numbers_less20[number / 100]
            } hundred`;
            return numbers_multipal100;
        }
    }

    function get_numberXXX_less20(){
        let numberX19 = number % 100;
        let numbers_multipal100 = `${
            arr_numbers_less20[Math.floor(number / 100)]
        } hundred`;
        if(numberX19 > 0 && numberX19 < 20){
            let number = `${numbers_multipal100} ${arr_numbers_less20[numberX19]}`;
            return number;
        }
    }

    function get_numberXXX_over19(){
        let numberX21 = Math.floor((number % 100) /10);
        let numberXX1 = number % 10;
        let numbers_multipal100 = `${
            arr_numbers_less20[Math.floor(number / 100)]
        } hundred`;
        if(stringNumber.length == 3  && number % 10 !== 0){
            let number = `${numbers_multipal100} ${arr_numbers_multipal10[numberX21]} ${arr_numbers_less20[numberXX1]}`;
            return number; 
        }
    }

    function get_numberXXX_multipal10(){
        let numberX21 = Math.floor((number % 100) /10);
        let numbers_multipal100 = `${
            arr_numbers_less20[Math.floor(number / 100)]
        } hundred`;
        if(stringNumber.length == 3 && number % 10 == 0){
        let number = `${numbers_multipal100} ${arr_numbers_multipal10[numberX21]}`;
            return number; 
    }
}
}
