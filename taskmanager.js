class taskmanager {
    constructor() {
        
        this.Listtask = [];   
        this.id = 1;   
    }

getlisttask() {
    return this.Listtask;   // Trả về danh sách các công việc
    this.getlocalstorage();  // Lấy danh sách công việc từ localStorage
}

add (newtask){
    this.Listtask.push(newtask);  // Thêm công việc mới vào danh sách
    this.savedatalocalstorage();  // Lưu lại danh sách công việc vào localStorage
}

remove(id){
    let index = -1;
    for  (let i = 0; i < this.Listtask.length; i++) {
        if (this.Listtask[i].id === id) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        alert("Không tìm thấy công việc với ID: " + id);

    }else {
        this.Listtask.splice(index, 1);  // Xóa công việc khỏi danh sách
        alert("Đã xóa công việc với ID: " + id);
    }
    this.savedatalocalstorage();  // Lưu lại danh sách công việc sau khi xóa
}

getlisttaskbyid(id) {
    for (let i = 0; i < this.Listtask.length; i++) {
          let p = this.Listtask[i];
          if (p.id === id) {
            return p;  // Trả về công việc có ID tương ứng  
    }
}
this.getlocalstorage();  // Lấy danh sách công việc từ localStorage
}

update(id, newtask) {
    let index = -1;
    for (let i = 0; i < this.Listtask.length; i++) {
        if (this.Listtask[i].id === id) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        this.Listtask[index] = newtask;  // Cập nhật công việc tại vị trí index
        alert("Đã cập nhật công việc với ID: " + id);
    } else {
        alert("Không tìm thấy công việc với ID: " + id);
    }
    this.savedatalocalstorage();  // Lưu lại danh sách công việc sau khi cập nhật
}

savedatalocalstorage() {
    localStorage.setItem("taskList", JSON.stringify(this.Listtask));  // Lưu danh sách công việc vào localStorage
}
getlocalstorage() {
    let data = localStorage.getItem("taskList");
    if (data) {
        this.Listtask = JSON.parse(data);  // Lấy danh sách công việc từ localStorage
    }
    else{
        this.Listtask = [];  // Nếu không có dữ liệu, khởi tạo danh sách công việc rỗng
        this.savedatalocalstorage();  // Lưu lại danh sách rỗng vào localStorage
    }
}

getlistbyname(namesearch) {
    let listoutput = [];
    for (let i = 0; i < this.Listtask.length; i++) {
        let task = this.Listtask[i];
        if(task.title.toLowercase().includes(namesearch.toLowercase()) ) {
            listoutput.push(task);  // Thêm công việc vào danh sách kết quả nếu có từ khóa tìm kiếm
        }   
    }
    return listoutput;  // Trả về danh sách công việc tìm được

}
}