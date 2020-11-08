var todoInput=document.querySelector("#todo-input");
var addBtn=document.querySelector(".add-btn");
var todoList=document.querySelector(".todo-list");
todoList.onclick=checkdelete;
addBtn.onclick=createToDo;

function createToDo(e){
    e.preventDefault();
    if (todoInput.value.trim()=="") {
        alert("input field cannot be blank");
    }else{
    var div=document.createElement("div");
    div.classList.add("todo");

    var li=document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML=todoInput.value.trim();
    div.appendChild(li);

    var chkBtn=document.createElement("button");
    chkBtn.classList.add("chk-btn");
    chkBtn.innerHTML='<i class="fa fa-check">';
    div.appendChild(chkBtn);

    var dltBtn=document.createElement("button");
    dltBtn.classList.add("dlt-btn");
    dltBtn.innerHTML='<i class="fa fa-trash">';
    div.appendChild(dltBtn);
    
    todoList.appendChild(div);
    todoInput.value="";
}
}
function checkdelete(e){
    var item=e.target;
    if(item.classList[0]=="dlt-btn"){
        item.parentNode.remove();
    }
    if(item.classList[0]=="chk-btn"){
        item.parentNode.classList.toggle("completed");
    }
}
