var db = require('../utils/db');
var mqtt = require("../utils/mqtt");

var controller={
  getStatusInfo: function(req, res){
    db.get(req.params.uuid, req.params.node, function(obj){
      res.json(JSON.parse(obj))
    })
  },
  setStatusInfo:function(req,res){
    db.update(req.params.uuid, req.params.node, req.body, function(doc){
      mqtt.publish(req.params.uuid+"/"+req.params.node+"/update", JSON.stringify(doc))
    })
    res.json(req.body);
  },
}

module.exports = controller;
