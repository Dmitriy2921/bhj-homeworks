const modalMain = document.getElementById("modal_main");
const arrModalClose = Array.from(document.getElementsByClassName("modal__close"));
const modalSuccess = document.getElementById("modal_success");
const arrShowSuccess = Array.from(document.getElementsByClassName("show-success"));

modalMain.className = "modal modal_active";

function close() {
  modalMain.className = "modal";
  modalSuccess.className = "modal";
}

for (let i = 0; i < arrModalClose.length; i++) {
  arrModalClose[i].onclick = close;
}

function funcShowSuccess () {
  modalMain.className = "modal";
  modalSuccess.className = "modal modal_active";
}

arrShowSuccess[0].onclick = funcShowSuccess;