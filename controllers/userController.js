const users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// add user
exports.addUserController = async (req, res) => {
    console.log("Inside addUserController")
    const { username, email, password } = req.body
    console.log(username, email, password)
    const encryptedPwd = await bcrypt.hash(password, 10)
    console.log(encryptedPwd)
    try {
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {
            res.status(406).json("User already exists!")
        }
        else {
            const newUser = new users({
                username, email, password: encryptedPwd, profilePic: ''
            })
            await newUser.save()
            res.status(201).json('User registered successfully!')
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.loginUserController = async (req, res) => {
    console.log('Inside loginUserController')
    const { email, password } = req.body
    console.log(email, password)
    try {
        const existingUser = await users.findOne({ email: email })
        if (existingUser) {
            if (existingUser.role === 'User') {
                const isUserPasswordMatch = await bcrypt.compare(password, existingUser.password)
                if (isUserPasswordMatch) {
                    //create jwt token
                    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_PWD)
                    res.status(200).json({ user: existingUser, token: token })

                }
                else {
                    res.status(404).json("Invalid password")
                }
            }
        }
        else {
            res.status(404).json("Invalid Email")
        }
    } catch (error) {
        res.status(406).json(error)
    }
}
exports.editUserController = async (req, res) => {
    const { profilePic } = req.body
    const userId = req.userId
    try {
        const existingUser = await users.findById({ _id: userId })
        if (existingUser) {
            existingUser.profilePic = profilePic
            await existingUser.save()
            res.status(201).json(existingUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}