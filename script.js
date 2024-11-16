// Set the initial filter to "all" and highlight the "all" button
filterSelection("all");

function filterSelection(c) {
  const items = document.getElementsByClassName("filterDiv");

  // If "all" is selected, clear the filter class
  if (c === "all") c = "";

  // Loop through all items and show/hide based on the selected filter
  for (let i = 0; i < items.length; i++) {
    w3RemoveClass(items[i], "show");
    if (items[i].className.indexOf(c) > -1) {
      w3AddClass(items[i], "show");
    }
  }
}

function w3AddClass(element, name) {
  const arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add click listeners to buttons for highlighting the active button
const btnContainer = document.getElementById("ButtonContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove "active" from all buttons
    const current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].classList.remove("active");
    }

    // Add "active" to the clicked button
    this.classList.add("active");

    // Trigger filtering based on the button's filter value
    const filterValue = this.getAttribute("onclick").match(/filterSelection\('(.+)'\)/)[1];
    filterSelection(filterValue);
  });
}
