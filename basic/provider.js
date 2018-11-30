//Các xử lý kịch bản cho Provider.html

function checkValidProvider(fn){
	
	//Lấy tên nhà cung cấp
	var name = fn.txtProviderName.Value;
	//Lấy giá trị đồng ý
	var check = fn.chkAgree.checked;
	
	if(name!= "" && check){
		fn.btnRegistry.disabled = false;
	}else{
		fn.btnRegistry.disabled = true;
	}
	
}

function resetAll(fn){
	//Thiết lập lại form 
	fn.reset();
	//Thiết lập lại kịch bản
	fn.btnRegistry.disabled = true;
	
}