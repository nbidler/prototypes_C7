//Prototype controllers

//Example
app.controller('exampleController', function(){

    this.title = 'Example Prototype';
    this.description = "In this example we are going to walk through the process of working on a new prototype and the set of instructions that go with it.The instructions below are used for video recording reasons and are not used within the curriculum or being graded by the instructors."
    this.branch = "html_ex";
    this.instructType = 'A';

    this.links = {
        Reading: {
            'Example Reading 1': 'http://www.w3schools.com/html/default.asp',
            'Example Reading 2': 'http://www.w3schools.com/html/default.asp'
        },
        Presentation: {
            'Example Slides 1': '#Example'
        },
        Video: {
            'Example Prototype Video': '#Example'
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ul class='left-border'><li><h4><a href=''>Watch This Video First</a></h4></li><li>This prototype is for example purposes only</li><li><b>DO NOT</b> actually complete this prototype</li><li>Only watch the video</li></ul>"
        },
        'Feature Set 1 - HTML Basics': {
            html: "<ol class='left-border'><li>Create a html file inside the example folder<ol class='nested-1'><li>Insert the basic HTML structure tags (html, head, body)<ul><li><i>Also know as a HTML skeleton</i></li></ul></li></ol></li><li>Add a header and <code>h1</code> tag with the text: <code>This is a test header</code></li><li>Add 5 content sections inside the appropriate tag to make a paragraph<ol class='nested-1'><li>inside the content sections add <i>Lorem Ipsum</i> text from here - <a href='http://www.lipsum.com/feed/html' target='_blank'>http://www.lipsum.com/feed/html</a><ul><li><a href='http://www.lipsum.com/' target='_blank'>What is Lorem Ipsum</a></li></ul></li></ol></li></ol>"
        },
        'Feature Set 2 - Basic Styling': {
            html: "<ol class='left-border'><li>Make the font size of the h1 tag equal to 28 pixels</li><li>Add a class: <code>test-class</code> to the content sections</li><li>Italicize the font of the first paragraph tag</li></ol>"
        }
    }
});

//html_fundamentals_1
app.controller('htmlFund1Controller', function(){

    this.title = 'HTML - Elements, Attributes and Comments';
    this.description = 'This is the first prototype and will be covering some basic HTML skills including elements, attributes and comments.';
    this.branch = 'html_f1';
    this.instructType = 'A';

    this.links = {
        Presentation: {
            'slides 1': 'https://slides1.com',
            'slides 2': 'https://slides2.com'
        },
        Video: {
            'video 1': 'https://video1.com',
            'video 2': 'https://video2.com'
        }
    };

    this.features = {
        'Feature Set 1 - It begins': {
            html: "<ol class='left-border'><li>In PHP Storm:<ol class='nested-1'><li>Expand the lfz folder, if you haven't already<br><img src='assets/images/prototypes/html-fundamentals-1/1.png' alt=''></li><li>Go into your prototypes directory, then into your html_fundamentals_1 folder</li><li>Right click on the html_fundamentals_1 folder, click on \"new\", then on \"file\"<br> <img src='assets/images/prototypes/html-fundamentals-1/2.png' alt=''></li><li>Enter the name of the file: <b>index.html</b><br><img src='assets/images/prototypes/html-fundamentals-1/3.png' alt=''></li><li>Click <span class='label label-info'>OK</span></li></ol></li><li>Create a basic HTML skeleton, including:<ul><li>DOCTYPE</li><li>html</li><li>head</li><li>body</li></ul></li> <li>Test your output:<ol class='nested-1'><li>Open a browser (preferably Chrome)</li><li>In the URL (not the search bar) type <code>localhost:8888/lfz</code>. If your MAMP port is not 8888, enter the port appropriate for your system</li><li>Navigate through the displayed links to get to your prototypes/html_fundamentals_1 folder</li><li>Your index page will now display</li> <li><b>It will be blank</b></li></ol></li><li>Add content<ol class='nested-1'><li>In PHP Storm:<ol class='nested-2'><li>Between the <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code> tags add: <code>Hello, I am [your name]</code><ul><li>Don't put the quotes</li><li>Replace the <b>[your name]</b> with your name, without the brackets</li></ul></li></ol></li></ol></li>  <li>Check your code<ul><li>In Chrome<ol class='nested-1'><li>Refresh the page</li>  <li>See if your message appears <br><img src='assets/images/prototypes/html-fundamentals-1/4.png' alt=''> </li></ol></li></ul></li></ol>"
        },
        'Feature Set 2 - About Me': {
            html: "<ol class='left-border'><li>Create an opening and a closing <code>h1</code> tag like: <code>&lt;h1&gt; &lt;/h1&gt;</code><ol class='nested-1'><li>In between your <code>h1</code> tags add the following text: <code>Hello World</code></li></ol></li><li>Add a paragraph tag, and fill it with a short description about your past career. Don't forget the closing <code>p</code> tag!</li> <li>Add a second paragraph tag, fill it with a short description of what you want to do with your LearningFuze education.</li></ol>"
        },
        'Feature Set 3 - Got Skills?': {
            html: "<ol class='left-border'><li>Create a new <code>h3</code> tag, below your existing code. Give it the text of: <code>Skills</code><ol class='nested-1'><li>Add a style attribute to your <code>h3</code> tag</li><li>Give it a value of <code>color: blue</code></li><li><b>Ex:</b> <code>&lt;h3 style=\"color: blue;\"&gt;</code></li></ol></li><li>Add 5 skills that you have, each inside its own <code>p</code> tags</li></ol>"
        },
        'Feature Set 4 - Any comments?': {
            html: "<ol class='left-border'><li>Create comments before each of your elements, describing the purpose of that paragraph that immediately follows</li></ol>"
        },
        'Hints': {
            html: "<ol class='left-border'><li>Test your code frequently, don't wait till you're done to test your code</li><li>Always have your console open while testing your code</li><li>Save and push to gitHub often: <ol class='nested-1'><li>Save as often as you can it's simple, quick and will save you a lot of headache</li><li>Push to Github after each feature set is successfully completed (at least)</li><li>Remember to push to your <code>" + this.branch + "</code> branch</li></ol></li><li>Don't forget to ask for help if you get stuck</li></ol>"
        }
    }
});

