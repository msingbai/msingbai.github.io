//新增数据函数
function addRow(){
    var table = document.getElementById("myTable");
    // console.log(table);

    //获取插入位置
    var length = table.rows.length;
    // console.log(length);
    //插入行节点
    var newRow = table.insertRow(length);
    console.log(newRow);
    newRow.insertHTML = "123456";

    //插入列节点对象
    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);

    //修改节点文本内容
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = '联系方式'
    actionCol.innerHTML = '                <button onclick="editRow(this)">编辑</button>\n' +
        '<button onclick="deleteRow(this)">删除</button>'
}

//删除数据函数
function deleteRow(button){
    // console.log(button);
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);

}

//编辑数据
function editRow(button){
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var phone = row.cells[1];

    var inputName = prompt("请输入名字");
    var inputPhone = prompt("请输入联系方式");

    if (inputName == null ){

    }else {
        name.innerHTML = inputName;
    }

    if (inputPhone == null ){

    }else {
        phone.innerHTML = inputPhone;
    }
}