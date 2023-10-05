import { SiteConfig } from "types"

const baseSiteConfig = {
  name: "Next.js Demos",
  description:
    "Dive into next.js and react. Share tutorials on the technologies within the Next.js ecosystem.",
  url: "https://nextjs.weijunext.com",
  metadataBase: new URL("https://nextjs.weijunext.com"),
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Client Components",
    "next-auth",
    "Upstash",
    "Redis",
    "Prisma",
    "Postgres",
    "Docker",
    "Contentlayer",
  ],
  authors: [
    {
      name: "weijunext",
      url: "https://weijunext.com",
    }
  ],
  creator: 'weijunext',
  themeColor: '#fff',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  ogImage: "https://nextjs.weijunext.com/og.jpg",
  links: {
    twitter: "https://twitter.com/weijunext",
    github: "https://github.com/weijunext/nextjs-learn-demos",
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