//html_fundamentals_2
app.controller('htmlFund2Controller', function() {

    this.title = 'HTML Fundamentals 2';
    this.description = "Expand your HTML knowledge with basic formatting elements and adding basic inline CSS styling. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype is based on the information that you obtained through the following resources (If you haven't gone through these then please do so now).";
    this.branch = 'html_f2';
    this.instructType = 'B';

    this.links = {
        Reading: {
            'HTML Headings': "http://www.w3schools.com/html/html_headings.asp",
            'HTML Paragraphs': "http://www.w3schools.com/html/html_paragraphs.asp"
        },
        Presentation: {
            'HTML Formatting & HTML Styling': '#'
        },
        Video: {
            'Text Formatting and Style': '#'
        }
    };

    this.features = {
        'Getting Started Info': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included with this prototype it can be found in the <code>html_fundamentals_2</code> folder.</li></ol>"
        },
        'Feature Set 1 - Creating Structure and Content': {
            html: "<ol class='left-border'><li>Open the included <code>index.html</code></li><li>Create a basic HTML skeleton, including:<ul><li>DOCTYPE</li><li>html</li><li>head</li><li>body</li></ul></li><li>Make a heading and paragraph for each of the following sections<ol class='nested-1'></ol><li>About Me<ol class='nested-2'><li>Heading - About Me</li><li>Paragraph - Description about yourself</li></ol></li><li>Skills<ol class='nested-2'><li>Heading - Skills</li><li>Subheading (&lt;h3&gt;) - List out 3 skills that you want to learn</li><li>Paragraphs - Under each subheading give a brief description of why you want to acquire that skill</li></ol></li><li>Experience<ol class='nested-2'><li>Heading - Experience</li><li>Paragraph - Write a paragraph that describes any of your past job experience</li></ol></li></ol></li></ol>"
        },
        'Feature Set 2 - Adding Style': {
            html: "<ol class='left-border'><li>Add inline styling to the <b>About Me</b> header text to be your favorite color (other than black)</li><li>Make the <b>About Me</b> paragraph font size equal to 12px</li><li>Italicize the <b>Skills</b> header either by inline style or the use of formatting elements</li><li>Change all the subheadings in <b>Skills</b> to a color other than black</li><li>Add the font family of <b>Arial</b> to the <b>Experience</b> paragraph</li><li>Add a background color of <b>lightgray</b> to the <b>Experience</b> paragraph</li></ol>"
        },
        'Feature Set 3 - Research': {
            html: "<ol class='left-border'><li>Using google, try to figure out how to do the following:</li><li>Add an inline style to the <b>Description</b> paragraph that will increase the spacing between each line of the paragraph (make sure your description takes up multiple lines so you can see the effect)</li><li>Add a border around the <b>Experience</b> Heading without a bottom border that is the color red</li><li>Add a border around the <b>Experience</b> paragraph without a top border that is black<ul><li>Make this border not solid</li></ul></li></ol>"
        }
    }
});

