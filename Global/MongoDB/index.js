const eventEmitter=require('events')
global.Mongoose=require('mongoose')

global.connectedEmitter=new eventEmitter()

Mongoose.connect('mongodb://localhost/crudapi');
global.db = Mongoose.connection;
// console.log("db-----.",db);

console.log("Connection established to MongoDB");

// for(let con of db){
//     con.authenticate().then(() => {
//       console.log(`Connection has been established successfully.`);
  
//       global.connectedEmitter.emit('connectedDbs')
//     }).catch(err => {
//       console.error('Sorrry Unable to connect to the database:', err);
//     });
//   }
