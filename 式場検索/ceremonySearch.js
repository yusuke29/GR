
var ceremony = ["THE STYLE","アーヴェリール迎賽館　岡山","ラヴィール岡山","ヴェルジェくらしき","森の邸宅　彩音","風ノウタ"];
var ceremonylink = ["thestyle.html","arveril.html","ravil.html","velju.html","forest.html","wind.html"];
var ceremonyalea = ["岡山","倉敷","総社","新見","津山","神戸"];
var area = [
    ["岡山県すべて","岡山市・周辺", "倉敷市・周辺","県北"],
    ["広島県すべて","備後・県北", "呉・東広島","広島市・周辺"],
    ["山口県すべて","岩国・柳井・周南", "防府・山口・宇部","下関"],
    ["鳥取県すべて"],
    ["島根県すべて"]
]

//読み込み時の処理
window.onload = function(){

    const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
　　modal.style.display = 'block';
};

//バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
　　modal.style.display = 'none';
};

//モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
　　if (e.target == modal) {
　　modal.style.display = 'none';
　　};
};
    for(var i = 0;i < ceremony.length;i++){
        addElement(i);
    }
}

//検索ボタンをクリックした時の処理
function Search(){
    var parentDiv = document.getElementById("ceremonylist");
    var searchword = new RegExp(document.getElementById("searchword").value);
    while( parentDiv.firstChild ){
        parentDiv.removeChild( parentDiv.firstChild );
    }
    for(var i = 0;i < ceremony.length;i++){
        if(searchword.test(ceremony[i])){
            addElement(i);
        }
        else if(searchword.test(ceremonyalea[i])){
            addElement(i);
        }
    }
}

function addElement(i){
    var parentDiv = document.getElementById("ceremonylist");
    var newElement = document.createElement("li"); //li要素作成
        parentDiv.appendChild(newElement);
        var newElement2 = document.createElement("a"); // a要素作成
        var newContent = document.createTextNode(ceremony[i]); // テキストノードを作成
        newElement2.appendChild(newContent); // 要素にテキストノードを追加
        newElement2.setAttribute("href",ceremonylink[i]); // p要素にidを設定
        newElement.appendChild(newElement2);
}

function Jump(pass){
    window.location.href = pass;
}

function pfCheck(check){
    var areael = document.getElementById("area");
    while( areael.firstChild ){
        areael.removeChild( areael.firstChild );
    }
    for(var i=0;i < area[check.value].length;i++){
        var newlabel = document.createElement("label");
        areael.appendChild(newlabel);
        var newElement = document.createElement("input");
        newElement.setAttribute("type","checkbox"); 
        newElement.setAttribute("name","area");
        newElement.setAttribute("value",i);
        newlabel.appendChild(newElement);
        var newContent = document.createTextNode(area[check.value][i]); // テキストノードを作成
        areael.appendChild(newContent); // 要素にテキストノードを追加
    }
    document.getElementById("navi").innerHTML = "エリアを選択"
}






