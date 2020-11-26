### functional-programming & Frontend Data
functional-programming - Frontend Data 20/21  
Student name: Nathan Neelis  
:earth_americas: [live website](https://nathanneelis.github.io/frontend-applications/)

![concept](https://user-images.githubusercontent.com/55492381/100350696-8ed35780-2fea-11eb-9783-71df85106a75.gif) 


### Assignment
For the Volkskrant we are taking a look at the RDW datasets to find interesting insights for a potential article about the car in the city. The subject is "the car in the city" and the datasets contains all kind of information about parking. But we're free to explore other data as well that has to do with the car in the city.

### Intro
The cities become busier and busier every year. In the city centre areas of the cities is hardly any room left for cars. This is the reason most city centers can be reached with public transport. But public transport can be very expensive if you travel with multiple persons, especially for long distances. But parking your car near the city center can be very expensive as well. There are also people that want to travel by train, but cannot park their car at the train station. Take for example Amsterdam Central station, it's nearly impossible to park your car near and if you are able to find a parking garage, you probably pay a high amount.   
  
The solution for this is the P+R parking areas. Often there is a special offer when you park your car in a P+R and travel the last bit into the city center with public transport. This saves you a high parking bill and the time of searching for a viable parking spot near the city.

### Research questions
**Main research question: Which city uses the Park and Ride parking areas the best to keep cars from their city center?**   
**Sub question 1:** Which Randstad cities facilitates the Park and Ride concept the best?  
**Sub question 2:** How many facilities are there?  
**Sub question 3:** What is the capicity?  
**Sub question 4:** How much do our major cities (Randstad) use Park & Ride falicities?

### Concept
This is an informative website that gives insights in the gathered data about the "car in the city".  
The area I dived into is the Park & Ride facilities and their capacity.  
In this concept you will be able to get answers on the research questions above.  
By visualizing the data into visuals like a bar chart, or an input depending information block it is easy to see which city does use Park & Ride facilities a lot and which do less. It also gives the oppertunity to really dive into a city of your interest.  
  
### Features
#### Search information on a city of your interest 
By using the input you can find out how many Park & Ride facilities a city of your interests has.  
To the left are the total amount of Park & Ride facilities and the total capicity in The Netherlands according to the NPR open dataset.  
![input](https://user-images.githubusercontent.com/55492381/100352468-4bc6b380-2fed-11eb-92bd-16ff9693c996.gif)  

#### A highlighted on the Randstad in a bar chart
In the bar chart the Randstad is highlighted because it are the major cities in The Netherlands. And possibly have the most use of keeping the cars out of the inner city.  
![barchart](https://user-images.githubusercontent.com/55492381/100353266-8e3cc000-2fee-11eb-90cb-ad789fbebe52.gif)


### Datasets
[NPR open dataset: parking data v2](https://npropendata.rdw.nl/parkingdata/v2/)  
This dataset is a pack of URL's to specific datasets about each parking area.  
I filtered this dataset on all parking areas that had "P+R" in their name.  
These were 405 results from which I fetched the data and saved it into a [Github Gist](https://gist.githubusercontent.com/NathanNeelis/b28e16c0433b12da6bc716b276901ae9/raw/402754fa45924af802d06c5672043153bb990d5b/NPR_park_and_ride).  
The interesting variables in these specific datasets are:  
* Description - _Name of the parking area_    
* Accespoint address city - _city of the parking area_  
* Operator name - _Also name of the city, in case the accespoint data is invalid_  
* Specifications capacity - _Amount of parking spaces_  
  
I also went looking for information on tourists. It might not be an exact dataset, but since I used this data in my conclusion I wanted to mention this data source here as well.  
[NBTC](https://dashboard.nbtc.nl/dashboard/staat-van-bestemming-nl/bezoekers)

### Getting started

1. Create your git repo  
    ```bash
    mkdir foldername  
    cd "/foldername"  
    git init  
    ```  

2. Clone this repo  
    ```bash
    git clone https://github.com/NathanNeelis/frontend-data.git
    ```   

3. install packages  
    ```bash
    npm install
    ```  

4. run the webpage at http://localhost:3000/
    ```bash
    npm start
    ```  

### Aditional packages
[NPM react counter](https://www.npmjs.com/package/react-countup)  
[GH pages](https://www.npmjs.com/package/gh-pages)  

### License
[MIT License](https://github.com/NathanNeelis/frontend-applications/blob/master/LICENSE)   

### Resources & acknowledgements

**Examples for creating my bar chart**  
[Currans tutorial](https://vizhub.com/curran/a44b38541b6e47a4afdd2dfe67a302c5)  
[Laurens live coding example](https://vizhub.com/Razpudding/c2a9c9b4fde84816931c404951c79873)  
   

**Data sets**   
[RDW open data](https://opendata.rdw.nl)  
[NS API](https://apiportal.ns.nl/)  
[NPR open data](https://npropendata.rdw.nl/parkingdata/v2/)  
[NBTC](https://dashboard.nbtc.nl/dashboard/staat-van-bestemming-nl/bezoekers)  

**Datavisulazation**
[Book: Data Visualisation](https://www.bookdepository.com/Data-Visualisation-Andy-Kirk/9781526468925) Andy Kirk  
  
**Code resources**  
[String to numbers](https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers) Stackoverflow    
[Using replace method 1](https://stackoverflow.com/questions/953311/replace-string-in-javascript-array) Stackoverflow  
[Using replace method 2](https://stackoverflow.com/questions/7990879/how-to-combine-str-replace-expressions-in-javascript) Stackoverflow  
[Using replace method 3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)Developer mozilla  
[Using hex color codes](https://htmlcolorcodes.com/color-names/) Html color codes  
[Using charAt](https://github.com/marcoFijan/functional-programming/blob/12ac7c24a5239bbb07b15b4d18ad67857d87895d/EnqueteData/index.js#L64-L69) Student Marco Fijan  
[Using fetch headers](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) developer mozilla  
[Learning NS API](https://github.com/aaraar/web-app-from-scratch-1920/blob/188a235e690a3e0963b1eac0907f89bcbd2827a8/src/Api.ts#L61-L81) Bas Aaraar 19/20   
[D3 update](https://vizhub.com/Razpudding/c2a9c9b4fde84816931c404951c79873) Laurens Aarnoudse  
[Checkbox Styling](https://github.com/Godsont/Custom-Checkbox) Godsont  
[Merge duplicates in array of objects](https://stackoverflow.com/questions/38294781/how-to-merge-duplicates-in-an-array-of-objects-and-sum-a-specific-property) Nina Scholz  
[Merge duplicates in array of objects](https://stackoverflow.com/questions/60036060/combine-object-array-if-same-key-value-in-javascript) Kobe  
[Changing not existing values](https://stackoverflow.com/questions/47870887/how-to-fill-in-missing-keys-in-an-array-of-objects) user184994  
[Creating objects from different arrays](https://stackoverflow.com/questions/40539591/how-to-create-an-array-of-objects-from-multiple-arrays) Zack Tanner  
[Remove duplicates](https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript) Eydrian  
[Transitions from bottom to top](https://stackoverflow.com/questions/36126004/height-transitions-go-from-top-down-rather-than-from-bottom-up-in-d3) Harry Vane  
[CORS PLUGIN](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) Victor Boucher  
[Remove object from array](https://stackoverflow.com/questions/51367551/how-to-remove-object-from-array-if-property-in-object-do-not-exist) mickl  
[Promise all](https://vizhub.com/Razpudding/781fc8abc97443919613184546720ab0?edit=files&file=index.js) Laurens  
[FS writing json file](https://dlo.mijnhva.nl/d2l/ext/rp/192600/lti/framedlaunch/a44d697c-b552-4a8c-b5e7-12fe6b8d704a) Rijk  
[FS writing json file](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) NodeJS.org  
[selecting checkbox in D3](https://bl.ocks.org/johnnygizmo/3d593d3bf631e102a2dbee64f62d9de4) Johnny Matthews  
[background image](https://stackoverflow.com/questions/39195687/setting-a-backgroundimage-with-react-inline-styles)  
[Fetch data from api in React](https://www.youtube.com/watch?v=T3Px88x_PsA)  
[Fetch data with useEffect](https://www.youtube.com/watch?v=k0WnY0Hqe5c)
[Counter](https://codepen.io/bradtraversy/pen/poJwqOK)  
[Local Storage](https://vizhub.com/Razpudding/2154ed6b877c46b0866b04b46db46409?edit=files&file=index.js) Laurens  
[React documentation](https://reactjs.org/docs/getting-started.html)  

**API resources**  
[Learning NS API](https://apiportal.ns.nl/startersguide?_ga=2.32115260.384544656.1604054320-687691016.1603727685) NS startersguide  
[TomTom API doc](https://developer.tomtom.com/on-street-parking) TomTom  
[RDW API doc](https://www.rdw.nl/over-rdw/dienstverlening/open-data/handleidingen) RDW  
[NPR open data](https://npropendata.rdw.nl/parkingdata/v2/) NPR  
