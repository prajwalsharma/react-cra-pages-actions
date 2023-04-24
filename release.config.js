/* eslint-disable no-template-curly-in-string */
module.exports =  {
    branches: ['main'],
    plugins: [
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
    ],
  };
  