![twilioo](https://github.com/hrishikesh1427/TwilioGroceryApp/assets/84369074/ac557ffb-96ae-49b4-a032-f09f5d74b79d)
![twilioWhatsapp](https://github.com/hrishikesh1427/TwilioGroceryApp/assets/84369074/8d0b537e-98c0-4e97-848d-7dd334eedf2a)

# Twilio Grocery App

This project is a web application built with React for the frontend and Node.js for the backend. It allows users to place orders for grocery items, and notifications about new orders are sent to the shopkeeper using Twilio's API.

## Features
- Users can select grocery items and place orders.
- Orders are sent to the shopkeeper via WhatsApp using Twilio.
- Responsive and aesthetically pleasing user interface.

## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express
- **Communication:** Twilio API for WhatsApp messaging

## Setup Instructions

### Prerequisites
Before running the application, ensure you have the following installed:
- Node.js and npm (Node Package Manager)
- React
- Twilio Account SID and Auth Token (for sending WhatsApp messages)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/hrishikesh1427/TwilioGroceryApp.git
    cd TwilioGroceryApp
    ```

2. **Install dependencies**

    - **Frontend dependencies**
        ```bash
        cd client
        npm install
        ```

    - **Backend dependencies**
        ```bash
        cd ../backend
        npm install
        ```

3. **Set up Twilio**
    - Create a Twilio account if you don't have one: [Twilio Sign Up](https://www.twilio.com/try-twilio)
    - Obtain your Twilio Account SID and Auth Token from the Twilio Console.
    - Update the `accountSid` and `authToken` variables in `backend/index.js` with your Twilio credentials.

4. **Start the server**

    - **Backend server** (from the `/backend` directory)
        ```bash
        npm start
        ```

    - **React development server** (from the `/client` directory)
        ```bash
        npm start
        ```

5. **Access the application**
    Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the React application.

## Usage
1. Navigate through the products listed on the website.
2. Select the quantity of each product and fill in your contact details.
3. Submit the order using the "Submit Order" button.
4. You will receive a success message if the order is sent successfully.
5. The shopkeeper will receive a WhatsApp message containing the order details.

## Screenshots
Insert screenshots of your application here.

## Contributing
Feel free to contribute to this project by forking the repository, making enhancements, and creating pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- This project uses Twilio's API for WhatsApp messaging.
- Bootstrap and React Bootstrap for UI components.


License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
This project uses Twilio's API for WhatsApp messaging.
Bootstrap and React Bootstrap for UI components.
