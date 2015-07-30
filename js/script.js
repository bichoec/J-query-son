$(document).ready(function(e) {
    
	$("#show_data").click(function()
	{
		var name=$("#name").val();
		
		$.ajax({
				type:"post",
				url:"data_process.php",
				data:"name="+name,
				dataType:"JSON",
				beforeSend: function(){
								$('#loading').html('<img src="img/loading.gif"/> Loading Data');							
							},
				success:function(result){						

						$("#message").html(result.Name);
						$("#loading").html('');
						
				}
			 });	
		
		
	});
	
});