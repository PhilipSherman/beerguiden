// Initialize with "all" filter
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

// Manage button active state
const btnContainer = document.getElementById("ButtonContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Remove "active" class from all buttons
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }

    // Add "active" class to the clicked button
    this.classList.add("active");

    // Filter items based on button's data
    const filterValue = this.getAttribute("onclick").match(/filterSelection\('(.+)'\)/)[1];
    filterSelection(filterValue);
  });
}
