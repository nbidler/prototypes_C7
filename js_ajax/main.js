//Create GLOBAL variable below here on line 2
<<<<<<< HEAD
var global_result;
=======

>>>>>>> 92c6d68b0da2bccbee260893409728d9a7c7508a

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
<<<<<<< HEAD
                //FS 1
                global_result = result;
                //FS 2
                var movieInfo;
                var moviePoster;
                //FS 3
                for (var i = 0; i < (global_result.feed.entry).length; i++)
                {
                    moviePoster = global_result.feed.entry[i]['im:image'][2].label;
                    $('#main').append("<img src='" + moviePoster + "'>");
                    movieInfo = global_result.feed.entry[i]['im:name'].label;
                    $('#main').append("<p>" + movieInfo + "</p>");
                    movieInfo = global_result.feed.entry[i]['im:artist'].label;
                    $('#main').append("<p>" + movieInfo + "</p>");
                }
=======

>>>>>>> 92c6d68b0da2bccbee260893409728d9a7c7508a
            }
        });
        console.log('End of click function');
    });
});