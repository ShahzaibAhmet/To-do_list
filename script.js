const input = document.getElementById("input");
const listcon = document.getElementById("list-con");

function addtask() {
    if (input.value === '') {
        alert("You must write something, Dumb!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = ''
    saveData()
}

listcon.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcon.innerHTML);
}
function showlist(){
    listcon.innerHTML=localStorage.getItem("data");
}
showlist()



