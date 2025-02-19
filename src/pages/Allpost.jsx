import {React ,useEffect,useState} from 'react'
import appwriteservice from "../Appwrite/config"
import { Container, PostCard } from '../components'


function Allpost() {
    const [post ,setPost]=useState();
    useEffect(()=>{
        appwriteservice.getPosts().then(
            (posts)=>
              {
                if(posts)
                {
                    setPost(posts.document);
                }
              }
        )

    },[])
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {post.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
        </Container>
</div>
  )
}

export default Allpost