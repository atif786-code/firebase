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
firebase.initializeApp(firebaseConfig);

function login(event) {
	event.preventDefault();
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	console.log('This login function is running');
	firebase.auth().signInWithEmailAndPassword(email, password).then( (user) => {
		// If the sign in get's successfull then we will get the user.
		// Here we are only replacing the url in address bar.
		location.replace('welcome.html');
	})
	.catch( (error) => {
		// If the sign in get's failed.
		alert('The sign in got failed.');
	})

}

function logout() {
	// Here we have to simply logout the logged in user.
	firebase.auth().signOut().then( (user) => {
		// You will be redirected to the index page.
		location.replace('index.html')
	})
	.catch( (error) => {
		alert('No user is logged in yet.')
	})
}