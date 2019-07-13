import React from 'react'

const Carousel = ({images}) => {
  console.log(images)
  if (!images) {
    console.log("Images not found")
    return null
  }
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          {/* <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li> */}
        </ol>
      {/* 
        <!-- Wrapper for slides --> */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={images} style={{width : '750px'}}/>
          </div>
      
          {/* <div className="item">
            <img src="chicago.jpg" alt="Chicago"/>
          </div>
      
          <div class="item">
            <img src="ny.jpg" alt="New York"/>
          </div> */}
        </div>
      
        {/* <!-- Left and right controls --> */}
        {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a> */}
      </div>
    )
}

export default Carousel
