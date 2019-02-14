const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);


const User = conn.define('user', {
  name: Sequelize.STRING
});
const Hotel = conn.define('hotel', {
  name: Sequelize.STRING
});
const Stay = conn.define('stay', {
  day: Sequelize.INTEGER
});

Hotel.hasMany(User);
// Hotel.belongsTo(User);

const userNames = ['moe', 'larry', 'curly'];

const hotelNames = ['sheraton', 'hilton'];

const syncAndSeed = () => {
  return conn.sync({force: true})
    .then( async () => {
      const [ moe, larry, curly ] = await Promise.all( userNames.map( name => User.create({ name })));
      const [ sheraton, hilton ] = await Promise.all( hotelNames.map( name => Hotel.create({ name })));
    })
}

syncAndSeed()
