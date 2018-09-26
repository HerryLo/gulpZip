#!/usr/bin/env node
// const asar = require('../lib/geAsar')
const program = require('commander');
const package = require('../package.json');
const util = require('./util');

program
    .version(package.version , '-v, --version')
    .usage('<command>')
    .command('gz', 'quick create gulp config')
    .parse(process.argv);
program
    .command('gz init')
    .description('quick create gulpfile config')
    .alias('init')
    .action((type, name) => {
        util.run(type, name);
    });
program.parse(process.argv);

if (program.args.length === 0) {
    program.help()
}