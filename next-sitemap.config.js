/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  siteUrl: 'https://nextjs.weijunext.com',
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404'],
  generateRobotsTxt: true,
  // sitemapSize: 5000, // 站点超过5000个，拆分到多个文件
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/useSyncExternalStore'),
    await config.transform(config, '/useRef'),
    await config.transform(config, '/useMemo'),
    await config.transform(config, '/useLayoutEffect'),
    await config.transform(config, '/useImperativeHandle'),
    await config.transform(config, '/useEffect'),
    await config.transform(config, '/useDeferredValue'),
    await config.transform(config, '/hooks'),
    await config.transform(config, '/fake-membership'),
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://nextjs.weijunext.com/sitemap.xml',
      'https://nextjs.weijunext.com/sitemap-0.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/'],
      },
      {
        userAgent: 'SemrushBot',
        disallow: ['/'],
      },
      {
        userAgent: 'MJ12bot',
        disallow: ['/'],
      },
      {
        userAgent: 'DotBot',
        disallow: ['/'],
      },
    ],
  },
};
