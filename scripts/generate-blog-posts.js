const fs = require('fs');
const path = require('path');
const { blogPosts } = require('../src/app/blog/data');

const blogPostsDir = path.join(process.cwd(), 'src/app/blog/posts');

// Create blog posts directory if it doesn't exist
if (!fs.existsSync(blogPostsDir)) {
  fs.mkdirSync(blogPostsDir, { recursive: true });
}

// Generate a page for each blog post
blogPosts.forEach(post => {
  const postContent = `
    import { BlogPostClient } from '../[slug]/BlogPostClient';
    
    export default function BlogPost() {
      return <BlogPostClient slug="${post.slug}" />;
    }
  `;
  
  fs.writeFileSync(
    path.join(blogPostsDir, `${post.slug}/page.tsx`),
    postContent.trim(),
    'utf8'
  );
});

console.log(`Generated ${blogPosts.length} blog post pages`);
