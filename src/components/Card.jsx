

// import React from 'react';
// import "./Card.css"
// import img1 from '../images/photo-1532020326606-ca3ae703dd24.avif'
// import img2 from '../images/photo-1555679486-e341a3e7b6de.avif'
// import img3 from '../images/photo-1566228015668-4c45dbc4e2f5.avif'
// import img4 from "../images/photo-1568738351265-c7065f5d4293.avif"
// import img5 from '../images/photo-1602913986112-b738a2d2ab9b.avif'
// import { Link } from 'react-router-dom';


// const imagePaths = [
//   img1,
//   img2,img3,img4,img5
// ]
// const Card = ({ data, id }) => {
//     const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
//     // console.log('Random Image Path:', randomImagePath)
//     const truncatedContent = data.blogpost.slice(0, 250) + "...";
//   return (
//     <div className='card' style={{ backgroundImage: `url(${randomImagePath})` }}>
//       {/* <h3>{data._id}</h3> */}
//       <h1>{data.title}</h1>
//       <p>{truncatedContent}</p>
//       <div>
//       <Link to={`/services/${data._id}`} style={{textDecoration:"none", color:"white"}}>
//         <button>Read More</button>
//         </Link>
//         </div>
//     </div>
//   );
// };

// export default Card;

import React from 'react';
import "./Card.css"
import img1 from '../images/photo-1532020326606-ca3ae703dd24.avif'
import img2 from '../images/photo-1555679486-e341a3e7b6de.avif'
import img3 from '../images/photo-1566228015668-4c45dbc4e2f5.avif'
import img4 from "../images/photo-1568738351265-c7065f5d4293.avif"
import img5 from '../images/photo-1602913986112-b738a2d2ab9b.avif'
import { Link } from 'react-router-dom';

const imagePaths = [img1, img2, img3, img4, img5];

const Card = ({ data, id }) => {
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const paragraphs = data.blogpost.split('|');
    
    // Combine the content of the first two paragraphs
    const firstTwoParagraphs = paragraphs.slice(0, 4).join(' ');

    // Truncate the combined content to 250 characters
    const truncatedContent = firstTwoParagraphs.slice(0, 250)+"...";

    return (
        <div className='card' style={{ backgroundImage: `url(${randomImagePath})` }}>
            <h1>{data.title}</h1>
            <p>{truncatedContent}</p>
            <div>
                <Link to={`/blogs/${data._id}`} style={{ textDecoration: "none", color: "white" }}>
                    <button>Read More</button>
                </Link>
            </div>
        </div>
    );
};


export default Card;
