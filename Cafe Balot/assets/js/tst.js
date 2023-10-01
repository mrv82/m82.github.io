const buttons54 = document.querySelectorAll(".buttons54 button");

const tables = document.querySelectorAll(".tables table");

const selectList = (element, index = 0) => {
  tables.forEach((table) => table.classList.remove("active"));
  tables[index].classList.add("active");

  if (element) {
    buttons54.forEach((button) => button.classList.remove("active"));
    element.classList.add("active");
  }
};

selectList();