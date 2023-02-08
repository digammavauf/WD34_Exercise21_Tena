let htmlconsole = {
    log(text) {       
        document.getElementById("htmlconsole").innerHTML+=`${text}<br>`;
    }
};

let num=3.49;

htmlconsole.log(`round(${num})=`+Math.round(num)); //round off - 0.10 to 0.49 rounds down and 0.50 to 0.99 rounds up
htmlconsole.log(`ceil(${num})=`+Math.ceil(num)); //ceiling/round up - considers any excess decimals
htmlconsole.log(`floor(${num})=`+Math.floor(num)); //flooring/round down - disregards any excess decimals

let x = 2;
let y = 3;
htmlconsole.log(`pow(${x},${y})=`+Math.pow(x, y)); //x to the power of y

let m = 100;
htmlconsole.log(`sqrt(${m})=`+Math.sqrt(m)); //squareroot of m

let n = -30;
htmlconsole.log(`abs(${n})=`+Math.abs(n)); //absolute value of n

let arrayN = [0,1,2,3,4,5];

htmlconsole.log(`min(${arrayN})=`+Math.min(0,1,2,3,4,5)); //minimum among the param array
htmlconsole.log(`max(${arrayN})=`+Math.max(0,1,2,3,4,5)); //maximum among the param array

htmlconsole.log(`random())=`+Math.random()); //generates random decimal number from 0 to 1
htmlconsole.log(`random()*3)=`+Math.random()*3); //generates random decimal number from 0 to 3
htmlconsole.log(`round(random()*3))=`+Math.round(Math.random()*3)); //generates random whole number from 0 to 3

let colors = ["danger", "success", "primary"];
let choices = ["Rock", "Paper", "Scissors"];
htmlconsole.log(`choices[round(random()*2))]=`+choices[Math.round(Math.random()*2)]);

let htmltext = `<div class="row mt-2 g-2 d-flex justify-content-between">`;
for(let i=0; i<3; i++) {
    htmltext += `<div class="col-md-4 col-sm-12"><button class="btn btn-${colors[i]} w-100" onclick="playGame(this)">${choices[i]}</button></div>`;
}
htmltext += `</div>`;
htmlconsole.log(htmltext);
let scores = [0,0];
let playGame = (choice) => {
    let computer = choices[Math.round(Math.random()*2)];
    let human = choice.innerText;
    if (computer == human) {
        alert(`It's a tie! The computer also choses ${computer}. Current standing is ${scores}.`);
    } else {
        switch(computer) {
            case "Rock":
                if(human=="Paper") {
                    scores[1]++;
                    alert(`You win! The computer choses ${computer}. Current standing is ${scores}.`);
                } else if(human=="Scissors") {
                    scores[0]++;
                    alert(`You loose! The computer choses ${computer}. Current standing is ${scores}.`);
                }
                break;
            case "Paper":
                if(human=="Rock") {
                    scores[0]++;
                    alert(`You loose! The computer choses ${computer}. Current standing is ${scores}.`);
                } else if(human=="Scissors") {
                    scores[1]++;
                    alert(`You win! The computer choses ${computer}. Current standing is ${scores}.`);
                }
                break;
            case "Scissors":
                if(human=="Rock") {
                    scores[1]++;
                    alert(`You win! The computer choses ${computer}. Current standing is ${scores}.`);
                } else if(human=="Paper") {
                    scores[0]++;
                    alert(`You loose! The computer choses ${computer}. Current standing is ${scores}.`);
                }
                break;
            default:
                //do nothing
        }
    }
};

let date = new Date();
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "Agusut", "September", "October", "November", "December"];
let weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
htmlconsole.log(date);
htmlconsole.log(date.toLocaleString());
htmlconsole.log(date.toLocaleDateString());
htmlconsole.log(date.toLocaleTimeString());
htmlconsole.log(date.getFullYear());
htmlconsole.log(monthNames[date.getMonth()]);
htmlconsole.log(date.getDate());
htmlconsole.log(weekDayNames[date.getDay()]);
htmlconsole.log(date.getHours());
htmlconsole.log(date.getMinutes());
htmlconsole.log(date.getSeconds());

let fromY = date.getFullYear();
let toY = fromY+5;
let ySelect = "<select>";
for(let y=fromY; y<toY; y++) {
    ySelect += `<option${(y==date.getFullYear())?' selected':''}>${y}</option>`;
}
ySelect += "</select>";
htmlconsole.log(ySelect);

let fromM = 0;
let toM = monthNames.length;
let mSelect = "<select>";
for(let m=fromM; m<toM; m++) {
    mSelect += `<option value="${m}"${(m==date.getMonth())?' selected':''}>${monthNames[m]}</option>`;
}
mSelect += "</select>";
htmlconsole.log(mSelect);

