const db = require('../modules/db')

module.exports = {
    routeAdd: function(req, res) {
        let addParameter = req.body.addVariable
        db.add(addParameter)
    },

    routeUp: function(req, res) {
        let upParameterA = req.body.upVariableA
        let upParameterI = req.body.upVariableI
        db.update(upParameterI, upParameterA)
    },

    routeDell: function(req, res) {
        let dellParameter = req.body.dellVariable
        db.delete(dellParameter)
    }
}