
// const { BIGINT } = require('sequelize');
module.exports.models = {
  schema: true,
  migrate: 'alter',

  attributes: {
    id: { type:'number', autoIncrement: true, allowNull: false,},

  },


  // cascadeOnDestroy: true


};
