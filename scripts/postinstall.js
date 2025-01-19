const FileSystem = require('fs');

console.info('Generating Stubs files for "About Section".')
FileSystem.copyFileSync(
  './src/stubs/AboutMeSection.tsx.stub',
  './src/pages/Frontpage/components/AboutMe/AboutMeSection.tsx'
);
console.info('Successfully generated.\n');

console.info('Generating Stubs files for "My Focus".')
FileSystem.copyFileSync(
  './src/stubs/MyFocusSection.tsx.stub',
  './src/pages/Frontpage/components/MyFocus/MyFocusSection.tsx'
);
console.info('Successfully generated.\n');