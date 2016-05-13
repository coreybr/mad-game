window.onload = function() {
    formContainer = document.getElementById("container--form");
    var selectStory = "<h3>Please select a story</h3> \
                        <ul>\
                        <li><a href=\"javascript:loadForm(new_device);\" class =\"hvr-grow\">New Device Unveiled</a></li>\
                        <li><a href=\"javascript:loadForm(job_opening);\" class =\"hvr-grow\">Unusual Job Opening</a></li>\
                        </ul>"  
    formContainer.innerHTML = selectStory;
    
//Stories
    
    new_device = "<p>Today in [Location], [Company] [Adverb] unveiled its latest device: meet their new [Device 1], rocking a whopping [Number 1]-inch display. \
The company has been teasing its new [Device 1] for a while now, dropping images and videos to boost the hype before the big unveiling. We already knew about the [Adjective 4] screen, but let's see what else it brings to the table. </p>\
<p>First off, [Company]'s Global Vice President [Full Name] claims that despite the huge display, the new [Company] [Device 1] is still \"extremely [Adjective 1].\" The screen is housed in a [Adjective 2] [Material] unibody, which makes the [Device 1] look stylish and premium.</p>\
<p>Looks aside, other [Company] [Device 1] specifications include a [Verb -ing] [Noun 1] and the company's new [Adjective 3] [Device 2], along with innovative software that allows the user to [Verb] their [Plural Noun] with friends. Color options include [Color 1], [Color 2], and [Noun 2] [Color 3].</p>\
<p>As expected, the [Company] [Device 1] comes at a [Adjective 5] price, costing $[Number 2] per month on-contract. \
For more information on the [Company] [Device 1] specifications or to get a better look at the device's design, head over to [Company]'s website and take a look.</p>";
    
    job_opening = "<p>[Location 1] residents who are passionate about [Verb -ing 1], autonomous [Machine]s, and making money are looking at a job opportunity from [Company].</p>\
<p>The company is recruiting \"[Machine] safety specialists\" who have to watch the self-[Verb -ing 1] [Machine]s, ready to [Verb 1] should anything go south. The move comes as [Company] adds more [Machine]s to its fleet [Verb -ing 2] the [Plural Noun] of [Location 1]. The company offers $[Number] per hour to the brave souls who will venture in the monitoring of the autonomous [Machine]s. New hires will work under 12 to 24 [Unit of time] contracts that come with a non-disclosure agreement.</p>\
<p>At the beginning of April 2016, [Company] proudly announced that its autonomous  [Machine] program expanded to [Location 1]. The company is eager to discover how the fleet will function in [Adjective 1] conditions. [Company] has already tested its autonomous [Machine]s in [Location 2], where it saw how they fared in [Adjective 2] weather.</p>";     
};

function loadForm(a_story) {
    formContainer.innerHTML = "";
    story = a_story;
    labelContainer = document.getElementById("container--labels");
    var words = story.match(/([^[\]]+(?=]))(?!.*\1)/g);
    words.sort();
    
    //Generate form
    var form = document.createElement("form");
    form.setAttribute('onsubmit',"submitWords()");
    
    //Generate input fields
    inputFields = [];
    for (var i=0; i < words.length; i++) {
        // Append a node with a random text
        labelContainer.appendChild(document.createTextNode(words[i]));
        labelContainer.appendChild(document.createElement("br"));
        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.setAttribute('type', 'text');
        input.setAttribute('name', words[i]);
        input.required = true;
        inputFields.push (input);
        form.appendChild(input);
        // Append a line break 
        form.appendChild(document.createElement("br"));
    };
    //Generate submit button
    var submit = document.createElement("input");
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.setAttribute('class', 'hvr-grow-shadow');
    form.appendChild(submit);
    formContainer.appendChild(form);
};

//Submit routine
function submitWords() {
    var inputContainer = document.getElementById("container--input");
    event.preventDefault();
    for (var i=0; i < inputFields.length; i++) {
        story = story.replace(new RegExp("\\[" + inputFields[i].name + "\\]", 'g'), inputFields[i].value);
    }
    labelContainer.innerHTML = "";
    formContainer.innerHTML = "";
    inputContainer.innerHTML = story;
}