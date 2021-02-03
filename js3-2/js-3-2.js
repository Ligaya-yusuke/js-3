"use strict";

// to-do追加
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  const addText = document.getElementById("add-text");
  showToDo();
  doingButtonFactory();
  deleteButtonFactory();
  addText.value = "";
  addText.focus();
});

// to-do表示
const ul = document.getElementById("todo-list");
const idDiv = document.getElementById("id-list");
const idTitle = document.getElementById("id-title");
const addText = document.getElementById("add-text");
const commentTitle = document.getElementById("comment-title");
const commentDiv = document.getElementById("comment-list");
const showToDo = () => {
  // ID欄作成
  const idList = document.createElement("li");
  idList.className ="id";
  const elms = document.querySelectorAll(".id");
  let index = 0;
  elms.forEach(elm => {
    index = Number([].slice.call(elms).indexOf(elm)) + 1;
  });
  idList.textContent = index;
  ul.appendChild(idDiv);
  idDiv.appendChild(idTitle);
  idTitle.appendChild(idList);
  
  // コメント欄作成
  const commentList = document.createElement("li");
  commentList.className = "comment";
  const inputText = addText.value;
  commentList.textContent = inputText;
  ul.appendChild(commentDiv);
  commentDiv.appendChild(commentTitle);
  commentTitle.appendChild(commentList);
}

// 作業中ボタン作成
const conditionDiv = document.getElementById("condition-list");
const conditionTitle = document.getElementById("condition-title");
const doingButtonFactory = () => {
  const doingButtonList = document.createElement("li");
  doingButtonList.className = "doing-button-list";
  const doingButton = document.createElement("button");
  doingButton.className = "doing";
  doingButton.textContent = "作業中­";
  ul.appendChild(conditionDiv);
  conditionDiv.appendChild(conditionTitle);
  conditionTitle.appendChild(doingButtonList);
  doingButtonList.appendChild(doingButton);
}
// 削除ボタン生成
const deleteDiv = document.getElementById("delete-buttons");
const deleteTitle = document.getElementById("delete-title");
const deleteButtonFactory = () => {
  const deleteButtonList = document.createElement("li");
  deleteButtonList.className = "delete-button-list";
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "削除"; 
  ul.appendChild(deleteDiv);
  deleteDiv.appendChild(deleteTitle);
  deleteTitle.appendChild(deleteButtonList);
  deleteButtonList.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    deleteButtonTarget();
    const ids = document.querySelectorAll(".id");
    let index = 0;
    ids.forEach(id => {
      index = Number([].slice.call(ids).indexOf(id));
      const newId = document.createElement("li");
      newId.classList.add("id");
      newId.textContent = index;
      ids[index].replaceWith(newId);
    });
  });
}

// 削除機能
const deleteButtonTarget = () => {
  const getId = document.querySelector(".id");
  getId.remove();
  const getComment = document.querySelector(".comment");
  getComment.remove();
  const getDoingButton = document.querySelector(".doing");
  getDoingButton.remove();
  const getDeleteButton = document.querySelector(".delete");
  getDeleteButton.remove();
};
