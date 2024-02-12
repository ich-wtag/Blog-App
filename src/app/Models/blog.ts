export class Blog {
  id: number;
  title: string;
  tags: string[];
  blog_image: string;
  description: string;
  blogger_name: string;
  blogger_image: string;
  creation_date: string;

  constructor(
    id: number,
    title: string,
    tags: string[],
    blog_image: string,
    description: string,
    blogger_name: string,
    blogger_image: string,
    creation_date: string
  ) {
    this.id = id;
    this.title = title;
    this.tags = tags;
    this.blog_image = blog_image;
    this.description = description;
    this.blogger_name = blogger_name;
    this.blogger_image = blogger_image;
    this.creation_date = creation_date;
  }
}
