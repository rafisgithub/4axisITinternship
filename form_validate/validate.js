$(document).ready(function(){
    var $registerFrom = $("#registration");
    $.validator.addMethod("noSpace", function(value, element)
    {
        return value == '' || value.trim().length != 0
    }, "Spaces are not allowed");

    
 var $registerForm = $("#registration");
 if($registerForm.length){
    $registerForm.validate({
        rules:{
            username:{
                required: true,
                noSpace: true
            },
            mobile:{
                required: true
                
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true
               
            },
            confpassword:{
                required: true,
                equalTo: '#password1'
            },
            address:{
                required: true
            },
            city:{
                required: true
            },
            state:{
                required: true
            },
            zip:{
                required: true
            },
            checkbox:{
                required: true
            }
        },
        messages:{
            username: {
                required:'Username is mandatory!'
                
            },
            mobile: {
                required:'Please enter phone number!'
            },
            email:{
                required:'please enter email!',
                email: 'Please enter valid email!'
            },
            password:{
                required:'please enter password!'
                
            },
            confpassword:{
                required:'please enter confirm password!',
                equalTo: 'Please enter the same Password'
            },
            
            address:{
                required:'please enter address!'
            },
            city:{
                required:'please enter city!'
            },
            state:{
                required:'please select state name!'
            },
            zip:{
                required:'please enter zip code!'
            },
            checkbox:{
                required:'please select the checkbox!'
            }
        }
        
    })
 }




  });

  $(document).ready(function () {
    $("#password1").on('keyup', function(){
      var number = /([0-9])/;
      var alphabets = /([a-zA-Z])/;
      var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
      if ($('#password1').val().length < 6) {
          $('#password-strength-status').removeClass();
          $('#password-strength-status').addClass('weak-password');
          $('#password-strength-status').html("Weak (should be atleast 6 characters.)");
      } else {
          if ($('#password1').val().match(number) && $('#password1').val().match(alphabets) && $('#password1').val().match(special_characters)) {
              $('#password-strength-status').removeClass();
              $('#password-strength-status').addClass('strong-password');
              $('#password-strength-status').html("Strong");
          } else {
              $('#password-strength-status').removeClass();
              $('#password-strength-status').addClass('medium-password');
              $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters or some combination.)");
          }
      }
    });
  }); 

  $(document).ready(function() { 
    $("input").focusout(function() { 
        if($(this).val()=='') { 
            $(this).css('border', 'solid 2px red'); 
        }
        else {
              
            // If it is not blank.
            $(this).css('border', 'solid 2px green');    
        }    
    }) .trigger("focusout");
}); 

  $(document).ready(function() {
    $("select").focusout(function(){
        if($(this).val()=='') {
            $(this).css('border', 'solid 2px red')
        }else{
            $(this).css('border', 'solid 2px green');
        }
    }) .trigger("focusout");
  })