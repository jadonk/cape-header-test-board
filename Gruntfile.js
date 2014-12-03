module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    xmllint: {
      application: {
        dir: '.'
      },
      options: {
        suffixes: ['xml']
      }
    }
  });
  grunt.loadNpmTasks('grunt-xmllint');
  grunt.registerTask('default', ['xmllint']);
};
