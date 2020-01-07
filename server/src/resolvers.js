module.exports = {
    Query: {
        user: (initValue, args, { db }) => db.users.findOne(),
        users: (initValue, args, { db }) => db.users.findAll(),
        squares: (initValue, args, { db }) => db.squares.findAll(),
    },
};
