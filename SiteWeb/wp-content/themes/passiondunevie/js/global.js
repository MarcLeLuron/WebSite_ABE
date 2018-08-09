$(document).ready(function(){

	/* Gestion du diaporama */
	var diapo = setInterval(function(){nextImg()},5000);

	function nextImg() {
		var totalItem = $("div.vignette img.mini").length;
		var currentId = parseInt($('div.vignette img.mini.actif').attr('id').substring(3));
		if(currentId < totalItem)
			activeImg(currentId+1);
		else
			activeImg(1);
	}

	function activeImg(id){
		var newsrc = $('img#id-'+id).attr('src');
		var newdesc = $('img#id-'+id).attr('alt');
		$('div.vignette img').removeClass('actif');
		$('img#id-'+id).addClass('actif');
        $("div#uniqueimg img.full-img").fadeOut(250,function(){
        	$(this).attr('src',newsrc).fadeIn(250);
        });
		$('figcaption#txt').html(newdesc);
	}

	function resetTimer(){
		clearInterval(diapo);   
        diapo = setInterval(function(){nextImg()},5000);
	}
	
	/* --------------  Gestion des vignettes ----------------------- */
	$('div.vignette img').on('click',function(){
		resetTimer();
		if(!$(this).hasClass('actif'))
		{
			var currentId = parseInt($(this).attr('id').substring(3));
			activeImg(currentId);
		}

	});

	$("#drop-nav").change( function() {
            document.location.href =  $(this).val();
            //alert($(this).val());
    });

	/* Liens réseau sociaux */
    $('div#sociaux div.facebook').on('click',function(){
    	$(location).attr('href',"https://www.facebook.com/pg/passiondunevie/");
    });

    /* ------------- Gestion de l'alignement vertical ----------------- */

	// Désactivé et remplacé par une valeur fixe (40px) 
	/*
	$("img.full-img").one('load', function() {
  		// Quand la hauteur du body est chargé
  		resize();
  		
	}).each(function() {
	  if(this.complete) $(this).load();
	});

	// Quand la fenêtre est redimentionné
	$(window).resize(function(){
		resize();
	});

	function resize(){
		var b_height = $('body').height();
  		var w_height = $(window).height();
  		if(w_height > b_height+120)
  			var margin = (w_height-b_height)/2-30;
  		else
  			var margin = 30;
  		$('body').css('margin-top',margin);
	}
	*/

})