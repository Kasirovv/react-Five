import React from 'react'
import './App.css';
import Bar from './components/Bar';
import down from './assets/down.png';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/photo3.png';
import photo4 from './assets/photo4.png';
import photo5 from './assets/photo5.png';

function App() {
  return (
    <div className="App">
        <header className='w-[100%] bg-[#1F3F86]  text-white'>
            <nav className='py-[3vh] sm:pr-[35vh] flex lg:justify-center md:justify-center md:px-11 justify-center '>
                <section className='space-x-10 text-[1.3em] lg:block hidden'>
                  <a href="">Service</a>
                  <a href="">Venture</a>
                  <a href="">People</a>
                  <a href="">Blog</a>
                  <a href="">Join Us</a>
                </section>
                <section className='lg:hidden block'>
                    <Bar/>
                </section>
            </nav>
            <section className='text-[50px] py-[15vh] text-center'>
                <h1>
                  This is where digital <br /> products and ventures <br /> go further
                </h1>
            </section>
            <section className='flex py-[10vh] justify-center text-center space-x-5'>
                <img src={ down }  className='lg:px-[5vh]' />
                Welcome to the place where meaningful ideas are nurtured, <br /> transformed and launched.
            </section>
        </header>
        <main className='w-[100%]'>
            <section className='lg:text-start lg:pl-[15vh] md:text-center py-[15vh] text-[4em] text-center'>
                <h1>
                  if you <span className='text-[blue]'>think</span> <br /> better, we're <span className='text-[blue]'> here to help </span>
                </h1>
            </section>
            <section className='lg:flex '>
                <section className='pb-[10vh] px-[15vh] text-[1.5em]'>
                  <p>Here you’ll find people ready to create digital products that <br />
                  matter. The quality and the impact of the products are above <br />
                  anything else.
                  </p>
                  <br />
                  <p>
                  That’s why we’re called Subvisual, because we build details <br /> that others don’t.
                  </p>
                  <br />
                  <p>
                  Thinking about your project was the first step. The next one is writing to us. <a href="">Let’s talk now.</a>
                  </p>
                </section>
                <section className='px-[10vh] py-[5vh]'>
                    <img src={photo1} className='w-[100%]' />
                </section>
            </section>
            <section className='lg:flex lg:justify-around px-10 space-y-5 pl-[15vh] py-[10vh]'>
                <img src={photo2}  />
                <img src={photo3}  />
            </section>
            <section className='bg-[#EFF7FF] py-[20vh] text-center md:text-[2em] space-y-[10vh] lg:px-[10vh]'>
                <span className='flex items-center justify-evenly lg:space-x-10 text-[-2em]'>
                  <p>What our clients say</p> <hr className='w-[100px] border border-[2px]' /> <p>Utrust</p>
                </span>
                <p className='lg:px-[20vh]  py-[10vh]'>Subvisual’s team was crucial to our success as they <br />
                were with us since the company's inception. <br />
                Together with the Founders, they were tireless and <br />
                helped us through every step not only with the <br /> 
                expertise that guided us throughout the journey, but <br /> 
                also by actually providing a team to build the product <br /> with us.</p>
            </section>
            <section className='lg:flex py-[20vh] text-center justify-around text-[2.5em]'>
                <p>
                One step at a <span className='text-[blue]'>time</span> <br />
                every step of the way
                </p>
                <p>
                These are some examples of digital <br /> products we helped develop.
                </p>
            </section>
            <section className='lg:flex justify-around space-y-10 text-[25px] py-10'>
                <section className='px-[10vh]'>
                    <p className='font-semibold'>Assist in strategic thinking and product development.</p>
                    <br />
                    <p>
                    Subvisual joined Utrust as part of their team to help them <br />
                    define a strategy and build a product that was stable to go <br />
                    to market. From ideation to strategy through development, <br />
                    Subvisual was there to support decisions and provide <br />
                    experience-based knowledge.
                    </p>
                </section>
                <section>
                  <img className='m-auto' src={photo4} alt="" />
                </section>
            </section>
            <section className='lg:flex justify-around space-y-10 text-[25px] py-10'>
                <section>
                  <img className='m-auto' src={photo5} alt="" />
                </section>
                <section className='px-[10vh]'>
                  <p className='font-semibold'>A quick turnaround for a <br /> insurtech solution</p>
                  <p>
                  Coverflex reached out to Subvisual in need of a team of <br />
                  experts that would be able to help them deliver their <br />
                  solution in a quick yet reliable manner. In the end, our <br />
                  team understood them immediately and was to help <br />
                  them build an MVP and website in time for an important <br />
                  presentation.
                  </p>
                </section>
            </section>
            <section className='bg-[#2C03AB] text-center py-[20vh] text-[30px] text-white space-y-10'>
                <p>
                  A <span className='text-[#FF7B9B]'>love</span> affair between <br />
                  <span className='text-[#FF7B9B]'>innovation</span> and <span className='text-[#FF7B9B]'>technology</span>
                </p>
                <p>
                We’re not only about products. We’re also a venture studio. <br />
                It’s here where innovation and technology come together to <br />
                do amazing things for the people.
                </p>
                <p>See what we can do to boost your business and product.</p>
            </section>
        </main>
    </div>
  );
}

export default App;
