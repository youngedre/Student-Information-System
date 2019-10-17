/* eslint-disable no-var */
const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.render('register');
    }
  });

  // Load profile page
  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load home page
  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // Load login page
  router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('login', user);
    } else {
      res.render('login');
    }
  });

  // Load login page
  router.get('/student', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('register_student', user);
    } else {
      res.render('register_student');
    }
  });

  // Load parent page
  router.get('/parent', (req, res) => {
    // if (req.isAuthenticated()) {
    //   const user = {
    //     user: req.session.passport.user,
    //     isloggedin: req.isAuthenticated()
    //   };
    if (req.params.id) {
      var id = req.params.id;
    } else {
      id = 32;
    }
    db.Student.findAll({
      where: {
        ParentId: id
      },
      include: [db.Teacher]
      // as: 'Teacher',
      // where: { id: db.Student.TeacherId }
    }).then(function (dbStudent) {
      // console.log(dbStudent);
      res.render('parent_profile', {
        studentData: dbStudent
      });
      // res.json(dbStudent);
    });
    // } else {
    //   res.render('register_student');
    // }
  });

  // Load teacher page
  router.get('/teacher', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('teacher_profile', user);
    } else {
      res.render('teacher_profile');
    }
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      const user = {
        user: req.session.passport.user,
        isloggedin: req.isAuthenticated()
      };
      res.render('dashboard', user);
    } else {
      res.render('dashboard');
    }
  });

  // router.get('/parent#panel4d', function (req, res) {
  //   if (req.params.id) {
  //     var id = req.params.id;
  //   } else {
  //     id = 32;
  //   }
  //   db.Student.findAll({
  //     where: {
  //       id: id
  //     }
  //   }).then(function (dbStudent) {
  //     // res.json(dbStudent);
  //     res.render('/parent#panel4d', dbStudent);
  // });

  // Load example index page
  router.get('/example', function (req, res) {
    if (req.isAuthenticated()) {
      db.Example.findAll({}).then(function (dbExamples) {
        res.render('example', {
          msg: 'Welcome!',
          examples: dbExamples
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Load example page and pass in an example by id
  router.get('/example/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
        res.render('example-detail', {
          example: dbExample
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  return router;
};
