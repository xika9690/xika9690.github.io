// const para = document.querySelector('p');
// para.addEventListener('click', updateName);
//
// function updateName(){
//   const name = prompt('Enter a new name');
//   para.textContent = `Player 1: ${name}`;
// }

document.getElementById("h0ver").onmouseenter = function()
{
    this.style.backgroundColor = "blue";
    this.style.color = "white";
}
document.getElementById("h0ver").onmouseleave = function()
{
    this.style.backgroundColor = "yellow";
    this.style.color = "black";
}
