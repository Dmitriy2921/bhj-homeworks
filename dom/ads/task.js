function rotator() {
  const activeCase = document.querySelector(".rotator__case_active");
  const lastCaseClassList = document.querySelector(".rotator").lastElementChild.classList;

  if (lastCaseClassList.contains("rotator__case_active")) {
    lastCaseClassList.remove("rotator__case_active")
    document.querySelector(".rotator").firstElementChild.classList.add("rotator__case_active");
  } else {
    activeCase.classList.remove("rotator__case_active");
    activeCase.nextElementSibling.classList.add("rotator__case_active");
  }
}

const rotatorId = setInterval(rotator, 1000);