var readlineSync = require('readline-sync');
var chalk= require("chalk");
var name=readlineSync.question("What is your name?");
console.log(chalk.yellow.bold("Welcome "+name+".Lets check how much do you know about our country INDIA?"));
console.log();

var score=0;

//Questions and answers set
var questions=[{
  ques:"Which state has the highest literacy rate?",
  options:['Kerala','Manipur','Tamil Nadu','Uttar Pradesh'],
  ans:"Kerala"
},{
  ques:"What is the name of India's first artificial satellite?",
  options:['INSAT','Aryabhata','Bhaskara','Rohini'],
  ans:'Aryabhata'
},{
  ques:"Sanskrit is the official language of which state?",
  options:['Bihar','Uttar Pradesh','Uttarakhand','Madhya Pradesh'],
  ans:'Uttarakhand'
},{
  ques:"Which state has the largest forest cover in the country?",
  options:['Jammu & Kashmir','Uttar Pradesh','Utarakhand','Madhya Pradesh'],
  ans:'Madhya Pradesh'
},{
  ques:"IST refers to the local time of which city?",
  options:['Varanasi','Allahabad','Delhi','Kolkata'],
  ans:'Allahabad'
}];

//function to check and inc/dec scores
function quiz(question,opts,answer){
  console.log(chalk.blueBright(question));
  var index=readlineSync.keyInSelect(opts);
  if(opts[index]==answer){
    console.log(chalk.green("Right!"));
    score+=1;
  }
  else{
    console.log(chalk.red("Wrong!"));
    score-=1;
  }
   console.log("Current score "+ score);
   console.log();   
}

//function call
for(var i=0;i<questions.length;i++){
  var currQues=questions[i];
  quiz(currQues.ques,currQues.options,currQues.ans);
}

//highest scores data
 var highestScores=[{
   name:'Prateek',
   score: 5
 },{
   name:'Sahil',
   score: 4
 }];
 console.log();
 console.log(chalk.bgBlackBright("You scored "+score));

//if score is greater,update data
 for(var i=0;i<highestScores.length;i++){
   var curScore=highestScores[i];
   if(score>curScore.score){
      curScore.name=name; 
      curScore.score=score;
   }
     
 }

 console.log();
 console.log(chalk.yellowBright("Highest scores"));
 for(var i=0;i<highestScores.length;i++){
   var curr=highestScores[i];
   console.log(chalk.bgCyan(curr.name,curr.score));
 }


