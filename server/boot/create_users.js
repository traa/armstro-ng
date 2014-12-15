var debug = require('debug')('boot:create-model-instances');

module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create([
    {username: 'truthatenvy', email: 'stagedown@gmail.com', password: 'signinja'},
  ], function(err, users) {
    if (err) throw err;
    debug(users);


    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;
      debug(role);
      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) throw err;
        debug(principal);
      });
    });
  });
};