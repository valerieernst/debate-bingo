module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		squareIds: {
			type: DataTypes.STRING(24),
			allowNull: true,
			get() {
				return this.getDataValue('squareIds').split(';')
			},
			set(val) {
				this.setDataValue('squareIds',val.join(';'));
			},
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
