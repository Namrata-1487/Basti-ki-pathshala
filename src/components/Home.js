import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Importing the CSS file for styling
import background from './images/background-image.jpg'; // Your background image
import { Container, Button } from 'react-bootstrap'; // Importing Bootstrap components for layout and styling

import aboutImage from './images/about-image.jpg'; // Importing the about image
import childrenImage from './images/children-image.jpg'; // Importing the children image
import childrenImage2 from './images/childrenImage2.jpg'; // Importing the second children image
import kanika from './images/kanika.jpg'; // Importing the testimonial images
import shreya from './images/Shreya.jpeg';
import pooja from './images/Pooja.jpg';
import CountUp from 'react-countup'; // Importing CountUp for animated number counting
import bgImage from './images/bgImage.jpg'; // Importing the background image for stats section

const testimonials = [
 {
  name: "Kanika Rajput",
  image: kanika,
  text: "As an intern at Basti Ki Pathshala Foundation, I've been truly inspired by the dedication of the team and the impact we're making in underserved communities. It's been an eye-opening experience to witness firsthand the transformation that education can bring to the lives of children living in slum areas. I'm grateful for the opportunity to contribute to such meaningful work and to be a part of this incredible journey."
 },
 {
  name: "Shreya Gupta",
  image: shreya,
  text: "Joining Basti Ki Pathshala Foundation as an intern has been an enriching experience that has deepened my understanding of the importance of education in breaking the cycle of poverty. The opportunity to work closely with children from slum areas and witness their enthusiasm for learning has been incredibly inspiring. The supportive environment and mentorship provided by the team have helped me develop valuable skills and perspective that will stay with me long after my internship ends. I'm grateful for the chance to contribute to such a meaningful cause."
 },
 {
  name: "Pooja Arora",
  image: pooja,
  text: "My time as an intern at Basti Ki Pathshala Foundation has been nothing short of transformative. From facilitating educational workshops to engaging with local communities, every moment has been filled with learning and growth. The passion and commitment of the team are palpable, and it's truly rewarding to see the positive changes we're making in the lives of marginalized children. I'm proud to be a part of an organization that is making a real difference in the world."
 }
];

const statsData = [
 { label: "Life Changed", value: 31245 },
 { label: "Meals Served", value: 28976 },
 { label: "Interns", value: 19854 },
 { label: "Supporters", value: 10989 },
];

