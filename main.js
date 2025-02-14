const ingressos = [];

function addRedBorder(id) {
    element = document.querySelector(`#${id}`);
    element.style.border = "5px solid red";
}

function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
    document.addEventListener('keydown', (Event) => {
        var name = Event.key;
        var code = Event.code;
        //alert the key name and key code on keydown
        alert(`Tecla Pressionada ${name} \r\n Key code value: ${code}`);
    }, false);
}

function addKeyboardEventListeners()
{
    document.addEventListener('keydown', 
        (Event) => {
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");


        var code = Event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");

        }
        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");

        }
        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");

        }
        if(code == 'Digit4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");

        }
    }, false
);
}
 selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

 showSelectedCards = () =>
{
    if(ingressos.length > 0) alert("ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();