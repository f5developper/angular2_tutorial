/**
* アングラーは使用するモジュールをimport文で定義するけど、定義した中で更に一つを指定する
* 必要がある。
**/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
	//他のモジュールを使用したい場合に使う。
	//rootのモジュールはこのbrowserModuleを読み込んだ方が良いらしい
	//importsに渡しているBrowserModuleは配列で渡します。
	//このアングラーのモジュールはブラウザでも動作するアプリケーションであるということです。
	//要はブラウザでも動くし、バッチとかでも動くよみたいな複数の当て込みができるということっぽい。
    imports: [BrowserModule],
    //このモジュールがどのコンポーネントを使用するかを指示する
    declarations: [AppComponent],
    //アプリケーションが起動した時にアングラーが初期化処理すべき
    //ルートのコンポーネントを指定する
    bootstrap: [AppComponent]
});


export class AppModule {}
