
module.exports = getDate;


function getDate(){

var options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'

};
var a = new Date();

var day = a.toLocaleDateString("en-US", options);
return day;

}
