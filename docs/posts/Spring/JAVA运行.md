# 运行JAVA

## 编译

```sh
javac HelloWorld.java
```



当你执行 `javac HelloWorld.java` 命令时，生成 **`HelloWorld.class`** 文件（即字节码文件）。

Javac 将人类能读懂的 Java 代码翻译成了 **JVM（Java 虚拟机）** 能读懂的中间指令

## 运行

```sh
java HelloWorld
```

**类加载 (Class Loader)**：JVM 把 `.class` 文件加载到内存中。

**字节码校验**：JVM 会检查代码是否安全、是否符合规范。

**解释与 JIT 编译**：

- **解释执行**：JVM 的解释器逐行读取字节码并翻译成当前操作系统的机器指令。
- **JIT (Just-In-Time) 编译**：这是 Java 快的秘诀。对于经常执行的热点代码，JVM 会直接把它编译成原生机器码并缓存起来，下次直接跑，速度接近 C++。

**硬件执行**：CPU 最终执行这些机器指令，屏幕上打出 `Hello World`。



::: tip **为什么 Java 运行命令不带后缀？**

- 编译时：`javac HelloWorld.java`（针对的是**文件**）
- 运行时：`java HelloWorld`（针对的是**类名**）

这是因为 JVM 在运行时会自动去 `classpath`（也就是你的 `target/classes`）里寻找名为 `HelloWorld` 的类文件。

:::



## 基本概念

| **角色** | **全称**                 | **作用**               | **对应前端概念** |
| -------- | ------------------------ | ---------------------- | ---------------- |
| **JDK**  | Java Development Kit     | 开发工具包（含 Javac） | Node.js + NPM    |
| **JRE**  | Java Runtime Environment | 运行环境（含库文件）   | 浏览器运行环境   |
| **JVM**  | Java Virtual Machine     | 虚拟机（核心引擎）     | V8 引擎          |