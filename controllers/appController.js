/* eslint-disable no-var */
module.exports = function (db) {
  return {
    // Get all examples
    getExamples: function (req, res) {
      db.Example.findAll({}).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExample: function (req, res) {
      db.Example.create(req.body).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Delete an example by id
    deleteExample: function (req, res) {
      db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbExample);
      });
    },
    // Create new student entry
    addNewStudent: function (req, res) {
      db.Student.create(req.body).then(function (dbStudent) {
        res.json(dbStudent);
      });
    },

    // ************ This needs to be updated with req.params.id for parent
    viewExistingStudent: function (req, res) {
      console.log('Inside viewExistingStudent - appController');
      if (req.params.id) {
        var id = req.params.id;
      } else {
        id = 32;
      }
      db.Student.findAll({
        where: {
          id: id
        }
      }).then(function (dbStudent) {
        res.json(dbStudent);
      });
    }

  };
};
