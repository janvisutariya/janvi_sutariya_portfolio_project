const service = function(req, res){
    res.render('service', {title:'About my site'});
};

module.exports = { service };