function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
         let userRating = document.querySelector("input[name=firstRating]:checked");
         if (userRating.value === "1") {
             alert("what did I do to hurt you?");
         } else if (userRating.value === "2"){
             alert("it's okay, not everyone has taste ¯\_(ツ)_/¯");
         } else if (userRating.value === "3"){
             alert("i'm not mid, you're mid");
         } else if (userRating.value === "4"){
             alert("Not too bad, eh? thank you :)");
         } else if (userRating.value === "5"){
             alert("Fantastic! I'm so glad you liked the cartoon!!! :D");
             form.action = "second-animation.html";
         } else if (userRating.value === ""){
             alert("Please give the video a rating...");
             event.preventDefault();
         };
    });
 });

  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
         let userRating = document.querySelector("input[name=secondRating]:checked");
         if (userRating.value === "1") {
             alert("Here's a video you might like better 🙃");
             form.action = "https://youtu.be/3YltYCrPZos";
         } else if (userRating.value === "2"){
             alert("I think I found you on the internet 😮");
             form.action = "https://en.wikipedia.org/wiki/Clown";
         } else if (userRating.value === "3"){
             alert("Yeah, this honestly is just kinda okay. It was senior year and I was working on like 3 other animations at the time so I couldn't crank out masterpieces left and right, ya know? Here's a pic of a cute cat for your honesty:");
             form.action = "cute-cat.jpg";
         } else if (userRating.value === "4"){
             alert("Thank you! I was going for something similar to the following video:");
             form.action = "https://youtu.be/dNJdJIwCF_Y";
         } else if (userRating.value === "5"){
             alert("Fantastic! I'm so glad you liked the cartoon!!! :D");
             form.action = "second-animation.html";
         } else if (userRating.value === ""){
             alert("Please give the video a rating...");
             event.preventDefault();
         };
    });
 });