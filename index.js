var rect = {

    perimeter: (x,y)=>(2*(x+y)),
    area: (x,y)=>(x*y)
};

function solveRect(l,b){
    console.log("Calculating Rectangule with l = " + l + b);
    if(l<=0 || b<=0){
        console.log("Area should be greater than 0");
    }
    else{
        console.log("Area is " );
        console.log("Perimeter is ");
    }
        
}

solveRect(2,4);