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
  creator: '@weijunext',
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
  footerProduct: [
    { url: 'https://weijunext.com/', name: 'J实验室' },
    { url: 'https://nextjscn.org/', name: 'Next.js 中文文档' },
    { url: 'https://ship.weijunext.com/', name: 'Chrome插件全栈教程', rel: 'nofollow noopener noreferrer' },
    { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools', rel: 'nofollow noopener noreferrer' },
  ]
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
