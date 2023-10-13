import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-dark dark:border-light dark:text-light border-solid font-medium text-lg">
      <Layout className="p-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          <Link className="flex items-center" href={"/"}>
            Built by{" "}
            <span className="text-primary dark:text-primaryDark font-medium text-2xl px-1">
              &hearts;
            </span>{" "}
            Jiten
          </Link>
        </div>
        <Link href={"/"}>Say Hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
