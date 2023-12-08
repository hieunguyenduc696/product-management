const UserModel = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { jwtSecret } = require('../constants')

const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                status: 400,
                msg: 'User not found',
            });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({
                status: 400,
                msg: 'Wrong password',
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            jwtSecret,
        );

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 1800000,
            signed: true,
        });

        return res.status(200).json({
            status: 200,
            msg: 'Login successfully',
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            msg: 'Internal Server Error',
        });
    }
}

module.exports = {
    login
}