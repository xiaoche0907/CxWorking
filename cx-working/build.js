const fs = require('fs');
const path = require('path');

// 读取 index.html 源码
const htmlPath = path.join(__dirname, 'index.html');
if (!fs.existsSync(htmlPath)) {
    console.error('Error: index.html not found at', htmlPath);
    process.exit(1);
}
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 读取系统环境变量 (Vercel 部署时提供)
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// 替换占位符
htmlContent = htmlContent.replace('__SUPABASE_URL__', supabaseUrl);
htmlContent = htmlContent.replace('__SUPABASE_KEY__', supabaseKey);

// 确保 dist 目录存在
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// 写入 dist/index.html
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf8');
console.log('构建成功: 占位符已替换，已生成 dist/index.html');

// 拷贝 Logo 和头像资源函数
function copyFileSync(src, dest) {
    fs.writeFileSync(dest, fs.readFileSync(src));
}

function copyFolderRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) return;
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyFolderRecursiveSync(srcPath, destPath);
        } else {
            copyFileSync(srcPath, destPath);
        }
    }
}

// 拷贝 Logo (查找当前目录, __dirname, 或者是父目录)
const logoName = 'bea37665d260b15a324284add4837a05.png';
let logoSrc = '';
if (fs.existsSync(logoName)) {
    logoSrc = logoName;
} else if (fs.existsSync(path.join(__dirname, logoName))) {
    logoSrc = path.join(__dirname, logoName);
} else if (fs.existsSync(path.join(__dirname, '..', logoName))) {
    logoSrc = path.join(__dirname, '..', logoName);
}

if (logoSrc) {
    copyFileSync(logoSrc, path.join(distDir, logoName));
    console.log('构建成功: Logo 已拷贝到 dist/');
} else {
    console.warn('构建警告: 未找到 Logo 文件');
}

// 拷贝成员头像 (查找当前目录, __dirname, 或者是父目录)
const avatarDirName = '成员头像';
let avatarSrc = '';
if (fs.existsSync(avatarDirName)) {
    avatarSrc = avatarDirName;
} else if (fs.existsSync(path.join(__dirname, avatarDirName))) {
    avatarSrc = path.join(__dirname, avatarDirName);
} else if (fs.existsSync(path.join(__dirname, '..', avatarDirName))) {
    avatarSrc = path.join(__dirname, '..', avatarDirName);
}

if (avatarSrc) {
    copyFolderRecursiveSync(avatarSrc, path.join(distDir, avatarDirName));
    console.log('构建成功: 成员头像已拷贝到 dist/成员头像/');
} else {
    console.warn('构建警告: 未找到成员头像文件夹');
}
