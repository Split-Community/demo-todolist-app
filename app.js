import { SplitSuite } from "@splitsoftware/browser-suite";

const authorizationKey = "SDK_KEY";
const anonKey = "anon_" + Math.floor(Math.random() * 1000);
const testFlagName = "test_flag";
const refreshFlagName = "refresh";


// Instantiate the SDK
var suite = SplitSuite({
  core: {
    authorizationKey: authorizationKey,
    // key represents your internal user id, or the account id that
    // the user belongs to.
    // This could also be a cookie you generate for anonymous users
    key: anonKey,
    trafficType: "anonymous",
  },
});

// And get the client instance you'll use
var client = suite.client();


console.log(anonKey);

document.addEventListener("DOMContentLoaded", () => {
  // Create and insert the app's HTML structure
  const appHTML = `
  <div class="container mt-5">
  <h1 class="text-center mb-4">Simple To-Do List</h1>
  <div class="input-group mb-3">
      <input type="text" id="new-task-input" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
      <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="add-task-btn">Add Task</button>
      </div>
  </div>
  <ul id="tasks-list" class="list-group"></ul>
</div>
  `;
  client.on(client.Event.SDK_READY, function () {
    let treatment = client.getTreatment(testFlagName);
    console.log(treatment);
    if (treatment === "on") {
      setTimeout(function () {
        document.body.innerHTML = appHTML;
        createTaskManagementLogic();
      }, 1500);
    } else {
      document.body.innerHTML = appHTML;
      createTaskManagementLogic();
    }
    checkRefresh(client)       
    });

    client.on(client.Event.SDK_UPDATE, function () {
      console.log('got update')
      checkRefresh(client)
    });
  });




function checkRefresh(client) {
  let treatment = client.getTreatment(refreshFlagName);

  if (treatment === "on") {
    setInterval(function () {
      location.reload();
    }, 3000);
  }

}



function createTaskManagementLogic() {
  // Task management logic
  const addButton = document.getElementById("add-task-btn");
  const inputField = document.getElementById("new-task-input");
  const tasksList = document.getElementById("tasks-list");

  addButton.addEventListener("click", () => {
    const taskText = inputField.value.trim();
    if (taskText) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <span class="task-content">${taskText}</span>
      <button class="delete-task-btn btn btn-danger btn-sm float-right">Delete</button>
     `;
      listItem.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      tasksList.appendChild(listItem);
      inputField.value = ""; // Clear input field

      // Add event listener to the delete button
      listItem
        .querySelector(".delete-task-btn")
        .addEventListener("click", () => {
          tasksList.removeChild(listItem);
        });
    }
  });
}







