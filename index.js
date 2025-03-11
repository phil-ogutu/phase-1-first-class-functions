function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function writeGreeting(){
        console.log("Hello!")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Good Morning!")
    }
}