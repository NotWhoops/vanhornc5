import Getdatabutton from "@/components/Databutton";
import { myData } from "@/lib/dataFetch";

export default function Home() {
  return (    
    <div>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers:</p>

      <div className="text-gray-400">
        Dark Mode
        <label htmlFor="check" className="flex bg-[#378fe6] bg-linear-to-r from-[#378fe6] to-[#3eda82] cursor-pointer relative w-20 h-10 rounded-full">
          <input type="checkbox" id="check" className="sr-only peer"/>
          <span className="w-2/5 h-4/5 bg-black absolute rounded-full left-1 top-1 peer-checked:bg-white peer-checked:left-11 transition-all duration-500" />
        </label>
      </div>
    </div>
  );
}
