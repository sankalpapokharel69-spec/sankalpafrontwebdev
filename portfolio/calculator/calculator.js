let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        display.value += button.innerText
          if(button.innerText ==="C"){
        display.value = ""
    }

    if(button.innerText.trim() === "x"){
       display.value = display.value.slice(0,-1)
    }
    })
  
})