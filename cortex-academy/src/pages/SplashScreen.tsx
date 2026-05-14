import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const SplashScreen = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/login");

    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  const particles = Array.from(
    { length: 20 },
    (_, i) => i
  );

  return (

    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Floating Particles */}
      {
        particles.map((item) => (

          <motion.div
            key={item}

            initial={{
              opacity: 0,
              y: 100,
            }}

            animate={{
              opacity: [0, 1, 0],
              y: -100,
            }}

            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item * 0.2,
            }}

            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))
      }

      {/* Logo */}
      <motion.div

        initial={{
          scale: 0,
          opacity: 0,
          rotate: -180,
        }}

        animate={{
          scale: 1,
          opacity: 1,
          rotate: 0,
        }}

        transition={{
          duration: 1.5,
        }}

        className="flex flex-col items-center"
      >

        <motion.div

          animate={{
            y: [0, -15, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

          className="text-8xl mb-6"
        >
          
        </motion.div>

        <motion.h1

          animate={{
            opacity: [0.5, 1, 0.5],
          }}

          transition={{
            repeat: Infinity,
            duration: 2,
          }}

          className="text-6xl font-bold text-blue-500"
        >
          Cortex Academy
        </motion.h1>

        <p className="text-gray-400 mt-4">
          AI Powered Learning Platform
        </p>

      </motion.div>

    </div>

  );

};

export default SplashScreen;