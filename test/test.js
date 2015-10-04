var should = require("should");
var parser = require("../src/parser");

describe("PARSER", function () {
	describe("DIRECTORY", function () {
		it("should parse directory and return stats", function () {
			parser.parseDirectory("./test/data/dev");
		});
	});
});