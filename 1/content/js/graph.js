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
        data: {"result": {"minY": 221.0, "minX": 0.0, "maxY": 1246.0, "series": [{"data": [[0.0, 221.0], [0.1, 221.0], [0.2, 221.0], [0.3, 221.0], [0.4, 229.0], [0.5, 229.0], [0.6, 229.0], [0.7, 229.0], [0.8, 235.0], [0.9, 235.0], [1.0, 235.0], [1.1, 235.0], [1.2, 253.0], [1.3, 253.0], [1.4, 253.0], [1.5, 269.0], [1.6, 269.0], [1.7, 269.0], [1.8, 269.0], [1.9, 272.0], [2.0, 272.0], [2.1, 272.0], [2.2, 272.0], [2.3, 274.0], [2.4, 274.0], [2.5, 274.0], [2.6, 276.0], [2.7, 276.0], [2.8, 276.0], [2.9, 276.0], [3.0, 277.0], [3.1, 277.0], [3.2, 277.0], [3.3, 277.0], [3.4, 279.0], [3.5, 279.0], [3.6, 279.0], [3.7, 279.0], [3.8, 279.0], [3.9, 279.0], [4.0, 279.0], [4.1, 280.0], [4.2, 280.0], [4.3, 280.0], [4.4, 280.0], [4.5, 282.0], [4.6, 282.0], [4.7, 282.0], [4.8, 282.0], [4.9, 283.0], [5.0, 283.0], [5.1, 283.0], [5.2, 283.0], [5.3, 283.0], [5.4, 283.0], [5.5, 283.0], [5.6, 284.0], [5.7, 284.0], [5.8, 284.0], [5.9, 284.0], [6.0, 285.0], [6.1, 285.0], [6.2, 285.0], [6.3, 289.0], [6.4, 289.0], [6.5, 289.0], [6.6, 289.0], [6.7, 290.0], [6.8, 290.0], [6.9, 290.0], [7.0, 290.0], [7.1, 293.0], [7.2, 293.0], [7.3, 293.0], [7.4, 293.0], [7.5, 294.0], [7.6, 294.0], [7.7, 294.0], [7.8, 294.0], [7.9, 294.0], [8.0, 294.0], [8.1, 294.0], [8.2, 295.0], [8.3, 295.0], [8.4, 295.0], [8.5, 295.0], [8.6, 295.0], [8.7, 295.0], [8.8, 295.0], [8.9, 295.0], [9.0, 295.0], [9.1, 295.0], [9.2, 295.0], [9.3, 296.0], [9.4, 296.0], [9.5, 296.0], [9.6, 296.0], [9.7, 298.0], [9.8, 298.0], [9.9, 298.0], [10.0, 298.0], [10.1, 298.0], [10.2, 298.0], [10.3, 298.0], [10.4, 299.0], [10.5, 299.0], [10.6, 299.0], [10.7, 299.0], [10.8, 302.0], [10.9, 302.0], [11.0, 302.0], [11.1, 302.0], [11.2, 302.0], [11.3, 302.0], [11.4, 302.0], [11.5, 304.0], [11.6, 304.0], [11.7, 304.0], [11.8, 304.0], [11.9, 304.0], [12.0, 304.0], [12.1, 304.0], [12.2, 304.0], [12.3, 304.0], [12.4, 304.0], [12.5, 304.0], [12.6, 305.0], [12.7, 305.0], [12.8, 305.0], [12.9, 305.0], [13.0, 308.0], [13.1, 308.0], [13.2, 308.0], [13.3, 308.0], [13.4, 308.0], [13.5, 308.0], [13.6, 308.0], [13.7, 308.0], [13.8, 309.0], [13.9, 309.0], [14.0, 309.0], [14.1, 314.0], [14.2, 314.0], [14.3, 314.0], [14.4, 314.0], [14.5, 315.0], [14.6, 315.0], [14.7, 315.0], [14.8, 315.0], [14.9, 319.0], [15.0, 319.0], [15.1, 319.0], [15.2, 320.0], [15.3, 320.0], [15.4, 320.0], [15.5, 320.0], [15.6, 322.0], [15.7, 322.0], [15.8, 322.0], [15.9, 322.0], [16.0, 324.0], [16.1, 324.0], [16.2, 324.0], [16.3, 325.0], [16.4, 325.0], [16.5, 325.0], [16.6, 325.0], [16.7, 325.0], [16.8, 325.0], [16.9, 325.0], [17.0, 325.0], [17.1, 327.0], [17.2, 327.0], [17.3, 327.0], [17.4, 327.0], [17.5, 328.0], [17.6, 328.0], [17.7, 328.0], [17.8, 329.0], [17.9, 329.0], [18.0, 329.0], [18.1, 329.0], [18.2, 332.0], [18.3, 332.0], [18.4, 332.0], [18.5, 332.0], [18.6, 332.0], [18.7, 332.0], [18.8, 332.0], [18.9, 332.0], [19.0, 332.0], [19.1, 332.0], [19.2, 332.0], [19.3, 333.0], [19.4, 333.0], [19.5, 333.0], [19.6, 333.0], [19.7, 333.0], [19.8, 333.0], [19.9, 333.0], [20.0, 334.0], [20.1, 334.0], [20.2, 334.0], [20.3, 334.0], [20.4, 334.0], [20.5, 334.0], [20.6, 334.0], [20.7, 334.0], [20.8, 335.0], [20.9, 335.0], [21.0, 335.0], [21.1, 335.0], [21.2, 336.0], [21.3, 336.0], [21.4, 336.0], [21.5, 336.0], [21.6, 336.0], [21.7, 336.0], [21.8, 336.0], [21.9, 337.0], [22.0, 337.0], [22.1, 337.0], [22.2, 337.0], [22.3, 337.0], [22.4, 337.0], [22.5, 337.0], [22.6, 338.0], [22.7, 338.0], [22.8, 338.0], [22.9, 338.0], [23.0, 340.0], [23.1, 340.0], [23.2, 340.0], [23.3, 340.0], [23.4, 340.0], [23.5, 340.0], [23.6, 340.0], [23.7, 340.0], [23.8, 340.0], [23.9, 340.0], [24.0, 340.0], [24.1, 340.0], [24.2, 340.0], [24.3, 340.0], [24.4, 340.0], [24.5, 341.0], [24.6, 341.0], [24.7, 341.0], [24.8, 341.0], [24.9, 343.0], [25.0, 343.0], [25.1, 343.0], [25.2, 344.0], [25.3, 344.0], [25.4, 344.0], [25.5, 344.0], [25.6, 344.0], [25.7, 344.0], [25.8, 344.0], [25.9, 344.0], [26.0, 344.0], [26.1, 344.0], [26.2, 344.0], [26.3, 345.0], [26.4, 345.0], [26.5, 345.0], [26.6, 345.0], [26.7, 346.0], [26.8, 346.0], [26.9, 346.0], [27.0, 346.0], [27.1, 346.0], [27.2, 346.0], [27.3, 346.0], [27.4, 346.0], [27.5, 346.0], [27.6, 346.0], [27.7, 346.0], [27.8, 347.0], [27.9, 347.0], [28.0, 347.0], [28.1, 347.0], [28.2, 348.0], [28.3, 348.0], [28.4, 348.0], [28.5, 348.0], [28.6, 348.0], [28.7, 348.0], [28.8, 348.0], [28.9, 349.0], [29.0, 349.0], [29.1, 349.0], [29.2, 349.0], [29.3, 349.0], [29.4, 349.0], [29.5, 349.0], [29.6, 349.0], [29.7, 350.0], [29.8, 350.0], [29.9, 350.0], [30.0, 352.0], [30.1, 352.0], [30.2, 352.0], [30.3, 352.0], [30.4, 353.0], [30.5, 353.0], [30.6, 353.0], [30.7, 353.0], [30.8, 355.0], [30.9, 355.0], [31.0, 355.0], [31.1, 355.0], [31.2, 356.0], [31.3, 356.0], [31.4, 356.0], [31.5, 356.0], [31.6, 356.0], [31.7, 356.0], [31.8, 356.0], [31.9, 357.0], [32.0, 357.0], [32.1, 357.0], [32.2, 357.0], [32.3, 358.0], [32.4, 358.0], [32.5, 358.0], [32.6, 359.0], [32.7, 359.0], [32.8, 359.0], [32.9, 359.0], [33.0, 360.0], [33.1, 360.0], [33.2, 360.0], [33.3, 360.0], [33.4, 360.0], [33.5, 360.0], [33.6, 360.0], [33.7, 360.0], [33.8, 361.0], [33.9, 361.0], [34.0, 361.0], [34.1, 363.0], [34.2, 363.0], [34.3, 363.0], [34.4, 363.0], [34.5, 364.0], [34.6, 364.0], [34.7, 364.0], [34.8, 364.0], [34.9, 364.0], [35.0, 364.0], [35.1, 364.0], [35.2, 365.0], [35.3, 365.0], [35.4, 365.0], [35.5, 365.0], [35.6, 365.0], [35.7, 365.0], [35.8, 365.0], [35.9, 365.0], [36.0, 366.0], [36.1, 366.0], [36.2, 366.0], [36.3, 368.0], [36.4, 368.0], [36.5, 368.0], [36.6, 368.0], [36.7, 368.0], [36.8, 368.0], [36.9, 368.0], [37.0, 368.0], [37.1, 369.0], [37.2, 369.0], [37.3, 369.0], [37.4, 369.0], [37.5, 369.0], [37.6, 369.0], [37.7, 369.0], [37.8, 369.0], [37.9, 369.0], [38.0, 369.0], [38.1, 369.0], [38.2, 370.0], [38.3, 370.0], [38.4, 370.0], [38.5, 370.0], [38.6, 370.0], [38.7, 370.0], [38.8, 370.0], [38.9, 371.0], [39.0, 371.0], [39.1, 371.0], [39.2, 371.0], [39.3, 371.0], [39.4, 371.0], [39.5, 371.0], [39.6, 371.0], [39.7, 372.0], [39.8, 372.0], [39.9, 372.0], [40.0, 372.0], [40.1, 372.0], [40.2, 372.0], [40.3, 372.0], [40.4, 372.0], [40.5, 372.0], [40.6, 372.0], [40.7, 372.0], [40.8, 374.0], [40.9, 374.0], [41.0, 374.0], [41.1, 374.0], [41.2, 374.0], [41.3, 374.0], [41.4, 374.0], [41.5, 375.0], [41.6, 375.0], [41.7, 375.0], [41.8, 375.0], [41.9, 375.0], [42.0, 375.0], [42.1, 375.0], [42.2, 375.0], [42.3, 376.0], [42.4, 376.0], [42.5, 376.0], [42.6, 377.0], [42.7, 377.0], [42.8, 377.0], [42.9, 377.0], [43.0, 377.0], [43.1, 377.0], [43.2, 377.0], [43.3, 377.0], [43.4, 381.0], [43.5, 381.0], [43.6, 381.0], [43.7, 381.0], [43.8, 381.0], [43.9, 381.0], [44.0, 381.0], [44.1, 385.0], [44.2, 385.0], [44.3, 385.0], [44.4, 385.0], [44.5, 386.0], [44.6, 386.0], [44.7, 386.0], [44.8, 386.0], [44.9, 386.0], [45.0, 386.0], [45.1, 386.0], [45.2, 386.0], [45.3, 386.0], [45.4, 386.0], [45.5, 386.0], [45.6, 386.0], [45.7, 386.0], [45.8, 386.0], [45.9, 386.0], [46.0, 387.0], [46.1, 387.0], [46.2, 387.0], [46.3, 388.0], [46.4, 388.0], [46.5, 388.0], [46.6, 388.0], [46.7, 388.0], [46.8, 388.0], [46.9, 388.0], [47.0, 388.0], [47.1, 389.0], [47.2, 389.0], [47.3, 389.0], [47.4, 389.0], [47.5, 390.0], [47.6, 390.0], [47.7, 390.0], [47.8, 390.0], [47.9, 390.0], [48.0, 390.0], [48.1, 390.0], [48.2, 390.0], [48.3, 390.0], [48.4, 390.0], [48.5, 390.0], [48.6, 390.0], [48.7, 390.0], [48.8, 390.0], [48.9, 391.0], [49.0, 391.0], [49.1, 391.0], [49.2, 391.0], [49.3, 391.0], [49.4, 391.0], [49.5, 391.0], [49.6, 391.0], [49.7, 392.0], [49.8, 392.0], [49.9, 392.0], [50.0, 392.0], [50.1, 393.0], [50.2, 393.0], [50.3, 393.0], [50.4, 393.0], [50.5, 393.0], [50.6, 393.0], [50.7, 393.0], [50.8, 393.0], [50.9, 393.0], [51.0, 393.0], [51.1, 393.0], [51.2, 394.0], [51.3, 394.0], [51.4, 394.0], [51.5, 397.0], [51.6, 397.0], [51.7, 397.0], [51.8, 397.0], [51.9, 397.0], [52.0, 397.0], [52.1, 397.0], [52.2, 397.0], [52.3, 397.0], [52.4, 397.0], [52.5, 397.0], [52.6, 398.0], [52.7, 398.0], [52.8, 398.0], [52.9, 398.0], [53.0, 398.0], [53.1, 398.0], [53.2, 398.0], [53.3, 398.0], [53.4, 399.0], [53.5, 399.0], [53.6, 399.0], [53.7, 399.0], [53.8, 401.0], [53.9, 401.0], [54.0, 401.0], [54.1, 401.0], [54.2, 401.0], [54.3, 401.0], [54.4, 401.0], [54.5, 404.0], [54.6, 404.0], [54.7, 404.0], [54.8, 404.0], [54.9, 405.0], [55.0, 405.0], [55.1, 405.0], [55.2, 406.0], [55.3, 406.0], [55.4, 406.0], [55.5, 406.0], [55.6, 407.0], [55.7, 407.0], [55.8, 407.0], [55.9, 407.0], [56.0, 408.0], [56.1, 408.0], [56.2, 408.0], [56.3, 408.0], [56.4, 408.0], [56.5, 408.0], [56.6, 408.0], [56.7, 409.0], [56.8, 409.0], [56.9, 409.0], [57.0, 409.0], [57.1, 411.0], [57.2, 411.0], [57.3, 411.0], [57.4, 411.0], [57.5, 411.0], [57.6, 411.0], [57.7, 411.0], [57.8, 412.0], [57.9, 412.0], [58.0, 412.0], [58.1, 412.0], [58.2, 412.0], [58.3, 412.0], [58.4, 412.0], [58.5, 412.0], [58.6, 412.0], [58.7, 412.0], [58.8, 412.0], [58.9, 412.0], [59.0, 412.0], [59.1, 412.0], [59.2, 412.0], [59.3, 415.0], [59.4, 415.0], [59.5, 415.0], [59.6, 415.0], [59.7, 417.0], [59.8, 417.0], [59.9, 417.0], [60.0, 417.0], [60.1, 417.0], [60.2, 417.0], [60.3, 417.0], [60.4, 417.0], [60.5, 417.0], [60.6, 417.0], [60.7, 417.0], [60.8, 423.0], [60.9, 423.0], [61.0, 423.0], [61.1, 423.0], [61.2, 423.0], [61.3, 423.0], [61.4, 423.0], [61.5, 424.0], [61.6, 424.0], [61.7, 424.0], [61.8, 424.0], [61.9, 425.0], [62.0, 425.0], [62.1, 425.0], [62.2, 425.0], [62.3, 427.0], [62.4, 427.0], [62.5, 427.0], [62.6, 432.0], [62.7, 432.0], [62.8, 432.0], [62.9, 432.0], [63.0, 433.0], [63.1, 433.0], [63.2, 433.0], [63.3, 433.0], [63.4, 433.0], [63.5, 433.0], [63.6, 433.0], [63.7, 433.0], [63.8, 435.0], [63.9, 435.0], [64.0, 435.0], [64.1, 437.0], [64.2, 437.0], [64.3, 437.0], [64.4, 437.0], [64.5, 437.0], [64.6, 437.0], [64.7, 437.0], [64.8, 437.0], [64.9, 439.0], [65.0, 439.0], [65.1, 439.0], [65.2, 439.0], [65.3, 439.0], [65.4, 439.0], [65.5, 439.0], [65.6, 441.0], [65.7, 441.0], [65.8, 441.0], [65.9, 441.0], [66.0, 441.0], [66.1, 441.0], [66.2, 441.0], [66.3, 441.0], [66.4, 441.0], [66.5, 441.0], [66.6, 441.0], [66.7, 442.0], [66.8, 442.0], [66.9, 442.0], [67.0, 442.0], [67.1, 442.0], [67.2, 442.0], [67.3, 442.0], [67.4, 442.0], [67.5, 443.0], [67.6, 443.0], [67.7, 443.0], [67.8, 443.0], [67.9, 443.0], [68.0, 443.0], [68.1, 443.0], [68.2, 444.0], [68.3, 444.0], [68.4, 444.0], [68.5, 444.0], [68.6, 447.0], [68.7, 447.0], [68.8, 447.0], [68.9, 450.0], [69.0, 450.0], [69.1, 450.0], [69.2, 450.0], [69.3, 458.0], [69.4, 458.0], [69.5, 458.0], [69.6, 458.0], [69.7, 459.0], [69.8, 459.0], [69.9, 459.0], [70.0, 459.0], [70.1, 463.0], [70.2, 463.0], [70.3, 463.0], [70.4, 464.0], [70.5, 464.0], [70.6, 464.0], [70.7, 464.0], [70.8, 466.0], [70.9, 466.0], [71.0, 466.0], [71.1, 466.0], [71.2, 466.0], [71.3, 466.0], [71.4, 466.0], [71.5, 466.0], [71.6, 466.0], [71.7, 466.0], [71.8, 466.0], [71.9, 468.0], [72.0, 468.0], [72.1, 468.0], [72.2, 468.0], [72.3, 471.0], [72.4, 471.0], [72.5, 471.0], [72.6, 474.0], [72.7, 474.0], [72.8, 474.0], [72.9, 474.0], [73.0, 476.0], [73.1, 476.0], [73.2, 476.0], [73.3, 476.0], [73.4, 481.0], [73.5, 481.0], [73.6, 481.0], [73.7, 481.0], [73.8, 482.0], [73.9, 482.0], [74.0, 482.0], [74.1, 482.0], [74.2, 482.0], [74.3, 482.0], [74.4, 482.0], [74.5, 483.0], [74.6, 483.0], [74.7, 483.0], [74.8, 483.0], [74.9, 484.0], [75.0, 484.0], [75.1, 484.0], [75.2, 484.0], [75.3, 484.0], [75.4, 484.0], [75.5, 484.0], [75.6, 490.0], [75.7, 490.0], [75.8, 490.0], [75.9, 490.0], [76.0, 493.0], [76.1, 493.0], [76.2, 493.0], [76.3, 493.0], [76.4, 493.0], [76.5, 493.0], [76.6, 493.0], [76.7, 493.0], [76.8, 493.0], [76.9, 493.0], [77.0, 493.0], [77.1, 493.0], [77.2, 493.0], [77.3, 493.0], [77.4, 493.0], [77.5, 495.0], [77.6, 495.0], [77.7, 495.0], [77.8, 498.0], [77.9, 498.0], [78.0, 498.0], [78.1, 498.0], [78.2, 501.0], [78.3, 501.0], [78.4, 501.0], [78.5, 501.0], [78.6, 501.0], [78.7, 501.0], [78.8, 501.0], [78.9, 505.0], [79.0, 505.0], [79.1, 505.0], [79.2, 505.0], [79.3, 514.0], [79.4, 514.0], [79.5, 514.0], [79.6, 514.0], [79.7, 517.0], [79.8, 517.0], [79.9, 517.0], [80.0, 517.0], [80.1, 519.0], [80.2, 519.0], [80.3, 519.0], [80.4, 521.0], [80.5, 521.0], [80.6, 521.0], [80.7, 521.0], [80.8, 542.0], [80.9, 542.0], [81.0, 542.0], [81.1, 542.0], [81.2, 542.0], [81.3, 542.0], [81.4, 542.0], [81.5, 545.0], [81.6, 545.0], [81.7, 545.0], [81.8, 545.0], [81.9, 552.0], [82.0, 552.0], [82.1, 552.0], [82.2, 552.0], [82.3, 559.0], [82.4, 559.0], [82.5, 559.0], [82.6, 560.0], [82.7, 560.0], [82.8, 560.0], [82.9, 560.0], [83.0, 563.0], [83.1, 563.0], [83.2, 563.0], [83.3, 563.0], [83.4, 578.0], [83.5, 578.0], [83.6, 578.0], [83.7, 578.0], [83.8, 584.0], [83.9, 584.0], [84.0, 584.0], [84.1, 588.0], [84.2, 588.0], [84.3, 588.0], [84.4, 588.0], [84.5, 591.0], [84.6, 591.0], [84.7, 591.0], [84.8, 591.0], [84.9, 592.0], [85.0, 592.0], [85.1, 592.0], [85.2, 596.0], [85.3, 596.0], [85.4, 596.0], [85.5, 596.0], [85.6, 597.0], [85.7, 597.0], [85.8, 597.0], [85.9, 597.0], [86.0, 601.0], [86.1, 601.0], [86.2, 601.0], [86.3, 608.0], [86.4, 608.0], [86.5, 608.0], [86.6, 608.0], [86.7, 613.0], [86.8, 613.0], [86.9, 613.0], [87.0, 613.0], [87.1, 617.0], [87.2, 617.0], [87.3, 617.0], [87.4, 617.0], [87.5, 621.0], [87.6, 621.0], [87.7, 621.0], [87.8, 663.0], [87.9, 663.0], [88.0, 663.0], [88.1, 663.0], [88.2, 663.0], [88.3, 663.0], [88.4, 663.0], [88.5, 663.0], [88.6, 675.0], [88.7, 675.0], [88.8, 675.0], [88.9, 676.0], [89.0, 676.0], [89.1, 676.0], [89.2, 676.0], [89.3, 685.0], [89.4, 685.0], [89.5, 685.0], [89.6, 685.0], [89.7, 686.0], [89.8, 686.0], [89.9, 686.0], [90.0, 688.0], [90.1, 688.0], [90.2, 688.0], [90.3, 688.0], [90.4, 695.0], [90.5, 695.0], [90.6, 695.0], [90.7, 695.0], [90.8, 708.0], [90.9, 708.0], [91.0, 708.0], [91.1, 708.0], [91.2, 709.0], [91.3, 709.0], [91.4, 709.0], [91.5, 729.0], [91.6, 729.0], [91.7, 729.0], [91.8, 729.0], [91.9, 739.0], [92.0, 739.0], [92.1, 739.0], [92.2, 739.0], [92.3, 772.0], [92.4, 772.0], [92.5, 772.0], [92.6, 785.0], [92.7, 785.0], [92.8, 785.0], [92.9, 785.0], [93.0, 799.0], [93.1, 799.0], [93.2, 799.0], [93.3, 799.0], [93.4, 806.0], [93.5, 806.0], [93.6, 806.0], [93.7, 806.0], [93.8, 809.0], [93.9, 809.0], [94.0, 809.0], [94.1, 817.0], [94.2, 817.0], [94.3, 817.0], [94.4, 817.0], [94.5, 843.0], [94.6, 843.0], [94.7, 843.0], [94.8, 843.0], [94.9, 847.0], [95.0, 847.0], [95.1, 847.0], [95.2, 848.0], [95.3, 848.0], [95.4, 848.0], [95.5, 848.0], [95.6, 867.0], [95.7, 867.0], [95.8, 867.0], [95.9, 867.0], [96.0, 898.0], [96.1, 898.0], [96.2, 898.0], [96.3, 908.0], [96.4, 908.0], [96.5, 908.0], [96.6, 908.0], [96.7, 965.0], [96.8, 965.0], [96.9, 965.0], [97.0, 965.0], [97.1, 1027.0], [97.2, 1027.0], [97.3, 1027.0], [97.4, 1027.0], [97.5, 1046.0], [97.6, 1046.0], [97.7, 1046.0], [97.8, 1121.0], [97.9, 1121.0], [98.0, 1121.0], [98.1, 1121.0], [98.2, 1136.0], [98.3, 1136.0], [98.4, 1136.0], [98.5, 1136.0], [98.6, 1199.0], [98.7, 1199.0], [98.8, 1199.0], [98.9, 1217.0], [99.0, 1217.0], [99.1, 1217.0], [99.2, 1217.0], [99.3, 1242.0], [99.4, 1242.0], [99.5, 1242.0], [99.6, 1242.0], [99.7, 1246.0], [99.8, 1246.0], [99.9, 1246.0]], "isOverall": false, "label": "Search Filters", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 116.0, "series": [{"data": [[1100.0, 3.0], [1200.0, 3.0], [600.0, 13.0], [300.0, 116.0], [700.0, 7.0], [800.0, 8.0], [200.0, 29.0], [400.0, 66.0], [900.0, 2.0], [1000.0, 2.0], [500.0, 21.0]], "isOverall": false, "label": "Search Filters", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 59.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 211.0, "series": [{"data": [[0.0, 211.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 59.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.303703703703704, "minX": 1.53843798E12, "maxY": 17.303703703703704, "series": [{"data": [[1.53843798E12, 17.303703703703704]], "isOverall": false, "label": "QA https ecloud", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53843798E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 229.0, "minX": 1.0, "maxY": 460.97107438016565, "series": [{"data": [[8.0, 399.0], [2.0, 377.0], [9.0, 349.0], [10.0, 229.0], [11.0, 302.0], [12.0, 406.0], [3.0, 417.0], [13.0, 332.0], [14.0, 340.0], [15.0, 304.0], [16.0, 433.3333333333333], [4.0, 420.0], [1.0, 279.0], [17.0, 335.8571428571429], [18.0, 460.97107438016565], [5.0, 443.0], [6.0, 439.0], [7.0, 458.0]], "isOverall": false, "label": "Search Filters", "isController": false}, {"data": [[17.303703703703704, 451.3259259259262]], "isOverall": false, "label": "Search Filters-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.53843798E12, "maxY": 128061.0, "series": [{"data": [[1.53843798E12, 128061.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.53843798E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53843798E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 451.3259259259262, "minX": 1.53843798E12, "maxY": 451.3259259259262, "series": [{"data": [[1.53843798E12, 451.3259259259262]], "isOverall": false, "label": "Search Filters", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53843798E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 283.3037037037036, "minX": 1.53843798E12, "maxY": 283.3037037037036, "series": [{"data": [[1.53843798E12, 283.3037037037036]], "isOverall": false, "label": "Search Filters", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53843798E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 0.0, "minX": 1.53843798E12, "maxY": 4.9E-324, "series": [{"data": [[1.53843798E12, 0.0]], "isOverall": false, "label": "Search Filters", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53843798E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 221.0, "minX": 1.53843798E12, "maxY": 1246.0, "series": [{"data": [[1.53843798E12, 1246.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.53843798E12, 221.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.53843798E12, 687.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.53843798E12, 1224.2500000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.53843798E12, 847.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53843798E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
    data: {"result": {"minY": 391.5, "minX": 1000.0, "maxY": 428.0, "series": [{"data": [[1000.0, 391.5], [2000.0, 428.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
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
        infos.create();
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
    data: {"result": {"minY": 213.5, "minX": 1000.0, "maxY": 226.5, "series": [{"data": [[1000.0, 213.5], [2000.0, 226.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.53843798E12, "maxY": 4.5, "series": [{"data": [[1.53843798E12, 4.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53843798E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 4.5, "minX": 1.53843798E12, "maxY": 4.5, "series": [{"data": [[1.53843798E12, 4.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.53843798E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 4.5, "minX": 1.53843798E12, "maxY": 4.5, "series": [{"data": [[1.53843798E12, 4.5]], "isOverall": false, "label": "Search Filters-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53843798E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
        data: {"result": {"minY": 4.5, "minX": 1.53843798E12, "maxY": 4.5, "series": [{"data": [[1.53843798E12, 4.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.53843798E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, -25200000);
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
    } else if ( id == "responseTimePercentilesOverTime"){
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
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

