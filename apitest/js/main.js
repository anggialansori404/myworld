fetch("http://128.199.173.229:4000/stats")
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('download').innerHTML = response.content;
    document.getElementById('user').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});
