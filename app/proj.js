
let randomString = '';
let tries = 0;

function validateemail() {
    // document.getElementById('email-error').innerHTML=null;
    // document.getElementById('Invalid-data').innerHTML = null;
    var x=document.getElementById('email').value; 
    var atposition=x.indexOf("@");  
    var spacePosition = x.indexOf(' ');
    var dotposition=x.lastIndexOf(".");
        // console.log('hello', atposition < 1, dotposition < atposition+2, dotposition+2 >= x.length, spacePosition, spacePosition > -1)
    if (atposition < 1 || dotposition < atposition+2 || dotposition+2 >= x.length || spacePosition > -1) {
        document.getElementById('email-error').innerHTML="*please enter a valid email";
        document.getElementById('email-error').style.display="block";
        return false;
    } else {
         document.getElementById('email-error').style.display="none";
        
    }
} 
function validatefullname(inputText) {
    let words=document.getElementById('fname').value;
    // document.getElementById('Invalid-data').innerHTML = null;
    // document.getElementById('fullname-error').innerHTML= null;
    if(words) {
        words = words.split(' ');
        if(words.length >= 2) {
            for(let i=0; i < words.length; i++) {
                if(words[i].length < 4) {
                    document.getElementById('fullname-error').innerHTML="*Please enter a valid name";
                    document.getElementById('fullname-error').style.display="block";
                    // document.getElementById('fname').value = '';
                    break;
                }
                if(words[i].length >= 4) {
                    document.getElementById('fullname-error').style.display="none";
                }
                const letters = words[i].split('');
                for(let j=0; j<letters.length;j++) {
                    if(!isNaN(letters[j])) {
                        document.getElementById('fullname-error').innerHTML="*Please enter name with only alphabets"
                        document.getElementById('fullname-error').style.display="block";
                    }
                }
            }
        } else {
            document.getElementById('fullname-error').innerHTML="*Please enter atleast two words";
            document.getElementById('fullname-error').style.display="block";
        }
        
    }
}
function lettersValidate(key) {
    var keycode = (key.which) ? key.which : key.keyCode;

    if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123))  
    {     
           return true;    
    }
    else
    {
        return false;
    }
         
}
   
function validatephone(e) {
     const number=document.getElementById('phone').value;
    //  document.getElementById("number-error").innerHTML = null;
    //  document.getElementById('Invalid-data').innerHTML = null;
    //  console.log('hii')
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)&& (e.which < 96 || e.which > 105)) {
        return false;
      }
    if (number) {
        if (number.length == 3 && number.indexOf("(") <= -1) {
            document.getElementById('phone').value = `(${number})-`;
        } else if (number.length == 4 && number.indexOf("(") > -1) {
            document.getElementById('phone').value = `${number})-`;
          } else if (number.length == 5 && number.indexOf(")") > -1) {
            document.getElementById('phone').value = `${number}-`;
          } else if(number.length == 9) {
            statecode();
            document.getElementById('phone').value = `${number}-`;
          } 
        if(number.length === 3) {
            if (number >= 621 && number<=799) { 
                document.getElementById('phone-operator').style.display='block';
                document.getElementById('phone-operator').innerHTML='<img src="https://wallpapercave.com/wp/wp2388728.png"/>';
            } else if (number>=801 && number<=920) {
                document.getElementById('phone-operator').style.display='block';
                document.getElementById('phone-operator').innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Idea_Cellular_Logo.svg"/>';
            } else if (number>= 921 && number<=999) {
                document.getElementById('phone-operator').style.display='block';
                document.getElementById('phone-operator').innerHTML='<img src="https://logos-download.com/wp-content/uploads/2016/04/Vodafone_logo.png"/>';
            } else {
                document.getElementById("number-error").innerHTML="*please enter a valid number"
                document.getElementById('phone').value = '';
                document.getElementById('number-error').style.display="block";
            }
        } else if (number.length < 3) { 
            document.getElementById('phone-operator').style.display='block';
            document.getElementById('phone-operator').innerHTML='Enter a valid number';
        }
         else if (number.length > 13) {
            document.getElementById("number-error").innerHTML="*please enter 10 digits"
            document.getElementById('number-error').style.display="block";
            // document.getElementById('phone').value = '';
        }
          if (number.length <= 13) { 
            document.getElementById('number-error').innerHTML="*please enter 10 digits"
            document.getElementById('number-error').style.display = "block";
        }
    }
}
function validatephonenumberlength(){
    const number=document.getElementById('phone').value;
    // console.log('hi')
    if (number.length !== 14) { 
        // console.log('do')
        document.getElementById('number-error').innerHTML="*please enter 10 digits"
        document.getElementById('number-error').style.display = "block";
    }else{
        // console.log('whip')
        document.getElementById('number-error').innerHTML=null
        document.getElementById('number-error').style.display = "none";
    }
}
    
