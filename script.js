var sentences = [
    "In the end, he realized he could see sound and hear words.",
    "Baby wipes are made of chocolate stardust.",
    "The murder hornet was disappointed by the preconceived ideas people had of him.",
    "Malls are great places to shop; I can find everything I need under one roof."
]
//those sentences are genereted on website, not my ideas :D

var cr_array = []
var index = 0
var error_count = 0
var time = 60
var timer_div = document.getElementById('timer')
var interval = 1000
var area = document.getElementById('txt')

//add array shuffler

function test_text(){
    var p = document.getElementById("testtext")
    p.innerHTML = ''
    curr_test = sentences[index]
    curr_test.split('').forEach(char=> {
        const span = document.createElement('span')
        span.innerText = char
        p.appendChild(span)
    });

    if (index != sentences.length - 1){
        index++;
    }
    else {
        index = 0
        finishgame()
    }
    // console.log(div2, index)
}

var cr = document.getElementById("txt")


// current_text()

function current_text(){
    var curr_text = document.getElementById("txt").value
    cr_array = curr_text.split('')
    let span = document.querySelectorAll('span')
    span.forEach((char, index) => {
        let char2 = cr_array[index]
        if (char2 == char.innerText){
            char.classList.add('correct')
            char.classList.remove('incorrect')
            console.log('good')
        }
        else {
            char.classList.add('incorrect')
            char.classList.remove('corrrect')
        }
        if (curr_text.length == span.length){
            test_text()
        }
    })
}


function timer(){
    setInterval(() => {
        if (time !=0 ){
            time--;
        }
        else {
            finishgame()
        }
        timer_div.innerHTML = time
    }, interval);
    // if (time != 0){
    //     time--
    // }
    // else {
    //     finishgame()
    // }
}

function startgame(){
    document.getElementById("testtext").innerHTML = ''
    // setInterval(timer, 1000)
    timer()
    test_text()
}

function finishgame(){
    document.getElementById("testtext") = 'Thanks for playing! Press button to play again'
    // clearInterval(time)
}