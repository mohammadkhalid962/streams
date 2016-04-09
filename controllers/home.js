//Home Controller

var Home = {
    
    index: function(req, res){
        res.render('index', { title: 'Express' });
    }
};

module.exports = Home;