var email = document.getElementById('email');
var password = document.getElementById('password');



function LOGIN() {

    if (email.value == 'admin' && password.value == 'admin') {
        window.location.href = "./adminview.html";
        console.log('admin login');
        
    }
    else {
        console.log('user login')
        window.location.href = "./Entrypage.html";
    }

}












// adminview page js//////////////////////////////////////////////////////////////////////////
var data = [];



function addingfunction() {
    var name = document.getElementById("name").value;
    var fname = document.getElementById("fname").value;
    var Cnic = document.getElementById('Cnic').value;
    var email = document.getElementById('email').value;
    var dateofbirth = document.getElementById('dateofbirth').value;
    var gender = document.getElementsByName('gender');
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            
            if (i == 0) {
                // console.log(i)
                gendervalue = 'Male';
                
            }
            else if (i == 1) {
                // console.log(i)
                gendervalue = 'Female';

            }
            else {
                // console.log(i)
                gendervalue = 'Other';
                
            }
        }
        
    }
    var obj = {
        name: name,
        fname: fname,
        Cnic: Cnic,
        email: email,
        dateofbirth: dateofbirth,
        gender: gendervalue,
    }
    //////////////////////////////////////////////////////////////////////////////
    var mydatalocal = localStorage.getItem('mydata');
    var mydatalocal = JSON.parse(mydatalocal);
    if (mydatalocal!=null){
        for(var i=0;i<mydatalocal.length;i++){
            data.push(mydatalocal[i]);
        }
        
    }
    
    
    //////////////////////////////////////////////////////////////////////
    
    data.push(obj);
    localStorage.setItem('mydata', JSON.stringify(data));
    console.log(data)
}


function gotoadmin(){
    // window.location.href = './index.html';
    if(true){

        window.location.href = "./adminview.html";
    }
    
}



