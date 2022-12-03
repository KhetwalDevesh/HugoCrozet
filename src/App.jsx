import { useEffect, useState } from 'react';
import './App.css';
import { animate, inView } from 'motion';
function App() {
  // alert('i m line 7');
  useEffect(() => {
    // alert('i m within useEffect');
    // console.log(creativeClass);
    // console.log(developerClass);
    // inView(creativeClass, () => {
    // alert('creativeClass iview');
    const creativeClass = document.querySelector('.creative');
    const developerClass = document.querySelector('.developer');
    const headerClass = document.querySelectorAll('.header-text-class');
    const projectsClass = document.querySelector('.projectsClass');

    animate(
      creativeClass,
      {
        transform: 'none',
      },
      { duration: 2 }
    );
    // });
    // inView(developerClass, () => {
    animate(
      developerClass,
      {
        transform: 'none',
      },
      { duration: 2 }
    );
    animate(
      headerClass,
      {
        opacity: 1,
      },
      { duration: 6 }
    );
    inView(projectsClass, () => {
      const oddNoProject = document.querySelectorAll('.odd-no-project');
      const evenNoProject = document.querySelectorAll('.even-no-project');
      animate(oddNoProject, { transform: 'none' }, { duration: 4 });
      animate(evenNoProject, { transform: 'none' }, { duration: 4 });
    });
    // });
  }, []);
  return (
    <div className=" h-full w-screen flex flex-col bg-clay">
      <div className=" fixed border-2 m-0 backdrop-blur border-yellow-500 p-7 flex justify-between uppercase font-lato text-xl w-full">
        <div className="header-text-class">Hugo Crozet</div>
        <div className="header-text-class">Contact</div>
      </div>
      <div className="h-24"></div>
      <div className="border-2 border-blue-500 h-full flex flex-col items-center justify-center font-maklight uppercase text-[220px]">
        <div className="ml-0 border-2 border-blue-700 creative flex justify-start w-full">
          Creative
        </div>
        <div className="mr-0  border-2 border-blue-700 developer flex justify-end w-full">
          {/* <span className="border-2 border-red-700"> </span> */}Developer
        </div>
      </div>
      <div className="w-1/4 ml-auto  p-5 border-2 border-red-700">
        I AM HUGO, CREATIVE DEVELOPER BASED IN FRANCE. I WORK AS A FREELANCER
        WITH AGENCIES, START-UPS AND INDIVIDUALS. I HAVE A FONDNESS FOR CLEAN
        DESIGNS, BEAUTIFUL TYPOGRAPHIES AND INTERACTIVE DEVELOPMENT.
      </div>
      <div className="font-maklight uppercase text-[220px] p-16 mb-36">
        Projects
      </div>
      <div className="projectsClass">
        <div className="odd-no-project flex justify-between ml-64 mr-32 p-16 border-t-2 border-b-2 border-black">
          <div className="font-maklight uppercase text-[80px]">StalkTrendz</div>
          <div className="font-maklight uppercase text-[80px]">01</div>
        </div>

        <div className="even-no-project flex justify-between ml-64 mr-32 p-16 border-b-2 border-black">
          <div className="font-maklight uppercase text-[80px]">
            Utopia Farming
          </div>
          <div className="font-maklight uppercase text-[80px]">02</div>
        </div>

        <div className="odd-no-project flex justify-between ml-64 mr-32 p-16 border-b-2 border-black">
          <div className="font-maklight uppercase text-[80px]">Blogging</div>
          <div className="font-maklight uppercase text-[80px]">03</div>
        </div>
      </div>
    </div>
  );
}

export default App;
