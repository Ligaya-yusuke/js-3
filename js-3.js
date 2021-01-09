'use strict';

const onClickAdd = () => {
  const addText = document.getElementById("add-text");
  const inputText = addText.value;
  addText.value = "";

    // ID欄作成
    const ul = document.getElementById("todo-list");
    const idDiv = document.getElementById("id-list");
    const idTitle = document.getElementById("id-title")
    const idList = document.createElement("li");
    idList.className ="id";
    const elms = document.querySelectorAll(".id");
    let index = 0; 
    elms.forEach(elm => {
      index = Number([].slice.call(elms).indexOf(elm))+1;
    });
    idList.textContent = index;
    console.log(index)
    ul.appendChild(idDiv);
    idDiv.appendChild(idTitle);
    idTitle.appendChild(idList);
    
    // コメント欄作成
    const commentDiv = document.getElementById("comment-list");
    const commentTitle = document.getElementById("comment-title");
    const commentList = document.createElement("li");
    commentList.className = "comment";
    commentList.textContent = inputText;
    ul.appendChild(commentDiv);
    commentDiv.appendChild(commentTitle);
    commentTitle.appendChild(commentList);
  
    // 状態欄作成
    const conditionDiv = document.getElementById("condition-list");
    const conditionTitle = document.getElementById("condition-title")
    const conditionButton = document.createElement("li");
    conditionButton.className = "conditionButton";
    const doingButton = document.createElement("button");
    doingButton.className = "doing";
    doingButton.textContent = "作業中­"; 
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.textContent = "削除"; 
    ul.appendChild(conditionDiv);
    conditionDiv.appendChild(conditionTitle);
    conditionTitle.appendChild(conditionButton);
    conditionButton.appendChild(doingButton);
    conditionButton.appendChild(deleteButton);
  };

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => onClickAdd());
