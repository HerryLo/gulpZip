const fs = require('fs');
const fse = require('fs-extra');
const chalk = require('chalk')
const path = require('path');
const temp = path.join(__dirname, '../src');

module.exports = {
    run(type, name){
        try{
            fse.copy(temp, './')
            .then(() => {
                console.log(chalk.gray('create gulp config success!'))
            })
            .catch(err => {
                console.error(err)
            })
        }catch(e){
            console.log(e);
        }
    }
}