const Home = () => {


 return (
  <div className='container-fluid bg-white p-0'>
   <div className="hero-section container-fluid" style={{ backgroundImage: `url(${background})` }}>
    <Container className="text-center text-white hero-content">
     <h1 className="display-3 ">Basti Ki Pathshala Foundation</h1>
     <p className="lead fs-5 text-white my-3">
      Join us in our mission to break the barriers of education in underserved communities.
      With your support, we can provide quality education to children living in slum areas,
      empowering them with knowledge and skills to build a brighter future.
     </p>
     <Button variant="warning" size="lg">Donate Now</Button>
    </Container>

   </div>
   <section className="about-preview py-5">
    <div className="container bg-white rounded-3 shadow">
     <div className="row p-5">
      <div className="col-lg-6 mb-4 mb-lg-0 border-end">
       <img src={aboutImage} alt="About Us" className="img-fluid rounded w-100" />
      </div>
      <div className="col-lg-6 p-4">
       <h5 className="text-uppercase text-dark ">About Us</h5>
       <h1 className=" mb-3">
        Lighting the Path to Change with <br />
        Basti Ki Pathshala Foundation
       </h1>
       <p className='fs-5'>
        At Basti Ki Pathshala Foundation, we believe education is the cornerstone of empowerment.
        We stand as a beacon of hope in underserved communities, working to break the cycle of poverty
        through learning.
       </p>
       <p className='fs-5'>Join us in our quest to rewrite the narrative of education, one success story at a time. Together, let’s build a world where every child has the opportunity to dream, to learn, and to soar. Welcome to Basti Ki Pathshala Foundation – where hope is our currency, and education is our legacy.</p>
       <Link to="/about" className="btn btn-warning px-4 py-2">
        Donate
       </Link>
      </div>
     </div>
    </div>
   </section>
   <section className="why-education-section container py-5">
    <div className="row">
     <div className="col-lg-6">
      <div className='pe-4'>
       <h2 className="section-title my-4">Why Education is important?</h2>
       <h3 className="section-subtitle my-4">Breaking the Cycle of Poverty</h3>
       <p className='fs-5'>
        Education offers underprivileged slum children a pathway out of poverty by providing them with the knowledge and skills necessary to secure better opportunities in the future. By empowering them with education, these children can break the intergenerational cycle of poverty and create a brighter future for themselves and their families.
       </p></div>

      <div className='pe-4'>
       <h3 className="section-subtitle my-4">Empowerment and Self-Improvement</h3>
       <p className='fs-5'>
        Education empowers slum children to envision a life beyond their current circumstances. It instills in them a sense of self-worth and confidence, enabling them to dream big and pursue their aspirations. Through education, these children gain the tools to advocate...
       </p>
      </div>

      <div className='pe-4'>
       <h3 className="section-subtitle my-4">Building Resilience and Hope
       </h3>
       <p>
        Education offers slum children a sense of hope and resilience in the face of adversity. It equips them with the skills to overcome challenges and navigate the complexities of their environment. By investing in their education, we provide these children with a beacon of hope, showing them that a brighter future is possible, no matter where they come from.
       </p>
      </div>
     </div>
     <div className="col-lg-6 text-center">
      <img src={childrenImage} alt="Children studying" className="img-fluid rounded shadow w-75 " />
     </div>
    </div>
   </section>
   <section className="join-us-section container-fluid bg-light ">
    <div className="row">
     <div className="col-lg-6 p-0">
      <img src={childrenImage2} alt="Children studying 2" className="img-fluid shadow w-100" />
     </div>
     <div className="col-lg-6 p-5">
      <div className='pt-5'>
       <h4 className='section-address mb-3'>JOIN OUR</h4>
       <h1 class="section-title my-3">TEAM</h1>
       <p className='fs-5'>
        At Basti Ki Pathshala Foundation, we’re not just building a team; we’re assembling a force for change. As we continue our mission to break barriers and empower communities through education, we invite passionate individuals to join us in making a tangible difference in the lives of underserved children.
       </p>
       <p className='fs-5'>Whether you’re a seasoned educator, a community organizer, or simply someone with a heart for social impact, there’s a place for you in our team. Together, we’ll collaborate, innovate, and inspire, working towards a future where every child has the opportunity to thrive.

       </p>
       <p className='fs-5'>Join us in this rewarding journey of transformation. Together, let’s pave the way for brighter tomorrows and empower futures, one child at a time.

       </p>
       <div className='row mt-4 '>
        <div className='col-3'>
         <Button variant="warning" size="lg">
          <Link to={"/donate"} className="text-dark text-decoration-none">
           Donate</Link>
         </Button></div>
        <div className='col-3'>
         <Button variant="secondary" size="lg">
          <Link as={Link} to="/about" className="text-white text-decoration-none">
           About</Link>
         </Button></div>
       </div>
      </div>


     </div>

    </div>
   </section>
   <section className="testimonials container py-5 bg-white">
    <h2 className="section-title text-center mt-5">Intern Insights</h2>
    <p className="section-subtitle text-center ">Hear from Our Valued Team Members </p>
    <div className="row py-5">
     {testimonials.map((testimonial, index) => (
      <div className="col-lg-4 mb-4" key={index}>
       <div className="testimonial-card p-5 h-100 rounded shadow-sm bg-light">
        <p>{testimonial.text}</p>
        <div className="text-center mt-4">
         <img
          src={testimonial.image}
          alt={testimonial.name}
          className="testimonial-img mb-2 w-25 h-25 rounded-circle shadow"
         />
         <h5 className="testimonial-name">{testimonial.name}</h5>
        </div>
       </div>
      </div>
     ))}
    </div>
   </section>
   <section className="stats-counter py-5 d-flex align-items-center"
    style={{
     backgroundImage: `url(${bgImage})`,

     backgroundSize: 'cover',
     backgroundPosition: 'center',
     color: 'white',
    }}
   >
    <div className="container-fluid py-5">
     <div className="row align-items-center justify-content-center text-center">
      {statsData.map((stat, index) => (
       <div className="col-md-3" key={index}>
        <h1 className="counter-number text-warning fw-bold">
         <CountUp end={stat.value} duration={3} separator="," />
        </h1>
        <h5 className="counter-label">{stat.label}</h5>
       </div>
      ))}
     </div>
    </div>
   </section>
  </div>

 )
}

export default Home
