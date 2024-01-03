// Seleção de elementos
const multiplicationform = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

const  multiplicationtable = document.querySelector ("#multiplication-operations"
);
// Funções
const createTable  = (number, multiplicatorNumber) => {
    multiplicationtable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;
        
        const parser = new DOMParser();

        const htmltemplate = parser.parseFromString(template, "text/html");

        const row = htmltemplate.querySelector(".row")

        multiplicationtable.appendChild(row);
    }

};

// eventos
multiplicationform.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});