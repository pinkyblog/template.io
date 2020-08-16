$(document).ready(function (event) {

	/*counter attack*/
	var counting = true;
		$(window).scroll(function(){
			var objtop = $('#counter_attack').offset().top - window.innerHeight;
			if(counting == true && $(window).scrollTop() > objtop){

					$(".count").each(function(){
					var $this = $(this),
					countTo = $this.attr('data-count');

				$({ countName: $this.text()}).animate({
					countNum: countTo
				},
				{
					duration: 4000,
					easing: 'swing',
					step: function(){
						$this.text(Math.floor(this.countNum));
					},
					complete: function(){
						$this.text(this.countNum);
					}
				})
				}); /*each end*/
			counting = false;
			}

		});
	/*counter attack end*/


	/*Scroll to top function*/	
	$("#totop").click(function () {
		$("html, body").animate({scrollTop:0}, 1500)
	});
	
	$(window).scroll(function (event) {
		if($(this).scrollTop() > 300){
			$("#totop").fadeIn();
		}
		else{
			$("#totop").fadeOut();
		}
	});
	/*scroll to top end*/
});