---
title: 利用 github action 部署 hexo 到 github page
date: 2024-06-26
categories:
  - 工具｜Tools
---

许久没有写过博客了，这个 hexo 项目也闲置多年，以前写的构建脚本已经无法使用，换成 github action 得到了更好的体验。
思路是在 github action 执行一个 workflow，构建之后推送到个人仓库的相对应的分支。



## 具体实现如下：
### 前提
我是将 hexo 和 hexo 的构建产物放到了同一个仓库，hexo 源文件放在 master 分支，hexo 构建产物放在 gh-pages 分支。

### 写 workflow
workflow 的步骤是：
1. 切换到指定分支
2. 安装 Nodejs
3. 安装依赖
4. 缓存 node_modules
5. 构建
6. 进入构建产物文件夹，推送到指定仓库的指定分支。

在 hexo 项目根目录下创建 .github/workflows/deploy.yml，写入以下文件

```yml
name: Deploy # 部署
 
on: # 触发条件
  push:
    branches:
      - master 
 
  release:
    types:
      - published # 推送新版本号
 


env:
  GIT_USER: zhyat
  GIT_EMAIL: zhyat@outlook.com
  DEPLOY_BRANCH: gh-pages
  REPO_USER: zhyat
  REPO_ADDR: github.com/zhyat/zhyat.github.io.git
 
jobs:
  build:
    runs-on: ubuntu-latest
 
    steps:
    - name: Checkout # Checkout 仓库
      uses: actions/checkout@v4
      with:
        submodules: recursive
        ref: master

    - name: Setup Node # 安装 Node.js
      uses: actions/setup-node@v4
      with:
        node-version: "18.x"
 
    - name: Install Hexo # 安装 Hexo
      run: |
        npm install hexo-cli -g
        
    - name: Cache Modules # 缓存 Node 插件
      uses: actions/cache@v4
      id: cache-modules
      with:
        path: node_modules
        key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}
 
    - name: Install Dependencies # 如果没有缓存或 插件有更新，则安装插件
      if: steps.cache-modules.outputs.cache-hit != 'true'
      run: | # 如果仓库里没有 package-lock.json，上传一下，npm ci 必须要有 package-lock.json
        npm ci
    - name: Generate # 生成
      run: |
        hexo clean
        hexo generate

    - name: Deploy # 部署
      run: |
        git config --global user.name $GIT_USER
        git config --global user.email $GIT_EMAIL
        export TZ='Asia/Shanghai'
        cd public/
        git init
        git add -A
        git commit -m "generate by hexo"
        remote_addr=https://$REPO_USER:${{ secrets.GITHUB_TOKEN }}@$REPO_ADDR
        git remote add origin ${remote_addr}
        git push origin $DEPLOY_BRANCH:master -f
```

### 修改 workflow 中 env 的变量
GIT_USER 提交的用户
GIT_EMAIL 为提交的邮箱
DEPLOY_BRANCH 部署的分支，需要和项目中的 setting->pages->branch 一致
REPO_USER 仓库用户名
REPO_ADDR 仓库地址，如 github.com/zhyat/zhyat.github.io.git
### 创建 Personal access tokens，并填入项目的 Actions secrets and variables
1. 点击头像 -> settings -> Developer Settings -> Personal access tokens - Personal access tokens (classic)
2. 点击 Generate new token (classic) ，设置为永不过期（按需设置）
3. 权限选择 repo 及 repo 下的全部
4. 记录改 token 值，比如 A123...
5. 点击个人博客项目 -> settings -> secrets and variables -> actions
6. 在 Environment secrets 中点击 Manage environment secret，命名后点 Configure environment
7. 然后在 Environment secrets 中点击 Add environment secret
8. name 填入 GITHUB_TOKEN, value 填入步骤 4 记录的 token 值，如 A123...

做完这一步将 hexo 项目 push 一下即可看到效果。



> [!IMPORTANT]
非常需要注意 REPO_ADDR 格式，测试了很多次，只有这个格式是可行的，即复制你 clone 项目使用的 https 协议的地址，但是要去掉 `https://` 。


