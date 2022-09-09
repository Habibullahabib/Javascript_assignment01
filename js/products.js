fetch('https://dummyjson.com/products')
    .then(response => response.json())

    
    .then(function(data){

        let product=" ";
       for(let i=0 ;i<5;i++){
       product+= ` <div   class="row   aside-section  ">
            <div class="col-md-4   "   >
                        <div class="aside-image  ">  
                            <img class="skeleton" src="${data.products[i].thumbnail}" alt="" />
                        </div>
                    </div>
                    <div class="col-md-8"   >
                        <h2 class="aside-title ">   ${data.products[i].title}</h2>
                        <span class="aside-author  "> <a>Category : ${data.products[i].category} </a></span> <br>
                        <span class="aside-author  "> Price : ${data.products[i].price} </a></span> <br>
                        <span class="aside-author   "> Rating : ${data.products[i].rating} </a></span>
                        <p class="aside-content   ">${data.products[i].description}  </p>
                    </div>  </div>`
     }


     document.getElementById("products-demo").innerHTML=product;
      
     
    let page_number= data.limit;
     blog_page=Math.ceil(page_number/5)
     console.log(blog_page);
     let pagination_page=" "
     
      for(let i=0; i<blog_page; i++){
        
        pagination_page += `<li class="page-item ">
                            <a   class="page-link"  onclick="pagination('https://dummyjson.com/products?limit=5&skip=${i*5}')" href="#">${i+1}</a>
                                </li>`
                         
        
      }

      document.getElementById("pagination-demo").innerHTML=pagination_page
     

     
       
  
  })
  function pagination(value){
        fetch(value)
       .then(response => response.json())
       
       .then(function(data){

        let result= " ";
          for(let j=0 ; j<5; j++){
           result +=`<div class="row aside-section">
            <div class="col-md-4">
                        <div class="aside-image  ">  
                            <img class="skeleton" src="${data.products[j].thumbnail}" alt="thumnail" />
                        </div>
                    </div>
                    <div class="col-md-8 skeleton ">
                        <h2 class="aside-title  ">   ${data.products[j].title}</h2>
                        <span class="aside-author"> <a>Category : ${data.products[j].category} </a></span> <br>
                        <span class="aside-author"> Price : ${data.products[j].price} </a></span> <br>
                        <span class="aside-author"> Rating : ${data.products[j].rating} </a></span>
                        <p class="aside-content">${data.products[j].description}  </p>
                    </div>  </div>`
          }

          document.getElementById("products-demo").innerHTML= result;

          


       })
 }

    
  