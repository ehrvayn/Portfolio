import RecentProjects from "../containers/RecentProjects";
import Certifications from "../containers/Certifications";

function Container3() {
  return (
    <>
      <div className="container2 flex flex-col lg:flex-row justify-between gap-5 px-4 md:px-10">
        <div className="w-full lg:w-1/2"><RecentProjects /></div>
        <div className="w-full lg:w-1/2"><Certifications /></div>
      </div>
    </>
  );
}

export default Container3;
