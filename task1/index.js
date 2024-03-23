function getRandomNumber(){
    const val =  Math.floor(Math.random() * 1000) + 1;    
    return val;
}

 module.exports = getRandomNumber;