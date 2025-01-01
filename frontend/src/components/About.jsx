import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At FOOD4U, we believe every meal tells a story. Nestled in the heart of Jalna, our passion for culinary excellence drives us to create unforgettable dining experiences.

Our journey began with a simple idea: to bring people together through the universal language of food. Each dish on our menu is crafted with love, using the freshest ingredients sourced locally and sustainably. From time-honored recipes to innovative flavors, we offer a perfect blend of tradition and creativity.

More than just a place to eat, FOOD4U is where memories are made. Whether it’s a family gathering, a romantic date night, or a celebration with friends, our warm ambiance and exceptional service will make you feel right at home.

Join us and discover why food is not just our passion—it’s our way of life. Welcome to FOOD4U, where every bite is a promise of happiness.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;