//Max of two numbers

    function returnMax(a, b){
        if(a > b ){
            return "The maximum is " + a;
        } 
        else if(b > a){
            return "The maxmimum is " + b;
        }
        else { 
            return a + " and " + b + " are equivalent";
        }
    }
    console.log(returnMax(9, 9));


    // Mosh's
    let number = max(5, 5);
    console.log(number);

    function max(a, b){
        return (a > b) ? a : b;
    }
