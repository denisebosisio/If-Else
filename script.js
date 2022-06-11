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

let letraInicial = "D";
if(letraInicial == "R"){
    console.log(true);
}else{
    console.log(false);
}

let nome = "Denise";
let numeroLetras = 6;
if((numeroLetras >= 6) || nome == "E"){
    console.log(true);
}else{
    console.log(false);
}