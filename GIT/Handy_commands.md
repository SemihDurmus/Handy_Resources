<h1 align="center">Handy Git Commands</h1>

1. master to main
```
git branch -m master main
git push -u origin main
```
Go to repositoris Settings > Branches > Switch master to main

```
git push origin --delete master
```

2. Create and commit to a new branch
```
git branch branch-name
git checkout branch-name
or
git checkout -b branch-name

git add .
git commit -m"commit message"
git push origin branch-name
```

3. For changing HEAD to main
```
git checkout main
```
4. Merging main with another branch
```
git merge branch-name
```

5. After changing repository name on GitHub
```
git remote set-url origin new_url
```
6. For displaying git log in one line
```
git log --oneline
```
7. Connecting to a new GitHub account
```
git config --list
git config --global user.name"Xxxx"
git config --global user.email xxx@example.com
```
8. Is my git has a remote?
```
git remote show origin

if not
git remote add origin repo_url
git push --set-upstream origin master
```





- <code>git clone URL . </code> <br />
	(. at the end of the code over is for cloning the content in the same folder, so that a new folder (with the repository's name) is not formed under the selected folder)<br />
 -> copy paste / create files<br />
- <code>git add .</code><br />
- <code>git commit -m"...."</code><br />
- <code>git remote add origin URL</code><br />
- (<code>git remote -v</code>)<br />
- <code>git push origin master</code><br />
<br />
- (git push -u origin master -> is used for pushing local content to GitHub.<br />
  (In the code, the origin is your default remote repository name and '-u' flag is upstream, which is equivalent to '-set-upstream.' and the master is the branch, name.upstream is the repository that we have cloned the project.)
  <br/><br/>
- <code>git push force</code><br/>
