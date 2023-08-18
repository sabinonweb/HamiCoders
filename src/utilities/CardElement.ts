export interface PostData {
  id: number;
  title: string;
  image: string;
  date: string;
  likes ?: number;
  comments ?:number;
}
const Posts: PostData[] = [
  {
    id: 1,
    title: "Being a good mentor - a developers guide",
    image: "https://picsum.photos/600/400",
    date: "Jul 19 • 19m read",
    likes:12,
    comments:2
  },
  {
    id: 2,
    title: "Being a good mentor - a developers guide",
    image: "https://picsum.photos/600/200",
    date: "Aug 19 • 20m read",
    likes:4,
    comments:5
  },
  {
    id: 3,
    title: "Semi-structured data modeling| Firebolt",
    image: "https://picsum.photos/600/300",
    date: "Jan 1 • 11m read",
    likes:10,
    comments:3
  },
  {
    id: 4,
    title: "Building Dynamic Websites With AI-Generated Content Automation",
    image: "https://picsum.photos/600/500",
    date: "Dec 23 • 3m read",
  },
];
export default Posts;
