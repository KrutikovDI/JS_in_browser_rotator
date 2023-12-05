setInterval(() => {
  let rot = document.querySelector(".rotator__case.rotator__case_active")
  rot.classList.remove("rotator__case_active")
  if (rot.nextElementSibling != null) {
    rot.nextElementSibling.classList.add("rotator__case_active")
    rot.style.color = rot.getAttribute("data-color")
  }
  else {
    document.querySelector(".rotator").firstElementChild.classList.add("rotator__case_active")}
}, document.querySelector(".rotator__case.rotator__case_active").getAttribute("data-speed"))