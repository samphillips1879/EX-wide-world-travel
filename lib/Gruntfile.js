module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$scope", "$" ],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true},
        browserify: true,
        jquery: true
      },
      files: ['../app/**/*.js']
    },
    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
      // ,handlebars: {
      //   expand: true,
      //   cwd: 'node_modules/handlebars/dist/',
      //   src: ['handlebars.min.js'],
      //   dest: '../dist'
      // }
    },
    sass: {
      dist: {
        files: {
          '../css/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
      ,hbs: {
        files: ['../templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};