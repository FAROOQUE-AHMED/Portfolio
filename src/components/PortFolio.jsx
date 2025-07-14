import React, { useState } from "react";
import splash from "../../public/logo.jpeg";
import quiz from "../../public/app_logo.png";
import silent from "../../public/silent.png";
import portfolio from "../../public/photo.avif"; // use your actual logo file


function PortFolio() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardItem = [
    {
      id: 1,
      logo: splash,
      name: "Splash - Social Media App",
      desc: "A full-fledged social app with Firebase backend, real-time feeds, and one-time messaging feature.",
      details:
        "Splash is a Firebase-powered social media app that allows users to sign up, post updates, follow profiles, and send one-time disappearing messages. Built with modern UI, secure auth, and scalable backend.",
      github: "https://github.com/FAROOQUE-AHMED/SPLASH",
    },
    {
      id: 2,
      logo: quiz,
      name: "Quiz Station - Android App",
      desc: "Monetized quiz app with 50+ categories, ad integration, reward system, and dynamic UI.",
      details:
        "Quiz Station features categorized MCQs, coin rewards, banner & interstitial ads (Unity), custom leaderboard and a responsive Jetpack Compose UI.",
      github: "https://github.com/FAROOQUE-AHMED/QUIZ-STATION",
    },
    {
      id: 3,
      logo: silent,
      name: "Silent Letters - Gesture AI",
      desc: "Built with TensorFlow to convert hand gestures into text input for non-verbal communication.",
      details:
        "Silent Letters is a gesture recognition system powered by TensorFlow, designed for people with speech disabilities. Trained model converts hand signs into real-time text.",
      github: "https://github.com/FAROOQUE-AHMED/silentletters-website",
    },
    {
  id: 4,
  logo: portfolio, // import the logo
  name: "Portfolio Website",
  desc: "Fully responsive React portfolio with modern UI, contact form, and GitHub integration.",
  details:
    "This portfolio website is built using React, Tailwind CSS, React Icons, and Getform for backend-free contact handling. It features a clean responsive layout, animated sections, real project integration, and modal detail views for showcasing work professionally.",
  github: "https://github.com/FAROOQUE-AHMED/Portfolio",
},

  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, desc, github, details }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 text-sm">{desc}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button
                  onClick={() => setSelectedCard({ name, details, github })}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Details
                </button>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-5 relative shadow-lg">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-3">{selectedCard.name}</h2>
            <p className="text-gray-700 text-sm">{selectedCard.details}</p>
            <div className="mt-4">
              <a
                href={selectedCard.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
