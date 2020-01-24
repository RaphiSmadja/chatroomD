var express = require('express');
var router = express.Router();

const models = require("../models");
const Users = models.Users;

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.type("json");
	Users.findAll({
		attributes: [sequelize.fn('COUNT')]
	});
});

router.post('/',function(req, res) {
	res.type("json");
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	let pseudo = req.body.pseudo;
	let avatar = req.body.avatar;
	let email = req.body.email
	let password = req.body.firstname;
	let gender = req.body.gender;
	Users.findOne({
	    where: {
	        email: email
	    }
	}).then(userfound => {
	    if (userfound) {
	        res.json({msg: "NOK", resultCode: 0, result: "User Already Existed"});
	    } else {
	    	Users.create({
                    firstname: firstname,
                    lastname: lastname,
                    pseudo: pseudo,
                    gender: gender,
                    email: email,
                    phone: phone,
                    password: bcrypt.hashSync(password, 10),
                    avatar: avatar,
                    status: 1
                }).then(user => {
                    if (user) {
                        res.json({msg: "OK", resultCode: 1, result: user});
                    } else {
                        res.json({msg: "NOK", resultCode: 0, result: "Unable to create user"});
                    }
                }).catch(err => {
                    res.json({msg: "NOK", resultCode: 0, err: err});
                });
	    }
	}).catch(err => {
		res.json({msg: "NOK", resultCode: 0, err: err});
    });
})

module.exports = router;
