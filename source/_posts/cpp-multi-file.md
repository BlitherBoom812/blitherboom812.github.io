---
title: 使用VSCode进行c++/c多文件开发
date: 2022-09-02 20:51:41
tags:
---
## 前言
vscode是个非常优秀的跨平台编辑器，尤其在Linux上更为常用。在vscode上进行c++语言的编译、运行和调试已经有了很多教程，但是使用vscode进行多文件的c++编译、调试的教程却相对难找。以下整理出一个在VScode上搭建C++/C开发环境的全过程。
## 原理
在Linux上进行c++的多文件编译，主要依靠的是GNU的Makefile，使用make命令进行编译。而makefile的可读性差、语法复杂、跨平台性差等问题又催生了可以在多平台运行、语法简洁的CMake，用来自动生成Makefile。

CMake是一个语法简单的跨平台编译工具。只要编写CMakeLists.txt文件，然后使用cmake命令，就可以根据不同的平台生成合适的Makefile文件，再利用make命令即可编译文件。

问题是，Makefile是Linux的编译工具，怎么在Windows平台上使用呢？毫无疑问可以使用WSL，在Linux子系统中进行c++项目开发。

但是在Windows上使用Makefile也不是没有可能，只要安装GNU在Windows上的移植版——mingw就行了。MinGW中的mingw64-make即为Linux中的make。
## 实操
### 前置工作
没下载MinGW就去下一个。用处很多。

然后下载CMake。

Linux: `sudo apt-get install make`

Windows: 上官网下最新版。

### 配置CMakeLists.txt
首先将文件夹设置为项目名称。

然后在项目文件夹下添加CMakeLists.txt:

~~~CMake
# CMakeLists.txt
# cmake最低版本号要求
cmake_minimum_required (VERSION 3.0)
# # 设置指定的C++编译器版本是必须的，如果不设置，或者为OFF，则指定版本不可用时，会使用上一版本。
# set(CMAKE_CXX_STANDARD_REQUIRED ON)
# # 指定为C++03 版本
# set(CMAKE_CXX_STANDARD 03)

# 设置gdb为调试工具
# 构建模式设置为Debug
SET(CMAKE_BUILD_TYPE "Debug")
# 调试时使用gdb
SET(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g2 -ggdb")
# 发布时使用优化(1~3)
SET(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")

# 获取当前文件夹名称
string(REGEX REPLACE ".*/\(.*\)" "\\1" CURDIR ${CMAKE_CURRENT_SOURCE_DIR})
# 设置PROJECT_NAME变量
set(PROJECT_NAME ${CURDIR})
# 设置工程名
project (${PROJECT_NAME})
# 查找./src目录下的所有源文件并存入DIR_SRCS变量
aux_source_directory(src DIR_SRCS)
# 添加一个可编译的目标到工程
add_executable (${PROJECT_NAME} ${DIR_SRCS})
# 从./include中添加静态库, 必须写在add_executable之后
target_include_directories(${PROJECT_NAME} PUBLIC ./include)
message("PROJECT_NAME: ${PROJECT_NAME}")
message("CMAKE_SOURCE_DIR: ${CMAKE_SOURCE_DIR}")
message("PROJECT_SOURCE_DIR: ${PROJECT_SOURCE_DIR}")
~~~

从上面的配置中可以分析出：源文件应该写在`./src`文件夹下，而头文件应该写在`./include`文件夹下。也可以改成其他目录。

代码什么意思在注释中写得很明白了，想要实现更多功能，可以上网查找CMake教程。

### tasks.json配置--CMake构建，Makefile编译
在/.vscode下添加tasks.json:
~~~json
{
    "tasks": [
        {
            "label": "CMake",
            "detail": "运行CMake",
            "type": "shell",
            "command": "CMake",
            "args": [
            "-G \"MinGW Makefiles\"",   //这个参数指定CMake在mingw下使用makefile进行构建，如果去掉则使用默认的vs进行构建
                "..",
            ],
            "options": {
                "cwd": "build"
            },
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "shared",
                "showReuseMessage": true,
                "clear": true
            },
            "problemMatcher": "$msCompile",
            "dependsOn": [
                "MkBuild"
            ]
        },

        {
            "label": "MkBuild",
            "detail": "建立build文件夹",
            "type": "shell",
            "command": "mkdir",
            "args": [
                "-p",
                "build"
            ],
            "windows": {
                "args": [
                    "-Force",
                    "build"
                ]
            },
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "shared",
                "showReuseMessage": true,
                "clear": true
            },
            "problemMatcher": "$msCompile"
        },
        
        {
            "label": "Make",
            "detail": "使用Makefile编译",
            "type": "shell",
            "command": "mingw32-make",
            "args": [
            ],
            "options": {
                "cwd": "build"
            },
            "group": "build",
            "presentation": {
                "reveal": "always",
                "clear": true
            },
            "problemMatcher": "$msCompile",
        },

        {
            "label": "Compile",
            "detail": "仅编译。使用CMake --build编译，根据操作系统选择合适的编译器",
            "type": "shell",
            "command": "CMake --build .",
            "options": {
                "cwd": "build"
            },
            "group": "build",
            "presentation": {
                "reveal": "always",
                "clear": true
            },
            "problemMatcher": "$msCompile",
        },

        {
            "label": "Run",
            "detail": "编译并运行程序",
            "type": "shell",
            "command": "start",
            "args": [
                "./${workspaceFolderBasename}.exe"
            ],
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "focus": false,
                "panel": "shared",
                "showReuseMessage": true,
                "clear": true
            },
            "options": {
                "cwd": "build"
            },
            "windows": {
                "options": {
                    "cwd": "build"  //exe文件所在的目录
                }
            },
            "problemMatcher": "$msCompile",
            "dependsOn": [
                "Compile"
            ]
        },
        {
            "label": "CMake and Run",
            "detail": "创建Makefile, 编译并运行程序",
            "type": "shell",
            "group": "build",
            "dependsOn": [
                "CMake",
                "Run"
            ],
            "dependsOrder": "sequence"
        },
        {
            "label": "CMake and Make",
            "detail": "创建Makefile, 并编译",
            "type": "shell",
            "group": "build",
            "dependsOn": [
                "CMake",
                "Make"
            ],
            "dependsOrder": "sequence"
        },
    ],
    "version": "2.0.0"
}
~~~
这里面定义了一大堆Task，有的是编译并运行，有的是仅编译，有的是仅调用cmake，有的是调用CMake和make，使用时按下`Ctrl + Shift + B`选择合适的task, 看下中文解释就行。

