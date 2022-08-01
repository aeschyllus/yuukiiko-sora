import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDeviantart } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import yukiiko from "../public/assets/yukiikoart.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yuukiiko Sora</title>
        <meta
          name="description"
          content="Illustrator, Character art & Design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="h-screen w-auto flex flex-col items-center justify-center bg-rose-200 pt-20 px-7">
        <div className="font-fredoka text-slate-50 text-center mb-5 flex flex-col items-center justify-center">
          <div>
            <Image
              className="rounded-full"
              src={yukiiko}
              alt="Yukiiko Sora"
              width={270}
              height={270}
            />
          </div>
          <p className="text-3xl tracking-widest">yukiiko sora</p>
          <p className="text-sm">Illustrator, Character art & Design</p>
          <div className="flex items-center justify-center my-4 w-full sm:w-[80%] text-slate-50">
            <Link href="https://www.deviantart.com/yukiikoart">
              <div className="border-2 border-slate-50 p-3 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-slate-50 hover:text-rose-400">
                <FaDeviantart className="" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/yukiiko_sora/">
              <div className="border-2 border-slate-50 p-3 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-slate-50 hover:text-rose-400 mx-5">
                <RiInstagramFill className="" />
              </div>
            </Link>
            <Link href="https://twitter.com/yukiiko_sora">
              <div className="border-2 border-slate-50 p-3 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-slate-50 hover:text-rose-400">
                <FaTwitter className="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="text-justify text-slate-50 font-semibold">
          <p className="mb-2">
            Hi I&apos;m yukiko, please call me yuki. I draw fan art and original
            illustrations.
          </p>
          <p>
            ゆきいこと呼んでいいです。ファンアートとオリジナルなイラストを描いています。
          </p>
        </div>
      </main>
    </div>
  );
}
