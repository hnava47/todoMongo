const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

// The Schema is very similar to the "class" that we were creating in Sequelize
const userSchema = new Schema({
    // username: String
    firstName: String,
    lastName: String,
    username: {
        type: String,
        trim: true,
        // minLength: 4,
        // maxLength: 8,
        // sets required to true and sets our own custom error message when not passed in
        // 1st element is whether it's required or not
        // 2nd element is the custom error message
        required: [true, 'Username is required and must be a minimum of 4 and maximum of 8 characters']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            // actual value for email that the user is providing
            validator: function(value) {
                return isEmail(value);
            },
            // userObject is the whole object that the user is trying to save
            message: function(userObject) {
                return `${userObject.email} is not a valid email address`;
            }
        }
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
    },
    hobbies: [String],
    twoFavoriteCrypto: {
        firstFavorite: {
            type: String,
            uppercase: true,
            trim: true
        },
        secondFavorite: {
            type: String,
            uppercase: true,
            trim: true
        }
    },
    todoIds: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Todo'
        }
    ]
},
{
    toJSON: {
        virtuals: true
}
});

userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

// Model methods
userSchema.statics.findByRole = async function(role) {
    return await this.find({ role });
}

// Instance methods
userSchema.methods.greeting = function() {
    console.log(`Hi my username is ${this.username}, my role is ${this.role}`);
}

const User = model('User', userSchema);

module.exports = User;
