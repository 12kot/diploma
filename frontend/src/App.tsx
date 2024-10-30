import { Routes } from 'Router';
import { AuthProvider, ContactUsModalProvider, EditUserModalProvider } from 'features';

import './scss/App.scss';

import i18n from './locales/config';
i18n.init();

const App = () => {
  return (
    <AuthProvider>
      <ContactUsModalProvider>
        <EditUserModalProvider>
          <Routes />
        </EditUserModalProvider>
      </ContactUsModalProvider>
    </AuthProvider>
  );
};

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyCsK9B-HDe3zUEUnbBv9mf8oD9_2qLPsTs',
//   authDomain: 'hh-cargo.firebaseapp.com',
//   projectId: 'hh-cargo',
//   storageBucket: 'hh-cargo.appspot.com',
//   messagingSenderId: '750349409089',
//   appId: '1:750349409089:web:b6c51b2714d72871e55fc0',
//   measurementId: 'G-2VJW8MJ4EY',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// getAnalytics(app);
