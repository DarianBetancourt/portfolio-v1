let container=document.getElementById("repo-container");

getRepository()
function getRepository(){
    fetch("https://api.github.com/users/DarianBetancourt/repos")
		.then(response => response.json())
		.then(data => {
            repositories=data;
            
            for(i=0;i<repositories.length;i++){
                container.innerHTML
                +=`<div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="single_blog wow fadeInLeft">
                        <div class="blog-thumb">
                            <div class="blog-image">
                            <a href="#"><img src="https://logosmarcas.net/wp-content/uploads/2020/12/GitHub-Logo.png" class="img-responsive" alt=""></a>
                            </div>
                            <div class="blog-info">
                                <a href="${repositories[i].html_url}"><h4>${repositories[i].name}</h4></a>	
                                <small><i class="fa fa-clock-o"></i>${repositories[i].created_at}</small>
                                <span>| Design</span>																																
                                <p>${repositories[i].description}</p>
                                <a href="${repositories[i].clone_url}" class="btn blog_btn">Clone</a>
                            </div>
                        </div>
                    </div>
                </div>`;
            
            }
            
        })
        .catch(function(err) { 
            console.error(err);
        });

}