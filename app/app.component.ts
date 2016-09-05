import { Component } from '@angular/core';
//componentはメタデータの連想配列を引数に受ける
//decoratorファンクション
@Component({
	//表示するHTMLをcssセレクタで指定する
	selector: 'my-app',
	//このコンポーネントが何を表示するかを指定する
    template: '<h1>My First Angular 2 App</h1>'
})//!!セミコロンがあるとコンパイルが通らない

/**
* templateにデータバインドするための、プロパティを設けたり、
* 他のコンポーネントを内包するツリー構造のような高度な定義も可能
**/

//このクラスは特になにもないよという記載
//ここにプロパティを設けたりビジネスロジックを記載して拡張することができる
//他の場所で「import { AppComponent } from './app.componet';」
//のように　記載して再利用することも可能
export class AppComponent {}
