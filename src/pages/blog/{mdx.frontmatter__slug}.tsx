import * as React from "react";
import Seo from "../../components/seo";
import Container from "../../container";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  data: any;
  children: React.ReactNode | React.ReactNode[];
};

const BlogPost = ({ data, children }: Props) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Container>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p className="prose prose-xl">{children}</p>
    </Container>
  );
};

type HeadProps = {
  data: any;
};

export const Head = ({ data }: HeadProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(formats: [WEBP])
          }
        }
      }
    }
  }
`;

export default BlogPost;
