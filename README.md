
---

# 🏠 Roommates

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
Roommates is a web application designed to help people find roommates. Users can search for available rooms, add new listings, and contact potential roommates. The application includes user authentication, room management, and a map feature for visualizing room locations.

## Features
✨ User Authentication (Sign Up, Login)  
🏠 Add, Edit, and Delete Room Listings  
🔍 Search for Rooms by Location  
🗺️ Map View of Room Listings  
🔒 Protected Routes for Authenticated Users

## Technologies Used
- **Frontend**: React, React Router, Redux
- **Backend**: Appwrite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/toindranildutta/Rooms-in-Bankura.git
   cd roommates
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the necessary environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
Once the server is running, you can navigate to `http://localhost:5173` in your browser to use the application.

## Routes
- `/` - Home Page
- `/login` - User Login
- `/signup` - User Signup
- `/all-listings` - View All Rooms (Protected)
- `/verify` - Email Verification
- `/add-listing` - Add a New Room (Protected)
- `/edit-room/:slug` - Edit a Room (Protected)
- `/rooms/:slug` - View a Specific Room
- `/rooms-map` - View Rooms on a Map
- `/contact-us` - Contact Us Page

## Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

```
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="Your Data"
VITE_APPWRITE_DATABASE_ID="Your Data"
VITE_APPWRITE_COLLECTION_ID="Your Data"
VITE_APPWRITE_BUCKET_ID="Your Data"
VITE_TINYMCE_API="api key"
VITE_VERIFICATION_PATH="http://localhost:5173/verify"
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Your Name - [toindranildutta@gmail.com](mailto:toindranildutta@gmail.com)

Project Link: [https://github.com/toindranildutta/Rooms-in-Bankura](https://github.com/toindranildutta/Rooms-in-Bankura)

## Credit
If you use this project, please mention us in the credits. 🌟

---
