const router = require('express').Router();
const User = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const authMiddleware = require('../authMiddleware');


router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            return res.send({
                success: false,
                message: 'User already exists'
            }) 
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;

        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: 'User registered successfully'
        })

    } catch (e) {
        console.log(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.send({
                success: false,
                message: 'User not found'
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.send({
                success: false,
                message: 'Invalid password'
            })
        }   
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;

// router.get('/get-user', authMiddleware, async (req, res) => {
//     try {
//         const user = await User.findById(req.body.userId).select('-password')

//         res.send({
//             success: true,
//             message : 'User found',
//             data: user
//         })
//         } catch (e) {
//             console.log(e)
//         }
//     }
// )

