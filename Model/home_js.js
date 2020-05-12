//Add currency codes to drop-downs---------------------------------------------------
let baseCurrData = {"AED":"0.0484966","ARS":"0.8928571","AUD":"0.020404","BRL":"0.0768049","CAD":"0.0185364","CHF":"0.0128378","CLP":"10.87","CNY":"0.0936435","CZK":"0.3364","DKK":"0.0910564","EGP":"0.2078","EUR":"0.0122068","GBP":"0.0107119","HKD":"0.1023342","HUF":"4.2735043","IDR":"197.2775695","ILS":"0.04636","ISK":"1.9368584","JMD":"1.9228","JPY":"1.4198495","KES":"1.4013","KRW":"16.1831","LBP":"19.96","LKR":"2.4877","MAD":"0.1301","MXN":"0.3182686","MYR":"0.05716","NAD":"0.2439","NOK":"0.136186","NPR":"1.5996","NZD":"0.0217339","PHP":"0.6643","PKR":"2.1119","PLN":"0.0556793","RUB":"0.9693","SAR":"0.0495786","SEK":"0.1303","SGD":"0.0187199","THB":"0.4242","TRY":"0.09274","TWD":"0.3948","USD":"0.0132036","VEF":"0.000309","XAF":"8.0232","XOF":"7.9929","ZAR":"0.2439","AFN":"1.0045288","ALL":"1.5157717","AMD":"6.4393889","ANG":"0.0237004","AZN":"0.0223999","BBD":"0.0266594","BDT":"1.1215786","BGN":"0.023876","BHD":"0.0049857","BIF":"24.9945205","BND":"0.01872","BOB":"0.0910592","BSD":"0.0132036","BWP":"0.1606295","BYN":"0.032189","BZD":"0.0266145","CHF RTS":"0.0128207","CNH":"0.0938128","COP":"51.3758214","CRC":"7.5049183","CUP":"0.0132036","DJF":"2.3506344","DOP":"0.7246128","DZD":"1.7031966","ETB":"0.4495319","FJD":"0.0296443","GEL":"0.0423175","GHS":"0.0763654","GMD":"0.6836157","GNF":"126.1800705","GTQ":"0.1016676","HNL":"0.3276721","HRK":"0.0923366","HTG":"1.397494","INR":"1","IQD":"15.7625731","IRR":"554.5506159","JOD":"0.0093616","JPY RTS":"1.406446","KGS":"1.0302389","KHR":"54.3921729","KMF":"5.8491886","KWD":"0.0040817","KYD":"0.0109582","KZT":"5.5513157","LAK":"118.8322748","LSL":"0.2440617","LYD":"0.0187148","MDL":"0.2372684","MGA":"50.6357527","MKD":"0.7521423","MMK":"18.5840474","MOP":"0.1054042","MRO":"0.5098565","MUR":"0.5327647","MVR":"0.2041274","MWK":"9.7271479","MZN":"0.9002205","NGN":"4.7598928","NIO":"0.4454651","OMR":"0.0050847","PAB":"0.0132036","PEN":"0.0451405","PGK":"0.0455695","PYG":"86.865698","QAR":"0.0480743","RON":"0.0589699","RSD":"1.4352298","RWF":"12.5839814","SCR":"0.2316569","SDG":"0.7280127","SOS":"7.6382746","STD":"0.3013283","SVC":"0.1155908","SYP":"6.793245","SZL":"0.2440287","TJS":"0.1355348","TND":"0.0384264","TTD":"0.0892787","TZS":"30.5663018","UAH":"0.3540785","UGX":"50.0812021","UYU":"0.5819121","UZS":"133.8183451","VND":"308.1056815","VUV":"1.5824498","XCD":"0.0357817","XPF":"1.4574118","YER":"3.3048576","ZMK":"0.2453226","XAU":"0.00000777","BAM":"0.0238753","CVE":"1.3637934","SDR":"0.0098131"};
//loadBaseCurr();
let curr_lst;// ['AED', 'ARS', 'AUD', 'AZN', 'BHD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BWP', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK', 'DKK', 'EGP', 'ETH', 'EUR', 'FJD', 'GAU', 'GBP', 'GEL', 'GHS', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'ISK', 'JOD', 'JPY', 'KRW', 'KWD', 'KYD', 'KZT', 'MAD', 'MXN', 'MYR', 'NIO', 'NOK', 'NZD', 'OMR', 'PEN', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RUB', 'SAR', 'SDR', 'SEK', 'SGD', 'THB', 'TND', 'TRY', 'TWD', 'UAH', 'USD', 'UYU', 'VEF', 'VND', 'WTI', 'XAG', 'XAU', 'XPD', 'XPT', 'ZAR']
curr_lst = Object.keys(baseCurrData).sort();
let from_drpdwn = document.querySelector('#from-drpdwn');
let to_drpdwn = document.querySelector('#to-drpdwn');
const lst_len = curr_lst.length; //72
for (let i=0; i<lst_len; i++){
    if(curr_lst[i].includes('RTS')){continue;}
    let opt = document.createElement('option');
    opt.value = curr_lst[i];
    opt.innerHTML = curr_lst[i];
    from_drpdwn.appendChild(opt);
}
for (let i=0; i<lst_len; i++){
    if(curr_lst[i].includes('RTS')){continue;}
    let opt = document.createElement('option');
    opt.value = curr_lst[i];
    opt.innerHTML = curr_lst[i];
    to_drpdwn.appendChild(opt);
}
from_drpdwn.value = "INR";
to_drpdwn.value = "INR";
function loadBaseCurr() {
    if (baseCurrData===undefined){
        fetch('https://fcsapi.com/api-v2/forex/base_latest?symbol=INR&type=forex&access_key=S6zMsyRzQxNH8pXPMB2bkpjftjmJZukFZ3MBH0uF5Yb9srEJd3')
        .then(res => res.json())
        .then((out) => {
            baseCurrData = out.response;
        }).catch(err => console.error(err));
    }
}
//------------------------------------------------------------------------------------

