var cs=0;
$(document).ready(
   function()
   {
     $("#window").css({"visibility":"visible"});
	 //gamae..........................................................................game..............game.......
	 $("#gametext").click(
	   function()
	   {
	    $(".game_left_circle").css({"opacity":"1"});
		$(".game_right_circle").css({"opacity":"1"});
	    document.getElementById("open").play();
	    $("#game").siblings().animate({top:"350px"});
		$("#game").css({"cursor":"default"});
		$("#game_aoe").css({"visibility":"hidden"});
		$("#about_aoe").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rules").css({"visibility":"hidden"});
		$("#aoe_rule_nav").css({"visibility":"hidden"});
		$("#aoe_contact").css({"visibility":"hidden"});
		$("#about_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#rule_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#contact_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		
		$("#game_nfs").css({"visibility":"hidden"});
		$("#about_nfs").css({"visibility":"hidden"});
		$("#nfs_rule_1").css({"visibility":"hidden"});
		$("#nfs_rules").css({"visibility":"hidden"});
		$("#nfs_rule_nav").css({"visibility":"hidden"});
		$("#nfs_contact").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#rule_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#contact_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		
		$("#game_fifa").css({"visibility":"hidden"});
		$("#about_fifa").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rule_4").css({"visibility":"hidden"});
		$("#fifa_rule_5").css({"visibility":"hidden"});
		$("#fifa_rules").css({"visibility":"hidden"});
		$("#fifa_rule_nav").css({"visibility":"hidden"});
		$("#fifa_contact").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#rule_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#contact_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		
		$("#game_cs").css({"visibility":"hidden"});
		$("#about_cs").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_4").css({"visibility":"hidden"});
		$("#cs_rules").css({"visibility":"hidden"});
		$("#cs_rule_nav").css({"visibility":"hidden"});
		$("#cs_contact").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#rule_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#contact_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		
		setTimeout(
		    function()
			{
	         $("#game").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px","box-shadow":"0.1px 0.1px 150px red"});
		     $("#gamebg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#gametext").hide();
			 setTimeout(
			    function()
				{
		         $("#game .transback").css({"visibility":"visible"});
				 $(".game_events").css({"visibility":"visible"});
				 $("#game_events_left").animate({"left":"-150px"});
				 $("#game_events_right").animate({"right":"-150px"});
				 $("#game .close").css({"visibility":"visible"});
				 setTimeout
				 (
				  function()
				  {
				   $("#about_game").css({"visibility":"visible"});
				   $("#about_game").css({"-webkit-transform":"scale(1,1)"});
				  }
				 ,10)
				}
			 ,500);
			},100);
	   }
	 );
	 
	 $("#game_left_cs").click(
	   function()
	   {
	    $(this).css({"opacity":"0.4"});
		$(this).siblings().css({"opacity":"1"});
		$(".game_right_circle").css({"opacity":"1"});
		
	    $("#game_aoe").css({"visibility":"hidden"});
		$("#about_aoe").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rules").css({"visibility":"hidden"});
		$("#aoe_rule_nav").css({"visibility":"hidden"});
		$("#aoe_contact").css({"visibility":"hidden"});
		$("#about_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#rule_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#contact_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		
		$("#game_nfs").css({"visibility":"hidden"});
		$("#about_nfs").css({"visibility":"hidden"});
		$("#nfs_rule_1").css({"visibility":"hidden"});
		$("#nfs_rules").css({"visibility":"hidden"});
		$("#nfs_rule_nav").css({"visibility":"hidden"});
		$("#nfs_contact").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#rule_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#contact_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		
		$("#game_fifa").css({"visibility":"hidden"});
		$("#about_fifa").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rule_4").css({"visibility":"hidden"});
		$("#fifa_rule_5").css({"visibility":"hidden"});
		$("#fifa_rules").css({"visibility":"hidden"});
		$("#fifa_rule_nav").css({"visibility":"hidden"});
		$("#fifa_contact").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#rule_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#contact_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		
		$("#hover_cs_about_btn").css({"visibility":"visible"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"visible"});
		$("#rule_cs_btn").css({"visibility":"visible"});
		$("#contact_cs_btn").css({"visibility":"visible"});
		$("#game_cs").css({"visibility":"visible"});
		$("#about_cs").css({"visibility":"visible"});
	    $("#about_game").css({"-webkit-transform":"scale(5,5)"});
		$("#cs_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_contact").css({"-webkit-transform":"scale(5,5)"});
		$("#about_cs").css({"-webkit-transform":"scale(1,1)"});
		$("#game_cs").css({"-webkit-transform":"scale(1,1)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#cs_rules").css({"visibility":"hidden"});
			$("#cs_rule_1").css({"visibility":"hidden"});
			$("#cs_rule_2").css({"visibility":"hidden"});
			$("#cs_rule_3").css({"visibility":"hidden"});
			$("#cs_rule_4").css({"visibility":"hidden"});
		    $("#cs_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#about_cs_btn").click(
	   function()
	   {
	    $("#hover_cs_about_btn").css({"visibility":"visible"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
	    $("#about_cs").css({"visibility":"visible"});
		$("#about_cs").css({"-webkit-transform":"scale(1,1)"});
		$("#cs_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_rules,#cs_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_contact").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#cs_contact").css({"visibility":"hidden"});
			$("#cs_rules").css({"visibility":"hidden"});
			$("#cs_rule_1").css({"visibility":"hidden"});
			$("#cs_rule_2").css({"visibility":"hidden"});
			$("#cs_rule_3").css({"visibility":"hidden"});
			$("#cs_rule_4").css({"visibility":"hidden"});
			$("#cs_rule_1").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#rule_cs_btn").click(
	   function()
	   {
	    $("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"visible"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
	    $("#cs_rule_nav").css({"visibility":"visible"});
	    $("#cs_rules").css({"visibility":"visible"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"visible"});
		$("#cs_rule_nav_1").css({"text-decoration": "underline","font-size":"23px"});
		$("#cs_rule_nav_1").siblings().css({"text-decoration": "none","font-size":"16px"});
		$("#about_cs").css({"-webkit-transform":"scale(5,5)"});
		$("#cs_rule_nav").css({"-webkit-transform":"scale(1,1)"});
		$("#cs_rules").css({"-webkit-transform":"scale(1,1)"});
		$("#cs_rule_1").css({"-webkit-transform":"scale(1,1)"});
		$("#cs_contact").css({"-webkit-transform":"scale(5,5)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#about_cs").css({"visibility":"hidden"});
			$("#cs_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#cs_rule_nav_1").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#cs_rule_1").css({"visibility":"visible"});
	    $("#cs_rule_1").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#cs_rule_nav_2").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#cs_rule_2").css({"visibility":"visible"});
	    $("#cs_rule_2").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#cs_rule_nav_3").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#cs_rule_3").css({"visibility":"visible"});
	    $("#cs_rule_3").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#cs_rule_nav_4").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#cs_rule_4").css({"visibility":"visible"});
	    $("#cs_rule_4").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#contact_cs_btn").click(
	   function()
	   {
	    $("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"visible"});
	    $("#cs_contact").css({"visibility":"visible"});
		$("#about_cs").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_rules,#cs_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#cs_contact").css({"-webkit-transform":"scale(1,1)"});
		$("#cs_rules").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#cs_rule_1").css({"visibility":"hidden"});
			$("#cs_rule_2").css({"visibility":"hidden"});
			$("#cs_rule_3").css({"visibility":"hidden"});
			$("#cs_rule_4").css({"visibility":"hidden"});
			$("#cs_rules").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#cs_rule_nav span:nth-child(1)").mouseenter
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(1)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(2)").mouseenter
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(2)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(3)").mouseenter
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(3)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(4)").mouseenter
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(4)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 
	 $("#cs_rule_nav span:nth-child(1)").mouseleave
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(1)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(2)").mouseleave
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(2)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(3)").mouseleave
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(3)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#cs_rule_nav span:nth-child(4)").mouseleave
	 (
	   function()
	   {
	    $("#cs_rule_nav span:nth-child(4)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
//aoe
$("#game_left_aoe").click(
	   function()
	   {
	    $(this).css({"opacity":"0.4"});
		$(this).siblings().css({"opacity":"1"});
		$(".game_right_circle").css({"opacity":"1"});
	    $("#game_cs").css({"visibility":"hidden"});
		$("#about_cs").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_4").css({"visibility":"hidden"});
		$("#cs_rules").css({"visibility":"hidden"});
		$("#cs_rule_nav").css({"visibility":"hidden"});
		$("#cs_contact").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#rule_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#contact_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		$("#game_cs_control").css({"visibility":"hidden"});
		
		$("#game_nfs").css({"visibility":"hidden"});
		$("#about_nfs").css({"visibility":"hidden"});
		$("#nfs_rule_1").css({"visibility":"hidden"});
		$("#nfs_rules").css({"visibility":"hidden"});
		$("#nfs_rule_nav").css({"visibility":"hidden"});
		$("#nfs_contact").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#rule_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#contact_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		
		$("#game_fifa").css({"visibility":"hidden"});
		$("#about_fifa").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rules").css({"visibility":"hidden"});
		$("#fifa_rule_nav").css({"visibility":"hidden"});
		$("#fifa_contact").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#rule_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#contact_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		
		$("#hover_aoe_about_btn").css({"visibility":"visible"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		$("#game_aoe").css({"visibility":"visible"});
		$("#about_aoe").css({"visibility":"visible"});
	    $("#about_game").css({"-webkit-transform":"scale(5,5)"});
		$("#aoe_rules,#aoe_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_contact").css({"-webkit-transform":"scale(5,5)"});
		$("#about_aoe").css({"-webkit-transform":"scale(1,1)"});
		$("#game_aoe").css({"-webkit-transform":"scale(1,1)"});
		$("#game_aoe_control").css({"visibility":"visible"});
		$("#about_aoe_btn").css({"visibility":"visible"});
		$("#rule_aoe_btn").css({"visibility":"visible"});
		$("#contact_aoe_btn").css({"visibility":"visible"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#aoe_rules").css({"visibility":"hidden"});
			$("#aoe_rule_1").css({"visibility":"hidden"});
			$("#aoe_rule_2").css({"visibility":"hidden"});
			$("#aoe_rule_3").css({"visibility":"hidden"});
			$("#aoe_rule_4").css({"visibility":"hidden"});
		    $("#aoe_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#about_aoe_btn").click(
	   function()
	   {
	    $("#hover_aoe_about_btn").css({"visibility":"visible"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
	    $("#about_aoe").css({"visibility":"visible"});
		$("#about_aoe").css({"-webkit-transform":"scale(1,1)"});
		$("#aoe_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_contact").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#aoe_contact").css({"visibility":"hidden"});
			$("#aoe_rules").css({"visibility":"hidden"});
			$("#aoe_rule_1").css({"visibility":"hidden"});
			$("#aoe_rule_2").css({"visibility":"hidden"});
			$("#aoe_rule_3").css({"visibility":"hidden"});
			$("#aoe_rule_4").css({"visibility":"hidden"});
			$("#aoe_rule_5").css({"visibility":"hidden"});
			$("#aoe_rule_nav").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#rule_aoe_btn").click(
	   function()
	   {
	    $("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"visible"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
	    $("#aoe_rule_nav").css({"visibility":"visible"});
	    $("#aoe_rules").css({"visibility":"visible"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"visible"});
		$("#aoe_rule_nav_1").css({"text-decoration": "underline","font-size":"23px"});
		$("#aoe_rule_nav_1").siblings().css({"text-decoration": "none","font-size":"16px"});
		$("#about_aoe").css({"-webkit-transform":"scale(5,5)"});
		$("#aoe_rule_nav").css({"-webkit-transform":"scale(1,1)"});
		$("#aoe_rules").css({"-webkit-transform":"scale(1,1)"});
		$("#aoe_rule_1").css({"-webkit-transform":"scale(1,1)"});
		$("#aoe_contact").css({"-webkit-transform":"scale(5,5)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#about_aoe").css({"visibility":"hidden"});
			$("#aoe_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#aoe_rule_nav_1").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#aoe_rule_1").css({"visibility":"visible"});
	    $("#aoe_rule_1").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#aoe_rule_nav_2").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#aoe_rule_2").css({"visibility":"visible"});
	    $("#aoe_rule_2").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#aoe_rule_nav_3").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#aoe_rule_3").css({"visibility":"visible"});
	    $("#aoe_rule_3").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#aoe_rule_nav_4").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#aoe_rule_4").css({"visibility":"visible"});
	    $("#aoe_rule_4").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#aoe_rule_nav_5").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#aoe_rule_5").css({"visibility":"visible"});
	    $("#aoe_rule_5").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#contact_aoe_btn").click(
	   function()
	   {
	    $("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"visible"});
	    $("#aoe_contact").css({"visibility":"visible"});
		$("#about_aoe").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#aoe_contact").css({"-webkit-transform":"scale(1,1)"});
		$("#aoe_rules").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#aoe_rule_1").css({"visibility":"hidden"});
			$("#aoe_rule_2").css({"visibility":"hidden"});
			$("#aoe_rule_3").css({"visibility":"hidden"});
			$("#aoe_rule_4").css({"visibility":"hidden"});
			$("#aoe_rule_5").css({"visibility":"hidden"});
			$("#aoe_rules").css({"visibility":"hidden"});
			$("#aoe_rule_nav").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#aoe_rule_nav span:nth-child(1)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(1)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(2)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(2)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(3)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(3)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(4)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(4)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(5)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(5)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 
	 
	 $("#aoe_rule_nav span:nth-child(1)").mouseleave
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(1)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(2)").mouseleave
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(2)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(3)").mouseleave
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(3)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(4)").mouseleave
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(4)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	  $("#aoe_rule_nav span:nth-child(5)").mouseleave
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(5)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
//  nfs
    $("#game_right_nfs").click(
	   function()
	   {
	   $(this).css({"opacity":"0.4"});
		$(this).siblings().css({"opacity":"1"});
		$(".game_left_circle").css({"opacity":"1"});
	    $("#game_aoe").css({"visibility":"hidden"});
		$("#about_aoe").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rules").css({"visibility":"hidden"});
		$("#aoe_rule_nav").css({"visibility":"hidden"});
		$("#aoe_contact").css({"visibility":"hidden"});
		$("#about_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#rule_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#contact_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		
		$("#game_fifa").css({"visibility":"hidden"});
		$("#about_fifa").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rule_4").css({"visibility":"hidden"});
		$("#fifa_rule_5").css({"visibility":"hidden"});
		$("#fifa_rules").css({"visibility":"hidden"});
		$("#fifa_rule_nav").css({"visibility":"hidden"});
		$("#fifa_contact").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#rule_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#contact_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		
		$("#game_cs").css({"visibility":"hidden"});
		$("#about_cs").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_4").css({"visibility":"hidden"});
		$("#cs_rules").css({"visibility":"hidden"});
		$("#cs_rule_nav").css({"visibility":"hidden"});
		$("#cs_contact").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#rule_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#contact_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		$("#game_cs_control").css({"visibility":"hidden"});
		
		$("#hover_nfs_about_btn").css({"visibility":"visible"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"visible"});
		$("#rule_nfs_btn").css({"visibility":"visible"});
		$("#contact_nfs_btn").css({"visibility":"visible"});
		$("#game_nfs").css({"visibility":"visible"});
		$("#game_nfs #about_nfs").css({"visibility":"visible"});
	    $("#about_game").css({"-webkit-transform":"scale(5,5)"});
		$("#nfs_rules,#nfs_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#nfs_contact").css({"-webkit-transform":"scale(5,5)"});
		$("#about_nfs").css({"-webkit-transform":"scale(1,1)"});
		$("#game_nfs").css({"-webkit-transform":"scale(1,1)"});
		$("#game_nfs_control").css({"visibility":"visible"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#nfs_rules").css({"visibility":"hidden"});
			$("#nfs_rule_1").css({"visibility":"hidden"});
			$("#nfs_rule_2").css({"visibility":"hidden"});
			$("#nfs_rule_3").css({"visibility":"hidden"});
			$("#nfs_rule_4").css({"visibility":"hidden"});
		    $("#nfs_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#about_nfs_btn").click(
	   function()
	   {
	    $("#hover_nfs_about_btn").css({"visibility":"visible"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
	    $("#about_nfs").css({"visibility":"visible"});
		$("#about_nfs").css({"-webkit-transform":"scale(1,1)"});
		$("#nfs_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#nfs_rules,#nfs_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#nfs_contact").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#nfs_contact").css({"visibility":"hidden"});
			$("#nfs_rules").css({"visibility":"hidden"});
			$("#nfs_rule_1").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#rule_nfs_btn").click(
	   function()
	   {
	    $("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"visible"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
	    $("#nfs_rule_nav").css({"visibility":"visible"});
	    $("#nfs_rules").css({"visibility":"visible"});
		$("#nfs_rule_1").css({"visibility":"visible"});
		$("#about_nfs").css({"-webkit-transform":"scale(5,5)"});
		$("#nfs_rule_nav").css({"-webkit-transform":"scale(1,1)"});
		$("#nfs_rules").css({"-webkit-transform":"scale(1,1)"});
		$("#nfs_rule_1").css({"-webkit-transform":"scale(1,1)"});
		$("#nfs_contact").css({"-webkit-transform":"scale(5,5)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#about_nfs").css({"visibility":"hidden"});
			$("#nfs_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#contact_nfs_btn").click(
	   function()
	   {
	    $("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"visible"});
	    $("#nfs_contact").css({"visibility":"visible"});
		$("#about_nfs").css({"-webkit-transform":"scale(6,6)"});
		$("#nfs_rules,#aoe_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#nfs_contact").css({"-webkit-transform":"scale(1,1)"});
		$("#nfs_rules").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#nfs_rule_1").css({"visibility":"hidden"});
			$("#nfs_rule_2").css({"visibility":"hidden"});
			$("#nfs_rule_3").css({"visibility":"hidden"});
			$("#nfs_rule_4").css({"visibility":"hidden"});
			$("#nfs_rules").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#nfs_rule_nav span:nth-child(1)").mouseenter
	 (
	   function()
	   {
	    $("#aoe_rule_nav span:nth-child(1)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#aoe_rule_nav span:nth-child(2)").mouseenter
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(2)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#nfs_rule_nav span:nth-child(3)").mouseenter
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(3)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#nfs_rule_nav span:nth-child(4)").mouseenter
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(4)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 
	 $("#nfs_rule_nav span:nth-child(1)").mouseleave
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(1)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#nfs_rule_nav span:nth-child(2)").mouseleave
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(2)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#nfs_rule_nav span:nth-child(3)").mouseleave
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(3)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#nfs_rule_nav span:nth-child(4)").mouseleave
	 (
	   function()
	   {
	    $("#nfs_rule_nav span:nth-child(4)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
//fifa
     
	 $("#game_right_fifa").click(
	   function()
	   {
	   $(this).css({"opacity":"0.4"});
		$(this).siblings().css({"opacity":"1"});
		$(".game_left_circle").css({"opacity":"1"});
	    $("#game_aoe").css({"visibility":"hidden"});
		$("#about_aoe").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rules").css({"visibility":"hidden"});
		$("#aoe_rule_nav").css({"visibility":"hidden"});
		$("#aoe_contact").css({"visibility":"hidden"});
		$("#about_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#rule_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#contact_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		
		$("#game_nfs").css({"visibility":"hidden"});
		$("#about_nfs").css({"visibility":"hidden"});
		$("#nfs_rule_1").css({"visibility":"hidden"});
		$("#nfs_rules").css({"visibility":"hidden"});
		$("#nfs_rule_nav").css({"visibility":"hidden"});
		$("#nfs_contact").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#rule_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#contact_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		
		$("#game_cs").css({"visibility":"hidden"});
		$("#about_cs").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_4").css({"visibility":"hidden"});
		$("#cs_rules").css({"visibility":"hidden"});
		$("#cs_rule_nav").css({"visibility":"hidden"});
		$("#cs_contact").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#rule_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#contact_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		
		
		$("#hover_fifa_about_btn").css({"visibility":"visible"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"visible"});
		$("#rule_fifa_btn").css({"visibility":"visible"});
		$("#contact_fifa_btn").css({"visibility":"visible"});
		$("#game_fifa").css({"visibility":"visible"});
		
		$("#about_fifa").css({"visibility":"visible"});
	    $("#about_game").css({"-webkit-transform":"scale(5,5)"});
		$("#fifa_rules,#fifa_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#fifa_contact").css({"-webkit-transform":"scale(5,5)"});
		$("#about_fifa").css({"-webkit-transform":"scale(1,1)"});
		$("#game_fifa").css({"-webkit-transform":"scale(1,1)"});
		$("#game_fifa_control").css({"visibility":"visible"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#fifa_rules").css({"visibility":"hidden"});
			$("#fifa_rule_1").css({"visibility":"hidden"});
			$("#fifa_rule_2").css({"visibility":"hidden"});
			$("#fifa_rule_3").css({"visibility":"hidden"});
		    $("#fifa_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#about_fifa_btn").click(
	   function()
	   {
	    $("#hover_fifa_about_btn").css({"visibility":"visible"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
	    $("#about_fifa").css({"visibility":"visible"});
		$("#about_fifa").css({"-webkit-transform":"scale(1,1)"});
		$("#fifa_rules").css({"-webkit-transform":"scale(6,6)"});
		$("#fifa_rules,#fifa_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#fifa_contact").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#fifa_contact").css({"visibility":"hidden"});
			$("#fifa_rules").css({"visibility":"hidden"});
			$("#fifa_rule_1").css({"visibility":"hidden"});
			$("#fifa_rule_2").css({"visibility":"hidden"});
			$("#fifa_rule_3").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#rule_fifa_btn").click(
	   function()
	   {
	    $("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"visible"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
	    $("#fifa_rule_nav").css({"visibility":"visible"});
	    $("#fifa_rules").css({"visibility":"visible"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"visible"});
		$("#fifa_rule_nav_1").css({"text-decoration": "underline","font-size":"23px"});
		$("#fifa_rule_nav_1").siblings().css({"text-decoration": "none","font-size":"16px"});
		$("#about_fifa").css({"-webkit-transform":"scale(5,5)"});
		$("#fifa_rule_nav").css({"-webkit-transform":"scale(1,1)"});
		$("#fifa_rules").css({"-webkit-transform":"scale(1,1)"});
		$("#fifa_rule_1").css({"-webkit-transform":"scale(1,1)"});
		$("#fifa_contact").css({"-webkit-transform":"scale(5,5)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#about_fifa").css({"visibility":"hidden"});
			$("#fifa_contact").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#fifa_rule_nav_1").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#fifa_rule_1").css({"visibility":"visible"});
	    $("#fifa_rule_1").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#fifa_rule_nav_2").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#fifa_rule_2").css({"visibility":"visible"});
	    $("#fifa_rule_2").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 $("#fifa_rule_nav_3").click(
	   function()
	   {
	    $(this).css({"text-decoration": "underline","font-size":"23px"});
		$(this).siblings().css({"text-decoration": "none","font-size":"16px"});
	    $("#fifa_rule_3").css({"visibility":"visible"});
	    $("#fifa_rule_3").siblings().css({"visibility":"hidden"});
	   }
	 );
	 
	 
	 $("#contact_fifa_btn").click(
	   function()
	   {
	    $("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"visible"});
	    $("#fifa_contact").css({"visibility":"visible"});
		$("#about_fifa").css({"-webkit-transform":"scale(6,6)"});
		$("#fifa_rules,#fifa_rule_1").css({"-webkit-transform":"scale(6,6)"});
		$("#fifa_contact").css({"-webkit-transform":"scale(1,1)"});
		$("#fifa_rules").css({"-webkit-transform":"scale(6,6)"});
		setTimeout
		(
		  function()
		  {
		    $("#about_game").css({"visibility":"hidden"});
			$("#fifa_rule_1").css({"visibility":"hidden"});
			$("#fifa_rule_2").css({"visibility":"hidden"});
			$("#fifa_rule_3").css({"visibility":"hidden"});
			$("#fifa_rule_4").css({"visibility":"hidden"});
			$("#fifa_rules").css({"visibility":"hidden"});
		  }
		,900);
	   }
	 );
	 
	 $("#fifa_rule_nav span:nth-child(1)").mouseenter
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(1)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(2)").mouseenter
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(2)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(3)").mouseenter
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(3)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(4)").mouseenter
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(4)").css({"color":"black","zoom":"1.08"});
	   }
	 );
	 
	 $("#fifa_rule_nav span:nth-child(1)").mouseleave
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(1)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(2)").mouseleave
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(2)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(3)").mouseleave
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(3)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 $("#fifa_rule_nav span:nth-child(4)").mouseleave
	 (
	   function()
	   {
	    $("#fifa_rule_nav span:nth-child(4)").css({"color":"rgb(40,40,40)","zoom":"1"});
	   }
	 );
	 
	 
	 $("#littext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#lit").siblings().animate({top:"350px"});
		$("#lit").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#lit").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
		     $("#litbg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#littext").hide();
			 setTimeout(
			    function()
				{
		         $("#lit .transback").css({"visibility":"visible"})
				 $(".lit_events").css({"visibility":"visible"});
				 $("#lit_events_left").animate({"left":"-150px"});
				 $("#lit_events_right").animate({"right":"-150px"});
				 $("#lit_close").css({"visibility":"visible"});
				}
			 ,500);
			},100);
	   }
	 );
	 
	 $("#culttext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#cult").siblings().animate({top:"350px"});
		$("#cult").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#cult").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
		     $("#cultbg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#culttext").hide();
			 setTimeout(
			    function()
				{
		         $("#cult .transback").css({"visibility":"visible"})
				 $(".cult_events").css({"visibility":"visible"});
				 $("#cult_events_left").animate({"left":"-150px"});
				 $("#cult_events_right").animate({"right":"-150px"});
				 $("#cult .close").css({"visibility":"visible"});
				 setTimeout(
				     function()
					 {
					  $("#cult_about").css({"visibility":"visible"});
					 }
				 ,200);
				}
			 ,500);
			},100);
	   }
	 );
	 
	 $("#techtext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#tech").siblings().animate({top:"350px"});
		$("#tech").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#tech").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
			 $("#tech").css({"cursor":"default"});
		     $("#techbg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#techtext").hide();
			 setTimeout(
			    function()
				{
				 $("#tech .transback").css({"visibility":"visible"});
				 $(".tech_events").css({"visibility":"visible"});
				 $("#tech_events_left").animate({"left":"-150px"});
				 $("#tech_events_right").animate({"right":"-150px"});
				 $("#tech .close").css({"visibility":"visible"});
				}
			 ,500);
			},100);
	   }
	 );
	 
	 $("#busstext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#buss").siblings().animate({top:"350px"});
		$("#buss").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#buss").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
		     $("#bussbg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#busstext").hide();
			 setTimeout(
			    function()
				{
		         $("#buss .transback").css({"visibility":"visible"})
				 $(".buss_events").css({"visibility":"visible"});
				 $("#buss_events_left").animate({"left":"-150px"});
				 $("#buss_events_right").animate({"right":"-150px"});
				 $("#buss .close").css({"visibility":"visible"});
				}
			 ,500);
			},100);
	   }
	 );
	 
	  $("#funtext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#fun").siblings().animate({top:"350px"});
		$("#fun").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#fun").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
		     $("#funbg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#funtext").hide();
			 setTimeout(
			    function()
				{
		         $("#fun .transback").css({"visibility":"visible"});
				 $(".fun_events").css({"visibility":"visible"});
				 $("#fun_events_left").animate({"left":"-150px"});
				 $("#fun_events_right").animate({"right":"-150px"});
				 $("#fun .close").css({"visibility":"visible"});
				}
			 ,500);
			},100);
	   }
	 );
	 
	  $("#dramatext").click(
	   function()
	   {
	    document.getElementById("open").play();
	    $("#drama").siblings().animate({top:"350px"});
		$("#dama").css({"cursor":"pointer"});
		setTimeout(
		    function()
			{
	         $("#drama").animate({top:"-440px",left:"250px",width:"500px","height":"500px","border-radius":"500px"});
		     $("#dramabg1").animate({width:"500px",height:"500px","border-radius":"500px"})
		     $("#dramatext").hide();
			 setTimeout(
			    function()
				{
				 $("#drama .transback").css({"visibility":"visible"});
				 $(".drama_events").css({"visibility":"visible"});
				 $("#drama_events_left").animate({"left":"-150px"});
				 $("#drama_events_right").animate({"right":"-150px"});
				 $("#drama .close").css({"visibility":"visible"});
				}
			 ,500);
			},100);
	   }
	 );
	 
	 $("#tech .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#tech_events_left").animate({"left":"100px"});
		 $("#tech_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".tech_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#tech").animate({width:"100px","height":"100px","border-radius":"100px","left":"560px"});
			       $("#tech").css({"cursor":"pointer"});
		           $("#techbg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   $("#tech .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#techtext").show();
				          $("#tech").animate({top:"40px"});
						  $("#tech").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#tech").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#tech").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 );
	 
	 $("#lit .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#lit_events_left").animate({"left":"100px"});
		 $("#lit_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".lit_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#lit").animate({width:"100px","height":"100px","border-radius":"100px","left":"280px"});
			       $("#lit").css({"cursor":"pointer"});
		           $("#litbg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   
						  $("#lit .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#littext").show();
				          $("#lit").animate({top:"40px"});
						  $("#lit").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#lit").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#lit").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 );
	 
	 $("#game .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#about_game").css({"visibility":"hidden"});
		 
		$("#game_aoe").css({"visibility":"hidden"});
		$("#about_aoe").css({"visibility":"hidden"});
		$("#aoe_rule_1").css({"visibility":"hidden"});
		$("#aoe_rule_2").css({"visibility":"hidden"});
		$("#aoe_rule_3").css({"visibility":"hidden"});
		$("#aoe_rule_4").css({"visibility":"hidden"});
		$("#aoe_rule_5").css({"visibility":"hidden"});
		$("#aoe_rules").css({"visibility":"hidden"});
		$("#aoe_rule_nav").css({"visibility":"hidden"});
		$("#aoe_contact").css({"visibility":"hidden"});
		$("#about_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_about_btn").css({"visibility":"hidden"});
		$("#rule_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_rule_btn").css({"visibility":"hidden"});
		$("#contact_aoe_btn").css({"visibility":"hidden"});
		$("#hover_aoe_contact_btn").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		$("#game_aoe_control").css({"visibility":"hidden"});
		
		$("#game_nfs").css({"visibility":"hidden"});
		$("#about_nfs").css({"visibility":"hidden"});
		$("#nfs_rule_1").css({"visibility":"hidden"});
		$("#nfs_rules").css({"visibility":"hidden"});
		$("#nfs_rule_nav").css({"visibility":"hidden"});
		$("#nfs_contact").css({"visibility":"hidden"});
		$("#about_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_about_btn").css({"visibility":"hidden"});
		$("#rule_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_rule_btn").css({"visibility":"hidden"});
		$("#contact_nfs_btn").css({"visibility":"hidden"});
		$("#hover_nfs_contact_btn").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		$("#game_nfs_control").css({"visibility":"hidden"});
		
		$("#game_fifa").css({"visibility":"hidden"});
		$("#about_fifa").css({"visibility":"hidden"});
		$("#fifa_rule_1").css({"visibility":"hidden"});
		$("#fifa_rule_2").css({"visibility":"hidden"});
		$("#fifa_rule_3").css({"visibility":"hidden"});
		$("#fifa_rule_4").css({"visibility":"hidden"});
		$("#fifa_rule_5").css({"visibility":"hidden"});
		$("#fifa_rules").css({"visibility":"hidden"});
		$("#fifa_rule_nav").css({"visibility":"hidden"});
		$("#fifa_contact").css({"visibility":"hidden"});
		$("#about_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_about_btn").css({"visibility":"hidden"});
		$("#rule_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_rule_btn").css({"visibility":"hidden"});
		$("#contact_fifa_btn").css({"visibility":"hidden"});
		$("#hover_fifa_contact_btn").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		$("#game_fifa_control").css({"visibility":"hidden"});
		 
		$("#game_cs").css({"visibility":"hidden"});
		$("#about_cs").css({"visibility":"hidden"});
		$("#cs_rule_1").css({"visibility":"hidden"});
		$("#cs_rule_2").css({"visibility":"hidden"});
		$("#cs_rule_3").css({"visibility":"hidden"});
		$("#cs_rule_4").css({"visibility":"hidden"});
		$("#cs_rules").css({"visibility":"hidden"});
		$("#cs_rule_nav").css({"visibility":"hidden"});
		$("#cs_contact").css({"visibility":"hidden"});
		$("#about_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_about_btn").css({"visibility":"hidden"});
		$("#rule_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_rule_btn").css({"visibility":"hidden"});
		$("#contact_cs_btn").css({"visibility":"hidden"});
		$("#hover_cs_contact_btn").css({"visibility":"hidden"});
		 
		 $("#game_aoe_control").css({"visibility":"hidden"});
		 $("#game_events_left").animate({"left":"100px"});
		 $("#game_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".game_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#game").animate({width:"100px","height":"100px","border-radius":"100px","left":"420px"});
			       $("#game").css({"cursor":"pointer"});
		           $("#gamebg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   
						  $("#game .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#gametext").show();
				          $("#game").animate({top:"40px"});
						  $("#game").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#game").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#game").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 );
	  
	  
	 $("#cult .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#cult_events_left").animate({"left":"100px"});
		 $("#cult_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".cult_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#cult").animate({width:"100px","height":"100px","border-radius":"100px","left":"140px"});
			       $("#cult").css({"cursor":"pointer"});
		           $("#cultbg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   
						  $("#cult .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#culttext").show();
				          $("#cult").animate({top:"40px"});
						  $("#cult").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#cult").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#cult").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 );
 
	   $("#fun .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#fun_events_left").animate({"left":"100px"});
		 $("#fun_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".fun_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#fun").animate({width:"100px","height":"100px","border-radius":"100px","left":"700px"});
			       $("#fun").css({"cursor":"pointer"});
		           $("#funbg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   $("#fun .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#funtext").show();
				          $("#fun").animate({top:"40px"});
						  $("#fun").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#fun").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#fun").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 );
	  $("#drama .close").click(
	    function()
		{
		 document.getElementById("close").play();
		 $("#drama_events_left").animate({"left":"100px"});
		 $("#drama_events_right").animate({"right":"100px"});
		 setTimeout(
		   
		       function(){
			       $(".drama_events").css({"visibility":"hidden"});
			       $(".close").css({"visibility":"hidden"});
				   $("#drama").animate({width:"100px","height":"100px","border-radius":"100px","left":"840px"});
			       $("#drama").css({"cursor":"pointer"});
		           $("#dramabg1").animate({width:"100px",height:"100px","border-radius":"100px"});
				   $("#drama .transback").css({"visibility":"hidden"});
				   setTimeout(
				        function(){
						  $("#dramatext").show();
				          $("#drama").animate({top:"40px"});
						  $("#drama").siblings().animate({top:"0px"});
						  setTimeout(function(){$("#drama").animate({"top":"-15px"},100);},451);
						  setTimeout(function(){$("#drama").animate({"top":"0px"},60);},511);
				   },500);
			   }
		  ,100 );
		}
	 ); 
	  $("#shed").mouseenter(
	    function()
		{
		 $("#shed .nav_button").animate({"left":"15px"},10);
		}
	  ); 
	  $("#regi").mouseenter(
	    function()
		{
		 $("#regi .nav_button").animate({"left":"15px"},10);
		}
	  ); 
	  $("#spon").mouseenter(
	    function()
		{
		 $("#spon .nav_button").animate({"left":"15px"},10);
		}
	  ); 
	  $("#contact").mouseenter(
	    function()
		{
		 $("#contact .nav_button").animate({"left":"15px"},10);
		}
	  ); 
	  $(".links").mouseleave(
	    function()
		{
		 $(".links .nav_button").animate({"left":"0px"},10);
		}
	  ); 
   }
);