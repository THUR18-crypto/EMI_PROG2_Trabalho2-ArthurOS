class Time{
    constructor(nome, estado, categoria, anoFundacao){
    //ideia: adicionar atributo thumb(imagem de capa)
        this.nome = nome;
        this.estado = estado;
        this.categoria = categoria;
        this.anoFundacao = anoFundacao;
    }
    toString(){
        return ` ${this.nome}`
    }
    exibirDados(){
        return super.toString()+`, Estado: ${this.estado} - Categoria: ${this.categoria} - : ${this.anoFundacao}`
    }
}
class Jogador{
    constructor(nome, idade, genero, posicao, altura, nacionalidade, maoDominante, Time){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero
        this.posicao = posicao;
        this.altura = altura;
        this.nacionalidade = nacionalidade;
        this.maoDom = maoDominante;
        this.time = Time;
    }
    toString(){
        return `${this.nome}(${this.altura}) Posição: ${this.posicao} - Nacionalidade: ${this.nacionalidade} - Time: ${this.time}`
    }
    exibirDados(){
        return super.toString()+` Mão Dominante: ${this.maoDom}, Gênero: ${this.genero}`
    }
}