import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTitle } from "../components/useTitle";

function ProjectsPage() {
  useTitle("Projects");

  const projects = [
    {
      image: "assets/easybank-1.png",
      title: "Easybank",
      description:
        "A digital banking platform.This website was built by me using a reference image and design assets",
      site: "https://easybank-inky-theta.vercel.app/",
      repo: "https://github.com/JordanP005/Easybank",
    },
    {
      image: "assets/blogr-1.png",
      title: "Blogr",
      description:
        "Blogr is a modern publishing platform, the website was built by using a design reference image and assets provided",
      site: "https://blogr-rose.vercel.app/",
      repo: "https://github.com/JordanP005/Blogr",
    },
    {
      image: "assets/crowdfund-1.png",
      title: "Crowdfund",
      description:
        "A functional crowdfunding website. This project includes dynamic components based on user input and values.",
      site: "https://crowdfund-project.vercel.app/",
      repo: "https://github.com/JordanP005/crowdfund-project",
    },
    {
      image: "assets/Scholance-1.png",
      title: "Scholance",
      description:
        "A student freelance website that allows learners to complete their community service hours online",
      site: "https://scholance-gadv6hcs4-jordanp005.vercel.app/",
      repo: "https://github.com/JordanP005/Scholance",
    },
    {
      image: "assets/Pollerade-1.png",
      title: "Pollerade",
      description:
        "A website I built for website for a digital marketing agency",
      site: "https://pollerade-rebuild.vercel.app/",
      repo: "https://github.com/JordanP005/-Pollerade-rebuild/",
    },
    {
      image: "assets/Adsnap-1.png",
      title: "Adsnap",
      description: "A multipage website for Adsnap a online advertising agency",
      site: "https://dropdown-app.vercel.app/",
      repo: "https://github.com/JordanP005/dropdown-app/",
    },
  ];

  return (
    <div className="projmain">
      <Navbar page={3} />
      {window.innerWidth > 600 ? (
        <div className="projcontainer">
          {projects.map((project, key) => {
            return (
              <div className="projbox">
                <div
                  className="projimage"
                  style={{
                    backgroundImage: "url(" + project.image + ")",
                  }}
                ></div>
                <div className="projwrapper">
                  <div className="projtext">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <div className="featlinks">
                    <div className="projbutton">
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Repository
                      </a>
                    </div>
                    <div className="projbutton">
                      <a href={project.site} target="_blank" rel="noreferrer">
                        Live Site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="projcontainer">
          <div className="projects-container">
            {projects.map((project) => {
              return (
                <div className="project-box">
                  <div
                    className="project-image"
                    style={{
                      backgroundImage: "url(" + project.image + ")",
                    }}
                  ></div>
                  <div className="project-text">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="feature-links">
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        Repository
                      </a>
                      <a href={project.site} target="_blank" rel="noreferrer">
                        Live Site
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProjectsPage;
