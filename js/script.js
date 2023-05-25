
$( document ).ready(function() {

  var btn = document.getElementsByClassName("grid-item__button"); // get all buttons

  for (let i = 0; i < btn.length; i++) {                          // for each button
    btn[i].addEventListener("click", function() {                 // add click event listener to the button
      console.log("Clicked");
      for (let j = 0; j < btn.length; j++) {                      // for each button
        console.log("Values: ", j)
        if (j !== i) {                                            // if not the button that was clicked
        btn[j].classList.remove("grid-item__button--active");     // remove active class
        console.log("active removed", j, i);
        // var panel2 = btn[j].nextElementSibling;                // get this button's panel
        // panel2.style.maxHeight = null;                         // close panel
        }
      }

      this.classList.toggle("grid-item__button--active");        // toggle active state on button clicked
      // var panel = this.nextElementSibling;                    // get this button's panel
      // if (panel.style.maxHeight) {                            // if panel is open
      //   panel.style.maxHeight = null;                         // close panel
      // } else {                                                // else pane is not open
      //   panel.style.maxHeight = panel.scrollHeight + "px";    // open panel
      // } 
    });
  }

});