唯一需要解释的一个Task就是MkBuild。MkBuild实际上就是执行`mkdir -p build`。会创建一个叫做build的文件夹。项目的中间文件和最后的可执行文件都会生成在这个文件夹里。后面调试时的文件路径也依赖于build文件夹。

推荐使用CMake and Make进行编译，使用Run进行运行。可以设置task的快捷键，参考网上资料。

注意：按照CMake在原理中的描述，它仅仅是作为生成Makefile文件的工具使用，但是如果运行`cmake . --build`，CMake就可以不依赖Makefile，自己寻找合适的编译器进行编译。Tasks中的Compile就是这样。此时CMake会根据平台自动选择合适的编译器。在Linux的平台上，CMake会选择g++, make等工具。而在Windows平台上， CMake大概率是不知道你安装了MinGW的，它会选择微软著名的编译器Visual Studio进行编译，还会顺带生成一个Visual Studio解决方案方便你调试。不过我既然都生成Visual Studio的C++工程了，直接用Visual Studio开发不是更香吗（笑）。

至此已经可以进行编译。

### launch.json配置--gdb断点调试项目

新建launch.json:

~~~json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Debug", //名称
            "type": "cppdbg", //调试类型，除使用msvc进行调试外，均为该类型
            "request": "launch",
            "program": "${workspaceFolder}/build/${workspaceFolderBasename}", //指定C/C++程序位置
            "args": [], //指定运行参数
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}/build", //指定工作目录
            "preLaunchTask": "CMake and Make", //在调试前会先调用这个task编译构建程序
            "environment": [],
            "externalConsole": true,    
            "osx": { //macOS的特定配置
                // "miDebuggerPath": "/Applications/Xcode.app/Contents/Developer/usr/bin/lldb-mi", //修改使用的lldb-mi，一般不需要修改
                "MIMode": "lldb" //指定使用lldb进行调试
            },
            "linux": { //linux的特定配置
                "MIMode": "gdb", //指定使用gdb调试
                "setupCommands": [
                    {
                        "description": "Enable pretty-printing for gdb",
                        "text": "-enable-pretty-printing",
                        "ignoreFailures": true
                    }
                ]
            },
            "windows": {
                "MIMode": "gdb", //指定使用gdb调试
                "miDebuggerPath": "C:/mingw64/bin/gdb.exe", //指定gdb的路径
                "setupCommands": [
                    {
                        "description": "Enable pretty-printing for gdb",
                        "text": "-enable-pretty-printing",
                        "ignoreFailures": true
                    }
                ]
            }
        }
    ]
}
~~~

默认调试按键是`F5`。打上断点，按下`F5`，系统自动运行CMake and Make编译程序。会有点慢。

注意：在CMakeLists.txt中有三句话：

`SET(CMAKE_BUILD_TYPE "Debug")`

`SET(CMAKE_CXX_FLAGS_DEBUG "$ENV{CXXFLAGS} -O0 -Wall -g2 -ggdb")`

`SET(CMAKE_CXX_FLAGS_RELEASE "$ENV{CXXFLAGS} -O3 -Wall")`

分别是：项目构建方式设置为调试模式（如果是Release则是发布模式）、调试时使用gdb、发布时使用3级优化（有0~3级）。

至此可以进行调试。

## tasks.json内容解释

待更新。

## 更进一步

手动配置文件虽然自由度高，但是还是挺麻烦。VSCode给我自动推荐了一个CMake插件叫做CMake Tools，好像也挺好用的，不知道后续能不能用插件一键生成多文件项目。

Tasks中的功能有点多了。之后尝试简化，方便使用。

gdb调试有个问题，就是长时间挂在一边不动，或者在监视窗口贸然输入一个变量进行监视时就有可能突然停止调试，错误信息闪了一下就消失了。稳定性还不行，原因未知。

这些配置还没有在Linux平台上尝试，可能需要进一步的测试和完善。

## 参考资料

[使用VSCode和CMake构建跨平台的C/C++开发环境](https://www.cnblogs.com/iwiniwin/p/13705456.html)

[cmake gdb 编译调试详解](https://zhuanlan.zhihu.com/p/410219342)