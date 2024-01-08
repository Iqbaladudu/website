import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="prose-2xl mt-52">
        <h4>Halo, Saya Muhammad Iqbal a.k.a Iqbal Adudu.</h4>
        <article>
          <p>
            Saya memiliki latar belakang pendidikan keagamaan. Sekarang saya
            aktif menjadi pengembang aplikasi web dan mobile. Saya juga memiliki
            pengalaman di bidang kepenulisan, mentor pemrograman serta banyak
            bidang digital lainnya.
          </p>
          <p>
            Saya memiliki ketertarikan dengan beragam bidang seperti pendidikan,
            keagamaan, teknologi, serta sains.
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
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home" />;
