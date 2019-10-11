module.exports = (db) => {
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
  db.Parent.create({
    firstName: 'Joe',
    lastName: 'Jobs',
    email: 'j@j.co',
    custodyRelation: true,
    livingWith: true,
    employer: 'trilogy',
    city: 'Durham',
    zipcode: 27707,
    phoneNumber: '(012)-345-6789'
  });
};
