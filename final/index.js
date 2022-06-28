// HELPER FUNCTIONS
function ranNum(){ // 0 or 1 FUNC
  return Math.floor(Math.random() * 2);
}
function capitalizeFirstLetter(string){ // func name
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function addS(string){ // func name
  return string + '(s)';
}


/* DEFAULT ANSWERS - Name, Noun, Adjective, Food, Furniture, Adjective, Adjective, Adjective, Adjective
Adverb, Number, Plural Animal, Verb, Verb */
let mlWords = ["goldilocks","rabbit","wonderful","oatmeal","chair","hot","cold","hard","soft","quickly","three","bears","jumped","ran"];

// CHANGING AND ADDING WORDS
const name = document.querySelector('#name');
name.addEventListener('click', changeW0);
function changeW0(){
  let temp = prompt("Enter a Name.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[0] = temp;
    name.innerHTML = mlWords[0];
    name.style.color = "black";
    name.style.backgroundColor = "#b3e0dc";
  }
}

const noun = document.querySelector('#noun');
noun.addEventListener('click', changeW1);
function changeW1(){
  let temp = prompt("Enter a Noun.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[1] = temp;
    noun.innerHTML = mlWords[1];
    noun.style.color = "black";
    noun.style.backgroundColor = "#81cdc6";
  }
}

const adjective1 = document.querySelector('#adjective1');
adjective1.addEventListener('click', changeW2);
function changeW2(){
  let temp = prompt("Enter an Adjective.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[2] = temp;
    adjective1.innerHTML = mlWords[2];
    adjective1.style.color = "black";
    adjective1.style.backgroundColor = "#b3e0dc";
  }
}

const food = document.querySelector('#food');
food.addEventListener('click', changeW3);
function changeW3(){
  let temp = prompt("Enter a type of Food.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[3] = temp;
    food.innerHTML = mlWords[3];
    food.style.color = "black";
    food.style.backgroundColor = "#81cdc6";
  }
}

const furniture = document.querySelector('#furniture');
furniture.addEventListener('click', changeW4);
function changeW4(){
  let temp = prompt("Enter a type of Furniture.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[4] = temp;
    furniture.innerHTML = mlWords[4];
    furniture.style.color = "black";
    furniture.style.backgroundColor = "#b3e0dc";
  }
}

const adjective2 = document.querySelector('#adjective2');
adjective2.addEventListener('click', changeW5);
function changeW5(){
  let temp = prompt("Enter an Adjective.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[5] = temp;
    adjective2.innerHTML = mlWords[5];
    adjective2.style.color = "black";
    adjective2.style.backgroundColor = "#81cdc6";
  }
}

const adjective3 = document.querySelector('#adjective3');
adjective3.addEventListener('click', changeW6);
function changeW6(){
  let temp = prompt("Enter an Adjective.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[6] = temp;
    adjective3.innerHTML = mlWords[6];
    adjective3.style.color = "black";
    adjective3.style.backgroundColor = "#b3e0dc";
  }
}

const adjective4 = document.querySelector('#adjective4');
adjective4.addEventListener('click', changeW7);
function changeW7(){
  let temp = prompt("Enter an Adjective.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[7] = temp;
    adjective4.innerHTML = mlWords[7];
    adjective4.style.color = "black";
    adjective4.style.backgroundColor = "#81cdc6";
  }
}

const adjective5 = document.querySelector('#adjective5');
adjective5.addEventListener('click', changeW8);
function changeW8(){
  let temp = prompt("Enter an Adjective.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[8] = temp;
    adjective5.innerHTML = mlWords[8];
    adjective5.style.color = "black";
    adjective5.style.backgroundColor = "#b3e0dc";
  }
}

const adverb = document.querySelector('#adverb');
adverb.addEventListener('click', changeW9);
function changeW9(){
  let temp = prompt("Enter an Adverb ending in -ly.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[9] = temp;
    adverb.innerHTML = mlWords[9];
    adverb.style.color = "black";
    adverb.style.backgroundColor = "#81cdc6";
  }
}

const number = document.querySelector('#number');
number.addEventListener('click', changeW10);
function changeW10(){
  let temp = prompt("Enter a Number higher than 1.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[10] = temp;
    number.innerHTML = mlWords[10];
    number.style.color = "black";
    number.style.backgroundColor = "#b3e0dc";
  }
}

const animal = document.querySelector('#animal');
animal.addEventListener('click', changeW11);
function changeW11(){
  let temp = prompt("Enter a Plural Animal.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[11] = temp;
    animal.innerHTML = mlWords[11];
    animal.style.color = "black";
    animal.style.backgroundColor = "#81cdc6";
  }
}

const verb1 = document.querySelector('#verb1');
verb1.addEventListener('click', changeW12);
function changeW12(){
  let temp = prompt("Enter a Verb.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[12] = temp;
    verb1.innerHTML = mlWords[12];
    verb1.style.color = "black";
    verb1.style.backgroundColor = "#b3e0dc";
  }
}

const verb2 = document.querySelector('#verb2');
verb2.addEventListener('click', changeW13);
function changeW13(){
  let temp = prompt("Enter a Verb.");
  if(temp === "" || temp === null){
    alert("Invalid Responce");
  }
  else{
    mlWords[13] = temp;
    verb2.innerHTML = mlWords[13];
    verb2.style.color = "black";
    verb2.style.backgroundColor = "#81cdc6";
  }
}


// MAKING THE STORY this is before asking Joel
const button = document.getElementById('makeStory');
button.addEventListener('click', makeStory);
function makeStory(){
  document.getElementById('intro').remove();
  document.getElementById('name').remove();
  document.getElementById('animal').remove();
  document.getElementById('adjective1').remove();
  document.getElementById('food').remove();
  document.getElementById('furniture').remove();
  document.getElementById('adjective2').remove();
  document.getElementById('adjective3').remove();
  document.getElementById('adjective4').remove();
  document.getElementById('adjective5').remove();
  document.getElementById('adverb').remove();
  document.getElementById('number').remove();
  document.getElementById('noun').remove();
  document.getElementById('verb1').remove();
  document.getElementById('verb2').remove();
  document.getElementById('button1').remove();
  document.body.style.backgroundColor = '#b3e0dc';
  document.body.innerHTML += '<div id="title">title</div>';
  document.body.innerHTML += '<div id="story">story</div>';
  document.body.innerHTML += '<div id="button2"><a id="button2HL" href="/final/index.html">Choose different words</a></div>';
  document.body.innerHTML += '<div id="parentC"><img id="bgImg" src="/img/fForest.png" alt="forest"><img id="girl" src="/img/fGirl.png" alt="girl"><img id="forestB" src="/img/fForestB.png" alt="foreground trees"></div>';

  const title = document.getElementById('title');
  const story = document.getElementById('story');
  const cap0 = capitalizeFirstLetter(mlWords[0]);
  const w3 = addS(mlWords[3]);
  const cap10 = capitalizeFirstLetter(mlWords[10]);
  const cap11 = capitalizeFirstLetter(mlWords[11]);
  console.log('w3: '+w3);
  console.log('cap11: '+cap11);

  title.innerHTML = `${cap0} and the ${cap10} ${cap11}`;
  story.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Once upon a time, a girl named <span>${cap0}</span> lived in a house at the edge of the forest. One day <span>${cap0}</span> got distracted by a <span>${mlWords[1]}</span> which led her deep into the forest. When she lost track of the <span>${mlWords[1]}</span>, she realized she was lost. She saw a house and was curious, so she went inside.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>${cap0}</span> smelled something <span>${mlWords[2]}</span> and realized how hungry she was. On the table were three bowls of <span>${w3}</span>. <span>${cap0}</span> thought, “I must eat this.” She sat on the closest <span>${mlWords[4]}</span> and took a sip. “Ah!” she said, “it’s too <span>${mlWords[5]}</span>.” She moved to the next bowl and tried it. “It's too <span>${mlWords[6]}</span>,” she said. She moved to the third bowl and took a sip. “It's just right!” And before she knew it, the <span>${w3}</span> was all gone.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>${cap0}</span> yawned and looked for the bedroom. When she found the bedroom she saw a big bed, a medium-sized bed, and a little bed. “I need a nap,” she thought. She sat on the big bed but it was too <span>${mlWords[7]}</span>. She tried the medium-sized bed but it was too <span>${mlWords[8]}</span>. She laid down on the little bed, and it was just right! <span>${cap0}</span> <span>${mlWords[9]}</span> fell asleep.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>${cap0}</span> bolted awake to a roar. There were <span>${mlWords[10]}</span> <span>${mlWords[11]}</span> looming over her, and they looked angry. She screamed as she <span>${mlWords[12]}</span> out of the bed and <span>${mlWords[13]}</span> out of the room. <span>${cap0}</span> <span>${mlWords[13]}</span> out of the house and into the forest. She never returned to the home of the <span>${mlWords[10]}</span> <span>${mlWords[11]}</span>.`;
}
