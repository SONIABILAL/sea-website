console.log("hello")



console.log("hello")

function choose_Animal(id){
	if(id !=="card"){
		
			$(".card").css("display","none");
			$("."+id).css("display","block");
			$(".filter-active").removeClass("filter-active");
			$("#"+id).addClass("filter-active");
}
			else{
				$(".card").css("dispaly","block");
				$(".filter-active").removeClass(".filter-active");
				$("#"+id).addClass("filter-active");
			
		}
	}
