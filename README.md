# Cross Platform Application Example

様々なプラットフォームで動くアプリケーションの設計に関する実験的なリポジトリ

## 機能

シンプルなTODOアプリ

- ユーザー認証
- タスクの作成/表示/削除/更新
- サーバーを介した同期

## ソフトウェア構成

以下の要素からなる

- View
    - GUI周り
- Controller
    - ビジネスロジックを受け持つ層
- Storage
    - Controllerがデータにアクセスするためのインターフェース層
    - Network Client
        - ネットワーク通信周りを担当するコンポーネント
    - Cache 
        - ローカルキャッシュを管理する層

## 実装方針

- RPC (モデルの定義およびAPIインターフェース): **grpc**が最適
    - [grpc](https://grpc.io/docs/languages/)
        - 対象のすべてのプラットフォームで利用可能
        - swiftは対象外だがObjective-Cをサポートしている
        - Googleが統一して作っているため、言語間でのインターフェースの差異が少ない
    - HTTP + graphql
        - 型安全でない
        - コード生成が対応していないプラットフォームがほとんど
    - HTTP + openAPI
        - [型安全](https://github.com/OpenAPITools/openapi-generator)
        - Swiftもサポートしているが質は良くない
- 実装の共通化
    - ControllerやStorageは実装が共通化できそう
    - 言語: **Kotlin** が最適
        - Kotlin
            - [対象のすべてのプラットフォームをサポート](https://kotlinlang.org/docs/reference/native-overview.html)
            - Androidはネイティブ対応しており親和性高い
            - 言語仕様の癖が強くない
        - Rust
            - [対象のすべてのプラットフォームをサポート](https://forge.rust-lang.org/release/platform-support.html)
            - 言語仕様の癖が強い
