var name = "Gerald";
var score = 80;
var completed = true;

console.log(name + " score is " + score);
console.log(name + " has completed: " + completed + '\n');

if (score > 90) {
    console.log("Great job!!!\n");
} else {
    console.log("Keep working hard!!!\n");
}

var names = [
    {
        name: 'Bob',
        score: 80
    },
    {
        name: 'Tom',
        score: 90
    },
    {
        name: 'Bill',
        score: 100
    }
];

displayNames(names);

function displayNames(names) {
    for (i = 0; i < names.length; i++) {
      console.log(names[i].name);
    }
}
