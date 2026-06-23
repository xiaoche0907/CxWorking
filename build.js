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
