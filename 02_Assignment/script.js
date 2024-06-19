const form=document.querySelector('.account');

const secondSection=document.querySelector('.parent');

secondSection.style.display='none';



const displayDetails=(userName,userEmail,userContact,userProfile)=>{

    const name=document.querySelector('#account-name')
    const email=document.querySelector('#account-email')
    const contact=document.querySelector('#account-number')
    const img=document.getElementsByTagName('img')[0];

    name.setAttribute('placeholder', userName);

    email.setAttribute('placeholder', userEmail);

    contact.setAttribute('placeholder', userContact);
    console.log(userProfile);

    img.setAttribute('src',userProfile);

    // profile.appendChild(img);

}

const formValidation=()=>{
    
    const name=document.querySelector('#user-name').value;
    const email=document.querySelector('#user-email').value;
    const password=document.querySelector('#user-password').value;
    const contact=document.querySelector('#user-number').value;
    const profile=document.querySelector('#user-profile').files[0];

    console.log(`My name is ${name}`);
    console.log(email);
    console.log(password);
    console.log(contact);
    console.log(profile);

    // if(password.length<6){
    //     alert('Password should be at least 6 characters');
    // }

    displayDetails(name,email,contact,profile);

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    formValidation();
    form.style.display="none";
    secondSection.style.display='block';

})


