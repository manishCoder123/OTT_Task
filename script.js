function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // 
                console.log(allText);
            }
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
