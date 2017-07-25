module.exports = {
    fun2: function (res) {
        console.log('I am fun2');
        res.write('Hello 我是fun2&nbsp;&nbsp;&nbsp;');
    },
    fun3: function (res) {
        console.log('I am fun3');
        res.write('Hello 我是fun3');
    }
};