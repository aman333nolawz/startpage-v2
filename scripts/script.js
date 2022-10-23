const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const username = document.getElementById("username");
const titleSel = document.getElementById("titleSel");
const userSel = document.getElementById("userSel");
const engineSel = document.getElementById("engineSel");
const imgSel = document.getElementById("imgSel");
const savePref = document.getElementById("savePref");

const engines = {
  google: "https://google.com/search?q=",
  duckduckgo: "https://duckduckgo.com/?q=",
};
let engineUrl;

function setEngine(engine) {
  localStorage.setItem("engine", engine);
  engineUrl = engines[engine];
  engineSel.value = engine;
}

function setUser(name) {
  localStorage.setItem("username", name);
  username.innerText = "Hello, " + name;
  userSel.value = name;
}

function setTitle(title) {
  localStorage.setItem("title", title);
  document.title = title;
  titleSel.value = title;
}

function setImg(src) {
  localStorage.setItem("image", src);
  document.getElementById("startImg").src = src;
  imgSel.value = src;
}

if (localStorage.getItem("title")) {
  setTitle(localStorage.getItem("title"));
} else {
  setTitle("New Tab");
}

if (localStorage.getItem("engine")) {
  setEngine(localStorage.getItem("engine"));
} else {
  setEngine("google");
}

if (localStorage.getItem("username")) {
  setUser(localStorage.getItem("username"));
} else {
  setUser("Nolawz");
}

if (localStorage.getItem("image")) {
  setImg(localStorage.getItem("image"));
} else {
  setImg("images/startpage.png");
}

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
  targetURL = engineUrl + encodeURIComponent(q);
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

savePref.onclick = () => {
  setEngine(engineSel.value);
  setUser(userSel.value);
  setTitle(titleSel.value);
  setImg(imgSel.value);
};
