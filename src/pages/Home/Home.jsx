import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Testimonial from "../../components/OfferTimer/OfferTimer";
import Footer from "../../components/Footer/Footer";

const slideImagesArray = [
  "https://i.postimg.cc/yY8m2hHd/group-elephants-walking-dry-grass-wilderness.jpg",
  "https://i.postimg.cc/yN4S6cw0/lion-pride-dry-forest.jpg",
  "https://i.postimg.cc/8c0j26RJ/herd-wild-zebras-african-flood-plain.jpg",
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImagesArray.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-section">
      <Navbar />
      {/* Slideshow Section (no animation on main background) */}
      <div className="images-slideshow">
        <img
          src={slideImagesArray[currentIndex]}
          alt="slideshow"
          className="slide-image"
        />
        <h2>Experience the Best of Maasai Mara</h2>
        <p>
          Maasai Mara is a world-renowned wildlife reserve in Kenya, famous for
          its breathtaking landscapes and rich biodiversity. Home to the iconic
          Big Five (lion, leopard, elephant, rhino, and buffalo), it offers an
          unforgettable safari experience. Every year, the Great Migration sees
          millions of wildebeests and zebras crossing the Mara River, making it
          one of the greatest natural spectacles on Earth. Visitors can also
          immerse themselves in Maasai culture, take thrilling game drives, and
          witness golden sunsets over the vast African plains. Maasai Mara is
          truly a paradise for nature lovers and adventure seekers!
        </p>
      </div>

      {/* Tour Features Section */}
      <div className="tour-features">
        {/* Feature 1: Wildlife Safari */}
        <div className="feature">
          <motion.div
            className="feature-image-container"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.postimg.cc/L61Vtrcp/lion-5311194-1280.jpg"
              alt="Wildlife Safari"
            />
          </motion.div>
          <motion.div
            className="feature-text-container"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <h2>Wildlife Safari</h2>
            <p>
              Embark on thrilling game drives and spot the Big Five in their
              natural habitat. Experience the breathtaking landscapes, from vast
              savannas to dense forests, as expert guides lead you through the
              heart of the wilderness. Witness herds of elephants, majestic
              lions, elusive leopards, and towering giraffes in their natural
              surroundings. Capture unforgettable moments and immerse yourself
              in the sights and sounds of the wild on this once-in-a-lifetime
              adventure.
            </p>
            <button>🌿 Hop on Wild Safari</button>
          </motion.div>
        </div>

        {/* Feature 2: Great Migration */}
        <div className="feature">
          <motion.div
            className="feature-image-container"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.postimg.cc/TwxPsWw0/zebra-2808196-1280.jpg"
              alt="Great Migration"
            />
          </motion.div>
          <motion.div
            className="feature-text-container"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <h2>Great Migration</h2>
            <p>
              Witness the awe-inspiring movement of millions of wildebeests and
              zebras across the vast savanna. This dramatic spectacle, one of
              the Seven Natural Wonders of Africa, unfolds as animals risk their
              lives crossing crocodile-infested rivers in search of greener
              pastures. Feel the ground tremble as thousands of hooves thunder
              across the plains, experience nature’s raw intensity, and see
              predators like lions, cheetahs, and hyenas lurking nearby, waiting
              for their chance.
            </p>
            <button>Witness the Great Migration</button>
          </motion.div>
        </div>
      </div>

      {/* Tour Features Two */}
      <div className="tour-features tour-features-two">
        {/* Feature 3: Cultural Encounters */}
        <div className="feature">
          <motion.div
            className="feature-image-container"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.postimg.cc/pTKs23Px/girl-3967953-1280.jpg"
              alt="Cultural Encounters"
            />
          </motion.div>
          <motion.div
            className="feature-text-container"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <h2>Cultural Encounters</h2>
            <p>
              Engage with the Maasai people and immerse yourself in their
              fascinating traditions and way of life. Visit authentic Maasai
              villages, learn about their deep connection to the land, and
              listen to their captivating stories passed down through
              generations. Experience their vibrant dances, intricate beadwork,
              and age-old rituals that have been preserved for centuries. This
              cultural exchange offers a unique opportunity to gain insight into
              a rich heritage that remains deeply rooted in harmony with nature.
            </p>
            <button>Explore Booking Options</button>
          </motion.div>
        </div>

        {/* Feature 4: Hot Air Balloon Safari */}
        <div className="feature">
          <motion.div
            className="feature-image-container"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.postimg.cc/SNxf5nYm/balloon-5307204-1280.jpg"
              alt="Hot Air Balloon Safari"
            />
          </motion.div>
          <motion.div
            className="feature-text-container"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <h2>Hot Air Balloon Safari</h2>
            <p>
              Soar above the vast Maasai Mara plains in a breathtaking hot air
              balloon safari. Experience the magic of an African sunrise as
              golden light spills over the horizon, illuminating the endless
              savanna below. From above, witness herds of elephants, giraffes,
              and zebras moving gracefully across the land. Enjoy a peaceful yet
              exhilarating ride, followed by a traditional bush breakfast in the
              heart of the wilderness. This once-in-a-lifetime adventure
              provides an unmatched perspective of the stunning landscape.
            </p>
            <button>Book your ride now!</button>
          </motion.div>
        </div>
      </div>

      <div className="accommodation-section">
        <div className="accommodation-feature">
          <motion.div
            className="accommodation-image-container"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://i.postimg.cc/BQj1HH1P/building-5892592-1280.jpg"
              alt="Luxury and Comfort"
            />
          </motion.div>
          <motion.div
            className="accommodation-text-container"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <h1>Luxury and Comfort</h1>
            <p>
              Stay in premium lodges and tented camps that blend comfort with
              the beauty of the wild. Experience the best of both
              worlds—luxurious accommodations set in breathtaking natural
              surroundings. Enjoy world-class dining, spectacular sunset views,
              and personalized service while being just steps away from Africa’s
              incredible wildlife. Whether you prefer an elegant lodge with
              panoramic views or a charming tented camp that brings you closer
              to nature, your stay in Maasai Mara promises relaxation,
              adventure, and unforgettable memories.
            </p>
            <button>Book your Stay with Travel Ula</button>
          </motion.div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
