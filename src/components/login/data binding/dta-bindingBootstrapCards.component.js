
export function DataBinding5Component()
{
    var courses=[
        {Title:"ASP.NET",Poster:"4.jpg", Topics:["Web","API","MVC"]},
        {Title:"AWS",Poster:"2.jpg",Topics:["Cloud","Services","Database"]},
        {Title:"Digital Marketing",Poster:"3.jpg",Topics:["Cloud","Services","Database"]},
        {Title:"Data Science",Poster:"1.jpg",Topics:["Cloud","Services","Database"]}
    ]
    return(
        <div className="container-fluid">
            <h2>Courses</h2>
          <div className="d-flex flex-wrap">
            {
                courses.map(course=>
                    <div className="card m-2 p-2">
                        <img src={course.Poster} className="card-img-top" height="150"/>
                        <div className="card-header">
                            <h3>{course.Title}</h3>
                        </div> 
                        <div className="card-body">
                            <ul>
                                {
                                    course.Topics.map(topic=>
                                        <li>{topic}</li>
                                        )
                                }
                            </ul>
                        </div>
                        <div className="card-footer">
                                <button className="btn btn-primary w-100">Join Course</button>
                        </div>
                    </div>
                    )
            }
          </div>
        </div>
    )
}