(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TtBp:function(t,e,n){"use strict";n.r(e),n.d(e,"WelcomeModule",function(){return Q});var i=n("72+5"),c=n("tyNb"),o=n("fXoL"),s=n("B+r4"),r=n("mrSG");class a{constructor(){this.isLoged=!1}}var l=n("3Pt+"),d=n("lGQG"),u=n("PScX"),b=n("JZFu");let p=(()=>{class t{constructor(t){this.authService=t,this.product=[]}createProduct(t){return new Promise(e=>Object(r.b)(this,void 0,void 0,function*(){let n=yield this.uploadImage(t.image);if("success"==n.status){let i=this.authService.getUser(),c=yield this.insertProduct(t,n.id,n.url,i.uid);e({status:c.status})}else e({status:n.status})}))}insertProduct(t,e,n,i){t.image=n;let c=+new Date;return new Promise(n=>{b.a.firestore().collection("products").doc(e).set(Object.assign(Object.assign({},t),{fecha:c,id:e,uid:i})).then(()=>{n({status:"success"})}).catch(t=>{n({status:"fail"})})})}uploadImage(t){return new Promise(e=>{let n=b.a.firestore().collection("products").doc().id,i=b.a.storage().ref(`images/products/${n}`);i.putString(t,"data_url").then(t=>Object(r.b)(this,void 0,void 0,function*(){let t=yield i.getDownloadURL();e({status:"success",id:n,url:t})})).catch(t=>{e({status:"fail",id:""})})})}getProducts(){return new Promise(t=>{b.a.firestore().collection("products").orderBy("fecha","desc").get().then(e=>{if(e.empty)t([]);else{let n=e.docs.map(t=>Object.assign(Object.assign({},t.data()),{key:t.id}));t(n)}}).catch(e=>{t([])})})}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(d.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("2Vo4");let h=(()=>{class t{constructor(){this.publishEvent=new m.a([])}getEvent(){return this.publishEvent.asObservable()}setEvent(t,e=[]){console.log("evento ",t),this.publishEvent.next({tipo:t,data:e})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("Q8cG"),z=n("ofXK"),f=n("dEAy"),v=n("ocnv"),C=n("PTRe"),O=n("C2AL"),P=n("FwiY"),T=n("6ekq");function y(t,e){if(1&t){const t=o.Vb();o.Ub(0,"li",27),o.bc("click",function(){return o.qc(t),o.ec().login()}),o.Pb(1,"i",28),o.zc(2," Inicia Sesi\xf3n o Registrate "),o.Tb()}}function S(t,e){if(1&t){const t=o.Vb();o.Ub(0,"li",29),o.bc("click",function(){return o.qc(t),o.ec().logout()}),o.Pb(1,"i",28),o.zc(2," Cerrar Sesi\xf3n "),o.Tb()}}function w(t,e){if(1&t){const t=o.Vb();o.Ub(0,"li",30),o.bc("click",function(){return o.qc(t),o.ec().showModal()}),o.Pb(1,"i",31),o.zc(2," Crear Producto "),o.Tb()}}function k(t,e){if(1&t){const t=o.Vb();o.Ub(0,"li",32),o.bc("click",function(){return o.qc(t),o.ec().loadComponent("cart")}),o.Pb(1,"i",31),o.zc(2," Carrito de Compras "),o.Tb()}}function U(t,e){if(1&t){const t=o.Vb();o.Ub(0,"li",33),o.bc("click",function(){return o.qc(t),o.ec().loadComponent("productList")}),o.Pb(1,"i",31),o.zc(2," Home "),o.Tb()}}function _(t,e){if(1&t&&(o.Ub(0,"div",34),o.Pb(1,"img",35),o.Tb()),2&t){const t=o.ec();o.Bb(1),o.kc("nzSrc",t.imageSelect)}}let L=(()=>{class t{constructor(t,e,n,i,c){this.authService=t,this.fb=e,this.message=n,this.productService=i,this.evtService=c,this.componentLoad=new o.n,this.user=new a,this.isLoadingOne=!1,this.isVisible=!1,this.isOkLoading=!1,this.lastComponentLoaded="",this.imageSelect="",this.user=this.authService.getUser()||{isLoged:!1}}ngOnInit(){this.validateForm=this.fb.group({name:[null,[l.m.required]],sku:[null,[l.m.required]],description:[null,[l.m.required]]})}login(){return Object(r.b)(this,void 0,void 0,function*(){yield this.authService.login(),this.user=this.authService.getUser()})}logout(){this.authService.logout(),this.user.isLoged=!1}showModal(){this.isVisible=!0}handleCancel(){this.isVisible=!1,this.setActiveCommponent()}loadComponent(t){this.lastComponentLoaded=t,this.componentLoad.emit(t)}submitForm(){return Object(r.b)(this,void 0,void 0,function*(){if("VALID"==this.validateForm.status)""==this.imageSelect?this.message.error("Debes subir una imagen"):(console.log(this.validateForm),this.isOkLoading=!0,"success"==(yield this.productService.createProduct(Object.assign(Object.assign({},this.validateForm.value),{image:this.imageSelect}))).status?(this.message.success("Producto creado correctamente"),this.setActiveCommponent(),this.evtService.setEvent("reloadProducts"),this.isVisible=!1):this.message.error("Ocurrio un error al crear tu producto, intenta mas tarde"),this.isOkLoading=!1);else for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity()})}setActiveCommponent(){switch(document.getElementsByClassName("crearP")[0].classList.toggle("ant-menu-item-selected",!1),this.lastComponentLoaded){case"cart":document.getElementsByClassName("cartP")[0].classList.toggle("ant-menu-item-selected",!0);break;default:document.getElementsByClassName("homeP")[0].classList.toggle("ant-menu-item-selected",!0)}}getImage(t){console.log(t);const e=t.target.files[0];console.log(e);const n=new FileReader;n.readAsDataURL(e),n.onload=()=>{this.imageSelect=n.result}}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(d.a),o.Ob(l.c),o.Ob(u.b),o.Ob(p),o.Ob(h))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-header"]],outputs:{componentLoad:"componentLoad"},decls:38,vars:15,consts:[["nz-row","",1,"header"],["nz-col","","nzSpan","24"],["nz-row","",1,"header-container"],["nz-col","","nzSpan","10","nzMd","10","nzXs","24",1,"title"],["nz-col","","nzSpan","14","nzMd","14","nzXs","24",1,"options"],["nz-row",""],["nz-menu","","nzMode","horizontal"],["nz-menu-item","","nzSelected","",3,"click",4,"ngIf"],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","","class","crearP",3,"click",4,"ngIf"],["nz-menu-item","","class","cartP",3,"click",4,"ngIf"],["nz-menu-item","","class","homeP","nzSelected","",3,"click",4,"ngIf"],["nzTitle","Nuevo Producto","nzClassName","modalCreate",3,"nzVisible","nzOkLoading","nzVisibleChange","nzOnCancel","nzOnOk"],["nz-form","",3,"formGroup"],["nzRequired","","nzFor","name",3,"nzSpan"],["nzErrorTip","Completa el nombre del producto!",3,"nzSpan"],["id","note","type","text","nz-input","","formControlName","name"],["nzRequired","","nzFor","sku",3,"nzSpan"],["nzErrorTip","Completa el SKU!",3,"nzSpan"],["id","note","type","text","nz-input","","formControlName","sku"],["nzRequired","","nzFor","description",3,"nzSpan"],["nzErrorTip","Agrega una description para tu producto!",3,"nzSpan"],["id","note","rows","5","type","text","nz-input","","formControlName","description"],["nz-row","",1,"uploadImage"],["for","myfile"],["type","file","id","myfile","name","myfile",3,"change"],["nz-col","","nzSpan","24","class","imgPreview",4,"ngIf"],["nz-menu-item","","nzSelected","",3,"click"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-menu-item","",3,"click"],["nz-menu-item","",1,"crearP",3,"click"],["nz-icon","","nzType","shopping-cart","nzTheme","outline"],["nz-menu-item","",1,"cartP",3,"click"],["nz-menu-item","","nzSelected","",1,"homeP",3,"click"],["nz-col","","nzSpan","24",1,"imgPreview"],["nz-image","","width","200px","height","200px","alt","",3,"nzSrc"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"div",3),o.Ub(4,"p"),o.zc(5,"SHOPPING CART"),o.Tb(),o.Tb(),o.Ub(6,"div",4),o.Ub(7,"div",5),o.Ub(8,"div",1),o.Ub(9,"ul",6),o.xc(10,y,3,0,"li",7),o.xc(11,S,3,0,"li",8),o.xc(12,w,3,0,"li",9),o.xc(13,k,3,0,"li",10),o.xc(14,U,3,0,"li",11),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Ub(15,"nz-modal",12),o.bc("nzVisibleChange",function(t){return e.isVisible=t})("nzOnCancel",function(){return e.handleCancel()})("nzOnOk",function(){return e.submitForm()}),o.Ub(16,"form",13),o.Ub(17,"nz-form-item"),o.Ub(18,"nz-form-label",14),o.zc(19,"Nombre"),o.Tb(),o.Ub(20,"nz-form-control",15),o.Pb(21,"input",16),o.Tb(),o.Tb(),o.Ub(22,"nz-form-item"),o.Ub(23,"nz-form-label",17),o.zc(24,"SKU"),o.Tb(),o.Ub(25,"nz-form-control",18),o.Pb(26,"input",19),o.Tb(),o.Tb(),o.Ub(27,"nz-form-item"),o.Ub(28,"nz-form-label",20),o.zc(29,"Descripcion"),o.Tb(),o.Ub(30,"nz-form-control",21),o.Pb(31,"textarea",22),o.Tb(),o.Tb(),o.Tb(),o.Ub(32,"div",23),o.Ub(33,"div",1),o.Ub(34,"label",24),o.zc(35,"Subir imagen:"),o.Tb(),o.Ub(36,"input",25),o.bc("change",function(t){return e.getImage(t)}),o.Tb(),o.Tb(),o.xc(37,_,2,1,"div",26),o.Tb(),o.Tb()),2&t&&(o.Bb(10),o.jc("ngIf",!e.user.isLoged),o.Bb(1),o.jc("ngIf",e.user.isLoged),o.Bb(1),o.jc("ngIf",e.user.isLoged),o.Bb(1),o.jc("ngIf",e.user.isLoged),o.Bb(1),o.jc("ngIf",e.user.isLoged),o.Bb(1),o.jc("nzVisible",e.isVisible)("nzOkLoading",e.isOkLoading),o.Bb(1),o.jc("formGroup",e.validateForm),o.Bb(2),o.jc("nzSpan",24),o.Bb(2),o.jc("nzSpan",24),o.Bb(3),o.jc("nzSpan",24),o.Bb(2),o.jc("nzSpan",24),o.Bb(3),o.jc("nzSpan",24),o.Bb(2),o.jc("nzSpan",24),o.Bb(7),o.jc("ngIf",""!=e.imageSelect))},directives:[s.c,s.a,g.a,z.k,f.a,l.n,l.j,v.b,l.f,v.c,v.d,v.a,C.a,l.b,l.i,l.e,g.b,O.a,P.a,T.a],styles:["[_nghost-%COMP%]{position:fixed;z-index:1;top:0;background:#fff}.header[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.header-container[_ngcontent-%COMP%]{padding-top:20px}.header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:center}.header-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:700;font-style:italic;font-family:cursive;color:#00008b;letter-spacing:10px}.options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-flow:row-reverse}.imgPreview[_ngcontent-%COMP%]{text-align:center;padding:15px}@media (max-width:600px){.options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{justify-content:center;flex-flow:row-reverse wrap}}"]}),t})(),j=(()=>{class t{constructor(t){this.authService=t}addToCart(t){return new Promise(e=>Object(r.b)(this,void 0,void 0,function*(){let n=this.authService.getUser();if(n){let i=yield this.searchActualCart(n.uid);if("noCart"==i.status){let i=yield this.createCart(n.uid);if("successCreate"==i.status){let n=yield this.insertCart(t.key,i.id);e({status:n.status})}else e({status:i.status})}else{let n=yield this.insertCart(t.key,i.id);e({status:n.status})}}else e({status:"noUser"})}))}searchActualCart(t){return new Promise(e=>{b.a.firestore().collection("carts").doc(t).collection("cartsList").get().then(t=>{if(t.empty)e({status:"noCart"});else{let n=t.docs.filter(t=>"pending"==t.data().status);e(n.length>0?{status:"cartExist",id:n[0].id}:{status:"noCart"})}}).catch(t=>{e({status:"errorGetCart"})})})}createCart(t){return new Promise(e=>{let n=b.a.firestore().collection(`carts/${t}/carts`).doc().id;b.a.firestore().collection("carts").doc(t).collection("cartsList").doc(n).set({id:n,status:"pending"}).then(t=>{e({status:"successCreate",id:n})}).catch(t=>{e({status:"errorCreate",id:n})})})}insertCart(t,e){return new Promise(n=>Object(r.b)(this,void 0,void 0,function*(){let i=+new Date,c=yield this.verifyProductCartExist(t,e);"newData"==c.status?b.a.firestore().collection("products_carts").doc().set({product_id:t,cart_id:e,quantity:1,fecha_carrito:i}).then(t=>{n({status:"success"})}).catch(t=>{n({status:"failInsertCart"})}):b.a.firestore().collection("products_carts").doc(c.id).update({quantity:b.a.firestore.FieldValue.increment(1)}).then(t=>{n({status:"success"})}).catch(t=>{n({status:"failInsertCart"})})}))}verifyProductCartExist(t,e){return new Promise(n=>{b.a.firestore().collection("products_carts").where("cart_id","==",e).where("product_id","==",t).get().then(t=>{if(t.empty)n({status:"newData",id:""});else{let e=t.docs.map(t=>t.id);n({status:"update",id:e[0]})}})})}getUserCart(t=0){return new Promise(e=>Object(r.b)(this,void 0,void 0,function*(){let n=this.authService.getUser(),i=yield this.searchActualCart(n.uid);"noCart"==i.status?e({status:"success",cart:[],lastKey:0}):(0==t&&(t=+new Date),b.a.firestore().collection("products_carts").where("cart_id","==",i.id).orderBy("fecha_carrito","desc").startAt(t).limit(10).get().then(t=>Object(r.b)(this,void 0,void 0,function*(){if(t.empty)e({status:"success",cart:[],lastKey:0});else{let n=t.docs.map(t=>t.data().product_id),i=t.docs.map(t=>({id:t.data().product_id,quantity:t.data().quantity,product_cart_id:t.id})),c=yield this.getProductsCart(n,i),o=+t.docs.slice(-1)[0].data().fecha_carrito;e({status:"success",cart:c,lastKey:o})}})).catch(t=>{e({status:"failure",cart:[],lastKey:0})}))}))}getProductsCart(t,e){return console.log(t),new Promise(n=>{b.a.firestore().collection("products").where("id","in",t).get().then(t=>{if(t.empty)n([]);else{let i=t.docs.map(t=>{let n=e.filter(e=>e.id==t.id);return Object.assign(Object.assign({},t.data()),{key:t.id,quantity:n[0].quantity,product_cart_id:n[0].product_cart_id})});n(i)}}).catch(t=>{n([])})})}updateCartQuantity(t,e){b.a.firestore().collection("products_carts").doc(e).update({quantity:t}).then().catch(t=>{console.log("error update cart",t)})}removeCart(t){return new Promise(e=>{b.a.firestore().collection("products_carts").doc(t).delete().then(()=>{e("success")}).catch(t=>{console.log("error remove cart",t),e("fail")})})}cartCompleted(){return new Promise(t=>Object(r.b)(this,void 0,void 0,function*(){let e=this.authService.getUser();if(e){let n=yield this.searchActualCart(e.uid);if("noCart"!=n.status){let i=yield this.updateCartStatus(e.uid,n.id);t(i)}}else t("noUser")}))}updateCartStatus(t,e){return new Promise(n=>{b.a.firestore().collection("carts").doc(t).collection("cartsList").doc(e).update({status:"completed"}).then(()=>{n("success")}).catch(t=>{console.log(t),n("fail")})})}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(d.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var x=n("OzZK"),I=n("RwU8"),M=n("JA5x");function B(t,e){if(1&t&&o.Pb(0,"img",18),2&t){const t=o.ec().$implicit;o.kc("alt",t.name),o.kc("src",t.image,o.sc)}}function V(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",14),o.bc("click",function(){o.qc(t);const n=e.$implicit;return o.ec().showModal(n)}),o.Ub(1,"nz-card",15),o.Pb(2,"nz-card-meta",16),o.Tb(),o.xc(3,B,1,2,"ng-template",null,17,o.yc),o.Tb()}if(2&t){const t=e.$implicit,n=o.pc(4);o.Bb(1),o.jc("nzCover",n),o.Bb(1),o.kc("nzTitle",t.name),o.kc("nzDescription",t.description)}}let q=(()=>{class t{constructor(t,e,n,i){this.productsService=t,this.cartService=e,this.message=n,this.eventService=i,this.products=[],this.isVisible=!1,this.productState={name:"",image:"",description:"",sku:"",key:""},this.isOkLoading=!1,this.productDetails=this.productState,console.log("suscribirse"),this.service=this.eventService.getEvent().subscribe(t=>{"reloadProducts"==t.tipo&&(this.products=[],this.getProducts())})}ngOnInit(){this.getProducts()}ngOnDestroy(){this.service.unsubscribe()}getProducts(){return Object(r.b)(this,void 0,void 0,function*(){this.products=yield this.productsService.getProducts(),console.log(this.products)})}add(){return Object(r.b)(this,void 0,void 0,function*(){this.isOkLoading=!0;let t=yield this.cartService.addToCart(this.productDetails);console.log("agregar ",t),"success"==t.status?(this.isOkLoading=!1,this.message.success("Producto agregado al carrito"),this.isVisible=!1,this.productDetails=this.productState):"noUser"==t.status?(this.isOkLoading=!1,this.message.error("Inicia sesi\xf3n para agregar el producto")):(this.isOkLoading=!1,this.message.warning("Algo salido mal al agregar el producto, intenta m\xe1s tarde"))})}showModal(t){this.productDetails=t,this.isVisible=!0}handleCancel(){this.isVisible=!1}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(p),o.Ob(j),o.Ob(u.b),o.Ob(h))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-product-list"]],decls:20,vars:6,consts:[["nz-row","",1,"productList"],["nz-col","","nzSpan","6","nzSm","8","nzMd","6","nzXs","24","class","content-list",3,"click",4,"ngFor","ngForOf"],["nzClassName","modalProductDetails",3,"nzVisible","nzVisibleChange","nzOnCancel"],["nz-row",""],["nz-col","","nzSpan","12"],["nz-row","",1,"contentLeft"],["nz-col","","nzSpan","24",1,"contentTitle"],["nz-col","","nzSpan","24",1,"contentImg"],["nz-image","","alt","",3,"nzSrc"],["nz-row","",1,"contentRigth"],["nz-col","","nzSpan","24",1,"contentDescription"],["nz-col","","nzSpan","24",1,"contentButtons"],["nz-button","","nzType","dashed","nzSize","large","nzShape","round",3,"nzLoading","click"],["nz-icon","","nzType","shopping-cart","nzTheme","outline"],["nz-col","","nzSpan","6","nzSm","8","nzMd","6","nzXs","24",1,"content-list",3,"click"],["nzHoverable","",1,"card-container",2,"width","240px",3,"nzCover"],[3,"nzTitle","nzDescription"],["coverTemplate",""],[1,"imgProduct",3,"alt","src"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.xc(1,V,5,3,"div",1),o.Tb(),o.Ub(2,"nz-modal",2),o.bc("nzVisibleChange",function(t){return e.isVisible=t})("nzOnCancel",function(){return e.handleCancel()}),o.Ub(3,"div",3),o.Ub(4,"div",4),o.Ub(5,"div",5),o.Ub(6,"div",6),o.Ub(7,"p"),o.zc(8),o.Tb(),o.Tb(),o.Ub(9,"div",7),o.Pb(10,"img",8),o.Tb(),o.Tb(),o.Tb(),o.Ub(11,"div",4),o.Ub(12,"div",9),o.Ub(13,"div",10),o.Ub(14,"p"),o.zc(15),o.Tb(),o.Tb(),o.Ub(16,"div",11),o.Ub(17,"button",12),o.bc("click",function(){return e.add()}),o.Pb(18,"i",13),o.zc(19,"Agregar al carrito "),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&t&&(o.Bb(1),o.jc("ngForOf",e.products),o.Bb(1),o.jc("nzVisible",e.isVisible),o.Bb(6),o.Ac(e.productDetails.name),o.Bb(2),o.kc("nzSrc",e.productDetails.image),o.Bb(5),o.Ac(e.productDetails.description),o.Bb(2),o.jc("nzLoading",e.isOkLoading))},directives:[s.c,z.j,f.a,s.a,T.a,x.a,I.a,O.a,P.a,M.a,M.b],styles:[""]}),t})();function A(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",4),o.Ub(1,"div",5),o.Ub(2,"div",6),o.Ub(3,"button",7),o.bc("click",function(){return o.qc(t),o.ec().completeOrder()}),o.Pb(4,"i",8),o.zc(5,"Procesar compra"),o.Tb(),o.Tb(),o.Tb(),o.Tb()}if(2&t){const t=o.ec();o.Bb(3),o.jc("nzLoading",t.isOkLoading)}}function D(t,e){1&t&&(o.Ub(0,"div",9),o.Ub(1,"p"),o.zc(2,"No tienes productos en el carrito"),o.Tb(),o.Tb())}function F(t,e){if(1&t&&o.Pb(0,"img",21),2&t){const t=o.ec().$implicit;o.kc("alt",t.name),o.kc("src",t.image,o.sc)}}function E(t,e){if(1&t){const t=o.Vb();o.Ub(0,"div",10),o.Ub(1,"nz-card",11),o.Pb(2,"nz-card-meta",12),o.Ub(3,"div",13),o.Ub(4,"div",14),o.bc("click",function(){o.qc(t);const n=e.index;return o.ec().confirmRemove(n)}),o.Pb(5,"i",15),o.Tb(),o.Ub(6,"div",16),o.bc("click",function(){o.qc(t);const n=e.index;return o.ec().decrement(n)}),o.Pb(7,"i",17),o.Tb(),o.Ub(8,"div",18),o.Ub(9,"span"),o.zc(10),o.Tb(),o.Tb(),o.Ub(11,"div",16),o.bc("click",function(){o.qc(t);const n=e.index;return o.ec().add(n)}),o.Pb(12,"i",19),o.Tb(),o.Tb(),o.Tb(),o.xc(13,F,1,2,"ng-template",null,20,o.yc),o.Tb()}if(2&t){const t=e.$implicit,n=o.pc(14);o.Bb(1),o.jc("nzCover",n),o.Bb(1),o.kc("nzTitle",t.name),o.kc("nzDescription",t.description),o.Bb(3),o.jc("nzTheme","twotone")("nzTwotoneColor","#eb2f96"),o.Bb(2),o.jc("nzTheme","twotone")("nzTwotoneColor","#ecae3c"),o.Bb(3),o.Ac(t.quantity),o.Bb(2),o.jc("nzTheme","twotone")("nzTwotoneColor","#52c41a")}}let K=(()=>{class t{constructor(t,e,n){this.modal=t,this.cartService=e,this.messageService=n,this.products=[],this.lastKey=0,this.isOkLoading=!1}ngOnInit(){this.loadProducts()}loadProducts(){this.isOkLoading=!1,this.lastKey=0,this.products=[],this.getProducts()}getProducts(){return Object(r.b)(this,void 0,void 0,function*(){let t=yield this.cartService.getUserCart(this.lastKey);console.log(t),"success"==t.status&&(this.products=[...this.products,...t.cart],this.lastKey=t.lastKey)})}decrement(t){this.products[t].quantity>1&&(this.products[t].quantity--,this.cartService.updateCartQuantity(this.products[t].quantity,this.products[t].product_cart_id))}add(t){this.products[t].quantity++,this.cartService.updateCartQuantity(this.products[t].quantity,this.products[t].product_cart_id)}confirmRemove(t){this.modal.confirm({nzTitle:"Estas seguro de eliminar el producto del carrito?",nzOkText:"S\xed",nzOkType:"primary",nzOkDanger:!0,nzOnOk:()=>this.remove(t),nzCancelText:"No",nzOnCancel:()=>console.log("Cancel")})}remove(t){return Object(r.b)(this,void 0,void 0,function*(){"fail"==(yield this.cartService.removeCart(this.products[t].product_cart_id))?this.messageService.error("No se pudo eliminar el producto del carrito"):this.loadProducts()})}completeOrder(){return Object(r.b)(this,void 0,void 0,function*(){this.isOkLoading=!0,"success"==(yield this.cartService.cartCompleted())?this.loadProducts():(this.isOkLoading=!1,this.messageService.error("Algo ha ocurrido y no es posible completar tu orden en este momento, intenta m\xe1s tarde"))})}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(f.c),o.Ob(j),o.Ob(u.b))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-carrito"]],decls:4,vars:3,consts:[["nz-row","",1,"productList","cart"],["nz-col","","nzSpan","24","class","button-order",4,"ngIf"],["nz-col","","nzSpan","24","class","no-cart",4,"ngIf"],["nz-col","","nzSpan","6","nzSm","8","nzMd","8","nzXs","24","class","content-list",4,"ngFor","ngForOf"],["nz-col","","nzSpan","24",1,"button-order"],["nz-row","",1,"complete-order"],["nz-col","","nzSpan","6"],["nz-button","","nzType","dashed","nzShape","round","nzSize","large",3,"nzLoading","click"],["nz-icon","","nzType","check-circle","nzTheme","outline"],["nz-col","","nzSpan","24",1,"no-cart"],["nz-col","","nzSpan","6","nzSm","8","nzMd","8","nzXs","24",1,"content-list"],["nzHoverable","",1,"card-container",2,"width","240px",3,"nzCover"],[3,"nzTitle","nzDescription"],["nz-row","",1,"options-cart"],["nz-col","","nzSpan","8",3,"click"],["nz-icon","","nzType","delete",3,"nzTheme","nzTwotoneColor"],["nz-col","","nzSpan","6",3,"click"],["nz-icon","","nzType","minus-circle",3,"nzTheme","nzTwotoneColor"],["nz-col","","nzSpan","2"],["nz-icon","","nzType","plus-circle",3,"nzTheme","nzTwotoneColor"],["coverTemplate",""],[1,"imgProduct",3,"alt","src"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.xc(1,A,6,1,"div",1),o.xc(2,D,3,0,"div",2),o.xc(3,E,15,10,"div",3),o.Tb()),2&t&&(o.Bb(1),o.jc("ngIf",e.products.length>0),o.Bb(1),o.jc("ngIf",0==e.products.length),o.Bb(1),o.jc("ngForOf",e.products))},directives:[s.c,z.k,z.j,s.a,x.a,I.a,O.a,P.a,M.a,M.b],styles:[".options-cart[_ngcontent-%COMP%]{padding:15px}.options-cart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.complete-order[_ngcontent-%COMP%]{flex-flow:row-reverse;padding-bottom:25px}.complete-order[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.complete-order[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .complete-order[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:green!important;border-color:green!important}.no-cart[_ngcontent-%COMP%]{text-align:center;font-size:20px}"]}),t})();function N(t,e){1&t&&o.Pb(0,"app-product-list")}function R(t,e){1&t&&o.Pb(0,"app-carrito")}const X=[{path:"",component:(()=>{class t{constructor(){this.component="productList"}ngOnInit(){}setComponent(t){this.component=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-welcome"]],decls:5,vars:2,consts:[["nz-row",""],["nz-col","","nzSpan","24"],[3,"componentLoad"],[4,"ngIf"]],template:function(t,e){1&t&&(o.Ub(0,"div",0),o.Ub(1,"div",1),o.Ub(2,"app-header",2),o.bc("componentLoad",function(t){return e.setComponent(t)}),o.Tb(),o.xc(3,N,1,0,"app-product-list",3),o.xc(4,R,1,0,"app-carrito",3),o.Tb(),o.Tb()),2&t&&(o.Bb(3),o.jc("ngIf","productList"==e.component),o.Bb(1),o.jc("ngIf","cart"==e.component))},directives:[s.c,s.a,L,z.k,q,K],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]     .upload-list-inline .ant-upload-list-item{float:left;width:200px;margin-right:8px}[_nghost-%COMP%]     .upload-list-inline [class*=-upload-list-rtl] .ant-upload-list-item{float:right}[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-enter{-webkit-animation-name:uploadAnimateInlineIn;animation-name:uploadAnimateInlineIn}[_nghost-%COMP%]     .upload-list-inline .ant-upload-animate-leave{-webkit-animation-name:uploadAnimateInlineOut;animation-name:uploadAnimateInlineOut}"]}),t})()}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({imports:[[c.e.forChild(X)],c.e]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({imports:[[z.b,i.a,l.g,l.l]]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({imports:[[z.b,G,i.a,$]]}),t})()}}]);