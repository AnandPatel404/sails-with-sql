/* eslint-disable linebreak-style */
module.exports = {
  tableName: 'user',
  attributes: {
    name: {
      type: 'string',
      allowNull: false,
    },
  },
  associations: function () {
    // user.hasMany(model.image, {
    //   foreignKey: {
    //     name: 'owner',
    //     allowNull: false,
    //   },
    // });
  },
  options: {
    classMethods: {},
    instanceMethods: {},
    hooks: {},
  },
};
