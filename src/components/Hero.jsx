import React from 'react';

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-slate-500 via-slate-400 to-blue-950 text-white">
        <div className='flex justify-center items-center mb-8 text-xl '>
            <img src="/bio.jpg" alt="pic" className='flex ml-5  rounded-full h-46 w-56 ' />
        </div>
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Jay Prajapati 👋</h1>
        <p className="text-lg md:text-xl mb-6">
          Full-Stack Developer | Java Developer 
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
