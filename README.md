# Arogya Assist - Healthcare Consulting Chatbot

A multilingual healthcare consulting chatbot built for Zoho SalesIQ that helps users book medical appointments, find nearby hospitals, and connect with doctors.

## Features

### Core Functionality
- **User Information Collection**: Collects name, age, phone number, and email
- **Hospital Suggestions**: Recommends nearby hospitals based on user location and medical needs
- **Doctor Listings**: Displays available doctors with their specializations, timings, and consultation fees
- **Appointment Booking**: Book appointments with Google Calendar integration
- **Appointment Rescheduling**: Modify or reschedule existing appointments
- **Payment Processing**: Secure payment gateway integration for consultation fees
- **Confirmation Emails**: Automated email confirmations after booking

### Multi-language Support
- English
- Tamil (தமிழ்)
- Hindi (हिंदी)

### Third-Party Integrations
- **Google Calendar API**: For appointment scheduling and management
- **Zoho SalesIQ**: Chatbot platform integration
- **OAuth 2.0**: Secure authentication
- **SMTP**: Email notifications

## Tech Stack

- **Backend**: Python (Flask)
- **Frontend**: HTML, CSS, JavaScript
- **Database**: JSON-based storage / SQLite
- **APIs**: Google Calendar API, Zoho SalesIQ API
- **Authentication**: OAuth 2.0

## Project Structure

```
ArogyaAssist/
├── app.py                 # Main Flask application
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── salesiq_script.js      # Zoho SalesIQ integration script
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── chat.js
├── templates/
│   └── index.html
└── README.md
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Ruban-raj-143/ArogyaAssist-.git
cd ArogyaAssist-
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Configure Google Calendar API
1. Go to Google Cloud Console
2. Create a new project
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials
5. Download credentials.json and place in project root

### 4. Configure Zoho SalesIQ
1. Log in to Zoho SalesIQ
2. Create a new bot or use codeless bot builder
3. Add the webhook URL pointing to your Flask server
4. Configure the bot flow

### 5. Run the Application
```bash
python app.py
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Home page |
| `/webhook` | POST | SalesIQ webhook handler |
| `/book-appointment` | POST | Book new appointment |
| `/reschedule` | POST | Reschedule appointment |
| `/hospitals` | GET | Get nearby hospitals |
| `/doctors` | GET | Get available doctors |
| `/payment` | POST | Process payment |

## Zoho SalesIQ Bot Configuration

The chatbot uses 3+ plugs as required:
1. **Welcome Plug**: Greets user and asks for language preference
2. **User Info Plug**: Collects name, age, phone, email
3. **Hospital Finder Plug**: Suggests nearby hospitals
4. **Doctor List Plug**: Shows available doctors
5. **Booking Plug**: Handles appointment scheduling
6. **Payment Plug**: Processes consultation fees

## Contest Submission

This project is submitted for **Cliqtrix 2025** - A coding contest by Zoho
- **Category**: Consulting Services (Chatbot)
- **Platform**: Zoho SalesIQ

## License

MIT License

## Author

**Ruban Raj**
- GitHub: [@Ruban-raj-143](https://github.com/Ruban-raj-143)
