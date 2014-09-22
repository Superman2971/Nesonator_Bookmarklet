// Prefix all JavaScript code with the javascript URI.
// Browsers have implemented this specific prefix so that
// the content followed by it can be treated, and parsed,
// as proper JavaScript code.
javascript: (function() {

    // set location of the audio file
    var url = "//s3-us-west-2.amazonaws.com/bkmrklt/harlem_shake/Nelson_Haha.wav";
    // Add audio and event listener
    function addAudio() {
        console.log("ran addAudio");
        var audio = document.createElement("audio");
        audio.src = url;
        audio.loop = false;
        // Added event listener to relocate to Simpsons after laugh
        audio.addEventListener("ended", function() {
            // similar behavior as clicking on a link
            window.location.href = "http://www.thesimpsons.com/";
        }, true);
        // Appending the audio element to the body
        document.body.appendChild(audio);
        // Play the laugh
        audio.play()
    }

    // function a tag need

    function click_function(){
        console.log("ran click_function");
        // Attach audio with event listener
        addAudio();
    }

    // Set a_tags to all a tags in page
    // loop through and remove the hrefs
    function remove_href() {
        console.log("ran remove_href");
        var a_tags = tag_array;
        for (var t = 0; t < a_tags.length; t++) {
            console.log("loop remove_href");
            a_tags[t].removeAttribute("href");
            a_tags[t].style.cursor = "pointer";
            a_tags[t].addEventListener("click", click_function, false);
            console.log("end of loop remove_href");
        }
    }

    // Find all the a tags
    // Loop through ALL element of the page
    // If you find an a tag push it into the D array
    var tag_find = document.getElementsByTagName("a"),
        tag_length = tag_find.length,
        counter;
    var tag_array = [];
    for (counter = 0; counter < tag_length; counter++) {
        tag_array.push(tag_find[counter])
    }

    // click_function();
    remove_href();

})()