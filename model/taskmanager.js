class TaskManager {
    constructor(username) {
        this.username = username;
        this.Listtask = [];
        this.load();
    }

    add(task) {
        this.Listtask.push(task);
        this.save();
    }

    remove(id) {
        this.Listtask = this.Listtask.filter(task => task.id !== id);
        this.save();
    }

    update(id, newTask) {
        const index = this.Listtask.findIndex(t => t.id === id);
        if (index !== -1) {
            this.Listtask[index] = newTask;
            this.save();
        }
    }

    getById(id) {
        return this.Listtask.find(task => task.id === id);
    }

    getAll() {
        return this.Listtask;
    }

    searchByName(name) {
        return this.Listtask.filter(task =>
            task.title.toLowerCase().includes(name.toLowerCase())
        );
    }

    save() {
        localStorage.setItem(`taskList_${this.username}`, JSON.stringify(this.Listtask));
    }

    load() {
        const data = localStorage.getItem(`taskList_${this.username}`);
        this.Listtask = data ? JSON.parse(data) : [];
    }
}
