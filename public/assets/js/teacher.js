
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
  
$('#myClass').hide();


  $('#teacherProfile').on('click', function () {
    $('#teacher-profile').show();
    $('#add-child').hide();
    $('#myChildren').hide();
  });

  $('#teacherMail').on('click', function () {
    $('.notAvailable').show();
    setTimeout(function () {
      $('.notAvailable').fadeOut('slow');
    }, 2000);
  });

  $('#classRoster').on('click', function(){
    $('#myClass').show();
  })