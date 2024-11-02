import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typcial from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // FontAwesome'dan ikonları getiriyoruz
import Link from "next/link";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typcial 
        loop={3}
        wrapper="p"
        steps={[
          "Full Stack Developer",
          3000,
          "Software Developer",
          3000
        ]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        src="/images/icon.png"
        alt="icon-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1] object-cover max-w-[10rem]"
        whileHover={{ scale: 1.5 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/icon.png"
        alt="icon-1"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1] object-cover max-w-[10rem]"
        whileHover={{ y: -20 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-500 dark:text-white">
              <span className="text-xl font-normal">Hello, </span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-700 uppercase md:text-4xl md:mt-3 dark:text-white">
              Nıda Turkay
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            {/* Sosyal Medya İkonları */}
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/NdaTrky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/nidaturkay/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span> Portfolio.jsx </span>
                  </div>
                  <p>
                    <span className="text-gray-500"></span>
                    <span className="text-purple-300">ToDo:</span>  You can drag these stars. ✨  
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/me.png"
                      alt="me"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="">
                      <p className="text-pink-300">{'> '}const tech
                        <span className="font-bold text-pink-300"></span> = ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Redux"]; {" "}
                      </p> 
                      <div className="flex items-center space-x-8">
                        <Link href="/projects" className="transition duration-300">
                          Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
