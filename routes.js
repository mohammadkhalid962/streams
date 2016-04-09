//Local deps
var controllers = require("./controllers");

var Router = {
    init: function(app) {
    //Home page
    app.get("/", controllers.Home.index);
    //Users
    app.get("/users", controllers.Users.index);
    //About
    app.get("/about", controllers.About.index);
    
    }
    
};

module.exports = Router;