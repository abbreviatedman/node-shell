module.exports = {



// The stdin 'data' event fires after a user types in a line
prompter: function(){

	var fs = require('fs');

	process.stdin.on('data', function (data) {
 	var cmd = data.toString().trim().split(' ')[0];
 	var args = data.toString().trim().split(' ').splice(1).join(' ') // remove the newline

	switch(cmd) {
		case `pwd`:
			process.stdout.write(process.cwd().toString());
			process.stdout.write('\nprompt > ');
			break;
		case `date`:
			var thisDate = new Date();
			process.stdout.write(thisDate.toString());
			process.stdout.write('\nprompt > ');
			break;
		case 'ls':
			fs.readdir('.', function(err, files) {
  				if (err) throw err;
  				files.forEach(function(file) {
    				process.stdout.write(file.toString() + "\n");
  				})
  				process.stdout.write('\nprompt > ');
			});
			break;
		case 'echo':
			process.stdout.write(args + "\n");
			break;
		case 'cat':
			fs.readFile(args, function(err, file) {
				if (err) throw err;
				process.stdout.write(file);
				process.stdout.write('\nprompt > ');
			});
			
			break;
		case 'head': 
			fs.readFile(args, function(err, file) {
				if (err) throw err;
				arr = file.toString().split("\n").splice(0,5);
				process.stdout.write(arr.join("\n"));
				process.stdout.write('\nprompt > ');
			});
			
			break;
		case 'tail':
			fs.readFile(args, function(err, file) {
				if (err) throw err;
				arr = file.toString().split("\n").splice(-5);
				process.stdout.write(arr.join("\n"));
				process.stdout.write('\nprompt > ');
			});
			
			break;
		default:
			process.stdout.write(`Invalid command!`);
			process.stdout.write('\nprompt > ');
			break;
	}

});
},





}

