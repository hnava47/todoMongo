const mongoose = require('mongoose');
const { faker, Faker } = require('@faker-js/faker');
const {
    User,
    Todo,
    Blog,
    Like
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await User.deleteMany({});
    await Todo.deleteMany({});
    await Like.deleteMany({});
    await Blog.deleteMany({});

    const usersToCreate = [
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Admin'
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Admin'
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Admin'
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Admin'
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee'
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee'
        }
    ];

    const users = await User.insertMany(usersToCreate);

    const todosToCreate = [
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random() * users.length)]._id
        }
    ];

    const todos = await Todo.insertMany(todosToCreate);

    const blogsToCreate = [
        {
            userId: users[Math.floor(Math.random() * users.length)]._id,
            description: faker.lorem.paragraph()
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id,
            description: faker.lorem.paragraph()
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id,
            description: faker.lorem.paragraph()
        }
    ]

    await Blog.insertMany(blogsToCreate);

    const likesToCreate = [
        {
            userId: users[0]._id
        },
        {
            userId: users[0]._id
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id
        },
        {
            userId: users[Math.floor(Math.random() * users.length)]._id
        }
    ];

    const [like1, like2] = await Like.insertMany(likesToCreate);
    // const firstBlog = blogs[0];

    // -1 descending from highest to lowest
    // 1 ascending from lowest to highest
    // Use limit() and skip() for pagination
    const blogs = await Blog.find({}).sort({ description: -1 }).limit(3).skip(1);

    console.log(blogs);

    // How to add like
    // const updatedBlog = await Blog.findByIdAndUpdate(
    //     firstBlog._id,
    //     {
    //         $addToSet: {
    //             likeIds: [like1, like2]
    //         }
    //     },
    //     {
    //         new: true
    //     }
    // ).populate({
    //     path: 'likeIds',
    //     populate: 'userId'
    // });

    // firstBlog.likeIds.push(like1);
    // firstBlog.likeIds.push(like2);

    // await firstBlog.save();

    // console.log('After adding', updatedBlog.likeIds);

    // How to remove like
    // const updatedBlogPartTwo = await Blog.findByIdAndUpdate(
    //     firstBlog._id,
    //     {
    //         $pull: {
    //             likeIds: like1._id
    //         }
    //     },
    //     {
    //         new: true
    //     }
    // ).populate({
    //     path: 'likeIds',
    //     populate: 'userId'
    // });

    // console.log('After removing', updatedBlogPartTwo.likeIds);

    // const employees = await User.findByRole('Employee');

    // employees.forEach(employee => employee.greeting());

    process.exit(0);
};

seedDb();
