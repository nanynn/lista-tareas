
function Identificador() {
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;
}

function botonFuncional() {
	var input = document.getElementById('nuevo').value;
	var informacion = document.getElementsByClassName('anadir-tarea');
	informacion[0].innerHTML += "<ul><li>" + input + "</li></ul>";
}


