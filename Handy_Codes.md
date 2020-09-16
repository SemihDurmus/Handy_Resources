# Handy_Codes

## For pushing files to an existing repo

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
- <code>git log --oneline</code><br/>
- <code>git config --list</code><br/>
- <code>git config --global user.name"Xxxx"</code><br/>
- <code>git config --global user.email xxx@example.com</code><br/>
- For changing HEAD <code>git checkout -b "branchName"</code><br/>
- For merging<code>git merge branchName</code><br/>







## For creating .css files from .scss files in VS Code's Terminal 

- Download node.js <br/>
- <code>node --version</code> <br/>
- <code>npm install -g sass</code> <br/>
- <code>sass --watch ./sass/style.scss:style.css </code><br/>
