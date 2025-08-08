import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import background from './images/background-image.webp'; // Your background image
import image1 from './images/Our-Mission.webp'; // Example image for the mission section
import image2 from './images/Our-Story.webp'; // Example image for the vision section


const count = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlSpace="preserve" height="60">
        {<path d="M11.6 19.1H4.5c-2.5 0-4.5 2-4.5 4.5v9.8c0 1.7 1.2 3 2.7 3.4v14.4c0 1.5 1.2 2.7 2.7 2.7h5.4c1.5 0 2.7-1.2 2.7-2.7V37h2.7V23.6c-.1-2.4-2.2-4.5-4.6-4.5zM8 7.6c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm47.3 11.6h-7.1c-2.5 0-4.5 2-4.5 4.5v9.8c0 1.7 1.2 3 2.7 3.4v14.3c0 1.5 1.1 2.8 2.6 2.8h5.5c1.5 0 2.6-1.3 2.6-2.8V37.1c1.5 0 2.7-1.2 2.7-2.7V23.7c0-2.5-2-4.5-4.5-4.5zM51.8 7.6c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2.1-4.5-4.5-4.5z" fill="#ffcd05"></path>}
        {<path d="M39.3 23.7v13.4c0 .8-.6 1.3-1.3 1.3h-1.3v12.9c0 2.2-1.8 4-4 4-1 0-2-.4-2.7-1-.7.6-1.6 1-2.7 1-2.2 0-4-1.8-4-4V39.7c0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3v11.6c0 .8.6 1.3 1.3 1.3s1.3-.6 1.3-1.3V37.1c0-.8.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3v14.3c0 .8.6 1.3 1.3 1.3s1.3-.6 1.3-1.3V37.1c0-.8.6-1.3 1.3-1.3h1.3v-12c0-1.7-1.4-3.1-3.1-3.1h-7.1c-1.7 0-3.1 1.4-3.1 3.1v13.4c0 .8-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3V23.7c0-3.2 2.6-5.8 5.8-5.8h7.1c3.4 0 6 2.6 6 5.8zM24.1 10.3c0-3.2 2.6-5.8 5.8-5.8s5.8 2.6 5.8 5.8-2.6 5.8-5.8 5.8-5.8-2.6-5.8-5.8zm2.7 0c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.7 0-3.1 1.4-3.1 3.1z" fill="#444b54"></path>}
      </svg>
    ),
    number: '31245',
    label: 'Lives Changed',
    highlight: true,
  },
  {
    icon: (<svg aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" height="60">
      <path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path></svg>
    ),
    number: '28976',
    label: 'Meals Served',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlSpace="preserve" height={60}>
      {<path d="M38.2 21.6c4.6 4.6 4.6 12.1 0 16.8s-12.1 4.6-16.8 0-4.6-12.1 0-16.8 12.2-4.6 16.8 0zm16.6 4.9c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6c-.1-2-1.7-3.6-3.6-3.6zM17.4 48c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0-36c2 0 3.6-1.6 3.6-3.6s-1.6-3.6-3.6-3.6-3.6 1.6-3.6 3.6c.1 2 1.6 3.6 3.6 3.6z" fill="#ffcd05"></path>}  {<path d="M24.8 25c2.8-2.8 7.3-2.8 10.1 0s2.8 7.3 0 10.1-7.3 2.8-10.1 0-2.7-7.3 0-10.1z" fill="#fff"></path>}
      {<path d="M29.9 43.3c-3.6 0-6.9-1.4-9.4-3.9-5.2-5.2-5.2-13.6 0-18.8 2.5-2.5 5.8-3.9 9.4-3.9s6.9 1.4 9.4 3.9c5.2 5.2 5.2 13.6 0 18.8-2.6 2.5-5.9 3.9-9.4 3.9zm0-23.7c-2.8 0-5.4 1.1-7.4 3-4.1 4.1-4.1 10.7 0 14.7 2 2 4.6 3.1 7.4 3.1s5.4-1.1 7.4-3c4.1-4.1 4.1-10.7 0-14.7-2-2-4.6-3.1-7.4-3.1zm28.4 6.9c-1.9-1.9-5.1-1.9-7 0-.6.6-1 1.3-1.2 2.1h-3.6c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4H50c.2.8.7 1.5 1.2 2.1.9.9 2.2 1.5 3.5 1.5s2.6-.5 3.5-1.5c2-1.9 2-5 .1-7zm-2 5c-.9.9-2.2.9-3 0-.9-.9-.9-2.2 0-3 .9-.9 2.2-.9 3 0 .8.9.8 2.2 0 3zM43.6 46.8c-.8-.2-1.7-.2-2.5 0l-1.8-3c-.4-.7-1.3-.9-1.9-.5-.7.4-.9 1.3-.5 1.9l1.8 3c-.6.6-1 1.3-1.2 2.1-.7 2.7.9 5.4 3.5 6.1.4.1.9.2 1.3.2.9 0 1.7-.2 2.5-.7 1.1-.7 2-1.8 2.3-3 .7-2.7-.8-5.4-3.5-6.1zm.8 5.3c-.1.6-.5 1-1 1.3-.5.3-1.1.4-1.6.2-.6-.1-1-.5-1.3-1s-.4-1.1-.2-1.6c.1-.6.5-1 1-1.3.5-.3 1.1-.4 1.6-.2 1.1.3 1.8 1.5 1.5 2.6zM21 11.9c.6-.6 1-1.3 1.2-2.1.7-2.7-.9-5.4-3.5-6.1-1.3-.3-2.6-.2-3.8.5-1.1.7-2 1.8-2.3 3-.7 2.7.9 5.4 3.5 6.1.4.1.9.2 1.3.2s.8 0 1.1-.1l1.8 3c.3.5.8.7 1.2.7.2 0 .5 0 .7-.2.7-.4.9-1.3.5-1.9L21 11.9zm-4.1-1.4c-1.1-.3-1.8-1.5-1.5-2.6.1-.6.5-1 1-1.3.5-.3 1.1-.4 1.6-.2.6.1 1 .5 1.3 1s.4 1.1.2 1.6c-.1.6-.5 1-1 1.3-.5.3-1.1.4-1.6.2zm-3.6 20.9c.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4H9.8c-.2-.8-.7-1.5-1.2-2.1-1.9-1.9-5.1-1.9-7 0-2 1.9-2 5.1 0 7 .9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5.6-.6 1-1.3 1.2-2.1h3.5zm-6.8.1c-.9.9-2.2.9-3 0-.9-.9-.9-2.2 0-3 .9-.9 2.2-.9 3 0 .8.9.8 2.2 0 3zm31-14.6c.2.1.5.2.7.2.5 0 .9-.2 1.2-.7l1.8-3c.4.1.8.1 1.1.1.4 0 .9 0 1.3-.2 2.7-.7 4.2-3.5 3.5-6.1-.3-1.3-1.2-2.4-2.3-3s-2.5-.9-3.8-.5c-2.7.7-4.2 3.5-3.5 6.1.2.8.6 1.5 1.2 2.1l-1.8 3c-.3.7-.1 1.6.6 2zm3-9.5c.3-.5.8-.9 1.3-1 .2 0 .4-.1.6-.1.4 0 .7.1 1 .3.5.3.9.8 1 1.3.3 1.1-.4 2.3-1.5 2.6-.5.2-1.1.1-1.6-.2-.5-.3-.9-.8-1-1.3-.2-.5-.1-1.1.2-1.6zM22.3 43.2c-.7-.4-1.6-.1-1.9.5l-1.8 3c-.8-.2-1.6-.2-2.5 0-2.7.7-4.2 3.5-3.5 6.1.3 1.3 1.2 2.4 2.3 3 .8.4 1.6.7 2.5.7.4 0 .9 0 1.3-.2 2.7-.7 4.2-3.5 3.5-6.1-.2-.8-.6-1.5-1.2-2.1l1.8-3c.4-.7.1-1.6-.5-1.9zm-3.1 9.4c-.3.5-.8.9-1.3 1-.6.1-1.1.1-1.6-.2s-.9-.8-1-1.3c-.3-1.1.4-2.3 1.5-2.6.2 0 .4-.1.6-.1.4 0 .7.1 1 .3.5.3.9.8 1 1.3.2.6.1 1.2-.2 1.6z" fill="#444b54"></path>}
    </svg>
    ),
    number: '19854',
    label: 'Interns',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlspace="preserve" height={60}>  <path fill="#fff" d="M32.1 2h15.3v13.2H32.1z"></path>  <path d="m52.5 13.7 5 6.6H38.7V7.1h18.8l-5 6.6zM1.7 57.9h39.7l-19-20.3L1.7 57.9z" fill="#ffcd05"></path>  <path d="M42.3 56.9c.5.7.4 1.6-.3 2.1-.3.2-.6.3-.9.3-.5 0-.9-.2-1.2-.6L22.5 40 3 58.7c-.5.7-1.5.8-2.1.3-.7-.5-.8-1.5-.3-2.1l20.7-20.3c.3-.4.8-.6 1.2-.6.5 0 .9.2 1.2.6l18.6 20.3zm.4-14.6s0-.1 0 0l-9.1-9.9V3.5h12.2v10.1h-8.7c-.9 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h10.2c.9 0 1.5-.7 1.5-1.5V2c0-.9-.7-1.5-1.5-1.5H32c-.9 0-1.5.7-1.5 1.5v29.8l-1.8 2.4c-.5.7-.4 1.7.4 2.1.7.5 1.7.3 2.1-.4l.6-.9 6.2 6.5 15.7 16.9c.3.4.8.6 1.2.6.4 0 .7-.1.9-.3.7-.5.8-1.5.3-2.1L42.7 42.3zm11.7-28.6L58.8 8c.4-.5.4-1.1.2-1.6-.3-.6-.8-.9-1.4-.9h-5.1c-.9 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2l-3.2 4.2c-.4.6-.4 1.3 0 1.9l3.2 4.2H39.8c-.9 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h17.7c.6 0 1.1-.3 1.3-.8.3-.6.2-1.2-.2-1.6l-4.2-5.7z" fill="#454b54"></path></svg>
    ),
    number: '10989',
    label: 'Supporters',
  },
];

