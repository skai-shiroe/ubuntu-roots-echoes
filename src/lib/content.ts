import type { ComponentType } from "react";

type MDXModule = {
  default: ComponentType<any>;
  frontmatter: Record<string, any>;
};

export type ValueEntry = {
  slug: string;
  title: string;
  summary: string;
  proverb: string;
  proverbOrigin: string;
  icon: string;
  order: number;
  Component: ComponentType<any>;
};

export type CountryEntry = {
  slug: string;
  name: string;
  capital: string;
  region: string;
  emoji: string;
  mainValues: string[];
  proverb: string;
  language: string;
  Component: ComponentType<any>;
};

export type BlogEntry = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  cover: string;
  tags: string[];
  readingTime: number;
  Component: ComponentType<any>;
};

const valueModules = import.meta.glob<MDXModule>("/content/values/*.mdx", { eager: true });
const countryModules = import.meta.glob<MDXModule>("/content/countries/*.mdx", { eager: true });
const blogModules = import.meta.glob<MDXModule>("/content/blog/*.mdx", { eager: true });

export const values: ValueEntry[] = Object.values(valueModules)
  .map((m) => ({ ...(m.frontmatter as any), Component: m.default } as ValueEntry))
  .sort((a, b) => a.order - b.order);

export const countries: CountryEntry[] = Object.values(countryModules)
  .map((m) => ({ ...(m.frontmatter as any), Component: m.default } as CountryEntry))
  .sort((a, b) => a.name.localeCompare(b.name));

export const posts: BlogEntry[] = Object.values(blogModules)
  .map((m) => ({ ...(m.frontmatter as any), Component: m.default } as BlogEntry))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getValue = (slug: string) => values.find((v) => v.slug === slug);
export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
