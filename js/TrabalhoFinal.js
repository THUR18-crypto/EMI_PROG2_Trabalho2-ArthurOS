let listaTimes = JSON.parse(localStorage.getItem("lista-times")) || [];

if (listaTimes.length > 0) {
    listaTimes = listaTimes.map(t => new Time(t.nome, t.estado, t.categoria, t.anoFundacao));
} else {
    let t1 = new Time("Minas Tênis Clube", "MG", "Masculino", "1935");
    let t2 = new Time("Sada Cruzeiro", "MG", "Masculino", "2006");
    let t3 = new Time("Joinville Vôlei", "SC", "Masculino", "2022");
    listaTimes.push(t1);
    listaTimes.push(t2);
    listaTimes.push(t3);
    localStorage.setItem("lista-times", JSON.stringify(listaTimes));
}

let listaJogadores = JSON.parse(localStorage.getItem("lista-jogadores")) || []
if (listaJogadores.length > 0) {
    listaJogadores = listaJogadores.map(j => new Jogador(
        j.nome,
        j.idade,
        j.genero,
        j.posicao,
        j.altura,
        j.nacionalidade,
        j.maoDominante,
        j.Time )
        // Encontra o objeto 'Time' correspondente na listaTimes já re-hidratada
        // Isso é crucial, pois j.timeJogador também é um objeto genérico
        // Recria a instância de Jogador
        // Ajuste os parâmetros se a ordem no construtor for diferente
        // Passa a instância de Time, e não o objeto genérico
        );
    };




window.onload = function () {
    CarregarTimes();
    Carregar();
};



function CarregarTimes() {
    const select = document.getElementById("timeJogador");
    select.innerHTML = ""; // limpa opções antigas

    for (let i = 0; i < listaTimes.length; i++) {
        let disc = listaTimes[i];
        let opt = document.createElement("option");
        opt.value = i;  
        opt.innerHTML = disc.toString();     
        select.appendChild(opt);
    }

    const ulTime = document.getElementById("listaTimes");
    ulTime.innerHTML = "";
    for (let i = 0; i < listaTimes.length; i++) {
        let time = listaTimes[i];
        let li = document.createElement("li");
        li.innerHTML = time.toString();
        ulTime.appendChild(li);
    }
    //fazer a mesma coisa com o jogador
}

// --- Event Listeners ---
// Adiciona um listener para a ação do botão de id btnAddTarefa. 
// A função 'cadastrarTarefa' será chamada.
document.getElementById("btnAddJogador").addEventListener("click", cadastrarJogador);
document.getElementById("btnAddTime").addEventListener("click", cadastrarTime);
// --- Funções ---

function cadastrarTime(evento){
    evento.preventDefault();

    
    let nomeTime = document.getElementById('nomeTime').value;
    let estadoTime = document.getElementById('estadoTime').value;
    let catTime = document.getElementById('categoria').value;
    let anoFundacao = document.getElementById('AnoFundacao').value;

    let NovoTime = new Time(nomeTime, estadoTime, catTime, anoFundacao)
    listaTimes.push(NovoTime)

    CarregarTimes();
}


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
    let nacionalidade = document.getElementById("nacionalidadeJogador").value
    let maoDominante = document.getElementById("maoDomJogador").value

    let time_index = parseInt(document.getElementById("timeJogador").value);
    let timeJogador = listaTimes[time_index];

    let Atleta = new Jogador(nome, genero, idade, posicao, altura, nacionalidade, maoDominante, timeJogador);



    listaJogadores.push(Atleta);
    localStorage.setItem("lista-jogadores", JSON.stringify(listaJogadores));


    Carregar();
}

function Carregar() {
    // #TODO: 5. Implemente a lógica para mostrar as tarefas na tela.
    // a. Pegue o elemento 'ulTarefas' do HTML.
    const ulJogadores = document.getElementById("ulLista");
    const ulTimes = document.getElementById("ulTeam");


    ulJogadores.innerHTML = "";
    ulTimes.innerHTML = "";

    for (let i = 0; i < listaJogadores.length; i++) {
        let liAtleta = document.createElement("li");
        
        liAtleta.innerHTML = listaJogadores[i];
    }

        for (let i = 0; i < listaTimes.length; i++) {
            let liTime = document.createElement("li");
            
            liTime.innerHTML = listaTimes[i];
        

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
function removerJogador(indice) {
    // #TODO: 6. Implemente a lógica para remover uma tarefa.
    // a. Use o método 'splice' para remover o item do array 'listaTarefas' no índice recebido.
    listaJogadores.splice(indice, 1);
    localStorage.setItem("lista-jogadores", JSON.stringify(listaJogadores));
    // b. Chame a função 'carregarTarefas()' para atualizar a tela.
    Carregar();

}
