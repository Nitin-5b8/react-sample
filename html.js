import React from 'react'; 
function ProfileCard({ user }) { 
 return ( 
 <div className="profile-card"> 
 <h2>{user.name}</h2> 
 <p>Email: {user.email}</p> 
 <p>Age: {user.age}</p> 
 <button onClick={() => alert(`Hello,
${user.name}!`)}>Greet</button> 
 </div> 
 ); 
} 
export default ProfileCard;