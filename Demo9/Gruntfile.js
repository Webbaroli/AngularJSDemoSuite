module.exports = function ( grunt ) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-angular-gettext');

    //include delle configurazioni
    var userConfig = require( './build.config.js' );

    var taskConfig = {
        //contiene le info del package.json
        package_json: grunt.file.readJSON("package.json"),

        //dovrebbe eliminare le due cartelle di build e compile
        clean: [
            '<%= build_dir %>',
            '<%= compile_dir %>'
        ],

        //copia file da una cartella all'altra
        copy: {
            //copia tutti i file nella cartella assets in build/asssets
            build_app_assets: {
                files: [
                    {
                        src: [ '**' ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: 'src/assets',
                        expand: true
                    }
                ]
            },
            //copia tutti i vendor assets(vedi build.config.js per i path) in build/assets/
            build_vendor_assets: {
                files: [
                    {
                        src: [ '<%= vendor_files.assets %>' ],
                        dest: '<%= build_dir %>/assets/',
                        cwd: '.',
                        expand: true,
                        flatten: true
                    }
                ]
            },
            //copia tutti i file js nella cartella build/src (lascia invariata la struttura della gerarchia cartelle
            build_appjs: {
                files: [
                    {
                        src: [ '<%= app_files.js %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            //copia tutti i vendor file js in build/vendor lasciando invariata la struttura della gerarchia delle directory
            build_vendorjs: {
                files: [
                    {
                        src: [ '<%= vendor_files.js %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            //copia tutti i vendor css in build/vendor lasciando invariata la gerarchia delle cartelle
            build_vendorcss: {
                files: [
                    {
                        src: [ '<%= vendor_files.css %>' ],
                        dest: '<%= build_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            //copia gli assets da build/assets a compile assets...
            //e
            //copia i vendor css in dist/vendor
            compile_assets: {
                files: [
                    {
                        src: [ '**' ],
                        dest: '<%= compile_dir %>/assets',
                        cwd: '<%= build_dir %>/assets',
                        expand: true
                    },
                    {
                        src: [ '<%= vendor_files.css %>' ],
                        dest: '<%= compile_dir %>/',
                        cwd: '.',
                        expand: true
                    }
                ]
            }
        },

        //crea i css con less
        /*
         files:{
         'pathToDest' : 'pathToSource'
         }
         */
        less: {
            build: {
                files: {
                    '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css': '<%= app_files.less %>'
                }
            },
            compile: {
                files: {
                    '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css': '<%= app_files.less %>'
                },
                options: {
                    cleancss: true,
                    compress: true
                }
            }
        },

        //concatena tutti i file css in uno solo css e i js in un unico js
        concat: {
            build_css: {
                src: [
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css'
                ],
                dest: '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css'
            },
            //module prefix e module suffix servono a includere tutti il js in una funzione IIFE
            //Immediately Invoked Function Expression cosi che carica tutto subito...
            compile_js: {
                src: [
                    '<%= vendor_files.js %>',
                    'module.prefix',
                    '<%= build_dir %>/src/**/*.js',
                    '<%= html2js.app.dest %>',
                    '<%= build_dir %>/translations.js',
                    'module.suffix'
                ],
                dest: '<%= compile_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.js'
            }
        },

        //minify js code
        uglify: {
            compile: {
                files: {
                    '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
                }
            }
        },

        //rileva errori nel codice js
        jshint: {
            src: [
                '<%= app_files.js %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },

        /*
        This plugin converts a group of templates to JavaScript and assembles them into an Angular module that primes the cache directly when the module is loaded.
        In pratica prende tutti i template e li schiaffa in un singolo modulo angularjs, nb bisogna includerlo nella lista dei moduli
        */
        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: [ '<%= app_files.templates %>' ],
                dest: '<%= build_dir %>/templates-app.js'
            },

        },

        //inizializza le variabili per compilare il file index.html (vedi funzione sotto)
        index: {
            build: {
                dir: '<%= build_dir %>',
                src: [
                    '<%= vendor_files.js %>',
                    '<%= build_dir %>/src/**/*.js',
                    '<%= html2js.app.dest %>',
                    '<%= build_dir %>/translations.js',
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css'
                ]
            },

            compile: {
                dir: '<%= compile_dir %>',
                src: [
                    '<%= concat.compile_js.dest %>',
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= package_json.name %>-<%= package_json.version %>.css'
                ]
            }
        },

        //si mette in listening di modifiche sui file e aggiorna la build al volo
        watch: {
            options: {
                livereload: true
            },
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: [ 'jshint:gruntfile' ],
                options: {
                    livereload: false
                }
            },

            jssrc: {
                files: [
                    '<%= app_files.js %>'
                ],
                tasks: [ 'jshint:src', 'copy:build_appjs' ]
            },

            assets: {
                files: [
                    'src/assets/**/*'
                ],
                tasks: [ 'copy:build_app_assets', 'copy:build_vendor_assets' ]
            },

            html: {
                files: [ '<%= app_files.html %>' ],
                tasks: [ 'index:build' ]
            },

            tpls: {
                files: [
                    '<%= app_files.templates %>',
                ],
                tasks: [ 'html2js', 'nggettext_extract' ]
            },

            less: {
                files: [ 'src/**/*.less' ],
                tasks: [ 'less:build' ]
            },
            po: {
                files: ['<%= language_dir %>/*.po'],
                tasks: ['nggettext_compile']
            }

        },

        nggettext_extract: {
            pot: {
                files: {
                    '<%= language_dir %>/template.pot': ['src/**/*.html']
                }
            }
        },
        nggettext_compile: {
            all: {
                files: {
                    '<%= build_dir %>/translations.js': ['<%= language_dir %>/*.po']
                }
            }
        }

    };

    grunt.initConfig( grunt.util._.extend( taskConfig, userConfig ) );

    //task di 'reset' -> elimina le due directory
    grunt.registerTask( 'reset', [ 'clean' ] );

    //task per sviluppare, rileva le modifiche ai file, quindi cancella, ribuilda e si rimette in listening
    grunt.registerTask( 'development', [ 'build', 'watch' ] );

    //se lancio "grunt" mi genera sia la cartella di build sia quella di dist
    grunt.registerTask( 'default', [ 'build', 'compile' ] );

    grunt.registerTask('test_extract', ['nggettext_extract']);
    grunt.registerTask('test_compile', ['nggettext_compile']);

    //task da eseguire per la build (development)
    grunt.registerTask( 'build', [
        'clean', 'nggettext_extract', 'nggettext_compile',  'html2js', 'less:build',
        'concat:build_css', 'copy:build_app_assets', 'copy:build_vendor_assets',
        'copy:build_appjs', 'copy:build_vendorjs', 'copy:build_vendorcss', 'index:build'
    ]);

    //task da eseguire per la dist (production)
    grunt.registerTask( 'compile', [
        'less:compile', 'copy:compile_assets', 'concat:compile_js', 'uglify', 'index:compile'
    ]);

    function filterForJS ( files ) {
        return files.filter( function ( file ) {
            return file.match( /\.js$/ );
        });
    }

    function filterForCSS ( files ) {
        return files.filter( function ( file ) {
            return file.match( /\.css$/ );
        });
    }

    //vedere il task index sopra
    //this.data corrisponde a index.build o index.compile
    grunt.registerMultiTask( 'index', 'Process index.html template', function () {

        //1)Prepara i path dei file css e js da includere
        //restituisce l'espressione regolare "(build|compile)\/"
        var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g' );
        //rimpiazza tutti i nomi dei css rimuovendo "build/" o "compile/" nel path
        var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
            return file.replace( dirRE, '' );
        });
        //rimpiazza tutti i nomi dei js rimuovendo "build/" o "compile/" nel path
        var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
            return file.replace( dirRE, '' );
        });

        //2)sostituisce i valori precalcolati nel template e lo processa
        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function ( contents, path ) {
                //assegna alla variabile 'styles' in index.html l'array di stili css
                //assegna alla variabile 'scripts' in index.html l'array di script js
                //NB <% %> sono i tag dei template grunt
                return grunt.template.process( contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles
                    }
                });
            }
        });
    });


};
