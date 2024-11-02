const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('audio'), (req, res) => {
    if (req.file) {
        console.log('File uploaded successfully:', req.file);
        res.status(200).send('File uploaded successfully');
    } else {
        res.status(400).send('File upload failed');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});