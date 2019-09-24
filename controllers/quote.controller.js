const Quote = require('../models/quote.model');

exports.quote_create = function (req, res) {
    let quote = new Quote(
        {
            author: req.body.author,
            body: req.body.body
        }
    );
    quote.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('quote Created successfully')
    })
};

exports.quote_read = function (req, res, next) {
    Quote.findById(req.params.id, function (err, quote) {
        if (err) return next(err);
        res.send(quote);
    })
};

exports.quote_magic = function (req, res) {
    Quote.findRandom((err, result) => {
        if (!err) {
            res.send(result)
        }
    })
};

exports.quote_update = function (req, res) {
    Quote.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, quote) {
        if (err) return next(err);
        res.send('quote udpated.');
    });
};

exports.quote_delete = function (req, res) {
    Quote.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};