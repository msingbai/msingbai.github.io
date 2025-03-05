git checkout master
git checkout --orphan temp
git rm -rf .
git commit -m "Clear all files"
git push origin temp:master --force
git branch -d temp
cd E:/VueCode/Blog/msingbai.github.io
git init
git remote add origin https://github.com/msingbai/msingbai.github.io.git
git checkout master
git add .
git commit -m "Initial commit with new content"
git push -u origin master --force