
  // Firebase config
  const firebaseConfig = {
      apiKey: "AIzaSyBOCnA32ir0bHOlfIOvJ_ltAj65A5DJSlk",
      authDomain: "register-58eea.firebaseapp.com",
      databaseURL: "https://register-58eea-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "register-58eea",
      storageBucket: "register-58eea.firebasestorage.app",
      messagingSenderId: "629204385342",
      appId: "1:629204385342:web:1d9c20a8b3f57269e09b6f",
      measurementId: "G-FFLKXCZE64" };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const storage = firebase.storage();

  // เปลี่ยนเป็น LIFF ID ของคุณ
  const LIFF_ID_REGISTER = "2007335399-B181xl9Z";
  const LIFF_ID_INV = "2007335399-azLMzVDZ";
  const LIFF_ID_REPORT = "2007335399-BbMx4yd9";


