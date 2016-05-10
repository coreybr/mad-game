window.onload = function() {
    labelContainer = document.getElementById("container--labels");
    formContainer = document.getElementById("container--form");
        story = "<p>[Company] officially unveiled its latest device, and it's huge: meet the [Product], rocking a whopping [Number 1]-inch display. \
The company has been teasing its new [Product] for a while now, dropping images and videos to boost the hype before the big unveiling. We already knew it would have a massive [Number 1]-inch screen, but let's see what else it brings to the table. </p>\
<p>First off, [Company]'s Global Vice President [Full Name] claims that despite the huge display, the new [Company] [Product] is still \"extremely [Adjective 1].\" The screen is housed in a [Adjective 2] [Material] unibody, which makes the [Product] look stylish and premium. Under the hood, \
the [Company] [Product] packs a [Number 2]-core processor, with [Number 3] GB of storage.</p>\
<p>Processing power aside, other [Company] [Product] specifications include a [Noun 1] [Verb 1]er and a [Adjective 3] camera, along with innovative software that allows the user to [Verb 2] their [Plural Noun] with friends. Color options include [Color 1], [Color 2] and [Noun 3] [Color 3].</p>\
<p>As expected, the [Company] [Product] comes at an affordable price, costing only [Number 4] dollars without a contract, or [Number 5] per month on-contract. \
For more information on the [Company] [Product] specifications or to get a better look at the device's design, head over to [Company]'s website and take a look.</p>";
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