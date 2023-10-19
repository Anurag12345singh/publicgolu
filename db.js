// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/admin', (err) => {
//     if (!err) {
//         console.log('DB Connected.')
//     }
// })
const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/golu', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();
