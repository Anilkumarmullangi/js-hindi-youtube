//immediatly invoked function expressions (IIFE )

// normal type
function chai(){   
    
    //named iife
    console.log("DB CONNECTED");
}
chai();

// iife type
(function chai(){                    
    console.log("DB CONNECTED");
})();

//iife for => method
((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})("hitesh");

