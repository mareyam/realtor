'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  {
    name: 'Olivia Wilson',
    text: 'I am very satisfied with Havenova service. They helped me find my dream home in no time.',
    rating: 5,
  },
  {
    name: 'Reese Miller',
    text: 'Thank you to the Havenova team for helping me find profitable property investments.',
    rating: 5,
  },
  {
    name: 'Taylor Alonso',
    text: 'Strategic location, complete facilities, rental always sells. Profitable investment, comfortable lifestyle.',
    rating: 5,
  },
  {
    name: 'Olivia Wilson',
    text: 'I am very satisfied with Havenova service. They helped me find my dream home in no time.',
    rating: 5,
  },
  {
    name: 'Reese Miller',
    text: 'Thank you to the Havenova team for helping me find profitable property investments.',
    rating: 5,
  },
  {
    name: 'Taylor Alonso',
    text: 'Strategic location, complete facilities, rental always sells. Profitable investment, comfortable lifestyle.',
    rating: 5,
  },
];

const TestimonialCard: React.FC<{
  name: string;
  text: string;
  rating: number;
}> = ({ name, text, rating }) => {
  return (
    <div className="justify-between bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full max-w-xs h-96">
      <div className=" bg-gray-800 rounded-full w-16 h-16 mb-6"></div>

      <h3 className=" text-lg font-semibold text-gray-800 mb-2">{name}</h3>

      <p className=" text-gray-600 text-lg mb-6 w-4/5">{text}</p>

      <div className=" flex gap-1 mt-auto">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-blue-100 py-12 px-6 flex flex-col items-center">
      <h2 className="font-montagu text-3xl font-bold text-gray-800 mb-8">
        What They Say About Us
      </h2>

      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="w-full max-w-4xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
