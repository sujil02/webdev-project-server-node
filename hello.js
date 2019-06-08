module.exports = function (app) {
    app.get('/user', function (req, res) {
        res.send('hello world');
    });
    app.get('/user/:message', function (req, res) {
        var message = req.params['message'];
        res.send('hello ' + message)
    })
}
console.log('hello world')