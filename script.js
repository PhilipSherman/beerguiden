// Filter functionality
function filterSelection(c) {
  const items = document.getElementsByClassName("filterDiv");
  
  // If "all" is selected, clear the filter class
  if (c === "all") c = "";

  // Loop through all items and apply the "show" class if they match the filter
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("show");
    if (items[i].className.indexOf(c) > -1) {
      items[i].classList.add("show");
    }
  }
}

// Button click handling
const btnContainer = document.getElementById("ButtonContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove the "active" class from all buttons
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }

    // Add the "active" class to the clicked button
    this.classList.add("active");

    // Apply the filter
    const filterValue = this.getAttribute("data-filter");
    filterSelection(filterValue);
  });
}
