class task {
    constructor(id, title, description, assignee, status, deadline) {
        this.id = id;                     // ID duy nhất của công việc
        this.title = title;               // Tiêu đề công việc
        this.description = description;   // Mô tả chi tiết công việc
        this.assignee = assignee;         // Người được giao
        this.status = status;             // Trạng thái công việc (chưa làm / đang làm / xong)
        this.deadline = deadline;         // Hạn chót hoàn thành công việc
    }
}

