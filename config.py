# Arogya Assist Configuration
import os

class Config:
    """Configuration settings for Arogya Assist chatbot"""
    
    # Flask settings
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'arogya-assist-secret-key-2025'
    DEBUG = os.environ.get('DEBUG', 'True').lower() == 'true'
    
    # Server settings
    HOST = os.environ.get('HOST', '0.0.0.0')
    PORT = int(os.environ.get('PORT', 5000))
    
    # Google Calendar API settings
    GOOGLE_CREDENTIALS_FILE = 'credentials.json'
    GOOGLE_TOKEN_FILE = 'token.json'
    GOOGLE_SCOPES = ['https://www.googleapis.com/auth/calendar']
    
    # Zoho SalesIQ settings
    SALESIQ_WIDGET_CODE = os.environ.get('SALESIQ_WIDGET_CODE', '')
    SALESIQ_ACCESS_KEY = os.environ.get('SALESIQ_ACCESS_KEY', '')
    
    # Email settings (SMTP)
    SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
    SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
    SMTP_USERNAME = os.environ.get('SMTP_USERNAME', '')
    SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
    EMAIL_FROM = os.environ.get('EMAIL_FROM', 'noreply@arogyaassist.com')
    
    # Database settings
    DATABASE_FILE = 'arogya_assist.db'
    
    # Supported languages
    SUPPORTED_LANGUAGES = {
        'en': 'English',
        'ta': 'Tamil',
        'hi': 'Hindi'
    }
    
    # Default language
    DEFAULT_LANGUAGE = 'en'
    
    # Appointment settings
    APPOINTMENT_DURATION_MINUTES = 30
    WORKING_HOURS_START = 9  # 9 AM
    WORKING_HOURS_END = 18   # 6 PM
    
    # Payment settings
    PAYMENT_GATEWAY = os.environ.get('PAYMENT_GATEWAY', 'razorpay')
    RAZORPAY_KEY_ID = os.environ.get('RAZORPAY_KEY_ID', '')
    RAZORPAY_KEY_SECRET = os.environ.get('RAZORPAY_KEY_SECRET', '')


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False


# Configuration mapping
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
