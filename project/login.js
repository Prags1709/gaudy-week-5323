let form=document.querySelector("form")
 
 form.addEventListener("submit",function(event){
    event.preventDefault()
    let obj={
        name:form.Email.value,
        password:form.pass.value
    }
    let data;
    let local=JSON.parse(localStorage.getItem("EW signing"));

        for(i=0;i<local.length;i++){
            data=local[i];
        }

    if(data.name==obj.name && data.password==obj.password){
         alert("LOGIN SUCCESSFULLY");
         window.location.href = "./homepage.html"
    }else {
         alert("INCORRECT DETAILS");
    }
  
 })