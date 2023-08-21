function readTextFile(file, callback){
    var rawFile=new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file, true);
    rawFile.onreadystatechange=function(){
        if(rawFile.readyState===4 && rawFile.status=="200"){
            callback(rawFile.responseText);
        }
        else{
            callback('',rawFile.status);
        }
    }
    rawFile.send(null);
}

readTextFile("/OTT_Task/tv_show.json", function(text){
    var data = JSON.parse(text);
    console.log(data)
    data.forEach(element => {
        return element;
    }).map((element)=>{
        console.log(element.id);
        var name = element.name;
        var airDate = element.airdate;
        var airTime = element.airtime;
        var img = element.img;
        var rating = element.rating.average;
        var runTime = element.runtime;
        var season = element.season;
        var type = element.type;
        var url = element.url;
        var id = element.id;
    });
    
})
