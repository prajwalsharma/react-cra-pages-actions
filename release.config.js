/* eslint-disable no-template-curly-in-string */
export const branches = ['main'];
export const plugins = [
  '@semantic-release/commit-analyzer',
  '@semantic-release/release-notes-generator',
  '@semantic-release/changelog',
  [
    '@semantic-release/git',
    {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
    },
  ],
  [
    '@semantic-release/github',
    {
      assets: 'dist/**',
    },
  ],
];
  