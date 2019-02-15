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
  day: Sequelize.INTEGER,
  hotelName: Sequelize.STRING,
  userName: Sequelize.STRING
});

Stay.belongsTo(Hotel);
Stay.belongsTo(User);

const userNames = ['moe', 'larry', 'curly'];

const hotelNames = ['sheraton', 'hilton'];

const syncAndSeed = () => {
  return conn.sync({force: true})
    .then( async () => {
      const [ moe, larry, curly ] = await Promise.all( userNames.map( name => User.create({ name })));
      const [ sheraton, hilton ] = await Promise.all( hotelNames.map( name => Hotel.create({ name })));

      await Promise.all([
        // Stay.create({ day: 3, userId: moe.id, hotelId: sheraton.id }),
        Stay.create({ day: 3, userName: 'Moe', hotelName: 'Sheraton' }),
        Stay.create({ day: 4, userName: 'Moe', hotelName: 'Sheraton' }),
        Stay.create({ day: 5, userName: 'Moe', hotelName: 'Hilton' }),
        Stay.create({ day: 19, userName: 'Larry', hotelName: 'Hilton' }),
        Stay.create({ day: 4, userName: 'Curly', hotelName: 'Sheraton' }),
        Stay.create({ day: 5, userName: 'Curly', hotelName: 'Hilton' }),
      ])
    })
};

module.exports = {
  syncAndSeed,
  Stay,
  Hotel,
  User
}
