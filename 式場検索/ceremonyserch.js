
var ceremony = ["道下ブライダル","ミッチー牧場","耕太郎神社","クロワッサン","道下バターマリン"];

window.onload = function(){
    var parentDiv = document.getElementById("ceremonylist");
    for(var i = 0;i < ceremony.length;i++){
        var newElement = document.createElement("li"); // p要素作成
        var newContent = document.createTextNode(ceremony[i]); // テキストノードを作成
        newElement.appendChild(newContent); // p要素にテキストノードを追加
        parentDiv.appendChild(newElement);
    }
}

function Serch(){
    var parentDiv = document.getElementById("ceremonylist");
    var serchword = new RegExp(document.getElementById("serchword").value);
    while( parentDiv.firstChild ){
        parentDiv.removeChild( parentDiv.firstChild );
    }
    for(var i = 0;i < ceremony.length;i++){
        if(serchword.test(ceremony[i])){
            var newElement = document.createElement("li"); // p要素作成
            var newContent = document.createTextNode(ceremony[i]); // テキストノードを作成
            newElement.appendChild(newContent); // p要素にテキストノードを追加
            parentDiv.appendChild(newElement);
        }
    }
}