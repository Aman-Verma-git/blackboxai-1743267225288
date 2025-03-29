# Resume Builder

A modern resume builder application with authentication and multiple export options.

## Features

- User authentication (Email/Password + Google)
- Dashboard with resume management
- Multiple professionally designed templates
- Real-time resume preview
- Export to PDF, Word, and PNG formats
- Responsive design for all devices

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication section
   - Click "Get Started"
   - Enable Email/Password and Google sign-in methods
4. Get your Firebase config:
   - Click the gear icon ⚙ > Project settings
   - Scroll down to "Your apps" section
   - Register a web app if you haven't already
   - Copy the configuration object
5. Create `.env` file in client directory with these values (replace with your actual values):

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   cd client && npm install
   ```
3. Set up Firebase configuration (see above)
4. Start development server:
   ```bash
   npm start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

### `npm run build`

Builds the app for production.

### `npm test`

Launches the test runner.

## Environment Variables

The following environment variables are required:

- `REACT_APP_FIREBASE_API_KEY`
- `REACT_APP_FIREBASE_AUTH_DOMAIN` 
- `REACT_APP_FIREBASE_PROJECT_ID`
- `REACT_APP_FIREBASE_STORAGE_BUCKET`
- `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
- `REACT_APP_FIREBASE_APP_ID`
