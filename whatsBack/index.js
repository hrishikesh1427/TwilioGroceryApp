

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = 5000;

// Twilio credentials
const accountSid = 'addyours';
const authToken = 'addyours';

const client = new twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.post('/order', (req, res) => {
  const { name, phone, products } = req.body;

  const productDetails = products
    .filter((product) => product.quantity > 0)
    .map((product) => `${product.name} (${product.quantity} kg)`).join(', ');

  if (productDetails.length === 0) {
    return res.status(400).json({ success: false, error: 'No products selected' });
  }

  client.messages
    .create({
      body: `New order from ${name}. Products: ${productDetails}. Contact: ${phone}`,
      from: 'whatsapp:+14155238886', // Twilio Sandbox number
    to: 'whatsapp:+916361769148', // Your WhatsApp number
    })
    .then((message) => res.json({ success: true, messageSid: message.sid }))
    .catch((err) => res.status(500).json({ success: false, error: err.message }));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
