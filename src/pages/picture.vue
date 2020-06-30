<template>

    
  <div class="q-pa-md">
    <q-spinner-cube 
    v-if="isloading"
    class="fixed-center"
        color="orange"
        size="5.5em"
      />

    
      
    <q-carousel
      animated
      v-if="!isloading"
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="statics/sushi.jpg" />
      <q-carousel-slide :name="2" img-src="statics/schoolpic.jpg" />
      <q-carousel-slide :name="3" img-src="statics/prabu.jpg" />
      <q-carousel-slide :name="4" img-src="statics/oldpic.jpg" />
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      isloading : true
    }
  },

   mounted(){
    this.loading()
  },
  methods:  {

        
        loading () {
            setTimeout(()=>{
            this.isloading=false
        },5000);

        
        }
        
  }
      
    }
  


</script>
