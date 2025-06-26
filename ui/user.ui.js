function renderLoginForm() {
    document.getElementById("ui").innerHTML = `
        <h2>Đăng nhập</h2>
        <input type="text" id="username" placeholder="Tên đăng nhập"><br><br>
        <input type="password" id="password" placeholder="Mật khẩu"><br><br>
        <button onclick="login()">Đăng nhập</button>
        <button onclick="renderRegisterForm()">Đăng ký</button>
    `;
}

function renderRegisterForm() {
    document.getElementById("ui").innerHTML = `
        <h2>Đăng ký</h2>
        <input type="text" id="username" placeholder="Tên đăng nhập"><br><br>
        <input type="password" id="password" placeholder="Mật khẩu"><br><br>
        <button onclick="register()">Đăng ký</button>
        <button onclick="renderLoginForm()">Quay lại</button>
    `;
}

function renderUserManagerUI(users) {
    document.getElementById("ui").innerHTML = `
        <h2>Quản lý tài khoản</h2>
        <button onclick="renderTaskTableView(); renderTaskListUI(taskManager.getAll())">Quay lại</button>
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>Tên đăng nhập</th><th>Quyền</th><th>Đổi mật khẩu</th><th>Chuyển quyền</th>
                </tr>
            </thead>
            <tbody>
                ${users.map(user => `
                    <tr>
                        <td>${user.username}</td>
                        <td>${user.role}</td>
                        <td>
                            <input type="password" id="newPassword_${user.username}" placeholder="Mật khẩu mới">
                            <button onclick="changePassword('${user.username}')">Đổi</button>
                        </td>
                        <td>
                            <button onclick="toggleUserRole('${user.username}')">Chuyển sang ${user.role === "admin" ? "user" : "admin"}</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
        </table>
    `;
}
