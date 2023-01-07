// mostrar contenedor de trabajos
document.querySelector('#proyectos').addEventListener('click', (e) => {
	const h4 = document.querySelectorAll('.proyecto_content a .h4')
	if(e.target.classList.contains('h4')){
		e.preventDefault()
		document.querySelector('.ver_trabajo').classList.add('con_principal2')
		Evento(e.target,h4)
		document.querySelector('.navbar1').style.transform = 'translateY(-2.5rem)'
		setTimeout(function(){
			document.querySelector('.navbar2').style.transform = 'translateY(0)'
		},500)
	}
})

function Evento(e,h4){
	switch(e){
		case h4[0]: Mostrar(
			'company2',
			'Primer trabajo',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#',
			 );
		break
		case h4[1]: Mostrar(
			'company',
			'Segundo trabajo',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[2]: Mostrar(
			'company2',
			'tercer trabajo',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[3]: Mostrar(
			'company2',
			'jesus',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[4]: Mostrar(
			'company2',
			'jesus',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[5]: Mostrar(
			'company2',
			'jesus',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[6]: Mostrar(
			'company2',
			'jesus',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
		case h4[7]: Mostrar(
			'company2',
			'jesus',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam natus reprehenderit veritatis nulla qui aliquid libero, quidem dolorem quasi!',
			'<img src="img/html1.png" alt=""><img src="img/css1.png" alt=""><img src="img/javascript1.png" alt="">',
			'#' ); 
		break
	}
}

function Mostrar(trabajo,h1,p,img,a){
	document.querySelector('.con_principal').innerHTML = `
		<div class="con_secundario">
			<div class="con_container">
				<div>
					<img class="con_img" src="img/${trabajo}.png" alt="">
				</div>
				<div>
					<h2 class="con_h2">${h1}</h2>
					<p>${p}.</p>
					<div class="con_lenguages">
						${img}
					</div>
					<div class="neon">
						<a href="${a}" class="btn_neon">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							visitar pagina
						</a>
					</div>
				</div>
			</div>
		</div>`
}

document.querySelector('.close_tarbajo').addEventListener('click', (e) => {
		document.querySelector('.con_principal').style.opacity = '0'
		document.querySelector('.navbar2').style.transform = 'translateY(-2.5rem)'
		setTimeout(function(){
			document.querySelector('.navbar1').style.transform = 'translateY(0)'
			document.querySelector('.con_principal').style.opacity = '1'
			document.querySelector('.ver_trabajo').classList.remove('con_principal2')
		},500)
})