#!/bin/bash

user="erick"
home="/Users/$user"
repo="$home/Developer/setup"

echo "installing brew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# echo "link .tmux.conf"
# ln -s "$repo/tmux/.tmux.conf" $home

echo "link .vimrc"
ln -s "$repo/vim/.vimrc" $home

echo "link new .vim"
rm -rf "$home/.vim"
ln -s "$repo/vim/.vim" $home

# echo "installing tmux using brew"
# brew install tmux

echo "installing Vundle"
git clone https://github.com/VundleVim/Vundle.vim.git $home/.vim/bundle/Vundle.vim

# echo "installing tmux plugin manager"
# git clone https://github.com/tmux-plugins/tpm $home/.tmux/plugins/tpm

#echo "adding zsh to /etc/shells"
#command -v zsh | sudo tee -a /etc/shells

#echo "making zsh the default shell"
#chsh -s $(which zsh)

echo "install ohmyzsh"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

echo "removing the new .zshrc and linking custom one"
rm "$home/.zshrc"
ln -s "$repo/zsh/.zshrc" $home

echo "linking antigenrc"
ln -s "$repo/zsh/.antigenrc" $home

echo "linking .zsh folder"
rm -rf "$home/.zsh"
ln -s $repo/zsh/.zsh $home

echo "source zshrc, installing antigen plugins"
source $home/.zshrc

echo "linking .gitignore and .gitconfig files"
ln -s $repo/git/.gitignore $home
ln -s $repo/git/.gitconfig $home

# echo "deleting useless files"
# echo "delete .bash_history"
# rm .bash_history
# echo "delete .shell.pre-oh-my-zsh"
# rm .shell.pre-oh-my-zsh
# echo "delete .zshrc.pre-oh-my-zsh"
# rm .zshrc.pre-oh-my-zsh
# echo "delete .bashrc"
# rm .bashrc
# echo "delete .bash_logout"
# rm .bash_logout

echo "further steps:"
echo "install your vim plugins using :PluginInstall"
# echo "install yout tmux plugins using <prefix> + I"
echo "happy hacking!"

