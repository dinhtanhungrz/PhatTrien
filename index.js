// Khởi tạo đối tượng quản lý công việc với tên biến dễ hiểu bằng tiếng Việt
let quanLyCongViec = new taskmanager();

console.log("quanLyCongViec", quanLyCongViec);



function Showtask(list) {  
    

    let html = ``;
    for (let i = 0; i < list.length; i++) {
        let Task = list[i];
        
        html += `
            <tr>
                <td>${Task.id}</td>
                <td>${Task.title}</td>
                <td>${Task.description}</td>
                <td>${Task.status}</td>
                <td>${Task.deadline}</td>
                <td>${Task.assignee}</td>
                <td><button onClick="navigatetoupdateTask(${Task.id})">Sửa</button></td>
                <td><button onClick="deleteTask(${Task.id})">Xoá</button></td>
            </tr>
        `;
    }
    // Đảm bảo id trong HTML là 'taskList'
    document.getElementById("list_Task").innerHTML = html;
}

function navigateToHome(){
    document.getElementById("ui").innerHTML = `
    <h1>Danh sách Công việc</h1>
    <input type="text" id="searchInput" placeholder="Tìm kiếm:  " onkeyup="searchTaskbyname()">
    <br> <br>
    <Table border="1">
        <tr>
            <th>id </th>
            <th>title</th>
            <th>description</th>
            <th>status</th>
            <th>deadline</th>
            <th>assignee</th>
            <th colspan="2">action</th>
        </tr>
    <tbody id = list_Task>
    </tbody>
    </Table>`
    // Lấy danh sách các task từ taskmanager
    quanLyCongViec.getlocalstorage();  // Lấy dữ liệu từ localStorage
    let list = quanLyCongViec.getlisttask();
    console.log("list", list);
    Showtask(list);  // Hiển thị danh sách công việc
}

function searchTaskbyname() {
    let namesearch = document.getElementById("searchInput").value;
    let list = quanLyCongViec.getlistbyname(namesearch);  // Lấy danh sách công việc theo tên
    Showtask(list);  // Hiển thị danh sách công việc đã tìm kiếm
}

function navigateToAddTask() {
document.getElementById("ui").innerHTML = `
    <h1>Thêm Công việc</h1>   
    <div>
        <input type=" text" placeholder="title" id="title">
        <br>
        <br>
        <input type="text" placeholder="description"  id="description">
        <br>
        <br>
        <input type="text" placeholder="status"  id="status">
        <br>
        <br>
        <input type="date" placeholder="deadline"  id="deadline">
        <br>
        <br>
        <input type="text" placeholder="assignee"   id="assignee">
        <br>
        <br>
        <button onClick = "addTask()">Thêm Công việc</button>
    </div>
        `
}

function navigatetoupdateTask(id) {
    let task = quanLyCongViec.getlisttaskbyid(id);  // Lấy công việc theo ID

    if (!task) {
        alert("Không tìm thấy công việc với ID: " + id);
        return;
    }

    document.getElementById("ui").innerHTML = `
        <h1>Sửa công việc</h1>   
        <div>
            <input type="text" placeholder="title" id="title" value="${task.title}">
            <br><br>
            <input type="text" placeholder="description" id="description" value="${task.description}">
            <br><br>
            <input type="text" placeholder="status" id="status" value="${task.status}">
            <br><br>
            <input type="date" placeholder="deadline" id="deadline" value="${task.deadline}">
            <br><br>
            <input type="text" placeholder="assignee" id="assignee" value="${task.assignee}">
            <br><br>
            <button onClick="updateTask(${id})">Lưu</button>
        </div>
    `;
}


function updateTask(id) {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let deadline = document.getElementById("deadline").value;
    let assignee = document.getElementById("assignee").value;

    let p = new task(id, title, description, assignee, status, deadline);
    quanLyCongViec.update(id, p);  // Cập nhật công việc trong danh sách
    navigateToHome();  // Quay lại trang danh sách công việc
}


function addTask() {

    let list = quanLyCongViec.getlisttask();
    let id =  list.length + 1;  
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("status").value;
    let deadline = document.getElementById("deadline").value;
    let assignee = document.getElementById("assignee").value;
    let p = new task(id, title, description, assignee, status, deadline);
    quanLyCongViec.add(p);  // Thêm công việc mới vào danh sách
    navigateToHome();  // Quay lại trang danh sách công việc
}

function deleteTask(id) {
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (isConfirm) {
        quanLyCongViec.remove(id);  // Xóa công việc khỏi danh sách
        navigateToHome();  // Quay lại trang danh sách công việc
    }
}




navigateToHome();  