const AboutUs = () => {
  return (
    <div className='container-fluid bg-white p-0'>
      <div className="about-us container-fluid" style={{ backgroundImage: `url(${background})` }}>
        <Container className="text-center text-white hero-content">
          <h1 className="display-3 ">About Us</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
      <div className="container-fluid bg-light">
        <div className='container-lg container-fluid p-5 work-together'>
          <h1 className="text-center mb-4 heading">We Work Together</h1>
          <p className="text-center fs-5 text-muted">
            At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.
          </p>
        </div>
        <div className="impact-stats-section pb-5">
          <Container>
            <div className="container-fluid py-5">
              <div className="row align-items-center justify-content-center text-center">
                {count.map((stat, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="counter-icon mb-3">
                      <span className="fs-1">{stat.icon}</span>
                    </div>
                    <h1 className="counter-number">
                      <CountUp end={stat.number} duration={5} separator="," className='text-dark fw-bold' />
                    </h1>
                    <h5 className="counter-label">{stat.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container fluid className='bg-white p-5'>
        <div
          className="row justify-content-center align-items-center g-2"
        >
          <div className="col px-5">
            <h1 className="text-start mb-4 heading">Our Mission: A succinct statement outlining the core purpose and goals of your organization</h1>
            <p className="text-start fs-5 text-muted">At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities. Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families. Together, we strive to rewrite the narrative of education, one child at a time.

            </p>
          </div>
          <div className="col">
            <img src={image1} alt="Our Mission" className="img-fluid rounded" />
          </div>
        </div>
      </Container>
      <Container fluid className='bg-white p-5'>
        <div className="row justify-content-center align-items-center g-2"
        >
          <div className="col">
            <img src={image2} alt="Our story" className="img-fluid rounded" />
          </div>
          <div className="col px-5">
            <h1 className="text-start mb-4 heading">Our Story:</h1>
            <p className="text-start fs-5 text-muted">Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.

            </p>
            <p className="text-start fs-5 text-muted">It all began when Sunita, inspired by their own experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities prevalent in underserved communities. Armed with determination and fueled by compassion, they rallied a team of like-minded individuals who shared their vision of a brighter, more equitable future.
            </p>
            <p className="text-start fs-5 text-muted">From humble beginnings, our organization has grown into a beacon of hope, touching the lives of countless children and families along the way. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.
            </p>
            <p className="text-start fs-5 text-muted">Through the years, we’ve witnessed the transformative power of education firsthand. We’ve seen shy, uncertain children blossom into confident, capable individuals, equipped with the knowledge and skills to pursue their dreams. We’ve seen communities come together, united by a shared commitment to the betterment of their children’s future.
            </p>
            <p className="text-start fs-5 text-muted">As we reflect on our journey, we are filled with gratitude for the unwavering support of our volunteers, donors, partners, and the communities we serve. Together, we have achieved so much, yet we know that our work is far from over.
            </p>
            <p className="text-start fs-5 text-muted">Our story is still being written, with each chapter filled with hope, resilience, and determination. As we look towards the future, we remain steadfast in our mission to break down barriers, uplift communities, and create a world where every child has the opportunity to thrive.
            </p>
          </div>

        </div>
      </Container>
    </div>

  )
}

export default AboutUs