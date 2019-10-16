
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

  $('#parent-tabs').foundation();
  $('#my-children-tabs').foundation();
  /* Hidden elements */
  
//   $('#my-profile').hide();
  $('#parent-mail').hide(); 
  $('#add-child').hide(); 
  $('#myChildren').hide(); 
  $('#notAvailable').hide(); 
  $('#register-accounts').hide();
  $('#add-parent').hide();
  
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


  
  $('#myProfile').on('click', function(){
    $('#add-parent').show();
  })

  // shows and hides filtered items
$(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.'+value).hide('3000');
      $('.filter-simple-item').filter('.'+value).show('3000');
    }
  });
  
  // changes active class on filter buttons
  $('.filter-simple-button').click(function () {
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
  
  $('#teacherProfile').on('click', function () {
    $('#parentMail').show();
    $('#teacher-profile').hide();
    $('#add-child').hide();
    $('#myChildren').hide();
  });

