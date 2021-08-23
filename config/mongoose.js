const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/contacts_lists_db');
mongoose.connect('mongodb://localhost/contacts_lists_db', {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected');
}); 