var connection = require('../config/connection.js');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    selectAll: function (cb) { 
        connection.query('SELECT * From burgers', function (err, result) {
            if (err) throw err;
            cb(result);
        })
     },

     insertOne: function (burger_name, cb) { 
         connection.query('INSERT INTO burgers SET ?', 
            {
                burger_name: burger_name,
                devoured: false,
            }, function (err, result) { 
                if (err) throw err;
                cb(result);
             });
      },

      updateOne: function (burgerID, cb) { 
          connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerID}], function (err, result) { 
              if (err) throw err;
              cb(result);
           });
       }
};

// Export the ORM object
module.exports = orm;