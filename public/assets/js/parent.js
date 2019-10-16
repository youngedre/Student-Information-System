
  /* TABS */
  $('#deeplinked-tabs').foundation();

  $('#parent-tabs').foundation();
  $('#my-children-tabs').foundation();
  /* Hidden elements */
  
 
  $('#add-parent').show();
  $('#parent-mail').hide(); 
  $('#add-child').hide(); 
  $('#myChildren').hide(); 
  $('.notAvailable').hide(); 
  $('#register-accounts').hide();
  $('#add-parent').hide();
  
  $('#addChild').on('click', function () {
    $('#add-child').show();
    $('#myChildren').hide();
    $('#my-profile').hide();
    $('#parent-mail').hide();
    $('#my-profile').hide();
  });
  
  $('#children').on('click', function () {
    $('#myChildren').show();
    $('#my-profile').hide();
    $('#parent-mail').hide();
    $('#add-child').hide();
    $('#my-profile').hide();
  });
  
  $('#myProfile').on('click', function () {
    $('#add-parent').show();
    $('#parent-mail').hide();
    $('#add-child').hide();
    $('#myChildren').hide();
    $('#my-profile').hide();
  });
  
  $('#parentMail').on('click', function () {
    $('#parentMail').show();
    $('#my-profile').hide();
    $('#add-child').hide();
    $('#myChildren').hide();
  });
  
  $('#parentMail').on('click', function () {
    $('.notAvailable').show();
    $('#my-profile').show();
    setTimeout(function () {
      $('#notAvailable').fadeOut('slow');
    }, 2000);
  });


  $('#parent').on('click', function () {
    $('#register-accounts').show();
    $('#accountType').hide();
  });

  $('#teacher').on('click', function () {
    $('#register-accounts').show();
    $('#accountType').hide();
  });


  
  $('#myProfile').on('click', function(){
    $('#add-parent').show();
  })