let btn_convert = document.getElementById("btn-convert");
let convert_dialog = document.getElementById("container-convert");
let close_convert = document.getElementById("x");
let bodyElement = document.getElementById("container");
let fromTxt = document.querySelector('#from-txt');
let toTxt = document.querySelector('#to-txt');

let from_drpdwn_value, to_drpdwn_value, from_txt_value, to_txt_value;
let x,y,i,j;

btn_convert.onclick = function f() {
    convert_dialog.style.visibility = "visible";
    convert_dialog.style.animation = "convert-dialog-animation 0.6s ease";
    bodyElement.style.animation = "blur-bg 0.6s linear -0.3s";
    bodyElement.classList.add("isblurred");
    convert('from');
};
close_convert.onclick = function () {
    convert_dialog.style.visibility = "hidden";
    convert_dialog.style.animation = "";
    bodyElement.style.animation = "";
    bodyElement.classList.remove("isblurred");
};
// Get dropdown values onInput action
function getDrpdwnValues(){
    from_drpdwn_value = from_drpdwn.value;
    to_drpdwn_value = to_drpdwn.value;
}
// Get Text box values onInput action
function getTxtValues() {
    from_txt_value = fromTxt.value;
    to_txt_value = toTxt.value;
}

function swapheading(v){
    console.log(document.querySelector('#from-heading').innerHTML);
    if(v=='to-from'){
        document.querySelector('#from-heading').innerHTML = 'To';
        document.querySelector('#to-heading').innerHTML = 'From';
        convert('to-txt');
    }
    if(v=='from-to'){
        document.querySelector('#from-heading').innerHTML = 'From';
        document.querySelector('#to-heading').innerHTML = 'To';
        convert('from');
    }
}


function convert(ft) {
    getDrpdwnValues();
    getTxtValues();
    x = from_drpdwn_value;
    y = to_drpdwn_value;
    i = parseFloat(from_txt_value);
    j = parseFloat(to_txt_value);
    let decimalPlace = 4;
    console.log(ft);

    if(x==y){
        if(ft==='from'){toTxt.value = fromTxt.value;}
        if(ft==='to'||ft==='totxt'){fromTxt.value = toTxt.value;}
        }
    else if(x == 'INR'){
        if(ft==='from'){
            toTxt.value = (i * parseFloat(baseCurrData[to_drpdwn_value])).toFixed(decimalPlace);
        }
        if(ft==='totxt'){
            fromTxt.value = (j * (1/parseFloat(baseCurrData[to_drpdwn_value]))).toFixed(decimalPlace);
        }

    }
    else if(y == 'INR'){
        if(ft==='from'){
            toTxt.value = (i * (1/parseFloat(baseCurrData[from_drpdwn_value]))).toFixed(decimalPlace);
        }
        if(ft==='totxt'){
            fromTxt.value = (j * parseFloat(baseCurrData[from_drpdwn_value])).toFixed(decimalPlace);
        }
    }
    else {
        let fromPrice, toPrice;
        if(ft=='totxt'){

            fromPrice = parseFloat(baseCurrData[to_drpdwn_value]);
            toPrice = parseFloat(baseCurrData[from_drpdwn_value]);
            fromTxt.value = (j * (toPrice / fromPrice)).toFixed(decimalPlace);
            console.log((j * (toPrice / fromPrice)).toFixed(decimalPlace));
        }
        else{
            fromPrice = parseFloat(baseCurrData[from_drpdwn_value]);
            toPrice = parseFloat(baseCurrData[to_drpdwn_value]);
            toTxt.value = (i * (toPrice / fromPrice)).toFixed(decimalPlace);
        }

    }
}
function drpdwnInput() {

}
function fromTxtInput() {

}
function toTxtInput() {

}
/*
fetch('https://fcsapi.com/api-v2/forex/latest?symbol=GBP/INR&period=1h&access_key=S6zMsyRzQxNH8pXPMB2bkpjftjmJZukFZ3MBH0uF5Yb9srEJd3')
    .then(res => res.json())
    .then((out) => {
        toTxt.value = out.response[0]['price'];
}).catch(err => console.error(err));
*/

