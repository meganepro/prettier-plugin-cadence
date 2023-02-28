# Purpose

Flowでは、Flowのリソース志向を実現するための`Cadence`という言語が利用されている。  
この`Cadence`を利用して、スマートコントラクトやそれを実行するためのtransaction、情報取得のためのscriptが書かれている。  
Flow Blockchainにおいては、実行したトランザクションの透明性確保から、トランザクション署名時にユーザーに実行予定のscriptが表示されるようになっている。  
また、Blockchain上でも、実行予定のスマートコントラクトがどのような内容になっているのかがわかるようにスマートコントラクトのコード自体もリードブルな形でアーカイブされている。  
実行されるトランザクションの透明性確保のための上記取り組みは非常に重要だと考えている。  

しかし、現状、`Cadence`用のCode Formatterが用意されておらず、標準的な整形を行うことができない。  
スマートコントラクト（契約書）は一定の書式を保って管理されるべきであり、せっかくの透明性も、これでは意図的なコードの非整形により下げられる懸念も生じる。  

そこで、本プロジェクトでは、`Cadence`の標準フォーマッターの開発を行う。  
抽象構文木の作成には`ANTLR`を利用した。  
また、Formatterとしては複数の開発言語でよく利用されている `Prettier`を使用し、`Prettier`のプラグインとしての開発をすすめる。  
`Prettier`のプラグインを作成することで、`Cadence`コードを整形して表示すること可能になり、また`VSCode`などのプラグイン等で利用することでDeveloper Experienceを向上も期待する。  
本取り組みがFlow Blockchainにおけるユーザー体験・開発者体験を向上させることを革新している。  

現在は、一部の `Cadence` コードにのみ対応している状況であるため、今後随時対応できる表現を拡張していく予定である。  

--- English is as follows

Flow uses a language called `Cadence` to realize the resource orientation of Flow.  
This `Cadence` is used to write smart contracts, transactions to execute them, and scripts to obtain information.  
In Flow Blockchain, the script to be executed is displayed to the user at the time of transaction signing to ensure the transparency of the executed transaction.  
The smart contract code itself is also archived in readable form on the blockchain so that users can see what the contents of the smart contract to be executed are.  
We believe that the above efforts to ensure transparency of transactions to be executed are very important.

However, there is currently no Code Formatter for `Cadence` and standard formatting is not available.  
Smart contracts (contracts) should be managed in a certain format, but this does not ensure transparency due to intentional non-formatting of codes.

Therefore, this project will develop a standard formatter for `Cadence`.  
We used `ANTLR` to create the abstract syntax tree.  
We also use `Prettier` as a Formatter, which is often used in several development languages, and proceed to develop a plugin for `Prettier`.  
By creating a plugin for `Prettier`, it will be possible to format and display `Cadence` code, and we expect to improve the developer experience by using it with plugins such as `VSCode`.  
We are innovating to improve the user and developer experience in the Flow Blockchain.

Currently, only some `Cadence` codes are supported, and we plan to expand the expressions that can be supported from time to time.

_Translated with www.DeepL.com/Translator (free version)_

# Image

![alt](image.drawio.png)

# Related Project

- AST
  - [cadence-ast](https://github.com/meganepro/cadence-ast)
- Prettier Plugin (this repository)
  - [prettier-plugin-cadence](https://github.com/meganepro/prettier-plugin-cadence)
- VSCode Prettier Plugin
  - [prettier-cadence-formatter](https://github.com/meganepro/prettier-cadence-formatter)
- [DEMO PAGE](https://prettier-plugin-tester.vercel.app/)
  - [prettier-plugin-tester](https://github.com/meganepro/prettier-plugin-tester)
  - Currently, only the syntax used in the following contracts can be supported
    - HelloWorld
    - NonFungibleToken

# Run

```sh
npm ci
prettier --plugin . input.cdc
```