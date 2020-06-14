var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blog_demo_1",{
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
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});
var User = mongoose.model("User", userSchema);

//Create a Independent User
// User.create({
// 	email: "Rooney@gmail.com",
// 	name: "Wayne Rooney"
// }, function(err,user){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(user)
// 	}
// });

//Create a Post inside user using reference

// Post.create({
// 	title: "Best assist 1",
// 	content: "Assist vs Aston Villa"
// }, function(err,post){
// 	User.findOne({email:"Rooney@gmail.com"},function(err,founduser){
// 		if(err){
// 		console.log(err)
// 		}else{
// 			founduser.posts.push(post);
// 			founduser.save(function(err,data){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(data);
// 				}	
// 			});
// 		}	
// 	});
// });

//Find User
//Find all posts for that user
User.findOne({email:"Rooney@gmail.com"}).populate("posts").exec(function(err,post){
	if(err){
		console.log(err);
	}else{
		console.log(post);
	}
});




