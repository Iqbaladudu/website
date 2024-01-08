import * as React from "react";
import Container from "../container";
import { HeadFC } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout title="Kontak">
      <div>Halo</div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Kontak" />;
