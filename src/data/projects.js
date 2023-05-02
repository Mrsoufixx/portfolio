// Import images
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

export const projectsData = [
  {
    id: 1,
    title: "Louer des voitures/motos",
    category: "Web Application",
    img: WebImage2,
    technologies:["Figma","Express Js","Tailwind","React Js", "Redux","MongoDb"],
    publishDate: "Jul 26, 2023",
  },
  {
    id: 2,
    title: "Gestion des evenement",
    category: "Web Application",
    img: MobileImage2,
    technologies: ["Wordpress", "Bootstrap", "Wpbackery"],
    publishDate: "Mar 1, 2023",
  },
  {
    id: 3,
    title: "Ecommerce jewelery",
    category: "Web Application",
    img: MobileImage2,
    technologies: ["PrestaShop", "Bootstrap"],
    publishDate: "avr 20, 2023",
  },
  {
    id: 4,
    title: "Shopping shoes",
    category: "UI/UX Design",
    img: UIImage1,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
  },
  {
    id: 5,
    title: "Clone Figma",
    category: "UI/UX Design",
    img: UIImage2,
    technologies:["Figma"],
    publishDate: "avr 12, 2023",
  },
  {
    id: 6,
    title: "Gps App",
    category: "UI/UX Design",
    img: MobileImage1,
    technologies:["Figma"],
    publishDate: "fev 20, 2023",
  },
  {
    id: 7,
    title: "Gestion des livres",
    category: "Web Application",
    img: WebImage1,
    technologies:["Laravel","Tailwind","Livewire","Chart Js", "MySql"],
    publishDate: "Oct 28, 2022",
  },
];
