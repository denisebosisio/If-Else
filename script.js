let idade = 20;
if(idade > 18){
    console.log("Você é maior de idade!")
}

const humano = true;
if((idade > 18) && (humano === true)){
    console.log(true)
}

let mesAniversario = "agosto";
if((mesAniversario === "janeiro") || (mesAniversario === "dezembro")){
    console.log(true);
}else{
    console.log(false);
}

let letraInicial = "Denise";
if(letraInicial.charAt(0) === "R"){
    console.log(true);
}else{
    console.log(false);
}

let nome = "Denise";
let sobrenome = "Bosisio";
if((sobrenome.length > 6) || (nome.charAt(0) === "E")){
    console.log(true);
}else{
    console.log(false);
}