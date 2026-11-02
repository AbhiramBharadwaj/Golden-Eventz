import BlogPostCard from '../components/BlogPostCard';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BlogPage.css'; 
import image1 from '../assets/OurWorkPagePhotos/21.webp';
import image2 from '../assets/OurWorkPagePhotos/22.webp';
import image3 from '../assets/gifs/1.webp';
import image4 from '../assets/OurWorkPagePhotos/24.webp';
import image5 from '../assets/OurWorkPagePhotos/25.webp';
import image6 from '../assets/OurWorkPagePhotos/26.webp';
import { setMeta } from '../utils/meta';

const blogPosts = [
    {
        id: 1,
        title: "Creating Magical Moments: How We Plan Perfect Weddings",
        excerpt: "Planning a wedding can be a monumental task...",
        content: `Planning a wedding can often feel like orchestrating a grand performance. At Golden Eventz, we believe in turning these dreams into reality with a touch of magic and lots of planning. From the moment you engage with us, our team of experts listens closely to understand your vision. Whether it’s a quaint beach wedding or a lavish palace affair, we handle every detail from venue selection, floral arrangements, bespoke catering, and unforgettable entertainment. Our commitment is to create a seamless and stress-free experience so that you can enjoy your big day to the fullest.`,
        image: image1
    },
    {
        id: 2,
        title: "Innovative Corporate Events That Break the Mold",
        excerpt: "Gone are the days of boring corporate events...",
        content: `The corporate world is evolving, and so are the events that drive its networking. Gone are the days of boring corporate gatherings; welcome to a new era of engaging and productive corporate events with Golden Eventz. We blend technology, innovation, and creativity to transform your usual meet-and-greet sessions into dynamic events that promote collaboration and innovation. From tech expos to leadership retreats, we ensure each event is crafted to meet strategic objectives while also being memorably enjoyable.`,
        image: image2
    },
    {
        id: 3,
        title: "Event Trends for 2024: What's Next",
        excerpt: "Stay ahead of the curve with our insights...",
        content: `As event planners at the forefront of the industry, Golden Eventz is always keyed into the next big trends. In 2024, we expect to see a surge in sustainable event practices, a greater integration of digital technology, and a push towards more personalized experiences. We’re particularly excited about advancements in virtual and augmented reality that allow attendees from around the world to feel as though they’re interacting face-to-face, thereby opening new doors for international synergy.`,
        image: image3
    },
    {
        id: 4,
        title: "Sustainable Practices in Event Planning",
        excerpt: "Learn how we integrate sustainability...",
        content: `Sustainability is no longer a buzzword but a necessary ethos at Golden Eventz. We prioritize green practices in every aspect of our event planning, from choosing eco-friendly venues to minimizing waste and maximizing recycling. Our goal is to lead by example and inspire our clients and peers to join us in making the event industry more sustainable.`,
        image: image4
    },
    {
        id: 5,
        title: "Tech Innovations in Event Management",
        excerpt: "Explore cutting-edge technologies...",
        content: `Explore cutting-edge technologies that are transforming the event management industry. At Golden Eventz, we incorporate the latest tech to enhance event efficiency and engagement. From AI-powered event analytics to mobile apps that streamline attendee experiences, our tech integrations ensure that every event is not only spectacular but also state-of-the-art.`,
        image: image5
    },
    {
        id: 6,
        title: "Cultural Events That Connect Communities",
        excerpt: "Discover how cultural events can bridge gaps...",
        content: `Discover how cultural events can bridge gaps and connect communities in profound ways. At Golden Eventz, we specialize in crafting events that celebrate diversity and foster understanding. Whether it’s a multicultural festival or a heritage exhibition, we design experiences that bring people together and celebrate the rich tapestry of our shared human experience.`,
        image: image6
    }
];

function BlogPage() {
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        setMeta({
            title: "Golden Eventz Blog | Wedding, Corporate & Event Planning Insights",
            description:
                "Read Golden Eventz articles on luxury weddings, corporate launches, Sangeeth nights, tech-enabled events, sustainability, and decor trends across Shimoga, Bangalore, Mysore, and Mangalore.",
            keywords: [
                "event planning blog",
                "wedding tips Golden Eventz",
                "corporate event ideas Karnataka",
                "Sangeeth night inspiration",
                "event technology trends",
                "sustainable event practices",
            ],
        });
    }, []);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="blog-page">
            <Col xs={12}> {/* Takes full width on small screens */}
            <div className="welcome-section">
                <h1>Welcome to Our Blog</h1>
            </div>
            </Col>
            <Container className="mt-5">
                <Row>
                    {blogPosts.map((post) => (
                        <BlogPostCard
                            key={post.id}
                            post={post}
                            expanded={expandedId === post.id}
                            onToggle={() => toggleExpand(post.id)}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default BlogPage;
