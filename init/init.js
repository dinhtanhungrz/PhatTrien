let userManager = new UserManager();
let taskManager = new TaskManager();
let username = null;
let role = null;

function init() {
    const current = userManager.getCurrentUser();
    if (current) {
        username = current;
        role = userManager.getRole(current);
        // taskManager đã khởi tạo chung ở trên

        if (role === "admin") {
            renderTaskTableView();
        } else {
            renderTaskReadonlyView();
        }

        renderTaskListUI(taskManager.getAll());
    } else {
        renderLoginForm();
    }
}

if (!userManager.login("admin", "admin123")) {
    userManager.register("admin", "admin123", "admin");
}
