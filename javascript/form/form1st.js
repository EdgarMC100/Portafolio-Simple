// function eject() {
document.addEventListener('DOMContentLoaded',function () {
    document.getElementById('name').style.display = "none";
})
    // alert('hi');
// }
// $(document).ready(function(){ //Jquery
//     let formElement = document.getElementById("formulario"),
//     name = formElement.name,
//     email = formElement.email,
//     genre = formElement.genre,
//     terms = formElement.terms,
//     error = document.getElementById('error');

//     function nameValidate(e){
//         if(name.value == '' || name.value == null){
//             error.style.display = 'block';        
//             error.innerHTML += '<li>Name is required</li>';
//             e.preventDefault();
//         }
//     };

//     let emailValidate = (e)=>{
//         let regexp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i; 
//         console.log("validation");
//         console.log(regexp.test(email.value))
//         if(email.value == '' || email.value == null){
//             error.style.display = "block";
//             error.innerHTML += '<li>Email is required</li>';
//         }else if(regexp.test(email.value)){
//                 error.style.display = 'none';
//         }else{
//                 error.style.display = 'block';
//                 error.innerHTML += '<li>Email is not correct</li>'; 
//         }
//     };

//     let genreValidate = (e) =>{
//         if(genre.value == '' || genre.value == null){
//             error.style.display = "block";
//             error.innerHTML += '<li>Genre is required<li>';
//         }
//     };

//     let termsValidate = (e)=>{
//         console.log('terms')
//         console.log(terms.checked)
//         if(!terms.checked){
//             error.style.display = "block";
//             error.innerHTML += '<li>Terms and Conditions is required<li>';
//         }
//     };
    
//     formValidate = (e)=>{
//         error.innerHTML = '';
    
//         genreValidate(e);
//         emailValidate(e);
//         termsValidate(e);
//         nameValidate(e);
//         if(error.childElementCount != 0){
//             error.style.display = "block";
//             e.preventDefault();
//         }else{
//             error.style.display = 'none';
//         }
//     };
//     formElement.addEventListener("submit",formValidate)
    

// });

// document.addEventListener('DOMContentLoaded',function() {
//     let formElement = document.getElementById("formulario"),
//     name = formElement.name,
//     email = formElement.email,
//     genre = formElement.genre,
//     terms = formElement.terms,
//     error = document.getElementById('error');

//     function nameValidate(e){
//         if(name.value == '' || name.value == null){
//             error.style.display = 'block';        
//             error.innerHTML += '<li>Name is required</li>';
//             e.preventDefault();
//         }
//     };

//     let emailValidate = (e)=>{
//         let regexp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i; 
//         console.log("validation");
//         console.log(regexp.test(email.value))
//         if(email.value == '' || email.value == null){
//             error.style.display = "block";
//             error.innerHTML += '<li>Email is required</li>';
//         }else if(regexp.test(email.value)){
//                 error.style.display = 'none';
//         }else{
//                 error.style.display = 'block';
//                 error.innerHTML += '<li>Email is not correct</li>'; 
//         }
//     };

//     let genreValidate = (e) =>{
//         if(genre.value == '' || genre.value == null){
//             error.style.display = "block";
//             error.innerHTML += '<li>Genre is required<li>';
//         }
//     };

//     let termsValidate = (e)=>{
//         console.log('terms')
//         console.log(terms.checked)
//         if(!terms.checked){
//             error.style.display = "block";
//             error.innerHTML += '<li>Terms and Conditions is required<li>';
//         }
//     };
    
//     formValidate = (e)=>{
//         error.innerHTML = '';
    
//         genreValidate(e);
//         emailValidate(e);
//         termsValidate(e);
//         nameValidate(e);
//         if(error.childElementCount != 0){
//             error.style.display = "block";
//             e.preventDefault();
//         }else{
//             error.style.display = 'none';
//         }
//     };
//     formElement.addEventListener("submit",formValidate)
// })

// let formElement = document.getElementById("formulario"),
//     name = formElement.name,
//     email = formElement.email,
//     genre = formElement.genre,
//     terms = formElement.terms,
//     error = document.getElementById('error');

// function nameValidate(e){
//     if(name.value == '' || name.value == null){
//         error.style.display = 'block';        
//         error.innerHTML += '<li>Name is required</li>';
//         e.preventDefault();
//     }
// };

// let emailValidate = (e)=>{
//     let regexp = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i; 
//     console.log("validation");
//     console.log(regexp.test(email.value))
//     if(email.value == '' || email.value == null){
//         error.style.display = "block";
//         error.innerHTML += '<li>Email is required</li>';
//     }else if(regexp.test(email.value)){
//             error.style.display = 'none';
//     }else{
//             error.style.display = 'block';
//             error.innerHTML += '<li>Email is not correct</li>'; 
//     }
// };

// let genreValidate = (e) =>{
//     if(genre.value == '' || genre.value == null){
//         error.style.display = "block";
//         error.innerHTML += '<li>Genre is required<li>';
//     }
// };

// let termsValidate = (e)=>{
//     console.log('terms')
//     console.log(terms.checked)
//     if(!terms.checked){
//         error.style.display = "block";
//         error.innerHTML += '<li>Terms and Conditions is required<li>';
//     }
// };

// let formValidate = (e)=>{
//     error.innerHTML = '';

//     genreValidate(e);
//     emailValidate(e);
//     termsValidate(e);
//     nameValidate(e);
//     if(error.childElementCount != 0){
//         error.style.display = "block";
//         e.preventDefault();
//     }else{
//         error.style.display = 'none';
//     }
// };



