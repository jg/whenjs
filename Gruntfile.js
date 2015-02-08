module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        ts: {
            build: {
                src: ['ts/**/*.ts'],
                outDir: 'js',
                reference: 'ts/references.ts',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    compiler: 'node_modules/typescript/bin/tsc'
                }
            }
        },
        watch: {
            typescript: {
                files: '**/*.ts',
                tasks: ['ts:build']
            }
        }
    });
    grunt.registerTask('default', 'watch');
};
