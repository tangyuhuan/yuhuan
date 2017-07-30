app.get('/getNews',function(req,res){
	var pageIndex = req.query.index
	var len = 5
	var data =[]

	for(var i = 0;i<len;i++){
		data.push('新闻'+(parseInt(pageIndex*len)+i+3))
	}
	

	res.send({
		status: 0,
		data: data
	})
})