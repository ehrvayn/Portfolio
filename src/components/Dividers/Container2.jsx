import TechStack from "../containers/TechStack";
import About from "../containers/About";
import Education from "../containers/Education";
import Experience from "../containers/Experience";

function Container2() {
  return (
    <>
      <div className="container2 flex flex-col lg:flex-row justify-between gap-5 px-4 md:px-10">
        <div className="flex flex-col gap-5 w-full lg:w-[65%]">
          <About />
          <TechStack />
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-5">
          <Experience />
          <Education />
        </div>
      </div>
    </>
  );
} 

export default Container2;
