 //the api key from giphy====wdOCXpHvWDf9a3U3UbXR23FkuRdyHXpA

 //array of teams to start the 10 buttons with
 var nflTeams = ["cleveland browns", "seattle seahawks", "miami dolphins", "new york giants", "oakland raiders", "detroit lions", "buffalo bills", "houstan texans", "dallas cowboys", "new york jets"];
 console.log(nflTeams);
 //var link for queryURL link
var queryURL = "https://api.giphy.com/v1/gifs/search";
 //render the 10 button
 nflTeams.forEach(renderButton);
 //function connecting array to each button
 function renderButton(ele, index, myArray) {

     //making local var for array length
     myArray = myArray[index];
     //creating new buttons for the array 
     var a = $("<button>");
     //adding a class to new buttons
     a.addClass("teams");

     //connecting the data attr to the array
     a.attr("data-nfl", nflTeams[myArray]);
     //adding the new of the string to the button
     a.text(ele);

     //connecting the js to html for each button
     $("#nflbuttons").append(a);
     console.log(index + " element: " + ele);

 }

 //function for gifs to load on page
 function displayGifs() {

     nfl = $(this).attr("data-nfl");
     
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
             console.log(response.data);

             var result = response.data;
             // clearing out the id nfl teams before clicked on again
             $("#nfl-teams").empty();
             //a loop to go through the array to show rating
             for (var i = 0; i < result.length; i++) {
                 // a new div to hold the gifs <img>
                 var gifDiv = $("<div class='gifdiv'>");
                 // how we got the rating for each image
                 var rating = result[i].rating;
                 //creating the text for the rating of each img
                 var p = $("<p>").text("Rating: " + rating);
                 //creating a <img> for the gifs
                 var image = $("<img class='images'>");
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
 $("button").on("click", ".teams", displayGifs);
 //click on event for displaying the gifs

 //function that adds new button
 /*$("#submitbutton").on("click", function (event) {

     var nfl = $("#input").val().trim();

     $("#input").val("").focus();

     nlfTeams.push(nfl);

     renderButton();
 })
 $("#nflbuttons").on ("click", ".teams", displayGifs);

 renderButton();

 console.log();*/