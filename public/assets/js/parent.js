
/* TABS */
$('#add-child-tabs').foundation();

$('#parent-tabs').foundation();
$('#my-children-tabs').foundation();


/* Hidden elements */
$('#my-profile').show();
$('#add-parent').hide();
$('#add-child').hide();
$('#myChildren').hide();
$('.notAvailable').hide();
$('#register-accounts').hide();

$('#addChild').on('click', function () {
  $('#add-child').show();
  $('#myChildren').hide();
  $('#add-parent').hide();
  $('#my-profile').hide();
});

$('#children').on('click', function () {
  $('#myChildren').show();
  $('#add-parent').hide();
  $('#add-child').hide();
  $('#my-profile').hide();
});

$('#myProfile').on('click', function () {
  $('#add-parent').show();
  $('#add-child').hide();
  $('#myChildren').hide();
  $('#my-profile').hide();
});

$('#parentMail').on('click', function () {
  $('.notAvailable').show();
  $('#add-child').hide();
  $('#add-parent').hide();
  $('#myChildren').hide();
  $('#my-profile').show();
  setTimeout(function () {
    $('.notAvailable').fadeOut('slow');
  }, 2000);
});

$('#parentDashboard').on('click', function () {
  $('#my-profile').show();
  $('#add-child').hide();
  $('#add-parent').hide();
  $('#myChildren').hide();
});

$('.userType').on('click', function (e) {
  e.preventDefault();

  window.parentOrTeacher = $(this).val();
  console.log(window.parentOrTeacher);
  $('#register-accounts').show();
  $('#accountType').hide();
});

$('#myProfile').on('click', function () {
  $('#add-parent').show();
});

/* On click events to prevent duplicate data for add_parent data table tabs*/

$('#parent-2').on('click', function (){
  $('#parent1').removeClass('is-active'); 
  console.log('is-active class removed successfully');
})

/* On click events to prevent duplicate data for add_student data table tabs*/
$('#child-e').on('click', function(){
  $('#child-general').removeClass('is-active'); 
})

$('#child-a').on('click', function(){
  $('#child-general').removeClass('is-active'); 
})

$('#child-n').on('click', function(){
  $('#child-general').removeClass('is-active'); 
})
