var seatnumber = 0;

function RendertoHtml() {
    var mydata = localStorage.getItem('mydata');
    var mydata = JSON.parse(mydata);
    // console.log(mydata[0])

    for (var i = 0; i < mydata.length; i++) {


        var row =
            `
    <tr>
    <td>${seatnumber}</td>
    <td>${mydata[i].name}</td>
    <td>${mydata[i].fname}</td>
    <td>${mydata[i].Cnic}</td>
    <td>${mydata[i].email}</td>
    <td>${mydata[i].dateofbirth}</td>
    <td>${mydata[i].gender}</td>
    <td><button onclick="delrow()">Del</button></td>
    </tr>
    
    `;
        seatnumber += 1;

        document.getElementById("tableID").innerHTML += row;
    }


}
var data = [];
function delrow() {
    var del_index = event.target.parentNode.parentNode.childNodes[1].innerText;
    // console.log(del_index)
    var updatedata = localStorage.getItem("mydata");
    var updatedata = JSON.parse(updatedata);
    updatedata.splice(del_index,1);
    // console.log(updatedata)
    localStorage.setItem('mydata', JSON.stringify(updatedata));
    location.reload();
    
}



function Entrypagefunction() {
    window.location.href = "/Entrypage.html";
}





// driver code//////////////////////////////////////////////////////////////////////
RendertoHtml();
