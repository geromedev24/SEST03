# Git

1. To check the git version

```bash
git --version
```

2. Configure Git

- Configure the username

```bash
git config --global user.name [username]

git config user.name
```

- Configure email

```bash
git config --global user.email "email-example.com"

# To check

git config user.email
```

3. Initialize a remote repository

```bash
git init
```

4. Legends

- U : Untracked
- A : Added
- M : Modified

## Git Three Stage Architecture

1. How to check the status of all files and folders.

```bash
git status
```

2. Add modified files to the staging area.

```bash
# Add all the modified files
git add .

# Add a specific file
git add [destination_file]
```

3. Create a commit

```bash
git commit -m "[commit_message]"
```

4. Show commit history

```bash
git log
```

```bash
git log --oneline
```

## Reverting vs Resetting

1. Reverting Commits

- Create a new commit that undo the changes from the previous commit.

```bash
git revert --no-edit [problematic-commit-hash]
```

2. Resetting commits

- Delete the last commit but it will put all the changes in the staging area
- You have a choice if you want to modify the code or delete the code entirely

```bash
git reset [second-to-the-last-commit-hash]
```

## Branching

- git init : Think of this as planting the seed.

- Create a commit: The plant will grow.

- Main/Master Branch: trunk of the tree.

1. View all the available branches.

```bash
git branch
```

2. Create a branch.

```bash
git branch [name-of-the-branch]
```

3. Switch to a different branch.

```bash
git switch [name-of-the-branch]
```

## Merging

1. Merging branches

- Note You should not be in the branch that you want to delete.

```bash
git merge [name-of-the-branch]
```

2. Delete unused branches.

```bash
git branch -d [name-of-the-branch]
```
