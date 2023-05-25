  
  function test(){

    // alert('test');

    var name=$('#name').val();
    
     var phone = $('#phone').val();
    
    var email = $('#email').val();
    var passport = $('#passport').val();

    var password = $('#pwd').val();
    // alert(password);
    var confirm_pwd = $('#confirm_pwd').val();

 var pwd=$('#pwd').val();
     var confirm_pwd = $('#confirm_pwd').val();
    if(name==''){
        
        $('#name_error').html('Please fill name field');
        
    }else{
       
        $('#name_error').html('');

    }



    if(phone == ''){
        $('#phone_error').html('please fill up the contact field');
    }else{
        $('#phone_error').html('');
    }

    if(email == ''){
        $('#mail_error').html('pleae fill up email field');
    }else{
        $('#mail_error').html('');
    }

    if(passport == ''){
        $('#passport_error').html('plase fil up the passport field')
    }else {
        $('#passport_error').html('');
    }
    if(password == '' ){
        $('#pwd_error').html('fill up the password field');
    }
    else {
        if(password.length<6 ){
            $('#pwd_error').html('pass at least 6 character');
        }else{
            $('#pwd_error').html('');
        }
    }

    if(confirm_pwd != password){
        $('#confirm_pwd_error').html('password does not match');
        
    }else{
        $('#confim_pwd').html('');

    }

    if(name == ''){
        $('#name').focus();
    }else if(phone == ''){
        $('#phone').focus();
    }else if(email == ''){
        $('#email').focus();
    }else if(passport == ''){
        $('#passport').focus();
    }else if(password == ''){
        $('#pwd').focus();
    }else{
        $('#confirm_pwd').focus();
    }

}
