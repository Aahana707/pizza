function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_arrey.sort();
    for (var i=0;i<menu_list_arrey.lenth)1++;{
        htmldata=htmldata+'<li>'+menu_list_arrey[i]+'<li>'
    }
    htmldata=htmldata+"</ol>"
    documet.getElementById("dicplay_menu").innerHTML=htmldata;
}

function add_item(){
var item,document,getElementById("add_item").nodeValue;
menu_list_arrey.sort();
htmldata="<section call='cards'>"
for(var i=0;i<menu_list_arrey.lenth)i++;{
   htmldata=htmldata+<div class="card">+<image src="images/pizzaImg.png"/>+menu_list_arrey[i]+</div>
}
htmldata=htmldata+"</section>"
documet.getElementById("dicplay_addmenu").innerHTML=htmldata;
}