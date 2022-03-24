const { Blog } = require('../model');

module.exports = {
    getAllBlogs: async (req, res) => {
        try {
            const blogs = await Blog.find().populate({
                path: 'userId',
                select: '-role -powerLevel -email -hobbies'
            });

            res.json(blogs);
        } catch (error) {
            res.json(error);
        }
    }
};
