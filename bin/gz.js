#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');
const util = require('./util');

program
    .version(package.version , '-v, --version')
    .option('-n, --num', 'max number', parseInt)
    .usage('<command>')

program
    .command('file <fileName>')
    .description('get file information')
    .action((file, pro) => {
        util.file(file, pro);
    })
    
program.parse(process.argv);

if (program.args.length === 0) {
    program.help()
}