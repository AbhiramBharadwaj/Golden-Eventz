import OptimizedImage from '../components/OptimizedImage';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { setMeta } from '../utils/meta';

// Import images
import PlaceholderImage from '../assets/OurWorkPagePhotos/35.webp';
import PlaceholderImage1 from '../assets/OurWorkPagePhotos/36.webp';
import PlaceholderImage2 from '../assets/OurWorkPagePhotos/27.webp';
import PlaceholderImage3 from '../assets/OurWorkPagePhotos/28.webp';
import PlaceholderImage4 from '../assets/OurWorkPagePhotos/37.webp';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const contents = {
    mission: {
      title: "Our Story",
      image: PlaceholderImage,
      description: "Golden Eventz started five years ago by organizing birthday parties. Over time, they grew and began managing big wedding events. Their journey from small birthday gatherings to grand weddings shows their dedication and growth in the event management industry.",
    },
    vision: {
      title: "Our Vision",
      image: PlaceholderImage1,
      description: "Our vision is to redefine the landscape of event management by being pioneers in innovative, impactful event solutions that leave lasting impressions. We aim to inspire change in the industry, pushing the boundaries of creativity and service. By continuously advancing our approach and techniques, we aspire to be the gold standard, influencing trends and setting benchmarks globally.",
    },
    values: {
      title: "Our Values",
      image: PlaceholderImage2,
      description: "Our core values are integrity, excellence, and customer satisfaction. These principles drive every decision and action within our company, ensuring that we maintain ethical standards and deliver superior results. We are committed to upholding these values in our daily operations, ensuring that every client receives the respect, transparency, and quality service they deserve.",
    },
    choice: {
      title: "Why Choose Us?",
      image: PlaceholderImage3,
      description: "Choosing us means opting for peace of mind with expert event management that caters to your every need. Our passionate team brings years of experience and a fresh perspective to every project, ensuring that each event is a unique, tailor-made experience that reflects our client's vision and exceeds their expectations. From logistics to execution, we handle everything, making your event journey seamless and enjoyable.",
    },
    contact: {
      title: "Contact Us",
      image: PlaceholderImage4,
      description: "Ready to start planning your next event? Contact us today! Our dedicated team is eager to bring your vision to life with unmatched professionalism and creativity. Whether it's a corporate gathering, a private celebration, or a large-scale event, we promise to deliver a spectacular experience. Let’s discuss how we can make your upcoming event a resounding success. Call Us +91-7411820612 to know more.",
    },
  };

  useEffect(() => {
    setMeta({
      title: "About Golden Eventz | Luxury Event Planners in Shimoga",
      description:
        "Discover Golden Eventz & Production—Shimoga’s luxury event planners delivering weddings, corporate launches, music nights, and bespoke celebrations with meticulous decor, AV, hospitality, and coordination.",
      keywords: [
        "Golden Eventz about",
        "Shimoga event planners",
        "luxury wedding planners Karnataka",
        "corporate event management Shimoga",
        "Sangeeth night planners",
        "event decor and production",
      ],
    });
  }, []);

  return (
    <>
      <style>{`
        .custom-nav-link {
          border-radius: 20px;
          background-color: #f8f9fa;
          margin-right: 10px;
          color: #000;
          border: none;
          padding: 10px 20px;
          transition: background-color 0.3s;
        }
        .custom-nav-link:hover, .custom-nav-link.active {
          background-color: #e9ecef;
          color: #495057;
        }
        .custom-tab-content {
          text-align: left;
          padding: 20px;
        }
        .about-section {
          padding-top: 80px; /* Adjust this value to create enough space from the navbar */
        }
        .nav-item {
          margin-bottom: 10px; /* Add space between buttons */
        }
      `}</style>
      <div className="container-fluid mt-5 pt-5 about-section"> {/* Add margin and padding to the top */}
        <Tab.Container id="about-tabs" defaultActiveKey="mission">
          <Row className="justify-content-center">
            <Col md={8}>
              <Nav variant="tabs" defaultActiveKey="mission">
                {Object.keys(contents).map(key => (
                  <Nav.Item key={key} className="mb-2"> {/* Add margin bottom to each Nav.Item */}
                    <Nav.Link eventKey={key} onClick={() => setActiveTab(key)} className="custom-nav-link">
                      {contents[key].title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col md={8}>
              <TransitionGroup>
                <CSSTransition key={activeTab} timeout={500} classNames="tab-fade" unmountOnExit>
                  <Tab.Content>
                    <Tab.Pane eventKey={activeTab}>
                      <div className="card mb-5 shadow bg-white custom-tab-content">
                        <OptimizedImage src={contents[activeTab].image} alt={contents[activeTab].title} className="img-fluid mb-4" style={{ maxWidth: '100%', height: 'auto' }} />
                        <p>{contents[activeTab].description}</p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </CSSTransition>
              </TransitionGroup>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default About;
