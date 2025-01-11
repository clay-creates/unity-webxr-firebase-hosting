import { initializeApp } from 'firebase/app';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBwMuEnt0AglLwWEVz0rzE315TJVcMDNYk",
    authDomain: "webxr-bowling.firebaseapp.com",
    projectId: "webxr-bowling",
    storageBucket: "webxr-bowling.firebasestorage.app",
    messagingSenderId: "396454026189",
    appId: "1:396454026189:web:1f1a69bbcff2f75d3bc284",
    measurementId: "G-5EMPSNWZGG"
});

const app = initializeApp(firebaseApp);