var properties = {
  gameclass: {type: String, required: true}
};


var options = {

};

var user = loopback.Model.extend('user', properties, options);