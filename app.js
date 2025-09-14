
function r(event){
console.log(inp.value);
p.innerText=inp.value;


}





let inp=document.querySelector("#a");
let b=document.querySelector("button");
let p=document.querySelector("p");


inp.addEventListener("input",r);
