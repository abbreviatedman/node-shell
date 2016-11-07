// jshint esversion: 6

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

	switch(cmd) {
		case `pwd`:
			// process.stdout.write(process.mainModule['Module'].paths[0]);
			process.stdout.write(process.cwd().toString());
			break;
		case `date`:
			var thisDate = new Date();
			process.stdout.write(thisDate.toString());
			break;
		default:
		process.stdout.write(`Invalid command!`);
			break;
	}

  process.stdout.write('\nprompt > ');

});