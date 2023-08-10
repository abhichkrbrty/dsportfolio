const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhi Chakraborty | Portfolio",
  description:
    "A Data Science practitioner who thrives to build AI based solutions for buisness and social problems along with a blend of UI/UX",
  og: {
    title: "Abhi Chakraborty",
    type: "website",
    url: "http://abhichakraborty.com/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Abhi Chakraborty",
  logo_name: "Abhi Chakraborty",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/rohankokkula",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/abhichakraborty/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Solution Engineer",
      fileName: "DesignImg",
      skills: [
        "⚡ Comprehending issues in the API's for professional enterprises",
        "⚡ Finding solutions for complex architectural problems in the product",
        "⚡ Creating the flow of application functionalities to better the performance",
        "⚡ Writing Algorithms and Automating the End to End Testing of the product",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "GO",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Software Engineer",
        subtitle: "Robert Bosch",
        date: "2014 - 16",
        content: [
          "Worked on multiple products TCPortal, TPscheduler and DSA(Data Security Audit)",
          "Developed the User Interface from scratch using HTML5 , CSS3 and Bootstrap Framework",
          "Implemented Back end using SpringMVC and Hibernate",
          "Implemented client server connection using various WebServices",
          "Integrated Jenkins for Continuous Integration",
        ],
      },
      {
        title: "Senior Software Engineer",
        subtitle: "IBM ISL",
        date: "2017 - 18",
        content: [
          "Worked on Machine Learning based case study product IBM Case Manager",
          "Solution Engineered for the FE and BE on the product",
          "Migrated the product IBM Daeja viewone to IBM standards",
        ],
      },
      {
        title: "Solution Engineer",
        subtitle: "Paypal",
        date: "2019 - 21",
        content: [
          "Worked on the Privacy Platform",
          "Build the privacy consent service from scratch",
          "Build the automation testing services",
        ],
      },
      {
        title: "UI Lead",
        subtitle: "Transak",
        date: "2021",
        content: [
          "Lead the user experience and user interface for the platform",
          "Resolved bugs and documented steps",
          "Build the partner dashboard",
        ],
      },
      {
        title: "Senior Software Engineer",
        subtitle: "ForgeAI",
        date: "2019",
        content: [
          "UX designing and UI building",
          "API building for the platform",
          "Created Models for the Data Collection and Review team",
        ],
      },
      {
        title: "Senior Software Engineer",
        subtitle: "ConcertoAI",
        date: "2018",
        content: [
          "UX designing and UI building",
          "API building for the platform",
          "Created Models for the Data Collection and Review team",
        ],
      },
      {
        title: "Senior Software Engineer",
        subtitle: "FireFlink",
        date: "2022-23",
        content: [
          "Team lead for UI designing and building",
          "Mentored Freashers",
          "Architect and Solution Engineered for the product",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Masters in Applied Data Science",
          subtitle: "Syracuse University",
          date: "2023 - Present",
          content: [],
        },
        {
          title: "Bachelor of Engineering in Computer Science",
          subtitle: "Visvesvaraya Technological University (VTU), Belgaum, India",
          date: "2010 - 2014",
          content: [],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "St Johns School Marhuali, Varanasi",
          date: "2007 - 2009",
          content: [],
        },
      ],
    },
    {
      title: ["Achivements"],
      data: [
        {
          title: "Achievements",
          content: [
            "Winner of C Language Contest: Won 1st prize in C language competition",
            "Winner of Algorithm writing contest: Awarded 2nd prize for Algo-relay an algorithm writing contest",
            "Qualified Math Olympiad: Achieved 50th Rank in All India Math Olympiad conducted by TSI.",
            "Best Dynamic Leader Award for NGO (LEAD)",
          ],
        },
      ],
    },
    {
      title: ["Teaching Experience"],
      data: [
        {
          title: "Newton School",
          content: [
            "Trainer for React , with hands-on application building",
            "Api designing and dummy api creation trainer for NodeJS",
            "Database designing and cloud deployment Trainer",
          ],
        },
      ],
    },
    {
      title: ["Social Work"],
      data: [
        {
          title: "LEAD",
          subtitle: "https://www.leadcampus.org/",
          content: [
            "Worked as volunteer for fund collection and event organisation for the ngo.",
          ],
        },
        {
          title: "MAD(Make a Difference)",
          subtitle: "https://makeadiff.in/",
          content: [
            "English trainer for underprivilaged childrens",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "React",
      subtitle: "React",
      logo_path: "react2.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "Python",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Node",
      subtitle: "Node",
      logo_path: "node2.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Java",
      subtitle: "Java",
      logo_path: "java1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "MongoDb",
      subtitle: "MongoDb",
      logo_path: "mongo3.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Ruby",
      subtitle: "Ruby",
      logo_path: "ruby1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on social media. You can message me, I will try to reply as oon as possible. I can help you with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Syracuse, NY",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/abhichkrbrty",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhichakraborty/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:abhichkrbrty@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abhichkrbrty/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
