import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "New", icon: <AiFillHome />, type: "home", link: '/'},
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" , link: '/'},
  { name: "Music", icon: <CgMusicNote />, type: "category", link: '/' },
  { name: "Films", icon: <FiFilm />, type: "category", link: '/' },
  { name: "Live", icon: <MdLiveTv />, type: "category", link: '/' },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "category", link: '/' },
  { name: "News", icon: <ImNewspaper />, type: "category", link: '/' },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "category", link: '/' },
  { name: "Learning", icon: <RiLightbulbLine />, type: "category", link: '/' },
  { name: "Admin", icon: <RiLightbulbLine />, type: "admin", link: '/admin' },

  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "category",
    link: '/',
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" , link: '/'},
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" , link: '/'},
  { name: "Help", icon: <FiHelpCircle />, type: "menu", link: '/' },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu", link: '/' },
];
