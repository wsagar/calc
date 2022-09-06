function buildbtn() {
  for (let i = 0; i <= 9; i++) {
    let a = document.createElement("button");
    a.innerHTML = i;
    let b = document.querySelector("#numbtn");
    let c = b.appendChild(a);
    let input = document.querySelector(".input");

    a.addEventListener("click", function () {
      input.value += i;
    });
  }
}
buildbtn();

// let b = document.querySelector("#operatorbtn");
// let plus = document.createElement("button");
// plus.innerHTML = "+";
// plus = b.appendChild(plus);

// let minus=document.createElement('button')
// minus.innerHTML='-'
// minus=b.appendChild(plus)

function buildoperatorbtn() {
  let opr = "+-*/=C";
  for (let i = 0; i < opr.length; i++) {
    let b = document.querySelector("#operatorbtn");
    let btn = document.createElement("button");
    btn.innerHTML = opr[i];
    btn = b.appendChild(btn);
    let input = document.querySelector(".input");
    btn.addEventListener("click", function () {
      if (opr[i] == "C") {
        input.value = "";
      } else if (opr[i] == "=") {
        input.value = eval(input.value);
      } else input.value += opr[i];
    });
  }
}
buildoperatorbtn();
