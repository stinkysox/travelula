import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./OfferTimer.css";
const Testimonial = () => {
  return (
    <section className="testimonial-section light">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <h2>Customer Reviews</h2>
          <p>
            See what our valued customers have to say about their experience
            with us. Their feedback inspires us to keep delivering the best
            service possible.
          </p>
        </div>

        <div className="testimonial-item">
          <div className="testimonial-item-image">
            <img
              src="https://cdn.easyfrontend.com/pictures/users/user28.jpg"
              alt="Akshay Kumar"
            />
          </div>
          <div className="testimonial-item-content">
            <h4>Akshay Kumar</h4>
            <p className="testimonial-rating">
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStarHalfAlt className="active" />
              <FaRegStar className="inactive" />
            </p>
            <p className="testimonial-text">
              I had an amazing experience with your service. The tour was
              well-organized and the staff was friendly and knowledgeable. I
              would definitely recommend it to my friends!
            </p>
          </div>
        </div>

        <div className="testimonial-item reverse">
          <div className="testimonial-item-image">
            <img
              src="https://cdn.easyfrontend.com/pictures/users/user7.jpg"
              alt="Raima Ray"
            />
          </div>
          <div className="testimonial-item-content">
            <h4>Raima Ray</h4>
            <p className="testimonial-rating">
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStarHalfAlt className="active" />
              <FaRegStar className="inactive" />
            </p>
            <p className="testimonial-text">
              The experience was truly unforgettable. The attention to detail
              and quality of service exceeded my expectations. I look forward to
              booking again!
            </p>
          </div>
        </div>

        <div className="testimonial-item">
          <div className="testimonial-item-image">
            <img
              src="https://cdn.easyfrontend.com/pictures/users/user26.jpg"
              alt="Arjun Kapur"
            />
          </div>
          <div className="testimonial-item-content">
            <h4>Arjun Kapur</h4>
            <p className="testimonial-rating">
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStarHalfAlt className="active" />
              <FaRegStar className="inactive" />
            </p>
            <p className="testimonial-text">
              This is by far the best tour I've ever taken. Every moment was
              filled with excitement and adventure. Kudos to the team for making
              it all so memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
