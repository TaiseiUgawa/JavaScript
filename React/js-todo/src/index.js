import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButtton = document.createElement("button");
  completeButtton.innerText = "完了";

  completeButtton.addEventListener("click", () => {
    const deleteTarget = completeButtton.parentNode;
    deleteFromIncompleteList(deleteTarget);

    const addTarget = completeButtton.parentNode;

    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    // const div = document.createElement("div");
    // div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = text;
    const backButtton = document.createElement("button");
    backButtton.innerText = "戻す";

    backButtton.addEventListener("click", () => {
      const deleteTarget = backButtton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const backTarget = backButtton.parentNode;
      console.log(backTarget);

      const text = backTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButtton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButtton = document.createElement("button");
  deleteButtton.innerText = "削除";
  deleteButtton.addEventListener("click", () => {
    const deleteTarget = deleteButtton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completeButtton);
  div.appendChild(deleteButtton);

  document.getElementById("incomplete-list").appendChild(div);
};
