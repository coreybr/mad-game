window.onload = function() {
    labelContainer = document.getElementById("container--labels");
    formContainer = document.getElementById("container--form");
        story = "<p>[Company] [Adverb] unveiled its latest device, and it's huge: meet the new [Device], rocking a whopping [Number 1]-inch display. \
The company has been teasing its new [Device] for a while now, dropping images and videos to boost the hype before the big unveiling. We already knew about the [Adjective 4] screen, but let's see what else it brings to the table. </p>\
<p>First off, [Company]'s Global Vice President [Full Name] claims that despite the huge display, the new [Company] [Device] is still \"extremely [Adjective 1].\" The screen is housed in a [Adjective 2] [Material] unibody, which makes the [Device] look stylish and premium.</p>\
<p>Looks aside, other [Company] [Device] specifications include a [Noun 1] [Verb 1]er and the company's new [Adjective 3] camera, along with innovative software that allows the user to [Verb 2] their [Plural Noun] with friends. Color options include [Color 1], [Color 2] and [Noun 2] [Color 3].</p>\
<p>As expected, the [Company] [Device] comes at a [Adjective 5] price, costing only $[Number 2] per month on-contract. \
For more information on the [Company] [Device] specifications or to get a better look at the device's design, head over to [Company]'s website and take a look.</p>";
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
    form.appendChild(submit);
    formContainer.appendChild(form);
};

//Submit routine
function submitWords() {
    event.preventDefault();
    var innerContainer = document.getElementById("container--inner");
    for (var i=0; i < inputFields.length; i++) {
        console.log ("i: " + i);
        console.log (inputFields[i].name);
        console.log (inputFields[i].value);
        story = story.replace(new RegExp("\\[" + inputFields[i].name + "\\]", 'g'), inputFields[i].value);
    }
            console.log ("fields: " + inputFields.length);
    labelContainer.innerHTML = "";
    formContainer.innerHTML = "";
    innerContainer.innerHTML = story;
}