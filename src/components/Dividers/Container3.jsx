import FeaturedProjects from "../containers/FeaturedProjects";
import GithubContributions from "../containers/GithubContributions";

function Container3() {
  return (
    <div className="w-full flex mr-[-15px] flex-col gap-5">
      <FeaturedProjects />
      <div className="flex items-center w-full opacity-80">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-orange-500/70" />
        <span className="px-4 text-[8px] lg:text-[10px] font-mono tracking-[0.4em] uppercase whitespace-nowrap text-orange-500">
          CONSISTENCY
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-orange-500/70" />
      </div>
      <div className="w-full">
        <GithubContributions />
      </div>
    </div>
  );
}

export default Container3;
