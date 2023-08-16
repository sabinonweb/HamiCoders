import Card from "./Card";
import Tilt from "react-parallax-tilt";
import Posts from "../utilities/CardElement";
// import { createContext } from "react";
// import { PostData } from "../utilities/CardElement";
// export interface PostContextType {
//   PostElement: PostData; 
// }
// export const PostContext = createContext<PostContextType | undefined>(undefined);

function MainDisplay() {
  return (
    <section className="MainContainer">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          
          {Posts.map((PostElement) => {
            return (
              <Tilt
                className="parallax-effect-glare-scale"
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.45}
                glarePosition="all"
                scale={1.01}
                key={PostElement.id}
              >
                <Card PostElement = {PostElement}></Card>
              </Tilt>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}

export default MainDisplay;
