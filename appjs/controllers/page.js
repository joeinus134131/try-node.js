var Cart = require('../models/cart');
var Flower = require('../models/flower');

exports.Home = (req, res) => {
    var cart = new.Cart(req.session.cart ? req.session.cart : {});
    var flower = new.Flower();

    flower.getDeals((err, result) => {
        if(err) throw err;
        res.render('index', {title: 'Home', flowers: result, total: cart.totalItem
    });
    })
}