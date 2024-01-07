import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Seo from "../../components/seo";

type Props = {
  data: any;
};

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <main className="prose bg-base">
      <section className="max-w-[90%] md:max-w-[60%] mx-auto">
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            {node.id}
            <h3>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </section>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <Seo title="Blog" />;
