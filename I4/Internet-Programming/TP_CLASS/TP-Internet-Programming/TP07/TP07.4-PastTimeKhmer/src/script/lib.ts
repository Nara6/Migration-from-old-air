export class MyKhmerDate{
    second: number;
    date: Date;

    constructor(date: Date){
        this.date = date;
    }
    calculateDateTime():void{
        var seconds: number;
        seconds = Date.now() - this.date.getTime();
        seconds /= 1000;
        this.second = seconds; 
    }
    getDateTime():string{
        this.calculateDateTime();
        if(this.second<60){
            return "មុននេះបន្តិច"
        }
        else if(this.second<3600){
            var minute: number;
            minute =  Math.floor(this.second / 60);
            return minute + "នាទីមុន";
        }else if(this.second<86400){
            var hour : number;
            hour  = Math.floor(this.second / 3600);
            return hour +"ម៉ោងមុន";
        }else if(this.second<604800){
            var week : number;
            week = Math.floor(this.second / 86400);
            return week +"ថ្ងៃមុន";
        }else if(this.second<2419200){
            var month: number;
            month= Math.floor(this.second/604800);
            return month+ "សប្តាហ៍មុន";
        }else{
            var month: number;
            month= Math.floor(this.second/2419200);
            return month + "ខែមុន";
        }
    }
    
}