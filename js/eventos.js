
var botao=window.document.getElementById("botao");
var ul_menu=window.document.getElementById("ul-menu");
var contato=window.document.getElementById("contato");
var sobre=window.document.getElementById("sobre");

botao.addEventListener('click',function(){
   if(ul_menu.classList.contains("mostrar-menu")){
      ul_menu.classList.remove("mostrar-menu");
      botao.src="img/menu.png";
   }else{
   	ul_menu.classList.add("mostrar-menu");
   	botao.src="img/closemenu.png";
   }
});

var home=window.document.getElementById("home");
var blog=window.document.getElementById("blog");

home.addEventListener('click',function(){
	home.classList.add("manter");
	blog.classList.remove("manter");
	contato.classList.remove("manter");
	sobre.classList.remove("manter");
});

blog.addEventListener('click',function(){
	blog.classList.add("manter");
	home.classList.remove("manter");
	contato.classList.remove("manter");
	sobre.classList.remove("manter");

});
contato.addEventListener('click',function(){
	blog.classList.remove("manter");
	home.classList.remove("manter");
	contato.classList.add("manter");
	sobre.classList.remove("manter");

});
sobre.addEventListener('click',function(){
	blog.classList.remove("manter");
	home.classList.remove("manter");
	contato.classList.remove("manter");
	sobre.classList.add("manter");

});

