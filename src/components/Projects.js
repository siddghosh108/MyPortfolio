import React from 'react';
import styled from 'styled-components';
// import backImage from 'src/images/projectt.png';
import doctorsImage from 'src/images/doctors-app.jpg';
import workshopImage from 'src/images/Thumbnails/bakers-workshop.jpeg';
import budgetappImage from 'src/images/budget-app.jpg';
import exploreCountriesImage from 'src/images/explore-countries.png';
import spaceTravelersImage from 'src/images/space-travelers.png';
import restaurantAppImage from 'src/images/Thumbnails/restaurant-app.jpeg';
import ProjectModals from './ProjectModals';

const ProjectsWrapper = styled.section`
  width: 100%;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectItem = styled.div`
  position: relative;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .button-group {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .button-group {
      opacity: 1;
    }
  }
`;
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Doctors Appointment',
      tech: 'Ruby, Rails, Postgresql and ReactJs',
      description: '"Doctors Appointment" is an Online Doctor Reservation web application designed to provide users with the ability to reserve, view, and manage doctors and doctor appointment reservation . The system aims to streamline the process of finding and booking doctors from various locations.',
      imageUrl: doctorsImage,
      modalImg: doctorsImage,
      liveDemoLink: 'https://capstone-m-doc.onrender.com',
      githubSourceLink: 'https://github.com/siddghosh108/m-doc',
    },
    {
      id: 2,
      title: 'Restaurant Project',
      tech: 'HTMl, CSS and Javascript',
      description: '"Restaurant Project" It is a website for the restaurant. With this app , customers can see the meals , they can like and comment on meals. All data is preserved thanks to Involvement API. This website was built using JavaScript, Webpack and ES6.',
      imageUrl: restaurantAppImage,
      modalImg: restaurantAppImage,
      liveDemoLink: 'https://abutalha3.github.io/csp-js-module2',
      githubSourceLink: 'https://github.com/siddghosh108/CapstoneJS?tab=readme-ov-file',
    },
    {
      id: 3,
      title: 'Space Travelers Hub',
      tech: 'React, Redux and external API.',
      description: '"Space Travelers Hub" is a dynamic single-page web app connecting users to comprehensive rocket and mission data from SpaceX. Explore rockets, missions, and your profile seamlessly.',
      imageUrl: spaceTravelersImage,
      modalImg: spaceTravelersImage,
      liveDemoLink: 'https://space-travelers-33zs.onrender.com',
      githubSourceLink: 'https://github.com/lucy-sees/Space-Travellers-Hub',
    },
    {
      id: 4,
      title: 'Explore The Countries',
      tech: 'React, Redux and external API.',
      description: '"Explore The Countries" is a web application built using React and Redux that displays information about different countries. It consists of the following main pages: Homepage and Details. The project provides a user-friendly interface for users to search, sort, and view details about different countries.',
      imageUrl: exploreCountriesImage,
      modalImg: exploreCountriesImage,
      liveDemoLink: 'https://explore-the-countries.onrender.com',
      githubSourceLink: 'https://github.com/siddghosh108/React-Country-Capstone/tree/feature?tab=readme-ov-file',
    },
    {
      id: 5,
      title: 'Budget App',
      tech: 'Ruby, Rails and Postgresql.',
      description: '"Budget App" is a fully functioning website that allows a user to fully manage his/her expenses by keeping track of all payments and their related categories. For each category the user can see how much is already spent. A user can add categories and payments related to one or more categories.',
      imageUrl: budgetappImage,
      modalImg: budgetappImage,
      liveDemoLink: 'https://sidds-budget-app.onrender.com',
      githubSourceLink: 'https://github.com/siddghosh108/Budget-App?tab=readme-ov-file',
    },
    {
      id: 6,
      title: 'Cake Lovers Workshop',
      tech: 'HTML, CSS3, JAVASCRIPT and Linters.',
      description: '"Cake Lovers Workshop" is a website giving information about a workshop of bakers around the world. ',
      imageUrl: workshopImage,
      modalImg: workshopImage,
      liveDemoLink: 'https://siddghosh108.github.io/Capstone-Project',
      githubSourceLink: 'https://github.com/siddghosh108/Capstone-Project?tab=readme-ov-file',
    },
  ];

  return (
    <div id="projects">
      <div className="projects-header">
        <h2 className="project-title"> My Recent Works</h2>
      </div>
      <ProjectsWrapper>
        <ProjectList>
          {projects.map((project) => (
            <ProjectItem key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <div className="button-group">
                <ProjectModals
                  title={project.title}
                  tech={project.tech}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  modalImg={project.modalImg}
                  liveDemoLink={project.liveDemoLink}
                  githubSourceLink={project.githubSourceLink}
                />
              </div>
            </ProjectItem>
          ))}
        </ProjectList>
      </ProjectsWrapper>
    </div>
  );
};

export default Projects;
