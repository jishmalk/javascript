console.log("start");

function get(callback){
    setTimeout(() => {
        callback("eqaul");
    }, 5000)
}

get((value)=>{
    console.log(value);
});

console.log("end")