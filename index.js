import express from 'express';
import cors from 'cors';
import roomRouter from './Routers/rooms.router.js';
import bookingRouter from './Routers/booking.router.js';

const PORT = 7000;

const app = express();
app.use(cors());
app.use(express.json());

// API documentation route
app.get('/', (req, res) => {
    res.status(200).send(
      `<div style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f0f4f8;
        font-family: 'Poppins', sans-serif;
        color: #333;
        padding: 20px;
      ">
        <h1 style="
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 20px;
        ">API Guide</h1>
        <div style="
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 600px;
          width: 100%;
          text-align: center;
        ">
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">Create a room : <b style="color: #3498db;">"/rooms/createroom"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">Get all rooms : <b style="color: #3498db;">"/rooms/getrooms"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">Book a room: <b style="color: #3498db;">"/bookings/bookroom"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">List all rooms with booked data: <b style="color: #3498db;">"/bookings/bookedrooms"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">List all customers with booked data: <b style="color: #3498db;">"/bookings/customers"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 10px 0;
          ">List how many times a customer booked room: <b style="color: #3498db;">"/bookings/customerbookings/:id"</b></p>
          <p style="
            font-size: 1.2rem;
            margin: 20px 0;
          ">API DOCUMENTATION URL: <a href="https://documenter.getpostman.com/view/37178641/2sA3kXDzt5#0b0b6aad-e8d9-42e3-ad13-dcffe4bbad19" target="_blank" style="
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
          ">Click here</a></p>
        </div>
      </div>`
    );
  });
  

app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
