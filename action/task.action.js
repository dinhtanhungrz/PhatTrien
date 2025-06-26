function addTask() {
    const list = taskManager.getAll();
    const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;
    const deadline = document.getElementById("deadline").value;
    const assignee = document.getElementById("assignee").value;

    const task = new Task(id, title, description, assignee, status, deadline);
    taskManager.add(task);
    renderTaskTableView();
    renderTaskListUI(taskManager.getAll());
}

function updateTask(id) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;
    const deadline = document.getElementById("deadline").value;
    const assignee = document.getElementById("assignee").value;

    const updatedTask = new Task(id, title, description, assignee, status, deadline);
    taskManager.update(id, updatedTask);
    renderTaskTableView();
    renderTaskListUI(taskManager.getAll());
}

function deleteTask(id) {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
        taskManager.remove(id);
        renderTaskListUI(taskManager.getAll());
    }
}

function searchTaskByName() {
    const keyword = document.getElementById("searchInput").value;
    const result = taskManager.searchByName(keyword);
    renderTaskListUI(result);
}
