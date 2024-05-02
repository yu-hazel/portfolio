	
	function fn_tab(board){
		$("#boardGubun").val(board);
		$("#pageIndex").val(1);
		fn_list();
	}
	
	function fn_set_pageList(no){
		$("#pageIndex").val(no);
		fn_list();
	}
	
	var flag = true;
	function fn_list(){
		if(flag){
			if($("#nttId").val() != ""){
				window.location.href="https://camp.dytc.or.kr/board.html";
				$("#nttId").val("");
				flag = false;
			} else {
			
				$.post("https://mirihae.com/homepage/board/list.do", $("#form").serialize(), function(data) {
					console.log(data)
					$("#contents").html(data);
				}).done(function() {
					flag = true;
				})
			}
	   }
	}
	
	function fn_view(id){
		
		$("#nttId").val(id);
		flag = false;
		$.post("https://mirihae.com/homepage/board/view.do", $("#form").serialize(), function(data) {
			$("#contents").html(data);
		}).done(function() {
			flag = true;	
		})
	 
	}