function addAvadaSelectStyles(){Number(avadaSelectVars.avada_drop_down)&&(jQuery(".tribe-tickets-order_status-row select").length&&(jQuery(".tribe-tickets-order_status-row select").addClass("avada-select"),jQuery(".tribe-tickets-order_status-row select").wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>'),jQuery(".tribe-ticket-quantity").change(function(){setTimeout(function(){calcSelectArrowDimensions()},1)})),jQuery(".tribe-block__tickets__item__attendee__fields__form select").length&&jQuery(".tribe-block__tickets__item__attendee__fields__form select").wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>'),jQuery(".woocommerce-billing-fields, .woocommerce-shipping-fields").addClass("avada-select"),jQuery(".woocommerce.widget_product_categories select").length&&jQuery(".woocommerce.widget_product_categories select").wrap('<p class="avada-select-parent"></p>').after('<div class="select-arrow">&#xe61f;</div>'),jQuery(".cart-collaterals select#calc_shipping_country, .widget_layered_nav select").wrap('<p class="avada-select-parent"></p>').after('<div class="select-arrow">&#xe61f;</div>'),jQuery(".cart-collaterals select#calc_shipping_state").after('<div class="select-arrow">&#xe61f;</div>'),setTimeout(function(){jQuery("#billing_country_field .chosen-container").length||jQuery("#billing_country_field .select2-container").length||(jQuery("#billing_country_field select.country_select").wrap('<p class="avada-select-parent"></p>').after('<span class="select-arrow">&#xe61f;</span>'),!jQuery("#billing_state_field select.state_select").length||jQuery("#billing_state_field .chosen-container").length||jQuery("#billing_state_field .select2-container").length||jQuery("#billing_state_field").addClass("avada-select-parent").append('<div class="select-arrow">&#xe61f;</div>'),jQuery("#billing_country").change(function(){setTimeout(function(){(jQuery("#billing_state_field input#billing_state").length||jQuery("#billing_state_field").is(":hidden"))&&(jQuery("#billing_state_field .select-arrow").remove(),jQuery("#billing_state_field").removeClass("avada-select-parent")),jQuery("#billing_state_field select.state_select").length&&(jQuery("#billing_state_field").addClass("avada-select-parent"),jQuery("#billing_state_field .select-arrow").length||(jQuery("#billing_state_field").append('<div class="select-arrow">&#xe61f;</div>'),calcSelectArrowDimensions()))},1)})),jQuery("#shipping_country_field .chosen-container").length||jQuery("#shipping_country_field .select2-container").length||(jQuery("#shipping_country_field select.country_select").wrap('<p class="avada-select-parent"></p>').after('<span class="select-arrow">&#xe61f;</span>'),jQuery("#shipping_state_field select.state_select").length&&jQuery("#shipping_state_field").addClass("avada-select-parent").append('<div class="select-arrow">&#xe61f;</div>'),jQuery("#shipping_country").change(function(){setTimeout(function(){(jQuery("#shipping_state_field input#shipping_state").length||jQuery("#shipping_state_field").is(":hidden"))&&(jQuery("#shipping_state_field .select-arrow").remove(),jQuery("#shipping_state_field").removeClass("avada-select-parent")),jQuery("#shipping_state_field select.state_select").length&&(jQuery("#shipping_state_field").addClass("avada-select-parent"),jQuery("#shipping_state_field .select-arrow").length||(jQuery("#shipping_state_field").append('<div class="select-arrow">&#xe61f;</div>'),calcSelectArrowDimensions()))},1)}))},1),jQuery("#calc_shipping_country").change(function(){setTimeout(function(){jQuery(".avada-shipping-calculator-form select#calc_shipping_state").length&&!jQuery(".avada-shipping-calculator-form #calc_shipping_state").parent().find(".select-arrow").length&&jQuery(".avada-shipping-calculator-form select#calc_shipping_state").after('<div class="select-arrow">&#xe61f;</div>'),(jQuery(".avada-shipping-calculator-form input#calc_shipping_state").length||jQuery(".avada-shipping-calculator-form #calc_shipping_state_field .select2").length)&&jQuery(".avada-shipping-calculator-form #calc_shipping_state").parent().children(".select-arrow").remove(),calcSelectArrowDimensions()},1)}),jQuery("table.variations select, .variations-table select, .product-addon select").wrap('<div class="avada-select-parent"></div>'),jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo("table.variations .avada-select-parent, .variations-table .avada-select-parent, .product-addon .avada-select-parent"),jQuery(".wpcf7-select:not([multiple])").wrap('<div class="wpcf7-select-parent"></div>'),jQuery('<div class="select-arrow">&#xe61f;</div>').appendTo(".wpcf7-select-parent"),jQuery("#bbp_stick_topic_select, #bbp_topic_status_select, #bbp_forum_id, #bbp_destination_topic, #wpfc_sermon_sorting select").wrap('<div class="avada-select-parent"></div>').after('<div class="select-arrow">&#xe61f;</div>'),jQuery(".variations_form select").change(function(){jQuery(".product #slider").length&&1<jQuery(".product #slider .slides li").length&&jQuery(".product #slider").flexslider(0)}),calcSelectArrowDimensions())}function removeAvadaSelectStyles(){Number(avadaSelectVars.avada_drop_down)||(jQuery("select").each(function(){var a;jQuery(this).parent().is(".avada-select-parent")&&(a=jQuery(this).closest(".avada-select-parent").attr("class").split(" "),1===a.length?jQuery(this).unwrap():jQuery(this).closest(".avada-select-parent").removeClass("avada-select-parent"))}),jQuery("select").removeClass("avada-select avada-select-parent wpcf7-select-parent"),jQuery(".select-arrow").remove())}jQuery(window).on("load",function(){addAvadaSelectStyles(),jQuery(window).on("DestoryAvadaSelect",removeAvadaSelectStyles),jQuery(window).on("AddAvadaSelect",addAvadaSelectStyles)});