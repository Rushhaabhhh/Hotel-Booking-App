const router = require('express').Router();
const Places = require('../Models/PlacesModel');

router.post('/addPlace', async (req, res) => {
    try {
        const newPlace = new Places(req.body);
        await newPlace.save();
        res.send({
            success: true,
            message: 'Place added successfully'
        })
    } catch (e) {
        console.log(e)
    }
})

router.get('/getPlaces', async (req, res) => {
    try {
        const places = await Places.find();
        res.send(places)
    } catch (e) {
        console.log(e)
    }
})

router.get('/getPlace/:id', async (req, res) => {
    try {
        const place = await Places.findById(req.params.id);
        res.send(place)
    } catch (e) {
        console.log(e)
    }
})

router.put('/updatePlace/:id', async (req, res) => {
    try {
        await Places.findByIdAndUpdate
        (req.params.id, req.body);
        res.send({
            success: true,
            message: 'Place updated successfully'
        })
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;

