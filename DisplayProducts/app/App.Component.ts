import { Component } from "@angular/core";
import { ProductsComponent } from   './product.component/products.component';
@Component({
    selector: 'my-app',
    template: `<div id="digital-layout">          
                <section id="page-content">
                    <div id="data-container">
                     <of-product></of-product>
                    </div>
                </section>
            </div>
            `,
})
export class AppComponent {
    private show: boolean = false;
    private message: string;    
}


