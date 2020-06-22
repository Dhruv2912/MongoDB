var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo",{
   useNewUrlParser: true,
   useUnifiedTopology: true});

// Schema Setup
//POST - title, content
var postSchema = new mongoose.Schema({
	title:String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
	email:String,
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

//Making a User with posts data embedded

// var newUser = new User({
// 	email: "ron@brown.edu",
// 	name:"Ron Brown"
// });

// newUser.posts.push({
// 	title: "How to learn coding",
// 	content: "Use online courses and focus on data structure"
// });

// newUser.save(function(err,user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });

//Adding post to a existing user
User.findOne({name:"Ron Brown"}, function(err,user){
	if(err){
		// console.log(err);
	}else{
		user.posts.push({
			title: "data structures",
			content:"Array, Queue, Tree, Graph"
		});
		user.save(function(err,user){
			if(err){
			console.log(err);
			}else{
				console.log(user);
			}	
		});
	}	
});

//Adding single Post

// var newPost = new Post({
// 	title: "Reflections on Food",
// 	content:"They are delicious"
// });

// newPost.save(function(err,post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// });