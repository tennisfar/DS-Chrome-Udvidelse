const fs = require('fs');
const path = require('path');

// Path to your files
const packageJsonPath = path.join(__dirname, 'package.json');
const manifestJsonPath = path.join(__dirname, 'manifest.json');

// Read package.json and manifest.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const manifestJson = JSON.parse(fs.readFileSync(manifestJsonPath, 'utf8'));

// Update version in manifest.json
manifestJson.version = packageJson.version;

// Write updated manifest.json back to file
fs.writeFileSync(manifestJsonPath, JSON.stringify(manifestJson, null, 2), 'utf8');
