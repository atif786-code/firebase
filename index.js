document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

onAuthStateChanged((auth,user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email=document.getElementById("email").value
    const password =document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
}