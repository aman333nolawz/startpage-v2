const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

search.focus();

function isWebUrl(value) {
  try {
    const url = new URL(value);
    return true;
  } catch {
    return false;
  }
}

function parseSearch(q) {
  q = q.trim();
  if (q == "") {
    return;
  }
  if (isWebUrl(q)) {
    window.open(q, "_self");
    return;
  }
  targetURL = "https://google.com/search?q=" + encodeURIComponent(q);
  window.open(targetURL, "_self");
}

search.onkeyup = (e) => {
  if (e.key == "Enter") {
    parseSearch(search.value);
  }
};
searchButton.onclick = () => {
  parseSearch(search.value);
};
