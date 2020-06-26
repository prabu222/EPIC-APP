<template>

  <q-page class="flex flex-center">
    <q-spinner-cube 
    v-if="isloading"
    class="fixed-center"
        color="orange"
        size="5.5em"
      />

<div class="q-pa-md q-gutter-sm" v-if="!isloading">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/m5PPym9_c4s"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/kGggOkoeFMo"
        />
      </q-carousel-slide>

      <q-carousel-slide name="chill-mix">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/E6fuu2AHRUw"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Nintendo labo', value: 'soft-jazz' },
          { label: 'Giving people', value: 'Rihanna' },
          { label: 'Fortnite gaming', value: 'chill-mix' }
        ]"
      />
    </div>
  </div>
  
     


  </q-page>
</template>

<script>
import login from '../components/form'


export default {
  name: 'PageIndex',

   data () {
    return {
      slide: 'Rihanna',
      isloading: true
    }
  },
  components: {
      login 
  },
  mounted(){
    this.loading()
  },
  methods:  {

        linkclick () {
            this.$router.push("/login")
        
        },
        loading () {
            setTimeout(()=>{
            this.isloading=false
        },5000);

        
        }
        
  }
}
</script>