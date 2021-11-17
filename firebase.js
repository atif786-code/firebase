const firebaseConfig = {
    apiKey: "AIzaSyAsJrI1dHdbwOto5nzTL-Ztk_d6zFYu4DY",
    authDomain: "fir-project-d9609.firebaseapp.com",
    projectId: "fir-project-d9609",
    storageBucket: "fir-project-d9609.appspot.com",
    messagingSenderId: "936880904104",
    appId: "1:936880904104:web:72f8be3723eed000b06f9d",
    measurementId: "G-LL556G40CQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);