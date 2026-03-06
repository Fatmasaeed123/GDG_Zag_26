//Date, Generators, Modules
//تكليف 01
let birthDate = new Date("2005-11-29"); // حطي تاريخ ميلادك
let now = new Date();

// الفرق بالملي ثانية
let diff = now.getTime() - birthDate.getTime();

// نحسب الأيام الأول
let days = Math.floor(diff / (1000 * 60 * 60 * 24));

let years = Math.floor(days / 365);
let months = Math.floor(days / 30);
let hours = days * 24;
let minutes = hours * 60;
let seconds = minutes * 60;

console.log(seconds + " Seconds");
console.log(minutes + " Minutes");
console.log(hours + " Hours");
console.log(days + " Days");
console.log(months + " Months");
console.log(years + " Years");