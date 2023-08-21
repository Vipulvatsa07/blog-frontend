// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import "./SinglePage.css"
// const SingleBlogPage = () => {
//     const { id } = useParams();
//     const [singlePost,setSinglePost]=useState([])
     
//     const getData=()=>{
//         fetch(`http://localhost:6500/blog/${id}`)
//         .then(res=>res.json())
//         .then((res)=>{console.log(res);
//             setSinglePost(res)
//     }).catch(err=>console.log(err))
//     }


//     useEffect(()=>{
//         getData()
//     },[])
//   return (
//     <div className='singlePage' style={{marginTop:"80px"}}>
//         <h1>{singlePost.title}</h1>
//         <p>{singlePost.blogpost}</p>
//     </div>
//   )
// }

// export default SingleBlogPage

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./SinglePage.css"

const SingleBlogPage = () => {
    const { id } = useParams();
    const [singlePost, setSinglePost] = useState({ title: '', blogpost: '' });

    const getData = () => {
        fetch(` https://ill-rose-barnacle-coat.cyclic.cloud/blog/${id}`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            setSinglePost(res);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, []);

    const formattedBlogpost = singlePost.blogpost.split('|').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    return (
        <div className='    '>
        <div className='singlePage' style={{ marginTop: "80px" }}>
            <h1>{singlePost.title}</h1>
            {formattedBlogpost}
        </div>
        </div>
    )
}

export default SingleBlogPage;
