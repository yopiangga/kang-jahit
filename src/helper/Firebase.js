import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDlUpN1FQihBLFUhXsEIFtPpdCSgCP462s",
    authDomain: "kang-jahit.firebaseapp.com",
    projectId: "kang-jahit",
    storageBucket: "kang-jahit.appspot.com",
    messagingSenderId: "33302583430",
    appId: "1:33302583430:web:23dbbc7101745f06fc5907",
    measurementId: "G-BDHY26EBBD"
};

const app = initializeApp(firebaseConfig);
export default app;

