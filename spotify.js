console.log("Welcome to spotify");

//  initalise the variables

let songIndex = 0;
let audioElement = new Audio("songs/1.mpeg");

let masterPlay = document.getElementById('masterPlay');

let myprogressbar = document.getElementById('myprogressbar');

let gif = document.getElementById('gif');

let mastersongname = document.getElementById('mastersongname');

let songitem = Array.from(document.getElementsByClassName('songitem'));

let songplay = Array.from (document.getElementsByClassName('songpaly'));




let songs = [
    {songName: "Mere Baba" , filepath: "songs/1.mpeg", coverpath:"covers/1.jpg"},

    {songName: "Govind Bolo" , filepath: "songs/2.mpeg", coverpath:"covers/2.jpg"},

    {songName: "Ram Aaye Hai" , filepath: "songs/3.mpeg", coverpath:"covers/3.jpg"},

    {songName: "Bhola Bhandari" , filepath: "songs/4.mpeg", coverpath:"covers/4.jpg"},

    {songName: "Shiv Mere Hai" , filepath: "songs/5.mpeg", coverpath:"covers/5.jpg"},

    {songName: "Bajrang Baan" , filepath: "songs/6.mpeg", coverpath:"covers/6.jpg"},

    {songName: "Siya Ram" , filepath: "songs/7.mpeg", coverpath:"covers/7.jpg"},

    {songName: "Shiv Tandav" , filepath: "songs/8.mpeg", coverpath:"covers/8.jpg"},

    {songName: "Shri Hari Stotram" , filepath: "songs/9.mpeg", coverpath:"covers/9.jpg"},

    {songName: "Ha numan Chalisa" , filepath: "songs/10.mpeg", coverpath:"covers/10.jpg"},

]

songitem.forEach((element , i) => {
    console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;

    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    
});

// handle play/pause click
masterPlay.addEventListener('click' , ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play')
        
        audioElement.pause();
        gif.style.opacity = 0;
    }
})


//  listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    // update seeker

   let progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})

// change time of song on seeker

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100
})


const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
       element.classList.add('fa-circle-play');
    })
} 


Array.from(document.getElementsByClassName('songplay')).forEach((element) =>{
    element.addEventListener('click' ,(e) =>{

        makeallplays();

        


        songIndex = parseInt(e.target.id) + 1;

       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause'); 

       audioElement.src = `songs/${songIndex}.mpeg`;
       mastersongname.innerText = songs[songIndex - 1].songName;
       audioElement.currentTime = 0;
       audioElement.play();
       gif.style.opacity = 1;

       masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        
    })
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex >= 10){
        songIndex = 1;
    }
    else{
        songIndex = songIndex + 1;
    }

    audioElement.src = `songs/${songIndex}.mpeg`;
    mastersongname.innerText = songs[songIndex - 1].songName;
       audioElement.currentTime = 0;
       audioElement.play();

       masterPlay.classList.remove('fa-circle-play')
       masterPlay.classList.add('fa-circle-pause')
})


document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex < 1 || songIndex ==0){
        songIndex = 1;
    }
    else{
        songIndex = songIndex - 1;
    }

    audioElement.src = `songs/${songIndex}.mpeg`;
    mastersongname.innerText = songs[songIndex - 1].songName;
       audioElement.currentTime = 0;
       audioElement.play();

       masterPlay.classList.remove('fa-circle-play')
       masterPlay.classList.add('fa-circle-pause')
})


