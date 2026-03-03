import RecentProjects from "../containers/RecentProjects";
import Certifications from "../containers/Certifications";

function Container3() {
  return (
    <div className="container2 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-5">
      <div><Certifications /></div>
      <div><RecentProjects /></div>
    </div>
  );
}

export default Container3;