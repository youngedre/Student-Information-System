module.exports = (db) => {
  // Start user data creation
  db.User.create({
    firstName: 'Joe',
    lastName: 'Gates',
    email: 'j@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  });
  db.User.create({
    firstName: 'Jane',
    lastName: 'Jobs',
    email: 'j@j.co',
    password: process.env.USER_PWD,
    isAdmin: false
  });
  // Start parent data creation
  db.Parent.create({
    firstName: 'Joe',
    lastName: 'Jobs',
    email: 'j@j.co',
    custodyRelation: true,
    livingWith: true,
    employer: 'trilogy',
    streetAddress: '513 Tournament Circle',
    city: 'Durham',
    zipcode: 27707,
    phoneNumber: '(012)-345-6789'
  });
  // Start student data creation
  db.Student.create({
    firstName: 'Matthew',
    lastName: 'Michaels',
    birthDate: '2015-04-03',
    gender: 'male',
    ethnicity: 'Caucasian',
    primaryLanguage: 'English',
    emergencyContactName: 'Barbara Matthews',
    emergencyContactPhone: '(919) 455-0987',
    emergencyContactRelation: 'grandmother',
    doctorName: 'Edward Pickens',
    doctorPhone: '(919) 655-9908',
    dentistName: 'Rocio Quinonez',
    dentistPhone: '(919) 674-9679',
    allergies: true,
    allergyDescription: 'peanuts'
  });
  // Start teacher data creation
  db.Teacher.create({
    first_name: 'Fatima',
    last_name: 'Carabana',
    classroom_number: 10,
    phone_number: '(336) 675-0786',
    email: 'fatima@gmail.com'
  });
};
