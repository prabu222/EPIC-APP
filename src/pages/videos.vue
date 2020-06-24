<template>
  <q-page class="flex flex-center">

<div class="q-pa-md q-gutter-sm">
    <q-carousel
      animated
      v-model="slide"
      infinite
    >
      <q-carousel-slide name="soft-jazz">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/64CxmpjChRc"
        />
      </q-carousel-slide>

      <q-carousel-slide name="Rihanna">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/rQ-PcsFv_CY"
        />
      </q-carousel-slide>

      <q-carousel-slide name="chill-mix">
        <q-video
          class="absolute-full"
          src="https://www.youtube.com/embed/09UJxiBbspQ"
        />
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 'Making toy car', value: 'soft-jazz' },
          { label: 'Youtube rewind', value: 'Rihanna' },
          { label: 'Music Video', value: 'chill-mix' }
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
      slide: 'Rihanna'
    }
  },
  components: {
      login 
  },
  methods:  {

        linkclick () {
            this.$router.push("/login")
        }
  }
}
</script>