const rowsNumber = document.getElementById("rowsNumber");
const colsNumber = document.getElementById("colsNumber");
const dynamicTable = document.querySelector("#dynamicTable tbody");
const createBtn = document.getElementById("createBtn");

function createDynamicTable() {
  const numberOfRows = parseInt(rowsNumber.value);
  const numberOfCols = parseInt(colsNumber.value);

  if (numberOfRows < 1 || numberOfCols < 1) {
    dynamicTable.innerHTML = `<p style="color: red">Number of Rows and Columns must be at least 1.</p>`;

    return;
  }

  for (let i = 0; i < numberOfRows; i++) {
    const tableRow = document.createElement("tr");

    for (let j = 0; j < numberOfCols; j++) {
      const tableCol = document.createElement("td");
      tableCol.innerText = `Row-${i + 1} Col-${j + 1}`;
      tableRow.appendChild(tableCol);
    }

    dynamicTable.appendChild(tableRow);
  }
}

createBtn.addEventListener("click", function () {
  createDynamicTable();
});
