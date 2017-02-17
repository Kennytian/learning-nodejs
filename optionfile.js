var fs = require('fs');

module.exports = {
    readFileSync: function (path) {
        var content = fs.readFileSync(path, 'utf-8');
        console.log(content);
        console.log('Sync方法执行完毕')
    },
    readFile: function (path) {
        var content = fs.readFile(path, function (err, content) {
            if (err) {
                console.error(err);
            } else {
                console.log(content);
            }
        });
        console.log('异步方法执行完毕');
    }
};