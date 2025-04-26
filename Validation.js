function formValidation()
{
	var uid = document.registration.userid;
	
	var passid = document.registration.passid;
	var uname = document.registration.username;
	var uadd = document.registration.address;
	var ucountry = document.registration.country;
	var uzip = document.registration.zip;
	var uemail = document.registration.email;
	var gender = document.registration.gender;
	console.log(gender.value);
	

if(userid_validation(uid,10,10))
{
	if(passid_validation(passid,7,12))
	{
		if(allLetter(uname))
		{
			if(alphanumeric(uadd))
			{ 
				if(countryselect(ucountry))
				{
					if(allnumeric(uzip))
					{
						if(ValidateEmail(uemail))
						{
							if(validGender(gender))
							{
							}
						} 
					}
				} 
			}
		}
	}
}
return true;

}
		
function userid_validation(uid,min,max)
{
	var uid_len = uid.value.length;
	//alert(uid_len);
	if (uid_len == 0)
	{
	alert("User Id should not be empty ");
	uid.focus();
	return false;
	}else if(uid_len < min){
		alert("User Id should be more then 9 character");
		uid.focus();
		return false;
	}
	else if(uid_len > max){
		alert("User Id should be less then 11 character");
		uid.focus();
		return false;
	}
	return true;
}

function passid_validation(passid,mx,my)
{
	var passid_len = passid.value.length;
	if (passid_len == 0 || passid_len < mx ||passid_len >= my )
	{
	alert("Password should not be empty / length be between "+mx+" to "+my);
	passid.focus();
	return false;
	}
	return true;
}

function allLetter(uname)
{ 
	var letters = /^[A-Za-z\s]+$/;
	var space=/^[\s]+$/;
	var name_len=uname.value.length;
	//alert(name_len);
	if(uname.value.match(space) || name_len<=0){
		alert('please insert any character in username');
		uname.focus();
		return false;
	}else{
		if(uname.value.match(letters))
		{
		return true;
		}
		else
		{
		alert('Username must have alphabet characters only');
		uname.focus();
		return false;
		}
	}
	
}


function alphanumeric(uadd)
{ 
	var letters = /^[0-9a-zA-Z\s]+$/;
	if(uadd.value.match(letters))
	{
	return true;
	}
	else
	{
	alert('User address must have alphanumeric characters only');
	uadd.focus();
	return false;
	}
}

function countryselect(ucountry)
{
	if(ucountry.value == "Default")
	{
	alert('Select your country from the list');
	ucountry.focus();
	return false;
	}
	else
	{
	return true;
	}
}


function allnumeric(uzip)
{ 
	var numbers = /^[0-9]+$/;
	if(uzip.value.match(numbers))
	{
	return true;
	}
	else
	{
	alert('ZIP code must have numeric characters only');
	uzip.focus();
	return false;
	}
}


function ValidateEmail(uemail)
{
	var email_len=uemail.value.length;
	if(email_len===0){
		alert("please enter email address , this fileld should not empty!");
		uemail.focus();
		return false;
	}
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
	return true;
	}
	else
	{
	alert("You have entered an invalid email address!");
	uemail.focus();
	return false;
	}
} 

function validGender(gender)
{
	if(!gender.value) 
	{
		alert('Select Male/Female');
		//gender.focus();
		return false;
	}else{
		alert('Form Succesfully Submitted');
		//window.location.reload()
		return true;
	}

	
}