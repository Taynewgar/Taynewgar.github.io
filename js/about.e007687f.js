(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1df7":function(t,e,s){"use strict";var a=s("e360"),o=s.n(a);o.a},"73a2":function(t,e,s){},e360:function(t,e,s){},f31f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"mangas"},[s("h3",[t._v("Mangás")]),s("p",[t._v("Aqui você encontra toda sua coleção")]),s("b-row",[s("router-view")],1),s("MangaList")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mangaList"},[s("b-row",{attrs:{id:"buttonRow"}},[s("router-link",{staticClass:"buttons",attrs:{tag:"b-button",to:{name:"Home"}}},[t._v(" Voltar ")]),s("b-button",{staticClass:"buttons",on:{click:function(e){return t.showAddForm()}}},[t._v("Adicionar")])],1),s("b-row",{attrs:{id:"formRow"}},[s("MangaForm",{directives:[{name:"show",rawName:"v-show",value:t.addFormShow,expression:"addFormShow"}],on:{added:t.addFeedBack}})],1),s("b-alert",{staticClass:"successAlert",attrs:{fade:"",show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.alertMessage)+" ")]),s("b-table",{attrs:{id:"mangaTable",responsive:"",striped:"",hover:"",items:t.getAllMangas,fields:t.fields},scopedSlots:t._u([{key:"cell(titulo)",fn:function(e){return[s("router-link",{attrs:{to:{name:"Manga",params:{id:e.item.id}}}},[t._v(" "+t._s(e.item.titulo))])]}},{key:"cell(criado)",fn:function(e){return[t._v(" "+t._s(t._f("formatDate")(e.item.criado))+" ")]}},{key:"cell(preco)",fn:function(e){return[t._v(" "+t._s(t._f("formatPrice")(e.item.preco,"R$"))+" ")]}},{key:"cell(favorito)",fn:function(e){return[t._v(" "+t._s(e.item.favorito?"Sim":"Não")+" ")]}},{key:"cell(apagar)",fn:function(e){return[s("b-button",{attrs:{size:"sm",variant:"light"}},[s("b-icon",{attrs:{icon:"trash",variant:"dark","font-scale":"2"},on:{click:function(s){return t.submitDelete(e.item.id)}}})],1)]}}])})],1)},i=[],r=s("5530"),c=s("2f62"),l=s("adb7"),u={name:"MangaList",components:{MangaForm:l["a"]},data:function(){return{fields:["titulo",{key:"criado",label:"Criado"},"subtitulo","autor","editora",{key:"edicao",label:"Edição"},{key:"preco",label:"Preço"},{key:"favorito",label:"Favorito"},{key:"apagar",label:""}],addFormShow:!1,dismissSecs:5,dismissCountDown:0,alertMessage:""}},methods:Object(r["a"])({},Object(c["b"])(["deleteManga"]),{showAddForm:function(){this.addFormShow=!this.addFormShow},submitDelete:function(t){this.deleteManga(t),this.alertMessage="Removido com Sucesso!",this.showAlert()},addFeedBack:function(){this.alertMessage="Adicionado com sucesso!",this.showAlert()},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}),computed:Object(r["a"])({},Object(c["c"])(["getAllMangas"]))},d=u,m=(s("fe8e"),s("2877")),f=Object(m["a"])(d,n,i,!1,null,null,null),b=f.exports,w={name:"mangas",components:{MangaList:b}},h=w,v=(s("1df7"),Object(m["a"])(h,a,o,!1,null,null,null));e["default"]=v.exports},fe8e:function(t,e,s){"use strict";var a=s("73a2"),o=s.n(a);o.a}}]);
//# sourceMappingURL=about.e007687f.js.map