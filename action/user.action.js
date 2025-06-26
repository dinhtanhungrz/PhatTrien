function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const user = userManager.login(usernameInput, passwordInput);
    if (user) {
        username = user.username;
        role = user.role;
        userManager.setCurrentUser(username);
        taskManager = new TaskManager(username);
        role === "admin" ? renderTaskTableView() : renderTaskReadonlyView();
        renderTaskListUI(taskManager.getAll());
    } else {
        alert("Sai tài khoản hoặc mật khẩu.");
    }
}

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const success = userManager.register(username, password);
    if (success) {
        alert("Đăng ký thành công.");
        renderLoginForm();
    } else {
        alert("Tên đăng nhập đã tồn tại.");
    }
}

function logout() {
    userManager.logout();
    renderLoginForm();
}

function navigateToUserManager() {
    const users = userManager.getAllUsers();
    renderUserManagerUI(users);
}

function changePassword(username) {
    const newPassword = document.getElementById(`newPassword_${username}`).value;
    const success = userManager.updatePassword(username, newPassword);
    if (success) {
        alert("Cập nhật thành công.");
        navigateToUserManager();
    } else {
        alert("Không thể cập nhật mật khẩu.");
    }
}

function toggleUserRole(username) {
    userManager.switchRole(username);
    navigateToUserManager();
}
