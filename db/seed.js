const approvedDataJSON = require('./approvedDataJSON');
const parentDataJSON = require('./parentDataJSON.js');
const studentDataJSON = require('./studentDataJSON.js');
const teacherDataJSON = require('./teacherDataJSON.js');

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
  db.Parent.bulkCreate(parentDataJSON);
  db.Approved.bulkCreate(approvedDataJSON);
  db.Teacher.bulkCreate(teacherDataJSON);
  db.Student.bulkCreate(studentDataJSON);

  // Start student data creation

  // Start teacher data creation
  // db.Teacher.create({
  //   first_name: 'Fatima',
  //   last_name: 'Carabana',
  //   classroom_number: 10,
  //   phone_number: '(336) 675-0786',
  //   email: 'fatima@gmail.com'
  // });
};
