module.exports = (sequelize, DataTypes) => (
    sequelize.define('squares', {
        id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		content: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
	}, {
		tableName: 'squares',
		timestamps: false
	})
);
