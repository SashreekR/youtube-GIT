
// selecting popup box ,popup overlay
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton =document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    //prevents the refreshing of screen defaultly
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//select container,add book button,book titile input ,book author inpuit, book derscription input.
var container= document.querySelector(".container")
var addbook= document.getElementById("addbook")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

//we have to create the entinre container div and its tags
addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")

    //adding html as per container div & use template literals
    div.innerHTML= `<h2>${booktitleinput.value}<h2> 
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button>Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}
