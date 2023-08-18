<template>
    <div class="home_container">

        <div class="home_top">
            <div class="navigation">
            <Navigation/>
        </div>
        </div>
        <div class="page_content">
       <div class="home">
          <div class="body_img">
              <img src="https://oceancityschools.org/uploads/1515689986library_header.jpg" alt="">
          </div>
      </div>
      <div class="body_content">
          <div class="goal">
            <h2>Our Goal</h2>
            <p>The primary objectives of library material selection are: <br>

        . To provide materials that will stimulate students' acquisition of factual knowledge, development of literary appreciation, aesthetic values and ethical standards; <br>

        .  To provide a source of information which, when consulted, may enable pupils to make informed judgments; <br>

        . To provide materials containing a wide range of views on issues so that students may develop the practice of critical reading and thinking; <br>

        . To provide materials representative of religious, ethnic and cultural groups and their contribution to the American heritage; and, <br>

        . To place principle above personal opinion and reason above prejudice in the selection of materials of the highest quality in order to assure a comprehensive collection appropriate for the users of the library media center.</p>

          </div>
          <div class="vision">
              <h2>Our Vision</h2>
            <p>
                Our vision of creating this website are: <br>
                “…prepares students for the skills needed for middle school, high school, college and beyond.” <br>
                “to empower students to learn technology and 21st-century skills incorporating collaboration, communication, creativity, critical thinking, and citizenship.” <br>
                “…empowers students to be curious, passionate, respectful learners who explore, connect, evaluate, and create.” <br>
                “To develop strong library branches that are vital community destinations for knowledge, inspiration, innovation, and renewal.” <br>
                “…a leader in celebrating reading and transforming lives through knowledge and information. The library provides accessible services through current technology and resources.” <br>
                “Our vision is a vibrant, informed, cohesive, and empowered society.”  <br>

            </p>
          </div>
      </div>
        </div>
        <div class="footer">
                <Footer/>
        </div>

    </div>
    
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

export default {
    
    name: 'About',
    components:{
    Footer,
    Navigation,
}
}
</script>

<style lang="scss" scoped>
.page_content{
    padding: 20px 70px;
    .body_content{
        padding: 10px 20px;
        .goal{
            h2{
                text-decoration: underline;
            }
        }
        .vision{
            h2{
                text-decoration: underline;  
            }   
        }
    }
    }
    .home{
        .body_img{
            padding: 0 20px;
            img{    
                height: 300px;
                width: 100%;
            }
        }
    
         @media (max-width:769px) { 
             display: flexbox;
            flex-direction: column;
            padding: 0px;
            p{
                text-align: center;
            } 
        }
        div{
            width: 100%;
            padding: 0px 20px;
            position: relative;
            
            p{
                text-align: justify;
                margin-top: 20px;
                align-items: center;
            }
            img{
               width: 100%;
                height: auto;
            }
        }
    }
    
    .home_container{
        width: 100%;
        height: 100vh;
        position: relative;
        
    }
    
   
</style>