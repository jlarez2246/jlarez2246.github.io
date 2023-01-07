// mostrar contenedor de trabajos
document.querySelector('body').addEventListener('click', (e) => {
	// const h4 = document.querySelectorAll('.proyecto_content a .h4')
	if(e.target.classList.contains('mail')){
		e.preventDefault()
		document.querySelector('.ver_mail').classList.add('con_principal2')
		// Evento(e.target,h4)
		document.querySelector('.navbar1').style.transform = 'translateY(-2.5rem)'
		setTimeout(function(){
			document.querySelector('.navbar2').style.transform = 'translateY(0)'
		},500)
	}
})

document.querySelector('.close_tarbajo').addEventListener('click', (e) => {
		document.querySelector('.con_principal').style.opacity = '0'
		document.querySelector('.navbar2').style.transform = 'translateY(-2.5rem)'
		setTimeout(function(){
			document.querySelector('.con_principal').style.transform = 'translateY(0)'
			document.querySelector('.con_principal').style.opacity = '1'
			document.querySelector('.ver_mail').classList.remove('con_principal2')
		},500)
})