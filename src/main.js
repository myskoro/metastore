(function(e,t,n,r,i){var s={},o=function(t){return e.Function("return "+t)()},u=e.document,a,f=function(t,i){var o={exports:{}};s[t]=1,n[t]=o.exports;if(!i)i=i||e[t];else if(typeof i=="function"){var u=l;r[t]&&r[t].sandbox&&typeof u=="function"&&(u=a),i=i(u,o.exports,o)||o.exports}return i=i,n[t]=i},l=function(e){var t=n[e],r=[e,t];return r&&(e=r[0],t=r[1]),s[e]&&t?t:(typeof t=="string"&&t.indexOf("(function(")===0&&(t=o(t)),f(e,t))},c={exports:{}};for(var h in n)s[h]=0;t(l,c.exports,c)})(this,function(e,t,n){function r(e){var t=document.createElement("div"),n=new dhtmlXGridObject(t);return t.classList.add("multi_checkbox"),e.container.appendChild(t),n.setIconsPath(dhtmlx.image_path),n.setImagePath(dhtmlx.image_path),n.setHeader(","+e.name||e.property.Заголовок||e.property.name),n.setInitWidths("30,*"),n.setColAlign("center,left"),n.setColSorting("na,na"),n.setColTypes("ch,ro"),n.setColumnIds("ch,name"),n.enableAutoWidth(!0,600,100),n.enableAutoHeight(!0,180,!0),n.init(),e.values?e.values.forEach(function(e){n.addRow(e.ref,[0,e.name])}):e.property.type.is_ref&&e.property.type.types&&e.property.type.types.length==1&&$p.md.mgr_by_class_name(e.property.type.types[0]).find_rows({owner:e.property},function(e){n.addRow(e.ref,[0,e.name])}),n}function i(e){function t(){noUiSlider.create(o,{start:[e.start?e.start.min:100,e.start?e.start.max:1e4],step:e.step||100,margin:e.margin||100,connect:!0,behaviour:"tap-drag",range:{min:e.range?e.range.min:200,max:e.range?e.range.max:1e4}}),o.noUiSlider.on("update",function(e,t){t?a.value=e[t]:u.value=e[t],n()})}function n(){var t={};t[e.name]=[parseInt(u.value)||0,parseInt(a.value)||1e5],e.on_change(t)}function r(){o.noUiSlider.set([u.value,a.value]),n()}var i=document.createElement("div"),s=document.createElement("div"),o=document.createElement("div"),u,a;return e.container.appendChild(i),i.appendChild(s),s.style.marginBottom="12px",s.innerHTML=e.synonym+": <input name='min' /> - <input name='max' />",u=s.querySelector("[name=min]"),a=s.querySelector("[name=max]"),u.style.width="33%",a.style.width="33%",i.appendChild(o),t(),u.addEventListener("change",r),a.addEventListener("change",r),o.rebuild=function(n){n.range&&(e.range=n.range),n.start&&(e.start=n.start),o.noUiSlider.destroy(),t()},o}dhtmlXCellObject.prototype.attachPropFilter=function(e,t){function n(e){var t;for(var n in e){if(!f[n])t=!0;else if(typeof e[n]=="object")for(var r in e[n])f[n][r]!=e[n][r]&&(t=!0);f[n]=e[n]}t&&dhx4.callEvent("filter_prop_change",[f])}t||(t={});var s=this,o=s.getWidth?s.getWidth():s.cell.offsetWidth-44,u,a,f={},l,c=$p.job_prm.parse_url(),h=new function(){this.children=[],this.form=s.attachForm([{type:"settings",labelWidth:120,inputWidth:120,offsetLeft:dhtmlx.skin=="dhx_web"?4:8,offsetTop:8},{type:"container",name:"price",label:"",inputWidth:o,inputHeight:50,position:"label-top"},{type:"checkbox",name:"store",label:"Есть на складе",labelAlign:"left",position:"label-right",tooltip:"Скрыть тованы, которых нет в наличии"},{type:"container",name:"_add",label:"Дополнительно",inputWidth:o,inputHeight:"auto",position:"label-top"},{type:"template",name:"form_template_3",label:"Показать"},{type:"template",name:"form_template_1",label:"Больше параметров"}])};return u=h.form.getContainer("_add"),h.__define({mode:{get:function(){},set:function(e){},enumerable:!1},parent:{get:function(){return l?l.ref:""},set:function(t){var s,o={container:h.form.getContainer("price"),on_change:n,name:"Цена",synonym:"Цена",range:{min:0,max:1e6},start:{min:100,max:1e5}};h.children.forEach(function(e){e.destructor&&e.destructor()});while(s=u.lastChild)u.removeChild(s);f={};if(t==$p.blank.guid){a?(o.range.min=0,o.range.max=1e6,o.start.min=100,o.start.max=1e5,a.rebuild(o)):a=new i(o);return}l=e.get(t),o.range.min=l.Цена_Мин>500?l.Цена_Мин-500:0,o.range.max=l.Цена_Макс+500,o.start.min=l.Цена_Мин,o.start.max=l.Цена_Макс,a?a.rebuild(o):a=new i(o);if(l.Производители){var c=l.Производители.split(",");c.length>1&&(s=new r({container:u,property:{},name:"Производители",values:c.map(function(e){return $p.cat.Производители.get(e)})}),h.children.push(s))}l.РеквизитыБыстрогоОтбораНоменклатуры.each(function(e){e.property&&!e.property.empty()&&(s=new r({container:u,property:e.property,name:e.ПредставлениеРеквизита}),h.children.push(s))})},enumerable:!1},hash_route:{value:function(e){e.obj&&h.parent!=e.obj&&(h.parent=e.obj)}}}),$p.eve.hash_route.push(h.hash_route),setTimeout(function(){h.hash_route(c)},50),h},dhtmlXCellObject.prototype.attachOProductCard=function(e){function t(t){var n=$p.cat.Номенклатура.get(t,!1);o.requery_short(n),n.Файлы?o.requery_long(n):(e.url="",$p.ajax.default_attr(e,$p.job_prm.irest_url()),e.url+=e.rest_name+"(guid'"+t+"')",n.name||(e.url+="?full=true"),dhx4.isIE&&(e.url=encodeURI(e.url)),$p.ajax.get_ex(e.url,e).then(function(e){var t=JSON.parse(e.response);t.Файлы=JSON.stringify(t.Файлы),n._mixin(t),o.requery_long(n)}).catch($p.record_log))}function n(e){var t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");e.attachObject(t),t.appendChild(n),t.appendChild(r),this.requery_short=function(t){e.setText(t.НаименованиеПолное||t.name)},this.requery_long=function(e){var t=JSON.parse(e.Файлы);t.length},dhx4.attachEvent("layout_resize",function(e){})}e||(e={});var r=this,i=r.attachToolbar({icons_size:24,icons_path:dhtmlx.image_path+"dhxsidebar"+dhtmlx.skin_suffix(),items:[{type:"text",id:"title",text:"&nbsp;"},{type:"spacer"},{type:"button",id:"back",img:"back_48.png",title:"Вернуться к списку"}]}),s=r.attachAccordion({multi_mode:!1,items:[{id:"main",text:"Text",open:!0,height:600},{id:"description",text:"Описание и характеристики"},{id:"notes",text:"Комментарии, обзоры, вопрос-ответ"},{id:"download",text:"Драйверы и файлы"}],offsets:{top:0,right:4,bottom:0,left:0}}),o=new n(s.cells("main"));$p.device_type!="desktop"&&s.cells("download").hide(),i.attachEvent("onClick",function(e){switch(e){case"back":var t=$p.job_prm.parse_url();$p.iface.set_hash(t.obj,"",t.frm,t.view)}});var u=i.cont.querySelector(".dhx_toolbar_text"),a=i.cont.querySelector(".dhxtoolbar_float_right"),f=new $p.iface.CatalogPath(u,function(e){var t=$p.job_prm.parse_url();return $p.iface.set_hash(this.ref,"",t.frm,t.view),$p.cancel_bubble(e)}),l=[];return u.classList.forEach(function(e){l.push(e)}),l.forEach(function(e){u.classList.remove(e)}),a.style.paddingRight="8px",$p.eve.hash_route.push(function(e){e.view=="catalog"&&$p.is_guid(e.ref)&&!$p.is_empty_guid(e.ref)&&t(e.ref)}),e.ref&&(t(e.ref),delete e.ref),s},dhtmlXCellObject.prototype.attachOProductsView=function(t){t||(t={});var n=this.cell,r=document.createElement("div"),i,s;return this.attachObject(r),function(){var e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("input"),s=document.createElement("i");e.className="column320",r.appendChild(e),$p.device_type!="desktop"&&(e.style.padding="4px 8px"),i=new $p.iface.CatalogPath(e),t.className="search",e.appendChild(t),t.appendChild(n),t.appendChild(s),s.className="icon_search fa fa-search",n.className="search",n.type="search",n.placeholder="Введите артикул или текст",n.title="Найти товар по части наименования, кода или артикула",n.onchange=function(e){dhx4.callEvent("search_text_change",[this.value]),this.blur()}}(),function(){var e=document.createElement("div"),t=document.createElement("div"),n=['по возрастанию цены <i class="fa fa-sort-amount-asc fa-fw"></i>','по убыванию цены <i class="fa fa-sort-amount-desc fa-fw"></i>','по наименованию <i class="fa fa-sort-alpha-asc fa-fw"></i>','по наименованию <i class="fa fa-sort-alpha-desc fa-fw"></i>','по популярности <i class="fa fa-sort-numeric-asc fa-fw"></i>','по популярности <i class="fa fa-sort-numeric-desc fa-fw"></i>'];e.className="column320",r.appendChild(e),e.appendChild(t),$p.iface.ODropdownList({container:t,title:"Сортировать:"+($p.device_type=="desktop"?"<br />":" "),values:n,class_name:"catalog_path",event_name:"sort_change"}),dhx4.attachEvent("sort_change",function(e){$p.record_log(e)})}(),function(){var t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e("templates")(),r.appendChild(o),o.appendChild(i),t.classList.add("wb-tools"),o.style.clear="both",o.style.height=i.style.height=n.offsetHeight+"px",o.style.width=i.style.width=n.offsetWidth+"px",s=dhtmlXCellObject.prototype.attachDynDataView({rest_name:"Module_ИнтеграцияСИнтернетМагазином/СписокНоменклатуры/",class_name:"cat.Номенклатура"},{container:i,outer_container:o,type:"list",custom_css:!0,autowidth:1,pager:{container:t,size:30,template:"{common.prev()}<div class='paging_text'> Страница {common.page()} из #limit#</div>{common.next()}"},fields:["ref","name"],selection:{}}),o.appendChild(t),s.attachEvent("onAfterSelect",function(e){}),s.attachEvent("onItemDblClick",function(e,t,n){var r=$p.job_prm.parse_url(),i={}._mixin(s.get(e));return i.ref=i.id,i.id=i.Код,i.name=i.Наименование,delete i.Код,delete i.Наименование,$p.cat.Номенклатура.create(i).then(function(t){$p.iface.set_hash(r.obj,e,r.frm,r.view)}),!1}),dhx4.attachEvent("layout_resize",function(e){$p.record_log("")})}(),s},$p.iface.CatalogPath=function(e,t){function n(e){if(r!=e.obj){r=e.obj;var n,s=$p.cat.ВидыНоменклатуры.path(r);while(n=i.lastChild)i.removeChild(n);var o=document.createElement("span");s.length&&s[0].presentation?o.innerHTML='<i class="fa fa-folder-open-o"></i> ':o.innerHTML='<i class="fa fa-folder-open-o"></i> Поиск во всех разделах каталога',i.appendChild(o);while(n=s.pop())i.children.length>1&&(o=document.createElement("span"),o.innerHTML=" / ",i.appendChild(o)),o=document.createElement("a"),o.innerHTML=n.presentation,o.ref=n.ref,o.href="#",o.onclick=t||function(e){var t=$p.job_prm.parse_url();return t.obj!=this.ref&&$p.iface.set_hash(this.ref,"",t.frm,t.view),$p.cancel_bubble(e)},i.appendChild(o)}}var r=undefined,i=document.createElement("div");i.className="catalog_path",e.appendChild(i),$p.eve.hash_route.push(n),setTimeout(function(){n($p.job_prm.parse_url())},50)},$p.settings=function(e,t){e.rest=!0,e.irest_enabled=!0,e.local_storage_prefix="webshop_",e.rest_path="/a/ut11/%1/odata/standard.odata/",e.zone=0,e.data_url="data/",e.create_tables="data/create_tables.sql",e.settings_url="settings.html",e.allow_post_message="*",e.use_google_geo=!0,e.request_full_screen=!0,e.guest_name="АлхимовАА",e.guest_pwd="",e.additional_css=["templates/webshop.css","templates/webshop_ie_only.css"],e.skin="dhx_terrace",$p.eve.redirect=!0},$p.iface.oninit=function(){function e(){var e,t,n=[{id:"catalog",text:"Каталог",icon:"search_48.png"},{id:"compare",text:"Сравнение",icon:"compare_48.png"},{id:"cart",text:"Корзина",icon:"shop_cart_48.png"},{id:"orders",text:"Заказы",icon:"projects_48.png"},{id:"content",text:"Контент",icon:"content_48.png"},{id:"user",text:"Профиль",icon:"contacts_48.png"},{id:"settings",text:"Настройки",icon:"settings_48.png"},{id:"about",text:"О программе",icon:"about_48.png"}];document.body.removeChild(document.querySelector("#webshop_splash")),$p.device_type=="desktop"?($p.iface.main=new dhtmlXSideBar({parent:document.body,icons_path:dhtmlx.image_path+"dhxsidebar"+dhtmlx.skin_suffix(),width:110,template:"icons_text",items:n,offsets:{top:0,right:0,bottom:0,left:0}}),e=$p.iface.main.attachToolbar({icons_size:24,icons_path:dhtmlx.image_path+"dhxsidebar"+dhtmlx.skin_suffix(),items:[{type:"text",id:"title",text:"&nbsp;"},{type:"spacer"},{type:"text",id:"right",text:"[Город клиента и мантра магазина]"}]})):$p.iface.main=new dhtmlXSideBar({parent:document.body,icons_path:dhtmlx.image_path+"dhxsidebar"+dhtmlx.skin_suffix(),width:180,header:!0,template:"tiles",autohide:!0,items:n,offsets:{top:0,right:0,bottom:0,left:0}}),$p.iface.main.attachEvent("onSelect",function(n){$p.device_type=="desktop"&&e.setItemText("title",window.dhx4.template("<span style='font-weight: bold; font-size: 14px;'>#text#</span>",{text:this.cells(n).getText().text})),t=$p.job_prm.parse_url(),t.view!=n&&$p.iface.set_hash(t.obj,t.ref,t.frm,n),$p.iface["set_view_"+n]($p.iface.main.cells(n))}),t=$p.job_prm.parse_url(),!t.view||$p.iface.main.getAllItems().indexOf(t.view)==-1?$p.iface.set_hash(t.obj,t.ref,t.frm,"catalog"):setTimeout($p.iface.hash_route,10)}dhx4.attachEvent("geo_current_position",function(e){if($p.iface.main&&$p.iface.main.getAttachedToolbar){var t=$p.iface.main.getAttachedToolbar();t&&(t.setItemText("right",'<i class="fa fa-map-marker"></i> '+(e.city||e.region).replace("г. ","")),t.objPull[t.idPrefix+"right"].obj.style.marginRight="8px")}}),$p.eve.auto_log_in().then(e).catch(function(e){console.log(e)}).then(function(e){$p.iface.sync&&$p.iface.sync.close()})},$p.eve.hash_route.push(function(e){return e.view&&$p.iface.main.getActiveItem()!=e.view&&$p.iface.main.getAllItems().forEach(function(t){t==e.view&&$p.iface.main.cells(t).setActive(!0)}),!1}),$p.iface.set_view_catalog=function(e){function t(){$p.iface._catalog.filter||($p.iface._catalog.filter=$p.iface._catalog.navigation.cells("filter").attachPropFilter($p.cat.ВидыНоменклатуры))}function n(e,t){$p.iface._catalog.product_card||($p.iface._catalog.product_card=e.attachOProductCard({rest_name:"Module_ИнтеграцияСИнтернетМагазином/СвойстваНоменклатуры",class_name:"cat.Номенклатура",ref:t})),e.setActive()}function r(e){$p.iface._catalog.dataview||($p.iface._catalog.dataview=e.attachOProductsView())}function i(e){function t(e){n&&(e.obj||(e.obj=$p.blank.guid),n.selectItem(e.obj,!1,!1))}var n=e.attachDynTree($p.cat.ВидыНоменклатуры,{},function(){$p.cat.ПредопределенныеЭлементы.by_name("ВидНоменклатуры_ПоказыватьВМагазине").Элементы.each(function(e){n.openItem(e.Элемент.ref)})});return n.attachEvent("onSelect",function(e){var t=$p.job_prm.parse_url();t.obj!=e&&$p.iface.set_hash(e,"",t.frm,t.view)}),$p.eve.hash_route.push(t),setTimeout(function(){t($p.job_prm.parse_url())},50),n}function s(){$p.iface._catalog={},$p.device_type=="desktop"?($p.iface._catalog.layout=e.attachLayout({pattern:"2U",cells:[{id:"a",text:"Каталог",width:300,header:!1},{id:"b",text:"Товары",header:!1}],offsets:{top:0,right:0,bottom:0,left:0}}),$p.iface._catalog.layout.attachEvent("onResizeFinish",function(){dhx4.callEvent("layout_resize",[this])}),$p.iface._catalog.layout.attachEvent("onPanelResizeFinish",function(){dhx4.callEvent("layout_resize",[this])}),$p.iface._catalog.navigation=$p.iface._catalog.layout.cells("a").attachTabbar({arrows_mode:"auto",tabs:[{id:"tree",text:'<i class="fa fa-sitemap"></i> Разделы',active:!0},{id:"filter",text:'<i class="fa fa-filter"></i> Фильтр'}]}),$p.iface._catalog.carousel=$p.iface._catalog.layout.cells("b").attachCarousel({keys:!1,touch_scroll:!1,offset_left:0,offset_top:0,offset_item:0}),setTimeout(function(){r($p.iface._catalog.carousel.cells("dataview"))})):($p.iface._catalog.navigation=e.attachTabbar({arrows_mode:"auto",tabs:[{id:"tree",text:'<i class="fa fa-sitemap"></i> Разделы',active:!0},{id:"filter",text:'<i class="fa fa-filter"></i> Фильтр'},{id:"goods",text:'<i class="fa fa-search"></i> Товары'}]}),$p.iface._catalog.carousel=$p.iface._catalog.navigation.cells("goods").attachCarousel({keys:!1,touch_scroll:!1,offset_left:0,offset_top:0,offset_item:0})),$p.iface._catalog.carousel.hideControls(),$p.iface._catalog.carousel.addCell("dataview"),$p.iface._catalog.carousel.addCell("goods"),$p.iface._catalog.navigation.attachEvent("onSelect",function(e){return e=="filter"?t():e=="goods"&&r($p.iface._catalog.carousel.cells("dataview")),!0}),$p.iface._catalog.tree=i($p.iface._catalog.navigation.cells("tree")),$p.eve.hash_route.push(function(e){e.view=="catalog"&&($p.is_guid(e.ref)&&!$p.is_empty_guid(e.ref)?n($p.iface._catalog.carousel.cells("goods"),e.ref):$p.iface._catalog.carousel.cells("dataview").setActive())})}$p.iface._catalog||s()},$p.iface.set_view_cart=function(e){if($p.iface._cart)return;$p.iface._cart={},e.attachHTMLString("<div>Корзина пуста</div>")},$p.iface.set_view_compare=function(e){if($p.iface._compare)return;$p.iface._compare={grid:e.attachGrid()}},$p.iface.set_view_orders=function(e){if($p.iface._orders)return;$p.iface._orders={},e.attachHTMLString("<div>Нет заказов</div>")},$p.iface.set_view_settings=function(e){if($p.iface._settings)return;$p.iface._settings={form:e.attachForm([{type:"settings",labelWidth:80,offsetLeft:8,position:"label-left"},{type:"label",labelWidth:380,label:"Тип устройства",className:"label_options"},{type:"block",name:"form_block_2",list:[{type:"settings",labelAlign:"left",position:"label-right"},{type:"radio",name:"device_type",label:"Компьютер",value:"desktop"},{type:"newcolumn"},{type:"radio",name:"device_type",label:"Телефон",value:"phone"},{type:"newcolumn"},{type:"radio",name:"device_type",label:"Планшет",value:"tablet"}]},{type:"template",label:"",value:"",note:{text:"Класс устройства определяется автоматически, но пользователь может задать его явно",width:380}},{type:"label",labelWidth:380,label:"Значение разделителя публикации 1С fresh",className:"label_options"},{type:"input",inputWidth:200,name:"zone",label:"Зона",numberFormat:["0","",""],validate:"NotEmpty,ValidInteger"},{type:"template",label:"",value:"",note:{text:"Для неразделенной публикации, зона = 0",width:380}},{type:"label",labelWidth:380,label:"Вариант оформления интерфейса",className:"label_options"},{type:"combo",inputWidth:200,name:"skin",label:"Скин",options:[{value:"dhx_web",text:"Web"},{value:"dhx_terrace",text:"Terrace"}]},{type:"template",label:"",value:"",note:{text:"Дополнительные свойства оформления можно задать в css",width:380}}])},$p.iface._settings.form.checkItem("device_type",$p.wsql.get_user_param("device_type")),["zone","skin"].forEach(function(e){$p.iface._settings.form.setItemValue(e,$p.wsql.get_user_param(e))}),$p.iface._settings.form.attachEvent("onChange",function(e,t,n){$p.wsql.set_user_param(e,t)})},$p.iface.set_view_user=function(e){if($p.iface._user)return;$p.iface._user={},e.attachHTMLString("<div>Пользователь не авторизован</div>")},$p.iface.set_view_content=function(e){if($p.iface._content)return;$p.iface._content={},e.attachHTMLString("<div>Статьи пока не написаны</div>")},$p.iface.set_view_about=function(t){if($p.iface._about)return;$p.iface._about={},t.attachHTMLString(e("about")),t.cell.querySelector(".dhx_cell_cont_sidebar").style.overflow="auto"}},{templates:function(e,t,n){n.exports=function(){function e(e){return e.ФайлКартинки!=$p.blank.guid?"background-image:url(templates/product_pics/"+e.ФайлКартинки+".png);":""}function t(e){return e.Производитель!=$p.blank.guid?$p.cat.Производители.get(e.Производитель).presentation:""}function n(e){return(e.Цена_Мин==e.Цена_Макс?e.Цена_Мин.toFixed(0):"от "+e.Цена_Мин.toFixed(0)+" до "+e.Цена_Макс.toFixed(0))+' <i class="fa fa-rub" style="font-size: 18px;"></i>'}dhtmlx.Type.add(dhtmlXDataView,{name:"list",template:"http->templates/dataview_list.html",template_loading:"Загрузка данных...",height:100,width:900,margin:2,padding:0,border:1,image:e,manufacturer:t,price:n}),dhtmlx.Type.add(dhtmlXDataView,{name:"large",template:"http->templates/dataview_large.html",height:210,width:380,margin:2,padding:2,border:1,image:e,manufacturer:t,price:n}),dhtmlx.Type.add(dhtmlXDataView,{name:"small",template:"http->templates/dataview_small.html",height:180,width:220,margin:2,padding:2,border:1,image:e,manufacturer:t,price:n})}},about:'<div class="column1300">\r\n    <h1><i class="fa fa-info-circle"></i> Интернет-магазин MetaStore v0.0.3</h1>\r\n    <p>Метамагазин - это веб-приложение с открытым исходным кодом, разработанное компанией <a href="http://www.oknosoft.ru/" target="_blank">Окнософт</a> на базе фреймворка <a href="http://www.oknosoft.ru/metadata/" target="_blank">Metadata.js</a> и распространяемое под <a href="http://www.oknosoft.ru/programmi-oknosoft/metadata.html" target="_blank">коммерческой лицензией Окнософт</a>.<br />\r\n        Исходный код и документация доступны на <a href="https://github.com/oknosoft/metastore" target="_blank">GitHub <i class="fa fa-github-alt"></i></a>.<br />\r\n        Приложение является веб-интерфейсом к типовым конфигурациям 1С (Управление торговлей 11.2, Комплексная автоматизация 2.0, ERP Управление предприятием 2.1) и реализует функциональность интернет-магазина с использованием данных информационной базы 1С\r\n    </p>\r\n    <p>Приложение использует следующие библиотеки и инструменты:</p>\r\n    <h3>Управление данными в памяти браузера</h3>\r\n    <ul>\r\n        <li><a href="https://github.com/agershun/alasql" target="_blank">alaSQL</a><span class="muted-color">, база данных SQL для браузера и Node.js с поддержкой как традиционных реляционных таблиц, так и вложенных JSON данных (NoSQL)</span></li>\r\n        <li><a href="https://github.com/metatribal/xmlToJSON" target="_blank">xmlToJSON</a><span class="muted-color">, простой javascript модуль для преобразования XML в JSON</span></li>\r\n        <li><a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx</a><span class="muted-color">, библиотека для чтения и записи XLSX / XLSM / XLSB / XLS / ODS в браузере</span></li>\r\n    </ul>\r\n    <h3>UI библиотеки и компоненты интерфейса</h3>\r\n    <ul>\r\n        <li><a href="http://dhtmlx.com/" target="_blank">dhtmlx</a><span class="muted-color">, кроссбраузерная библиотека javascript для построения современных Веб и Мобильных приложений</span></li>\r\n        <li><a href="https://github.com/leongersen/noUiSlider" target="_blank">noUiSlider</a><span class="muted-color">, легковесный javascript компонент регулирования пары (min-max) значений </span></li>\r\n        <li><a href="https://github.com/eligrey/FileSaver.js" target="_blank">filesaver.js</a><span class="muted-color">, HTML5 реализация метода saveAs</span></li>\r\n    </ul>\r\n    <h3>Графика</h3>\r\n    <ul>\r\n        <li><a href="https://fortawesome.github.io/Font-Awesome/" target="_blank">fontawesome</a><span class="muted-color">, набор иконок и стилей CSS</span></li>\r\n    </ul>\r\n    <h2>License</h2>\r\n    <p>The app itself and all included components which are not in public domain are licensed under MIT license:</p>\r\n    <p></p>\r\n    <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated\r\n        documentation files (the "Software"), to deal in the Software without restriction, including without limitation\r\n        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,\r\n        and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>\r\n    <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>\r\n    <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO\r\n        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS\r\n        OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,\r\n        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\r\n</div>'},{},{})