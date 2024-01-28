import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const ExplorePlatform = () => {
  return (
    <Link href="#still-building">
      <div className="px-4 py-3 rounded-lg bg-primary hover:bg-orange-400 w-fit flex items-center gap-x-2 hover:cursor-pointer transition-colors">
        Explore our platform now
        <FaArrowRight size={16} />
      </div>
    </Link>
  );
};
