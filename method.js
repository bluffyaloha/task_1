export default function howDaysToNewYear(date){
    var now = date;
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    const numberOfDays = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 366 : 365;

    console.log(numberOfDays(Date.getFullYear) - day);
}