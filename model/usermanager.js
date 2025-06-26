class UserManager {
    constructor() {
        this.users = [];
        this.load();
    }

    register(username, password, role = "user") {
        if (this.users.some(u => u.username === username)) return false;
        this.users.push({ username, password, role });
        this.save();
        return true;
    }

    login(username, password) {
        return this.users.find(u => u.username === username && u.password === password);
    }

    getRole(username) {
        const user = this.users.find(u => u.username === username);
        return user ? user.role : null;
    }

    setCurrentUser(username) {
        localStorage.setItem("currentUser", username);
    }

    getCurrentUser() {
        return localStorage.getItem("currentUser");
    }

    logout() {
        localStorage.removeItem("currentUser");
    }

    getAllUsers() {
        return this.users;
    }

    updatePassword(username, newPassword) {
        const user = this.users.find(u => u.username === username);
        if (!user) return false;
        user.password = newPassword;
        this.save();
        return true;
    }

    switchRole(username) {
        const user = this.users.find(u => u.username === username);
        if (user) {
            user.role = user.role === "admin" ? "user" : "admin";
            this.save();
        }
    }

    save() {
        localStorage.setItem("users", JSON.stringify(this.users));
    }

    load() {
        const data = localStorage.getItem("users");
        this.users = data ? JSON.parse(data) : [];
    }
}
