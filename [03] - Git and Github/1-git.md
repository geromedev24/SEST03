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

This is a problematic change.
This contains bugs/errors.