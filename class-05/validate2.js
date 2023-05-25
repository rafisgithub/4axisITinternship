$(function(){
    
    var $registerForm = $("#register");
    
    $registerForm.validate({
        rulse:{
            username:{
                required:true
            }
        },
        messagess:{
            username:{
                required:'user name required.'
            }
        }
    })
   
})