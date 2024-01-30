// Depos de declarar o tipo de variavel e o nome dela: Se lê isso que escrevemos assim: Recupere o elemento a partir do id dele, dentro do parenteses informa o id. Pode ser pela classe tambem.

const botaoPlayPause = document.getElementById('play-pause');

const botaoAvancar = document.getElementById('proximo');

const botaoVoltar = document.getElementById('anterior');

const audioCapitulo = document.getElementById('audio-capitulo');

const nomeCapitulo = document.getElementById('capitulo');

// Usa const se for constante ou let, como o numero de capitulos não vai mudar, usamos const

const numeroCapitulos = 10;


// Se não tiver tocando deixo no 0 se tiver tocando 1, e o let pode mudar então botamos ele. Uma hora ela vai ta pausada outra hora vai ta tocando. E agora ele tem que saber quando a musica ta tocando e quando a musica ta pausada, e temos que informar isso a ele.

let taTocando = 0;
// Nossa faixa começa na faixa 1.
let capituloAtual = 1;

// Função é criar uma funcionalidade, e podemos adicionar uma informação a mais tambem dentro do parenteses, mas nesse caso não. A Função é seguida de uma ação que podemos nomear, seguido de um parenteses e um colchete, dentro desse colchete vai a nossa classe ou id seguido de um ponto, a ação no caso play e um colchete. function tocarFaixa() {audioCapitulo.Play()}; Sempre que for executar uma ação voce vai abrir e fechar parenteses. E botamos para substituir o botão assim que clicar para tocar.

function tocarFaixa() {
    audioCapitulo.play(); 
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

// Agora o pause, e tambem substituimos o icone novamente quando clicar para pausar. so invertemos a ordem do remove e do add anterior.

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

//Ta tocando a musica? Se não tiver tocando faça tal coisa caso não faça essa outra coisa.

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa()
        taTocando = 1;
    }
     else {
        pausarFaixa();
        taTocando = 0;    
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual; 
}

// Caso ele esteja no ultimo capitulo a proxima faixa volta para a primeira, e caso não ele so avança mais um episodio.
function proximaFaixa() {
    if(capituloAtual === numeroCapitulos) {
    capituloAtual = 1;} 
     else {
        capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = "./books/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}      


function voltarFaixa() { 
    if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;} 
     else {
        capituloAtual = capituloAtual - 1;
    }

    //Aqui ele faz a troca de faixa. O nome das faixas so muda um numero.

    audioCapitulo.src = "./books/" + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}    


// Agora oque faltou: para executar o botão quando o botão for clicado, adicione a esse botão a capacidade de escutar o evento, que evento? Vamos declarar isso no parenteses. Dentro do parenteses vai o 'click', e ele responde executando o TocarFaixa ou tocarOuPausar
 

botaoPlayPause.addEventListener('click', tocarOuPausar); 

// Dentro do parenteses é qual evento (click)

botaoAvancar.addEventListener('click', proximaFaixa);

botaoVoltar.addEventListener('click', voltarFaixa);