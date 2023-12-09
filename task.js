function f() {
  let el = document.querySelector(".rotator__case.rotator__case_active")
  el.classList.remove("rotator__case_active")
  elNext = el.nextElementSibling
  el.style.color = el.getAttribute("data-color")
  if (elNext != null) {
    elNext.classList.add("rotator__case_active")
  }
  else {
    document.querySelector(".rotator").firstElementChild.classList.add("rotator__case_active")
  }
  return setTimeout(() => {f()}, document.querySelector(".rotator__case.rotator__case_active").getAttribute("data-speed"))
}

f()