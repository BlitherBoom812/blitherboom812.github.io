---
title: github的一些命令
date: 2022-09-28 15:46:08
tags:
---

# 如何删除某些提交？

## 删除最新的提交 
`git reset --hard HEAD^`

可以删除最新的一次提交。若要删除多次提交，可以在HEAD后多加几个^。

## 删除/合并中间的某次提交
`git rebase -i <commit_id>`

填写要删除的提交的**之前**的那次提交的id。

之后会打开一个vim界面，显示

```bash
pick aaa
pick bbb
pick ccc
# Rebase xxx onto xxx (xxx command)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified); use -c <commit> to reword the commit message
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
```

根据提示，使用`drop`会弃用那次commit的修改，使用`squash`则会将修改融合至上一条commit。根据个人需要进行操作。

## 同步到远程仓库

上述都是针对本地提交。如果已经提交到github了怎么办？本地删除后直接`git push`会显示提交数低于远程仓库，不能执行。

`git push origin HEAD --force`

强制将当前所在的HEAD所在的提交push到远程仓库，并且使远程仓库的提交记录和本地保持同步。