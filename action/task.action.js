function addTask() {
    let list = taskManager.getAll();
    let id = list.length ? list[list.length - 1].id + 1 : 1;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let deadline = document.getElementById("deadline").value;
    let assignee = document.getElementById("assignee").value;

    let newTask = new Task(id, title, description, assignee, status, deadline);
    taskManager.add(newTask);
    renderTaskTableView();
    renderTaskListUI(taskManager.getAll());
}

function updateTask(id) {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let deadline = document.getElementById("deadline").value;
    let assignee = document.getElementById("assignee").value;

    let updatedTask = new Task(id, title, description, assignee, status, deadline);
    taskManager.update(id, updatedTask);
    renderTaskTableView();
    renderTaskListUI(taskManager.getAll());
}

function deleteTask(id) {
    if (confirm("Bạn có chắc chắn muốn xoá?")) {
        taskManager.remove(id);
        renderTaskListUI(taskManager.getAll());
    }
}

function searchTaskByName() {
    let name = document.getElementById("searchInput").value;
    let list = taskManager.searchByName(name);
    renderTaskListUI(list);
}
