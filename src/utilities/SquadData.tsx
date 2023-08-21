import { faCampground } from "@fortawesome/free-solid-svg-icons";

interface squadData {
  icon: any;
  title: string;
  text: string;
  button: string;
  background: string;
}

interface joinData {
  id: number;
  background: string;
  dp: string;
  name: string;
  userName: string;
  description: string;
  borderColor: string;
}

const squadData: squadData[] = [
  {
    icon: faCampground,
    title: "Introducing Squads",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam aspernatur! Iusto natu",
    button: "Create new squad",
    background: "https://picsum.photos/200/300",
  },
];

const joinData: joinData[] = [
  {
    id: 1,
    background: "https://picsum.photos/seed/picsum/200/300",
    dp: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    name: "daily.dev world",
    userName: "@dailydevworld",
    description:
      "Where we talk all things daily.dev. Check out the threads below and share what you love, or tell us what you hate. Can't wait to meet you 🤗",
    borderColor: "#0345fc",
  },
  {
    id: 2,
    background: "https://picsum.photos/seed/picsum/200/300",
    dp: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    name: "daily.dev world",
    userName: "@dailydevworld",
    description:
      "Where we talk all things daily.dev. Check out the threads below and share what you love, or tell us what you hate. Can't wait to meet you 🤗",
    borderColor: "#03fc9d",
  },
  {
    id: 2,
    background: "https://picsum.photos/seed/picsum/200/300",
    dp: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    name: "daily.dev world",
    userName: "@dailydevworld",
    description:
      "Where we talk all things daily.dev. Check out the threads below and share what you love, or tell us what you hate. Can't wait to meet you 🤗",
    borderColor: "#f803fc",
  },
  {
    id: 3,
    background: "https://picsum.photos/seed/picsum/200/300",
    dp: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    name: "daily.dev world",
    userName: "@dailydevworld",
    description:
      "Where we talk all things daily.dev. Check out the threads below and share what you love, or tell us what you hate. Can't wait to meet you 🤗",
    borderColor: "#03b1fc",
  },
  {
    id: 4,
    background: "https://picsum.photos/seed/picsum/200/300",
    dp: "https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ",
    name: "daily.dev world",
    userName: "@dailydevworld",
    description:
      "Where we talk all things daily.dev. Check out the threads below and share what you love, or tell us what you hate. Can't wait to meet you 🤗",
    borderColor: "#fcb603",
  },
];

export { squadData, joinData };
