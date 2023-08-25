function readTextFile(file, textListner) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                textListner(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("/OTT_Task/tv_show.json", function (text) {
    var data = JSON.parse(text);
    // console.log(data)

    // crete array
    var tv_show_list = [];
    var flag = 1;
    data.slice(1, 10).forEach(element => {
        addCard(element, flag);
        flag++;
    });
    
});



function addCard(element, flag) {
    var name = element.name;
    var airDate = element.airdate;
    var airTime = element.airtime;
    var runTime = element.runtime;
    var season = element.season;
    var type = element.type;
    var url = element.url;
    var id = element.id;
    var img = element._embedded.show.image.medium;

    var tv_show = {
        "Name": name,
        "Air_Date": airDate,
        "Air_Time": airTime,
        "Run_Time": runTime,
        "Season": season,
        "Type": type,
        "URL": url,
        "ID": id,
        "Image": img
    };
    
    var node = document.getElementById("node");
    
    var clone = node.cloneNode(true);
    clone.setAttribute("id",  getCurrentIndex(flag));
    document.getElementById("card-div").appendChild(clone);

    console.log("tv_show.Image-->" + getCurrentIndex(flag), tv_show.Image)
    
    if (tv_show.Image != null) {
        document.querySelector(getCurrentIndex(flag) + " > #img").src = tv_show.Image;

    } 
    // else {
    //     document.querySelector(getCurrentIndex(flag) + " > #img").src = "https://nwamotherlode.com/wp-content/uploads/2011/06/movie-graphic-placeholder.jpg";
    // }
}

function getCurrentIndex(index) {
    return index == 0 ? "#node" : ("#node-" + index);
}




// Other way to fetch Jason Data

// fetch("tv_show.json").then(apidata=>{
//     return apidata.json()
// }).then((jsondata) => {
//     jsondata.map((element)=>{
//         id = element.id;
//         let img = document.createElement("img");
//         img.src =element._embedded.show.image.medium;
//         document.getElementById("card-div").appendChild(img);
//         console.log("json", id)
//     });
// });
