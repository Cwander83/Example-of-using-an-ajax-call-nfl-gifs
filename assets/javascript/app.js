//global vars to use

//on click function for gifs to load on page
$("button").on("click", function () {
    //
    var nfl = $(this).attr("data-nfl")

    //the api key from giphy
    //====wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA
    var queryURL = "https://api.giphy.com/v1/gifs/search";

    //the ajax connector for gif buttons
    $.ajax({
            url: queryURL,
            method: 'GET',
            data: {
                q: nfl,
                api_key: "wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA",
                limit: 10,
            }
        })
        .done(function (response) {
            console.log(response);
            var result = response.data;
            
            // clearing out the id nfl teams before clicked on again
            $("#nfl-teams").empty();
            //a loop to go through the array to show rating
            for (var i = 0; i < result.length; i++){
                // a new div to hold the gifs <img>
                gifDiv = $("<div class='gifdiv'>");
                // how we got the rating for each image
                var rating = result[i].rating;
                //creating the text for the rating of each img
                var p = $("<p>").text("Rating: " + rating);
                //creating a <img> for the gifs
                var image = $("<img class='images'>");
                //adding attribute for the source of the image 
                image.attr("src", result[i].images.fixed_height_small.url);
                //connecting the image and ratings to the 
                gifDiv.prepend(p);
                gifDiv.prepend(image);

                $("#nfl-teams").prepend(gifDiv);

            }

        });
        console.log(this);
});