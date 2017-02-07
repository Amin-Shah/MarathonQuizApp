function signUp() {
    var arr = [] 
    var obj = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        pass: document.getElementById('password').value
    }
    if (localStorage.user == undefined) { 
        arr.push(obj)
        localStorage.setItem("user", JSON.stringify(arr))  
        location.href = "../login/login.html"         
    } else {
        var data = localStorage.getItem('user')
        arr = JSON.parse(data) 
        arr.push(obj) 
        localStorage.setItem("user", JSON.stringify(arr))  
        location.href = "../login/login.html" 
    }
}

function login() {
    var obj = {
        email: document.getElementById('checkMail').value,
        pass: document.getElementById('checkPass').value
    }
    var data = JSON.parse(localStorage.getItem("user")) 
    for (i = 0; i < data.length; i++) {
        if (obj.email == data[i].email && obj.pass == data[i].pass) { 
            localStorage.setItem("currentUser", JSON.stringify(data[i])) 
            location.href = "C:/Users/sayla/Desktop/quiz_app/index.html"
        } else if (i == data.length - 1) {  
            console.log("Good bey")
        }
    }
}
