const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function getLocation() {
  try {
    const response = await axios.get('http://ip-api.com/json/?lang=zh-CN');
    const location = `${response.data.city}, ${response.data.country}`; // 城市和国家
    const region = `${response.data.regionName}`;
    return region;
  } catch (error) {
    console.error('无法获取地理位置信息，使用默认值。');
    return '未知地点';
  }
}

async function createPost() {
  const title = process.argv[2] || '我的新文章';
  const region = await getLocation(); // 获取地点
  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // 获取本地时区

  const now = new Date();
  const formatter = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: localTimeZone
  });

  const friendlyDate = formatter.format(now);
  const filename = `${title.replace(/\s+/g, '-').toLowerCase()}.md`;

  const content = `

# ${title}

这是文章的正文内容。

*文字写于：${region}*
`;

  const docsPath = 'docs';
  const filePath = path.join(docsPath, filename);

  if (!fs.existsSync(docsPath)) {
    fs.mkdirSync(docsPath);
  }

  fs.writeFileSync(filePath, content);
  console.log(`文件已成功创建：${filePath}`);
  console.log(`使用本地时区：${localTimeZone}`);
  console.log(`地点：${region}`);
}

createPost();