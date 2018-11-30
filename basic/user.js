//Các xử lý kịch bản cho user.html



//Sinh cấu trúc chọn quyền
function generatePermis(){
	//danh sách quyền
	var permis = new Array();
	permis[0] = "----chọn quyền----";
	permis[1] = "Thành viên (Members)";
	permis[2] = "Tác giả (Authors)";
	permis[3] = "Quản lý (Managers)";
	permis[4] = "Quản trị (Administrators)";
	permis[5] = "Quản trị cấp cao (Super Admins)";
	
	//Tạo cấu trúc Select
	var opt = "<select name=\"slcAccPermis\" class=\"space c20\">"; //Dấu \ dùng để lấy ký tự đặc biệt bên html. VD: \" để lấy ký tự "
	for(var i = 0; i < permis.length; i++){	
		opt += "<option value=\""+i+"\">"; // "+i+" để chèn giá trị i vào 
		opt += permis[i];
		opt += "</option>";
	}
	opt += "</select>";
	
	//Xuất cấu trúc
	document.write(opt);
}

//Sinh cấu trúc vai trò
function generateRoles(){
	//Danh sách vai trò
	var roles = new Array();
	roles[0] = "Người sử dụng";
	roles[1] = "Chuyên mục";
	roles[2] = "Thể loại";
	roles[3] = "Bài viết & Tin tức";
	roles[4] = "Hệ sản phẩm";
	roles[5] = "Nhóm sản phẩm";
	roles[6] = "Loại sản phẩm";
	roles[7] = "Sản phẩm";
	roles[8] = "Hóa đớn";
	roles[9] = "Khách hàng";
	
	//Tạo cấu trúc
	
	var role = "";
	for(var i = 0; i < roles.length; i++){
		if(i%3==0){
			role += "<div class=\"row space\">";
		}
		role += "<div class=\"c4\">";
		role += "<input type=\"checkbox\" id=\"chk"+i+"\" disabled />";
		role += "<label for=\"chk"+i+"\">";
		role += " Quản lý " +roles[i];
		role += "</label>";
		role += "</div>";
		if(i%3==2 || i==roles.length -1){
			role += "<div class=\"clr\"></div>";
			role += "</div>";
		}
	}
	
	//Xuất cấu trúc 
	document.write(role);
}