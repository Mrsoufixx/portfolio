// Import images
import { girlzimpact,jewelery,rentwheel,movie,todolist,shoes,clone,gpsapp } from "../assets";

export const projectsData = [
  {
    id: 1,
    title: "Louer des voitures/motos",
    category: "Web Application",
    img: rentwheel,
    technologies:["Figma","Express Js","Tailwind","React Js", "Redux","MongoDb"],
    publishDate: "Jul 26, 2023",
    isShow: true,
    redirect: "/inprogress"
  },
  {
    id: 2,
    title: "Shopping shoes",
    category: "UI/UX Design",
    img: shoes,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
    isShow: true,
    redirect: "/inprogress"
  },
  {
    id: 3,
    title: "Clone Figma",
    category: "UI/UX Design",
    img: clone,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
    isShow: false,
    redirect: "/inprogress"
  },
  {
    id: 4,
    title: "Gestion des evenement",
    category: "Web Application",
    img: girlzimpact,
    technologies: ["Wordpress", "Bootstrap", "Wpbackery"],
    publishDate: "Mar 1, 2023",
    isShow: true,
    redirect: "https://girlzforimpact.com/"
  },
  {
    id: 5,
    title: "Ecommerce jewelery",
    category: "Web Application",
    img: jewelery,
    technologies: ["PrestaShop", "Bootstrap"],
    publishDate: "Avr 20, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/"
  },
  {
    id: 6,
    title: "To Do List",
    category: "Web Application",
    img: todolist,
    technologies: ["React Js", "Redux","Tailwind"],
    publishDate: "Avr 1, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/"
  },
  {
    id: 7,
    title: "Ecommerce canapé",
    category: "Web Application",
    img: "kanapi",
    technologies: ["Javascript", "Node Js"],
    publishDate: "Mar 8, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/"
    
  },
  {
    id: 8,
    title: "Movie App",
    category: "Web Application",
    img: movie,
    technologies: ["React Js"],
    publishDate: "Mar 28, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/"
    
  },
  {
    id: 9,
    title: "Gps App",
    category: "UI/UX Design",
    img: gpsapp,
    technologies:["Figma"],
    publishDate: "fev 20, 2023",
    isShow: false,
    redirect: "https://girlzforimpact.com/"
  },
  {
    id: 10,
    title: "Gestion des livres",
    category: "Web Application",
    img: "WebImage1",
    technologies:["Laravel","Tailwind","Livewire","Chart Js", "MySql"],
    publishDate: "Oct 28, 2022",
    isShow: true,
    redirect: "https://girlzforimpact.com/"
  },
];

