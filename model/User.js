const { Schema, model } = require('mongoose');

// The Schema is very similar to the "class" that we were creating in Sequelize
const userSchema = new Schema({
    // username: String
    username: {
        type: String,
        trim: true,
        minLength: 4,
        maxLength: 8,
        require: true
    },
    role: {
        type: String,
        // an enum on a String type means that when we save this field to the database
        // it can only be 1 of the specified values in the enum array
        enum: ['Admin', 'Employee', 'Manager']
    },
    powerLevel: {
        type: Number,
        min: 1,
        max: 10000
    }
})

const User = model('User', userSchema);

module.exports = User;

