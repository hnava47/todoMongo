const { isEmail } = require('validator');
const { User } = require('../model');

module.exports = {
    createUser: async (req, res) => {
        const { username, email, role, powerLevel } = req.body;

        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Email must be a valid email address' })
        }

        try {
            const newUser = await User.create({
                username,
                email,
                role,
                powerLevel
            });

            res.json(newUser);
        } catch (error) {
            res.json(error);
        }
    }
};