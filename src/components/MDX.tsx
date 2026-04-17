import { MDXProvider } from "@mdx-js/react";
import { Quote } from "./Quote";

const components = {
  Quote,
  h2: (props: any) => <h2 {...props} className="font-serif text-3xl mt-12 mb-4 text-clay" />,
  h3: (props: any) => <h3 {...props} className="font-serif text-2xl mt-10 mb-3 text-clay" />,
  blockquote: (props: any) => (
    <blockquote {...props} className="my-8 border-l-2 border-primary pl-6 italic text-clay font-serif text-xl leading-snug" />
  ),
};

export const MDX = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={components as any}>{children}</MDXProvider>
);
