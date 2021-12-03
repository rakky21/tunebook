async function upvoteClickHandler(event) {
  event.preventDefault();

  let id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if(!id){
    id = this.getAttribute("data-id");
    console.log(id);
  }
  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    // alert(response.statusText); 
    alert("You may only vote once.");
  }
}

const buttons = document.querySelectorAll('.upvote-btn');

buttons.forEach(button => button.addEventListener('click', upvoteClickHandler))
