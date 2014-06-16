module.exports = function(grunt) {

	grunt.initConfig({
		gremlins: {
		  tests: {
		    options: {
		      path: './index.html'
		    }
		  }
		}
	});

	grunt.loadNpmTasks('grunt-gremlins');
	  // Default task(s).
  grunt.registerTask('default', ['gremlins']);
};