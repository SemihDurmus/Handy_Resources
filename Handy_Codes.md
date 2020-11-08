<h1 align="center">Handy Code Snippets</h1>

## Table of Contents
- [Git_Hub](#Git_Hub)
- [SASS](#SASS)
- [React-Native](#React-Native)
- [React](#React)

## Git_Hub

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
- After changing repository name<code>git remote set-url origin new_url</code><br/>


## SASS

For creating .css files from .scss files in VS Code's Terminal 

- Download node.js <br/>
- <code>node --version</code> <br/>
- <code>npm install -g sass</code> <br/>
- <code>sass --watch ./sass/style.scss:style.css </code><br/>


## React-Native

- <code>npm install -g yarn</code><br/>
- <code>cd android && gradlew clean && cd ..</code><br/>

## React
#### Installation and Setup

- To use React in your JavaScript project, you can install it via npm and use in your application.

- <code>npm install --save react react-dom</code><br/>
  To create a react app, you can aslo use Create React App (CRA) boilerplate.

1. You can install create-react-app globally with the node package manager (npm).
   <code>npm install -g create-react-app</code><br/>
   
   If you don't want to install it globally, you can use npx.

   <code>npx create-react-app my-app</code><br/>

2. Then run the generator in your chosen directory

   <code>create-react-app my-app</code><br/>

3. Navigate to the newly created directory and run the start script.
   
   <code>cd my-app/</code><br/>
   <code>npm start</code><br/>

