/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 35027.0, "series": [{"data": [[0.0, 199.0], [0.1, 199.0], [0.2, 199.0], [0.3, 290.0], [0.4, 290.0], [0.5, 290.0], [0.6, 408.0], [0.7, 408.0], [0.8, 408.0], [0.9, 497.0], [1.0, 497.0], [1.1, 497.0], [1.2, 595.0], [1.3, 595.0], [1.4, 595.0], [1.5, 684.0], [1.6, 684.0], [1.7, 684.0], [1.8, 1040.0], [1.9, 1040.0], [2.0, 1040.0], [2.1, 1117.0], [2.2, 1117.0], [2.3, 1117.0], [2.4, 1238.0], [2.5, 1238.0], [2.6, 1238.0], [2.7, 1337.0], [2.8, 1337.0], [2.9, 1337.0], [3.0, 1429.0], [3.1, 1429.0], [3.2, 1429.0], [3.3, 1494.0], [3.4, 1494.0], [3.5, 1494.0], [3.6, 1643.0], [3.7, 1643.0], [3.8, 1643.0], [3.9, 1713.0], [4.0, 1713.0], [4.1, 1713.0], [4.2, 1782.0], [4.3, 1782.0], [4.4, 1782.0], [4.5, 1863.0], [4.6, 1863.0], [4.7, 1863.0], [4.8, 1974.0], [4.9, 1974.0], [5.0, 1974.0], [5.1, 2090.0], [5.2, 2090.0], [5.3, 2090.0], [5.4, 2209.0], [5.5, 2209.0], [5.6, 2209.0], [5.7, 2243.0], [5.8, 2243.0], [5.9, 2243.0], [6.0, 2274.0], [6.1, 2274.0], [6.2, 2274.0], [6.3, 2419.0], [6.4, 2419.0], [6.5, 2419.0], [6.6, 2497.0], [6.7, 2497.0], [6.8, 2497.0], [6.9, 2578.0], [7.0, 2578.0], [7.1, 2578.0], [7.2, 2670.0], [7.3, 2670.0], [7.4, 2670.0], [7.5, 2740.0], [7.6, 2740.0], [7.7, 2740.0], [7.8, 2866.0], [7.9, 2866.0], [8.0, 2866.0], [8.1, 2916.0], [8.2, 2916.0], [8.3, 2916.0], [8.4, 3036.0], [8.5, 3036.0], [8.6, 3036.0], [8.7, 3160.0], [8.8, 3160.0], [8.9, 3160.0], [9.0, 3212.0], [9.1, 3212.0], [9.2, 3212.0], [9.3, 3331.0], [9.4, 3331.0], [9.5, 3331.0], [9.6, 3399.0], [9.7, 3399.0], [9.8, 3399.0], [9.9, 3519.0], [10.0, 3519.0], [10.1, 3519.0], [10.2, 3563.0], [10.3, 3563.0], [10.4, 3563.0], [10.5, 3712.0], [10.6, 3712.0], [10.7, 3712.0], [10.8, 3717.0], [10.9, 3717.0], [11.0, 3717.0], [11.1, 3843.0], [11.2, 3843.0], [11.3, 3843.0], [11.4, 3924.0], [11.5, 3924.0], [11.6, 3924.0], [11.7, 4019.0], [11.8, 4019.0], [11.9, 4019.0], [12.0, 4106.0], [12.1, 4106.0], [12.2, 4106.0], [12.3, 4201.0], [12.4, 4201.0], [12.5, 4299.0], [12.6, 4299.0], [12.7, 4299.0], [12.8, 4388.0], [12.9, 4388.0], [13.0, 4388.0], [13.1, 4510.0], [13.2, 4510.0], [13.3, 4510.0], [13.4, 4614.0], [13.5, 4614.0], [13.6, 4614.0], [13.7, 4715.0], [13.8, 4715.0], [13.9, 4715.0], [14.0, 4830.0], [14.1, 4830.0], [14.2, 4830.0], [14.3, 4924.0], [14.4, 4924.0], [14.5, 4924.0], [14.6, 5047.0], [14.7, 5047.0], [14.8, 5047.0], [14.9, 5336.0], [15.0, 5336.0], [15.1, 5336.0], [15.2, 5357.0], [15.3, 5357.0], [15.4, 5357.0], [15.5, 5445.0], [15.6, 5445.0], [15.7, 5445.0], [15.8, 5506.0], [15.9, 5506.0], [16.0, 5506.0], [16.1, 5529.0], [16.2, 5529.0], [16.3, 5529.0], [16.4, 5598.0], [16.5, 5598.0], [16.6, 5598.0], [16.7, 5729.0], [16.8, 5729.0], [16.9, 5729.0], [17.0, 5853.0], [17.1, 5853.0], [17.2, 5853.0], [17.3, 5888.0], [17.4, 5888.0], [17.5, 5888.0], [17.6, 6030.0], [17.7, 6030.0], [17.8, 6030.0], [17.9, 6101.0], [18.0, 6101.0], [18.1, 6101.0], [18.2, 6255.0], [18.3, 6255.0], [18.4, 6255.0], [18.5, 6321.0], [18.6, 6321.0], [18.7, 6321.0], [18.8, 6695.0], [18.9, 6695.0], [19.0, 6695.0], [19.1, 6748.0], [19.2, 6748.0], [19.3, 6748.0], [19.4, 6872.0], [19.5, 6872.0], [19.6, 6872.0], [19.7, 6992.0], [19.8, 6992.0], [19.9, 6992.0], [20.0, 7040.0], [20.1, 7040.0], [20.2, 7040.0], [20.3, 7197.0], [20.4, 7197.0], [20.5, 7197.0], [20.6, 7225.0], [20.7, 7225.0], [20.8, 7225.0], [20.9, 7352.0], [21.0, 7352.0], [21.1, 7352.0], [21.2, 7449.0], [21.3, 7449.0], [21.4, 7449.0], [21.5, 7577.0], [21.6, 7577.0], [21.7, 7577.0], [21.8, 7620.0], [21.9, 7620.0], [22.0, 7620.0], [22.1, 7744.0], [22.2, 7744.0], [22.3, 7744.0], [22.4, 7834.0], [22.5, 7834.0], [22.6, 7834.0], [22.7, 7975.0], [22.8, 7975.0], [22.9, 7975.0], [23.0, 8198.0], [23.1, 8198.0], [23.2, 8198.0], [23.3, 8219.0], [23.4, 8219.0], [23.5, 8219.0], [23.6, 8377.0], [23.7, 8377.0], [23.8, 8377.0], [23.9, 8407.0], [24.0, 8407.0], [24.1, 8407.0], [24.2, 8407.0], [24.3, 8407.0], [24.4, 8407.0], [24.5, 8536.0], [24.6, 8536.0], [24.7, 8536.0], [24.8, 8591.0], [24.9, 8591.0], [25.0, 8707.0], [25.1, 8707.0], [25.2, 8707.0], [25.3, 8781.0], [25.4, 8781.0], [25.5, 8781.0], [25.6, 8942.0], [25.7, 8942.0], [25.8, 8942.0], [25.9, 8974.0], [26.0, 8974.0], [26.1, 8974.0], [26.2, 9068.0], [26.3, 9068.0], [26.4, 9068.0], [26.5, 9082.0], [26.6, 9082.0], [26.7, 9082.0], [26.8, 9232.0], [26.9, 9232.0], [27.0, 9232.0], [27.1, 9291.0], [27.2, 9291.0], [27.3, 9291.0], [27.4, 9504.0], [27.5, 9504.0], [27.6, 9504.0], [27.7, 9513.0], [27.8, 9513.0], [27.9, 9513.0], [28.0, 9668.0], [28.1, 9668.0], [28.2, 9668.0], [28.3, 9738.0], [28.4, 9738.0], [28.5, 9738.0], [28.6, 9789.0], [28.7, 9789.0], [28.8, 9789.0], [28.9, 9917.0], [29.0, 9917.0], [29.1, 9917.0], [29.2, 9982.0], [29.3, 9982.0], [29.4, 9982.0], [29.5, 10132.0], [29.6, 10132.0], [29.7, 10132.0], [29.8, 10232.0], [29.9, 10232.0], [30.0, 10232.0], [30.1, 10279.0], [30.2, 10279.0], [30.3, 10279.0], [30.4, 10346.0], [30.5, 10346.0], [30.6, 10346.0], [30.7, 10442.0], [30.8, 10442.0], [30.9, 10442.0], [31.0, 10522.0], [31.1, 10522.0], [31.2, 10522.0], [31.3, 10624.0], [31.4, 10624.0], [31.5, 10624.0], [31.6, 10736.0], [31.7, 10736.0], [31.8, 10736.0], [31.9, 10840.0], [32.0, 10840.0], [32.1, 10840.0], [32.2, 10925.0], [32.3, 10925.0], [32.4, 10925.0], [32.5, 11035.0], [32.6, 11035.0], [32.7, 11035.0], [32.8, 11112.0], [32.9, 11112.0], [33.0, 11112.0], [33.1, 11428.0], [33.2, 11428.0], [33.3, 11428.0], [33.4, 11520.0], [33.5, 11520.0], [33.6, 11520.0], [33.7, 11636.0], [33.8, 11636.0], [33.9, 11636.0], [34.0, 11668.0], [34.1, 11668.0], [34.2, 11668.0], [34.3, 11771.0], [34.4, 11771.0], [34.5, 11771.0], [34.6, 11920.0], [34.7, 11920.0], [34.8, 11920.0], [34.9, 12026.0], [35.0, 12026.0], [35.1, 12026.0], [35.2, 12090.0], [35.3, 12090.0], [35.4, 12090.0], [35.5, 12205.0], [35.6, 12205.0], [35.7, 12205.0], [35.8, 12325.0], [35.9, 12325.0], [36.0, 12325.0], [36.1, 12394.0], [36.2, 12394.0], [36.3, 12394.0], [36.4, 12465.0], [36.5, 12465.0], [36.6, 12465.0], [36.7, 12574.0], [36.8, 12574.0], [36.9, 12574.0], [37.0, 12696.0], [37.1, 12696.0], [37.2, 12696.0], [37.3, 12771.0], [37.4, 12771.0], [37.5, 12771.0], [37.6, 12886.0], [37.7, 12886.0], [37.8, 12961.0], [37.9, 12961.0], [38.0, 12961.0], [38.1, 13327.0], [38.2, 13327.0], [38.3, 13327.0], [38.4, 13411.0], [38.5, 13411.0], [38.6, 13411.0], [38.7, 13520.0], [38.8, 13520.0], [38.9, 13520.0], [39.0, 13614.0], [39.1, 13614.0], [39.2, 13614.0], [39.3, 13695.0], [39.4, 13695.0], [39.5, 13695.0], [39.6, 13793.0], [39.7, 13793.0], [39.8, 13793.0], [39.9, 13815.0], [40.0, 13815.0], [40.1, 13815.0], [40.2, 13834.0], [40.3, 13834.0], [40.4, 13834.0], [40.5, 13843.0], [40.6, 13843.0], [40.7, 13843.0], [40.8, 13845.0], [40.9, 13845.0], [41.0, 13845.0], [41.1, 13850.0], [41.2, 13850.0], [41.3, 13850.0], [41.4, 13864.0], [41.5, 13864.0], [41.6, 13864.0], [41.7, 13874.0], [41.8, 13874.0], [41.9, 13874.0], [42.0, 13875.0], [42.1, 13875.0], [42.2, 13875.0], [42.3, 13877.0], [42.4, 13877.0], [42.5, 13877.0], [42.6, 13883.0], [42.7, 13883.0], [42.8, 13883.0], [42.9, 13899.0], [43.0, 13899.0], [43.1, 13899.0], [43.2, 13905.0], [43.3, 13905.0], [43.4, 13905.0], [43.5, 13908.0], [43.6, 13908.0], [43.7, 13908.0], [43.8, 13908.0], [43.9, 13908.0], [44.0, 13908.0], [44.1, 13917.0], [44.2, 13917.0], [44.3, 13917.0], [44.4, 13923.0], [44.5, 13923.0], [44.6, 13923.0], [44.7, 13928.0], [44.8, 13928.0], [44.9, 13928.0], [45.0, 13929.0], [45.1, 13929.0], [45.2, 13929.0], [45.3, 13936.0], [45.4, 13936.0], [45.5, 13936.0], [45.6, 13937.0], [45.7, 13937.0], [45.8, 13937.0], [45.9, 13939.0], [46.0, 13939.0], [46.1, 13939.0], [46.2, 13941.0], [46.3, 13941.0], [46.4, 13941.0], [46.5, 13944.0], [46.6, 13944.0], [46.7, 13944.0], [46.8, 13945.0], [46.9, 13945.0], [47.0, 13945.0], [47.1, 13945.0], [47.2, 13945.0], [47.3, 13945.0], [47.4, 13951.0], [47.5, 13951.0], [47.6, 13951.0], [47.7, 13953.0], [47.8, 13953.0], [47.9, 13953.0], [48.0, 13953.0], [48.1, 13953.0], [48.2, 13953.0], [48.3, 13956.0], [48.4, 13956.0], [48.5, 13956.0], [48.6, 13956.0], [48.7, 13956.0], [48.8, 13956.0], [48.9, 13959.0], [49.0, 13959.0], [49.1, 13959.0], [49.2, 13960.0], [49.3, 13960.0], [49.4, 13960.0], [49.5, 13961.0], [49.6, 13961.0], [49.7, 13961.0], [49.8, 13974.0], [49.9, 13974.0], [50.0, 13974.0], [50.1, 13978.0], [50.2, 13978.0], [50.3, 13980.0], [50.4, 13980.0], [50.5, 13980.0], [50.6, 13981.0], [50.7, 13981.0], [50.8, 13981.0], [50.9, 13983.0], [51.0, 13983.0], [51.1, 13983.0], [51.2, 13984.0], [51.3, 13984.0], [51.4, 13984.0], [51.5, 13986.0], [51.6, 13986.0], [51.7, 13986.0], [51.8, 13991.0], [51.9, 13991.0], [52.0, 13991.0], [52.1, 13996.0], [52.2, 13996.0], [52.3, 13996.0], [52.4, 13997.0], [52.5, 13997.0], [52.6, 13997.0], [52.7, 13998.0], [52.8, 13998.0], [52.9, 13998.0], [53.0, 14000.0], [53.1, 14000.0], [53.2, 14000.0], [53.3, 14003.0], [53.4, 14003.0], [53.5, 14003.0], [53.6, 14004.0], [53.7, 14004.0], [53.8, 14004.0], [53.9, 14005.0], [54.0, 14005.0], [54.1, 14005.0], [54.2, 14007.0], [54.3, 14007.0], [54.4, 14007.0], [54.5, 14007.0], [54.6, 14007.0], [54.7, 14007.0], [54.8, 14012.0], [54.9, 14012.0], [55.0, 14012.0], [55.1, 14016.0], [55.2, 14016.0], [55.3, 14016.0], [55.4, 14017.0], [55.5, 14017.0], [55.6, 14017.0], [55.7, 14020.0], [55.8, 14020.0], [55.9, 14020.0], [56.0, 14022.0], [56.1, 14022.0], [56.2, 14022.0], [56.3, 14023.0], [56.4, 14023.0], [56.5, 14023.0], [56.6, 14027.0], [56.7, 14027.0], [56.8, 14027.0], [56.9, 14027.0], [57.0, 14027.0], [57.1, 14027.0], [57.2, 14028.0], [57.3, 14028.0], [57.4, 14028.0], [57.5, 14030.0], [57.6, 14030.0], [57.7, 14030.0], [57.8, 14031.0], [57.9, 14031.0], [58.0, 14031.0], [58.1, 14032.0], [58.2, 14032.0], [58.3, 14032.0], [58.4, 14034.0], [58.5, 14034.0], [58.6, 14034.0], [58.7, 14036.0], [58.8, 14036.0], [58.9, 14036.0], [59.0, 14037.0], [59.1, 14037.0], [59.2, 14037.0], [59.3, 14038.0], [59.4, 14038.0], [59.5, 14038.0], [59.6, 14039.0], [59.7, 14039.0], [59.8, 14039.0], [59.9, 14050.0], [60.0, 14050.0], [60.1, 14050.0], [60.2, 14052.0], [60.3, 14052.0], [60.4, 14052.0], [60.5, 14054.0], [60.6, 14054.0], [60.7, 14054.0], [60.8, 14065.0], [60.9, 14065.0], [61.0, 14065.0], [61.1, 14066.0], [61.2, 14066.0], [61.3, 14066.0], [61.4, 14070.0], [61.5, 14070.0], [61.6, 14070.0], [61.7, 14084.0], [61.8, 14084.0], [61.9, 14084.0], [62.0, 14085.0], [62.1, 14085.0], [62.2, 14085.0], [62.3, 14085.0], [62.4, 14085.0], [62.5, 14085.0], [62.6, 14087.0], [62.7, 14087.0], [62.8, 14090.0], [62.9, 14090.0], [63.0, 14090.0], [63.1, 14090.0], [63.2, 14090.0], [63.3, 14090.0], [63.4, 14091.0], [63.5, 14091.0], [63.6, 14091.0], [63.7, 14094.0], [63.8, 14094.0], [63.9, 14094.0], [64.0, 14094.0], [64.1, 14094.0], [64.2, 14094.0], [64.3, 14098.0], [64.4, 14098.0], [64.5, 14098.0], [64.6, 14099.0], [64.7, 14099.0], [64.8, 14099.0], [64.9, 14100.0], [65.0, 14100.0], [65.1, 14100.0], [65.2, 14101.0], [65.3, 14101.0], [65.4, 14101.0], [65.5, 14102.0], [65.6, 14102.0], [65.7, 14102.0], [65.8, 14107.0], [65.9, 14107.0], [66.0, 14107.0], [66.1, 14109.0], [66.2, 14109.0], [66.3, 14109.0], [66.4, 14112.0], [66.5, 14112.0], [66.6, 14112.0], [66.7, 14123.0], [66.8, 14123.0], [66.9, 14123.0], [67.0, 14124.0], [67.1, 14124.0], [67.2, 14124.0], [67.3, 14126.0], [67.4, 14126.0], [67.5, 14126.0], [67.6, 14129.0], [67.7, 14129.0], [67.8, 14129.0], [67.9, 14130.0], [68.0, 14130.0], [68.1, 14130.0], [68.2, 14131.0], [68.3, 14131.0], [68.4, 14131.0], [68.5, 14133.0], [68.6, 14133.0], [68.7, 14133.0], [68.8, 14133.0], [68.9, 14133.0], [69.0, 14133.0], [69.1, 14134.0], [69.2, 14134.0], [69.3, 14134.0], [69.4, 14136.0], [69.5, 14136.0], [69.6, 14136.0], [69.7, 14137.0], [69.8, 14137.0], [69.9, 14137.0], [70.0, 14138.0], [70.1, 14138.0], [70.2, 14138.0], [70.3, 14140.0], [70.4, 14140.0], [70.5, 14140.0], [70.6, 14142.0], [70.7, 14142.0], [70.8, 14142.0], [70.9, 14144.0], [71.0, 14144.0], [71.1, 14144.0], [71.2, 14145.0], [71.3, 14145.0], [71.4, 14145.0], [71.5, 14147.0], [71.6, 14147.0], [71.7, 14147.0], [71.8, 14151.0], [71.9, 14151.0], [72.0, 14151.0], [72.1, 14151.0], [72.2, 14151.0], [72.3, 14151.0], [72.4, 14152.0], [72.5, 14152.0], [72.6, 14152.0], [72.7, 14156.0], [72.8, 14156.0], [72.9, 14156.0], [73.0, 14164.0], [73.1, 14164.0], [73.2, 14164.0], [73.3, 14172.0], [73.4, 14172.0], [73.5, 14172.0], [73.6, 14194.0], [73.7, 14194.0], [73.8, 14194.0], [73.9, 14209.0], [74.0, 14209.0], [74.1, 14209.0], [74.2, 14222.0], [74.3, 14222.0], [74.4, 14222.0], [74.5, 14250.0], [74.6, 14250.0], [74.7, 14250.0], [74.8, 14361.0], [74.9, 14361.0], [75.0, 14361.0], [75.1, 14361.0], [75.2, 14361.0], [75.3, 14367.0], [75.4, 14367.0], [75.5, 14367.0], [75.6, 14427.0], [75.7, 14427.0], [75.8, 14427.0], [75.9, 14929.0], [76.0, 14929.0], [76.1, 14929.0], [76.2, 14957.0], [76.3, 14957.0], [76.4, 14957.0], [76.5, 14959.0], [76.6, 14959.0], [76.7, 14959.0], [76.8, 14979.0], [76.9, 14979.0], [77.0, 14979.0], [77.1, 14991.0], [77.2, 14991.0], [77.3, 14991.0], [77.4, 14992.0], [77.5, 14992.0], [77.6, 14992.0], [77.7, 14998.0], [77.8, 14998.0], [77.9, 14998.0], [78.0, 15008.0], [78.1, 15008.0], [78.2, 15008.0], [78.3, 15017.0], [78.4, 15017.0], [78.5, 15017.0], [78.6, 15018.0], [78.7, 15018.0], [78.8, 15018.0], [78.9, 15029.0], [79.0, 15029.0], [79.1, 15029.0], [79.2, 15041.0], [79.3, 15041.0], [79.4, 15041.0], [79.5, 15046.0], [79.6, 15046.0], [79.7, 15046.0], [79.8, 15054.0], [79.9, 15054.0], [80.0, 15054.0], [80.1, 15079.0], [80.2, 15079.0], [80.3, 15079.0], [80.4, 15080.0], [80.5, 15080.0], [80.6, 15080.0], [80.7, 15102.0], [80.8, 15102.0], [80.9, 15102.0], [81.0, 15145.0], [81.1, 15145.0], [81.2, 15145.0], [81.3, 15149.0], [81.4, 15149.0], [81.5, 15149.0], [81.6, 15150.0], [81.7, 15150.0], [81.8, 15150.0], [81.9, 15153.0], [82.0, 15153.0], [82.1, 15153.0], [82.2, 15162.0], [82.3, 15162.0], [82.4, 15162.0], [82.5, 15165.0], [82.6, 15165.0], [82.7, 15165.0], [82.8, 15183.0], [82.9, 15183.0], [83.0, 15183.0], [83.1, 15185.0], [83.2, 15185.0], [83.3, 15185.0], [83.4, 15191.0], [83.5, 15191.0], [83.6, 15191.0], [83.7, 15211.0], [83.8, 15211.0], [83.9, 15211.0], [84.0, 15235.0], [84.1, 15235.0], [84.2, 15235.0], [84.3, 15335.0], [84.4, 15335.0], [84.5, 15335.0], [84.6, 15367.0], [84.7, 15367.0], [84.8, 15367.0], [84.9, 15382.0], [85.0, 15382.0], [85.1, 15382.0], [85.2, 15693.0], [85.3, 15693.0], [85.4, 15693.0], [85.5, 15868.0], [85.6, 15868.0], [85.7, 15868.0], [85.8, 15970.0], [85.9, 15970.0], [86.0, 15970.0], [86.1, 16088.0], [86.2, 16088.0], [86.3, 16088.0], [86.4, 16730.0], [86.5, 16730.0], [86.6, 16730.0], [86.7, 16791.0], [86.8, 16791.0], [86.9, 16791.0], [87.0, 16816.0], [87.1, 16816.0], [87.2, 16816.0], [87.3, 16844.0], [87.4, 16844.0], [87.5, 16844.0], [87.6, 17059.0], [87.7, 17059.0], [87.8, 17071.0], [87.9, 17071.0], [88.0, 17071.0], [88.1, 17100.0], [88.2, 17100.0], [88.3, 17100.0], [88.4, 17129.0], [88.5, 17129.0], [88.6, 17129.0], [88.7, 17151.0], [88.8, 17151.0], [88.9, 17151.0], [89.0, 17152.0], [89.1, 17152.0], [89.2, 17152.0], [89.3, 17155.0], [89.4, 17155.0], [89.5, 17155.0], [89.6, 17177.0], [89.7, 17177.0], [89.8, 17177.0], [89.9, 17178.0], [90.0, 17178.0], [90.1, 17178.0], [90.2, 17200.0], [90.3, 17200.0], [90.4, 17200.0], [90.5, 17206.0], [90.6, 17206.0], [90.7, 17206.0], [90.8, 17234.0], [90.9, 17234.0], [91.0, 17234.0], [91.1, 17271.0], [91.2, 17271.0], [91.3, 17271.0], [91.4, 17289.0], [91.5, 17289.0], [91.6, 17289.0], [91.7, 17333.0], [91.8, 17333.0], [91.9, 17333.0], [92.0, 17403.0], [92.1, 17403.0], [92.2, 17403.0], [92.3, 17424.0], [92.4, 17424.0], [92.5, 17424.0], [92.6, 17610.0], [92.7, 17610.0], [92.8, 17610.0], [92.9, 17761.0], [93.0, 17761.0], [93.1, 17761.0], [93.2, 18111.0], [93.3, 18111.0], [93.4, 18111.0], [93.5, 18193.0], [93.6, 18193.0], [93.7, 18193.0], [93.8, 18369.0], [93.9, 18369.0], [94.0, 18369.0], [94.1, 20182.0], [94.2, 20182.0], [94.3, 20182.0], [94.4, 21089.0], [94.5, 21089.0], [94.6, 21089.0], [94.7, 21167.0], [94.8, 21167.0], [94.9, 21167.0], [95.0, 21238.0], [95.1, 21238.0], [95.2, 21238.0], [95.3, 21272.0], [95.4, 21272.0], [95.5, 21272.0], [95.6, 21272.0], [95.7, 21272.0], [95.8, 21272.0], [95.9, 21284.0], [96.0, 21284.0], [96.1, 21284.0], [96.2, 21313.0], [96.3, 21313.0], [96.4, 21313.0], [96.5, 21358.0], [96.6, 21358.0], [96.7, 21358.0], [96.8, 29878.0], [96.9, 29878.0], [97.0, 29878.0], [97.1, 29973.0], [97.2, 29973.0], [97.3, 29973.0], [97.4, 30510.0], [97.5, 30510.0], [97.6, 30510.0], [97.7, 34190.0], [97.8, 34190.0], [97.9, 34190.0], [98.0, 34303.0], [98.1, 34303.0], [98.2, 34303.0], [98.3, 34406.0], [98.4, 34406.0], [98.5, 34406.0], [98.6, 34468.0], [98.7, 34468.0], [98.8, 34468.0], [98.9, 34533.0], [99.0, 34533.0], [99.1, 34533.0], [99.2, 34741.0], [99.3, 34741.0], [99.4, 34741.0], [99.5, 34885.0], [99.6, 34885.0], [99.7, 34885.0], [99.8, 35027.0], [99.9, 35027.0], [100.0, 35027.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 40.0, "series": [{"data": [[100.0, 1.0], [34100.0, 1.0], [34300.0, 1.0], [34500.0, 1.0], [34700.0, 1.0], [200.0, 1.0], [400.0, 2.0], [500.0, 1.0], [600.0, 1.0], [1000.0, 1.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 2.0], [1600.0, 1.0], [1700.0, 2.0], [1800.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2200.0, 3.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [3200.0, 1.0], [3300.0, 2.0], [3500.0, 2.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 2.0], [4300.0, 1.0], [4500.0, 1.0], [4600.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 2.0], [5500.0, 3.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 2.0], [6000.0, 1.0], [6100.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [6600.0, 1.0], [6700.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7700.0, 1.0], [7800.0, 1.0], [7900.0, 1.0], [8100.0, 1.0], [8300.0, 1.0], [8200.0, 1.0], [8400.0, 2.0], [8500.0, 2.0], [8700.0, 2.0], [8900.0, 2.0], [9000.0, 2.0], [9200.0, 2.0], [9500.0, 2.0], [9600.0, 1.0], [9700.0, 2.0], [9900.0, 2.0], [10100.0, 1.0], [10200.0, 2.0], [10300.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11000.0, 1.0], [11100.0, 1.0], [11400.0, 1.0], [11500.0, 1.0], [11600.0, 2.0], [11700.0, 1.0], [11900.0, 1.0], [12000.0, 2.0], [12200.0, 1.0], [12300.0, 2.0], [12400.0, 1.0], [12500.0, 1.0], [12600.0, 1.0], [12700.0, 1.0], [12800.0, 1.0], [12900.0, 1.0], [13300.0, 1.0], [13400.0, 1.0], [13500.0, 1.0], [13600.0, 2.0], [13700.0, 1.0], [13800.0, 11.0], [13900.0, 33.0], [14000.0, 40.0], [14200.0, 3.0], [14100.0, 30.0], [14300.0, 3.0], [14400.0, 1.0], [14900.0, 7.0], [15100.0, 10.0], [15000.0, 9.0], [15200.0, 2.0], [15300.0, 3.0], [15800.0, 1.0], [15600.0, 1.0], [16000.0, 1.0], [15900.0, 1.0], [16700.0, 2.0], [17100.0, 7.0], [17300.0, 1.0], [17200.0, 5.0], [17400.0, 2.0], [17000.0, 2.0], [16800.0, 2.0], [18100.0, 2.0], [18300.0, 1.0], [17600.0, 1.0], [17700.0, 1.0], [20100.0, 1.0], [21200.0, 4.0], [21100.0, 1.0], [21300.0, 2.0], [21000.0, 1.0], [29800.0, 1.0], [29900.0, 1.0], [30500.0, 1.0], [34400.0, 2.0], [34800.0, 1.0], [35000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 324.0, "series": [{"data": [[0.0, 4.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 324.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 115.2559523809524, "minX": 1.65994818E12, "maxY": 115.2559523809524, "series": [{"data": [[1.65994818E12, 115.2559523809524]], "isOverall": false, "label": "Practice", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994818E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7201.0, "minX": 1.0, "maxY": 35027.0, "series": [{"data": [[2.0, 18193.0], [3.0, 34885.0], [4.0, 34741.0], [5.0, 20182.0], [6.0, 34533.0], [7.0, 34468.0], [8.0, 34406.0], [9.0, 34303.0], [10.0, 34190.0], [11.0, 15693.0], [12.0, 16791.0], [13.0, 17761.0], [14.0, 16816.0], [15.0, 17155.0], [16.0, 15029.0], [17.0, 21089.0], [18.0, 15367.0], [19.0, 15149.0], [20.0, 21313.0], [21.0, 14152.0], [22.0, 14145.0], [23.0, 14137.0], [24.0, 14131.0], [25.0, 21284.0], [26.0, 14126.0], [27.0, 15145.0], [28.0, 14144.0], [29.0, 8084.5], [30.0, 17206.0], [31.0, 14133.0], [33.0, 14151.0], [32.0, 14151.0], [35.0, 14136.0], [34.0, 14133.0], [37.0, 17610.0], [36.0, 14142.0], [39.0, 17403.0], [38.0, 14129.0], [41.0, 15150.0], [40.0, 14091.0], [43.0, 15165.0], [42.0, 14109.0], [44.0, 7201.0], [45.0, 15153.0], [47.0, 30510.0], [46.0, 14094.0], [49.0, 15335.0], [48.0, 14102.0], [51.0, 29973.0], [50.0, 14065.0], [53.0, 29878.0], [52.0, 14037.0], [55.0, 21358.0], [54.0, 14036.0], [57.0, 14000.0], [56.0, 14027.0], [59.0, 13996.0], [58.0, 13983.0], [60.0, 10823.0], [61.0, 17071.0], [63.0, 14004.0], [62.0, 14012.0], [67.0, 14038.0], [66.0, 14032.0], [65.0, 15080.0], [64.0, 14028.0], [71.0, 14998.0], [70.0, 13980.0], [69.0, 14016.0], [68.0, 14034.0], [74.0, 7202.5], [75.0, 13944.0], [73.0, 13956.0], [72.0, 15008.0], [79.0, 17271.0], [78.0, 13960.0], [77.0, 13961.0], [76.0, 15018.0], [83.0, 17234.0], [82.0, 15102.0], [81.0, 14194.0], [80.0, 14427.0], [87.0, 14140.0], [86.0, 14959.0], [85.0, 14050.0], [84.0, 14209.0], [89.0, 8886.5], [91.0, 17177.0], [90.0, 14130.0], [88.0, 15183.0], [95.0, 14172.0], [94.0, 15211.0], [93.0, 21272.0], [92.0, 14138.0], [99.0, 14361.0], [98.0, 14361.0], [97.0, 14367.0], [96.0, 15382.0], [103.0, 14147.0], [102.0, 16844.0], [101.0, 14156.0], [100.0, 14124.0], [104.0, 7391.0], [106.0, 21167.0], [105.0, 14100.0], [111.0, 17152.0], [110.0, 14107.0], [109.0, 14090.0], [108.0, 15606.5], [115.0, 14094.0], [114.0, 14039.0], [113.0, 14099.0], [112.0, 14087.0], [119.0, 21272.0], [118.0, 17059.0], [117.0, 14134.0], [116.0, 14123.0], [123.0, 17100.0], [122.0, 14027.0], [121.0, 14054.0], [120.0, 13984.0], [127.0, 14085.0], [126.0, 13951.0], [125.0, 14085.0], [124.0, 14007.0], [135.0, 13953.0], [134.0, 14250.0], [133.0, 14070.0], [132.0, 14005.0], [131.0, 14052.0], [130.0, 18369.0], [129.0, 14090.0], [128.0, 15235.0], [143.0, 13941.0], [142.0, 14022.0], [141.0, 15054.0], [140.0, 14957.0], [139.0, 13991.0], [138.0, 17200.0], [137.0, 14030.0], [136.0, 13998.0], [150.0, 9358.856353591154], [149.0, 14979.0], [148.0, 14222.0], [147.0, 15185.0], [146.0, 14101.0], [145.0, 17424.0], [144.0, 14164.0], [1.0, 35027.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[115.2559523809524, 12395.276785714275]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 677.6, "minX": 1.65994818E12, "maxY": 16950.2, "series": [{"data": [[1.65994818E12, 16950.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65994818E12, 677.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994818E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 12395.276785714275, "minX": 1.65994818E12, "maxY": 12395.276785714275, "series": [{"data": [[1.65994818E12, 12395.276785714275]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994818E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 12394.568452380949, "minX": 1.65994818E12, "maxY": 12394.568452380949, "series": [{"data": [[1.65994818E12, 12394.568452380949]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994818E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 23.324404761904763, "minX": 1.65994818E12, "maxY": 23.324404761904763, "series": [{"data": [[1.65994818E12, 23.324404761904763]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994818E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 199.0, "minX": 1.65994818E12, "maxY": 35027.0, "series": [{"data": [[1.65994818E12, 35027.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65994818E12, 17184.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65994818E12, 34664.04]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65994818E12, 21243.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65994818E12, 199.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65994818E12, 13976.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994818E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 9917.0, "minX": 7.0, "maxY": 14018.5, "series": [{"data": [[8.0, 12635.0], [9.0, 13850.0], [10.0, 14018.5], [11.0, 9917.0], [7.0, 10131.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 9917.0, "minX": 7.0, "maxY": 14018.5, "series": [{"data": [[8.0, 12635.0], [9.0, 13850.0], [10.0, 14018.5], [11.0, 9917.0], [7.0, 10130.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.6, "minX": 1.65994818E12, "maxY": 5.6, "series": [{"data": [[1.65994818E12, 5.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994818E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.6, "minX": 1.65994818E12, "maxY": 5.6, "series": [{"data": [[1.65994818E12, 5.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994818E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.6, "minX": 1.65994818E12, "maxY": 5.6, "series": [{"data": [[1.65994818E12, 5.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994818E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.6, "minX": 1.65994818E12, "maxY": 5.6, "series": [{"data": [[1.65994818E12, 5.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994818E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

