# Web

## コンパイル・実行方法

準備中

とりあえず動かすなら、
2. `/web` で以下のコマンドを実行
    ```shell
    npm install
    npm run build:proto
    npm start
    ```
3.  http://localhost:8080/ へアクセスしてデバッグコンソールを確認

## 開発環境

- Node v12
    - インストールは [nodenv](https://github.com/nodenv/nodenv) がおすすめ
- TypeScript
- grpc
    - protocコンパイラはnpm経由で入るので自前で入れる必要はない
    - web向けコードを生成する [プラグイン](https://github.com/grpc/grpc-web#code-generator-plugin) が必要
