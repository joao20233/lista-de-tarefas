    // CRIANDO UM CONTADOR
let contador = 0;        
    
    // RECUPERANDO O HTML
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

    //CRIANDO UMA FUNCAO DE ADICIONAR
function addTarefa(){
    let valorInput = input.value;

    if((valorInput!=="") && (valorInput !== null) && (valorInput!==undefined)){

    ++contador;
        
    let novoitem = `<div id="${contador}" class="item">
   <div onclick = "marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div onclick = "marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button onclick = "deletar(${contador})" class="delete"><i class="mdi mdi-delete">deletar</i></button>
    </div>
</div>`;

    //ADICIONANDO ITEM NO MAIN
    main.innerHTML += novoitem;

    //ZERAR O INPUT
    input.value = "";
    input.focus();
}
}

function deletar(id){
    let tarefas = document.getElementById(id);
    tarefas.remove();

}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe== "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');

    }

}

    //COLOCANDO O BOTAO ENTER PARA FUNCIONAR
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})



/* USANDO O CONSOLE.LOG
btnAdd.addEventListener("click", function(e){
    e.preventDefault();

    const nome = document.getElementById("inputTarefas");

    const value = inputTarefas.value;

    console.log(value);
})
  */
 
