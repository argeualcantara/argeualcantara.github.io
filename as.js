var pessoas = [];
//[{"nome":"Argeu","preferencias":"","escolhido":false},{"nome":"Jean","preferencias":"","escolhido":false},{"nome":"Thiago","preferencias":"","escolhido":false},{"nome":"Ch","preferencias":"","escolhido":false},{"nome":"Islandia","preferencias":"","escolhido":false},{"nome":"Isis","preferencias":"","escolhido":false},{"nome":"Ney","preferencias":"","escolhido":false},{"nome":"Karille","preferencias":"","escolhido":false}]
if(pessoas.length == 0){
	var pessoasString = prompt("Cole aqui os dados");
	if(pessoasString){
		pessoas = JSON.parse(pessoasString);
		mostrarPessoas();
	}
}
var getValue = function(id){
	return document.getElementById(id).value;
};


function popularPessoas(){
	var pessoa = {"nome": getValue("nome"), "preferencias": getValue("preferencias"), "escolhido": false};
	pessoas[pessoas.length] = pessoa;
}

function mostrarPessoas(){
	for(var i = 0, length = pessoas.length; i < length; i++){
		document.getElementById("lista").innerHTML += "<li>"+pessoas[i].nome + " - " + pessoas[i].preferencias + "</li>";
	}
}

function salvarPessoas(){
	prompt("Copie e cole", JSON.stringify(pessoas));
}

function existeEscolha() {
	var existe = true;
	var arrayNaoEscolhido = [];
	for(var i = 0, length = pessoas.length; i < length; i++){
		if(!pessoas[i].escolhido) {
			arrayNaoEscolhido[arrayNaoEscolhido.length] = pessoas[i];
		}
	}
	if(arrayNaoEscolhido.length == 0){
		existe = false;
	}
	return existe;
}

function escolherPessoa(){
	var escolheu = false;
	var pos = 0;
	do {
		pos = Math.floor(Math.random() * (pessoas.length));
		if(!pessoas[pos].escolhido){
			escolheu = true;
			pessoas[pos].escolhido = true;
		}
		if(!existeEscolha()){ escolheu = true;}
	} while (!escolheu);
	if(!existeEscolha()){
		alert("Não existe mais ecolha");
	}else {
		alert(pessoas[pos].nome+" - "+pessoas[pos].preferencias);
	}
}
