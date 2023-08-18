<template>
    <div class="footer_container">
        <div class="left_footer">
            <div class="left_logo">
                <img src="../assets/background/library_logo.png" alt="">
            </div>
            <p>
                Libraries are cornerstones of our communities as hubs for knowledge, research, history, and so much more. 
                They are places where people can connect with others and invest in their own future. We know that libraries 
                are a huge resource to every community, but how about our online communities?
            </p>
            <div class="left_icon">
                <div><i class="bi bi-facebook"></i></div>
                <div><i class="bi bi-instagram"></i></div>
                <div><i class="bi bi-twitter"></i></div>
                <div><i class="bi bi-telegram"></i></div>
            </div>
            <div class="copy_right">
                <p>Copyright ©2022 All rights reserved</p>
            </div>
        </div>
        <div class="mid_footer">
            <h2>Site Map</h2>
            <div><router-link id="footer_links" :to="{name:'home'}">Home</router-link></div>
            <div><router-link id="footer_links"  :to="{name:'book'}">Library</router-link></div>
            <div><router-link id="footer_links"  :to="{name:'about'}">About</router-link></div>
            <div><router-link id="footer_links"  :to="{name:'event'}">Events</router-link></div>
            <div><router-link id="footer_links"  :to="{name:'contact'}">Contact</router-link></div>
        </div>
        <div class="right_footer">
            <h2>recent Events</h2>

            <div class="right_footer_event">
                <div class="event_footer">
                    <div class="event_img">
                        <div><img src="../assets/events photos/bookfair2.jpg" alt=""></div>
                        <div>
                        <p>CAMBODIA (The UBJ Times) – The 2021 Cambodia Book Fair to be held December 10 to 20 will be at the National Library of Phnom Penh under the theme “Read Me, See the World”.</p>
                        </div>
                    </div>
                    <div class="event_img">
                        <div> <img src="../assets/events photos/bookfair3.jpg" alt=""></div>
                        <div>
                        <p>The 7th Cambodia Book Fair is being held from December 13 to 15 under the theme "Starting the dream of holding a book".</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
        .left_footer{
            p{
                margin-top: 30px;
            }
            width: 100%;
            .left_icon{
                display: flex;
                margin: 30px 0px;
                justify-content: space-around;
                cursor: pointer;
                div i{
                    font-size: 30px;
                }
            }
            .left_logo{
                img{
                    height: 30px;
                }
            }
        }
        .mid_footer{
            width: 100%;
            text-align: center;
            div{
                margin-top: 20px;
                #footer_links{
                    font-size: 1.5rem;
                    color: #fff;
                    font-weight: bold;
                    
                    text-decoration: none;
                    @media (max-width:426px){
                        font-size: 16px;
                    }
                    @media (max-width:320px){
                        font-size: 12px;
                    }
                }
            }
            @media (max-width:768px) {
                justify-content: space-around;
                display: flex;
                margin: 30px 0px;
                h2{
                    display: none;
                }    
            }
        }
        .right_footer{
            width: 100%;
            .right_footer_event{
                display: flex;
                
                .event_img{
                    display: flex;
                    justify-content: space-around;
                    margin-bottom: 10px;
                    div{
                        margin-right: 20px;
                    }
                    img{
                        height: auto;
                        width: 200px;
                    }
                    @media (max-width:769px) {
                       flex-direction: column;
                       text-align: center;
                       div {
                        img{
                            height: auto;
                            width: 100%;
                        }
                       }
                    }
                    @media (max-width:1025px) {
                       flex-direction: column;
                       text-align: center;
                       overflow: hidden;
                       div {
                        img{
                            height: auto;
                            width: 100%;
                        }
                       }
                    }
                }
            }
        }
        .footer_container{
            padding: 20px 30px 0px 30px;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            color: aliceblue;
            background-color: #4C74AD;
            justify-content: space-between;
            @media (max-width:768px) {
                display: flex;
                flex-direction: column;
                *{
                    font-size: 1rem;
                }         
            }
            @media (max-width:1025px) {
                height: auto; 
            }
        }
</style>