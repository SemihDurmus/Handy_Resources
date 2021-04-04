<h1 align="center"> Mastering Git Course</h1>
<h2 align="center"> Plural Sight, Paolo Perrotta </h2>
<h2 align="center"> Focus on the Git "way of thinking" </h2>

## Table of Contents

- [Basics](#basics)
- [Basic Workflow](#basic-workflow)
- [Git reset](#git-reset)
- [Advanced Tools](#advanced-tools)
- [Exploring the Past](#exploring-the-past)
- [Fixing Mistakes](#fixing-mistakes)
- [Finding Your Flow](#finding-your-flow)

## Basics 

- Any sequence of bytes -> SHA1 hash. SHA1s are 20bytes in hexadecimal format. 
- There is only one SHA1 for a piece of string. `git hash-object "Apple Pie"` command would not work. `echo "Apple Pie" | git hash-object --stdin` will return 23991897e13e47ed0adb91a0082c31c82fe0cbe5, because git considers "Apple Pie" as a file name. 
- Every object in Git has its own SHA1 and SHA1s are unique.
- Git objects: Blobs, Trees, Commits, Annotated Tags<p align="center"><img width="700px" src="img/objects.png"/></p>
- ```git
   git init
   ls -a
   echo "Apple Pie" | git hash-object --stdin //23991897e13e47ed0adb91a0082c31c82fe0cbe5
   open .git  
   //open obects folder and see the folder "23". 23 is the forst 2 digits of the SHA1. 
   //Inside there's a file with the remaining digits of the SHA1 as its name. This is called a blob of data
   git cat-file 23991897e13e47ed0adb91a0082c31c82fe0cbe5 -t 
   // -t is for type. Output is : blob
   git cat-file 23991897e13e47ed0adb91a0082c31c82fe0cbe5 -p
   // -p is for print. Output is : Apple pie
   ```
- In the object database blob is not really a file, but the content of a file. The file name and the file permissions are not stored in blob, they are stored in the tree that points the blob. 
- When we `git log` we see that commits have their SHA1s and also point to trees, blobs and parent commits if they have. Trees point the same blob as before if the content is still the same. Similar thing goes with the trees; they point the same trees if that part of the files/folders has not changed. So basically Git does not store things more than once. 
- `git count-objects` command gives the ouput like: 8 objects, 32 kilobytes
- What if I have a huge file and change only a single line. Would Git copy the whole content as a blob? No it stores the differences between files.
- TAGS📍 A tag is a simple label attached to an object forever.
  ```
  git tag -a mytag -m "I love cheesecake"
  git tag
  mytag
  git cat-file -p mytag //I could write SHA1 also
  object 25080f99.............91
  type commit
  tag mytag
  tagger Paolo "Nusco" Perrotta <assaas@sasasa.com> 143601375 +2000
  
  I love cheesecake
  ```
  There is another type of tag without a specific name. Some call it un-annotated tag og lightweight tag. It's created with this command `git tag tagname`. It provides only commit hash.This tag is basically like a branch that does not move.
- BRANCH📍 A branch is just a reference/pointer to a commit. Inside of the branch file there is only a single line and it is the SHA1 of the current commit.
- Assume there is only one branch and it's master. When we run the folowing commands, both of the branch folders will contain the same SHA1. 
  ```
  git branch newbranch
  git branch
  lisa
  *master   //* is for showing current branch
  open .git/
  cat .git/refs/heads/master
  57026.................51f
  cat .git/refs/heads/lisa
  57026.................51f
  ```
- HEAD📍 HEAD file contains reference to current branch. Example: `ref: refs/heads/master`. So it's just a reference to a branch.
- Assume we have 2 branches: master and lisa. Now both branches are pointing the same commit(example: 5720), and HEAD is pointing to master branch. This moment we make one more commit. Now lisa is still pointing 5720. Master branch is pointing the new commit(ex:e268), and HEAD is till pointing master. Because it did not change. 
- CHECKOUT📍 Lets make lisa current branch: `git checkout lisa`. Two things happen: 
  * HEAD now points lisa. (Inside HEAD file -> ref: refs/heads/lisa)
  * Git replaces the files & folders in our working area or working directory with the files & folders in this commit (5720)<p align="center"><img width="300px" src="img/Screenshot 2021-04-04 at 19.31.46.png"/></p>
- So checkout means move HEAD and update working area.
- Now we make another commit(007f). lisa will point new commit and HEAD will point lisa.
- MERGE📍 Let's turn back to master.`git checkout master` and see the previously committed files & folders. I want to merge now.`git merge lisa`. We have a conflict now (ex: both modified: recipes/apple_pie.txt). We can fix it manually with vim editor `vim recipes/apple_pie.txt`. We can see whats conflicting and edit the file content, then save and close `wq`. Now we should edit it explicitly because it's not staged `git add recipes/apple_pie.txt` and `git commit` without the need for a commit message, because it already offers `Merge branch 'lisa'`. When we look inside the new commit(ecbe) `git cat-file -p ecbe ` we see that it's just like a normal commit, like merge is just a commit. The exception is that it has two parents.<p align="center"><img width="300px" src="img/merge1.png"/><img width="300px" src="img/merge2.png"/></p>
- DETACHED HEAD📍 This happens when we checkout to a commit instead of a branch. Ex:`git checkout ecbe` `git branch` -> `*(HEAD detached at ecba) lisa master`. If we make one or more commits at this point, the HEAD keeps pointing the new commits. Then if we checkout to master again, those commits become unreachable by a commit or branch, and they are to be deleted after some time(garbage collected). However, if I want them to be stored for good, I should checkout to the latest commit, create a new branch there and checkout to master again. Detached HEAD is useful when we want to make some experiments with our code.
- REBASING📍 Assume we have two branches with a common base and each has several commits without a conflict. If we merge them we have a commit with two parent commits as explained before. If we rebase `git rebase master`, Git detaches the branch from its common base with the other branch and adds all the commits on the top of the target branch, so that they seem like a single branch. But this is not the whole case because objects are immutable. Base can not be changed. What really happens is: the commits on the right are totally copied to the left side except their parents. So they are new objects with new SHA1s. Remaining commits on the right are deleted after some time.<p align="center"><img width="700px" src="img/merge_rebase.png"/></p>
- Merge preserves history as it has developed. A project with rebases looks cleaner but rebase refactors history.(ex: prior commits may look forward in history)

## Basic Workflow


- Four important areas:
  * (Stash) - Working Area - Index - ❗️Repository 
- 2 important questions:
  * How does this command move information accross the Four Area?
  * How does this command change the repository?
- Git objects : commit, blob, tree
- 
