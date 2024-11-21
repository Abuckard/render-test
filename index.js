const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Läser in miljövariabler från .env-filen

const app = express();
app.use(express.json()); // För att hantera JSON-data

const PORT = process.env.PORT || 3000;

// Koppla till MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Enkel test-API
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
