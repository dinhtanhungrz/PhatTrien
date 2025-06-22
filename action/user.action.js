function login() {
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    let user = userManager.login(usernameInput, passwordInput);
    if (user) {
        username = user.username;
        role = user.role;
        userManager.setCurrentUser(username);
        taskManager = new TaskManager(username);
        renderTaskTableView();
        renderTaskListUI(taskManager.getAll());
    } else {
        alert("Đăng nhập thất bại.");
    }
}

function register() {
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    let success = userManager.register(usernameInput, passwordInput);
    if (success) {
        alert("Đăng ký thành công.");
        renderLoginForm();
    } else {
        alert("Tài khoản đã tồn tại.");
    }
}

function logout() {
    userManager.logout();
    renderLoginForm();
}

function navigateToUserManager() {
    renderUserManagerUI(userManager.getAllUsers());
}

function changePassword(username) {
    let newPassword = document.getElementById("newPassword").value;
    if (userManager.updatePassword(username, newPassword)) {
        alert("Đổi mật khẩu thành công.");
        navigateToUserManager();
    } else {
        alert("Thất bại.");
    }
}

function toggleUserRole(username) {
    userManager.switchRole(username);
    navigateToUserManager();
}
