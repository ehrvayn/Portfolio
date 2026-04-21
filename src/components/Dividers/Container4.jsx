import Contact from "../containers/Contact";
import Certifications from "../containers/Certifications";

function Container4() {
  return (
    <div className="container2 flex flex-col lg:flex-row gap-5">
      <div className="flex-1">
        <Certifications />
      </div>
      <div className="flex-1 mx-0">
        <Contact />
      </div>
    </div>
  );
}

export default Container4;
