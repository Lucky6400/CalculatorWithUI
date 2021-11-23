var dbox = document.getElementById('display-box');

function getData(data){
    dbox.style.borderColor = "grey";
    dbox.value += data;
}
function backspace()  
{  
var exp = dbox.value;  
dbox.value = exp.substring(0, exp.length - 1);  
}  
function calc(){
    if (dbox.value != "") {
        var a = dbox.value;
        var a01 = eval(a);
        var res = a + "=" + a01;
        dbox.value = res;
    } else {
        dbox.style.borderColor = "red";
    }
}
$(document).ready(function(){
    $('.btn-warning').click(function(){
        $('.btn-warning').attr('disabled',true);
    });
    $('.btn-info').click(function(){
        $('.btn-warning').attr('disabled',false);
    });
});