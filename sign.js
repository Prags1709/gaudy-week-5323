let form=document.querySelector("form")
 let data=JSON.parse(localStorage.getItem("EW signing"))||[];
 form.addEventListener("submit",function(event){
  event.preventDefault()
  let obj={
   name:form.Email.value,
   mobile:form.Mobile.value,
   password:form.pass.value
  }
  if(obj.name==""||obj.mobile==""||obj.password==""){
   alert("please fill the Details")
  }else{
    data.push(obj)
    localStorage.setItem("EW signing",JSON.stringify(data))
    alert("Your Expowide Account Created")
    window.location.href="./index.html"
  }
 
 })