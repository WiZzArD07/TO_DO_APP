const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);  
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

 // create a function to update the date and time
 function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#datetime').textContent = currentDateTime;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);