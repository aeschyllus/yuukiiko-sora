import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTwitter, FaDeviantart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white fixed w-full h-20 z-[100]">
      {/* PC navigation */}
      <div className="flex justify-between items-center w-full h-full px-5 2xl:px-16">
        <div>
          <p className="font-fredoka text-2xl text-rose-400 tracking-[0.2em] text-center">
            yuukiiko
          </p>
          <p className="font-bold text-center">ユキーコ ソラ 🖤</p>
        </div>

        <ul className="hidden md:flex">
          <Link href="/">
            <li
              className={
                router.pathname === "/" ? "link-pc link-active" : "link-pc"
              }
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={
                router.pathname === "/about" ? "link-pc link-active" : "link-pc"
              }
            >
              About
            </li>
          </Link>
          <Link href="/gallery">
            <li
              className={
                router.pathname === "/gallery"
                  ? "link-pc link-active"
                  : "link-pc"
              }
            >
              Gallery
            </li>
          </Link>
          <Link href="/contacts">
            <li
              className={
                router.pathname === "/contacts"
                  ? "link-pc link-active"
                  : "link-pc"
              }
            >
              Contacts
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="md:hidden hover:cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          {/* Sidebar header */}
          <div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-7">
              <div>
                <p className="font-fredoka text-2xl text-rose-400 tracking-[0.2em] text-center">
                  yuukiiko
                </p>
                <p className="font-bold text-center">ユキーコ ソラ 🖤</p>
              </div>

              <div
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer border-2 border-rose-400"
              >
                <AiOutlineClose size={25} className="text-rose-400" />
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="font-fredoka py-4 flex-col">
            <ul className="tracking-widest grid gap-4">
              <Link href="/">
                <li
                  className={
                    router.pathname === "/"
                      ? "link-mobile link-active"
                      : "link-mobile"
                  }
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={
                    router.pathname === "/about"
                      ? "link-mobile link-active"
                      : "link-mobile"
                  }
                >
                  About
                </li>
              </Link>
              <Link href="/gallery">
                <li
                  className={
                    router.pathname === "/gallery"
                      ? "link-mobile link-active"
                      : "link-mobile"
                  }
                >
                  Gallery
                </li>
              </Link>
              <Link href="/contacts">
                <li
                  className={
                    router.pathname === "/contacts"
                      ? "link-mobile link-active"
                      : "link-mobile"
                  }
                >
                  Contacts
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="tracking-widest text-rose-400 text-lg">
                Follow me!
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
                <Link href="https://www.deviantart.com/yukiikoart">
                  <div className="border-2 border-rose-400 p-3 rounded-full cursor-pointer">
                    <FaDeviantart className="text-rose-400" />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/yukiiko_sora/">
                  <div className="border-2 border-rose-400 p-3 rounded-full cursor-pointer">
                    <RiInstagramFill className="text-rose-400" />
                  </div>
                </Link>
                <Link href="https://twitter.com/yukiiko_sora">
                  <div className="border-2 border-rose-400 p-3 rounded-full cursor-pointer">
                    <FaTwitter className="text-rose-400" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
