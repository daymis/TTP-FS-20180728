const router = require('express').Router();

//user model
const User = require('../../models/User');

//@route    GET api/users
//@desc     get all users
router.get('/', (req, res) => {
  User.find()
    .sort({ email: -1 })
    .then(users => res.json(users));
});

//@route    GET api/users/:id
//@desc     Find a  user
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ success: false }));
});

//@route    POST api/users
//@desc     Create a new user
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save()
    .then(user => res.json(user));
});

module.exports = router;