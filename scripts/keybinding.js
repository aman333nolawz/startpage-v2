document.addEventListener("keydown", (e) => {
  if (search === document.activeElement) {
    return;
  }
  if (e.key == "s") {
    if (!settingsDialog.open) {
      e.preventDefault();
      showSettings();
    }
  }
});
