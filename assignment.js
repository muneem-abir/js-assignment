// feetToMile math.....
function feetToMile(feet){
    if(feet<0){
        return "Sorry! measerument of distance cannot be a Negative value";
    }
    if(typeof feet != "number"){
        return "Please, Enter a numeric value";
    }
    return feet/5280;
}
var result = feetToMile(1);
console.log(result);

// woodCalculator math.......
function woodCalculator(chair,table,bed){
    if(typeof chair !="number" || typeof table !="number" || typeof bed !="number"){
        return "Sorry! you didn't enter three input";
    }
    if(chair<0 || table<0 || bed<0){
        return "Sorry! object value must be positive";
    }
    if(chair % 1 !=0 || table % 1 !=0 || bed % 1 !=0 ){
        return "Sorry! object value is not valid. Object value must be Positive Integer"
    }
    return chair*1+table*3+bed*5;
}
var result = woodCalculator(1,1,1);
console.log(result);

// brickCalculator math...........
function brickCalculator(n){
    if(n<0){
        return "Brick number cannot be negative. Enter a positive value.";
    }
    if(n<=10){
        return n*15*1000;
    }
    if(n>10 && n<=20){
        return 3*10*1000 + n*12*1000;
    }
    if(n>20){
        return 5*10*1000 + 2*10*1000 + n*10*1000;
    }
}
var result=brickCalculator(30);
console.log(result);


// finding tinyFriend math.......
function tinyFriend(aray){
    var minValue = Infinity;
    var smallest;
    for(var i=0; i < aray.length; i++){
        if(aray[i].length < minValue){
            var minValue = aray[i].length;
            smallest = aray[i];
        }      
    }
    return smallest;
}
var result = tinyFriend(['audi','bmw','mercedes','ab','volks']);
console.log(result);
