

function Profile() {
    const imgURL = './src/assets/MyProfile.png'
//     const handleImgClick = () => {
//         alert("Image Has been Clicked🚨");
//    console.log("Image Has been Clicked🚨");
    const handleImgClick = (e) => {
        e.target.style.display = "none";
        console.log("Deleted");
        
        // alert("Image Has been Deleted🚨");
  
   
    }
  return (
      <img src={imgURL} onClick={(e)=>handleImgClick(e)}></img>
  )
}

export default Profile