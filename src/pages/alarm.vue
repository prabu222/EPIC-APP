<template>
<div>
<div>
<h4>
Alarm Page
</h4>
</div> 
<q-card class="card">
      <q-card-section>
          <h2>
        00:00
        </h2>
      </q-card-section>
    </q-card>

    <q-card class="card">
      <q-card-section>
          <q-btn class="col-4 text-center" size="20px" color="amber" glossy label="Play audio" @click="playSound(sound)" />
          <q-btn class="col-4 text-center" size="20px" color="amber" glossy label="pause audio" @click="pauseSound(sound)" />
      </q-card-section>
    </q-card>

</div>
  
</template>

<script>
import login from '../components/form'


export default {
  name: 'Alarm Page',

   data () {
    return {
      slide: 'Rihanna',
      isloading: true,
     sound: new Audio('statics/high.mp3')
    

    }
  },
  components: {
      login 
  },
  mounted(){
    this.loading()
setTimeout(() => {
      this.playSound(this.sound)
    }, 10000);


  },
  methods:  {

        linkclick () {
            this.$router.push("/login")
        
        },
        loading () {
            setTimeout(()=>{
            this.isloading=false
        },5000);

        

        
        },
        playSound (sound) {
         if(sound) {
         
          sound.play();
         }
      },
      pauseSound (sound) {
         if(sound) {
         
          sound.pause();
          sound.currentTime = 0;

      }
    }
       

        
  }
}
</script>

<style>
.card {
    margin-left: 50px ;
    margin-right: 50px ;
    height: 200px ;
    margin-top: 20px ;


}
</style>

