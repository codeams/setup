set encoding=utf8

"codeams@gmail.com
"Vim configuration


"""""""""""""""""""""""""""""
" Setup
"""""""""""""""""""""""""""""

"Load plugins file.
so ~/.vim/plugins.vim

"Change leader to something closer to my fingers :smirk:.
let mapleader = ','


"""""""""""""""""""""""""""""
" Vim behavior
" Configurations regarding the way vim should work.
"""""""""""""""""""""""""""""

" use system clipboard
set clipboard=unnamedplus

"Disable editor bells.
set noerrorbells visualbell t_vb=

"Use every setting even if it's not comatible with Vi.
set nocompatible

"Drastically reduce update time in order to allow
  "git gutter to catch changes faster.
set updatetime=100

"Don't create a swap file
set noswapfile

"Don't create a viminfo file
set viminfo=

"Change tab names
let g:taboo_tab_format = "[%N] %f %m  "
let g:taboo_renamed_tab_format = "[%N] %l %m  "


"""""""""""""""""""""""""""""
" Editor
" Configurations regarding the editor behavior
"""""""""""""""""""""""""""""

"Open the file explorer in view mode 3 (tree lol)
let g:netrw_liststyle = 3

"Don't show the banner in the new tab page
let g:netrw_banner = 0

"Show match in parens, etc.
set showmatch

"Disable line numbers.
set nonumber

"Disable the char and line counter
set noruler

"Only show the X FILE WRITTEN for a moment
set noshowcmd
set noshowmode

"Hide the file name at the bottom
" set ls=0

"Disable line wrapping.
set nowrap

"Enable syntax highlight.
syntax enable

"Make backspace behave like every other editor.
set backspace=indent,eol,start

"Change spell language
"set spell spelllang=en_us

"Change completing configuration:
  "Include current file, windows and opened and loaded buffers.
set complete=.,w,b,u

"Tabs and indentation configuration.
"TODO: Add editor config plugin
set softtabstop=2
set tabstop=2 shiftwidth=2 expandtab
set list
set listchars=tab:->,trail:·

" Set line height simliar to 1.5
set linespace=5

"""""""""""""""""""""""""""""
" Visuals
" Configurations for making the editor look great.
"""""""""""""""""""""""""""""

" Use the most beautiful palette ever made
" " Check if the terminal is Terminal.app
if $TERM_PROGRAM == 'Apple_Terminal'
  " Disable termguicolors for macOS Terminal
  set notermguicolors
else
  " Enable termguicolors for other terminals, if supported
  if has('termguicolors')
    set termguicolors
  endif
endif

let g:clearnight_terminal_italics=1
colorscheme clearnight

let g:lightline = {
      \ 'colorscheme': 'clearnight',
      \ 'active': {
      \   'left': [['gitbranch'], ['relativepath']],
      \   'right': [],
      \ },
      \ 'inactive': {
      \   'left': [['filename']],
      \   'right': [],
      \ },
      \ 'component_function': {
      \   'gitbranch': 'FugitiveHead'
      \ }
      \ }

" Commenting out as transparency doesn't
" work very well with Hyper.js
" hi! Normal ctermbg=NONE guibg=NONE
" hi! EndOfBuffer ctermbg=NONE guibg=NONE
" hi! NonText ctermbg=NONE guibg=NONE
" hi! SignColumn ctermbg=NONE guibg=NONE
" hi! NormalNC ctermbg=NONE guibg=NONE
" hi! Normal ctermbg=NONE guibg=NONE
" hi! NonText ctermbg=NONE guibg=NONE
" hi! Folded ctermbg=NONE guibg=NONE
" hi! TabLine ctermbg=NONE guibg=NONE
" hi! TabLineSel ctermbg=NONE guibg=NONE
" hi! TabLineFill ctermbg=NONE guibg=NONE
" hi! StatusLine ctermbg=NONE guibg=NONE
" hi! StatusLineNC ctermbg=NONE guibg=NONE
" hi! VertSplit ctermbg=NONE guibg=NONE
" hi! SignColumn ctermbg=NONE guibg=NONE


" " VimDiff -- this should come form the colorscheme
" hi DiffAdd      guifg=NONE      guibg=#3D5C3F
" hi DiffChange   ctermfg=NONE    ctermbg=NONE
" hi DiffChange   guifg=NONE      guibg=NONE
" hi DiffDelete   guifg=NONE      guibg=#592132
" hi DiffText     guifg=NONE      guibg=#1E4233

