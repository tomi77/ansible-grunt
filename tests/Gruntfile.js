module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', []);
}
