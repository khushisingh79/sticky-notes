const listContainer = document.getElementById("listContainer");
const input = document.querySelector("input");
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addToList);
function addToList() {
  if (!input.value) {
    return window.alert("Input is empty");
  }
  const listItem = document.createElement("div");
  listItem.innerHTML = `
   <div class='bg-red-900 h-fit w-64 flex flex-col gap-y-2 items-end'>
      <button class="text-sm bg-green-500 px-2 text-black " id="deleteButton">
        Delete
      </button>
      <div class="w-full">${input.value}</div>
    </div>`;

  //   listItem.Style.backgroundColor = "yellow";
  listContainer.append(listItem);
  input.value = "";
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
}
