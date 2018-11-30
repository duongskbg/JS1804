//Các xử lý kịch bản cho layout.html

//Khai báo các biến toàn cục (toàn thể)

var def = "----từ khóa---- ";
var emp = "";

function setFirstTime(fn){
	//Truy cập vào đối tượng txtKeyword để thiết lập giá trị ban đầu
	fn.txtKeyword.value = def;
	
	
	
}

function setKeyword(fn, isClick){
	//Lấy giá trị trong ô tìm kiếm
	
	var value = fn.txtKeyword.value;
	/*
	if(isClick){
		if(value == def){
			fn.txtKeyword.value = null;
		}
	}
	else{
		if(value===null){
			fn.txtKeyword.value = def;
			alert("a")
		}
		console.log(value===emp);
	}
	*/	
	
	if(value == def)
		fn.txtKeyword.value = "";
	if(value == "")
		fn.txtKeyword.value = def;
	
}


function checkValidKeyword(fn){
	//Lấy từ khóa
	var value = fn.txtKeyword.value;
	//console.log(value);
	//Kiểm tra
	if(value==def || value==emp){
		var message = "Hãy nhập vào từ khóa để tìm kiếm!";
		window.alert(message);
		//di chuyển con trỏ vào ô tìm kiếm
		fn.txtKeyword.focus();
		//fn.txtKeyword.select();
		fn.txtKeyword = "";
		console.log(fn.txtKeyword.type)
		//console.log(fn.txtKeyword.value);
	}else{
		return true;
	}
	
}