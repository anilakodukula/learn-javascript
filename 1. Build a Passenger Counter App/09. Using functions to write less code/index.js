// Setting up the the race 🏎 🏎 🏎

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

let count = 5;

const timer = setInterval(function() {
    count--;
    console.log(count);
    if (count == 1){
        console.log("GO!");
    }
}, 1000)