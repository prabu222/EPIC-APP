<template>
  <q-page class="flex flex-center">

  <div class="row">
    <div class="col-12">
      <q-video src="https://www.youtube.com/embed/-osp9rFop6g"/>    
      </div>
       <div class="col-12 text-center">
         <q-btn size="20px" color="amber" glossy label="Login"  @click="linkclick"/>
        </div>
      </div>


  </q-page>
</template>

<script>
import login from '../components/form'


export default {
  name: 'PageIndex',
  components: {
      login 
  },

  data() {
    return {
      img: "statics/icons/prabu2.jpeg",
    }
  },
  methods:  {

        linkclick () {
            this.$router.push("/login")
        }
  }
  
  
}
</script>


