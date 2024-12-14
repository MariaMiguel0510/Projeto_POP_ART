var botao1 = document.querySelector(".botao1");
botao1.addEventListener('click', carrega);

var botao2 = document.querySelector(".botao2");
botao2.addEventListener('click', carrega2);

var l = 10;
var nl;//número de círculos largura
var na;//número de círculos altura
let forma;
let fundo;
var largura = document.body.clientWidth;

function setup() {
  createCanvas(largura, windowHeight * 5.3);

  nl = height / l;
  na = width / l;
  forma = color(245, 44, 136);
  fundo = color(115, 227, 242);
  noStroke();

  background(fundo);
  for (var c = 0; c < na; c++) {
    for (var a = 0; a < nl; a++) {

      fill(forma);
      circle((4 + (c * l)) * 1.7, (4 + (a * l)) * 1.7, l);
    }
  }

}

function draw() {
}

function carrega() {
  fundo = color(random(255), random(255), random(255));
  forma = color(random(255), random(255), random(255));
  btn.style.background = fundo;
  background(fundo);
  for (var c = 0; c < na; c++) {
    for (var a = 0; a < nl; a++) {
      fill(forma);
      circle((4 + (c * l)) * 1.7, (4 + (a * l)) * 1.7, l);
    }
  }
}

function carrega2() {
  forma = color(245, 44, 136);
  fundo = color(115, 227, 242);
  btn.style.background = color(47, 212, 233);
  background(fundo);
  for (var c = 0; c < na; c++) {
    for (var a = 0; a < nl; a++) {
      fill(forma);
      circle((4 + (c * l)) * 1.7, (4 + (a * l)) * 1.7, l);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//para se ter acesso às referência do texto
var btn = document.querySelector(".source");//variável source
btn.addEventListener('click', clickOne);
var texto = document.querySelector(".textoEscondido");

function clickOne() {
  if (texto.style.display == "block") {
    texto.style.display = "none";
  } else {
    texto.style.display = "block";
  }
}

// botão de mudar fundo 
window.addEventListener('scroll', function () {
  var botao1 = document.querySelector('.botao1');
  if (window.scrollY >= 500) {
    botao1.classList.add('aparece');
  } else {
    botao1.classList.remove('aparece');
  }
});

window.addEventListener('scroll', function () {
  var botao2 = document.querySelector('.botao2');
  if (window.scrollY >= 500) {
    botao2.classList.add('aparece');
  } else {
    botao2.classList.remove('aparece');
  }
});

//interação botão hamburguer
var botao = document.querySelector(".burguerBotao");
botao.addEventListener('click', toggleMenu);

var secoes = document.querySelectorAll(".seccao");
for (var i = 0; i < secoes.length; i++) {
  secoes[i].addEventListener('click', closeMenu);
}

function toggleMenu() {
  var contentor = document.querySelector(".menuContainer");
  contentor.classList.toggle("show");
}

function closeMenu() {
  var contentor = document.querySelector(".menuContainer");
  contentor.classList.remove("show");
}


//firstSection desaparece
let video = document.querySelector('.firstSection');

window.addEventListener('scroll', function () {
  let value = 1 + window.scrollY / -800;
  video.style.opacity = value;
});

