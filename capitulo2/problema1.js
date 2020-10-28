let free = false;

const validarCliente = (time)=>{
	let edad = prompt("¿Cual es tu edad?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free) {
			alert("podes pasar gratis por que sos la primera persona despues de las 2 am");
			free = true;
		}else {
			alert(`son las ${time}:00Hs podes pasar, pero tenes que pagar la entrada`);
		}
	}else {
		alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
	}
}


validarCliente(23);
validarCliente(24);
validarCliente(0.6);
validarCliente(21);
validarCliente(2.4);
validarCliente(2);
validarCliente(3);