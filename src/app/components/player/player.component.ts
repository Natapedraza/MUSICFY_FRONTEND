import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from "moment"

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  audioObj = new Audio();

  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ]

  files = [
    {
      url:"./assets/Camilo-BEBE_Acustico.mp3",
      name:"Camilo Acustico",
      album:"Tus manos",
      image:""
    },
    {
      url:"./assets/Cardellino-Cursi_Acustica.mp3",
      name:"Cardellino Acustico",
      album:"Cardellino",
      image:""
    }
  ] 


  currentTime = '00:00:00';

  duration='00:00:00';

  seek=0
  seekDuration = 0

  constructor() { }

  ngOnInit(): void {
   
  }

  streamObserver(url:string){

    return new Observable((observer)=>{

      this.audioObj.src = url
      this.audioObj.load();
      this.audioObj.play()


      
      const handler = (event:Event)=>{
        // console.log(event) 
        this.seek= this.audioObj.currentTime
        this.seekDuration = this.audioObj.duration
        this.duration = this.timeFormat(this.audioObj.duration) 
       this.currentTime = this.timeFormat(this.audioObj.currentTime)
      }

      this.addEvent(this.audioObj, this.audioEvents, handler)
      
      return ()=>{
        this.audioObj.pause()
        this.audioObj.currentTime = 0
        this.removeEvent(this.audioObj,this.audioEvents,handler)
      }
    })
  }

  openFile(url:string="", backOrNext:number=1){
    if(this.audioObj.src){
      let newUrl=""

      let indexAudio = this.files.findIndex((file)=> file.url === this.audioObj.src.replace("http://localhost:4200","."))

      newUrl =(indexAudio === this.files.length - 1 )
      ? this.files[0].url
      : this.files[(indexAudio+backOrNext)].url

      this.streamObserver(newUrl).subscribe(event=>{})
    }else{

      this.streamObserver(url).subscribe(event=>{})
      console.log(url)
    }
  }

  play(){
    this.audioObj.play()
    console.log("play")
  }

  pause(){
    this.audioObj.pause()
  }
  
  stop(){
    this.audioObj.pause()
    this.audioObj.currentTime = 0
  }
  
  before(){
    this.openFile("",-1)
    console.log("antes")

  }
 
  setVolumen(event:any){
    this.audioObj.volume = event.target.value
    // console.log(event.target.value)
  }
  
  setTime(event:any){
    this.audioObj.currentTime = event.target.value
  }

  addEvent(obj:HTMLAudioElement, events: any[], handler:any){
    events.forEach((e)=>{
      obj.addEventListener(e, handler)
    })
  }

  removeEvent(obj:HTMLAudioElement, events: any[], handler:any){
    events.forEach((e)=>{
      obj.removeEventListener(e, handler)
    })
  }

  timeFormat(time:any, format="HH:mm:ss"){
    const momentTime = time*1000;
    return moment.utc(momentTime).format(format)
  }

  setSeekTo(event:any){
    this.audioObj.currentTime = event.target.value
  }

}
