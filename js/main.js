

// Fiz a inicialização das bibliotecas e passei os parametros de animação 

// pegar elemento pelo id passar a string na variavel, passar velocidade da animação. e passar valor para deixar visivel ou não
// neste caso ficará visivel 
new TypeIt("#animate", {
    strings: " Especialista em HTML, CSS e JavaScript....",
    speed: 100,
    waitUntilVisible: true,
}).go();

// inicializando a biblioteca do AOS.

AOS.init()

// Alerta de formulário em construção ao clicar em enviar
function btnMsg(){
    alert("Em Construção!!")
}