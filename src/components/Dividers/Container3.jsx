import RecentProjects from "../containers/RecentProjects";
import Certifications from "../containers/Certifications";

function Container3() {
  return (
    <div className="flex flex-col lg:mr-[-20px] mr-[0px] gap-5">
      <div>
        <RecentProjects />
      </div>

      <div>
        <Certifications />
      </div>
    </div>
  );
}

export default Container3;
