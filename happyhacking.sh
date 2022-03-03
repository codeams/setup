#!/bin/bash

# create ssh key and add to github before running


# vars
home="/home/codeams"
repo="$home/Developer/setup"

echo "installing git and curl"
sudo apt install git
sudo apt install curl

echo "installing brew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

echo "adding brew to .profile and source"
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> $home/.profile
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

echo "installing build essential"
sudo apt install build-essential

echo "link .tmux.conf"
ln -s "$repo/tmux/.tmux.conf" $home

echo "link .vimrc"
ln -s "$repo/vim/.vimrc" $home

echo "link .vim"
ln -s "$repo/vim/.vim" $home

echo "installing tmux using brew"
brew install tmux

echo "installing zsh using brew"
brew install zsh

echo "installing Vundle"
git clone https://github.com/VundleVim/Vundle.vim.git $home/.vim/bundle/Vundle.vim

echo "installing tmux plugin manager"
git clone https://github.com/tmux-plugins/tpm $home/.tmux/plugins/tpm

#echo "adding zsh to /etc/shells"
#command -v zsh | sudo tee -a /etc/shells

#echo "making zsh the default shell"
#chsh -s $(which zsh)

echo "install ohmyzsh"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

echo "removing the new .zshrc and linking custom one"
rm .zshrc
ln -s "$repo/zsh/.zshrc" $home

echo "linking antigenrc"
ln -s "$repo/zsh/.antigenrc" $home

echo "linking .zsh folder"
ln -s $repo/zsh/.zsh $home

echo "source zshrc, installing antigen plugins"
source $home/.zshrc

echo "deleting useless files"
echo "delete .bash_history"
rm .bash_history
echo "delete .shell.pre-oh-my-zsh"
rm .shell.pre-oh-my-zsh
echo "delete .zshrc.pre-oh-my-zsh"
rm .zshrc.pre-oh-my-zsh
echo "delete .bashrc"
rm .bashrc
echo "delete .bash_logout"
rm .bash_logout

echo ""
echo "reboot if you will please... just to make sure we didn't break anything :)"
echo ""
echo "install your vim plugins using :PluginInstall"
echo "install yout tmux plugins using <prefix> + I"
echo "happy hacking!"

