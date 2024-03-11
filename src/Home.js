import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AuthDecider from "./AuthDecider/AuthDecider";
import TwoButtons from "./Violation/TwoButtons";
import { Link } from "react-router-dom";
const Home = () => {
  const [activeCard, setActiveCard] = useState(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const handleClick = (cardId) => {
    setActiveCard(cardId);

    if (cardId === "1") {
      controls1.start({ scale: 1.05 });
      controls2.start({ scale: 1 });
      controls3.start({ scale: 1 });
    } else if (cardId === "2") {
      controls1.start({ scale: 1 });
      controls2.start({ scale: 1.05 });
      controls3.start({ scale: 1 });
    } else if (cardId === "3") {
      controls1.start({ scale: 1 });
      controls2.start({ scale: 1 });
      controls3.start({ scale: 1.05 });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden" style={{ background: "linear-gradient(to right, #141e30, #243b55)" }}>
      <div className="w-full max-w-screen-md p-8">
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to COP APP
          </motion.h1>
          <motion.p
            className="text-gray-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the possibilities!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InteractiveCard cardId="1" title="Traffic Cop App" description="Click to reveal options and actions" isActive={activeCard === "1"} onClick={() => handleClick("1")} controls={controls1} content={<TwoButtons />} />
          <Link to={"/allrequests"}>
          <InteractiveCard cardId="2" title="Traffic Violation" description="Report and handle traffic violations with ease. Document incidents, capture evidence, and take necessary actions to ensure road safety." isActive={activeCard === "2"} onClick={() => handleClick("2")} controls={controls2} />
          </Link>
          <InteractiveCard cardId="3" title="Medical Emergency" description="Quickly respond to medical emergencies. Coordinate with medical teams, dispatch resources, and provide assistance in critical situations." isActive={activeCard === "3"} onClick={() => handleClick("3")} controls={controls3} />
        </div>
      </div>
    </div>
  );
};

const InteractiveCard = ({ cardId, title, description, onClick, isActive, controls, content }) => {
  return (
    <motion.div
      className={`p-6 bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ${isActive ? "ring-4 ring-blue-500" : ""}`}
      whileHover={{ scale: isActive ? 1.05 : 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(cardId)}
      animate={controls}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {isActive && content && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-4">
          {content}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home;
