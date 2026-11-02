import useNearViewport from '../../hooks/useNearViewport';
import background from '../../assets/Location1.webp';
import './ReviewSection.css';

const reviews = [
  { "id": 1, "text": "“Fantastic job at the Haladi function!”", "name": "Lokesh" },
  { "id": 2, "text": "“Very professional and well-organized!”", "name": "Anjali" },
  { "id": 3, "text": "“Our wedding was perfect thanks to them!”", "name": "Priya" },
  { "id": 4, "text": "“Awesome music night with superb sound!”", "name": "Vijay Kumar" },
  { "id": 5, "text": "“Great execution of our corporate workshops!”", "name": "Deepika" },
  { "id": 6, "text": "“The wedding was beautifully organized and fun!”", "name": "Nitin" },
  { "id": 7, "text": "“Excellent planning for our company's annual day!”", "name": "Sunita" },
  { "id": 8, "text": "“Lovely Haladi function, wonderfully managed!”", "name": "Amit Shetty" },
  { "id": 9, "text": "“Outstanding management of our corporate event!”", "name": "Lakshmi Gowda" },
  { "id": 10, "text": "“Fantastic series of music nights, very entertaining!”", "name": "Sanjay" },
  { "id": 11, "text": "“Incredible attention to detail at our marriage program!”", "name": "Varun" },
  { "id": 12, "text": "“Superb arrangement for our musical event!”", "name": "Kiran" },
  { "id": 13, "text": "“Every guest loved the corporate event setup!”", "name": "Chitra" },
  { "id": 14, "text": "“Truly a memorable experience at the annual gala!”", "name": "Harish Rao" },
  { "id": 15, "text": "“Made our company retreat absolutely perfect!”", "name": "Vinay" }
]
;

const ReviewSection = () => {
  const { ref, isNear } = useNearViewport();
  return (
    <section ref={ref} className="reviews-section" style={{ backgroundImage: isNear ? `url(${background})` : undefined }}>
      <h2 className="text-5xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="reviews-marquee">
        <div className="reviews-track">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-name">{review.name}</div>
              <div className="review-text">{review.text}</div>
            </div>
          ))}
          {reviews.map((review) => (
            <div key={review.id + reviews.length} className="review-card">
              <div className="review-name">{review.name}</div>
              <div className="review-text">{review.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;