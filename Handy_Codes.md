# Handy_Codes

## For pushing files to an existing repo

- git clone URL . <br />
	(. at the end of the code over is for cloning the content in the same folder, so that a new folder (with the repository's name) is not formed under the selected folder)<br />
 -> copy paste / create files<br />
- git add .<br />
- git commit -m"...."<br />
- git remote add origin URL<br />
- (git remote -v)<br />
- git push origin master<br />
<br />
- (git push -u origin master -> is used for pushing local content to GitHub.<br />
  (In the code, the origin is your default remote repository name and '-u' flag is upstream, which is equivalent to '-set-upstream.' and the master is the branch, name.upstream is the repository that we have cloned the project.)


## For creating css files from scss files in VS Code's Terminal 

- Download node.js <br/>
- npm install -g sass <br/>
- sass --watch ./sass/style.scss:style.css <br/>
