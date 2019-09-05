function validateTextbox(){
var box0= document.getElementById("firstname");
var box1= document.getElementById("surname");
var box2= document.getElementById("title");
var box3= document.getElementById("textarea");
if(box0.value==""|| box1.value==""||box2.value== ""||box3.value== "" ){
alert("Fill in the empty fields before submitting");
return false;
}

}