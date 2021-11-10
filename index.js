const Calculate = {
 fizzbuzz(inputNumber){

    for(inputNumber;inputNumber<101;inputNumber++){
    
    if(inputNumber % 5 === 0 && inputNumber % 3 === 0 ){
        console.log("Fuzzy Buzz");
    }else if(inputNumber % 5 === 0 ){
        console.log("Buzz");
    }else if( inputNumber % 3 === 0){
        console.log("Fuzzy");
    
    }else{
        console.log("Número "+" "+ inputNumber);
    }
    }
    
}
    
}
  
module.exports = Calculate