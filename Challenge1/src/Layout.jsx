import React from "react";
import Card from "./assets/components/Card"
import profile1  from "./assets/images/profile-1.jpg"
import profile2  from "./assets/images/profile-2.jpg"
const Layout = () => {

  const cardData = [
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
    {img:`${profile1}`,
      heading:"CodingLab",
      text:"YouTuber & Blogger",
      like:"60.4k",
      comments:"20k",
      share:"12.4k",
    },
    {img:`${profile2}`,
      heading:"FashionWorld",
      text:"Designer & Manager",
      like:"62.5k",
      comments:"10.5k",
      share:"22.4k",
    },
    
  ]
  return(
    <>
    <div className = " grid grid-cols-4 gap-4 p-4  bg-gray-100 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
   {cardData.map((card,index)=>(
    <Card key={index} {...card}/>
   ))}
    </div>
  
    </>
  )
};

export default Layout;
