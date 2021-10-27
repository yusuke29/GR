document.addEventListener("DOMContentLoaded",function(){

    var much = document.getElementById('much');
    var people = document.getElementById('people');
    let p = document.querySelectorAll('[name="p"]');
    var cook = 0;
    var cake = 0;
    var pull = 0;

    var one = document.getElementById('1_1');
    var two = document.getElementById('1_2');
    var thr = document.getElementById('1_3');
    var fou = document.getElementById('1_4');
    var fiv = document.getElementById('1_5');

    var oneone = document.getElementById('2_1');
    var twotwo = document.getElementById('2_2');
    var thrthr = document.getElementById('2_3');
    var foufou = document.getElementById('2_4');
    var fivfiv = document.getElementById('2_5');

    var oneoneone = document.getElementById('3_1');
    var twotwotwo = document.getElementById('3_2');
    var thrthrthr = document.getElementById('3_3');
    var foufoufou = document.getElementById('3_4');
    var fivfivfiv = document.getElementById('3_5');

    var money = {
        //金額計算
        sum:function(){
            var sum = 0;
            sum += people.value*cook;
            sum += people.value*cake;
            sum += people.value*pull;

            document.getElementById('howmuch').innerHTML = sum;

            if(much.value>sum){
                var diff = much.value - sum;
                document.getElementById('diff').innerHTML = diff;
                var diff = document.getElementById('diff');
                diff.style.color = 'blue';

            }else{
                var diff = sum - much.value;
                document.getElementById('diff').innerHTML = diff;
                var diff = document.getElementById('diff');
                diff.style.color = 'red';
            }
        }    
    }
    //表代入
    var inner = {
        cook:function(){
            //人数
            p[0].innerHTML = people.value;
            //単価
            document.getElementById('uc').innerHTML = cook;
            //小計
            var sscc = 0;
            sscc = cook * people.value;
            document.getElementById('sc').innerHTML = sscc;
        },
        cake:function(){
            p[1].innerHTML = people.value;

            document.getElementById('uw').innerHTML = cake;

            var ssww = 0;
            ssww = cake * people.value;
            document.getElementById('sw').innerHTML = ssww;
        },
        pull:function(){
            p[2].innerHTML = people.value;

            document.getElementById('up').innerHTML = pull;

            var sspp = 0;
            sspp = pull * people.value;
            document.getElementById('sp').innerHTML = sspp;
        },
        total:function(){
        
            document.getElementById('total').innerHTML = howmuch.value;
        }
    }

    //料理
    document.getElementById('1_1').addEventListener('click',function(){
        one.disabled=true;
        two.disabled=false;
        thr.disabled=false;
        fou.disabled=false;
        fiv.disabled=false;
        cook = one.value;
    })

    document.getElementById('1_2').addEventListener('click',function(){
        two.disabled=true;
        one.disabled=false;
        thr.disabled=false;
        fou.disabled=false;
        fiv.disabled=false;
        cook = two.value;
    })
    document.getElementById('1_3').addEventListener('click',function(){
        thr.disabled=true;
        one.disabled=false;
        two.disabled=false;
        fou.disabled=false;
        fiv.disabled=false;
        cook = thr.value;
    })
    document.getElementById('1_4').addEventListener('click',function(){
        fou.disabled=true;
        one.disabled=false;
        two.disabled=false;
        thr.disabled=false;
        fiv.disabled=false;
        cook = fou.value;
    })
    document.getElementById('1_5').addEventListener('click',function(){
        fiv.disabled=true;
        one.disabled=false;
        two.disabled=false;
        thr.disabled=false;
        fou.disabled=false;
        cook = fiv.value;
    })


    //ケーキ
    document.getElementById('2_1').addEventListener('click',function(){
        oneone.disabled=true;
        twotwo.disabled=false;
        thrthr.disabled=false;
        foufou.disabled=false;
        fivfiv.disabled=false;
        cake = oneone.value;
    })

    document.getElementById('2_2').addEventListener('click',function(){
        twotwo.disabled=true;
        oneone.disabled=false;
        thrthr.disabled=false;
        foufou.disabled=false;
        fivfiv.disabled=false;
        cake = twotwo.value;
    })
    document.getElementById('2_3').addEventListener('click',function(){
        thrthr.disabled=true;
        oneone.disabled=false;
        twotwo.disabled=false;
        foufou.disabled=false;
        fivfiv.disabled=false;
        cake = thrthr.value;
    })
    document.getElementById('2_4').addEventListener('click',function(){
        foufou.disabled=true;
        oneone.disabled=false;
        twotwo.disabled=false;
        thrthr.disabled=false;
        fivfiv.disabled=false;
        cake = foufou.value;
    })
    document.getElementById('2_5').addEventListener('click',function(){
        fivfiv.disabled=true;
        oneone.disabled=false;
        twotwo.disabled=false;
        thrthr.disabled=false;
        foufou.disabled=false;
        cake = fivfiv.value;
    })

    //引き出物
    document.getElementById('3_1').addEventListener('click',function(){
        oneoneone.disabled=true;
        twotwotwo.disabled=false;
        thrthrthr.disabled=false;
        foufoufou.disabled=false;
        fivfivfiv.disabled=false;
        pull = oneoneone.value;
    })

    document.getElementById('3_2').addEventListener('click',function(){
        twotwotwo.disabled=true;
        oneoneone.disabled=false;
        thrthrthr.disabled=false;
        foufoufou.disabled=false;
        fivfivfiv.disabled=false;
        pull = twotwotwo.value;
    })
    document.getElementById('3_3').addEventListener('click',function(){
        thrthrthr.disabled=true;
        oneoneone.disabled=false;
        twotwotwo.disabled=false;
        foufoufou.disabled=false;
        fivfivfiv.disabled=false;
        pull = thrthrthr.value;
    })
    document.getElementById('3_4').addEventListener('click',function(){
        foufoufou.disabled=true;
        oneoneone.disabled=false;
        twotwotwo.disabled=false;
        thrthrthr.disabled=false;
        fivfivfiv.disabled=false;
        pull = foufoufou.value;
    })
    document.getElementById('3_5').addEventListener('click',function(){
        fivfivfiv.disabled=true;
        oneoneone.disabled=false;
        twotwotwo.disabled=false;
        thrthrthr.disabled=false;
        foufoufou.disabled=false;
        pull = fivfivfiv.value;
    })

    document.getElementById('cook').addEventListener('click',function(){
        money.sum();
        inner.cook();
        inner.total();
    })

    document.getElementById('cake').addEventListener('click',function(){
        money.sum();
        inner.cake();
        inner.total();
    })

    document.getElementById('pull').addEventListener('click',function(){
        money.sum();
        inner.pull();
        inner.total();
    })
})