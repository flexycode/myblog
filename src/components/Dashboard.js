export default function Dashboard() {
 const user = sessionStorage.getItem("user");
 return (
 <div className="container mt-4">
 <h2>Dashboard</h2>
 <p>Welcome back, <strong>{user}</strong>!</p>
 <p>Here you can manage your posts (future feature).</p>
 </div>
 );
}