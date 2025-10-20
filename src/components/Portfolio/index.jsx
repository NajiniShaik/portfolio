import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./index.css"


import { dataContext } from "../../Context/index.jsx"
import { useState,useEffect,useContext} from "react";
import {Navigate} from "react-router-dom";


import { FaBars } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


import portfolioImg from '../../assets/portfolioImg.jpg';


import wikipediaImg from '../../assets/wikipedia.png';
import todoAppImg from '../../assets/todoApp.png';
import iplDashboardImg from '../../assets/iplDashboard.png';
import memeGameImg from '../../assets/memeGame.png';
import musicPlaylistImg from '../../assets/musicPlaylist.png';
import matchGameImg from '../../assets/matchGame.png';


const skillsList=[
  {id:1,type:'frontend',skill:'HTML',imgUrl:'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',imgAltText:'html'},
  {id:2,type:'frontend',skill:'CSS',imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',imgAltText:'css'},
  {id:3,type:'frontend',skill:'Javascript',imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',imgAltText:'javascript'},
  {id:4,type:'frontend',skill:'React Js',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/reactjs.png?raw=true',imgAltText:'react js'},
  {id:5,type:'frontend',skill:'Bootstrap',imgUrl:'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',imgAltText:'bootstrap'},
  {id:6,type:'backend',skill:'Node Js',imgUrl:'https://nodejs.org/static/images/logo.svg',imgAltText:'node js'},
  {id:7,type:'backend',skill:'Express Js',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/express.png?raw=true',imgAltText:'express js'},
  {id:8,type:'language',skill:'Python',imgUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',imgAltText:'python'},
  {id:9,type:'backend',skill:'Sqlite',imgUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original-wordmark.svg',imgAltText:'sqlite'},
  {id:11,type:'tools',skill:'Git',imgUrl:'https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png',imgAltText:'git'},
  {id:12,type:'tools',skill:'Github',imgUrl:'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',imgAltText:'github'},
  {id:13,type:'tools',skill:'Netlify',imgUrl:'https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png',imgAltText:'netlify'},
  {id:14,type:'tools',skill:'VsCode',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/vscode.png?raw=true',imgAltText:'vs code'},
  {id:15,type:'frontend',skill:'Tailwind',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/tailwindcss.png?raw=true',imgAltText:'tailwind'},
  {id:16,type:'tools',skill:'Vercel',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/vercel.png?raw=true',imgAltText:'vercel'},
  {id:17,type:'language',skill:'C++',imgUrl:'https://github.com/codingmastr/Tarun-s-Portfolio/blob/main/src/assets/tech_logo/cpp.png?raw=true',imgAltText:'cpp'},
  {id:18,type:'language',skill:'Javascript',imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',imgAltText:'javascript'},
]

const btnsList=[
  {id:1,text:'All',category:'all'},
  {id:2,text:'Frontend',category:'frontend'},
  {id:3,text:'Backend',category:'backend'},
  {id:4,text:'Language',category:'language'},
  {id:5,text:'Tools',category:'tools'},
];

const projectsList=[
  {
    id:1,
    imgUrl:memeGameImg,
    imgAlt:'emoji game',
    title:'Emoji Game',
    techList:['Html','Css','Javascript','React Js'],
    projectLink:'https://smojiGameHub.ccbp.tech'
  },
  {
    id:5,
    imgUrl:todoAppImg,
    imgAlt:'todo app',
    title:'Todo App',
    techList:['Html','Css','Javascript','Bootstrap'],
    projectLink:'https://todo-app-p3kr.vercel.app/'
  },
  {
    id:2,
    imgUrl:matchGameImg,
    imgAlt:'match game',
    title:'Match Game',
    techList:['Html','Css','Javascript','React Js'],
    projectLink:'https://SnapMatch.ccbp.tech'
  },
  {
    id:3,
    imgUrl:iplDashboardImg,
    imgAlt:'ipl dashboard',
    title:'IPL Tracker',
    techList:['Html','Css','Javascript','React Js'],
    projectLink:'https://ipltrakr.ccbp.tech/'
  },
   {
    id:6,
    imgUrl:wikipediaImg,
    imgAlt:'wiki pedia',
    title:'Wiki Pedia',
    techList:['Html','Css','Javascript','Bootstrap'],
    projectLink:'https://wikipedia-mocha-three.vercel.app/'
  },
  {
    id:4,
    imgUrl:musicPlaylistImg,
    imgAlt:'music playlist',
    title:'Music Playlist',
    techList:['Html','Css','Javascript','React Js'],
    projectLink:'https://playtunez.ccbp.tech/'
  }

  /** 
   * ,{
    id:6,
    imgUrl:'',
    imgAlt:'',
    title:'',
    techList:['Html','Css','Javascript','React Js'],
    projectLink:''
  }, */
  
]



function Portfolio() {

  const { theme, updateTheme,isLoggedIn,updateAccState} = useContext(dataContext);

  const navigate = useNavigate();

  const [showOrHide,updateState]=useState(0);

  const [skillCategory,updateCategory]=useState('all');
  
  const [filteredList,updateList]=useState(skillsList);

  const [result, setResult] = useState("");

  const [formUserName,setFormName]=useState("");
  const [formUserEmail,setFormEmail]=useState("");
  const [formUserMsg,setFormMsg]=useState("");
  

  const removeLoginDetails=()=>{
    Cookies.remove("loggedInUser")
    updateAccState(false)
    navigate("/signin", { replace: true });
  }
  
  useEffect(() =>
    {
      if (skillCategory === "all") {
        updateList(skillsList);
      }
      else {
        const filtered = skillsList.filter(skill => skill.type === skillCategory);
        updateList(filtered);
      }
    }, 
  [skillCategory]);

  if (!isLoggedIn){
    return <Navigate to="/signin" replace/>;
  }


  const bgStyle= theme === "light"? "light-theme-bg":"dark-theme-bg"

  const eleStyle= theme === "light"? 'light-theme':'dark-theme'

  const brColor=theme === "light" ? "light-theme-border":"dark-theme-border"

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormName("");
      setFormMsg("");
      setFormEmail("");
      event.target.reset();
    } else {
      setResult("Error");
    }
  }

  return (
  <>
  
  <nav className={`portfolio-navbar ${bgStyle}`}>
    <div className='portfolio-container'>
      <a href="#" className='navbar-title-details'>
        <FaSnowflake className={`navbar-title-icon icon ${eleStyle}`}/>
        <h1 className={`navbar-title ${eleStyle}`}>portfolio</h1>
      </a>
      
      <ul className='navbar-items-list'>
        <li><a href="#sectionHero" className={`navbar-items ${eleStyle}`}>Home</a></li>
        <li><a href="#sectionSkills" className={`navbar-items ${eleStyle}`}>Skills</a></li>
        <li><a href="#sectionProjects" className={`navbar-items ${eleStyle}`}>Projects</a></li>
        <li><a href="#sectionContact" className={`navbar-items ${eleStyle}`}>Contact</a></li>
      </ul>
      
      <div className='icons-card'>
        <FaBars className={`drop-down-icon icon ${eleStyle}`} onClick={()=>{updateState(!showOrHide)}}/>
          <button className='icon-btn' onClick={() => updateTheme(theme === "light" ? "dark" : "light")}>
            <FaMoon className={`icon ${eleStyle}`}/>
          </button>
          <button className="icon-btn" type="button" onClick={removeLoginDetails}>
              <BsPersonFill className={`icon ${eleStyle}`}/>
          </button>
      </div>
    </div>
        
    <div className={`drop-down-list ${showOrHide == 1?"drop-down-list-show":"drop-down-list-hide"}`}>
      <a href="#sectionHero" className={`drop-down-list-item ${brColor}`}>Home</a>
      <a href="#sectionSkills" className={`drop-down-list-item ${brColor}`}>Skills</a>
      <a href="#sectionProjects" className={`drop-down-list-item ${brColor}`}>Projects</a>
      <a href="#sectionContact" className={`drop-down-list-item ${brColor}`}>Contact</a>
    </div>
  </nav>
  
  <section className="section-container" id="sectionHero">
    
    <div className="container">
      <img src={portfolioImg} alt="portfolio img" className="portfolio-img"/>
      <div className="detailed-container">
        <p className="greeting">Hello!</p>
        <h1 className="user-name">I'm Najini</h1>
        <p className="about-me">I am a driven and adaptable individual, always enthusiastic about embracing new challenges. My passion for continuous learning fuels my commitment to delivering exceptional results. With a positive outlook and a growth-oriented mindset, I am prepared to contribute meaningfully and strive for excellence</p>
        <button className="portfolio-btn">
          <a href="https://drive.google.com/file/d/13DS6Iectba_-_zbxM4hA0PkRhYUwJNWW/view?usp=sharing" target="__blank">Download CV</a>
        </button>
      </div>
    </div>
  </section>

  <section className="section-container" id="sectionSkills">
    <div className="title-card">
      <h1 className="section-title">Skills</h1>
      <p className="description">Here are some of my skills on which I have been working for the past 2 years.</p>
    </div>
    
    <ul className="btns-list">
      {
      btnsList.map(eachBtn =>
        (
          <li key={eachBtn.id}>
            <button className={`skill-btn ${theme == 'light' ? skillCategory == eachBtn.category ? "light-theme-active-btn":"light-theme-inactive-btn":skillCategory == eachBtn.category ? "dark-theme-active-btn":"dark-theme-inactive-btn"}`} type="button" onClick={()=>{updateCategory(eachBtn.category)}}>{eachBtn.text}</button>
          </li>
        ))
      }
    </ul>

    <ul className="skills-list">
      { 
        filteredList.map(eachSkill=>(
          <li key={eachSkill.id} className="skill-details">
            <img src={eachSkill.imgUrl} alt={eachSkill.imgAltText} className="skill-logo"/>
            <h1 className={`skill-title ${theme === "light" ?"light-theme-text":"dark-theme-text"}`}>{eachSkill.imgAltText}</h1>
          </li>
        ))
      }
    </ul>
  </section>

  <section className="section-container" id="sectionProjects">
    <div className="title-card">
      <h1 className="section-title">Projects</h1>
      <p className="description">I have worked on a wide range of projects. I have developed different static and Dyanamic websites. Here are some of my projects.</p>
    </div>
    
    <ul className="projects-list">
      {
        projectsList.map(eachProject=>(
          <li className="project-container" key={eachProject.id}>
            <img src={eachProject.imgUrl} alt={eachProject.imgAlt} className="project-img"/>
            <div className="project-details">
              <h1 className="project-title">{eachProject.title}</h1>
              <ul className="tech-list">
                {eachProject.techList.map(eachItem => (
                  <li className="tech-title" key={eachItem}>{eachItem}</li>
                ))}
              </ul>
              
              <div className="btn-card">
                <button type="button" className="project-btn">
                  <a href={eachProject.projectLink} target="__blank" className="project-link">Visit Site</a>
                </button>
              </div>
              
            </div>
          </li>
        ))
      }
    </ul>

  </section>

  <section className="section-container footer-container" id="sectionContact">
    <h1 className="section-title">Get In Touch</h1>
    <p className="description">Reach out using the form below. I’ll respond shortly!</p>

    <div className="cards-container">
      
      <form className="form-element" onSubmit={onSubmit}>
        <div className="input-card">
          <label>Full Name</label>
          <input className="input-element" autoComplete="name" placeholder="Name" name="name" required value={formUserName} onChange={(e)=>{setFormName(e.target.value)}}/>
        </div>
        <div className="input-card">
          <label>Email Address</label>
          <input className="input-element" autoComplete="email" placeholder="Email" name="email" required value={formUserEmail} onChange={(e)=>{setFormEmail(e.target.value)}}/>
        </div>
        <div className="input-card">
          <label>Your Message</label>
          <textarea placeholder="Message" rows='5' cols='8' autoComplete="off" className="input-element" name="message" required value={formUserMsg} onChange={(e)=>{setFormMsg(e.target.value)}}></textarea>
        </div>
        <div className="form-btn-card">
          <button className="form-btn" type="submit">Submit</button>
        </div>
        <span>{result}</span>
      </form>

      <div className="contact-details">
        <h1>Contact Me</h1>

        <div className="card">
          <a href="https://www.linkedin.com/in/najini-shaik/" target="__blank"><FaLinkedin  className={`contact-icons ${theme=="light" ? "light-theme-a":"dark-theme-a"}`}/></a>
          <a className={`contact-info ${theme=="light" ? "light-theme-a":"dark-theme-a"}`} href="https://www.linkedin.com/in/najini-shaik/" target="__blank">LinkedIn</a>
        </div>

        <div className="card">
          <a href="https://github.com/NajiniShaik" target="__blank"><FaGithub  className={`contact-icons ${theme=="light" ? "light-theme-a":"dark-theme-a"}`}/></a>
          <a className={`contact-info ${theme=="light" ? "light-theme-a":"dark-theme-a"}`} href="https://github.com/NajiniShaik" target="__blank">Github</a>
        </div>

        <div className="card">
          <a href="shaiknajini59@gmail.com" target="__blank"><MdEmail  className={`contact-icons ${theme=="light" ? "light-theme-a":"dark-theme-a"}`}/></a>
          <a className={`contact-info ${theme=="light" ? "light-theme-a":"dark-theme-a"}`} href="shaiknajini59@gmail.com" target="__blank">Email</a>
        </div>

      </div>

    </div>

    
  </section>

  </>
    
  )
}

export default Portfolio
