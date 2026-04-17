import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArticleLayout } from "@/components/ArticleLayout";
import { MDX } from "@/components/MDX";
import { getValue } from "@/lib/content";
import { useEffect } from "react";

const ValueDetail = () => {
  const { slug } = useParams();
  const value = slug ? getValue(slug) : undefined;

  useEffect(() => {
    if (value) {
      document.title = `${value.title} — Ubuntu Roots`;
    }
  }, [value]);

  if (!value) return <Navigate to="/valeurs" replace />;
  const Body = value.Component;

  return (
    <Layout>
      <ArticleLayout
        eyebrow="Une valeur"
        title={value.title}
        backTo={{ href: "/valeurs", label: "Toutes les valeurs" }}
        meta={<span className="italic">« {value.proverb} » — {value.proverbOrigin}</span>}
      >
        <MDX>
          <Body />
        </MDX>
      </ArticleLayout>
    </Layout>
  );
};

export default ValueDetail;
