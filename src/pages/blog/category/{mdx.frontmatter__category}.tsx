import { HeadFC, Link, graphql } from "gatsby";
import * as React from "react";
import Seo from "../../../components/seo";
import Layout from "../../../components/layout";

type Props = {
  data: any;
};

const Category = ({ data }: Props) => {
  console.log(data);
  return (
    <Layout
      title={`Kategori: ${
        data.allMdx.nodes[0].frontmatter.category[0].toUpperCase() +
        data.allMdx.nodes[0].frontmatter.category.substring(1)
      }`}
    >
      {data.allMdx.nodes.map((node: any) => (
        <article
          key={node.id}
          className="prose-a:no-underline prose-a:font-bold"
        >
          <h3>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>Posted: {node.frontmatter.date}</p>
          <p>Kategori: {node.frontmatter.category}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query ($frontmatter__category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $frontmatter__category } } }
    ) {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
      }
    }
  }
`;

export default Category;

export const Head: HeadFC = () => <Seo title="Kategori" />;
