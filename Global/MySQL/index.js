const eventEmitter=require('events')
const Sequelize=require('sequelize')

global.connectedEmitter=new eventEmitter()
global.Op=Sequelize.Op

global.sequelizeCredentials = new Sequelize('EmployeeDatabase', 'shreyadb','shreyadbs', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 20000
    },
    operatorsAliases: false
  })

  
  
let seq= [sequelizeCredentials]

for(let con of seq){
    con.authenticate().then(() => {
      console.log(`Connection has been established successfully for ${con.config.username}.`);
  
      global.connectedEmitter.emit('connectedDbs')
    }).catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }

