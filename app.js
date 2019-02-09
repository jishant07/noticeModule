var express = require ('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://jishant_acharya:system32@ds115193.mlab.com:15193/health_card');
var bodyparser = require('body-parser');
var fileupload = require('formidable');
var fs = require('fs');
var notice = require('./models/notice');
var date = require('date-and-time');

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res)
{
	res.render("index");
});
app.get("/add",function(req,res)
{
	res.render("mainpage");
});
app.post("/add",function(req,res)
{
	var backcategory = req.body.category;
	var backauthor = req.body.author;
	res.json({Category: req.body.category,
				Author: req.body.author});
});
/*app.post("/add",function(req,res)
{
	var backcategory = req.body.category;
	console.log(backcategory);
	var backauthor = req.body.author;
	console.log(backauthor);
	var now = new Date(); 
	var currdate = date.format(now,'YYYY/MM/DD HH:mm:ss');
	var form = new fileupload.IncomingForm();
	form.parse(req,function(err,fields,files)
	{
		var oldpath = files.mainfile.path;
		console.log(files.mainfile.type);
		var newpath = 'uploads/' + files.mainfile.name;
		var filepath = newpath;
		fs.rename(oldpath,newpath,function(err)
		{
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.json({msg:'File Uploaded and Moved!',
							Category :backcategory,
								Author :backauthor,
									Filepath :filepath,
										Date :currdate});
			}
		});
	});
});*/
app.get('/show',function(req,res)
{
	
});
app.listen(3000,function()
{
	console.log("Working on 3000");
});