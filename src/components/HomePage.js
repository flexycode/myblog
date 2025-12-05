export default function HomePage() {
 return (
 <div className="container mt-4">
 <h1 className="text-center mb-4">Welcome to My Simple Blog</h1>
 <p className="lead text-center">
 Read articles, learn new things, and explore my blog posts.
 </p>
 <hr />
 <div className="row">
 <div className="col-md-4">
 <h4>Latest Post</h4>
 <p>A preview of the latest articles on the blog.</p>
 </div>
 <div className="col-md-4">
 <h4>Technology</h4>
 <p>Articles about programming, coding, and the digital world.</p>
 </div>
 <div className="col-md-4">
 <h4>Personal Stories</h4>
 <p>Life lessons, experiences, and meaningful reflections.</p>
 </div>
 </div>
 </div>
 );
}