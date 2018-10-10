var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");

var data = [
    {
        name: "Clouds Rest",
        image:"https://media.istockphoto.com/photos/golden-sunrise-illuminating-tent-camping-dramatic-mountain-landscape-picture-id526564828?k=6&m=526564828&s=612x612&w=0&h=dGJ7atG6qx7zMs0JNLCLcxQ5SAnWbQDlw5wFljirYLM=",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Sandy Camp",
        image:"https://bestbrands-4001.kxcdn.com/wp-content/uploads/2015/12/camping-tent.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Forest Peak",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg47fiHdXka7QJimVfsjT2Zkmg9Gnoniooesa-zIPzfr1XdX2t",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err) {
            console.log(err);
        }
        console.log("Removed campgrounds!");
        Comment.remove({}, function(err){
            if(err){
                console.log(err);
            }
            console.log("Removed comments!")
        });
    // Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a campground");
                // Create a comment
                Comment.create(
                    {
                        text: "This place is great but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
            }
        });
    });
});
    // Add a few comments
}

module.exports = seedDB;