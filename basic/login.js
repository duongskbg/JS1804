//các xử lý kịch bản cho login.html

function checkValidLogin(fn){
	//Lấy thông tin đăng nhập
	var username = fn.txtUsername.value;
	var userpass = fn.txtUserpass.value;
	
	//Biến xác nhận sự hợp lệ của giá trị
	var validUsername = true;
	var validUserpass = true;
	
	//Biến ghi nhận thông báo
	var message = "";
	
	//Kiểm tra tên đăng nhập
	username = username.trim(); //Cắt bỏ khoảng trống đầu và cuối
	if(username==""){
		validUsername = false;
		message = "Thiếu tên đăng nhập vào hệ thống!";
		
	}else{
		if(username.indexOf(" ") != -1){
			validUsername = false;
			message = "Tên đăng nhập có dấu cách.";
		}else if(username.length>30){
			validUsername = false;
			message = "Tên đăng nhập quá dài, cần nhỏ hơn 30 ký tự.";
		}else{
			//khai báo cấu trúc hộp thư
			var parttern = /\w+@\w+[.]\w/;
			if(username.indexOf("@") != -1){
				if(!username.match(parttern)){
					validUsername = false;
					message = "Không đúng cấu trúc hộp thư.";
				}
			}
			
		}
	}
	//Kiểm tra mật khẩu
	userpass = userpass.trim();
	if(userpass == ""){
		validUserpass = false;
		message += "\nThiếu mật khẩu vào hệ thống.";	
	}else{
		if(userpass.length <6){
			validUserpass = false;
			message += "\nMật khẩu không hợp lệ.";
		}
	}
	//Thông báo kết quả kiểm tra
	if(message != ""){
		//hiển thị
		window.alert(message);
		//di chuyển con trỏ vào những bị trí lỗi
		//theo thứ tự TRÁI --> PHẢI; TRÊN --> DƯỚI
		if(!validUsername){
			fn.txtUsername.focus();
			fn.txtUsername.select();
		}else if(!validUserpass){
			fn.txtUserpass.focus();
			fn.txtUserpass.select();
		}
	}
	
	//Trả về kết quả
	return validUsername && validUserpass;
}

