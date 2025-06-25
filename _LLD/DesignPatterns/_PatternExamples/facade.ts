// facade structural design pattern (hides the complex subsystem and encapsulate it and provide simple way for client without worrying about the internal subsystem)


class TV {
   turnOn() {
      console.log('Tv ON')
   }
   setInput(text:string) {
      console.log('taking the input'+text)
   }
}

class SoundSystem {
   turnOn() {
      console.log("Sound System ON");
   }

   adjustVolume(volume:number) {
      console.log(`Adjusting the volume to ${volume}`);
   }
}

class HomeTheaterFacade {
   tv:TV;
   sound:SoundSystem;

   constructor() {
      this.tv = new TV();
      this.sound = new SoundSystem();
   }

   setUp() {
      this.tv.turnOn()
      this.sound.turnOn()
      this.sound.adjustVolume(70);
      this.tv.setInput('112');
   }
}