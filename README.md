"# Hall-booking-api" 


# Hall Booking API

This is a simple Hall Booking API built using Node.js and Express. The API allows you to create rooms, book rooms, and retrieve booking information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create a Room](#create-a-room)
  - [Get All Rooms](#get-all-rooms)
  - [Book a Room](#book-a-room)
  - [List All Booked Rooms](#list-all-booked-rooms)
  - [List All Customers](#list-all-customers)
  - [Get Customer Bookings](#get-customer-bookings)
- [Postman Documentation](#postman-documentation)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/hall-booking-api.git
   cd hall-booking-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can use Postman or any other API client to interact with the API. The server will be running on `http://localhost:7000`.

## API Endpoints

### Create a Room

- **URL:** `/rooms/createroom`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "room_name": "Luxury Room",
    "seats_available": 5,
    "amenities": ["ac", "tv", "wifi"],
    "price_per_hour": 500
  }
  ```

### Get All Rooms

- **URL:** `/rooms/getrooms`
- **Method:** `GET`

### Book a Room

- **URL:** `/bookings/bookroom`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "customer_id": 101,
    "customer_name": "Hemapriya",
    "date": "10-07-2024",
    "start_time": "10-07-2024-09-00-00",
    "end_time": "10-07-2024-12-00-00",
    "room_id": 1
  }
  ```

### List All Booked Rooms

- **URL:** `/bookings/bookedrooms`
- **Method:** `GET`

### List All Customers

- **URL:** `/bookings/customers`
- **Method:** `GET`

### Get Customer Bookings

- **URL:** `/bookings/customerbookings/:id`
- **Method:** `GET`
- **Params:**
  - `id`: Customer ID

## Postman Documentation

For detailed API documentation and to try out the endpoints, visit the [Postman Documentation](https://documenter.getpostman.com/view/37178641/2sA3kXDzt5#0b0b6aad-e8d9-42e3-ad13-dcffe4bbad19).
[backendDeployment](https://hall-booking-api-6t15.onrender.com/).

