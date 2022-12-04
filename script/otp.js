document.getElementById('submit').addEventListener('click',otpfun);

function otpfun(e){
    e.preventDefault();
        var otp=document.getElementById('otpNum').value;
        
        if(otp=="")
        {
            alert("Please Enter correct OTP");
            
        }
        else if (otp==="1234"){
            window.open("orderConfirmed.html","_self");
        }
        else{
            alert("Please Enter a Valid OTP!")
        }
        document.getElementById('otpNum').value="";
    }
    
    