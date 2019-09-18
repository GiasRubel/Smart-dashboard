import moment from 'moment';
const convertToLb = function  (value) {
    value = value || 0+"kg";
    let arr = value.split(/([.0-9]+)/);
    if (typeof arr[2] !== 'undefined'){
        let units = parseFloat(arr[1]);
        let stringU = arr[2].toLowerCase().replace(/\s/g, '');
        let result = stringU === 'gm' ? 0.0023 * units : stringU === 'kg' ? 2.20462 * units  : stringU === 'mg' ? .0000023 * units : stringU === 'ounces' ? 0.0625 * units : units;
        return result;
    }
    return 0;
};

const convertToVolumetricWeight = function (input){
    let dimension = typeof input === 'string' ? input.split('x') : 0;
    let dimensionMul = 1;
    if(Array.isArray(dimension)){
        dimension.forEach(function (d) {
            dimensionMul = dimensionMul*parseFloat(d.trim().split(" ")[0]);
        });
        let dim = !isNaN(dimensionMul) ? dimensionMul: 0;
        let dimensionC = typeof window.settings !== 'undefined' ? window.settings.dimension_calculator : 139;
        return (dim/parseFloat(dimensionC)).toFixed(2)
    }
    return 0;
};

const dateString  = function(date){
    return new Date(Date.parse(date)).toDateString().toLocaleString();
};

const validator = function(rules){
    if(!rules.isArray()){
        return;
    }
    for(i = 0; i  < rules.length; i++){

    }
};

const addDate = function(startDate, numberOfDays){
    let returnDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()+numberOfDays
    );
    return returnDate.toISOString().slice(0,10)
};

const subDate = function(startDate, numberOfDays){
    startDate.setDate(startDate.getDate() - numberOfDays);
    return startDate.toISOString().slice(0,10)
};

const getCurrentMonthDays = function(){
    let today = new Date();
    let month = today.getMonth();
    return new Date(today.getFullYear(), month + 1, 0).getDate();
};

const fixed = function(value){
    if (isNaN(value)){
        return 0.00;
    }
    if (!isNaN(parseFloat(value))){
        return parseFloat(value).toFixed(2);
    }
};

const color = function(status){
    return status === 'pending' ? 'color: #e4425c' : status === 'cancel' ? 'color: #e4425c' : status === 'purchased' || status === 'confirmed' || status === 'delivered' ? 'color: #20c461' : status === 'cleared-custom' ? 'color: #afd138' : status === 'out-for-delivery' ? 'color: #20c461' : status === 'dac-received' ? 'color: #466cb3' : 'color: #000';
};

const timeConverter = function(value){
    return moment.utc(value, 'YYYY-MM-DD hh:mm:ss').local().format('lll');
};
/*do not change this method*/
const dateConverters = function(value){
    return moment.utc(value).local().format('MM-DD-YYYY h:mm:ss');
};

const timeInterval = function(value){
    let date = moment(value);
    return moment(date, 'MM-DD-YYYY h:mm:ss').fromNow();
};

const subString = function(value, ln = 30){
    value = typeof value !== 'object' ? value : '';
    return value.substr(0, ln);
};

const objectCount = function(arrays){
    if (typeof arrays === 'undefined')
        return;
    return arrays.length
};

const bdtConverter = function(currency, amount){
    let conversion_rate = currency !== 'BDT' ? window.settings.BDT : 1;
    return parseFloat(amount) * parseFloat(conversion_rate);
};

const getCookie = function(name){
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
};

const setCookie = function(name, value){
    document.cookie = name+'='+value+";domain="+document.domain+";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie = name+'='+value+";domain="+document.domain+";path=/"
};

const rsConverter = function(currency, amount){
    const conversion_rate = currency !== 'PKR' ? window.settings.PKR : 1;
    return parseFloat(amount) * parseFloat(conversion_rate);
};

//optional parameter
const optional = (obj, ...props) => {
    const val = obj[props[0]];
    if(props.length === 1 || !val) return val;
    const rest = props.slice(1);
    return optional.apply(null, [val, ...rest])
};

const curencyDecider = (order) => {
  return optional(order, 'address', 'country', 'country_code') === 'PK' ?
      'PKR' : optional(order, 'address', 'country', 'country_code') === 'BD' ? 'BDT': null;
};

let helper = {
    convertToLb,
    convertToVolumetricWeight,
    dateString,
    addDate,
    subDate,
    fixed,
    color,
    timeConverter,
    timeInterval,
    dateConverters,
    subString,
    objectCount,
    bdtConverter,
    getCurrentMonthDays,
    getCookie,
    setCookie,
    rsConverter,
    optional,
    curencyDecider
};
export default helper
