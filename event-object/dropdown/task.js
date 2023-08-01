const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownLink = Array.from(document.querySelectorAll('a.dropdown__link'));

for (let i = 0; i < dropdownValue.length; i++) {
  dropdownValue[i].onclick = function () {
    dropdownList[i].classList.toggle('dropdown__list_active');
  };
}

for (let i = 0; i < dropdownLink.length; i++) {
  dropdownLink[i].onclick = () => {
    let parent = dropdownLink[i].closest('.dropdown');
    parent.querySelector('.dropdown__value').textContent = dropdownLink[i].textContent;
    dropdownLink[i].closest('.dropdown__list').classList.toggle('dropdown__list_active');
    return false;
  }
}