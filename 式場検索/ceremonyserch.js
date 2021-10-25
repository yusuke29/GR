
var ceremony = ["THE STYLE","アーヴェリール迎賽館　岡山","ラヴィール岡山","ヴェルジェくらしき","森の邸宅　彩音","風ノウタ"];

//読み込み時の処理
window.onload = function(){
    var parentDiv = document.getElementById("ceremonylist");
    for(var i = 0;i < ceremony.length;i++){
        var newElement = document.createElement("li"); // p要素作成
        var newContent = document.createTextNode(ceremony[i]); // テキストノードを作成
        newElement.appendChild(newContent); // p要素にテキストノードを追加
        parentDiv.appendChild(newElement);
    }
}

//検索ボタンをクリックした時の処理
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