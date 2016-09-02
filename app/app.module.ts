import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
	//他のモジュールを使用したい場合に使う。
    imports: [BrowserModule],
    //このモジュールでどのコンポーネントを使用するかを指示する
    declarations: [AppComponent],
    //アプリケーションが起動した時にアングラーが初期化処理すべき
    //特定のルートのコンポーネントを指定する
    bootstrap: [AppComponent]
});

export class AppModule {}
