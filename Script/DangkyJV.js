// JavaScript Document
function KiemTraThongTin(){
 
var hoTen=document.getElementById("hoten");
 
   if (hoTen.value==""){
   alert("Vui lòng nhập Họ tên.");
   hoTen.focus();
    return false;
}
var nam=document.getElementById("nam");
   if (nam.value==""){
   alert("Hãy điền Năm sinh.");
   nam.focus();
   return false;
   }
   if (isNaN(nam.value)==true){
   alert("Năm sinh phải là số.");
   nam.value="";
   nam.focus();
 return false;
}
var email=window.document.dangky.txtEmail;
  re=/\w+@\w+\.\w+/;
  if(email.value==""){
	  alert("Bạn chưa nhập email.");
	  email.focus();
	  return false;
  }
  else
      if(re.test(email.value)==false){
		  alert("Email không đúng định dạng!");
		  email.focus();
		  return false;
	  }
var tendangnhap=document.getElementById("tendangnhap");
 
   if (tendangnhap.value==""){
   alert("Vui lòng nhập Tên đăng nhập.");
   tendangnhap.focus();
    return false;
}
var matkhau=document.getElementById("matkhau");
 
   if (matkhau.value==""){
   alert("Vui lòng nhập Mật khẩu.");
   matkhau.focus();
    return false;
}	
var nhaplaimatkhau=document.getElementById("nhaplaimatkhau");
 
  if(nhaplaimatkhau.value==""){
	  alert("Vui lòng nhập lại Mật khẩu.");
	  nhaplaimatkhau.focus();
	  return false;
  }
  else
      if(nhaplaimatkhau.value!=matkhau.value){
		  alert("Mật khẩu nhập lại không đúng!");
		  nhaplaimatkhau.focus();
		  return false;
	  }	  
alert("Đăng ký thành công! Xin chúc mừng.");
 return true;
}