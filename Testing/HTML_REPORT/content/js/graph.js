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
        data: {"result": {"minY": 122.0, "minX": 0.0, "maxY": 11588.0, "series": [{"data": [[0.0, 122.0], [0.1, 122.0], [0.2, 122.0], [0.3, 122.0], [0.4, 286.0], [0.5, 286.0], [0.6, 286.0], [0.7, 306.0], [0.8, 306.0], [0.9, 306.0], [1.0, 403.0], [1.1, 403.0], [1.2, 403.0], [1.3, 515.0], [1.4, 515.0], [1.5, 515.0], [1.6, 515.0], [1.7, 520.0], [1.8, 520.0], [1.9, 520.0], [2.0, 549.0], [2.1, 549.0], [2.2, 549.0], [2.3, 577.0], [2.4, 577.0], [2.5, 577.0], [2.6, 676.0], [2.7, 676.0], [2.8, 676.0], [2.9, 676.0], [3.0, 729.0], [3.1, 729.0], [3.2, 729.0], [3.3, 785.0], [3.4, 785.0], [3.5, 785.0], [3.6, 839.0], [3.7, 839.0], [3.8, 839.0], [3.9, 862.0], [4.0, 862.0], [4.1, 862.0], [4.2, 862.0], [4.3, 905.0], [4.4, 905.0], [4.5, 905.0], [4.6, 1050.0], [4.7, 1050.0], [4.8, 1050.0], [4.9, 1085.0], [5.0, 1085.0], [5.1, 1085.0], [5.2, 1188.0], [5.3, 1188.0], [5.4, 1188.0], [5.5, 1188.0], [5.6, 1203.0], [5.7, 1203.0], [5.8, 1203.0], [5.9, 1247.0], [6.0, 1247.0], [6.1, 1247.0], [6.2, 1277.0], [6.3, 1277.0], [6.4, 1277.0], [6.5, 1277.0], [6.6, 1277.0], [6.7, 1277.0], [6.8, 1277.0], [6.9, 1302.0], [7.0, 1302.0], [7.1, 1302.0], [7.2, 1386.0], [7.3, 1386.0], [7.4, 1386.0], [7.5, 1491.0], [7.6, 1491.0], [7.7, 1491.0], [7.8, 1515.0], [7.9, 1515.0], [8.0, 1515.0], [8.1, 1515.0], [8.2, 1588.0], [8.3, 1588.0], [8.4, 1588.0], [8.5, 1590.0], [8.6, 1590.0], [8.7, 1590.0], [8.8, 1615.0], [8.9, 1615.0], [9.0, 1615.0], [9.1, 1620.0], [9.2, 1620.0], [9.3, 1620.0], [9.4, 1620.0], [9.5, 1669.0], [9.6, 1669.0], [9.7, 1669.0], [9.8, 1757.0], [9.9, 1757.0], [10.0, 1757.0], [10.1, 1841.0], [10.2, 1841.0], [10.3, 1841.0], [10.4, 1932.0], [10.5, 1932.0], [10.6, 1932.0], [10.7, 1932.0], [10.8, 1978.0], [10.9, 1978.0], [11.0, 1978.0], [11.1, 2094.0], [11.2, 2094.0], [11.3, 2094.0], [11.4, 2097.0], [11.5, 2097.0], [11.6, 2097.0], [11.7, 2195.0], [11.8, 2195.0], [11.9, 2195.0], [12.0, 2195.0], [12.1, 2215.0], [12.2, 2215.0], [12.3, 2215.0], [12.4, 2337.0], [12.5, 2337.0], [12.6, 2337.0], [12.7, 2345.0], [12.8, 2345.0], [12.9, 2345.0], [13.0, 2368.0], [13.1, 2368.0], [13.2, 2368.0], [13.3, 2368.0], [13.4, 2453.0], [13.5, 2453.0], [13.6, 2453.0], [13.7, 2495.0], [13.8, 2495.0], [13.9, 2495.0], [14.0, 2538.0], [14.1, 2538.0], [14.2, 2538.0], [14.3, 2631.0], [14.4, 2631.0], [14.5, 2631.0], [14.6, 2631.0], [14.7, 2714.0], [14.8, 2714.0], [14.9, 2714.0], [15.0, 2740.0], [15.1, 2740.0], [15.2, 2740.0], [15.3, 2824.0], [15.4, 2824.0], [15.5, 2824.0], [15.6, 2919.0], [15.7, 2919.0], [15.8, 2919.0], [15.9, 2919.0], [16.0, 2951.0], [16.1, 2951.0], [16.2, 2951.0], [16.3, 3007.0], [16.4, 3007.0], [16.5, 3007.0], [16.6, 3040.0], [16.7, 3040.0], [16.8, 3040.0], [16.9, 3065.0], [17.0, 3065.0], [17.1, 3065.0], [17.2, 3065.0], [17.3, 3075.0], [17.4, 3075.0], [17.5, 3075.0], [17.6, 3101.0], [17.7, 3101.0], [17.8, 3101.0], [17.9, 3107.0], [18.0, 3107.0], [18.1, 3107.0], [18.2, 3173.0], [18.3, 3173.0], [18.4, 3173.0], [18.5, 3173.0], [18.6, 3318.0], [18.7, 3318.0], [18.8, 3318.0], [18.9, 3406.0], [19.0, 3406.0], [19.1, 3406.0], [19.2, 3407.0], [19.3, 3407.0], [19.4, 3407.0], [19.5, 3499.0], [19.6, 3499.0], [19.7, 3499.0], [19.8, 3499.0], [19.9, 3521.0], [20.0, 3521.0], [20.1, 3521.0], [20.2, 3550.0], [20.3, 3550.0], [20.4, 3550.0], [20.5, 3611.0], [20.6, 3611.0], [20.7, 3611.0], [20.8, 3633.0], [20.9, 3633.0], [21.0, 3633.0], [21.1, 3633.0], [21.2, 3673.0], [21.3, 3673.0], [21.4, 3673.0], [21.5, 3753.0], [21.6, 3753.0], [21.7, 3753.0], [21.8, 3774.0], [21.9, 3774.0], [22.0, 3774.0], [22.1, 3838.0], [22.2, 3838.0], [22.3, 3838.0], [22.4, 3838.0], [22.5, 3916.0], [22.6, 3916.0], [22.7, 3916.0], [22.8, 3962.0], [22.9, 3962.0], [23.0, 3962.0], [23.1, 3976.0], [23.2, 3976.0], [23.3, 3976.0], [23.4, 4090.0], [23.5, 4090.0], [23.6, 4090.0], [23.7, 4090.0], [23.8, 4142.0], [23.9, 4142.0], [24.0, 4142.0], [24.1, 4187.0], [24.2, 4187.0], [24.3, 4187.0], [24.4, 4190.0], [24.5, 4190.0], [24.6, 4190.0], [24.7, 4302.0], [24.8, 4302.0], [24.9, 4302.0], [25.0, 4302.0], [25.1, 4330.0], [25.2, 4330.0], [25.3, 4330.0], [25.4, 4420.0], [25.5, 4420.0], [25.6, 4420.0], [25.7, 4441.0], [25.8, 4441.0], [25.9, 4441.0], [26.0, 4462.0], [26.1, 4462.0], [26.2, 4462.0], [26.3, 4514.0], [26.4, 4514.0], [26.5, 4514.0], [26.6, 4514.0], [26.7, 4602.0], [26.8, 4602.0], [26.9, 4602.0], [27.0, 4604.0], [27.1, 4604.0], [27.2, 4604.0], [27.3, 4635.0], [27.4, 4635.0], [27.5, 4635.0], [27.6, 4707.0], [27.7, 4707.0], [27.8, 4707.0], [27.9, 4707.0], [28.0, 4750.0], [28.1, 4750.0], [28.2, 4750.0], [28.3, 4776.0], [28.4, 4776.0], [28.5, 4776.0], [28.6, 4853.0], [28.7, 4853.0], [28.8, 4853.0], [28.9, 4877.0], [29.0, 4877.0], [29.1, 4877.0], [29.2, 4877.0], [29.3, 4980.0], [29.4, 4980.0], [29.5, 4980.0], [29.6, 4999.0], [29.7, 4999.0], [29.8, 4999.0], [29.9, 5067.0], [30.0, 5067.0], [30.1, 5067.0], [30.2, 5139.0], [30.3, 5139.0], [30.4, 5139.0], [30.5, 5139.0], [30.6, 5226.0], [30.7, 5226.0], [30.8, 5226.0], [30.9, 5237.0], [31.0, 5237.0], [31.1, 5237.0], [31.2, 5338.0], [31.3, 5338.0], [31.4, 5338.0], [31.5, 5397.0], [31.6, 5397.0], [31.7, 5397.0], [31.8, 5397.0], [31.9, 5431.0], [32.0, 5431.0], [32.1, 5431.0], [32.2, 5443.0], [32.3, 5443.0], [32.4, 5443.0], [32.5, 5474.0], [32.6, 5474.0], [32.7, 5474.0], [32.8, 5488.0], [32.9, 5488.0], [33.0, 5488.0], [33.1, 5488.0], [33.2, 5590.0], [33.3, 5590.0], [33.4, 5590.0], [33.5, 5616.0], [33.6, 5616.0], [33.7, 5616.0], [33.8, 5747.0], [33.9, 5747.0], [34.0, 5747.0], [34.1, 5755.0], [34.2, 5755.0], [34.3, 5755.0], [34.4, 5755.0], [34.5, 5839.0], [34.6, 5839.0], [34.7, 5839.0], [34.8, 5847.0], [34.9, 5847.0], [35.0, 5847.0], [35.1, 5884.0], [35.2, 5884.0], [35.3, 5884.0], [35.4, 5905.0], [35.5, 5905.0], [35.6, 5905.0], [35.7, 5905.0], [35.8, 5948.0], [35.9, 5948.0], [36.0, 5948.0], [36.1, 6027.0], [36.2, 6027.0], [36.3, 6027.0], [36.4, 6050.0], [36.5, 6050.0], [36.6, 6050.0], [36.7, 6077.0], [36.8, 6077.0], [36.9, 6077.0], [37.0, 6077.0], [37.1, 6200.0], [37.2, 6200.0], [37.3, 6200.0], [37.4, 6210.0], [37.5, 6210.0], [37.6, 6210.0], [37.7, 6232.0], [37.8, 6232.0], [37.9, 6232.0], [38.0, 6232.0], [38.1, 6232.0], [38.2, 6232.0], [38.3, 6232.0], [38.4, 6370.0], [38.5, 6370.0], [38.6, 6370.0], [38.7, 6401.0], [38.8, 6401.0], [38.9, 6401.0], [39.0, 6465.0], [39.1, 6465.0], [39.2, 6465.0], [39.3, 6519.0], [39.4, 6519.0], [39.5, 6519.0], [39.6, 6519.0], [39.7, 6541.0], [39.8, 6541.0], [39.9, 6541.0], [40.0, 6665.0], [40.1, 6665.0], [40.2, 6665.0], [40.3, 6690.0], [40.4, 6690.0], [40.5, 6690.0], [40.6, 6743.0], [40.7, 6743.0], [40.8, 6743.0], [40.9, 6743.0], [41.0, 6767.0], [41.1, 6767.0], [41.2, 6767.0], [41.3, 6851.0], [41.4, 6851.0], [41.5, 6851.0], [41.6, 6869.0], [41.7, 6869.0], [41.8, 6869.0], [41.9, 6954.0], [42.0, 6954.0], [42.1, 6954.0], [42.2, 6954.0], [42.3, 6994.0], [42.4, 6994.0], [42.5, 6994.0], [42.6, 7017.0], [42.7, 7017.0], [42.8, 7017.0], [42.9, 7069.0], [43.0, 7069.0], [43.1, 7069.0], [43.2, 7094.0], [43.3, 7094.0], [43.4, 7094.0], [43.5, 7094.0], [43.6, 7191.0], [43.7, 7191.0], [43.8, 7191.0], [43.9, 7218.0], [44.0, 7218.0], [44.1, 7218.0], [44.2, 7302.0], [44.3, 7302.0], [44.4, 7302.0], [44.5, 7320.0], [44.6, 7320.0], [44.7, 7320.0], [44.8, 7320.0], [44.9, 7379.0], [45.0, 7379.0], [45.1, 7379.0], [45.2, 7382.0], [45.3, 7382.0], [45.4, 7382.0], [45.5, 7465.0], [45.6, 7465.0], [45.7, 7465.0], [45.8, 7539.0], [45.9, 7539.0], [46.0, 7539.0], [46.1, 7539.0], [46.2, 7568.0], [46.3, 7568.0], [46.4, 7568.0], [46.5, 7613.0], [46.6, 7613.0], [46.7, 7613.0], [46.8, 7665.0], [46.9, 7665.0], [47.0, 7665.0], [47.1, 7698.0], [47.2, 7698.0], [47.3, 7698.0], [47.4, 7698.0], [47.5, 7744.0], [47.6, 7744.0], [47.7, 7744.0], [47.8, 7793.0], [47.9, 7793.0], [48.0, 7793.0], [48.1, 7821.0], [48.2, 7821.0], [48.3, 7821.0], [48.4, 7840.0], [48.5, 7840.0], [48.6, 7840.0], [48.7, 7840.0], [48.8, 7929.0], [48.9, 7929.0], [49.0, 7929.0], [49.1, 8015.0], [49.2, 8015.0], [49.3, 8015.0], [49.4, 8095.0], [49.5, 8095.0], [49.6, 8095.0], [49.7, 8119.0], [49.8, 8119.0], [49.9, 8119.0], [50.0, 8119.0], [50.1, 8126.0], [50.2, 8126.0], [50.3, 8126.0], [50.4, 8130.0], [50.5, 8130.0], [50.6, 8130.0], [50.7, 8197.0], [50.8, 8197.0], [50.9, 8197.0], [51.0, 8234.0], [51.1, 8234.0], [51.2, 8234.0], [51.3, 8329.0], [51.4, 8329.0], [51.5, 8329.0], [51.6, 8329.0], [51.7, 8463.0], [51.8, 8463.0], [51.9, 8463.0], [52.0, 8518.0], [52.1, 8518.0], [52.2, 8518.0], [52.3, 8533.0], [52.4, 8533.0], [52.5, 8533.0], [52.6, 8561.0], [52.7, 8561.0], [52.8, 8561.0], [52.9, 8561.0], [53.0, 8665.0], [53.1, 8665.0], [53.2, 8665.0], [53.3, 8705.0], [53.4, 8705.0], [53.5, 8705.0], [53.6, 8844.0], [53.7, 8844.0], [53.8, 8844.0], [53.9, 8898.0], [54.0, 8898.0], [54.1, 8898.0], [54.2, 8898.0], [54.3, 8970.0], [54.4, 8970.0], [54.5, 8970.0], [54.6, 9029.0], [54.7, 9029.0], [54.8, 9029.0], [54.9, 9087.0], [55.0, 9087.0], [55.1, 9087.0], [55.2, 9102.0], [55.3, 9102.0], [55.4, 9102.0], [55.5, 9102.0], [55.6, 9117.0], [55.7, 9117.0], [55.8, 9117.0], [55.9, 9134.0], [56.0, 9134.0], [56.1, 9134.0], [56.2, 9232.0], [56.3, 9232.0], [56.4, 9232.0], [56.5, 9328.0], [56.6, 9328.0], [56.7, 9328.0], [56.8, 9328.0], [56.9, 9342.0], [57.0, 9342.0], [57.1, 9342.0], [57.2, 9351.0], [57.3, 9351.0], [57.4, 9351.0], [57.5, 9353.0], [57.6, 9353.0], [57.7, 9353.0], [57.8, 9412.0], [57.9, 9412.0], [58.0, 9412.0], [58.1, 9412.0], [58.2, 9422.0], [58.3, 9422.0], [58.4, 9422.0], [58.5, 9451.0], [58.6, 9451.0], [58.7, 9451.0], [58.8, 9523.0], [58.9, 9523.0], [59.0, 9523.0], [59.1, 9772.0], [59.2, 9772.0], [59.3, 9772.0], [59.4, 9772.0], [59.5, 9839.0], [59.6, 9839.0], [59.7, 9839.0], [59.8, 9865.0], [59.9, 9865.0], [60.0, 9865.0], [60.1, 9937.0], [60.2, 9937.0], [60.3, 9937.0], [60.4, 9976.0], [60.5, 9976.0], [60.6, 9976.0], [60.7, 9976.0], [60.8, 10013.0], [60.9, 10013.0], [61.0, 10013.0], [61.1, 10054.0], [61.2, 10054.0], [61.3, 10054.0], [61.4, 10119.0], [61.5, 10119.0], [61.6, 10119.0], [61.7, 10125.0], [61.8, 10125.0], [61.9, 10125.0], [62.0, 10125.0], [62.1, 10156.0], [62.2, 10156.0], [62.3, 10156.0], [62.4, 10226.0], [62.5, 10226.0], [62.6, 10226.0], [62.7, 10338.0], [62.8, 10338.0], [62.9, 10338.0], [63.0, 10410.0], [63.1, 10410.0], [63.2, 10410.0], [63.3, 10410.0], [63.4, 10489.0], [63.5, 10489.0], [63.6, 10489.0], [63.7, 10590.0], [63.8, 10590.0], [63.9, 10590.0], [64.0, 10602.0], [64.1, 10602.0], [64.2, 10602.0], [64.3, 10680.0], [64.4, 10680.0], [64.5, 10680.0], [64.6, 10680.0], [64.7, 10691.0], [64.8, 10691.0], [64.9, 10691.0], [65.0, 10699.0], [65.1, 10699.0], [65.2, 10699.0], [65.3, 10717.0], [65.4, 10717.0], [65.5, 10717.0], [65.6, 10738.0], [65.7, 10738.0], [65.8, 10738.0], [65.9, 10738.0], [66.0, 10758.0], [66.1, 10758.0], [66.2, 10758.0], [66.3, 10775.0], [66.4, 10775.0], [66.5, 10775.0], [66.6, 10820.0], [66.7, 10820.0], [66.8, 10820.0], [66.9, 10839.0], [67.0, 10839.0], [67.1, 10839.0], [67.2, 10839.0], [67.3, 10841.0], [67.4, 10841.0], [67.5, 10841.0], [67.6, 10851.0], [67.7, 10851.0], [67.8, 10851.0], [67.9, 10853.0], [68.0, 10853.0], [68.1, 10853.0], [68.2, 10856.0], [68.3, 10856.0], [68.4, 10856.0], [68.5, 10856.0], [68.6, 10858.0], [68.7, 10858.0], [68.8, 10858.0], [68.9, 10866.0], [69.0, 10866.0], [69.1, 10866.0], [69.2, 10873.0], [69.3, 10873.0], [69.4, 10873.0], [69.5, 10879.0], [69.6, 10879.0], [69.7, 10879.0], [69.8, 10879.0], [69.9, 10879.0], [70.0, 10879.0], [70.1, 10879.0], [70.2, 10881.0], [70.3, 10881.0], [70.4, 10881.0], [70.5, 10882.0], [70.6, 10882.0], [70.7, 10882.0], [70.8, 10883.0], [70.9, 10883.0], [71.0, 10883.0], [71.1, 10883.0], [71.2, 10889.0], [71.3, 10889.0], [71.4, 10889.0], [71.5, 10895.0], [71.6, 10895.0], [71.7, 10895.0], [71.8, 10895.0], [71.9, 10895.0], [72.0, 10895.0], [72.1, 10897.0], [72.2, 10897.0], [72.3, 10897.0], [72.4, 10897.0], [72.5, 10897.0], [72.6, 10897.0], [72.7, 10897.0], [72.8, 10898.0], [72.9, 10898.0], [73.0, 10898.0], [73.1, 10901.0], [73.2, 10901.0], [73.3, 10901.0], [73.4, 10903.0], [73.5, 10903.0], [73.6, 10903.0], [73.7, 10903.0], [73.8, 10903.0], [73.9, 10903.0], [74.0, 10903.0], [74.1, 10904.0], [74.2, 10904.0], [74.3, 10904.0], [74.4, 10911.0], [74.5, 10911.0], [74.6, 10911.0], [74.7, 10914.0], [74.8, 10914.0], [74.9, 10914.0], [75.0, 10914.0], [75.1, 10914.0], [75.2, 10914.0], [75.3, 10914.0], [75.4, 10914.0], [75.5, 10914.0], [75.6, 10914.0], [75.7, 10915.0], [75.8, 10915.0], [75.9, 10915.0], [76.0, 10920.0], [76.1, 10920.0], [76.2, 10920.0], [76.3, 10922.0], [76.4, 10922.0], [76.5, 10922.0], [76.6, 10922.0], [76.7, 10923.0], [76.8, 10923.0], [76.9, 10923.0], [77.0, 10924.0], [77.1, 10924.0], [77.2, 10924.0], [77.3, 10926.0], [77.4, 10926.0], [77.5, 10926.0], [77.6, 10929.0], [77.7, 10929.0], [77.8, 10929.0], [77.9, 10929.0], [78.0, 10931.0], [78.1, 10931.0], [78.2, 10931.0], [78.3, 10934.0], [78.4, 10934.0], [78.5, 10934.0], [78.6, 10935.0], [78.7, 10935.0], [78.8, 10935.0], [78.9, 10936.0], [79.0, 10936.0], [79.1, 10936.0], [79.2, 10936.0], [79.3, 10945.0], [79.4, 10945.0], [79.5, 10945.0], [79.6, 10951.0], [79.7, 10951.0], [79.8, 10951.0], [79.9, 10951.0], [80.0, 10951.0], [80.1, 10951.0], [80.2, 10952.0], [80.3, 10952.0], [80.4, 10952.0], [80.5, 10952.0], [80.6, 10961.0], [80.7, 10961.0], [80.8, 10961.0], [80.9, 10961.0], [81.0, 10961.0], [81.1, 10961.0], [81.2, 10965.0], [81.3, 10965.0], [81.4, 10965.0], [81.5, 10971.0], [81.6, 10971.0], [81.7, 10971.0], [81.8, 10971.0], [81.9, 10975.0], [82.0, 10975.0], [82.1, 10975.0], [82.2, 10993.0], [82.3, 10993.0], [82.4, 10993.0], [82.5, 11002.0], [82.6, 11002.0], [82.7, 11002.0], [82.8, 11003.0], [82.9, 11003.0], [83.0, 11003.0], [83.1, 11003.0], [83.2, 11005.0], [83.3, 11005.0], [83.4, 11005.0], [83.5, 11005.0], [83.6, 11005.0], [83.7, 11005.0], [83.8, 11008.0], [83.9, 11008.0], [84.0, 11008.0], [84.1, 11012.0], [84.2, 11012.0], [84.3, 11012.0], [84.4, 11012.0], [84.5, 11012.0], [84.6, 11012.0], [84.7, 11012.0], [84.8, 11017.0], [84.9, 11017.0], [85.0, 11017.0], [85.1, 11024.0], [85.2, 11024.0], [85.3, 11024.0], [85.4, 11025.0], [85.5, 11025.0], [85.6, 11025.0], [85.7, 11025.0], [85.8, 11027.0], [85.9, 11027.0], [86.0, 11027.0], [86.1, 11030.0], [86.2, 11030.0], [86.3, 11030.0], [86.4, 11030.0], [86.5, 11030.0], [86.6, 11030.0], [86.7, 11034.0], [86.8, 11034.0], [86.9, 11034.0], [87.0, 11034.0], [87.1, 11036.0], [87.2, 11036.0], [87.3, 11036.0], [87.4, 11044.0], [87.5, 11044.0], [87.6, 11044.0], [87.7, 11048.0], [87.8, 11048.0], [87.9, 11048.0], [88.0, 11048.0], [88.1, 11048.0], [88.2, 11048.0], [88.3, 11048.0], [88.4, 11051.0], [88.5, 11051.0], [88.6, 11051.0], [88.7, 11053.0], [88.8, 11053.0], [88.9, 11053.0], [89.0, 11057.0], [89.1, 11057.0], [89.2, 11057.0], [89.3, 11060.0], [89.4, 11060.0], [89.5, 11060.0], [89.6, 11060.0], [89.7, 11061.0], [89.8, 11061.0], [89.9, 11061.0], [90.0, 11062.0], [90.1, 11062.0], [90.2, 11062.0], [90.3, 11063.0], [90.4, 11063.0], [90.5, 11063.0], [90.6, 11063.0], [90.7, 11063.0], [90.8, 11063.0], [90.9, 11063.0], [91.0, 11073.0], [91.1, 11073.0], [91.2, 11073.0], [91.3, 11077.0], [91.4, 11077.0], [91.5, 11077.0], [91.6, 11078.0], [91.7, 11078.0], [91.8, 11078.0], [91.9, 11082.0], [92.0, 11082.0], [92.1, 11082.0], [92.2, 11082.0], [92.3, 11082.0], [92.4, 11082.0], [92.5, 11082.0], [92.6, 11092.0], [92.7, 11092.0], [92.8, 11092.0], [92.9, 11095.0], [93.0, 11095.0], [93.1, 11095.0], [93.2, 11099.0], [93.3, 11099.0], [93.4, 11099.0], [93.5, 11099.0], [93.6, 11103.0], [93.7, 11103.0], [93.8, 11103.0], [93.9, 11126.0], [94.0, 11126.0], [94.1, 11126.0], [94.2, 11133.0], [94.3, 11133.0], [94.4, 11133.0], [94.5, 11138.0], [94.6, 11138.0], [94.7, 11138.0], [94.8, 11138.0], [94.9, 11147.0], [95.0, 11147.0], [95.1, 11147.0], [95.2, 11160.0], [95.3, 11160.0], [95.4, 11160.0], [95.5, 11168.0], [95.6, 11168.0], [95.7, 11168.0], [95.8, 11168.0], [95.9, 11168.0], [96.0, 11168.0], [96.1, 11168.0], [96.2, 11172.0], [96.3, 11172.0], [96.4, 11172.0], [96.5, 11183.0], [96.6, 11183.0], [96.7, 11183.0], [96.8, 11183.0], [96.9, 11183.0], [97.0, 11183.0], [97.1, 11185.0], [97.2, 11185.0], [97.3, 11185.0], [97.4, 11185.0], [97.5, 11231.0], [97.6, 11231.0], [97.7, 11231.0], [97.8, 11244.0], [97.9, 11244.0], [98.0, 11244.0], [98.1, 11250.0], [98.2, 11250.0], [98.3, 11250.0], [98.4, 11254.0], [98.5, 11254.0], [98.6, 11254.0], [98.7, 11254.0], [98.8, 11328.0], [98.9, 11328.0], [99.0, 11328.0], [99.1, 11350.0], [99.2, 11350.0], [99.3, 11350.0], [99.4, 11448.0], [99.5, 11448.0], [99.6, 11448.0], [99.7, 11588.0], [99.8, 11588.0], [99.9, 11588.0], [100.0, 11588.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 34.0, "series": [{"data": [[100.0, 1.0], [200.0, 1.0], [300.0, 1.0], [400.0, 1.0], [500.0, 4.0], [600.0, 1.0], [700.0, 2.0], [800.0, 2.0], [900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 3.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 2.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 3.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 1.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 2.0], [3000.0, 4.0], [3100.0, 3.0], [3300.0, 1.0], [3400.0, 3.0], [3500.0, 2.0], [3600.0, 3.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 3.0], [4000.0, 1.0], [4100.0, 3.0], [4300.0, 2.0], [4400.0, 3.0], [4500.0, 1.0], [4600.0, 3.0], [4700.0, 3.0], [4800.0, 2.0], [5000.0, 1.0], [4900.0, 2.0], [5100.0, 1.0], [5200.0, 2.0], [5300.0, 2.0], [5400.0, 4.0], [5500.0, 1.0], [5600.0, 1.0], [5700.0, 2.0], [5800.0, 3.0], [5900.0, 2.0], [6000.0, 3.0], [6200.0, 4.0], [6300.0, 1.0], [6400.0, 2.0], [6500.0, 2.0], [6600.0, 2.0], [6700.0, 2.0], [6800.0, 2.0], [6900.0, 2.0], [7000.0, 3.0], [7100.0, 1.0], [7300.0, 4.0], [7400.0, 1.0], [7200.0, 1.0], [7500.0, 2.0], [7600.0, 3.0], [7700.0, 2.0], [7900.0, 1.0], [7800.0, 2.0], [8000.0, 2.0], [8100.0, 4.0], [8200.0, 1.0], [8300.0, 1.0], [8500.0, 3.0], [8700.0, 1.0], [8400.0, 1.0], [8600.0, 1.0], [8900.0, 1.0], [9000.0, 2.0], [9100.0, 3.0], [9200.0, 1.0], [8800.0, 2.0], [9400.0, 3.0], [9500.0, 1.0], [9700.0, 1.0], [9300.0, 4.0], [9800.0, 2.0], [9900.0, 2.0], [10100.0, 3.0], [10200.0, 1.0], [10000.0, 2.0], [10400.0, 2.0], [10300.0, 1.0], [10700.0, 4.0], [10600.0, 4.0], [10500.0, 1.0], [10800.0, 20.0], [10900.0, 29.0], [11000.0, 34.0], [11100.0, 12.0], [11200.0, 4.0], [11400.0, 1.0], [11500.0, 1.0], [11300.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 197.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 197.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 83.73376623376625, "minX": 1.65994548E12, "maxY": 83.73376623376625, "series": [{"data": [[1.65994548E12, 83.73376623376625]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994548E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 306.0, "minX": 1.0, "maxY": 10952.0, "series": [{"data": [[2.0, 2368.0], [3.0, 7382.0], [5.0, 6092.5], [6.0, 1932.0], [7.0, 10590.0], [8.0, 6232.0], [9.0, 2824.0], [10.0, 5884.0], [11.0, 7568.0], [12.0, 8665.0], [13.0, 2453.0], [14.0, 2714.0], [15.0, 9412.0], [16.0, 10691.0], [18.0, 6182.5], [19.0, 10013.0], [20.0, 5905.0], [21.0, 4420.0], [24.0, 3287.3333333333335], [25.0, 4635.0], [26.0, 785.0], [28.0, 3587.5], [30.0, 4575.5], [31.0, 306.0], [33.0, 3916.0], [32.0, 4853.0], [35.0, 8359.5], [37.0, 6146.5], [39.0, 3406.0], [38.0, 1386.0], [41.0, 6465.0], [40.0, 3673.0], [43.0, 1948.5], [42.0, 4462.0], [45.0, 1277.0], [44.0, 5474.0], [47.0, 5338.0], [46.0, 1491.0], [49.0, 6665.0], [48.0, 8130.0], [51.0, 8126.0], [53.0, 10952.0], [52.0, 7070.5], [55.0, 8119.0], [54.0, 7218.0], [57.0, 6869.0], [56.0, 7379.0], [58.0, 3107.0], [61.0, 8833.5], [60.0, 9353.0], [63.0, 6977.5], [66.0, 4055.5], [64.0, 1050.0], [71.0, 4418.5], [70.0, 1757.0], [68.0, 3618.0], [75.0, 6994.0], [74.0, 4999.0], [73.0, 6370.0], [72.0, 3774.0], [78.0, 5084.5], [76.0, 729.0], [80.0, 4569.5], [82.0, 905.0], [87.0, 5054.5], [86.0, 6146.333333333333], [84.0, 10412.0], [89.0, 9102.0], [88.0, 9117.0], [94.0, 8705.0], [99.0, 3270.0], [97.0, 9328.0], [100.0, 8337.995192307691], [1.0, 8197.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[83.73376623376625, 7387.107142857138]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 526.9333333333333, "minX": 1.65994548E12, "maxY": 14938.233333333334, "series": [{"data": [[1.65994548E12, 14938.233333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65994548E12, 526.9333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994548E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7387.107142857138, "minX": 1.65994548E12, "maxY": 7387.107142857138, "series": [{"data": [[1.65994548E12, 7387.107142857138]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994548E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5576.711038961038, "minX": 1.65994548E12, "maxY": 5576.711038961038, "series": [{"data": [[1.65994548E12, 5576.711038961038]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994548E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 45.79545454545453, "minX": 1.65994548E12, "maxY": 45.79545454545453, "series": [{"data": [[1.65994548E12, 45.79545454545453]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994548E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 286.0, "minX": 1.65994548E12, "maxY": 11588.0, "series": [{"data": [[1.65994548E12, 11588.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65994548E12, 11099.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65994548E12, 11439.18]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65994548E12, 11183.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65994548E12, 286.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65994548E12, 10727.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994548E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 286.0, "minX": 1.0, "maxY": 11168.0, "series": [{"data": [[1.0, 286.0], [8.0, 9327.0], [9.0, 10858.0], [10.0, 5539.0], [11.0, 11087.0], [105.0, 10883.0], [7.0, 11168.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[105.0, 5685.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 11168.0, "series": [{"data": [[1.0, 286.0], [8.0, 9305.0], [9.0, 10858.0], [10.0, 5538.5], [11.0, 11087.0], [105.0, 10883.0], [7.0, 11168.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[105.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 105.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.133333333333334, "minX": 1.65994548E12, "maxY": 5.133333333333334, "series": [{"data": [[1.65994548E12, 5.133333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994548E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.65994548E12, "maxY": 3.466666666666667, "series": [{"data": [[1.65994548E12, 3.466666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65994548E12, 1.6666666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65994548E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.65994548E12, "maxY": 3.466666666666667, "series": [{"data": [[1.65994548E12, 3.466666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.65994548E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994548E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.65994548E12, "maxY": 3.466666666666667, "series": [{"data": [[1.65994548E12, 3.466666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65994548E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65994548E12, "title": "Total Transactions Per Second"}},
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

