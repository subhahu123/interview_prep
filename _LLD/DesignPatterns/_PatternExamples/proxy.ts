// proxy structural design pattern adds a wrapper over a real object(which does heavy ops) and acts as a proxy

abstract class Video {
   abstract play();
   abstract pause();
}

class RealVideo implements Video {
   name:string
   constructor(name) {
     this.name = name;
     this.loadfromDisk(name)
   }

   private loadfromDisk(name) {
      console.log(`loading from the disk ${name}`)
   }
   play() {
      console.log('playing')
   }
   pause() {
       console.log('pause')
   }
}

class ProxyVideo implements Video {
   private realVideo:Video;
   public name:string
   constructor(name) {
      this.name = name
   }


   play() {
      if(this.realVideo === null) {
         this.realVideo = new RealVideo(this.name)
      }
      return this.realVideo.play()
   }

   pause() {
       if(this.realVideo === null) {
         this.realVideo = new RealVideo(this.name)
      }
      return this.realVideo.pause()
   }

}

const video = new ProxyVideo('name');
video.play()
video.play() // not load from disk