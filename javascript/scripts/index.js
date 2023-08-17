
function OnloadIndex(){
    console.log('OnloadIndex')
}

function Login(){ 

    user = document.getElementById("input_user").value
    password = document.getElementById("input_password").value
    const res = RequestLoginAPI(user, password)
    if (res == 200){
        alert("Success")
    }else {
        alert("Fail")
    }
}

function RequestLoginAPI(user, password){ 

    if( user === "admin" && password === "admin"){
        return 200
    }
    return 404
   
}
