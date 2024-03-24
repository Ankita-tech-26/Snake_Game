let inputDir = {x: 0, y: 0}; 
const fSound = new Audio('foods.mp3');
const goSound = new Audio('gameover.mp3');
const mSound = new Audio('move.mp3');
const musicsSound = new Audio('music.mp3');
let speedtime = 19;
let score = 0;
let paintTime = 0;
let snakesArray = [
    {x: 13, y: 15}
];

foods = {x: 6, y: 7};


function main(ctime) {
    window.requestAnimationFrame(main);
    
    if((ctime - paintTime)/1000 < 1/speedtime){
        return;
    }
    paintTime = ctime;
    gameEngine();
}

function isCollide(snakess) {
    
    for (let i = 1; i < snakesArray.length; i++) {
        if(snakess[i].x === snakess[0].x && snakess[i].y === snakess[0].y){
            return true;
        }
    }
    
    if(snakess[0].x >= 18 || snakess[0].x <=0 || snakess[0].y >= 18 || snakess[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){
    
    if(isCollide(snakesArray)){
        goSound.play();
        musicsSound.pause();
        inputDir =  {x: 0, y: 0}; 
        alert("Game Over. Press any key to play again!");
        snakesssArray = [{x: 13, y: 15}];
        musicSound.play();
        score = 0; 
    }

    
    if(snakesArray[0].y === foods.y && snakesArray[0].x ===foods.x){
        fSound.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakesArray.unshift({x: snakesArray[0].x + inputDir.x, y: snakesArray[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        foods = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    
    for (let i = snakesArray.length - 2; i>=0; i--) { 
        snakesssArray[i+1] = {...snakesArray[i]};
    }

    snakesArray[0].x += inputDir.x;
    snakesArray[0].y += inputDir.y;

    
    
    board.innerHTML = "";
    snakesArray.forEach((e, index)=>{
        snakessElement = document.createElement('div');
        snakessElement.style.gridRowStart = e.y;
        snakessElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakessElement.classList.add('heads');
        }
        else{
            snakessElement.classList.add('snakess');
        }
        board.appendChild(snakessElement);
    });
    
    foodsElement = document.createElement('div');
    foodsElement.style.gridRowStart = foods.y;
    foodsElement.style.gridColumnStart = foods.x;
    foodsElement.classList.add('foods')
    board.appendChild(foodsElement);


}



musicsSound.play();
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} 
    mSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

});


