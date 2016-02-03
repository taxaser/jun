//index page
exports.main = function(req, res) {
    res.render('main/main',{
        title: "测试用例"
    });

};


exports.left = function(req, res) {
    res.render('main/left',{
        title: "测试用例"
    });

};

exports.top = function(req, res) {
    res.render('main/top',{
        title: "测试用例"
    });

};