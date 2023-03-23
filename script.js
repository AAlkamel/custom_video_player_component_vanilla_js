const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const bigBtn = document.getElementById('bigBtn')
const mute = document.getElementById('mute')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const volume = document.getElementById('volume')

function toggleVideoStatus(){
  if(video.paused){
    video.play()
    bigBtn.classList="hide center-play-btn btn fa fa-play"
    play.classList="btn fa fa-pause"
  }else{
    video.pause()
    bigBtn.classList=" center-play-btn btn fa fa-play"
    play.classList="btn fa fa-play"
  }
}
function toggleVideoMute(){
    video.muted = !video.muted
    video.muted? mute.classList="btn fa fa-volume-off":mute.classList="btn fa fa-volume-up"
}
function updateProgress(){
  progress.value = (video.currentTime/video.duration)*100 ;
  //timestamp
  let hours = Math.floor(video.currentTime/3600)
  10>hours>0? hours = "0"+ hours : hours ==0? hours ="00": true
  let mins = Math.floor((video.currentTime%3600)/60)
  10>mins>0? mins = "0"+ mins : mins ==0? mins ="00": true
  let secs = Math.floor((video.currentTime%3600)%60)
  10>secs>0? secs = "0"+ secs : secs ==0? secs ="00": true
  timestamp.textContent = hours+":"+mins+":"+secs
}
function setCurrentTime() {
  video.currentTime = (progress.value/100)* video.duration
}
function stopVideo(){
  video.currentTime=0
  video.pause()
  bigBtn.classList=" center-play-btn btn fa fa-play"
    play.classList="btn fa fa-play"
}
function volumeControl(){
  video.volume = +volume.value/100
}
video.addEventListener('click',toggleVideoStatus)
video.addEventListener('timeupdate',updateProgress)
bigBtn.addEventListener('click',toggleVideoStatus)
play.addEventListener('click',toggleVideoStatus)
mute.addEventListener('click',toggleVideoMute)
progress.addEventListener('change',setCurrentTime)
stop.addEventListener('click',stopVideo)
volume.addEventListener('change',volumeControl)

