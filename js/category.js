fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
   
    .then(function(data){
     let len= data.length

     
      let text=" ";
      for( let i=0 ;i<len;i++){
          text+=
          `<p>    ${data[i]}  <span class="category-arrow"><i class='fa fa-arrow-circle-down'
                                style='font-size:20px;color:blue''></i></span> </p>  `
           
      }
       
       document.getElementById("demo").innerHTML=text;
      

    })