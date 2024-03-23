const mongoose = require('mongoose');

const db_url = 'mongodb+srv://CAM:Darou235@cam.tmyijsi.mongodb.net/CAM?retryWrites=true&w=majority'

mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




const ConnectDb = async()=>{
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
            console.log('Connected to MongoDB');
    });
}

exports.ConnectDb = ConnectDb;