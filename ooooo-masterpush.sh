cd E:/VueCode/Blog/msingbai.github.io
git remote add origin https://github.com/msingbai/msingbai.github.io.git
git checkout master
git add .
git commit -m "Initial commit with new content"
git push -u origin master --force
node utils/baiduPush.js https://msingbai.top