" Hide all scrollbars -- this is only useful for macvim
" set go-=l
" set go-=L
" set go-=r
" set go-=R

"Fake a custom left padding for each window.
hi LineNr guibg=bg
set foldcolumn=2
hi foldcolumn guibg=bg


"""""""""""""""""""""""""""""
" Search
"""""""""""""""""""""""""""""

"Highlight all matched terms.
set hlsearch

"Incrementally highlight, as we type.
set incsearch


"""""""""""""""""""""""""""""
" Split Management
"""""""""""""""""""""""""""""

"Use dots to divide vertical splits
:set fillchars+=vert:\ 

"Make splits default to below and the right
set splitbelow
set splitright

"No need to press W
nmap <C-J> <C-W><C-J>
nmap <C-K> <C-W><C-K>
nmap <C-H> <C-W><C-H>
nmap <C-L> <C-W><C-L>

"Go to tab by number
noremap <leader>1 1gt
noremap <leader>2 2gt
noremap <leader>3 3gt
noremap <leader>4 4gt
noremap <leader>5 5gt
noremap <leader>6 6gt
noremap <leader>7 7gt
noremap <leader>8 8gt
noremap <leader>9 9gt
noremap <leader>0 :tablast<cr>

"More natural mapping to split the editor
noremap <leader>s :vsp<cr>
noremap <leader>o :tab sp<cr>
nnoremap <leader>t :tabnew<CR>:Ex . <CR>


"""""""""""""""""""""""""""""
" General Mappings
"""""""""""""""""""""""""""""

"Open .vimrc in new tab
nmap <Leader>ev :tabedit ~/Developer/setup/vim/.vimrc<cr>
nmap <Leader>ep :tabedit ~/Developer/setup/vim/.vim/plugins.vim<cr>

"Remove hlseearch
nmap <Leader><space> :nohlsearch<cr>

"Quickly browse to any tag/symbol in the project.
"Tip: run ctags -R to regenerated the index.
nmap <Leader>f :tag<space>


"""""""""""""""""""""""""""""
" Plugins
"""""""""""""""""""""""""""""

"/
"/ CtrlP
"/
let g:ctrlp_custom_ignore = 'deps\|vendor\|node_modules\|DS_Store\|git\|dist\|build\|__generated__'
let g:ag_prg='ag --ignore "./dist/*"'
let g:ctrlp_match_window = 'top,order:ttb,min:1,max:10,results:30'

nmap <C-p> :CtrlP<cr>
nmap <C-r> :CtrlPBufTag<cr>
nmap <C-e> :CtrlPMRUFiles<cr>
nmap <C-t> <Plug>PeepOpen

"/
"/ GitGutter
"/
noremap  <Leader>g :GitGutterToggle<CR>

"/
"/ Prettier
"/
" let g:prettier#autoformat = 1
" let g:prettier#autoformat_require_pragma = 0
let g:prettier#autoformat_config_present = 1
let g:prettier#autoformat_require_pragma = 0

" Format when leaving insert mode
" let g:prettier#quickfix_enabled = 0
" autocmd TextChanged,InsertLeave *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.svelte,*.yaml,*.html PrettierAsync

"/
"/ COC
"/
let g:coc_global_extensions = ['coc-tsserver', 'coc-eslint']
let g:coc_config_home = '~/.vim/coc/'

"""""""""""""""""""""""""""""
" Vim cursor
"""""""""""""""""""""""""""""

"/
"/ Toggle cursor plugin
"/
let g:togglecursor_force = 'xterm'

"Change cursor to line on Insert mode and block on normal/visual
if exists('$ITERM_PROFILE')
  if exists('$TMUX')
    let &t_SI = "\<Esc>[3 q"
    let &t_EI = "\<Esc>[0 q"
  else
    let &t_SI = "\<Esc>]50;CursorShape=1\x7"
    let &t_EI = "\<Esc>]50;CursorShape=0\x7"
  endif
end


"""""""""""""""""""""""""""""
" Auto commands
"""""""""""""""""""""""""""""

"Automatically source the Vimrc file on save.
augroup autosourcing
  autocmd!
  autocmd BufWritePost .vimrc source %
augroup END

"Load machine-specific configuration
if filereadable(expand("~/.vimrc.local"))
  source ~/.vimrc.local
endif
