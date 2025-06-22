function renderLoginForm() {
    document.getElementById("ui").innerHTML = `
        <h2>Đăng nhập</h2>
        <input type="text" id="username" placeholder="Tên đăng nhập">
        <br><br>
        <input type="password" id="password" placeholder="Mật khẩu">
        <br><br>
        <button onclick="login()">Đăng nhập</button>
        <button onclick="renderRegisterForm()">Đăng ký</button>
    `;
}

function renderRegisterForm() {
    document.getElementById("ui").innerHTML = `
        <h2>Đăng ký tài khoản</h2>
        <input type="text" id="username" placeholder="Tên đăng nhập">
        <br><br>
        <input type="password" id="password" placeholder="Mật khẩu">
        <br><br>
        <button onclick="register()">Đăng ký</button>
        <button onclick="renderLoginForm()">Quay lại</button>
    `;
}

function renderUserManagerUI(users) {
    let html = `
        <h2>Quản lý tài khoản</h2>
        <button onclick="renderTaskTableView()">Quay lại</button>
        <table border="1">
            <tr>
                <th>Tài khoản</th>
                <th>Vai trò</th>
                <th colspan="2">Hành động</th>
            </tr>`;
    for (let user of users) {
        html += `
            <tr>
                <td>${user.username}</td>
                <td>${user.role}</td>
                <td><button onclick="renderChangePasswordForm('${user.username}')">Đổi mật khẩu</button></td>
                <td><button onclick="toggleUserRole('${user.username}')">Chuyển quyền</button></td>
            </tr>`;
    }
    html += `</table>`;
    document.getElementById("ui").innerHTML = html;
}

function renderChangePasswordForm(username) {
    document.getElementById("ui").innerHTML = `
        <h2>Đổi mật khẩu: ${username}</h2>
        <input type="password" id="newPassword" placeholder="Mật khẩu mới">
        <br><br>
        <button onclick="changePassword('${username}')">Lưu</button>
        <button onclick="navigateToUserManager()">Huỷ</button>
    `;
}
