#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
#echo 'mingbai.com' > CNAME

echo 'google.com, pub-1725717718088510, DIRECT, f08c47fec0942fa0' > ads.txt

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:msingbai/msingbai.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://msingbai:${GITHUB_TOKEN}@github.com/msingbai/msingbai.github.io.git
  git config --global user.name "msingbai"
  git config --global user.email "SparkLast@163.com"
fi

#注释掉，因为修改了本地的主题，deploy时以本地的为主，不需要ci工作流线上部署
#git init
#git add -A
#git commit -m "${msg}"
#git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist