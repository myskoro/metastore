/**
 *
 * Created 24.10.2015<br />
 * &copy; http://www.oknosoft.ru 2014-2015
 * @license content of this file is covered by Oknosoft Commercial license. Usage without proper license is prohibited. To obtain it contact info@oknosoft.ru
 * @author  Evgeniy Malyarov
 * @module  view_cart
 */

$p.iface.view_cart = function (cell) {

	function OViewCart(){

		// карусель с dataview корзины и страницей оформления заказа
		var t = this,
			prefix = "view_cart",
			changed,
			_carousel = cell.attachCarousel({
				keys:           false,
				touch_scroll:   false,
				offset_left:    0,
				offset_top:     0,
				offset_item:    0
			}),
			_container_cart,
			_content,
			_dataview,
			_cart;

		/**
		 * Возвращает список товаров в корзине
		 * @return {Array}
		 */
		t.list = function () {
			var list = $p.wsql.get_user_param(prefix, "object");
			if(!Array.isArray(list)){
				list = [];
				$p.wsql.set_user_param(prefix, list);
			}
			return list;
		};

		t.bubble = function () {
			var bubble = 0;
			t.list().forEach(function (o) {
				bubble += o.count;
			});
			$p.iface.main.cells("cart").setBubble(bubble);
		};

		/**
		 * Добавляет номенклатуру в корзину. Если уже есть, увеличивает количество
		 * @param nom {CatObj|String} - объект номенклатуры или ссылка
		 */
		t.add = function (nom) {

			if(typeof nom == "string"){
				if($p.is_empty_guid(nom))
					return;
				nom = $p.cat.Номенклатура.get(nom, false, true);
			}
			if(!nom || !nom.name)
				return;

			var list = t.list(),
				finded;

			for(var i in list){
				if(list[i].ref == nom.ref){
					list[i].count++;
					finded = true;
					break;
				}
			}
			if(!finded){
				list.push({ref: nom.ref, count: 1});
			}
			$p.wsql.set_user_param(prefix, list);

			$p.msg.show_msg((nom.НаименованиеПолное || nom.name) + " добавлен в корзину");

			t.requery();

		};

		/**
		 * Удаляет номенклатуру из корзины
		 * @param ref {String} - ссылка номенклатуры
		 */
		t.remove = function (ref) {
			var list = t.list();

			for(var i in list){
				if(list[i].ref == nom.ref){
					list.splice(i, 1);
					$p.wsql.set_user_param(prefix, list);
					return;
				}
			}
		};

		/**
		 * Уменьшает количество номенклатуры в корзине. При уменьшении до 0 - удаляет
		 * @param ref {String} - ссылка номенклатуры
		 */
		t.sub = function (ref) {
			var list = t.list();

			for(var i in list){
				if(list[i].ref == nom.ref){
					if(list[i].count > 1){
						list[i].count--;
						$p.wsql.set_user_param(prefix, list);
						return;
					}
					dhtmlx.confirm({
						type:"confirm",
						title:"Корзина",
						text:"Подтвердите удаление товара",
						ok: "Удалить",
						cancel: "Отмена",
						callback: function(result){
							if(result)
								t.remove(ref);
						}
					});
				}
			}
		};

		/**
		 * Обновляет dataview и содержимое инфопанели
		 */
		t.requery = function () {
			var query = [], nom, dv_obj;

			function do_requery(){
				query = [];
				t.list().forEach(function (o) {
					nom = $p.cat.Номенклатура.get(o.ref, false, true);
					if(nom){
						dv_obj = ({})._mixin(nom._obj);
						dv_obj.count = o.count;
						dv_obj.id = nom.ref;
						dv_obj.Наименование = nom.name;
						dv_obj.Код = nom.id;
						query.push(dv_obj);
					}
				});
				_cart.clearAll();
				_cart.parse(query, "json");

				t.bubble();
			}

			t.list().forEach(function (o) {
				nom = $p.cat.Номенклатура.get(o.ref, false, true);
				if(!nom)
					query.push(o.ref);
			});
			if(query.length){
				var attr = {
					url: "",
					selection: {ref: {in: query}}
				};
				$p.rest.build_select(attr, {
					rest_name: "Module_ИнтеграцияСИнтернетМагазином/СписокНоменклатуры/",
					class_name: "cat.Номенклатура"
				});
				if(dhx4.isIE)
					attr.url = encodeURI(attr.url);

				$p.ajax.get_ex(attr.url, attr)
					.then(function (req) {
						var data = JSON.parse(req.response).data;
						for(var i in data){
							data[i].ref = data[i].id;
							data[i].id = data[i].Код;
							data[i].name = data[i].Наименование;
							data[i]._not_set_loaded = true;
							delete data[i].Код;
							delete data[i].Наименование;
						}
						$p.cat.Номенклатура.load_array(data);
						do_requery();
					});
			}else
				do_requery();
		};

		// элементы создаём с задержкой, чтобы побыстрее показать основное содержимое
		setTimeout(function () {

			// страницы карусели
			_carousel.hideControls();
			_carousel.addCell("cart");
			_carousel.addCell("order");

			_carousel.cells("cart").attachHTMLString(require("cart"));
			_container_cart = _carousel.cells("cart").cell;
			_content = _container_cart.querySelector(".md_column1300");
			_dataview = _container_cart.querySelector("[name=cart_dataview]");

			_cart = $p.iface.list_data_view({
				container: _dataview,
				height: "auto",
				custom_css: ["list"],
				hide_pager: true
			});

			t.bubble();

		}, 50);

		// подписываемся на событие добавления в корзину
		dhx4.attachEvent("order_cart", t.add);
	}

	if(!$p.iface._cart)
		$p.iface._cart = new OViewCart();

	return $p.iface._cart;


};
