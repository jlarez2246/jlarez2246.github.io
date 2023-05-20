const proyectos = document.querySelector('#portafolio')
const navbar = document.querySelector('.nav')

const elementos = document.querySelectorAll('.oculto')

window.addEventListener('scroll', (e) => {
	let pantalla = window.innerHeight
	let ubicacionObjeto = proyectos.getBoundingClientRect().top

	const mostrar = [];
	const ocultar = [];

	elementos.forEach(oculto => {
		mostrar.push(oculto.getBoundingClientRect().bottom)
		ocultar.push(oculto.getBoundingClientRect().top)
	})

	for(let i = 0; i < elementos.length; i++){
		if(mostrar[i] <= pantalla){
			elementos[i].classList.add('visible')
		}
		else if(ocultar[elementos.length-2] <= pantalla/2){
			elementos[elementos.length-2].classList.add('visible')
		}
		else if(ocultar[i] > pantalla){
			elementos[i].classList.remove('visible')
		}
	}

	ubicacionObjeto <= 36 ? navbar.classList.add ('navbar-animado') : navbar.classList.remove ('navbar-animado')
})