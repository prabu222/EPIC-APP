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

</div>
  
</template>

<script>
import login from '../components/form'


export default {
  name: 'Alarm Page',

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

<style>
.card {
    margin-left: 50px ;
    margin-right: 50px ;
    height: 200px ;
}
</style>