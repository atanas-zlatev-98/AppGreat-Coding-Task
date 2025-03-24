const {docController} = require('../controllers/documentController');

function configRoutes(app){
    app.use(docController)
}

module.exports = {configRoutes}