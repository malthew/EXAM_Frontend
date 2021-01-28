export default function Home() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h2>SCHOOL NAME</h2>
            <p>Welcome to the coolest database site for the coolest School!</p>
            <p>
              <a href="https://github.com/malthew/EXAM_Backend">Backend project</a>
              <br/>
              <a href="https://github.com/malthew/EXAM_Frontend">Frontend project</a>
            </p>  
          </div>
          <div className="col-6">
            <p>Here you can view several things:
              <br/> - Currently available courses offered.
              <br/> - Access your own class.
              <br/> - This amazing web design!
            </p>
          </div>
        </div>
      </div>


    );
}