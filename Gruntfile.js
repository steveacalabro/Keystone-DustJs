'use strict()';

module.exports = function (grunt) {
    grunt.initConfig({
        concurrent: {
            tasks: ['watch', 'nodemon'],
            options: {
                logConcurrentOutput: true
            }
        },
        jshint: {
            server: [
                '**/keystone.js',
                'routes/**/*.js',
                '!node_modules/**/*.js'
            ],
            options: {
                node: true
            }
        },
        nodemon: {
            options: {
                port: 3000,
                watch: ['templates', 'public/images', 'routes', 'public/styles'],
                ext: 'js, dust, less'
            },
            dev: {
                script: 'keystone.js'
            }
        },
        less: {
            build: {
                options: {
                    compress: true,
                    cleancss: true,
                    ieCompat: true,
                    paths: ['public/styles']
                },
                files: [
                    { 'public/styles/site.min.css': 'public/styles/site.less' },
                    { 'node_modules/keystone/public/styles/admin.less': 'public/styles/admin.less' },
                    { 'node_modules/keystone/public/styles/login.less': 'public/styles/login.less' },
                    { 'node_modules/keystone/public/styles/keystone.min.css': 'node_modules/keystone/public/styles/keystone.less' }
                ]
            }
        },
        watch: {
            js: {
              files: 'routes/**/*.js',
              tasks: ['newer:jshint']
            },
            less: {
              files: 'public/styles/**/*.less',
              tasks: ['newer:less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('default', [
        'concurrent'
    ]);
};
