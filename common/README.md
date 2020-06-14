# Common

プラットフォーム非依存なコード群

## コンパイル方法

### バイナリ

1. [Gradle](https://gradle.org/install/) をインストール

2. `/common` で次のコマンドを実行

    ```shell script
    gradle build
    ```

    または以下のコマンドの中から必要なものを実行

    ```shell script
    gradle windowsBinaries  # Windows
    gradle macosBinaries  # macOS
    gradle iosBinaries  # iOS
    gradle wasmBinaries  # Web
    ```
   
    Androidではjvm向け出力をそのまま利用すればいいので特別な操作は不要
   
    また、各ターゲットプラットフォーム毎に
    [必要なビルド環境](https://kotlinlang.org/docs/reference/building-mpp-with-gradle.html#using-kotlinnative-targets)
    が異なるので注意
   
    - Windows
        - Windows環境が必要
    - macOS
        - macOS環境が必要
    - iOS
        - macOS環境が必要
        - iPhone Simulatorへのパスが通っていることが必要
            - `xcrun -sdk iphonesimulator --show-sdk-path` で確認できる
    - Android
        - LinuxまたはmacOS環境が必要
    - Web
        - 全環境でビルド可能

3. `/common/build/bin` 以下にバイナリがビルドされる

### grpcクライアントコード

- 各クライアントコードのディレクトリ内のREADMEにビルド方法が書いてある
- [公式チュートリアル](https://grpc.io/docs/languages/) を読むのもおすすめ

## 開発環境

- Java
    - OpenJDK-14
    - [brewでinstall](https://github.com/AdoptOpenJDK/homebrew-openjdk) して
    [jenv](https://github.com/jenv/jenv) でパスを通すのがおすすめ
        ```shell script
        brew tap AdoptOpenJDK/openjdk
        brew install adoptopenjdk14
      
        # macOSの場合
        jenv add ${HOME}/Library/Java/JavaVirtualMachines/openjdk-14.0.1/Contents/Home/
      
        jenv global 14
        ```
- Gradle
    - [公式ガイド](https://gradle.org/install/) を参照。インストール方法は2種類
        1. sdkmanを使用
            
            ```shell script
            sdk install gradle
            ```
            
        2. Homebrewを使用
            
            ```shell script
            brew install gradle
            ```
- Kotlin
    - Gradleが自動的にコンパイラをダウンロードしてくれるので特殊な環境構築は不要 
- grpc
    - protocol bufferのコンパイラ (`protoc`)が必要
    - macOS環境ならHomebrewがおすすめ
        
        ```shell script
        brew install protobuf
        ```
- エディタ
    - Android Studioを推奨
        - [JetBrains ToolBox](https://www.jetbrains.com/ja-jp/toolbox-app/) をインストールして、
        ツールを通してAndroid Studioをインストールするのがおすすめ
        - ルートディレクトリの `build.gradle` をIDEでimportすればすべてのビルド設定が完了する
