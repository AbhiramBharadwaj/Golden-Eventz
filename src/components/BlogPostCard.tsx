import { Card, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from './OptimizedImage';

type BlogPostCardProps = {
  post: { title: string; image: string; content: string; excerpt: string };
  expanded: boolean;
  onToggle: () => void;
};

export default function BlogPostCard({ post, expanded, onToggle }: BlogPostCardProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <Col md={6} lg={4} className="mb-4">
            <Card className={`bento-item ${inView ? 'reveal' : ''}`} ref={ref}>
                <Card.Img as={OptimizedImage} variant="top" src={post.image} alt={post.title} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{expanded ? post.content : post.excerpt}</Card.Text>
                    <button onClick={onToggle} className="btn btn-primary" aria-expanded={expanded}>
                        {expanded ? 'Read Less' : 'Read More'}
                    </button>
                </Card.Body>
            </Card>
        </Col>
    );
}
