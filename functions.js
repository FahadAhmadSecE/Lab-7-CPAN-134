let list = document.getElementById("list");
document.getElementById("create").addEventListener("click", add);
let tracker = 1;

function add() {
  let input = document.getElementById("addItem").value;
  let newItem = document.createElement("li");
  let id = tracker;
  newItem.id = id;
  let newDiv = document.createElement("div");
  newDiv.textContent = input;

  let delButton = document.createElement("button");
  delButton.id = "deleteBtn";
  delButton.textContent = "x";
  delButton.addEventListener("click", function () {
    document.getElementById(newItem.id).remove();
  });

  list.appendChild(newItem);
  newItem.appendChild(newDiv);
  newItem.appendChild(delButton);
  tracker++;
  document.getElementById("addItem").value = "";
}
