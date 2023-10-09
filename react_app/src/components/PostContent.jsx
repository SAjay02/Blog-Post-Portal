import React from 'react'
const PostContent = () => {
    const con=["a set of content rules that keeps the tone of voice and other elements of brand voice consistent across pieces of content, regardless of who creates it ","Content guidelines spell out the rules people should follow when they create content for your organization. Part instructions, part advice, they lay out everything you need to know about how to create consistent content at your company.","Content strategy refers to a brand's overarching content process and practices including planning, creation, publication, management, and content governance.","In-depth content is designed to meet a reader's needs with expert knowledge on a variety of related subjects around a focus topic.","Content writing is the process of writing, editing, and publishing content in a digital format. That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media copy "];
    const ran=Math.floor(Math.random()*5);
  return (
    <div>
        <p>{con[ran]}</p>
    </div>
  )
}
export default PostContent