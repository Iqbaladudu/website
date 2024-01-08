import * as React from "react";
import Container from "../../container";
import { Link } from "gatsby";
import { GitHub, Instagram } from "react-feather";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Container>
      <nav className=" hover:prose-h3:text-white prose-h3:prose-2xl hover:prose-a:text-white navbar flex justify-between items-baseline prose-a:no-underline">
        <h3 className="cursor-pointer">Iqbal Adudu</h3>
        <div className="flex gap-x-3 justify-center">
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Kontak</Link>
        </div>
      </nav>
      <h1 className="mt-20">{title}</h1>
      {children}
      <footer className="mt-20 prose-a:no-underline">
        <div className="flex gap-x-3 justify-center">
          <Link to="https://instagram.com/iqbal_adudu" target="blank">
            <Instagram />
          </Link>
          <Link to="https://github.com/iqbaladudu" target="blank">
            <GitHub />
          </Link>
        </div>
        <p className="text-center">
          Made with ❤️ and{" "}
          <span>
            <Link to="https://www.gatsbyjs.com/">Gatsby</Link>
          </span>{" "}
          by <span className="font-bold">Iqbaladudu</span>
        </p>
      </footer>
    </Container>
  );
};

export default Layout;
