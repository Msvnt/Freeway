//imagens

var imagemDaEstrada;
var imagemDoAtor;
var imagemDoCarro;
var imagemDoCarro2;
var imagemDoCarro3;

//sons
var somDaTrilha;
var somDaColisao;
var somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
}