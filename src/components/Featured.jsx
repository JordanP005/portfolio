import React from "react";
import { Link } from "react-router-dom";

function Featured() {
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
  ];
  return (
    <section className="featured">
      <img
        className="feature-square-1"
        src="assets/Rectangle 4-1.png"
        alt="backgroundsquare"
      />
      <img
        className="feature-square-2"
        src="assets/Rectangle 4.png"
        alt="backgroundsquare"
      />
      <div className="feature-box">
        <div className="feature-header">
          <h1>Featured Projects</h1>
          <Link to="/projects">
            <div className="view-button">view all</div>
          </Link>
        </div>
        <div className="projects-container">
          {projects.slice(0, 3).map((project, key) => {
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
    </section>
  );
}

export default Featured;
