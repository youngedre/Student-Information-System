
/* TABS */
$('#add-child-tabs').foundation();

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
  $('#add-parent').hide();
  $('#parent-mail').hide();
  $('#add-child').hide();
  $('#my-profile').hide();
  console.log('hello')
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

/* On click events to prevent duplicate data for children data table tabs*/
var kids = $('.my-children-e');
// var kids = $('.my-children-e');
var panel1 = $('.panel-1');
var panel2 = $('.panel-2');
var panel3 = $('.panel-3');
var panel4= $('.panel-4');
for (var i = 0; i < 1; i++){
    kids.on('click', function(){
     
        panel1.removeClass('is-active');
        console.log("remove a class")
    
})
}
// console.log(kids)
console.log(panel1.length)
