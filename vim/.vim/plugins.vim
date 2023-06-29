filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

Plugin 'VundleVim/Vundle.vim'

""""""""""""""""""""""""""""""""""""""""""""""""
" Start Plugin List
""""""""""""""""""""""""""""""""""""""""""""""""
if !&diff

  """ Color schemes
  Plugin 'navarasu/onedark.nvim'
  Plugin 'codeams/clearnight.vim'

  """ Vim
  Plugin 'ctrlpvim/ctrlp.vim'
  Plugin 'gcmt/taboo.vim'

  """ Editor
  Plugin 'airblade/vim-gitgutter'
  Plugin 'tomtom/tcomment_vim'
  Plugin 'terryma/vim-multiple-cursors'
  Plugin 'jszakmeister/vim-togglecursor'

  " Sense
  Plugin 'github/copilot.vim'
  Plugin 'prettier/vim-prettier'
  Plugin 'neoclide/coc.nvim'

  " Typescript
  Plugin 'pangloss/vim-javascript'
  " Plugin 'leafgarland/typescript-vim'
  Plugin 'maxmellon/vim-jsx-pretty'

endif
""""""""""""""""""""""""""""""""""""""""""""""""
" End
""""""""""""""""""""""""""""""""""""""""""""""""

call vundle#end()
filetype plugin indent on
