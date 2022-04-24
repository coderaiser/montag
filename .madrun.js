'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'coverage': async () => `c8 ${await run('test')}`,
    'lint': () => 'putout .',
    'fresh:lint': () => run('lint', '--fresh'),
    'lint:fresh': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'report': () => 'c8 report --reporter=lcov',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test'),
    'watch:lint': async () => await run('watcher', `'npm run lint'`),
    'watch:tape': () => 'nodemon -w test -w lib --exec tape',
    'watch:coverage:base': () => run('watcher', 'nyc npm test'),
    'watch:coverage:tape': () => run('watcher', 'nyc tape'),
    'watch:coverage': () => run('watch:coverage:base'),
};

