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
             alert("Hot-diggity!! Thank you!!! I'm so glad you liked it!! :D");
             form.action = "third-animation.html";
         } else if (userRating.value === ""){
             alert("Please give the video a rating...");
             event.preventDefault();
         };
    });
 });

 window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
         let userRating = document.querySelector("input[name=thirdRating]:checked");
         if (userRating.value === "1") {
             alert("Bingus");
             form.action = "index.html";
         } else if (userRating.value === "2"){
             alert("To be honest, I refuse to watch this video myself again. The cringe is WAY too powerful. Do yourself a favor and clense your pallet with some lofi");
             form.action = "https://youtu.be/ZcJBCbRLN-8";
         } else if (userRating.value === "3"){
             alert("I'm running out of fun ideas for alerts, so I'm just going to send you to the About page");
             form.action = "about.html";
         } else if (userRating.value === "4"){
             alert("That's very kind of you, but we both know you're lying :P Here's some other old stuff I made!");
             form.action = "https://youtu.be/DJgfp2zWE2Q";
         } else if (userRating.value === "5"){
             alert("Man, according to you, I can do no wrong. Want to support me on Patreon?");
             form.action = "https://www.patreon.com/ElvicCartoons";
         } else if (userRating.value === ""){
             alert("Please give the video a rating...");
             event.preventDefault();
         };
    });
 });