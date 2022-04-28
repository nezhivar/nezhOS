/* eslint-disable no-useless-escape */
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import useSWR from "swr"

const postsDirectory = join(process.cwd(), 'src/_posts');
const collectionsDirectory = join(process.cwd(), 'src/_collections');

export function getPostSlugs() {
    const slugs = fs.readdirSync(postsDirectory);
    return slugs.map((key) => key.replace(/^.*[\\\/]/, '').slice(0, -3));
  }

export const getPostBySlug = (slug) => {
    const file = fs.readFileSync(`src/_posts/${slug}.md`, 'utf8');

    const { data, content: body } = matter(file);

    return { ...data, body, slug, type: 'journal' };
};

export const getPostsFromFiles = (fields = []) => {
    const slugs = getPostSlugs();
  
    return (
      slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort(
          (post1, post2) =>
            new Date(post2.date) - new Date(post1.date),
        )
    );
  };

export function getCollectionSlugs() {
    const slugs = fs.readdirSync(collectionsDirectory);
    return slugs.map((key) => key.replace(/^.*[\\\/]/, '').slice(0, -3));
}

export const getCollectionBySlug = (slug) => {
    const file = fs.readFileSync(`src/_collections/${slug}.md`, 'utf8');

    const { data: frontmatter, content: body } = matter(file);

    return { frontmatter, body, slug, type: 'collection' };
};
  
export const getAllCollections = (fields = []) => {
    const slugs = getCollectionSlugs();
  
    return (
      slugs
        .map((slug) => getCollectionBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    );
  };