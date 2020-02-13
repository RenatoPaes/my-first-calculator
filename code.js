const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', function clear () {
    document.querySelector(".screen-content").innerHTML = "";
});

const buttonOne = document.querySelector('#one');
buttonOne.addEventListener('click', function one () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 1)
});

const buttonTwo = document.querySelector('#two');
buttonTwo.addEventListener('click', function two () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 2)
});

const buttonThree = document.querySelector('#three');
buttonThree.addEventListener('click', function three () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 3)
});

const buttonFour = document.querySelector('#four');
buttonFour.addEventListener('click', function four () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 4)
});

const buttonFive = document.querySelector('#five');
buttonFive.addEventListener('click', function five () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 5)
});

const buttonSix = document.querySelector('#six');
buttonSix.addEventListener('click', function six () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 6)
});

const buttonSeven = document.querySelector('#seven');
buttonSeven.addEventListener('click', function seven () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 7)
});

const buttonEight = document.querySelector('#eight');
buttonEight.addEventListener('click', function eight () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 8)
});

const buttonNine = document.querySelector('#nine');
buttonNine.addEventListener('click', function nine () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 9)
});

const buttonZero = document.querySelector('#zero');
buttonZero.addEventListener('click', function zero () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 0)
});

// APAGANDO O ULTIMO CARACTERE

const buttonBackspace = document.querySelector('#backspace');
buttonBackspace.addEventListener('click', function backspace () {
  let screenContent = document.querySelector(".screen-content").textContent;
      console.log(screenContent)
  var newScreenContent = screenContent.substr(0, screenContent.length-1);
      console.log(newScreenContent)
  document.querySelector(".screen-content").innerHTML = newScreenContent
});


// REALIZANDO SOMA: 

const buttonPlus = document.querySelector('#plus');
buttonPlus.addEventListener('click', function plus () {
  let a = document.querySelector(".screen-content").textContent;
  aa = parseInt(a);
  document.querySelector(".screen-content").innerHTML = "";


  const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('click', function equals () {
  let b = document.querySelector(".screen-content").textContent;
  bb = parseInt(b);
  document.querySelector(".screen-content").innerHTML = aa + bb;
});
});
