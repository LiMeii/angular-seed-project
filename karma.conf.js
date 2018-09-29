// Karma configuration
var testWebpackConfig = require('./webpack.test.js');
var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-jasmine-html-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-html-reporter',
      'karma-coverage'
    ],

    files: [
      { pattern: './src/test.ts', watched: false }
    ],

    exclude: [],

    preprocessors: {
      './src/test.ts': ['webpack', 'sourcemap', 'coverage']
    },

    reporters: ['progress', 'html', 'coverage'],

    htmlReporter: {
      outputDir: 'karma_html', // where to put the reports 
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: false, // name files instead of creating sub-directories
      pageTitle: null, // page title for reports; browser info by default
      urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
      reportName: 'report-summary-filename', // report summary filename; browser info by default
      preserveDescribeNesting: false, // folded suites stay folded 
      foldAll: false,
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],


    singleRun: false,


    concurrency: Infinity,

    webpack: {
      module: testWebpackConfig.module,
      resolve: testWebpackConfig.resolve,
      plugins: testWebpackConfig.plugin
    }
  })
}
