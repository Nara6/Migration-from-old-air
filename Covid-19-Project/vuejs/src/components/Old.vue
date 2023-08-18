<template>
  <div>
    <div class="part4">
      <div class="title_part">
        <h6>__CHART__</h6>
        <h4>CHART VITUALIZATION IN CAMBODIA</h4>
      </div>
      <div class="body">
        <canvas id="myChart" style="max-width:50%;max-height:30vh"></canvas>
      </div>
    </div>
  </div>
</template>
<script>

import Chart from 'chart.js/auto';

export default {
  
  data() {
    return {

       xValues : ["បានចាក់​វ៉ាក់សាំងគ្រប់ដូស", "យ៉ាងហោចណាស់ 1 ដូស", "បានចាក់ដូសជំរុញ"],
       yValues : [14217963, 14958188,8096162],
       barColors : ["red", "green","blue"],

    }
  },
  methods: {
    create_chart(){
      
             new Chart("myChart", {
              type: "bar",
              data: {
                labels: this.xValues,
                datasets: [{
                  label: 'My First Dataset',
                  backgroundColor: this.barColors,
                  data: this.yValues
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: false,
                  text: "World Wine Production 2018"
                }
              }
            });


    }
    
  },
  mounted(){
    this.create_chart();
  }


}
</script>