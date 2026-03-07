# zsh

## on-my-zsh

### 安装

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

::: danger

安装`on-my-zsh`会将`~/.zshrc`中的配置文件清空，原本的`.zshrc`配置将保存在`~/.zshrc.pre-oh-my-zsh`

:::

### 配置主题

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

```sh
vim ~/.zshrc
# 修改配置:
ZSH_THEME="powerlevel10k/powerlevel10k"
source ~/.zshrc
```

配置p10k主题：

```sh
p10k configure
```

### 插件安装

- 根据历史命令自动提示。

```sh
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

- 命令补全

```sh
git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions
```

- 语法高亮增强

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

- 配置文件中注册插件

```sh
plugins=(
    git
    # other plugins...
    zsh-autosuggestions
)
```

### 安装字体

- 下载字体

```http
https://github.com/romkatv/dotfiles-public/blob/master/.local/share/fonts/NerdFonts/MesloLGS%20NF%20Regular.ttf
```

- 配置vscode终端字体

```json
terminal.integrated.fontFamily": "MesloLGS NF"
```

