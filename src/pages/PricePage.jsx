import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './PricePage.css'; // Ensure to include CSS for styling and animations
import backgroundImage from '/src/assets/money.webp';
import { setMeta } from '../utils/meta';

function PricePage() {
    const [numberOfPeople, setNumberOfPeople] = useState(50);
    const [eventType, setEventType] = useState('Wedding Events');
    const [duration, setDuration] = useState(4); // Duration in days

    useEffect(() => {
        setMeta({
            title: "Pricing Calculator | Golden Eventz",
            description:
                "Estimate event costs with Golden Eventz. Get pricing for weddings, corporate events, themed parties, and decor packages in Shimoga, Bangalore, Mysore, and Mangalore.",
            keywords: [
                "Golden Eventz pricing",
                "event cost calculator",
                "wedding budget planner Shimoga",
                "corporate event pricing",
                "event packages Karnataka",
            ],
        });
    }, []);

    const eventTypes = {
        'Haladi Event': 100,
        'Corporate Event': 200,
        'Wedding Events': 300,
        'Birthday Decors': 150,
        'Themed Parties': 250
    };

    const handleEventTypeChange = (type) => {
        setEventType(type);
    };

    const handleSliderChange = (event, type) => {
        if (type === 'people') {
            setNumberOfPeople(event.target.value);
        } else if (type === 'duration') {
            setDuration(event.target.value);
        }
    };

    const calculateTotalCost = () => {
        const baseCost = eventTypes[eventType];
        return numberOfPeople * duration * baseCost;
    };

    return (
        <div className="price-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Container fluid className="p-0">
                <div className="header-section">
                    <h1>Creative Way to Calculate</h1>
                    <p>These are only the estimated costs.</p>
                </div>
                <Container>
                    <Row>
                        <Col md={4}>
                            {Object.keys(eventTypes).map((type) => (
                                <Card key={type} className={`mb-3 event-type-card ${eventType === type ? 'active' : ''}`}
                                      onClick={() => handleEventTypeChange(type)}>
                                    <Card.Body>
                                        <Card.Title>{type}</Card.Title>
                                        <Card.Text>
                                            Starting at ₹{eventTypes[type]} per person per day.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Event Cost Calculator</Card.Title>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Number of People: {numberOfPeople}</Form.Label>
                                            <Form.Control
                                                type="range"
                                                min="10"
                                                max="500"
                                                value={numberOfPeople}
                                                onChange={(e) => handleSliderChange(e, 'people')}
                                                className="slider"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Duration (days): {duration}</Form.Label>
                                            <Form.Control
                                                type="range"
                                                min="1"
                                                max="12"
                                                value={duration}
                                                onChange={(e) => handleSliderChange(e, 'duration')}
                                                className="slider"
                                            />
                                        </Form.Group>
                                        <h3 className="total-cost">Total Cost: ₹{calculateTotalCost()}</h3>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default PricePage;
