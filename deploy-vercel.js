const os = require('os');
const path = require('path');
const { pathToFileURL } = require('url');

// Monkey-patch os functions to return safe ASCII values
os.hostname = () => 'developer';
const originalUserInfo = os.userInfo;
os.userInfo = () => {
    try {
        const info = originalUserInfo();
        return { ...info, username: 'developer' };
    } catch (e) {
        return { username: 'developer', homedir: 'C:\\Users\\14462', shell: null, uid: -1, gid: -1 };
    }
};

console.log('--- Vercel CLI Hostname Wrapper Activated (ESM) ---');
console.log('Hostname overridden to:', os.hostname());
console.log('Username overridden to:', os.userInfo().username);
console.log('---------------------------------------------');

// Load and execute the Vercel CLI via ESM import
const vercelCliPath = path.resolve(__dirname, 'node_modules', 'vercel', 'dist', 'vc.js');
import(pathToFileURL(vercelCliPath).href).catch(err => {
    console.error('Failed to import Vercel CLI:', err);
    process.exit(1);
});
