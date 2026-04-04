import { Card } from "flowbite-react";
import Image from "next/image";
import facebook from "@/public/assets/icon-facebook.svg";
import twitter from "@/public/assets/icon-twitter.svg";
import instagram from "@/public/assets/icon-twitter.svg";
import youtube from "@/public/assets/icon-youtube.svg";
import up from "@/public/assets/icon-up.svg";
import down from "@/public/assets/icon-down.svg";
import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black dark:text-white transition-all duration-300 font-bold">
      <div className="">
        <div className="grid grid-cols-3">
          <div className="flex-nowrap justify-center">
            <h1 className="text-black">Social Media Dashboard</h1>
            <p className="text-gray-400 font-bold grid col-start-1">
              Total Followers:
            </p>
          </div>
          <div className="text-gray-400 grid col-end-5">
            <div className="font-bold">Dark Mode</div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5]">
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={facebook}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-black">@nathanf</p>
          <p className="text-2xl font-bold tracking-tight text-black">1987</p>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            F O L L O W E R S
          </p>
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={up}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-green-400">Today</p>
        </Card>

        <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5]">
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={twitter}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-black">@nathanf</p>
          <p className="text-2xl font-bold tracking-tight text-black">1987</p>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            F O L L O W E R S
          </p>
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={up}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-green-400">Today</p>
        </Card>

        <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5]">
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={instagram}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-black">@realnathanf</p>
          <p className="text-2xl font-bold tracking-tight text-black">1987</p>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            F O L L O W E R S
          </p>
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={up}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-green-400">Today</p>
        </Card>

        <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={youtube}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-black">Nathan F.</p>
          <p className="text-2xl font-bold tracking-tight text-black">1987</p>
          <p className="font-normal text-gray-400 dark:text-gray-400">
            F O L L O W E R S
          </p>
          <Image
            className=""
            loading="eager"
            alt="facebook icon"
            src={down}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <p className="text-red-400">Today</p>
        </Card>

        <h1 className="text-gray-600">Overview - Today</h1>
        <div className="grid grid-cols-3">
          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Page Views</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={facebook}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">87</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={up}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">3%</p>
          </Card>

          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Retweets</p>
            <Image
              className=""
              loading="eager"
              alt="twitter icon"
              src={twitter}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">117</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={up}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">303%%</p>
          </Card>

          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Page Views</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={facebook}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">87</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={down}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">3%</p>
          </Card>
        </div>
        <div className="grid grid-cols-3">
          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Page Views</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={facebook}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">87</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={down}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">3%</p>
          </Card>

          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Page Views</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={facebook}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">87</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={down}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">3%</p>
          </Card>

          <Card className="max-w-sm !bg-gray-200 border-t-4 border-t-[#198ff5] items-center">
            <p className="text-gray-400 font-bold">Page Views</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={facebook}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-2xl font-bold tracking-tight text-black">87</p>
            <Image
              className=""
              loading="eager"
              alt="facebook icon"
              src={down}
              style={{ maxWidth: "50%", height: "auto" }}
            />
            <p className="text-red-400">3%</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
