import { Link } from 'react-router-dom'
function TeacherHomePage(){
    return(
    <>
      
    <div className="hidden md:inline md:absolute h-screen w-screen overflow-hidden ">
      <h1> Welcome, Teacher!</h1>
       
       <Link to="/dashboard"><p>Dashboard</p></Link>
       <Link to="/studentmanagement"><p>Student Management</p></Link>
       <Link to="/overview"><p>Overview</p></Link>
       <Link to="/UserAccControl"><p>User Account Control</p></Link>
        <Link to="/upload"><p>Upload</p></Link>
    </div>
    </>
);
}
export default TeacherHomePage