import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "../../styles/gallery.module.css";

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

      <main className="h-screen w-auto flex flex-col items-center justify-center bg-zinc-900 pt-20 px-7">
        <div className="w-96 p-3">
          <p className={`${styles.lyrics} leading-none`}>
            Oh! It&apos;s just you and I, and no other guys We got no
            interruptions and we both feelin&apos; the vibe Say I&apos;m not
            your type But I know what&apos;s on your mind We can talk about
            nothin&apos; or we can see what it&apos;s like Don&apos;t lie, baby,
            don&apos;t lie His love never felt right Switch sides and I&apos;m
            beside you If you say it&apos;s alright (don&apos;t lie, baby,
            don&apos;t lie) Way too many heads, need a steady view Smokin&apos;
            cigarettes at the rendezvous Never meant to cross you But my jaw hit
            the floor with the one, two Think I want you You say this ain&apos;t
            love, but it&apos;s still the same love Make love, anythin&apos; to
            sate ya Don&apos;t be shy, you decide Say, can I make you mine?
            Don&apos;t lie, baby, don&apos;t lie His love never felt right
            Switch sides and I&apos;m beside ya If you say it&apos;s alright
            (Lemme show you how it feel like) Don&apos;t lie, baby, don&apos;t
            lie His love never felt right Switch sides and I&apos;m beside ya If
            you say it&apos;s alright (don&apos;t lie, baby, don&apos;t lie)
            your skin so fine (Ah-ah, ah) come close, baby, put it on mine (Ah)
            your skin so fine (Ah-ah, ah) come close, baby, put it on mine
            It&apos;s just you and I, and no other guys We got no interruptions
            and we both feelin&apos; the vibe Say I&apos;m not your type But I
            know what&apos;s on your mind We can talk about nothin&apos; or we
            can see what it&apos;s like No, oh, oh Don&apos;t lie, baby,
            don&apos;t lie His love never felt right Switch sides and I&apos;m
            beside ya If you say it&apos;s alright (Lemme show you what it feel
            like) Don&apos;t lie, baby, don&apos;t lie. Oh! It&apos;s just you
            and I, and no other guys We got no interruptions and we both
            feelin&apos; the vibe Say I&apos;m not your type But I know
            what&apos;s on your mind We can talk about nothin&apos; or we can
            see what it&apos;s like Don&apos;t lie, baby, don&apos;t lie His
            love never felt right Switch sides and I&apos;m beside you If you
            say it&apos;s alright (don&apos;t lie, baby, don&apos;t lie) Way too
            many heads, need a steady view Smokin&apos; cigarettes at the
            rendezvous Never meant to cross you But my jaw hit the floor with
            the one, two Think I want you You say this ain&apos;t love, but
            it&apos;s still the same love Make love, anythin&apos; to sate ya
            Don&apos;t be shy, you decide Say, can I make you mine? Don&apos;t
            lie, baby, don&apos;t lie His love never felt right Switch sides and
            I&apos;m beside ya If you say it&apos;s alright (Lemme show you how
            it feel like) Don&apos;t lie, baby, don&apos;t lie His love never
            felt right
          </p>
        </div>
      </main>
    </div>
  );
}
