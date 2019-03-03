var stack = ["n"];

function colored() {
    var cl;
    cl = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
    return cl;
}

function pushF() {
    var v = "<div style=\"background-color: " + colored() + ";\">" + document.getElementById('nameField').value + " <br> </div> ";
    stack.push(v);
    var t = '';
    for (var i = stack.length - 1; i > 0; i--) {
        t += stack[i];
        

    }
    console.log(t);
    document.getElementById('zz').innerHTML = t;

}
function popF() {
    
    var t = '';
    if (stack.length == 1) {
        document.getElementById('zz').innerHTML = "Stack is empty !";
    }
    else {
        stack.pop();
        if (stack.length == 1) {
            document.getElementById('zz').innerHTML = "Stack is empty !";
        }
        else {
            for (var i = stack.length - 1; i > 0; i--) {
                t +=  stack[i];
                console.log(t);
            }
            document.getElementById('zz').innerHTML = t;
        }
    }
}