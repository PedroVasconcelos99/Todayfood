var botaoMenu = document.querySelector("#menu-mobile")
var menuMobile = document.querySelector("#main-header nav") 

botaoMenu.addEventListener("click", mostraMenu);

function mostraMenu() {
   menuMobile.classList.toggle("aberto");
   botaoMenu.classList.toggle("menu-aberto");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////script para os cards de receita


var arrReceita = [
	{
		foto: "images/bolo.jpg",
		nome: "Bolo de laranja",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis vestibulum mauris sed condimentum.",
		link: "receita.html",
	},
	{
		foto: "images/carne.jpg",
		nome: "Bife de Chorizo",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis vestibulum mauris sed condimentum.",
		link: "receita.html",
	},
	{
		foto: "images/risoto.jpg",
		nome: "Rizoto de Frango",
		descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis vestibulum mauris sed condimentum.",
		link: "receita.html",
	}

]



var containerCard = document.querySelector("div .receitas-container")



for(var i = 0; i < arrReceita.length; i++) {
	// var receitaHtml = '<div class="receita">';
	// 	receitaHtml += '<figure>';
	// 	receitaHtml += '<img src="' + arrReceita[i].foto + '">';
	// 	receitaHtml += '<figcaption>' + arrReceita[i].nome +  '</figcaption>';
	// 	receitaHtml += '</figure>';
	// 	receitaHtml += '<p>' + arrReceita[i].descricao+ '</p>';
	// 	receitaHtml += '<a class="button primary" href="' + arrReceita[i].link + '">confira</a>';
	// 	receitaHtml += '</div>';

		var receitaHtml = 	'<div class="receita">' +
							'<figure>' +
							'<img src="' + arrReceita[i].foto + '">' + 
							'<figcaption>' + arrReceita[i].nome +  '</figcaption>' + 
							'</figure>' + 
							'<p>' + arrReceita[i].descricao+ '</p>' +
							'<a class="button primary" href="' + arrReceita[i].link + '">confira</a>' +
							'</div>';

	containerCard.innerHTML += receitaHtml;
}
console.log(containerCard)

////////////////////////////script para o slider

$('.slider').slick({
	arrows: false,
	dots: true,
	fade: true,
	autoplay: true,
	autoplaySpeed: 4000,
	cssEase: 'linear'
})
                            
                        