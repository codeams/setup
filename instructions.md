# prepare ubuntu for development

this works for both server and desktop builds

tested on ubuntu 20 and 21

-[ ] install openssh if not already installed
-[ ] get client key and add to authorized_keys
-[ ] block password auth for ssh (no PAM, no challenge, no password auth on /etc/ssh/sshd_conf)
-[ ] keygen new keys for this server
-[ ] add to github
-[ ] clone setup

-[ ] link .gitconfig and test with `git config --list`
-[ ] link vimrc
-[ ] link .vim
-[ ] link .tmux.conf
- link .zshrc, uncomment linux brew evals
- link antigenrc

- install vundle

**vim is ready**

- install brew
- instal zsh, make zsh default shell ()
- install oh-my-zsh
- run and check antigen

**shell and tmux are ready**
you can now start installing your stack

## troubleshooting
### zsh is not a valid shell
```
might need to add to /etc/shells
```

### reconfigure locales
```
sudo locale-gen "en_US.UTF-8"
sudo dpkg-reconfigure locales #choose all locals, en_US UTF-8
```
