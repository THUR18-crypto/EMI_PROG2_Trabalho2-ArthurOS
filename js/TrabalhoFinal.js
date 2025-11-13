let listaJogadores = []

let listaTimes = []
let t1 = new Time("Minas Tênis Clube","MG","Masculino","1935");
let t2 = new Time("Sada Cruzeiro","MG","Masculino","2006");
let t3 = new Time("Joinville","SC","Masculino","2022");
listaTimes.push(t1);
listaTimes.push(t2);
listaTimes.push(t3);

window.onload = function() {
    CarregarTimes();
};



function CarregarTimes() {
    const select = document.getElementById("timeJogador");
    select.innerHTML = ""; // limpa opções antigas

    for(let i = 0; i<listaTimes.length; i++){
        let disc = listaTimes[i];
        let opt = document.createElement("option");
        opt.value = i;   // Prog2, BD, SO
        opt.innerHTML = disc.toString();      // Programação 2, Banco de Dados, ...
        select.appendChild(opt);
    }
}

// --- Event Listeners ---
// Adiciona um listener para a ação do botão de id btnAddTarefa. 
// A função 'cadastrarTarefa' será chamada.
document.getElementById("btnAddJogador").addEventListener("click", cadastrarJogador);

// --- Funções ---

function cadastrarJogador(evento) {
    // #TODO: 4. Implemente a lógica para cadastrar uma tarefa.
    // método 'preventDefault()' do evento, usado form no HTML evitar que a página recarregue.
    evento.preventDefault();

    // a. Pegue os valores dos campos do formulário (nome, descricao, data).
    let nome = document.getElementById("nomeJogador").value;
    let genero = document.getElementById("generoJogador").value;
    let idade = document.getElementById("idadeJogador").value;
    let posicao = document.getElementById("posicaoJogador").value;
    let altura = document.getElementById("alturaJogador").value;
    let nacionalidade = document.getElementById("nacionalidadeJogador")
    let maoDominante = document.getElementById("maoDomJogador")

    let time_index = parseInt(document.getElementById("timeJogador").value);
    let timeJogador = listaTimes[time_index];
   
        // 2 . criar objeto do tipo TarefaEscolar
        let Atleta = new Jogador(nome, genero, idade, posicao, altura, nacionalidade, maoDominante,timeJogador);


    

    // b. Adicione o objeto criado ao array 'listaTarefas'.
    listaJogadores.push(Atleta);

    // c. Chame a função 'carregarTarefas()' para atualizar a lista na tela.
    Carregar();
    // Limpando o formulário usando 'reset()'.
    document.getElementById("formTarefa").reset();
}

function Carregar() {
    // #TODO: 5. Implemente a lógica para mostrar as tarefas na tela.
    // a. Pegue o elemento 'ulTarefas' do HTML.
    const ulJogadores = document.getElementById("ulLista");


    // b. Limpe o conteúdo atual da lista (innerHTML = "").
    ulJogadores.innerHTML = "";
    
    // c. Faça um laço (for) para percorrer o array 'listaTarefas'.
    for (let i = 0; i < listaJogadores.length; i++) {
        // d. Para cada objeto 'tarefa' no array:
        //    i. Crie um elemento 'li' (document.createElement).
        let liAtleta = document.createElement("li");
        
        //    ii. Defina o innerHTML do 'li' com o resultado do método 'toString()' da tarefa.
        liAtleta.innerHTML = listaJogadores[i];

        //    iii. Crie um botão de remover.
        let btnRemover = document.createElement("button");
        btnRemover.innerHTML = "Remover";
        
        //    iv. Adicione um atributo 'onclick' ao botão que chame a função 'removerTarefa(i)'.
        btnRemover.setAttribute("onclick", `removerJogador(${i})`);

        //    v. Adicione o botão ao 'li' e o 'li' à lista 'ul'.
        liAtleta.appendChild(btnRemover); 


        // Desafio para dia 18-09 --> Incluir item na lista específica: Escolar ou Genérica
            ulJogadores.appendChild(liAtleta);

    }
}

function removerTarefa(indice) {
    // #TODO: 6. Implemente a lógica para remover uma tarefa.
    // a. Use o método 'splice' para remover o item do array 'listaTarefas' no índice recebido.
    listaJogadores.splice(indice, 1);
    // b. Chame a função 'carregarTarefas()' para atualizar a tela.
    Carregar();
    
}
