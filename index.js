document.querySelector(".form-btn").addEventListener("click", function () {
    let modal = document.querySelector(".modal-hide");
  
    let input1 = document.querySelector(".input-inner1");
    let input2 = document.querySelector(".input-inner2");
    let input3 = document.querySelector(".input-inner3");
  
    if (input1.value !== "" && input2.value !== "" && input3.value !== "") {
    modal.classList.toggle("clicked");
    }

    if (modal.classList.contains("clicked")) {
      
      input1.value = "";
      input2.value = "";
      input3.value = "";
    }
  });
  
  document.querySelector(".modal-btn").addEventListener("click", function () {
    let modal = document.querySelector(".modal-hide");
  
    modal.classList.toggle("clicked");
  });