
var ceremony = ["THE STYLE","アーヴェリール迎賽館　岡山","ラヴィール岡山","ヴェルジェくらしき","森の邸宅　彩音","風ノウタ"];
var ceremonylink = ["thestyle.html","arveril.html","ravil.html","velju.html","forest.html","wind.html"]

//読み込み時の処理
window.onload = function(){
    for(var i = 0;i < ceremony.length;i++){
        addElement(i);
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
            addElement(i);
        }
    }
}

function addElement(i){
    var parentDiv = document.getElementById("ceremonylist");
    var newElement = document.createElement("li"); // p要素作成
        parentDiv.appendChild(newElement);
        var newElement2 = document.createElement("a"); // p要素作成
        var newContent = document.createTextNode(ceremony[i]); // テキストノードを作成
        newElement2.appendChild(newContent); // p要素にテキストノードを追加
        newElement2.setAttribute("href",ceremonylink[i]); // p要素にidを設定
        newElement.appendChild(newElement2);
}