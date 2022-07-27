import Link from "next/link";

const NavbarMobileLink = ({ title }) => {
  return (
    <Link href="/">
      <li className="py-4 text-sm">{title}</li>
    </Link>
  );
};

export default NavbarMobileLink;
