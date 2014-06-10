module.exports = function(grunt) {

	grunt.initConfig({
		gremlins: {
		  tests: {
		    options: {
		      path: './examples/index.html'
		    }
		  }
		}
	});

	grunt.loadNpmTasks('grunt-gremlins');
	  // Default task(s).
  grunt.registerTask('default', ['gremlins']);
};