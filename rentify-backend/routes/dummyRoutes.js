const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    return res.send("okay, I'm here. yeah it's me")
})

module.exports = router;