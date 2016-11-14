function validacion(){
var password = $("#pass").val();
var email = $("#email").val();
var expr = /([\w\.+]+)@([\w]+\.){1,3}([a-zA-Z]{2,4})/g;

var res = true;

  if(!expr.test(email) || email == ""){
    $("#1").css("display","inline");
    res = false;
  }else{
    $("#1").css("display", "none");
  }

  if(password.length < 8){
    $("#2").css("display", "inline");
    res = false;
  }
  else
  if(password.match('\\d+') == null){
    $("#2").css("display", "none");
    $("#3").css("display", "inline");
    res = false;
  }
  else
  if(password.match(/[A-Z]/g) == null){
    $("#3").css("display", "none");
    $("#4").css("display", "inline");
    res = false;
  }else{
    $("#4").css("display", "none");
  }

  return res;
}

$(document).ready( function(){

  $("#sign_up").submit(function(event){

   if(validacion() === false){
    event.preventDefault();
  }

    // var url = $("#sign_up").attr('action');
    // var informacion = $("#sign_up").serialize();

    // $.post(url, informacion).done(function(data){
    // });

  });
});