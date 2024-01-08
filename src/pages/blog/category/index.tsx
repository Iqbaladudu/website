import * as React from "react";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { HeadFC, Link, graphql } from "gatsby";

type Props = {
  data: any;
};

const CategoryPage = ({ data }: Props) => {
  const data_arr = Array.from(
    new Set(data.allMdx.nodes.map((arr: any) => arr.frontmatter.category))
  );
  return (
    <Layout title="Kategori">
      <ul className="prose-a:no-underline">
        {data_arr.map((arr, index) => (
          <li key={index}>
            <Link to={`/blog/category/${arr}`}>
              {arr[0].toUpperCase() + arr.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          category
        }
        id
      }
    }
  }
`;

export default CategoryPage;

export const Head: HeadFC = () => <Seo title="Kategori" />;
