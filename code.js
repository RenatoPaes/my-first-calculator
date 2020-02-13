// BOTÃO LIMPAR

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', function clear () {
    document.querySelector(".screen-content").innerHTML = "";
});

// BOTÃO UM

const buttonOne = document.querySelector('#one');
buttonOne.addEventListener('click', function one () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 1)
});

// BOTÃO DOIS

const buttonTwo = document.querySelector('#two');
buttonTwo.addEventListener('click', function two () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 2)
});

// BOTÃO TRÊS

const buttonThree = document.querySelector('#three');
buttonThree.addEventListener('click', function three () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 3)
});

// BOTÃO QUATRO

const buttonFour = document.querySelector('#four');
buttonFour.addEventListener('click', function four () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 4)
});

// BOTÃO CINCO

const buttonFive = document.querySelector('#five');
buttonFive.addEventListener('click', function five () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 5)
});

// BOTÃO SEIS

const buttonSix = document.querySelector('#six');
buttonSix.addEventListener('click', function six () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 6)
});

// BOTÃO SETE

const buttonSeven = document.querySelector('#seven');
buttonSeven.addEventListener('click', function seven () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 7)
});

// BOTÃO OITO

const buttonEight = document.querySelector('#eight');
buttonEight.addEventListener('click', function eight () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 8)
});

// BOTÃO NOVE

const buttonNine = document.querySelector('#nine');
buttonNine.addEventListener('click', function nine () {
    document.querySelector(".screen-content").insertAdjacentText("beforeend", 9)
});

// BOTÃO ZERO

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



// MATEMÁGICA

const buttonPlus = document.querySelector('#plus');
buttonPlus.addEventListener('click', function plus() {
  a = document.querySelector(".screen-content").textContent;
  aa = parseInt(a);
  document.querySelector(".screen-content").innerHTML = "";
  z = document.querySelector('#plus');
    console.log(z.id);
  });

const buttonMinus = document.querySelector('#minus');
buttonMinus.addEventListener('click', function minus() {
  a = document.querySelector(".screen-content").textContent;
  aa = parseInt(a);
  document.querySelector(".screen-content").innerHTML = "";
  z = document.querySelector('#minus');
    console.log(z.id);
  });

const buttonTimes = document.querySelector('#times');
buttonTimes.addEventListener('click', function times() {
  a = document.querySelector(".screen-content").textContent;
  aa = parseInt(a);
  document.querySelector(".screen-content").innerHTML = "";
  z = document.querySelector('#times');
    console.log(z.id);
  });

const buttonDivision = document.querySelector('#division');
buttonDivision.addEventListener('click', function division () {
  a = document.querySelector(".screen-content").textContent;
  aa = parseInt(a);
  document.querySelector(".screen-content").innerHTML = "";
  z = document.querySelector('#division');
  console.log(z.id);
  });

 const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('click', function equals () {
  b = document.querySelector(".screen-content").textContent;
  bb = parseInt(b);

  if (z.id == 'plus') {
  document.querySelector(".screen-content").innerHTML = aa + bb; }

  if (z.id == 'minus') {
  document.querySelector(".screen-content").innerHTML = aa - bb; }

  if (z.id == 'times') {
  document.querySelector(".screen-content").innerHTML = aa * bb; }

  if (z.id == 'division') {
  document.querySelector(".screen-content").innerHTML = aa / bb; }

});