function statecode( ){
    
        const number=document.getElementById('phone').value;
        const subNumber = number.substring(6,9);
       if(number) {
           if(number.length === 9) {
               if (subNumber >=000 && subNumber<=010) {
                   document.getElementById('phone-statecode').style.display='block';
                   document.getElementById('phone-statecode').innerHTML='Andhra Pradesh';
               }
            } else if (number.length < 9) {
                document.getElementById("phone-statecode").style.display =
                  "none";
                   document.getElementById('phone-statecode').innerHTML='';
            }
            if (subNumber >=011 && subNumber<=020) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Arunachal Pradesh';
            }
            if (subNumber >=021 && subNumber<=030) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Assam';
            }
            if (subNumber >=031 && subNumber<=040) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Bihar';
            }
            if (subNumber >=041 && subNumber<=050) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Chattisgarh';
            }
            if (subNumber >=051 && subNumber<=060) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Goa';
            }
            if (subNumber >=061 && subNumber<=070) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Gujarat';
            }
            if (subNumber >=071 && subNumber<=080) { 
                // console.log('in'
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Haryana';
            }
            if (subNumber >=081 && subNumber<=090) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Himachal Pradesh';
            }
            if (subNumber >=091 && subNumber<=100) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Jharkhand';
            }
            if (subNumber >=101 && subNumber<=110) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Karnataka';
            }
            if (subNumber >=111 && subNumber<=120) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='kerala';
            }
            if (subNumber >=121 && subNumber<=130) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Madhya Pradesh';
            }
            if (subNumber >=131 && subNumber<=140) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Maharastra';
            }
            if (subNumber >=141 && subNumber<=150) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Manipur';
            }
            if (subNumber >=151 && subNumber<=160) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Meghalaya';
            }
            if (subNumber >=161 && subNumber<=170) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Mizoram';
            }
            if (subNumber >=171 && subNumber<=180) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Nagaland';
            }
            if (subNumber >=181 && subNumber<=190) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Odisha';
            }
            if (subNumber >=191 && subNumber<=200) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Punjab';
            }
            if (subNumber >=201 && subNumber<=210) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Rajasthan';
            }
            if (subNumber >=211 && subNumber<=220) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Sikkim';
            }
            if (subNumber >=221 && subNumber<=230) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Tamil Nadu';
            }
            if (subNumber >=231 && subNumber<=240) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Telangana';
            }
            if (subNumber >=241 && subNumber<=250) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Tripura';
            }
            if (subNumber >=251 && subNumber<=260) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Uttar Pradesh';
            }
            if (subNumber >=261 && subNumber<=270) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Uttarkhand';
            }
            if (subNumber >=271 && subNumber<=299) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='West Bengal';
            }
            if (subNumber >=300 && subNumber<=399) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Andaman and Nicobar';
            }
            if (subNumber >=400 && subNumber<=499) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Chandigarh';
            }
            if (subNumber >=500 && subNumber<=599) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Daman and Diu';
            }
            if (subNumber >=600 && subNumber<=599) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Delhi';
            }
            if (subNumber >=600 && subNumber<=699) { 
                // console.log('in')
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Jammu and kashmir';
            }
            if (subNumber >=700 && subNumber<=799) { 
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Lakshwadeep';
            }
            if (subNumber >=800 && subNumber<=899) { 
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Pondicherry';
            }
            if (subNumber >=900 && subNumber<=999) { 
                document.getElementById('phone-statecode').style.display='block';
                document.getElementById('phone-statecode').innerHTML='Leh';
            }

        }

    }

    function generateRandomString() {
        const char = '0123456789';
        for ( let i = 0; i < 4; i++) {
            const value = Math.floor(Math.random() * char.length);
            randomString += value;
        }
        console.log('OTP', randomString);
    }

    function submit() {
        let words=document.getElementById('fname').value;
        const number=document.getElementById('phone').value;
        var x=document.getElementById('email').value;
        const fullnameError = document.getElementById('fullname-error').innerHTML;
        const emailError =document.getElementById('email-error').innerHTML;
        const phoneError = document.getElementById('number-error').innerHTML;
        // console.log(fullnameError, emailError, phoneError, 'hello errors');
        if(words == '' || number == '' || x == ''){
            document.getElementById('Invalid-data').innerHTML="*please enter all the details"
        } else if(fullnameError || emailError || phoneError) {
            document.getElementById('Invalid-data').innerHTML = '*please enter all the details correctly';
        } else {
            // console.log('hello else')
            generateRandomString();
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('after-registration-container').style.display = 'block';
            const fname = document.getElementById('fname').value;
            const phone = document.getElementById('phone').value;
            document.getElementById('user-name').innerHTML = fname;
            document.getElementById('display-phone').innerHTML = phone;
        }
    }

    function validateOtp() {
        const otp = document.getElementById('otp').value;
        document.getElementById('otp-error').style.display = 'none';
        if(otp.length === 4) {
            // console.log(otp === randomString, otp, randomString);
            if(otp === randomString) {
                document.getElementById('otp').style.display = 'none';
                document.getElementById('otpSuccess').style.display = 'block';
                window.location = 'http://pixel6.co/';
            } else {
                document.getElementById('otp').value = '';
                document.getElementById('otp-error').style.display = 'block';
                tries ++;
                if(tries== 3){
                    window.location = 'http://pixel6.com/';
                }
            }
        }
    }












    