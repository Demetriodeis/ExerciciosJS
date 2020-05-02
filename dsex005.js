var usuarios = [
    {
        nome : "Demétrio Pacheco",
        habilidades:["Javascript", "ReactJS", "Redux"]
    },
    {
        nome : "Gabriel",
        habilidades:["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function resultado(){
    for (const usuario of usuarios) {
        console.log(`O ${usuario.nome} possui habilidades: ${usuario.habilidades.join(', ')}`);
    }
};

resultado();