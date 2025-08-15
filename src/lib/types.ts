export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
  content: {
    rendered: string;
  };
  type: string;
  status: string;
  excerpt: {
    rendered: string;
  }
  author: number;
  categories: number[];
  featured_media: number;
    _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text?: string;
    }>
  };
}

// export type NoteCategory = {
//   id: number;
//   count: number;
//   name: string;
//   slug: string;
// }

export type NoteCategory = {
  id: number;
  count: number;
  description: string;
  link: string;
  //meta: any[]; // Could be typed more strictly if you know the shape
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    [key: string]: { href: string }[]; // For any other link relations WordPress returns
  };
}