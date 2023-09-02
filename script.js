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

    data.slice(1, 18).forEach(element => {
        addCard(element, flag);
        tvAddCard(element, flag);
        trendAddCard(element, flag);
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

    var node = document.getElementById("card-div");
    node.insertAdjacentHTML("beforeend",
        `<div class="card item slide" id="node_` + flag + `">` +
        `<img src="" alt="Animals" id="img">` +
        `</div>`);

    if (tv_show.Image != null) {
        document.querySelector(getCurrentIndex(flag) + " > #img").src = tv_show.Image;

    }
    // else {
    //     document.querySelector(getCurrentIndex(flag) + " > #img").src = "https://nwamotherlode.com/wp-content/uploads/2011/06/movie-graphic-placeholder.jpg";
    // }
}



function getCurrentIndex(index) {
    return index == 0 ? "#node_" : ("#node_" + index);
}


function tvAddCard(element, flag){
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
    var tvnode = document.getElementById("tvCard-div");
    tvnode.insertAdjacentHTML("beforeend", `<div class="card item slide" id="node1_` + flag + `">` +
    `<img src="" alt="Animals" id="tvimg">` +
    `</div>`);

    
    if (tv_show.Image != null) {
        document.querySelector(getTvCurrentIndex(flag) + " > #tvimg").src = tv_show.Image;
    }

}

function getTvCurrentIndex(index){
    return index == 0 ? "#node1_" : ("#node1_" + index);
}



function trendAddCard(element, flag){
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
    trendnode = document.getElementById("trendCard-div");
    trendnode.insertAdjacentHTML("beforeend", `<div class="card item slide" id ="node2_` + flag + `">` +
    `<img src="", alt="", id="trendimg">` +
    `</div>`);

    if((tv_show.Image != null)){
        document.querySelector(getTrendIndex(flag) + "> #trendimg").src = tv_show.Image;
    }
}


function getTrendIndex(index){
    return index == 0 ? "#node2_" : ("#node2_" + index);
}












// let slideImage = document.querySelectorAll(".slide"),
//     arrowLeft = document.querySelector("#arrow-left"),
//     arrowRight = document.querySelector("#arrow-right"),
//     current = 0;

// Clear all images
// function reset() {
//     for (let i = 0; i < slideImage.length; i++) {
//         slideImage[i].style.display = "none";
//     }
// }

// Initial slide
// function startSlide() {
//     reset();
//     slideImage[0].style.display = "block";
// }

// Show previous
// function slideLeft(){
//     reset();
//     slideImage[current-1].style.display = "block";
//     current--;
// }

// Show next
// function slideRight(){
//     reset();
//     slideImage[current+1].style.display = "block";
//     current++;
// }

// Left arrow click
// arrowLeft.addEventListener("click", function(){
//     if (current === 0){
//         current = slideImage.length;
//     }
//     slideLeft();
// });

// Right arrow click
// arrowRight.addEventListener("click", function(){
//     if (current === slideImage.length - 1){
//         current = -1;
//     }
//     slideRight();
// })

// startSlide();




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


