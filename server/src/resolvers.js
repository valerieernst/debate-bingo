module.exports = {
    Query: {
        user: (initValue, { input }, { db }) => db.users.findOne({where: { id: input.id }}),
        users: (initValue, args, { db }) => db.users.findAll(),
        squares: (initValue, args, { db }) => db.squares.findAll(),
    },

    Mutation: {
        createUser: (initValue, { input }, { db }) => db.users.create(input),
        updateUser: async (initValue, { input }, { db }) => {
            const { id, ...rest } = input;
            const user = await db.users.findOne({where: {id}});
            for (const attr in rest) {
                user[attr] = rest[attr]
            }

            return await user.save();
        },
        createSquare: (initValue, { input }, { db }) => db.squares.create(input),
    },

    User: {
        board: async (user, { input }, { db }) => {
            
            const squares = await db.squares.findAll({ where: { id: user.squareIds}});
            return squares;
        }
    },
};
