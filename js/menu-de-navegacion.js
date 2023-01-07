const icon_menu = document.querySelectorAll('.icon_menu')
document.querySelector('.menu_btn').addEventListener('click', (e) => {
	if(e.target.classList.contains('icon_menu')){
		if(icon_menu[0].style.opacity !== '0'){
			icon_menu[0].style.opacity = '0'
			icon_menu[1].style.opacity = '1'
		}
		else{
			icon_menu[0].style.opacity = '1'
			icon_menu[1].style.opacity = '0'
		}
		document.querySelector('.menu').classList.toggle('menu_active')
		document.querySelector('.menu_ul').classList.toggle('menu_active')
	}
})
document.querySelector('.menu_ul').addEventListener('click', (e) => {
	if(e.target.classList.contains('a')){
		icon_menu[0].style.opacity = '1'
		icon_menu[1].style.opacity = '0'

		document.querySelector('.menu').classList.remove('menu_active')
		document.querySelector('.menu_ul').classList.remove('menu_active')
	}
})


document.querySelector('#proyectos').addEventListener('click', (e) => {
	if(e.target.classList.contains('h4')){
		icon_menu[0].style.opacity = '1'
		icon_menu[1].style.opacity = '0'

		document.querySelector('.menu').classList.remove('menu_active')
		document.querySelector('.menu_ul').classList.remove('menu_active')
	}
})