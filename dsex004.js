function experiencia(anos){

    if(anos >= 0 && anos <= 1){
        console.log('Iniciante');
    }else if(anos > 1 && anos <=3){
        console.log('Intermédiario');
    }else if(anos > 3 && anos <= 6){
        console.log('Avançado');
    }else{
        console.log('Jedi Master');
    }    

}

var anosEstudo = 7;
experiencia(anosEstudo);

// de 0-1 ano: Iniciante
// de 1-3 anos : Intemediario
// de 3-6 anos: Avançado
// de 7 acima : Jedi Master