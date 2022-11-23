var time = 15;
var a1 = 0, b1 = 0, c1 = 0, scoin = 0;
var ssramdom=3;

var sssconin=localStorage.getItem('SSCoins',sssconin);
    document.getElementById('coins').innerHTML=sssconin;

var phienss=localStorage.getItem('ssphien',phienss);
document.getElementById('phien').innerHTML=localStorage.getItem('phienss');
document.getElementById('phienbody').innerHTML=Number(localStorage.getItem('phienss'))+1;

function times() {
   
    time--;
    if (time < 10) document.querySelector('#time').innerHTML = `00:0${time}`;
    else document.querySelector('#time').innerHTML = `00:${time}`;

    if (time == 0) {
        time = 20;
    

    }
    if (time == 20) {
        phiens();
        var ramdom = Math.ceil(Math.random() * 3);
        kq.src = arr[ramdom - 1];
      
        ketqua(ramdom - 1);

        datcuocs[0].value = '';
        datcuocs[1].value = '';
        datcuocs[2].value = '';
        document.querySelector('#tudat').value = '';
        document.querySelector('#tongcuoc').value = 0;
        // Ram dom nguoi choi
        a1 = 0, b1 = 0, c1 = 0, scoin = 0;
    }
    for(var i=0;i<datcuocs.length;i++){
        if(datcuocs[i].value) {
            ssramdom=i;
            break;
        }
       
    }
    if(time==19){
        if(ssramdom==3){
            var p = document.createElement('tr');
            p.innerHTML = `<tr>
            <td >${ document.querySelector('#phien').innerText}</td>
            <td ><img class="solan" src="${document.querySelector('#resulf').getAttribute('src')}" alt="">
            </td>
        </tr>`
            document.querySelector('#table').appendChild(p);
            ssramdom=3;
        }
        else{
        var p = document.createElement('tr');
        p.innerHTML = `<tr>
        <td >${ document.querySelector('#phien').innerText}</td>
        <td ><img class="solan" src="${document.querySelector('#resulf').getAttribute('src')}" alt=""> vs
        <img src="${arr[ssramdom]}" alt="">
        </td>
    </tr>`
        document.querySelector('#table').appendChild(p);
        console.log(document.querySelector('#table'));
        console.log(ssramdom);
        ssramdom=3;
    }
    if(document.getElementsByClassName('solan').length>=6){
        document.querySelector('#table').innerHTML=`
        <tr>
        <th>MÃ VÉ CƯỢC</th>
        <th>KẾT QUẢ</th>
    </tr>`;
    };
    sssconin=Number(document.querySelector('#coins').innerHTML);
    localStorage.setItem('SSCoins',sssconin);

}
if(time==17){
    document.getElementById('hientien').innerHTML=''
}
    nguoichoi();

}

var phien = 5654;
function phiens() {
    
    phien++;
    phienss=phien;
    document.querySelector('#phien').innerHTML = `00${phienss}`
    document.querySelector('#phienbody').innerHTML = `00${phienss + 1}`

    localStorage.setItem('phienss',phienss);
    // document.querySelector('#phienmvc').innerHTML=`00${phien}`



}

setInterval("times()", 1000);
// Ramdom keo bua bao
var kq = document.getElementById('resulf');
var arr = [
    './img/bua.png',
    './img/bao.png',
    './img/keo.png',
];

//số dư--------------
var money = Number(localStorage.getItem('SSCoins'));



// Tính win--lose  
// quy định 0--------Búa-------1 bao-------2-kéo
//


var datcuocs = document.getElementsByName('datcuoc');
function ketqua(n) {
    var s = money;
    if(!datcuocs[0].value &&!datcuocs[1].value&&!datcuocs[2].value){
        document.querySelector('#info--head').innerHTML = 'CHƯA ĐẶT';
        document.querySelector('#coin').innerHTML = '';
    }
    else{

   
    if (n == 0) {
        //Number(datcuocs[0].value)
        if (datcuocs[0].value) money += 0;                
        if(datcuocs[1].value) money += Number(datcuocs[1].value);
        if(datcuocs[2].value) money -= Number(datcuocs[2].value);

    }
    else if (n == 1) {
        if (datcuocs[1].value) money += 0;                
        if(datcuocs[0].value) money -= Number(datcuocs[0].value);
        if(datcuocs[2].value) money += Number(datcuocs[2].value);

    }
    else if (n == 2) {
        if (datcuocs[2].value) money += 0;                
        if(datcuocs[0].value) money += Number(datcuocs[0].value);
        if(datcuocs[1].value) money -= Number(datcuocs[1].value);
    }
   
    else{
        
    }
    if (s > money) {
        document.querySelector('#info--head').innerHTML = 'YOU LOSE';
        document.querySelector('#coin').innerHTML = Number(s) - Number(money);
    }
    else if (s < money) {
        document.querySelector('#info--head').innerHTML = 'YOU WIN';
        document.querySelector('#coin').innerHTML = Number(money) - Number(s);
    }
    else {
        document.querySelector('#info--head').innerHTML = 'HUỀ';
        document.querySelector('#coin').innerHTML = '';
    }
    if(Number(money) - Number(s)==0){

    }
    else if((Number(money) - Number(s))<0) document.getElementById('hientien').innerHTML= Number(money) - Number(s);
    else document.getElementById('hientien').innerHTML=`+${Number(money) - Number(s)}` ;
}
    document.querySelector('#coins').innerHTML = money;
   

}
var giadcs = document.getElementsByName('giadc');
var sumconindc = 0;

function giadc(i) {
    if (i == 0) sumconindc += 1000;
    else if (i == 1) sumconindc += 5000
    else if (i == 2) sumconindc += 25000
    else if (i == 3) sumconindc += 50000
    else if (i == 4) sumconindc += 100000
    else if (i == 5) sumconindc += 500000
    else if (i == 6) sumconindc += Number(document.querySelector('#tudat').value)
    else sumconindc += 0;
    for (var j = 0; j < datcuocs.length; j++) {
        if (datcuocs[j].value) {
            datcuocs[j].value = Number(sumconindc) + Number(datcuocs[j].value)
            sumconindc = 0;
            break;
        }

    }

}

function nguoichoi() {
    a1 += Math.ceil(Math.random() * 10);
    b1 += Math.ceil(Math.random() * 10);
    c1 += Math.ceil(Math.random() * 10);
    scoin += Math.ceil(Math.random() * 100) * 10000;
    document.querySelector('#a').innerText = a1;
    document.querySelector('#b').innerText = b1;
    document.querySelector('#c').innerText = c1;

    document.querySelector('#aa').style.width = `${a1 * 100 / (a1 + b1 + c1)}%`;
    document.querySelector('#bb').style.width = `${b1 * 100 / (a1 + b1 + c1)}%`;
    document.querySelector('#cc').style.width = `${c1 * 100 / (a1 + b1 + c1)}%`;

    //--------Tổng cược
    document.querySelector('#tongcuoc').value = scoin;

}

function addtr() {
    var p = document.createElement('tr');
    p.innerHTML = `<tr>
        <td >00${phien}</td>
        <td ><img src="${document.querySelector('#resulf').getAttribute('src')}" alt=""></td>
    </tr>`
    document.querySelector('#table').appendChild(p);

}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
//var datcuocs=document.getElementsByName('datcuoc');








