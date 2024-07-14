const router = require('express').Router();
const BookingModel = require('../Models/BookingModel');

router.post('/addBooking', async (req, res) => {
    try {
        const newBooking = new BookingModel(req.body);
        await newBooking.save();
        res.send({
            success: true,
            message: 'Booking added successfully'
        })
    } catch (e) {
        console.log(e)
    }
})


router.get('/getBooking/:id', async (req, res) => {
    try {
        const booking = await
        BookingModel.findById(req.params.id);
        res.send(booking)
    } catch (e) {
        console.log(e)
    }
})

router.get('/getBookings', async (req, res) => {
    try {
        const bookings = await BookingModel.find();
        res.send(bookings)
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;