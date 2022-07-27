import Link from "next/link";
import { useRouter } from "next/router";

const NavbarPcLink = ({ title }) => {
  const router = useRouter();

  return (
    <Link href="/">
      <li className="link-pc">{title}</li>
    </Link>
  );
};

export default NavbarPcLink;
