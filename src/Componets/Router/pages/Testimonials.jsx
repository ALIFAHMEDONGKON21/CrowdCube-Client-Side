const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        message: "This platform made it so easy for me to fund my startup. Highly recommend!",
      },
      {
        id: 2,
        name: "Jane Smith",
        image: "https://via.placeholder.com/150",
        message: "Donating to campaigns here feels secure and impactful. Great work!",
      },
      {
        id: 3,
        name: "Alex Brown",
        image: "https://via.placeholder.com/150",
        message: "The creative ideas here are inspiring. Love supporting them!",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-10 px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          What People Say About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mt-2">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  