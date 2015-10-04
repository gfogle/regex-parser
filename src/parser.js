var fs = require("fs");

var blacklist = [
	'.DS_Store'
];
var emails = [
	'(\w+).(\w+).edu', // example@example.edu
	'(\w+).(\w+).(\w+).edu' // example@example.example.edu
];
var phones = [
	'(\d)-(\d)-(\d)' // ###-###-####
];

module.exports = {
	/*
	 * @function parseDirectory
	 * @description parses files in directory for emails and phone numbers
	 *
	 * @param {string} directory - relative file path and filename
	 *
	 * @returns {object} object with keys for emails, phones and counts found
	 */
	parseDirectory: function (directory) {
		var processed = 0;
		fs.readdir(directory, function (err, files) {
			console.log("Files in Directory: ", files);

			if (err) {
				console.error(err);
				return null;
			}
			files.forEach(function(file, index) {
				console.log("File: ", file, blacklist.indexOf(file), processed);

				if (blacklist.indexOf(file) === -1) {
					console.log("Processing File: ", file);

					var contents = fs.readFileSync(directory + "/" + file, 'utf8');

					console.log("Read File: ", file, typeof(contents));
					emails.forEach(function (regex) {
						var matches = (contents.toString()).match(regex);
						console.log("Matching: ", regex, matches);
					})
				}
			});
		});
	}
};