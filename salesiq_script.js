/**
 * Arogya Assist - Zoho SalesIQ Integration Script
 * Healthcare Consulting Chatbot for Cliqtrix 2025
 */

// SalesIQ Widget Configuration
var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
    widgetcode: "YOUR_WIDGET_CODE_HERE",
    values: {},
    ready: function() {}
};

// Initialize SalesIQ
var d = document;
var s = d.createElement("script");
s.type = "text/javascript";
s.id = "zsiqscript";
s.defer = true;
s.src = "https://salesiq.zoho.com/widget";
var t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);

// Arogya Assist Bot Configuration
const ArogyaAssist = {
    // Supported Languages
    languages: {
        en: {
            welcome: "Welcome to Arogya Assist! How can I help you today?",
            askName: "Please enter your name:",
            askAge: "Please enter your age:",
            askPhone: "Please enter your phone number:",
            askEmail: "Please enter your email address:",
            askLocation: "Please share your location or enter your city:",
            selectSpecialty: "What type of doctor do you need?",
            selectHospital: "Please select a hospital:",
            selectDoctor: "Please select a doctor:",
            selectTime: "Please select an appointment time:",
            confirmBooking: "Confirm your appointment?",
            bookingSuccess: "Your appointment has been booked successfully!",
            reschedule: "Would you like to reschedule your appointment?",
            payment: "Please complete the payment to confirm your appointment."
        },
        ta: {
            welcome: "Arogya Assist-\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bb0\u0bb5\u0bc7\u0bb1\u0bcd\u0baa\u0bc1! \u0ba8\u0bbe\u0ba9\u0bcd \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b8e\u0bb5\u0bcd\u0bb5\u0bbe\u0bb1\u0bc1 \u0b89\u0ba4\u0bb5\u0bbf \u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bae\u0bcd?",
            askName: "\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd:",
            askAge: "\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0baf\u0ba4\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd:",
            askPhone: "\u0ba4\u0baf\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0ba4\u0bc1 \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0bb2\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd\u0ba3\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd:"
        },
        hi: {
            welcome: "Arogya Assist \u092e\u0947\u0902 \u0906\u092a\u0915\u093e \u0938\u094d\u0935\u093e\u0917\u0924 \u0939\u0948! \u092e\u0948\u0902 \u0906\u091c \u0906\u092a\u0915\u0940 \u0915\u0948\u0938\u0947 \u092e\u0926\u0926 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0942\u0902?",
            askName: "\u0915\u0943\u092a\u092f\u093e \u0905\u092a\u0928\u093e \u0928\u093e\u092e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902:",
            askAge: "\u0915\u0943\u092a\u092f\u093e \u0905\u092a\u0928\u0940 \u0909\u092e\u094d\u0930 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902:",
            askPhone: "\u0915\u0943\u092a\u092f\u093e \u0905\u092a\u0928\u093e \u092b\u094b\u0928 \u0928\u0902\u092c\u0930 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902:"
        }
    },

    // Medical Specialties
    specialties: [
        { id: 1, name: "General Physician", icon: "stethoscope" },
        { id: 2, name: "Cardiologist", icon: "heart" },
        { id: 3, name: "Dermatologist", icon: "skin" },
        { id: 4, name: "Orthopedic", icon: "bone" },
        { id: 5, name: "Pediatrician", icon: "baby" },
        { id: 6, name: "Gynecologist", icon: "female" },
        { id: 7, name: "ENT Specialist", icon: "ear" },
        { id: 8, name: "Dentist", icon: "tooth" }
    ],

    // Sample Hospitals Data
    hospitals: [
        {
            id: 1,
            name: "Apollo Hospital",
            address: "21, Greams Lane, Chennai",
            rating: 4.5,
            distance: "2.5 km"
        },
        {
            id: 2,
            name: "Fortis Hospital",
            address: "154, Sector 44, Gurugram",
            rating: 4.3,
            distance: "3.2 km"
        },
        {
            id: 3,
            name: "AIIMS",
            address: "Ansari Nagar, New Delhi",
            rating: 4.8,
            distance: "5.0 km"
        }
    ],

    // Sample Doctors Data
    doctors: [
        {
            id: 1,
            name: "Dr. Priya Sharma",
            specialty: "General Physician",
            hospital: "Apollo Hospital",
            fee: 500,
            timing: "9:00 AM - 1:00 PM",
            rating: 4.7
        },
        {
            id: 2,
            name: "Dr. Rajesh Kumar",
            specialty: "Cardiologist",
            hospital: "Fortis Hospital",
            fee: 1000,
            timing: "2:00 PM - 6:00 PM",
            rating: 4.9
        }
    ],

    // User Session Data
    userData: {
        name: "",
        age: "",
        phone: "",
        email: "",
        location: "",
        language: "en",
        selectedHospital: null,
        selectedDoctor: null,
        appointmentTime: null
    },

    // Initialize Bot
    init: function() {
        console.log("Arogya Assist initialized");
        this.showLanguageSelection();
    },

    // Show Language Selection
    showLanguageSelection: function() {
        $zoho.salesiq.floatbutton.visible("show");
    },

    // Set Language
    setLanguage: function(lang) {
        this.userData.language = lang;
        this.showWelcome();
    },

    // Show Welcome Message
    showWelcome: function() {
        var lang = this.userData.language;
        var message = this.languages[lang].welcome;
        this.sendMessage(message);
    },

    // Send Message to Chat
    sendMessage: function(message) {
        $zoho.salesiq.visitor.chat(message);
    },

    // Book Appointment via API
    bookAppointment: function(data) {
        fetch('/book-appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                this.sendMessage(this.languages[this.userData.language].bookingSuccess);
            }
        })
        .catch(error => console.error('Error:', error));
    },

    // Reschedule Appointment
    rescheduleAppointment: function(appointmentId, newTime) {
        fetch('/reschedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appointmentId: appointmentId,
                newTime: newTime
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Rescheduled:', result);
        })
        .catch(error => console.error('Error:', error));
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    ArogyaAssist.init();
});
