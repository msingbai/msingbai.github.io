#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "Running npm build..."
npm run build

echo "Changing directory to docs/.vuepress/dist..."
cd docs/.vuepress/dist

echo "Deploying to GitHub Pages..."
# 如果需要自定义域名，取消下面的注释并设置你的域名
echo 'msingbai.top' > CNAME

echo 'google.com, pub-1725717718088510, DIRECT, f08c47fec0942fa0' > ads.txt

# 检查 GITHUB_TOKEN 是否已设置
if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN is not set. Please set the GITHUB_TOKEN environment variable."
  exit 1
fi

# 设置 Git 用户信息
git config --global user.name "msingbai"
git config --global user.email "SparkLast@163.com"

# 初始化 Git 仓库
echo "Initializing git repository..."
git init

# 添加所有文件到 Git
echo "Adding files to git..."
git add -A

# 提交更改
echo "Committing changes..."
git commit -m "来自github actions的自动部署"

# 推送到 GitHub
echo "Pushing to GitHub..."
githubUrl="https://msingbai:${GITHUB_TOKEN}@github.com/msingbai/msingbai.github.io.git"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# 返回到原始目录并清理
cd -
rm -rf docs/.vuepress/dist

echo "Running baiduPush.js..."
node utils/baiduPush.js https://msingbai.top

echo "Script completed successfully."
read -p "Press any key to exit..." key