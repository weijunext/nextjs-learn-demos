const fs = require('fs');
const path = require('path');
import { MetadataRoute } from 'next';

export function getFoldersRecursive(filePath: any) {
  const folders: any = [];

  function shouldIgnoreFolder(folderName: any) {
    const ignoredPrefixes = ['[', '(', '_', '-', 'api'];
    return ignoredPrefixes.some((prefix) => folderName.startsWith(prefix));
  }

  function traverse(currentPath: any) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    files.forEach((file: any) => {
      if (file.isDirectory()) {
        const folderName = file.name;
        if (!shouldIgnoreFolder(folderName)) {
          folders.push(folderName);
          traverse(path.join(currentPath, folderName));
        }
      }
    });
  }

  traverse(filePath);
  return folders;
}

// Usage example
const targetPath = '/app';
const folderNames = getFoldersRecursive(targetPath);


export default function sitemap(): MetadataRoute.Sitemap {
  return folderNames
}