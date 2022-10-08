const config = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  media_folder: "public/uploads", // Where media files will be stored
  public_folder: "/uploads", // Where the media files can be accesed from the server
  publish_mode: "editorial_workflow", // For Drafts
  site_url: "https://artcoded.net",
  display_url: "https://artcoded.net",
  collections: [
    {
      name: "post",
      label: "Post", // Used in the UI
      folder: "content/post", // The path to the folder where the documents are stored
      create: true, // Allow users to create new documents in this collection
      slug: "{{slug}}", // Filename template, e.g., YYYY-MM-DD-title.md
      fields: [
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          date_format: "DD.MM.YYYY",
          time_format: "HH:mm",
          format: "LLL",
        },
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
        },
        { label: "Cover image", name: "cover", widget: "image" },
        {
          label: "Seo",
          name: "seo",
          widget: "object",
          summary: "{{fields.title}}",
          fields: [
            { label: "Meta title", name: "title", widget: "string" },
            { label: "Meta description", name: "description", widget: "text" },
          ],
        },
      ],
    }, // end of Post
    {
      name: "course",
      label: "Course",
      folder: "content/courses",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "text" },
        { label: "Call to action", name: "call-to-action", widget: "string" },
        { label: "Cover image", name: "cover", widget: "image" },
        { label: "Youtube teaser URL", name: "video", widget: "string" },
        { label: "Description", name: "description", widget: "markdown" },
        { label: "Curriculum", name: "body", widget: "markdown" },
        {
          label: "Udemy",
          name: "udemy",
          widget: "object",
          summary: "{{fields.url}}",
          fields: [
            {
              label: "Udemy referral url",
              name: "referral-url",
              widget: "string",
            },
            { label: "Udemy coupon url", name: "coupon-url", widget: "string" },
          ],
        },
        { label: "Skillshare URL", name: "skillshare-url", widget: "string" },
      ],
    },
    {
      label: "Configurations",
      name: "configs",
      files: [
        {
          label: "Company Info",
          name: "company-info",
          file: "content/company-info.yml",
          fields: [
            { label: "Logo", name: "logo", widget: "image" },
            {
              label: "Social links",
              name: "social-links",
              widget: "object",
              fields: [
                { label: "Github link", name: "github", widget: "string" },
                { label: "Twitter link", name: "twitter", widget: "string" },
                { label: "Youtube link", name: "youtube", widget: "string" },
                { label: "Medium link", name: "medium", widget: "string" },
                { label: "Devto link", name: "devto", widget: "string" },
                { label: "Hashnode link", name: "hashnode", widget: "string" },
                {
                  label: "Newsletter link",
                  name: "newsletter",
                  widget: "string",
                },
              ],
            },
            { label: "VAT", name: "vat", widget: "string" },
            { label: "Email", name: "email", widget: "string" },
          ],
        },
        {
          label: "Nav menu",
          name: "nav-menu",
          file: "/content/nav-menu.yml",
          fields: [
            {
              label: "Menu items",
              name: "menu-items",
              widget: "list",
              fields: [
                {
                  label: "Label",
                  name: "label",
                  widget: "string",
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
