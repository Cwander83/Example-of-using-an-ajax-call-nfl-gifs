//global vars to use

//on click function for gifs to load on page
$("button").on("click", function () {
    //
    var nfl = $(this).attr("data-nfl")

    //the api key from giphy
    //====wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA
    var queryURL = "https://api.giphy.com/v1/gifs/search";

    //the ajax connector
    $.ajax({
            url: queryURL,
            method: 'GET',
            data: {
                q: nfl,
                api_key: "wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA",
                limit: 9,
            }
        })
        .done(function (response) {
            console.log(response);
            var result = response.data;
            

            $("#nfl-teams").empty();

            for (var i = 0; i < result.length; i++){

                gifDiv = $("<div class='gifdiv'>");

                var rating = result[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var image = $("<img>");

                image.attr("src", result[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(image);

                $("#nfl-teams").prepend(gifDiv);

            }

        });
        console.log(this);
});