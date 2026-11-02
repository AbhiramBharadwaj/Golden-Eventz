import OptimizedImage from '../components/OptimizedImage';
import { lazy, Suspense, useState, useEffect } from 'react';
import BackgroundImage from '../assets/Location1.webp';
import Location from '../assets/Location.webp';
import { FaInstagram, FaWhatsapp, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa"; // Added Facebook, Twitter, LinkedIn icons
import '../pages/Contact.css'; // Ensure your CSS is properly linked
import animationData from '../assets/Animation/Animation.json';
import { setMeta } from '../utils/meta';

const Lottie = lazy(() => import('react-lottie'));

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMeta({
      title: "Contact Golden Eventz | Shimoga Event Planners",
      description:
        "Contact Golden Eventz & Production for weddings, corporate events, music nights, decor, makeup, catering, and AV in Shimoga, Bangalore, Mysore, and Mangalore. Call +91 7411820612 or email goldeneventmanagement.in@gmail.com.",
      keywords: [
        "contact Golden Eventz",
        "event planners Shimoga contact",
        "wedding planning inquiry",
        "corporate events contact Karnataka",
        "Golden Eventz phone",
        "Golden Eventz email",
      ],
    });
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const name = event.target.elements.name.value;
    const contactNumber = event.target.elements.contactNumber.value;
    const message = event.target.elements.message.value;
 
    try {
      const [{ db }, { collection, addDoc }] = await Promise.all([
        import('../firebase'),
        import('firebase/firestore'),
      ]);
      await addDoc(collection(db, "contacts"), {
        name,
        contactNumber,
        message,
      });
      setMessageStatus('success');
    } catch (e) {
      console.error("Error adding document: ", e);
      setMessageStatus('error');
    } finally {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setIsSubmitting(false);
      }, 3000);  // Message will disappear after 3 seconds
      event.target.reset();
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      className="contact-page min-h-screen bg-cover bg-center flex items-center justify-center pt-16" // Added pt-16 for padding at the top
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {isSubmitting && (
        <div className="absolute z-50 w-32 h-32">
          <Suspense fallback={<div role="status">Sending message…</div>}>
            <Lottie options={defaultOptions} />
          </Suspense>
        </div>
      )}
      {showMessage && (
        <div className={`message-box ${messageStatus === 'success' ? 'bg-green-200' : 'bg-red-500'}`}>
          {messageStatus === 'success' ? 'Message sent successfully! Team will contact you soon!' : 'Failed to send message.'}
        </div>
      )}
      <div className="container mx-auto p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <div className="bg-white shadow-md rounded-lg p-6 lg:flex lg:space-x-8">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold mb-4"></h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input type="text" name="contactNumber" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Contact Number" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Send Message</button>
            </form>
          </div>
          <div className="lg:w-1/2 space-y-4 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              <strong>Address:</strong> #102, Devaraj URS Extention, Kanaka Nagar, Shivamogga 577204
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91-7411820612
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> goldeneventmanagement.in@gmail.com
            </p>
            <div className="social-media-links flex gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100091963924674&wtsid=rdr_0Li1FpSD1e1DlBKur" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl" /></a>
              <a href="https://www.linkedin.com/in/golden-event-management-3409262b1/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl" /></a>
              <a href="https://www.instagram.com/goldeneventz.co/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-2xl" /></a>
              <a href="https://www.youtube.com/watch?v=SYgAXOGn5m4" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-2xl" /></a>
              <a href="https://wa.me/7411820612?text=I'm%20interested%20to%20know%20more%20about%20Golden Eventz" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-2xl" /></a>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
              <a href="https://www.google.com/maps/dir/..." target="_blank" rel="noopener noreferrer">
                <OptimizedImage src={Location} alt="Map" className="w-full h-64 object-cover rounded-md"/>
              </a>
              <p className="text-blue-500 hover:underline mt-2">Click on the image to get the Google Maps Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
