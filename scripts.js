$(document).ready( ()=>{
  $('button').click(getDataByTitle)
});

let getDataByTitle = ()=>{
  let api='http://www.omdbapi.com/?&apikey=d0b68d28&t=';
  let title=document.getElementById("input").value.toLowerCase();
  $.ajax({
    type:'GET',
    dataType:'json',
    url:api + title,
    success: (data)=>{
      let title=data.Title.toLowerCase();
      let src=data.Poster;

      let tempDiv = `<div class="card">
                      <img class="card-img-top img-fluid" src="${data.Poster}" alt="Card image cap" style={max-width:100px !important;}>
                      <div class="card-body">
                        <h5 class="card-title">${data.Title}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>`
      $('#data').append(tempDiv)
    },
    error:(data)=>{
      console.log('some error occured');
    }
  })
}
