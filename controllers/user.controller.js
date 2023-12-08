const UserModel = require('../models/User')
const { emailRegex, passRegex } = require('../constants')
const bcrypt = require('bcryptjs');

const getUserInfo = async (req, res) => {
    const condition = {
        _id: req.user.id,
    };

    try {
        const user = await UserModel.findOne(condition).select('-password')

        if (user) {
            return res.status(200).json({
                status: 200,
                user,
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: 400,
            msg: 'Get user infor failed',
        });
    }
};

const register = async (req, res) => {
    const { email, password } = req.body

    if (!emailRegex.test(email)) {
        return res.status(400).json({
            status: 400,
            msg: 'Email is not in the correct format',
        });
    }

    if (!passRegex.test(password)) {
        return res.status(400).json({
            status: 400,
            msg: 'Password is not in the correct format',
        });
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new UserModel({
            email,
            password: hashedPassword
        })

        await user.save()

        return res.status(201).json({
            status: 201,
            msg: 'Register successfully',
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error',
        });
    }
}

module.exports = {
    getUserInfo, register
}