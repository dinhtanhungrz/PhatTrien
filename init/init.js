function initApp() {
    userManager = new UserManager();
    let currentUser = userManager.getCurrentUser();

    if (currentUser) {
        let user = userManager.login(currentUser, null, true);
        if (user) {
            username = user.username;
            role = user.role;
            taskManager = new TaskManager(username);
            renderTaskTableView();
            renderTaskListUI(taskManager.getAll());
            return;
        }
    }

    renderLoginForm();
}
