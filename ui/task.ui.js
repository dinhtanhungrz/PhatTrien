function renderTaskTableView() {
    document.getElementById("ui").innerHTML = `
        <h2>Danh sách công việc</h2>
        <div>
            <input type="text" id="searchInput" placeholder="Tìm theo tiêu đề..." onkeyup="searchTaskByName()">
            ${role === "admin" ? `
                <button onclick="renderAddTaskForm()">+ Thêm công việc</button>
                <button onclick="navigateToUserManager()">Quản lý tài khoản</button>
            ` : ""}
            <button onclick="logout()">Đăng xuất</button>
        </div>
        <br>
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>ID</th><th>Tiêu đề</th><th>Mô tả</th><th>Người thực hiện</th><th>Trạng thái</th><th>Hạn</th>
                    ${role === "admin" ? `<th colspan="2">Hành động</th>` : ""}
                </tr>
            </thead>
            <tbody id="taskListBody"></tbody>
        </table>
    `;
}

function renderTaskReadonlyView() {
    document.getElementById("ui").innerHTML = `
        <h2>Danh sách công việc</h2>
        <div>
            <input type="text" id="searchInput" placeholder="Tìm theo tiêu đề..." onkeyup="searchTaskByName()">
            <button onclick="logout()">Đăng xuất</button>
        </div>
        <br>
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>ID</th><th>Tiêu đề</th><th>Mô tả</th><th>Người thực hiện</th><th>Trạng thái</th><th>Hạn</th>
                </tr>
            </thead>
            <tbody id="taskListBody"></tbody>
        </table>
    `;
}

function renderTaskListUI(list) {
    const tbody = document.getElementById("taskListBody");
    if (!tbody) return;
    tbody.innerHTML = list.map(task => `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.assignee}</td>
            <td>${task.status}</td>
            <td>${task.deadline}</td>
            ${role === "admin" ? `
            <td><button onclick="renderEditTaskForm(${task.id})">Sửa</button></td>
            <td><button onclick="deleteTask(${task.id})">Xoá</button></td>` : ""}
        </tr>
    `).join("");
}

function renderAddTaskForm() {
    document.getElementById("ui").innerHTML = `
        <h2>Thêm công việc</h2>
        <input type="text" id="title" placeholder="Tiêu đề"><br><br>
        <textarea id="description" placeholder="Mô tả"></textarea><br><br>
        <input type="text" id="assignee" placeholder="Người thực hiện"><br><br>
        <input type="text" id="status" placeholder="Trạng thái"><br><br>
        <input type="date" id="deadline"><br><br>
        <button onclick="addTask()">Lưu</button>
        <button onclick="renderTaskTableView(); renderTaskListUI(taskManager.getAll())">Huỷ</button>
    `;
}

function renderEditTaskForm(id) {
    const task = taskManager.getById(id);
    if (!task) return;

    document.getElementById("ui").innerHTML = `
        <h2>Sửa công việc</h2>
        <input type="text" id="title" value="${task.title}"><br><br>
        <textarea id="description">${task.description}</textarea><br><br>
        <input type="text" id="assignee" value="${task.assignee}"><br><br>
        <input type="text" id="status" value="${task.status}"><br><br>
        <input type="date" id="deadline" value="${task.deadline}"><br><br>
        <button onclick="updateTask(${id})">Lưu</button>
        <button onclick="renderTaskTableView(); renderTaskListUI(taskManager.getAll())">Huỷ</button>
    `;
}
