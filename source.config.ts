import { defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

// Define a collection for blog posts stored in `content/blog`.
// Each post must include a title, description and publish date in the frontmatter.
export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
