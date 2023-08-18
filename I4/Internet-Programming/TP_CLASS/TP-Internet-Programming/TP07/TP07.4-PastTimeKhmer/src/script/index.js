import { ConvertNumber } from "./khmerNumConvert.js";
var MyKhmerDate = /** @class */ (function () {
    function MyKhmerDate(date) {
        this.date = date;
    }
    MyKhmerDate.prototype.calculateDateTime = function () {
        var seconds;
        seconds = Date.now() - this.date.getTime();
        seconds /= 1000;
        this.second = seconds;
    };
    MyKhmerDate.prototype.getDateTime = function () {
        this.calculateDateTime();
        if (this.second < 60) {
            return "មុននេះបន្តិច";
        }
        else if (this.second < 3600) {
            var minute;
            minute = Math.floor(this.second / 60);

            return ConvertNumber(minute) + "នាទីមុន";
        }
        else if (this.second < 86400) {
            var hour;
            hour = Math.floor(this.second / 3600);
            return ConvertNumber(hour) + "ម៉ោងមុន";
        }
        else if (this.second < 604800) {
            var week;
            week = Math.floor(this.second / 86400);
            return ConvertNumber(week) + "ថ្ងៃមុន";
        }
        else if (this.second < 2419200) {
            var month;
            month = Math.floor(this.second / 604800);
            return ConvertNumber(month) + "សប្តាហ៍មុន";
        }
        else {
            var month;
            month = Math.floor(this.second / 2419200);
            return ConvertNumber(month) + "ខែមុន";
        }
    };
    return MyKhmerDate;
}());
const getInput = document.getElementById('input');
const displayDate = document.getElementById('date')
// date = new Date(getInput.value);
getInput.addEventListener('change',()=>{
    var date = new MyKhmerDate(new Date(getInput.value));
    console.log();
    displayDate.innerHTML=date.getDateTime();
})