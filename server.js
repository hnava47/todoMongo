const mongoose = require('mongoose');
const User = require('./model/User');

mongoose.connect('mongodb://localhost:27017/todoMongoDB')
    .then(async () => {
        console.log('Successfully connected to MongoDB');
        const newUser = await User.create({
            username: 'XRP FTW',
            role: 'Employee',
            powerLevel: 9001
        });

        console.log(newUser);
    })
    .catch(error => console.log(error));

