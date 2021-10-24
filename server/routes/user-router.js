const router = require('express').Router()
let User = require ('../models/user-db-model') // Mondgo Db Model schema

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/add').post((req, res) => {
    const id = req.body._id
    const firstName = req.body.FirstName
    const lastName = req.body.LastName

    const newUser = new User({
        _id: id,
        FirstName : firstName,
        LastName : lastName,
    });

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router