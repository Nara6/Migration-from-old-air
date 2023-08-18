<template>
  <div class="event_container">
    <div class="navigation">
      <Navigation />
    </div>

    <div class="event_body">
      <v-container>
        <div class="event_top">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ipsa
            soluta tenetur! Excepturi debitis voluptatum, voluptas at molestias facere
            animi. Incidunt, totam quod fugiat enim sapiente eaque illum necessitatibus,
            repellat sint vero facilis reiciendis voluptatum obcaecati quo voluptate
            inventore ea nisi. Quasi corporis dolor alias suscipit nisi in beatae nesciunt
            possimus non explicabo placeat id earum distinctio voluptatibus, molestiae
            sunt ducimus tenetur incidunt, inventore aspernatur, nihil accusantium a odio?
            Consectetur commodi enim eius recusandae aspernatur iure eum impedit odio
            explicabo sapiente, tempore beatae assumenda! Qui at, fugiat numquam rerum
            officia magni commodi officiis laboriosam explicabo iste cum totam,
          </p>
        </div>

      <div class="event">
          <div class="event_list" v-for="event in events" :key="event._id">
           
              <div class="date">
                <h3>15 <span>June 2022</span></h3>
                
              <p>{{  new Date(event.createdAt).toLocaleString()}}</p>
                
            </div>
            <div class="description">
              <h2>{{event.title}}</h2>
              <p>{{event.description.substring(0,300) }} 
              <span><router-link style="color: rgb(255, 167, 3);font-size:20px" :to="{name: 'event-detail', params:{id: event._id}}"> See more ....</router-link></span> </p>
            </div>

            <div class="event_img">
              <div> <img :src="`${event.image}`"></img></div>
            </div>
            
        </div>
      </div>
      </v-container>
    </div>

    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Event_API from "../../Service/Event/event";
import Navigation from "../../components/Navigation.vue";
import Footer from "../../components/Footer";
export default {
  name: "Events",

  components: {
    Navigation,
    Footer,
  },

  async created() {
    this.events = await Event_API.getAllEvent();
    console.log(this.events);
  },

  data() {
    return {
      events: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.event{

  width: 100%;
  height: 600px;
  overflow: scroll;
  margin-top: 30px;
  
  
}
.event_list{
  
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  margin-top: 30px;
  background-color: #F0F2F8;
  align-items: center;
 
  @media (max-width:427px) {
    flex-direction: column;
    
    .date{
      display: none;
    }
    .event_img{
      div{
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
  @media (max-width:769px) {
    flex-direction: column;
    .date{
      display: none;
    }
  }
  .description{
    width: 100%;
  }
  .date{
    width: 25%;
    h3{
      color: rgb(255, 167, 3);
      span{
        color: black;
        font-size: 14px;
      }
    }
    
  }
  .event_img{
    @media (max-width:427px) {
          width: 100%;
          
          
        }
    width: 30%;
    padding: 0px 10px;
    div{
     img{
        width: 200px;
        height: 200px;
        @media (max-width:427px) {
          width: 100%;
          height: auto;
          
        }
      }
       

    }
     
  }
}

.event_body {
  .event_top {
    width: 100%;
    background-color: #F0F2F8;
    padding: 20px 30px;
  }
  }
</style>
