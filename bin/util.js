const fs = require('fs-extra');
const chalk = require('chalk')
const path = require('path');
const temp = path.join(__dirname, '../src');

module.exports = {
    run(type, name){
        try{
            fs.copy(temp, './${name}')
            .then(() => {
                console.log(chalk.gray('create gulp config success!'))
            })
            .catch(err => console.error(err))
        }catch(e){
            console.log(e);
        }
    }
}