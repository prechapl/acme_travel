const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);
// const conn = new Sequelize(process.env.DATABASE_URL, 'MacPro6', '', { dialect: 'postgres' });


const User = conn.define('user', {
  name: Sequelize.STRING
});
const Hotel = conn.define('hotel', {
  name: Sequelize.STRING
});
const Stay = conn.define('stay', {
  day: Sequelize.INTEGER
});


Stay.belongsTo(Hotel);
Stay.belongsTo(User);
User.hasMany(Stay);
Hotel.hasMany(Stay);

const userNames = ['moe', 'larry', 'curly'];

const hotelNames = ['sheraton', 'hilton'];

const syncAndSeed = () => {
  return conn.sync({force: true})
    .then( async () => {
      const [ moe, larry, curly ] = await Promise.all( userNames.map( name => User.create({ name })));
      const [ sheraton, hilton ] = await Promise.all( hotelNames.map( name => Hotel.create({ name })));

      await Promise.all([
        Stay.create({ day: 3, userId: moe.id, hotelId: sheraton.id }),
        Stay.create({ day: 4, userId: moe.id, hotelId: sheraton.id }),
        Stay.create({ day: 5, userId: moe.id, hotelId: hilton.id }),
        Stay.create({ day: 19, userId: larry.id, hotelId: hilton.id }),
        Stay.create({ day: 4, userId: curly.id, hotelId: sheraton.id }),
        Stay.create({ day: 5, userId: curly.id, hotelId: hilton.id }),
      ])
      // return Stay.findAll();
    //   const moeStays = await ( Stay.findAll({
    //       where: { userId: 1 }
    //     })
    //   );
    //   const larryStays = await ( Stay.findAll({
    //       where: { userId: 2 }
    //     })
    //   );
    //   const curlyStays = await ( Stay.findAll({
    //       where: { userId: 3 }
    //     })
    //   );
    //   return [ moeStays, larryStays, curlyStays ]
    })


};

const moeStays = async () => {
  const moes = await Stay.findAll({ 
    where: { userId: 1 }});
  return moes;
};

// syncAndSeed()

// const stays = async () => {
//   const moeStays = await (
//       Stay.findAll({
//       where: { userId: 1 }
//     })
//   );
// return moeStays
// }

// console.log(stays())

module.exports = {
  syncAndSeed,
  moeStays
}
