import React from 'react'

const AuthorCard = () => {
    return (
        <div class="author-card">
           <div class="author-img set-bg" data-setbg="img/author.jpg"></div>
           <div class="author-info">
             <h5>Gina Wesley</h5>
             <p>Real Estate Agent</p>
           </div>
          <div class="author-contact">
             <p><i class="fa fa-phone"></i>(567) 666 121 2233</p>
             <p><i class="fa fa-envelope"></i>ginawesley26@gmail.com</p>
          </div>
        </div>
    )
}

export default AuthorCard
