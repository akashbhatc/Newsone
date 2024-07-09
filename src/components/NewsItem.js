import React from 'react'
const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card news-card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }> 
                     <span className="badge rounded-pill bg-light" style={{ color: "black" }}> {source} </span>
                </div>
                <img src={!imageUrl ? "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : imageUrl} className="card-img-top" alt="..." style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown author" : author} on  {new Date(date).toGMTString()}</small></p> 
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read More</a>  
                </div> 
            </div>
        </div>
    )
}
export default NewsItem
