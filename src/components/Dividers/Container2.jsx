import TechStack from "../containers/TechStack";
import About from "../containers/About";
import Education from "../containers/Education";
import Experience from "../containers/Experience";

function Container2() {
  return (
    <div className="container2 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">
      <div className="flex flex-col gap-4">
        <Experience />
        <Education />
      </div>
      <div className="flex flex-col w-[98.4%] gap-4">
        <About />
        <TechStack />
      </div>
    </div>
  );
}

export default Container2;