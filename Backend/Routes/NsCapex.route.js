const express = require('express');
const router = express.Router();

const NsCapex = require('../Models/NsCapex.model');


//send data to db
router.post('/NsCapex', async (req, res) => {
    try {
        const data = req.body

        //create person document on database using the mongoose model
        const createNewNsCapes = new NsCapex(data);

        //save data 
        const response = await createNewNsCapes.save();
        console.log("data save successfully");
        res.status(200).json(response);
    } catch (error) {
        console.log("something error", error);
        res.status(500).json({ error: "internal server error" });
    }
});


// get data from db

router.get('/NsCapex', async (req, res) => {
    try {
        const data = await NsCapex.find();
        console.log('data fatch successfully');
        res.status(200).json(data);
    } catch (error) {
        console.log("something error", error);
        res.status(500).json({ error: "internal server error" });
    }
})


module.exports = router;