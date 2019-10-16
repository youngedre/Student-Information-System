
/* SIDE NAVIGATION */
$('[data-open-details]').click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass('is-active');
    $(this).toggleClass('is-active');
  });
  
  /* SIDE NAVIGATION */
  $('[data-menu-underline-from-center] a').addClass('underline-from-center');
  $('#offCanvasLeft1').foundation();
  
  /* TABS */
  $('#deeplinked-tabs').foundation();
  
  /* Hidden elements */
  
  // $('#my-profile').hide();
  $('#parent-mail').hide(); 
  $('#add-child').hide(); 
  $('#myChildren').hide(); 
  $('#notAvailable').hide(); 
  $('#register-accounts').hide();
  
  $('#addChild').on('click', function () {
    $('#add-child').show();
    $('#myChildren').hide();
    $('#my-profile').hide();
    $('#parent-mail').hide();
  });
  
  $('#children').on('click', function () {
    $('#myChildren').show();
    $('#my-profile').hide();
    $('#parent-mail').hide();
    $('#add-child').hide();
  });
  
  $('#myProfile').on('click', function () {
    $('#my-profile').show();
    $('#parent-mail').hide();
    $('#add-child').hide();
    $('#myChildren').hide();
  });
  
  $('#parentMail').on('click', function () {
    $('#parentMail').show();
    $('#my-profile').hide();
    $('#add-child').hide();
    $('#myChildren').hide();
  });
  
  $('#parentMail').on('click', function () {
    $('#notAvailable').show();
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


  