//Marc Etienne
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#taskAdder").onclick = addTask;
  }
)
// Array of all list items, in this case being a list of all created task
var tasks = document.getElementsByTagName("li")

// Delete the task and remove from view
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Mark the task as complete and add strikethrough
var complete = document.getElementsByClassName("complete");
for (var i = 0; i < complete.length; i++) {
  complete[i].onclick = function() {
    var div = this.parentElement;
    div.style.textDecoration = "line-through";
  }
}

// Adds the task to the ordered list
function addTask() {

    //Acquiring the values of the data from the form
    var ttitle = document.querySelector("#message").value
    var tprio = document.querySelector("#prio").value
    var tstatus = document.querySelector('input[name="status"]:checked').value;

    //Creating the list item to be added
    var li = document.createElement("li");
    //Appending text to the list item
    var t = document.createTextNode(ttitle + " " + tprio + " " + tstatus + " ");
    li.appendChild(t);

    //adding the mark complete button 
    document.getElementById("tasklist").appendChild(li);
    var completeButton = document.createElement("button");
    completeButton.innerHTML = "Mark Complete";
    completeButton.className = "complete"
    li.appendChild(completeButton)

    //adding the delete task button
    document.getElementById("tasklist").appendChild(li);
    var closeButton = document.createElement("button");
    closeButton.innerHTML = "Delete Task";
    closeButton.className = "close"
    li.appendChild(closeButton)

    //clearing the task title and priority dropdown fields to default
    document.getElementById("message").value = "";
    document.getElementById("prio").value = "| Priority: Low";

    //code for deleting task, i don't know why it needs to be in two places
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }

    //code for marking task as complete, i don't know why it needs to be in two places
    for (i = 0; i < complete.length; i++) {
      complete[i].onclick = function() {
        var div = this.parentElement;
        div.style.textDecoration = "line-through";
      }
    }

}

