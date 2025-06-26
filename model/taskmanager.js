class TaskManager {
    constructor() {
        this.taskList = [];
        this.load();
    }

    add(task) {
        this.taskList.push(task);
        this.save();
    }

    update(id, newTask) {
        const index = this.taskList.findIndex(t => t.id === id);
        if (index !== -1) {
            this.taskList[index] = newTask;
            this.save();
        }
    }

    remove(id) {
        this.taskList = this.taskList.filter(t => t.id !== id);
        this.save();
    }

    getById(id) {
        return this.taskList.find(t => t.id === id);
    }

    getAll() {
        return this.taskList;
    }

    searchByName(keyword) {
        return this.taskList.filter(t => t.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    save() {
        localStorage.setItem('taskList_all', JSON.stringify(this.taskList));
    }

    load() {
        const data = localStorage.getItem('taskList_all');
        this.taskList = data ? JSON.parse(data) : [];
    }
}
