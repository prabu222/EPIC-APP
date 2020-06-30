<template>
  <q-page class="flex flex-center">
    
  
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Calendar</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
         <q-date v-model="date" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

<q-dialog  v-model="aboutprabu">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Im Prabu</div>
        <div class="text-subtitle2">by Prabu Alghani</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
</q-dialog>

 <q-dialog v-model="alarm">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alarm</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
         <q-time
      v-model="currentTime"
      format24h
    />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

<div class="row">
    <div class="col-12 text-center">
      <q-avatar size="200px">       
        <img src="statics/prabu2.jpeg">
      </q-avatar>
      </div>
       <div style="padding-top: 20px" class="col-12 text-center row">
         <q-btn class="col-4 text-center" size="20px" color="amber" glossy label="Calendar" @click="alert= true"  />
         <q-btn class="col-4 text-center" size="20px" color="primary" glossy label="about Prabu"  @click="aboutprabu= true" />
         <q-btn class="col-4 text-center" size="20px" color="amber" glossy label="Set Alarm"  @click="alarm= true"/>
         <q-btn class="col-4 text-center" size="20px" color="primary" glossy label="video" @click="videoclick"  />
         <q-btn class="col-4 text-center" size="20px" color="amber" glossy label="Pictures" @click="photoclick"  />
         <q-btn class="col-4 text-center" size="20px" color="primary" glossy label="More videos" @click="morevideoclick"  />
         </div>
      </div>
 
  </q-page>
</template>

<script>
import login from '../components/form'


export default {
   data () {
    return {
        time: new Date(),
        alarm: false,
       alert: false,
       video: false,
       more: false,
       photo: false,
      date: '2019/02/01',
      aboutprabu: false,
      lorem: 'Hello im Prabu Im a archer, youtuber, and student. I like to play Fortnite and Minecraft, and I like to eat salmon sashimi. My hobby is to do archery.'
      
    }
  },  
  name: 'PageIndex',
  components: {
      login },

       methods: {

     photoclick () {
            this.$router.push("/photo")
    },

    morevideoclick () {
            this.$router.push("/more")
    },

    videoclick () {
            this.$router.push("/videos")
        },
      
      }
}

    

</script>

 <style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
.logo
  width: 50%
  max-width: 300px
  border-radius: 100%;




</style>
