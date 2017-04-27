var res = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
  ];
  

res.forEach(function(element){cajita.innerHTML += "<li>" + element.title + "</li>";})

function botonFuncional() {
	var input = document.getElementById('nuevo').value;
	var informacion = document.getElementsByClassName('anadir-tarea');
	informacion[0].innerHTML += "<li>" + input + "</li>";
}

function Identificador(userId, id, title, completed) {
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;

	this.userId = function(){
		var usuario = 1;
		return usuario;
	}

	this.id = function(){
		var num = this.id;
		return num;
	}

	this.title = function(){
		var tit = document.getElementsByClassName('anadir-tarea').value;
		return tit;
	}

	this.completed = function(){
		var comp = false;
		return comp;
	}
}

var sumarObjeto = new Identificador(this.userId, this.id, this.title, this.completed);
res.push(sumarObjeto);

