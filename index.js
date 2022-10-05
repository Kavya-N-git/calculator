console.log("hello world");

let print=document.getElementById("text");

function show(number){
    print.value += number;
}

function clearnum(){
    
    print.value = "";
    console.log(print);
}
function delnum(){
    print.value=print.value.slice(0,-1);
}

function result(){
    try{
        print.value=eval(print.value);
       
    }
    catch(err){
        alert("invalid operation");
    }
}