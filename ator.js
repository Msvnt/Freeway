//ator
var xAtor = 237
var yAtor = 366
var colisao = false;
var meusPontos = 0;


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor += 3
  }
}
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverEsq()){
    xAtor -= 3
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverDir()){
    xAtor += 3
    }
  }
}
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function verificaColisao(){
  for (var i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtor();
      somDaColisao.play();
      if ( pontosMaiorQueZero())
          meusPontos -= 1;     
    }
  }
}

function voltaAtor(){
  yAtor = 366
}

function incluiPontos(){
   textAlign(CENTER)
   textSize(25)
   fill(color(255, 240, 60))
   text(meusPontos, width / 2, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtor();
  }
}

function pontosMaiorQueZero(){
   return meusPontos
}

//pensei em criar uma lista para evitar a repeticao desse cod mas falhei
function podeSeMover(){
  return yAtor < 366; 
}

function podeSeMoverEsq(){
  return xAtor > 1; 
}

function podeSeMoverDir(){
  return xAtor < 469;
}









