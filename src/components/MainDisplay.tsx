import React, { useState } from "react";
import Card from "./Card";
import Tilt from "react-parallax-tilt";
import Posts from "../utilities/CardElement";
import { createContext } from "react";
import { PostData } from "../utilities/CardElement";
import { Link, Outlet } from "react-router-dom";
export const PostContext = createContext<PostData | undefined>(undefined);
// import { createContext } from "react";
// import { PostData } from "../utilities/CardElement";
// export interface PostContextType {
//   PostElement: PostData;
// }
// export const PostContext = createContext<PostContextType | undefined>(undefined);

function MainDisplay() {

  return (
    <React.Fragment>
      <Outlet/>
      <section className="MainContainer">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {Posts.map((PostElement) => {
              return (<>
                <Tilt
                  className="parallax-effect-glare-scale"
                  tiltEnable={false}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  glarePosition="all"
                  scale={1.01}
                  key={PostElement.id}
                >
                  <PostContext.Provider value={PostElement}>
                    <Link to={`/posts/${PostElement.id}`}><Card PostElement={PostElement}></Card></Link>
                  </PostContext.Provider>
                </Tilt>
              </>);
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default MainDisplay;
