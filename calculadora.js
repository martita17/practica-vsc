let subTitle = document.getElementById("sub-titulo");

subTitle.innerHTML = "<h2>para sumar y restar</h2>";

let res = document.getElementById("res")
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("bet2");

btn1.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if (!n1 || !n2) {
        return;
    }

    n1 = parseInt(n1)
    n2 = parseInt(n2)

    let resultado = 0;
    resultado = n1 + n2;
    res.innerHTML = resultado;
})

///Todavía no funciona. Creo que debería ir con un if
btn2.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if (!n1 || !n2) {
        return;
    }

    n1 = parseInt(n1)
    n2 = parseInt(n2)

    let resultado2 = 0;
    resultado2 = n1 - n2;
    res.innerHTML = resultado2;
})



