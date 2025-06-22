function renderTaskListUI(list) {
    let html = ``;
    for (let i = 0; i < list.length; i++) {
        let Task = list[i];
        html += `
            <tr>
                <td>${Task.id}</td>
                <td>${Task.title}</td>
                <td>${Task.description}</td>
                <td>${Task.status}</td>
                <td>${Task.deadline}</td>
                <td>${Task.assignee}</td>
                ${role === "admin" ? `
                    <td><button onClick="navigateToUpdateTask(${Task.id})">Sửa</button></td>
                    <td><button onClick="deleteTask(${Task.id})">Xoá</button></td>
                ` : `<td colspan="2">Chỉ xem</td>`}
            </tr>
        `;
    }
    document.getElementById("list_Task").innerHTML = html;
}

function renderTaskTableView() {
    document.getElementById("ui").innerHTML = `
        <h1>Danh sách Công việc</h1>
        <div>
            <input type="text" id="searchInput" placeholder="Tìm kiếm..." onkeyup="searchTaskByName()">
            ${role === "admin" ? `
                <button onclick="navigateToAddTask()">Thêm công việc</button>
                <button onclick="navigateToUserManager()">Quản lý tài khoản</button>
            ` : ''}
            <button onclick="logout()">Đăng xuất</button>
        </div>
        <br>
        <table border="1">
            <tr>
                <th>ID</th><th>Tiêu đề</th><th>Mô tả</th><th>Trạng thái</th><th>Hạn chót</th><th>Người giao</th>
                <th colspan="2">Hành động</th>
            </tr>
            <tbody id="list_Task"></tbody>
        </table>
    `;
}
