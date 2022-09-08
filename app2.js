function RendertoHtml() {
    var mydata = localStorage.getItem('mydata');
    var mydata = JSON.parse(mydata);
    // console.log(mydata[0])

    for(var i=0;i<mydata.length;i++){


        var row =
        `
    <tr>
    <td>${mydata[i].name}</td>
    <td>${mydata[i].name}</td>
    <td>${mydata[i].fname}</td>
    <td>${mydata[i].Cnic}</td>
    <td>${mydata[i].email}</td>
    <td>${mydata[i].dateofbirth}</td>
    <td>${mydata[i].gender}</td>
    </tr>

    `;
    // console.log(mydata.name)

    document.getElementById("tableID").innerHTML+=row;
    }
    


}

RendertoHtml();