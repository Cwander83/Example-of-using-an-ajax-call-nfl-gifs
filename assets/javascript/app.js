 //the api key from giphy====wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA

 //array of teams to start the 10 buttons with
 var nflTeams = ["cleveland browns", "seattle seahawks", "miami dolphins", "new york giants", "oakland raiders", "detroit lions", "buffalo bills", "houstan texans", "dallas cowboys", "new york jets"];
 // var for the queryURL link
 var queryURL = "https://api.giphy.com/v1/gifs/search";
 var result;
 var rating;
 var p;

 //render the 10 button
 nflTeams.forEach(renderButton);
 //function connecting array to each button
 function renderButton(ele,index,myArray) {
     myArray = myArray[index];
    var a = $("<button>");
    a.addClass("teams");
    
    a.attr("data-nfl", nflTeams[myArray])
    a.text(ele)
    $("#nflbuttons").append(a);
     console.log(index + " element: " + ele);
 }

 //on click function for gifs to load on page
 function displayGifs() {

     var nfl = $(this).attr("data-nfl")

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
             result = response.data;
             // clearing out the id nfl teams before clicked on again
             $("#nfl-teams").empty();
             //a loop to go through the array to show rating
             for (var i = 0; i < result.length; i++) {
                 // a new div to hold the gifs <img>
                 gifDiv = $("<div class='gifdiv'>");
                 // how we got the rating for each image
                 rating = result[i].rating;
                 //creating the text for the rating of each img
                 p = $("<p>").text("Rating: " + rating);
                 //creating a <img> for the gifs
                 image = $("<img class='images'>");
                 //adding attribute for the source of the image 
                 image.attr("src", result[i].images.fixed_height_small.url);
                 //connecting the image and ratings to the new div
                 gifDiv.prepend(p);
                 gifDiv.prepend(image);
                 // sending the new div to the empty div nfl-teams
                 $("#nfl-teams").prepend(gifDiv);

             }

         });
 }
 console.log(this + "this");
 //click on event for displaying the gifs
 $("button").on("click", displayGifs);
    

 