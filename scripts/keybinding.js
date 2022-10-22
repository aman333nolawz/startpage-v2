document.addEventListener("keydown", (e) => {
  if (search === document.activeElement) {
    return;
  }
  if (e.key == "s") {
    showSettings();
  }
});
