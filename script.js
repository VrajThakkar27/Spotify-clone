let songIndex=0;
let a=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.querySelector('#masterPlay')
let progressBar=document.getElementById('progressBar')
let gif=document.getElementsByClassName('gif')[0];
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
    {songName: 'My Heart Will Go On' ,filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Perfect' ,filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName: 'Agar Tum Sath Ho' ,filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName: 'Raatan Lambiyan' ,filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName: 'Quaffirana' ,filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName: 'Humsafar' ,filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName: 'Kesariya' ,filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
    {songName: 'Apna Bana Le' ,filePath:'songs/8.mp3',coverPath:'covers/8.jpg'},
    {songName: 'Udd-Gaye' ,filePath:'songs/9.mp3',coverPath:'covers/9.jpg'},
]

masterPlay.addEventListener('click',function(){
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', function(){
    let progress=parseFloat((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    progressBar.value=progress;
})

progressBar.addEventListener('change',function(){
    audioElement.currentTime=(progressBar.value*audioElement.duration)/100;
})

songItem.forEach(function(element,i){
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

function makeAllPlays(){
    songItemPlay.forEach(function(element){
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

songItemPlay.forEach(function(element){
    element.addEventListener('click',function(e){
        // console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songIndex=parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else
    songIndex+=1
    function makeAllPlays(){
        songItemPlay.forEach(function(element){
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }
    masterSongName.innerText=songs[songIndex].songName;
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    
})
document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=0)
    {
        songIndex=8;
    }
    else
    songIndex-=1

    function makeAllPlays(){
        songItemPlay.forEach(function(element){
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.onkeydown=function(e)
{
    
    // console.log(e.keyCode);
    if(e.keyCode==32&&a%2==0)
    {
        makeAllPlays();
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        a+=1;
    }
    else if(e.keyCode==32&&a%2==1)
    {
        makeAllPlays();
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        a+=1;
    }
}
