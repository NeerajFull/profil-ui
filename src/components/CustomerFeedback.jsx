import React from "react";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      feedback: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
      rating: 5,
    },
    {
      name: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
      rating: 4,
    },
    {
      name: "Devon Lane",
      feedback: "Normally wings are wings, but theirs are lean meaty and tender, and the sauce is perfection.",
      rating: 4,
    },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-lg mb-4">Customer's Feedback</h2>
      <div>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                <p className="text-lg font-bold">{feedback.name[0]}</p>
              </div>
              <div>
                <p className="font-bold">{feedback.name}</p>
                <p className="text-sm text-gray-400">{feedback.feedback}</p>
              </div>
            </div>
            <div className="flex">
              {[...Array(feedback.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 15l-6.16 3.25 1.18-6.88L.34 7.6l6.9-1L10 1.5l2.76 5.62 6.9 1-4.68 4.76 1.18 6.88z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
