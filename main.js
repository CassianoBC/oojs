function Develops(nome, idade, salario, skills) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
    this.skills = skills
}

function Senior(nome, idade, salario, skills) {
    Develops.call(this, nome, idade, salario, skills);
}

function Pleno(nome, idade, salario, skills) {
    Develops.call(this, nome, idade, salario, skills);
}

function Junior(nome, idade, salario, skills) {
    Develops.call(this, nome, idade, salario, skills);
}

const Rodrigo = new Senior("Rodrigo", 30, 15000, ["Java, Next.js, PHP, Python"]);
const Ana = new Pleno("Ana", 25, 5000, ["Java, Next.js, React"]);
const Joao = new Junior("João", 20, 2000, ["React, C#"]);

console.log(Rodrigo);
console.log(Ana); 
console.log(Joao);