var express = require('express');
var router = express.Router();
var objects_controller=require("../app/objects_controller");
var users_controller=require("../app/users_controller");

router.route("/api/v1/nodes/register/:code")
  .post(objects_controller.registerNode)

router.route("/api/v1/:uuid/nodes")
  .post(objects_controller.generateNode);


router.route("/api/v1/:uuid/:node/")
  .get(objects_controller.getStatusInfo)
  .post(objects_controller.setStatusInfo);


router.route("/api/v1/:uuid")
  .get(users_controller.getUser)
router.route("/api/v1/users")
  .post(users_controller.createUser)


router.get('/', function (req, res) {
  //ready, return the React app
  res.send("React App with data")
})

module.exports = router;
