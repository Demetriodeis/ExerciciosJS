function temHabilidade(skills){
    skills.indexOf("Javascript") === -1 ?  console.log(false) :  console.log(true);
}

var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false