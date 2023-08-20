import React, { useState } from "react";
import "../pages/About_page.css";
import { Button } from "semantic-ui-react";
const About_page = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Tilt Prism, cursive",
          textDecoration: "underline",
          fontSize: "7vh",
        }}
      >
        NearMe-Services!!!
      </h1>
      <div className="overview_about_continar">
        <div className="overview_about">
          {" "}
          <p>
            In an era of technological advancement, our project aims to bridge
            the gap between local service providers and users seeking essential
            household services. Our website is a comprehensive platform designed
            to connect users with a wide range of services, from household
            maintenance to electrician services, all within their local
            vicinity. By leveraging the power of technology, our project not
            only simplifies the lives of users but also contributes to the
            betterment of communities in Tamil Nadu.
          </p>
          <p>
            Our platform empowers users to effortlessly access the services they
            need by simply entering their requirements. With a user-friendly
            interface, they can quickly browse through a curated list of
            services available within their nearby locations. In a unique twist,
            our project also enables service providers to showcase their skills
            and innovations. Service providers can post content that highlights
            their expertise and creativity, fostering a sense of connection and
            trust with potential customers.
          </p>
          <p>
            Our innovative approach focuses on aggregating services offered by
            local service providers, thereby promoting employment opportunities
            for daily wage workers and skilled professionals alike. This aligns
            with our commitment to bolstering local economies and enhancing
            livelihoods.
          </p>
          <p>
            By connecting service providers from across Tamil Nadu, we create a
            vibrant ecosystem that benefits both users and local communities.
            Users gain access to a diverse range of essential services,
            promoting convenience and quality service delivery. Simultaneously,
            service providers, especially daily wage workers and local artisans,
            experience increased visibility, expanded customer reach, and
            sustainable employment prospects.
          </p>
        </div>
      </div>
      <h1 style={{ fontFamily: "Space Mono, monospace" }}>
        step-by-step instructions.
      </h1>
      <img
        id="main_about_image"
        src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211357.png?raw=true"
      ></img>
      <h1>Step1:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211438.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211506.png?raw=true"></img>
        </div>
        <h3>
          To get started, visit our website and click "Sign Up" to register
          using your email. After registering, return to the homepage, click
          "Log In," and enter your credentials to find nearby services
        </h3>
      </div>
      <h1>Step2:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211601.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211632.png?raw=true"></img>
        </div>
        <h3>On the homepage, pick your city from the options provided.</h3>
      </div>
      <h1>Step3:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211709.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211805.png?raw=true"></img>
        </div>
        <h3>
          On the following page, choose your belonging area or utilize the
          search bar to find it.
        </h3>
      </div>
      <h1>Step4:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211857.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20211928.png?raw=true"></img>
        </div>
        <h3>
          On the subsequent page, pick your desired service or use the search
          feature to find it.
        </h3>
      </div>
      <h1>Step5:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212138.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20220716.png?raw=true"></img>
        </div>
        <h3>
          On this page, you'll find info about service providers nearby. You can
          select one you like, check their ratings, and call them using the call
          button.
        </h3>
      </div>
      <h1>Step6:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212459.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20220832.png?raw=true"></img>
        </div>
        <h3>
          If you want more information about a service provider, click "View
          All" to see all the details, including their contact information.
        </h3>
      </div>
      <h1>Step7:</h1>
      <div>
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212235.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212314.png?raw=true"></img>
        </div>
        <h3>
          Service providers share photos of their skills and work. You can like,
          dislike, and comment on these posts.
        </h3>
      </div>
      <h1>Step8:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212656.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-15%20212802.png?raw=true"></img>
        </div>
        <h3>
          You can rate and share feedback about the service provider. You can
          also like, dislike, or report previous feedback.
        </h3>
      </div>
      <h1>Step9:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-14%20232506.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-14%20225447.png?raw=true"></img>
        </div>
        <h3>
          If you're a worker looking to enhance your business, register by
          providing your credentials and details about the services you offer.
          This opportunity for improvement can help you reach more customers and
          grow your business. After successfully registering, you'll receive a
          confirmation email that marks the beginning of your journey toward
          business growth and success.
        </h3>
      </div>
      <h1>Step10:</h1>
      <div className="about_steps">
        <div className="About_bage_images">
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-14%20225906.png?raw=true"></img>
          <img src="https://github.com/SEENIVASANIT/Near-Me-Services/blob/main/NearMeSerives_Screenshorts/Screenshot%202023-08-14%20231406.png?raw=true"></img>
        </div>
        <h3>
          The Nearby Services team will contact you to verify your account,
          which might take a little time. Once verified, you'll receive an
          access code via email. You can use this code to activate your service
          provider account and start posting about your services. After
          activation, you'll be able to access your account and provide services
          to users.
        </h3>
      </div>

      <Button
        primary
        style={{ marginTop: "5vh" }}
        onClick={() => (window.location.href = "/")}
      >
        {" "}
        <h3>let's start</h3>
      </Button>
    </>
  );
};
export default About_page;
