let myDIVProject = document.getElementById("myDIV");
let factsdDiv = document.getElementById('randomDiv');
let loader = document.querySelector(".preloader")

let randomFacts = ['A shrimp s heart is in its head.',
    'It is physically impossible for pigs to look up into the sky.'
    , 'A crocodile cannot stick its tongue out.',
    'Most people fall asleep in seven minutes.',
    'A cat has 32 muscles in each ear.',
    'A shark is the only known fish that can blink with both eyes.',
    'If you sneeze too hard, you could fracture a rib.'
];

//Hide project
function hideProject() {
    if (myDIVProject.style.display === "none") {
        myDIVProject.style.display = "block";
    } else {
        myDIVProject.style.display = "none";
    }
}

//random Facts
function randomfacts() {
    factsdDiv.innerHTML = randomFacts[Math.floor(Math.random() * randomFacts.length)];
}


//preloader
window.addEventListener('load', () => {
    loader.classList.add('disppear')
});
