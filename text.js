var objs = [
   {
    name: 'one',
    msg: 'Hello I am '
   },
   {
    name: 'two',
    msg: 'Hello I am '
   },

   {
    name: 'three',
    msg: 'Hello I am '
   },


];

function main() {
    objs.forEach((item) => {
        const bt = document.createElement('button');
        bt.innerHTML = item.name;
        bt.onclick = getCallBack(item.msg);
        document.body.appendChild(bt);
    });
}

function getCallBack(arg){
    return function() {
        alert(arg)
    }
}
main();