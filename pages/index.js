import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaPaintBrush, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import harumi from "../public/assets/harumi.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yuukiiko Sora</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-auto grid place-items-center bg-gradient-to-t from-rose-200 to-rose-200">
        <div className="relative flex items-center justify-center rounded-xl group transition ease-in-out hover:bg-gradient-to-r from-zinc-500 to-zinc-400">
          <Image
            className="rounded-xl transition ease-in-out group-hover:opacity-50"
            src={harumi}
            alt="Harumi"
          />
          <div className="hidden transition ease-in-out group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-7xl text-white tracking-wider text-center uppercase font-bold">
              Harumi
            </h3>
            <p className="py-4 text-white text-justify text-xl">
              Harumi (晴美) "sunny, beauty" is my Original Character/Mascot for
              my Business Twin Leaves which specializes on making handmade
              sketchbooks and any other art materials.
            </p>
            <p className="pb-4 text-white text-justify text-xl">
              Her personality is organic, classy and friendly. She is somewhat
              resembles to me because of the personality and its features.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="https://www.artstation.com/yukiikosora">
                <FaPaintBrush className="text-white transition hover:text-rose-300 hover:cursor-pointer text-2xl" />
              </Link>
              <Link href="https://www.instagram.com/yukiiko_sora/">
                <RiInstagramFill className="text-white transition hover:text-rose-300 hover:cursor-pointer text-2xl" />
              </Link>
              <Link href="https://twitter.com/yukiiko_sora">
                <FaTwitter className="text-white transition hover:text-rose-300 hover:cursor-pointer text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}