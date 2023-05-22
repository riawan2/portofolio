// event pada saat link diklik
$('.page-scrool').on('click', function(e){
	// ambil isi href
var tujuan = $(this).attr('tujuan');
//tangkap elemen ybs
var elementujuan = $(tujuan);
//pindahkan scrool
$('body').animate({
	scrollTop: elementujuan.offset().top
}, 1250);
e.preventDefault();
});
//parallax
$(window).scroll(function(){
	var wscroll = $(this).scrollTop();
	//jumbotron
$('.jumbotron img').css({
	'transform' : 'translate(0px, '+ wscroll/4 +'%)'
});
$('.jumbotron h1').css({
	'transform' : 'translate(0px, '+ wscroll/2 +'%)'
});
$('.jumbotron p').css({
	'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
});
//portfolio
if(wscroll > $('.portfolio').offset().top - 250){
$('.portfolio .thumbnail').addclass('muncul');
}
});