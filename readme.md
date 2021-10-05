# happy hacking!

this was written when setting up an ubuntu 21 server. good luck!

## setup
brew, zsh, ohmyzsh, antigen, vim, Vundle, tmux, tpm, iterm2

## first steps
1. when installing ubuntu server, check "install openssh" and load keys from github OR you can install it later (use apt for this one) and load the pub key using python http.server and wget.
1. block password auth for ssh (no PAM, no challenge, no password auth on /etc/ssh/sshd_conf)
1. keygen new keys for this server – be a decent human being and add a passphrase!
1. add pub key to github
1. clone codeams/setup

choose:
- make happyhacking.sh executable: `sudo chmod +x happyhacking.sh`
- follow steps in happyhacking.sh

## troubleshooting

**reconfigure locales**
```
sudo locale-gen "en_US.UTF-8"
sudo dpkg-reconfigure locales #choose all locals, en_US UTF-8
```
