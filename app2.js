var serialNO = 0;

function RendertoHtml() {
    var mydata = localStorage.getItem('mydata');
    var mydata = JSON.parse(mydata);
    // console.log(mydata[0])

    for (var i = 0; i < mydata.length; i++) {


        var row =
            `
    <tr>
    <td>${serialNO}</td>
    <td>${mydata[i].ebnumber}</td>
    <td>${mydata[i].name}</td>
    <td>${mydata[i].fname}</td>
    <td>${mydata[i].Cnic}</td>
    <td>${mydata[i].email}</td>
    <td>${mydata[i].dateofbirth}</td>
    <td>${mydata[i].gender}</td>
    <td><button onclick="delrow()">Del</button></td>
    <td><button onclick="Editrow()">Edit</button></td>
    <td><button onclick="editdone()">Done</button></td>
    </tr>
    
    `;
        serialNO += 1;

        document.getElementById("tableID").innerHTML += row;
    }


}


var data = [];
function delrow() {
    var del_index = event.target.parentNode.parentNode.childNodes[1].innerText;
    // console.log(del_index)
    var updatedata = localStorage.getItem("mydata");
    var updatedata = JSON.parse(updatedata);
    updatedata.splice(del_index, 1);
    // console.log(updatedata)
    localStorage.setItem('mydata', JSON.stringify(updatedata));
    location.reload();

}

var trying = "";
function Editrow() {
    var edit_index = event.target.parentNode.parentNode.children;
    trying = edit_index;
    edit_index[2].innerHTML = `<input type="text" id="editchangeID" value=${edit_index[2].innerText}></input>`;



    // document.getElementById("doneID").onclick = () => {
    //     console.log("chla raha hai")
    //     let indexnum = edit_index[0].innerText;
    //     let changedvalue = document.getElementById('editchangeID');
    //     console.log(changedvalue.value);


    //     console.log(indexnum)

    //     // console.log(edit_index)

    //     // var serial = edit_index[0];  
    //     // let updateDATA = localStorage.getItem('mydata')
    //     // let updatedata2 = JSON.parse(updateDATA);
    //     // console.log(updatedata2[indexnum])  


    // };



    // console.log(edit_index[2].innerText)
    // edit_index.innerHTML  = prompt();
    // console.log(edit_index.innerHTML)


}


editdone = () => {

    let indexnum = trying[0].innerText;
    var changedvalue = document.getElementById('editchangeID');
    trying[2].innerHTML = changedvalue.value;
    console.log(changedvalue.value);
    console.log(indexnum);

    let updateDATA = localStorage.getItem('mydata')
    let updatedata2 = JSON.parse(updateDATA);
    // updatedata2[indexnum]:name = 
    console.log(updatedata2[indexnum].name = changedvalue.value);
    localStorage.setItem('mydata', JSON.stringify(updatedata2[indexnum].name = changedvalue.value))





}












function Entrypagefunction() {
    window.location.href = "/Entrypage.html";
}





// driver code//////////////////////////////////////////////////////////////////////
RendertoHtml();
