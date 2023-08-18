<template>
<div class="event_detail">
    <div class="navigation">
        <Navigation/>
    </div>

    <v-container>
    <!-- <v-img :src="`${event.image}`"></v-img>
    <h1>{{event.title}}</h1>
    <h1>{{event.description}}</h1>
    <h1>{{event.createdAt}}</h1> -->
    <div class="title">
        <h1>{{"Title : "+ event.title}}</h1>
        <p>{{"Date : "+  new Date(event.createdAt).toLocaleString()}}</p>
    </div>
    <div class="img">
        <img  :src="`${event.image}`"></img>
    </div>
    <div class="description">
        <h3>Description</h3>
        <p>{{event.description}}</p>
    </div>


    </v-container>

    <div class="footer">
    
        <Footer/>
    </div>


</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import Event_API from '../../Service/Event/event'
export default {
    name: 'Event_detail',
    components:{
        Footer,
        Navigation,

    },
     data(){
        return{
            event:{},
        }
     },

    async created(){
        
        this.event = await Event_API.getEventById(this.$route.params.id)

    }
}
</script>

<style lang="scss" scoped>
        .title{
            text-align: center;
            margin-top: 30px;
        }
        .img{
            display: flex;
            justify-content: center;
            img{
                width: 500px;
                height: auto;
            }
        }
        .description{
            margin-top: 30px;
        }
 
</style>