let fromD = 1;
let toD = 31;
let dSelect = "<select>";
for(let d=fromD; d<=toD; d++) {
    dSelect += `<option value="${d}"${(d==date.getDate())?' selected':''}>${d}</option>`;
}
dSelect += "</select>";
htmlconsole.log(dSelect);

let fromW = 0;
let toW = 6;
let wSelect = "<select>";
for(let w=fromW; w<=toW; w++) {
    wSelect += `<option value="${w}"${(w==date.getDay())?' selected':''}>${weekDayNames[w]}</option>`;
}
wSelect += "</select>";
htmlconsole.log(wSelect);

let fromH = 0;
let toH = 24;
let hSelect = "<select>";
for(let h=fromH; h<toH; h++) {
    hSelect += `<option value="${h}"${(h==date.getHours())?' selected':''}>${h}</option>`;
}
hSelect += "</select>";
htmlconsole.log(hSelect);

let fromN = 0;
let toN = 59;
let nSelect = "<select>";
for(let n=fromN; n<toN; n++) {
    nSelect += `<option ${(n==date.getMinutes())?' selected':''}>${n}</option>`;
}
nSelect += "</select>";
htmlconsole.log(nSelect);

let fromS = 0;
let toS = 59;
let sSelect = "<select>";
for(let s=fromS; s<toS; s++) {
    sSelect += `<option ${(s==date.getSeconds())?' selected':''}>${s}</option>`;
}
sSelect += "</select>";
htmlconsole.log(sSelect);

setInterval(function() {
    let theDate = new Date();
    let theHour = theDate.getHours();
    let theMinute = theDate.getMinutes();
    let theSecond = theDate.getSeconds();
    let ampm;
    if(theHour>12) {
        ampm = "PM";
        theHour -= 12;
    } else {
        ampm = "AM";
    }
    if(theHour>=0 && theHour<10) {
        theHour = "0"+theHour;
    }
    if(theMinute>=0 && theMinute<10) {
        theMinute = "0"+theMinute;
    }
    if(theSecond>=0 && theSecond<10) {
        theSecond = "0"+theSecond;
    }
    document.querySelector("#liveClock").innerHTML = `${theHour}:${theMinute}:${theSecond} ${ampm}`;
}, 1000);

let sampleString = "Hello World Hello";
htmlconsole.log(`"${sampleString}".slice(0, 3)="${sampleString.slice(0, 3)}"`);
htmlconsole.log(`"${sampleString}".substring(3, 0)="${sampleString.substring(3, 0)}"`);

let sampleString2 = "     J O H N     ";
htmlconsole.log(`"${sampleString2}".trim()="${sampleString2.trim()}"`);

htmlconsole.log(`"${sampleString}".replace("Hello", "Hi")="${sampleString.replace("Hello", "Hi")}"`);
htmlconsole.log(`"${sampleString}".replaceAll("Hello", "Hi")="${sampleString.replaceAll("Hello", "Hi")}"`);

let sampleArray = [31, 23, 1, 2, 3];
function tester(number) {
    return number < 10;
}
htmlconsole.log("tester returns true if a number is less than 10");
htmlconsole.log(`[${sampleArray}].every(tester)=${sampleArray.every(tester)}`);
htmlconsole.log(`[${sampleArray}].fill("Meow", 1, 3)=[${sampleArray.fill("Meow", 1, 3)}]`);

let ages = [23, 12, 18, 30, 41, 50];
function ageCheck(number) {
    return number < 18;
}
htmlconsole.log("ageCheck returns true if a number is less than 18");
htmlconsole.log(`[${ages}].filter(ageCheck)=[${ages.filter(ageCheck)}]`);

ages.forEach(function(arrayItem){
    htmlconsole.log(arrayItem);
});

ages.forEach(showingItems);

function showingItems(arrayItem){
    htmlconsole.log(arrayItem);
}

let student = {
    class: "WD34P",
    gender: "male",
    hobby: ["dancing", "surfing", "reading"],
    introduction() {
        htmlconsole.log(`Hi, ${this.name}! Welcome to Class ${this.class}.`);
    }
}

let newStudent = Object.create(student);
newStudent.name = "John";
newStudent.introduction();

htmlconsole.log(`keys(student)=${Object.keys(student)}`);
htmlconsole.log(`values(student)=${Object.values(student)}`);
htmlconsole.log(`entries(student)=${Object.entries(student)}`);

Object.entries(student).forEach(function(entry){
    htmlconsole.log(entry);
});

Object.entries(student).forEach(function([key,value]){
    htmlconsole.log(`${key}=${value}`);
});

