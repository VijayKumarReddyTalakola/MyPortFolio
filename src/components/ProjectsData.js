import { BiLogoBootstrap, BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Weather Application",
    image: "./weatherapp.png",
    icons: [BiLogoReact, BiLogoBootstrap, TbApi],
    description: "This application provides current weather and time about a user specified location .",
    github: "https://github.com/VijayKumarReddyTalakola/Weather-App",
    demo: "https://weather-date-time-display.vercel.app",
  },
  {
    id: "3",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "4",
    name: "Chat Application",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "5",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/VijayKumarReddyTalakola/Expense-Tracker",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "6",
    name: "Car Rental Website",
    image: "./car-rental-app.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This is an online platform that allows users to rent cars for personal or business use.",
    github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
    demo: "https://car-rental-application.vercel.app",
  },
  {
    id: "7",
    name: "A Travel Website",
    image: "./travel-app.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss],
    description: "This is a simple and sleek UI design for a travel website.",
    github: "https://github.com/VijayKumarReddyTalakola/Travel-Website",
    demo: "https://my-travel-website.vercel.app",
  },
  {
    id: "8",
    name: "Blog Application",
    image: "./blog-app.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
    demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
