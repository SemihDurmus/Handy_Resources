<h1 align="center"> Mastering Git Course</h1>
<h4 align="center"> Plural Sight, Paolo Perrotta </h4>
<h4 align="center"> Focus on the Git "way of thinking" </h4>

## Table of Contents

- [How Git Works](#how-git-works)
- [Introduction](#introduction)
- [Basic Workflow](#basic-workflow)
- [Git reset](#git-reset)
- [Advanced Tools](#advanced-tools)
- [Exploring History](#exploring-history)
- [Fixing Mistakes](#fixing-mistakes)
- [Workflow Patterns](#workflow-patterns)

## How Git Works 

- Any sequence of bytes -> SHA1 hash. SHA1s are 20bytes in hexadecimal format. 
- There is only one SHA1 for a piece of string. `git hash-object "Apple Pie"` command would not work. `echo "Apple Pie" | git hash-object --stdin` will return 23991897e13e47ed0adb91a0082c31c82fe0cbe5, because git considers "Apple Pie" as a file name. 
- Every object in Git has its own SHA1 and SHA1s are unique.
- Git objects: Blobs, Trees, Commits, Annotated Tags<p align="center"><img width="700px" src="img/objects.png"/></p>
- ```git
   git init
   ls -a
   echo "Apple Pie" | git hash-object --stdin //23991897e13e47ed0adb91a0082c31c82fe0cbe5
   open .git  
   //open obects folder and see the folder "23". 23 is the first 2 digits of the SHA1. 
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
  //mytag
  git cat-file -p mytag //I could write SHA1 also
  //object 25080f99.............91
  //type commit
  //tag mytag
  //tagger Paolo "Nusco" Perrotta <assaas@sasasa.com> 143601375 +2000
  
  //I love cheesecake
  ```
  There is another type of tag without a specific name. Some call it un-annotated tag og lightweight tag. It's created with this command `git tag tagname`. It provides only commit hash.This tag is basically like a branch that does not move.
- BRANCH📍 A branch is just a reference/pointer to a commit. Inside of the branch file there is only a single line and it is the SHA1 of the current commit.
- Assume there is only one branch and it's master. When we run the folowing commands, both of the branch folders will contain the same SHA1. 
  ```
  git branch lisa
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
- MERGE📍 Let's turn back to master.`git checkout master` and see the previously committed files & folders. I want to merge now.`git merge lisa`. We have a conflict now (ex: both modified: recipes/apple_pie.txt). We can fix it manually with vim editor `vim recipes/apple_pie.txt`. We can see whats conflicting and edit the file content, then save and close `wq`. Now we should add it explicitly because it's not staged `git add recipes/apple_pie.txt` and `git commit` without the need for a commit message, because it already offers `Merge branch 'lisa'`. When we look inside the new commit(ecbe) `git cat-file -p ecbe ` we see that it's just like a normal commit, like merge is just a commit. The exception is that it has two parents.<p align="center"><img width="300px" src="img/merge1.png"/><img width="300px" src="img/merge2.png"/></p>
- DETACHED HEAD📍 This happens when we checkout to a commit instead of a branch. Ex:`git checkout ecbe` `git branch` -> `*(HEAD detached at ecba) lisa master`. If we make one or more commits at this point, the HEAD keeps pointing the new commits. Then if we checkout to master again, those commits become unreachable by a commit or branch, and they are to be deleted after some time(garbage collected). However, if I want them to be stored for good, I should checkout to the latest commit, create a new branch there and checkout to master again. Detached HEAD is useful when we want to make some experiments with our code.
- REBASING📍 Assume we have two branches with a common base and each has several commits without a conflict. If we merge them we have a commit with two parent commits as explained before. If we rebase `git rebase master`, Git detaches the branch from its common base with the other branch and adds all the commits on the top of the target branch, so that they seem like a single branch. But this is not the whole case because objects are immutable. Base can not be changed. What really happens is: the commits on the right are totally copied to the left side except their parents. So they are new objects with new SHA1s. Remaining commits on the right are deleted after some time.<p align="center"><img width="700px" src="img/merge_rebase.png"/></p>
- Merge preserves history as it has developed. A project with rebases looks cleaner but rebase refactors history.(ex: prior commits may look forward in history)
- DISTRIBUTED VCS📍 When we clone a git repo from remote `vim .git/config` command gives us information about it. If we `git branch` we only see *master on local. To see all branches on the remote use `git branch --all`. `git show-ref master` displays all the bramches with tha name master bth remote and local. 
- Like a local branch, a remote branch is just a reference to a commit.
- Case: I cloned a remote repo lo local and made a commit. Now I want to push it to remote, but I figure out that there is another commit made by sbd else in remote. 2 ways to go 1st way: `git push -f` I push my commit to remote and master branch on remote will point my commit. The other commit on remote will garbage collected. 2nd way: fetch the remote to local, merge & fix conflicts, then push. This way the remote will continue to have the same objects as local.(fetch-merge-push). Actually fetch + merge = pull.
- Never rebase shared commits❗️
- Fork is a remote clone. We can clone the forked repo to local, but it does not track the changes of the forked repo. There we should add the forked repo as the second remote to local. This remote is named upstream. What we can do is pull from upstream and push to origin. We can also push any code to origin we want.


## Introduction

- Four important areas:
  * (Stash) - Working Area - Index(Staging Area) - ❗️Repository 
- 2 important questions:
  * How does this command move information accross the Four Area?
  * How does this command change the repository?
- Index is a binary file in the .git folder. 
- `git diff` gives the difference between the working area and the index.
- `git diff --cached` gives the difference between the index and the repository. 

## Basic Workflow

- MOVING DATA TO THE LEFT📍 (moving from repository to index and working area). As we know `git checkout branchname` changes the HEAD from current branch to the selected one. Then the files in the index and working area changes automatically accordingly.
- REMOVING FILES📍 Assume I created a file in working area and added it to index. But I want to remove it from index now. `git rm filename` would delete the file forever. Since that file is not commited yet, Git warns me and offers two options `git rm -f filename` and `git rm --cached filename`. The second one deletes the file from the index or basically unstages it. In terms of Git `rm` is not the opposite of `add`.
- RENAMING FILES📍 Assume I changed the extension of a file in working area from menu.txt to menu.md. `git status` says that I deleted menu.txt and created menu.md. If I `git add menu.md`, the index would contain both menu.txt and menu.md. But I do not want menu.txt in the index anymore. What I should do is `git add menu.txt` which does not really exist in the working area. It sounds strange but this command will overwrite menu.txt in the index area with nothing, basically it deletes that file. This point if we `git status`, Git tells us `renamed:  menu.txt -> menu.md`, so now Git understands what I did. Therefore if I commit, repository will also understand that I only changed the extension. This will happen the same way even if I change also the content to a certain extent. In order to change the file name in both working area and the index, I could shortly have run the command `git mv menu.txt menu.md`.

## Git reset

- reset📍 reset does different things in different cases.
- Which commands move branches? commit, merge, rebase, pull. None of them works only for moving branches. They move branches implicitly, like a side effect.
- `reset` is specifically for moving the current branch and optionally copies data from the repository to the other areas:
  * `--hard` copies data from the new current commit to both index and working area.
  * `--mixed` copies data from the new current commit to index. This is also the default option.  
  * `--soft` does not copy any data.
- 1st example reset case: In repository the head points master, and master points the commit fbe5. I make two editions in two different files in working area and commit these changes seperately in 2 different commits(0be2 and 86d3). Then I change my mind. I want to go back to the point before the two editions(fbe5) in my working area. What I should do now is hard reset. With this command `git reset --hard fbe5` master points fbe5, and the data attached to fbe5 is copied to both index and working directory. Therfore 0be2 and 86d3 become unreachable and be garbage collected.
- 2nd example reset case: I make changes in a file and add it to the index. Then I changed my mind and want to delete the staged data.I need to use `git reset HEAD` which means moving the branch to the commit pointed by HEAD. But the current branch is already pointing at that commit by definition. In this case the reset does not move the branch at all. This is skipping the first step of reset where it moves the branch. Second step is to copy data to index (and working area). Since we did not specify the type of reset it applies --mixin which copies data to only index. So we deleted/overwrote the unwanted staged data at index.(I could simply do the same with git `rm --cached filename`). If we additonally want to change the working area we can `git reset --hard` now.
- 3rd example reset case: I edited two files and added both to index. Now I want one of the files to stay at index but not the other. `git reset HEAD filenametoremovefromindex`. But we could not do the similar thing with --hard

## Advanced Tools

- stash📍 The only Git command that affects the area Stash is `git stash`. The data in stash does not change unless the user wants, and it works like a clipboard.
- Assume I edited a file and added it to the index. Then I started making another edit in another file. For some reaseon I was interrupted and have to work in another branch, but I do not want to lose my unfinished editions. I can store all my changes in the stash. I can store the current status with `git stash save` or shortly `git stash`. Also good to use the option `git stash --include-untracked` which includes the files which haven't been added to index. This may be important because git stash normaly ignores untracked files. What this command does is: copies all data in the working area and the index (that is not in the current commit in the repository) to the stash area and also checks out the current commmit.
-  We can see the content of the stash with `git stash list`. An example output can be `stash@{0}: WIP on master: fbe5356 Commit message`. 
-  `git stash apply`. This command retrieves the data from the latest stash to the place where it was stored before it was stashed.
-  `git stash apply stash@{2}` retrieves data from a specific stash 
-  `git stash clear` cleans the stash.
- checkout file📍 Assume I made changes in two different files and added them to index. Now I want get rid of all the changes in one file in both working area and the index. I can use checkout `git checkout HEAD filenametoremove`. Normally checkout moves the HEAD reference in the repository, usually to a branch, then it copies all the files from the repo to the working area and index. In this case it's different. It will just copy data from the current commit repository to working area and index for one file we specify. We lose all the changes for that file, but did not even get a warning. A command to be careful with. 
- Hunk (Commiting parts of a file)📍 `git add --path filename`. Then follow the instructions to choose in the CLI to select the parts of the file to commit. After doing this `git status` will still say that the file is modified(shown in red). But we can use `git diff` to see the differerences between the working area and the index.
- `--patch` works with add, checkout, stash and reset so that we can work on hunks rather than files when we want.  
- switch📍 `git switch` for moving to a different branch
- restore📍 `git restore` for recovering an earlier commit. 
- `git restore --staged filename` copy the files from the repository to the index only.
- Actually both of above are done with `checkout`, but the latest versions of the Git offers these two distinctive commands.

## Exploring History

- To search history a good command is `git log --graph --decorate --oneline`
- `git show` can be used with SHA, branch name or HEAD. Gives quite a lot of information about a commit.
- How to refer to a parent commit without knowing its hash -> `git show HEAD^`. `git show HEAD^^` show parent of the parent.
- `git show HEAD~2` show 2 commit back from HEAD.
- What if the commit has two parents? `git show HEAD~2^2` Start from HEAD. Go back 2 commits. Pick the second parent.
- Where was head one month ago? `git show HEAD@{"1 month ago"}`
- How commits are connected in history? `git blame filename`, `git diff HEAD HEAD~2`, `git diff branchname master`
- Some more features to use with `git log`
  * `git log --patch` shows which changes were introduced with the commit
  * `git log --grep apple --oneline` shows commit with the string "apple" in their messages. (There is a lot with grep `git help grep` )
  * `git log -Gapple --patch` shows commit with the string "apple" added or removed from any file; and which lines were affected. 
  * `git log -3 --oneline` shows the latest 3 commits.
  * `git log HEAD~5..HEAD^ --oneline` shows the commits from 5 commits before HEAD to parent of the HEAD.(You specify the oldest commit first in the code, but see the oldest commit at the bottom in the results) diff compares the files in 2 branches, here we compare histories.

## Fixing Mistakes

- Never rebase shared commits❗️ 
- Never change shared history❗️ 
- 📍 CHANGING THE LATEST COMMIT: I made a change in a file and commited it (5d24). Then I realize I forgot to make a little more change that should be in the same commit (to have a cleaner history). I can `git commit --amend`, but this can not change the commit 5d24 because comits are immutable. What really happens is Git creates a new commit (5127) including both changes and moves the branch and HEAD to 5127. 5d24 is then garbage collected. It's like a rebase and works ony for the latest commit.
- 📍 CHANGING AN OLDER (BUT NOT SHARED) COMMIT: 
  * I realize I forgot to make more change that should be in an older commit in project history. 
  * First I make a brand new commit including the change I forgot to make(4ea2). 
  * Then `git log --graph --oneline` and find the old commit(2a48) I would like the changes to be together with. If the commit is before a push to remote, I leave it like that. If not we can squash the two commits.
  * `git rebase --interactive origin/master` or `-i`. origin/master branch is the latest commit that was shared. The command means let me edit history from this commit excluded onwards.
  * We see a text editor with a list of commits from the oldest to the latest. 
  * In this editor we can change the order of the commits and change the command on the left as explained in the same page. F.ex: 2a48 is on top and 4ea2 is at the bottom. I cut-paste 4ea2 and paste it under 2a48. Then change the command on left from pick to squash. So that it unites with the 2a48.
  * After finishing save & close and wait the program run.
  * In the first step -when squashing 2a48 and 4ea2- Git asks me to edit the commit message, because there are two from before. Then Git squashes two commits and create a new one.
  * CASE: If one pick is followed by a squash and one of the commits is a merge commit with a solved conflict from before, we may have to re-solve the conflict. Then add the file to index and `git rebase --continue`
  * After the process is done Git moves the branch and HEAD to the latest commit and unreacheable commits become garbage collected.
- This is a powerful tool. We can use it like committing several times and clean the commits afterwards to make them look more understandable before we push them to remote.
- 📍 SAVE AN UNREACHABLE COMMIT: `git reflog HEAD` shows the log of HEAD changes. So even though a commit becomes unreachable, we can still reach it by hash or ex: HEAD@{14} attributes before it gets garbage collected. If we want to save it from that just adding a branch on it would be enough.
- 📍 RE-WRITING LARGE CHUNKS OF HISTORY: `git filter-branch` and a newer command `git filter-repo` is useful for that. Assume I want to delete the file menu.js and all its traces in history.`git filter-repo --path menu.js --invert-paths` means menu.js is de-selected and everything else is selected. When I run the command all menu.js files and traces are gone. This creates a big conflict. Most probably every team member should have to re-clone the repository.
- 📍 FIXING HISTORY WITHOUT CHANGING ANY COMMIT: see `git revert`. Remember revert does not mean undo.

## Workflow Patterns

- When deciding to work with the team the following should be considered:
  * Distribution Model: How many repos do we have? Who can access? ...
  * Branching Model: Which branches do we have? How to use them? ...
  * Constraints: Do we merge or rebase? Can we push unstable code? ..
- 📍 MODELS:
  * PEER-TO-PEER MODEL: All team members have the same permission. It's difficult to decide which repo is more up-to-date. 
  * CENTRALIZED MODEL: One extra repo is designated as "bless". A bless repo is often a bare-repo, it has no working area or index, just used to share data. Everybody has the right to push.
  * PULL REQUEST MODEL: Only a certain number of team members(maintainers) can push to the blessed repo, the others(contributors) can only pull. If one of the contributors have changes to push, he can send a pull request to a maintainer. The maintainer solves the conflict if there is, merges and pushes to the blessed repo.
  * DICTATOR AND LIEUTANENTS MODEL: There is a main project and multiple sub-projects each of which works as a pull request model.
- 📍 BRANCHES: Stable branch means that every commit is a working version of the project, in ustable branches the end commits do not necessarily work.
- Some prefer to use release projects from another branch than main/master. One reason is that they keep the code more stable in a release branch. The branch can be merged with the main branch as soon as it's proven as stable.
- When two or more developers work on different features, each can create a new branch and continue with that branch until they're finished. Then they can merge with the main branch. After merging the featureb (or topic) branches can either be deleted or kept for future reference.
- 📍 CHERRY-PICK: Assume there are two branches (main and release) with several commits on each. One branch would like to have the other branch's only one commit but not any other. The special command for that is `git cherry-pick`. It works like a `rebase` and some teams do not like rebases. There is another solution for that: You create a third branch (ex: hotfix) with that special commit and merge it with both main and release.
- 📍 CONSTRAINTS (RULES): Few examples:
  * rebase, do not merge or merge, do not rebase.
  * who can do what in which branches?
  * do not push red build (failed in tests)
  * squash a feature to a single commit before you merge it to master.
 - A good article on an example git workflow : [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)<p align="center"><img src="img/simple.png" width="700px"/></p>
 - Do not design a workflow, grow a workflow!
