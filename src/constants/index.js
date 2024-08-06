import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    telus,
    techno,
    gleent,
    wordpress
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Wordpress Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    }
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Maps and Data Analyst",
      company_name: "Telus International AI",
      icon: telus,
      iconBg: "#383E56",
      date: "February 2022 - January 2023",
      points: [
        "Contributes to the development of AI applications reliant on geographical data.",
        "Conducts online research and adhere to guidelines to assess the relevance and accuracy of map data.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Outsourcing Intern",
      company_name: "Gleent Inc.",
      icon: gleent,
      iconBg: "#E6DEDD",
      date: "September 2022 - December 2022",
      points: [
        "Builds a strong client base and fosters customer loyalty through effective communication and ensuring all client requirements are consistently met.",
        "Identifies and coordinates projects, effectively communicates with stakeholder to ensure that project deliverables are completed on time and within budget."
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Programmer",
      company_name: "Dream Webworks Creations Inc.",
      icon: techno,
      iconBg: "#383E56",
      date: "March 2023 - September 2024",
      points: [
        "Develops around one (1) to three (3) fully functional and mobile responsive WordPress websites, themes, and custom functionalities based on client requirements daily.",
        "Manage the development and upkeep of the company’s website, prioritizing peak performance, usability, and adherence to web standards.",
        "Transforms designs into responsive web pages through collaborative efforts with designers.",
        "Integrates SEO keywords, meta tags, and descriptions to optimize web development initiatives.",
        "Implements third party solutions and APIs such as Artificial Intelligence into websites."
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wordpress Portfolio",
      description:
        "My WordPress portfolio, crafted using Elementor, JavaScript, and Vanta.js, showcases my expertise in web design and development.",
      tags: [
        {
          name: "Elementor",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "Vanta.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://olive-aardvark-760609.hostingersite.com/",
    },
    {
      name: "This Website",
      description:
        "This website is built using React, Vite, and Tailwind CSS, highlighting my proficiency in modern web development. React enables me to create dynamic UI.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "#",
    },
    {
      name: "Ecommerece Website",
      description:
        "This eCommerce website is built using Elementor, WooCommerce. Elementor provides a flexible and user-friendly interface, while Woocommerece for the payment etc.",
      tags: [
        {
          name: "Woocommerce",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "HTML | CSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://exams.technodreamcenter.com/michaelalain.laguardia/uiuxom/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };