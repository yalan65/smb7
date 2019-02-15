window.onload =function() {
    var table = document.getElementById("tablep");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++)
            table.rows[i].onclick = function () {
               // tableText(this);
                 window.location.href = "map.html";
            };
        }
    }
 
    var table2 = document.getElementById("tableall");
    if (table2 != null) {
        for (var i = 0; i < table2.rows.length; i++) {
            for (var j = 0; j < table2.rows[i].cells.length; j++)
            table2.rows[i].onclick = function () {
               // tableText(this);
                 window.location.href = "mapall.html";
            };
        }
    }

    function tableText(tableCell) {
        alert(tableCell.innerHTML);
    }
}
