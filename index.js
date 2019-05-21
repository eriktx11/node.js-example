var rect = require('./rectangle.js');

function solveRect(l,b){
    console.log("Calculating Rectangule with l = " + l + b);

    rect (l,b, (err, rectangle) => {

        if(err){
            console.log("Error: ", err.message);
        }
        else{
            console.log("The area is: "+rectangle.area());
        }
    });
    console.log("Pringint after callback");
        
}

solveRect(4,4);