// You have been given a dataset composed of arrays with two fields, Date and Profit/Losses.
// Your task is to write JavaScript code that analyzes the records to calculate each of the following:

// The net total amount of Profit/Losses over the entire period.
// The average of the changes in Profit/Losses over the entire period.
// You will need to track what the total change in profits are from month to month and then find the average.
// (Total/Number of months)
// The greatest increase in profits (date and amount) over the entire period.
// The greatest decrease in losses (date and amount) over the entire period.

// ```text
// Financial Analysis
// ----------------------------
// Total Months: 25
// Total: $2561231
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)
// ```


var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655], 
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
  ];
  
  var totalnumberOfMonths = 0;
  var numberOnly = [];
  var num = 0;
  var changes = [];

// find the number of months?
//use a for loop and +1 to the total of the months till the end of the arr 
// this in for loop i also able to get total profit/loss
   //by adding all the numbers into another array and go through the new array and add the number up and save it into another var

  for (let i = 0; i < finances.length; i++) {
    totalnumberOfMonths = totalnumberOfMonths + 1;
    const monthAndIncome = finances[i][1];
    numberOnly.push(monthAndIncome);
    num += monthAndIncome
    changes[i - 1] = numberOnly[i] - numberOnly[i - 1]; // Calculate the change in profit/loss for each month
  }

    // Calculate the average change in profit/loss
   //"for-each" loop. It is used to iterate over the elements in an array or other iterable object, 
  //  such as a list or set.
  
  var averageNumber = 0;
  changes.forEach(changes => {averageNumber += changes});
  let average = parseFloat(averageNumber / changes.length); 
  var combined = finances.map((value,index) => [value[0], value[1], changes[index-1]]);
  //console.log(combined);
  
  const highest = changes.reduce((a,b) => Math.max(a,b)); // 1926159
  const lowest = changes.reduce((a,b) => Math.min(a,b)); //-2196167

  console.log('Financial Analysis');
  console.log('-------------------------');
  console.log('Total Months: ' + totalnumberOfMonths)
  console.log('Total: $' + num)
  console.log('Average Change: $' + average.toFixed(2)); // showing the total average of profit/loss changes to 2 decimal points

  var greatestDecrease = [];
  var greatestIncrease = [];

  for(i = 0; i < combined.length; i++){
    if(combined[i][2] === highest){
        greatestIncrease = combined[i];  
    } else if (combined[i][2] === lowest){
        greatestDecrease = combined[i];
    }
  }
  console.log("Greatest Increase in Profits: " + greatestIncrease[0] + " ($" + greatestIncrease[1] + ")"); // The greatest increase in profits (date and amount) over the entire period.
  console.log("Greatest Decrease in Profits: " + greatestDecrease[0] + " ($" + greatestDecrease[1] + ")"); // The greatest decrease in losses (date and amount) over the entire period.
