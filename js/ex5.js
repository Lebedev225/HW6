// // Write JavaScript code to display a table as shown below.  Note the following:
// •	Table displays numbers 1 – 12 (a number on each row)
// •	Numbers divisible by 4 have a blue background
// •	Text is center aligned


const createTable = () => {
    let table = document.createElement("table"); 
    table.setAttribute("id", "table");
    document.getElementById("output").appendChild(table)



    for (let i = 1; i <= 12; i++) {
        let tableRef = document.getElementById("table");
        let newRow = tableRef.insertRow(-1);
        let newCell = newRow.insertCell(0);
        if (i % 4 == 0) {
            newCell.style.backgroundColor = "lightblue";
        }
        let newText = document.createTextNode(`${i}`);
        newCell.appendChild(newText);



    }
    document.getElementById('table').style.textAlign = 'center';

}
createTable();

