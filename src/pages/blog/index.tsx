import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/layout";

type Props = {
  data: any;
};

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout title="Blog">
      <article>
        <p>
          Kumpulan tulisan <span className="font-bold">Iqbaladudu</span> dari
          berbagai platform.
        </p>
      </article>
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Artikel"
          checked
        />
        <div role="tabpanel" className="tab-content">
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
              <p>
                Kategori:{" "}
                <Link to={`/blog/category/${node.frontmatter.category}`}>
                  {node.frontmatter.category}
                </Link>
              </p>
            </article>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Series"
        />
        <div role="tabpanel" className="tab-content">
          <p>
            Merupakan serial tulisan bersambung mengenai satu topik tertentu,
            baik itu serial pembelajaran ataupun novel.
          </p>
        </div>
      </div>
    </Layout>
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
          category
        }
        id
      }
    }
  }
`;

export default BlogPage;

export const Head: HeadFC = () => <Seo title="Blog" />;
