onAutoStateChanged((auth,user)=>{
    if(user){
        location.replace("index.html")
    }
    else{
        document.getElementById("user").innerHTML = "Hello ,"+user.email
    }
})


function logout(){
    signOut(auth)
}
