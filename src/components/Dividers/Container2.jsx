import TechStack from "../containers/TechStack";
import About from "../containers/About";
import Education from "../containers/Education";
import Experience from "../containers/Experience";

function Container2() {
  return (
<div className="container2 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-5 px-4 md:px-10 items-stretch">
  <div className="flex flex-col gap-5 h-full">
    <Experience />
    <Education className="flex-1" />  
  </div>
  <div className="flex flex-col gap-5">
    <About />
    <TechStack />
  </div>
</div>
  );
}

export default Container2;
