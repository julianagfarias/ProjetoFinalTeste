function insere(){
	let cod = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let tit = document.forms["cadastrar"]["titulo"].value;
	let dir = document.forms["cadastrar"]["diretor"].value;
	let gen = document.forms["cadastrar"]["radio"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${cod}</th>`;
	inserir.innerHTML += `<td>${tit}</td>`;
	inserir.innerHTML += `<td>${dir}</td>`;
	inserir.innerHTML += `<td>${data}</td>`;
	inserir.innerHTML += `<td>${gen}</td>`;
	inserir.innerHTML += `<td>${ator}</td>`;
	inserir.innerHTML += `<td>${nota}</td>`;
}


function validarForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;

	if(validaCod == ""){
		window.alert("O código deve ser preenchido!");
		return false;
	}

	let validaData = document.forms["cadastrar"]["data"].value;

	if(validaData == ""){
		window.alert("A data deve ser preenchida!");
		return false;
	}

	let validaTitulo = document.forms["cadastrar"]["titulo"].value;

	if(validaTitulo == ""){
		window.alert("O título deve ser preenchido!");
		return false;
	}
	
	let validaDir = document.forms["cadastrar"]["diretor"].value;

	if(validaDir == ""){
		window.alert("O diretor deve ser preenchido!");
		return false;
	}

	let validaGen = document.forms["cadastrar"]["radio"].value;

	if(validaGen == ""){
		window.alert("O gênero deve ser preenchido!");
		return false;
	}

	let validaAtor = document.forms["cadastrar"]["ator"].value;

	if(validaAtor == ""){
		window.alert("O ator/atriz principal deve ser preenchido!");
		return false;
	}

	let validaNota = document.forms["cadastrar"]["nota"].value;

	if(validaNota == ""){
		window.alert("A nota IMDb deve ser preenchida!");
		return false;
	}
}