" Automatic installation of Vim Plug
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

" Automatic run of PluginInstall
autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | source $MYVIMRC
\| endif

if !&diff

call plug#begin('~/.vim/plugged')
""""""""""""""""""""""""""""""""""""""""""""""""
" Start Plugin List
""""""""""""""""""""""""""""""""""""""""""""""""

  """ Color schemes
  Plug 'navarasu/onedark.nvim'
  Plug 'codeams/clearnight.vim'
  Plug 'codeams/palenight.vim'

  """ Vim
  Plug 'gcmt/taboo.vim'
  Plug 'itchyny/lightline.vim'

  """ Files and Source control
  Plug 'ctrlpvim/ctrlp.vim'
  Plug 'tpope/vim-fugitive'

  """ Editor
  Plug 'airblade/vim-gitgutter'
  Plug 'tomtom/tcomment_vim'
  Plug 'terryma/vim-multiple-cursors'
  Plug 'jszakmeister/vim-togglecursor'

  " Sense
  Plug 'github/copilot.vim'
  Plug 'prettier/vim-prettier'
  Plug 'neoclide/coc.nvim', {'branch': 'release'}

  " Typescript
  Plug 'pangloss/vim-javascript'
  " Plug 'leafgarland/typescript-vim'
  Plug 'maxmellon/vim-jsx-pretty'

""""""""""""""""""""""""""""""""""""""""""""""""
" End List
""""""""""""""""""""""""""""""""""""""""""""""""
call plug#end()
endif
