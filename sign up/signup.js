/*===========
EMAIL VALIDATION
==============*/
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
thongbao();
document.form1.text1.focus();
return true;
}
else
{
alert("Địa chỉ Email không hợp lệ!");
document.form1.text1.focus();
return false;
}
}


/*===========
EMAIL VALIDATION
==============*/

function thongbao(){
    var email = document.getElementById("email").value;
    var mk = document.getElementById("password").value;
    var user = document.getElementById("text").value;
    
    confirm(
        "Bạn đã đăng ký với Email: "
    + email 
    + "\n"
    + "Tên đăng nhập của bạn là: "
    + user
    
        
    )
}