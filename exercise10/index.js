//   console.log('change color 1'); //testing
// const button = document.querySelector('#js-quote-text');
// const box = document.querySelector('#bgColor');
//   console.log(button); //testing
//   console.log(box); //testing
//
// button.onclick = function changeBG()
// {
//   console.log('change color 2'); //testing
//   button.style.backgroundColor = "white";
// } //failure

const button = document.querySelector('#js-new-quote');
const box = document.querySelector('#bgColor');
button.addEventListener('click', changeBG);
function changeBG(){
  // console.log('box.style.backgroundColor: '); //testing
  // console.log(box.style.backgroundColor); //testing
  // white, yellow, pink, aquamarine, plum
  if(box.style.backgroundColor === "yellow")
  {
    box.style.backgroundColor = "pink";
  }
  else if(box.style.backgroundColor === "pink")
  {
    box.style.backgroundColor = "aquamarine";
  }
  else if(box.style.backgroundColor === "aquamarine")
  {
    box.style.backgroundColor = "plum";
  }
  else if(box.style.backgroundColor === "plum")
  {
    box.style.backgroundColor = "white";
  }
  else
  {
    box.style.backgroundColor = "yellow";
  }
  // box.style.backgroundColor = "yellow";
}

// API ENDPOINT
const endpoint = 'https://v2.jokeapi.dev/joke/Any?safe-mode';
console.log(endpoint); //testing

const quoteButton = document.querySelector('#js-new-quote'); // id
quoteButton.addEventListener('click', getQuote);
async function getQuote()
{
  // console.log('hi'); //testing
  try
  {
    const response = await fetch(endpoint); // access endpoint
    if(!response.ok)
    {
      throw Error(response.statusText);
    }
    const json = await response.json();
    // console.log(json.setup + '\n' + json.delivery); //testing
    const fullQuote = json.setup + '<br>' + '<br>' + json.delivery;
    // console.log(fullQuote); //testing
    // console.log(fullQuote); //testing

    displayQuote(fullQuote);
  }
  catch(err)
  {
    console.log(err); //testing
    alert('failed'); //testing
  }
}

function displayQuote(quote) // doesn't need to be defined before called in L21
{
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.innerHTML = quote;
}
