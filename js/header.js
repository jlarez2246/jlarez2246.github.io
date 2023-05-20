let contenido = 'Front end developer'
let mostrar = ''
let estado = 1

setTimeout(function(){
	setInterval(function(){
		let h2 = document.querySelector('#h2').innerHTML
		if(estado === 1){
			mostrar = h2.slice(0,-1)
			document.querySelector('#h2').innerHTML = mostrar
			if (mostrar.length === 0){
				setTimeout(function(){
					estado = 2
				},1000)
			}
		}
		if(estado === 2 && contenido[h2.length] !== undefined){
			h2 += contenido[h2.length]
			document.querySelector('#h2').innerHTML = h2
			if(h2 === contenido){
				setTimeout(function(){
					estado = 1
				},2500)
			}
		}
	},100)
},2000)