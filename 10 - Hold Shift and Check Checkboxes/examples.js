const checkboxes = document.querySelectorAll(
  '.inbox input[type="checkbox"]'
);
let lastChecked;

function handleCheck(e) {
  let inBetweeen = false;
  if (e.shiftKey && this.checked && lastChecked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetweeen = !inBetweeen;
      }

      if (inBetweeen) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);