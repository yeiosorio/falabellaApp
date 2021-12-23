"use strict";(self.webpackChunkfalabella_app=self.webpackChunkfalabella_app||[]).push([[168],{168:(P,d,e)=>{e.r(d),e.d(d,{PokemonListModule:()=>i});var l=e(583),p=e(653),a=e(319),o=e(639),m=e(351);const h=function(t){return["/pokemonDetail/",t]};function u(t,r){if(1&t){const n=o.EpF();o.TgZ(0,"a",6),o.NdJ("click",function(){const x=o.CHM(n).$implicit;return o.oxw().shareUrl(x.url)}),o.TgZ(1,"p",7),o._uU(2),o.qZA(),o.qZA()}if(2&t){const n=r.$implicit;o.Q6J("routerLink",o.VKq(2,h,n.name)),o.xp6(2),o.Oqu(n.name)}}const s=[{path:"pokemonDetail/:name",loadChildren:()=>e.e(508).then(e.bind(e,508)).then(t=>t.PokemonDetailModule)},{path:"",component:(()=>{class t{constructor(n){this.pokemonsService=n,this.pokemonsSubscription=new a.w,this.loadMorePokemonsSubscription=new a.w,this.pokemons=[],this.offset=50}ngOnInit(){this.pokemonsList()}pokemonsList(){this.pokemonsSubscription=this.pokemonsService.getPokemons().subscribe(n=>{this.pokemons=n.results})}loadMorePokemons(){this.offset+=50,this.loadMorePokemonsSubscription=this.pokemonsService.loadMorePokemons(this.offset).subscribe(n=>{this.addPokemons(n.results)})}shareUrl(n){this.pokemonsService.shareUrlPokemon(n)}addPokemons(n){const c=document.scrollingElement||document.body;c.scrollTop=c.scrollHeight,n.map(k=>{this.pokemons.push(k)})}ngOnDestroy(){this.pokemonsSubscription.unsubscribe(),this.loadMorePokemonsSubscription.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(m.q))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-pokemon-list"]],decls:12,vars:1,consts:[[1,"container"],[1,"card-container"],[1,"content"],["class","card",3,"routerLink","click",4,"ngFor","ngForOf"],[1,"comeBackButtom"],[1,"newsInfo__modifed",3,"click"],[1,"card",3,"routerLink","click"],[1,"card__title"]],template:function(n,c){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"section"),o.TgZ(2,"article"),o.TgZ(3,"div",1),o.TgZ(4,"div",2),o.TgZ(5,"h2"),o._uU(6,"Falabella PokeApp"),o.qZA(),o.TgZ(7,"div",1),o.YNc(8,u,3,4,"a",3),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"button",5),o.NdJ("click",function(){return c.loadMorePokemons()}),o._uU(11,"o Load More"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(8),o.Q6J("ngForOf",c.pokemons))},directives:[l.sg,p.yS],styles:["p[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]{display:flex;margin:12px auto 32px;padding:0 16px;max-width:1280px;flex-direction:column;align-items:center}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:16px}.card[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:123px;width:259px;padding:16px;transition:all .2s ease-in-out;text-decoration:none;display:flex;justify-content:center;align-items:center}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer}.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:translateY(-3px);box-shadow:0 8px 16px #00000014}.card__title[_ngcontent-%COMP%]{font-size:2.2rem;color:#497bed;font-weight:800;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.card__date[_ngcontent-%COMP%]{margin-bottom:14px}.card__date[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{color:gray}.card__content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.card__description[_ngcontent-%COMP%]{font-size:14px;line-height:1.2;margin-right:6px;height:117px;-webkit-line-clamp:7;-webkit-box-orient:vertical;overflow:hidden;display:-webkit-box;color:#4c4c4c;font-weight:800}.card__img[_ngcontent-%COMP%]{width:auto;height:60px;max-width:160px}button.newsInfo__modifed[_ngcontent-%COMP%]{border:none;padding:11px;background:#aaf4ee;border-radius:6px;box-shadow:0 8px 8px #a5a5a53b;width:132px;background:linear-gradient(to right,#aaf4ee 0%,#38d0c4 100%);cursor:pointer;color:#3a3a3ad9;font-size:16px;font-weight:600;margin:100px}@media screen and (max-width: 767px){.card-container[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]{height:16px;margin:8px 0}}@media screen and (max-width: 646px){.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[p.Bz.forChild(s)],p.Bz]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.ez,g]]}),t})()},351:(P,d,e)=>{e.d(d,{q:()=>f});var l=e(215),p=e(917),a=e(2),o=e(304);var h=e(639),u=e(841);let f=(()=>{class s{constructor(i){this.http=i,this.pokemon=[],this.data=new l.X("https://pokeapi.co/api/v2/pokemon/1/"),this.url$=this.data.asObservable()}getPokemons(){return this.http.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=50").pipe((0,a.U)(t=>t),(0,o.K)(this.handleError("Pokemons")))}getPokemonDetail(i){return this.http.get(i).pipe((0,a.U)(t=>t),(0,o.K)(this.handleError("Pokemons")))}loadMorePokemons(i){return this.http.get(""+("https://pokeapi.co/api/v2/pokemon?limit=50&offset="+i)).pipe((0,a.U)(n=>n),(0,o.K)(this.handleError("Pokemons")))}shareUrlPokemon(i){this.data.next(i)}handleError(i="operation",t){return r=>(console.log(`failed: ${r.message}`),(0,p.of)(t))}}return s.\u0275fac=function(i){return new(i||s)(h.LFG(u.eN))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);