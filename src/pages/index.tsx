import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Seo from "../components/seo";
import { GitHub, Instagram } from "react-feather";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-base">
      <div className="max-w-[90%] md:max-w-[60%] mx-auto prose prose-a:no-underline">
        <nav className=" hover:prose-h3:text-white prose-h3:prose-2xl hover:prose-a:text-white navbar flex justify-between">
          <h3 className="cursor-pointer">Iqbal Adudu</h3>
          <div className="flex gap-x-3">
            <Link to="https://instagram.com/iqbal_adudu" target="blank">
              <Instagram />
            </Link>
            <Link to="https://github.com/iqbaladudu" target="blank">
              <GitHub />
            </Link>
          </div>
        </nav>
        <section className="prose-2xl mt-52">
          <h4>Halo, Saya Muhammad Iqbal a.k.a Iqbal Adudu.</h4>
          <article>
            <p>
              Saya memiliki latar belakang pendidikan keagamaan. Sekarang saya
              aktif menjadi pengembang aplikasi web dan mobile. Saya juga
              memiliki pengalaman di bidang kepenulisan, mentor pemrograman
              serta banyak bidang digital lainnya.
            </p>
            <p>
              Saya memiliki ketertarikan dengan beragam bidang seperti
              pendidikan, keagamaan, teknologi, serta sains.
            </p>
          </article>
          <h4>🎓 Pendidikan</h4>
          <article>
            <div className="card bg-base-200 p-4 prose-h5:font-bold">
              <h5>Al Azhar University, Egypt</h5>
              <p className="not-prose">2020 - Sekarang</p>
            </div>
          </article>
          <h4>⚒️ Pengalaman</h4>
        </section>
        <footer className="mt-20">
          <p className="text-center">
            Made with ❤️ and{" "}
            <span>
              <Link to="https://www.gatsbyjs.com/">Gatsby</Link>
            </span>{" "}
            by <span className="font-bold">Iqbaladudu</span>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
