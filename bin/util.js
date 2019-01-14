const fs = require('fs');
const fse = require('fs-extra');
const chalk = require('chalk')
const path = require('path');

module.exports = {
    file(file, pro){
        try{
            const fil_path = path.join(__dirname, file);
            fs.stat(fil_path, (err, stats)=> {
                if(err){
                    console.log(chalk.red(err)+'\n');
                    console.log(chalk.blue('Please enter a valid file or directory!'));
                    return false;
                }
                const fileInfo = {
                    fileName: file,
                    dirName: fil_path,
                    byte: stats.size,
                    fileSize: stats.blksize/(1024*1024)+'kb',
                    createTime: new Date(stats.birthtime).toLocaleString(),
                    changeTime: new Date(stats.ctime).toLocaleString()
                }
                console.log(fileInfo);
            })
        }catch(e){
            console.log(e);
        }
    }
}