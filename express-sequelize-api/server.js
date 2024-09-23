
const express = require('express');
const sequelize = require('./db');
require('./models/associations');  

const app = express();


app.use(express.json());

sequelize.sync({ alter: true })  
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error synchronizing the database:', err);
  });


app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