//html_fundamentals_3
app.controller('htmlFund3Controller', function(){
    this.title = "HTML Head - internal/external styles & links";
    this.description = "Expand your HTML knowledge with better understanding of the head element and adding basic internal and external CSS styling. As you work through this prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype is based on the information that you obtained through the following resources (If you haven't gone through these then please do so now).";
    this.branch = 'html_f3';
    this.instructType = 'B';

    this.links = {
        Reading: {
            'HTML Head': 'http://www.w3schools.com/html/html_head.asp',
            'HTML CSS': 'http://www.w3schools.com/html/html_css.asp'
        },
        Presentation: {
            'HTML Formatting & HTML Styling': '#'
        },
        Video: {
            'Head and Style Tags & CSS Intro': '#'
        }
    };

    this.features = {
        'Getting Started': {
            html: "<ol class='left-border'><li>An <code>index.html</code> file has been included with this prototype and can be found in the <code>html_fundamentals_3</code> folder</li><li>Copy and paste your code from <code>html_fundamentals_2</code> into the index file for this prototype<ol class='nested-1'><li>Remove all of the inline styles from the elements (in this file only, <b>Do Not</b> alter the file from the previous prototype)</li></ol></li><li>Also included in the <code>html_fundamentals_3</code> folder is a <code>style.css</code> file that will be utilized in <i>Feature Set 3</i></li></ol>"
        },
        'Feature Set 1 - Head Elements': {
            html: "<ol class='left-border'><li>Within the head tags<ol class='nested-1'><li>Add 3 meta tags:<ol class='nested-2'><li>description</li><li>keywords</li><li>author</li></ol></li><li>Add a title tag with the text: <code>My Portfolio</code><ol class='nested-2'><li>Bookmark your <code>index.html</code> page (In Chrome: click on the star located on the left side of the address bar</li><li>Note when you bookmark your page the title content will show up in the actual bookmark</li></ol><li>Add an external Google font<ol class='nested-2'><li><code>&lt;link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'&gt;</code></li><li>Here is example CSS on using the added Google font:<ul><li><code>font-family: 'Montserrat', sans-serif;</code></li></ul></li></ol></li><li>Add a link tag for the included style sheet<ul><li><code>style.css</code></li></ul></li><li>Add style tags</li></ol></li></ol>"
        },
        'Feature Set 2 - Adding Style': {
            html: "<ol class='left-border'><li>Within the style tags<ol class='nested-1'><li>Make the <b>About Me</b> paragraph font size 12px</li><li>Italicize the skills header (with css)</li><li>Bold each skill title header but not the descriptions</li><li>Add the Google font family to the <b>Experience</b> header</li><li>Add a background color of green to the <b>Experience</b> paragraph</li><li>Change the <b>About Me</b> header text to your favorite color (other than black)</li></ol></li></ol>"
        },
        'Feature Set 3 - External Style Sheet': {
            html: "<ol class='left-border'><li>Add a <code>h1</code> element to the top of your page, give it the text: <code>Welcome to [your name]'s Portfolio Page</code><ol class='nested-1'><li>Replace [your name] with YOUR name and without the brackets</li><li>Change all the section headers to <code>h2</code> tags</li></ol></li><li>In the external stylesheet - <code>style.css</code><ol class='nested-1'><li>Make all <code>h3</code> tags blue</li>    <li>Set all heading elements font to the included Google font</li></ol></li></ol>"
        }
    }
});