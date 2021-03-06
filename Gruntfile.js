/*
 * grunt-cache-manage
 * https://github.com/rou/grunt-cache-manage
 *
 * Copyright (c) 2014 rou
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp/*']
    },

    // Configuration to be run (and then tested).
    cache_manage: {
      default_options: {
        options: {
        },
        files: {
          'samplejs': 'test/fixtures/sample/sample.js',
          'samplecss': 'test/fixtures/sample/sample.css'
        },
        template: 'test/fixtures/sample/template.conf',
        dest: 'tmp/sample.conf'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'cache_manage', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
