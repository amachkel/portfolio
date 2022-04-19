function darkMode() {
  const el = document.body;
  el.classList.toggle("dark-mode");
  if (document.getElementById("icon").classList.contains("fa-toggle-off")) {
    document.getElementById("icon").classList.toggle("fa-toggle-on");
  } else {
    document.getElementById("icon").classList.toggle("fa-toggle-off");
  }
}
