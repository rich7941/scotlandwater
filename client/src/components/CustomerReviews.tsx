import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "I just wanted to say the guys who did the work yesterday were very good. They were professional and clearly knew what they were doing.",
      author: "Paul Strachan",
      location: "Glasgow",
      borderColor: "border-yellow-400"
    },
    {
      text: "Thanks for carrying out the works it was a very smooth process and the guys were really nice and friendly.",
      author: "Jonathan Godfrey",
      location: "Edinburgh",
      borderColor: "border-pink-400"
    },
    {
      text: "We thanked the workers personally before they left, we also wanted to let you know how brilliant they all were, as they certainly went above and beyond.",
      author: "Gordan Christie",
      location: "Aberdeen",
      borderColor: "border-green-400"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A6B] text-center mb-8">
          Here's what our happy customers have to say
        </h2>

        {/* WaterTrust Rating Badge */}
        <div className="flex justify-center mb-12">
          <img 
            src="/watertrust_rating.jpeg" 
            alt="WaterTrust 5.0 rating - Named best overall company 2024" 
            className="h-24 w-auto"
          />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`border-4 ${review.borderColor} rounded-lg p-6 bg-white`}
            >
              <p className="text-gray-700 mb-4 min-h-[120px]">
                {review.text}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1B3A6B]">{review.author}</p>
                <p className="text-gray-600 text-sm mb-2">{review.location}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
