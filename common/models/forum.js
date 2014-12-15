module.exports = function(Forum) {

	Forum.status = function (cb) {

		var response = 'Running!';

		cb(null, response);

	};

	Forum.remoteMethod(
	    'status',
	    {
	      http: {path: '/status', verb: 'get'},
	      returns: {arg: 'status', type: 'string'}
	    }
	  );

};
