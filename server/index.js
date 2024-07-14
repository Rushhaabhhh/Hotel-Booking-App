const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;

db.on('error', (error) => console.error(error));

const PORT = 5000;

app.use('/users', require('./Routes/UserRoutes'))
app.use('/places', require('./Routes/PlacesRoute'))
app.use('/bookings', require('./Routes/BookingRoute'))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})