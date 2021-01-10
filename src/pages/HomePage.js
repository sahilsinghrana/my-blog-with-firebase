import React from "react";
import { blogs } from "../fakeData";
function HomePage() {
  // eslint-disable-next-line no-lone-blocks
  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
            {/* <h1>id : {blog.id}</h1> */}
            <h1>{blog.blogs[0].title}</h1>
            <h5>by : {blog.userName}</h5>
            <h5>date : {blog.blogs[0].dateCreated}</h5>
            <p dangerouslySetInnerHTML={{ __html: blog.blogs[0].content }} />
          </>
        );
      })}
    </>
  );
}

export default HomePage;
