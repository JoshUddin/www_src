﻿/*
* Copyright 2014 Seven Spikes Ltd. All rights reserved. (http://www.nop-templates.com)
* http://www.nop-templates.com/t/licensinginfo
*/

var breakPointWidth = 980, megaMenuSkipEventBinding = !1, errorsCounter = 0; window.onerror = function (a, c, b) { null == document.body || 10 < errorsCounter || (a = "URL: " + c + "\u00a7\u00a7MESSAGE: " + a + "\u00a7\u00a7ROW: " + b, c = document.createElement("input"), c.setAttribute("class", "javascriptErrorsElement"), c.setAttribute("type", "hidden"), c.setAttribute("value", a), document.body.appendChild(c), errorsCounter++) }; window.onload = function () { $(".block").each(function () { $.getSpikesViewPort().width <= breakPointWidth && $(this).find(".jcarousel-container-vertical").hide() }) }; function initResponsiveTheme(a, c) { var b; b = null == c || "undefined" == typeof c ? { isEnabled: !1 } : c; void 0 != b.selectors && (null == b.selectors.headerLinksWrapperMobileInsertAfter && (b.selectors.headerLinksWrapperMobileInsertAfter = ".header"), null == b.selectors.headerLinksWrapperDesktopPrependTo && (b.selectors.headerLinksWrapperDesktopPrependTo = ".header")); breakPointWidth = a.themeBreakpoint; var d = !1; "true" == $("#isRtlEnabled").val() && (d = !0); var f = $.getSpikesViewPort().width, g = function (c) { var e = $.getSpikesViewPort().width; b.isEnabled && (e <= breakPointWidth ? $(b.selectors.headerMenu + ", " + b.selectors.filtersContainer).css("height", $(window).height()) : $(b.selectors.headerMenu + ", " + b.selectors.filtersContainer).css("height", ""), c && b.doesDesktopHeaderMenuStick && $(b.selectors.headerMenu).wrap('<div id="headerMenuParent"></div>')); if (c || e > breakPointWidth && f <= breakPointWidth || e <= breakPointWidth && f > breakPointWidth) { var g = ".plus-button"; b.isEnabled && null != b.selectors.sublistButtonOpenerSelector && (g = b.selectors.sublistButtonOpenerSelector); menu_prepareTopMenu(e, g); addMobileClassIfEnabled(a.shouldAddClassForMobile, e, breakPointWidth); toggleSideBlocks(c); a.hasSideBanners && attachDetachSideBanners(e, breakPointWidth); 1 == a.doesBackgroundChange && menu_setMenuBackground(a.bgSelector, a.bgInitialColor, a.red, a.green, a.blue, a.alpha, e); 1 == a.doesPaddingChange && menu_setMenuPaddings(a.paddingSelector, a.paddingValue, 1, e, d); b.isEnabled && (onWidthBreak(b.selectors, b.isSearchBoxDetachable, b.isHeaderLinksWrapperDetachable, e, c), 1 == b.doesSublistHasIndent && initSublistIndent(b.selectors.headerMenu, b.selectors.withSubcategories)) } f = e }; g(!0); $.addSpikesWindowEvent("resize", function () { g(!1) }); $.addSpikesWindowEvent("orientationchange", function () { g(!1) }); if (b.isEnabled) { if (b.hasStickyNav || b.displayGoToTop || b.doesDesktopHeaderMenuStick) null == b.selectors.headerMenuDesktopStickElement && (b.selectors.headerMenuDesktopStickElement = b.selectors.headerMenu), null == b.selectors.headerMenuDesktopStickParentElement && (b.selectors.headerMenuDesktopStickParentElement = "#headerMenuParent"), windowScrollEvents(b.doesDesktopHeaderMenuStick, b.hasStickyNav, b.displayGoToTop, b.selectors.navWrapper, b.selectors.navWrapperParent, b.selectors.headerMenuDesktopStickElement, b.selectors.headerMenuDesktopStickParentElement); addDetachableClickEvents(b.selectors, b.isSearchBoxDetachable, b.isHeaderLinksWrapperDetachable); if (1 == b.doesScrollAfterFiltration) $(document).on("nopAjaxFiltersFiltrationCompleteEvent", function () { $.getSpikesViewPort().width <= breakPointWidth && ($(b.selectors.overlayOffCanvas).triggerHandler("click"), setTimeout(function () { $(b.selectors.overlayOffCanvas).hide() }, 450)) }) } addSideBlocksClickEvents(); "function" == typeof $("body").footable && $(".private-messages-page .data-table ,.order-summary-content .cart, .wishlist-page .cart, .downloadable-products-page .data-table, .return-request-page .data-table, .order-details-page .data-table, .compare-products-table-mobile, .reward-points-history .data-table").footable(); 0 < $(".checkout-page").length && $(document).ajaxSuccess(function () { 0 < $(".order-summary-content .cart").length && $(".order-summary-content .cart").footable() }) } (function (a) { var c = !1, b = navigator.userAgent.toLowerCase(), d = { tablet: [/ipad/i, /playbook/i, /xoom/i, /tablet(?! pc)/i, /froyo/i], mobile: [/iphone/i, /blackberry/i, /android/i, /mytouch/i, /webos/i, /(wap|wml)/i], desktop: [/.*/] }; a(["tablet", "mobile", "desktop"]).each(function () { for (var a = this.toString(), g = 0; len = d[a].length, g < len; g++) if (d[a][g].test(b)) return c = a, !1 }); a.device = { mobile: "mobile" == c ? !0 : !1, tablet: "tablet" == c ? !0 : !1, desktop: "desktop" == c ? !0 : !1, type: c } })(jQuery); $.extend({ getAttrValFromDom: function (a, c, b) { a = $(a).attr(c); if (void 0 == a || "" == a) window.console && window.console.log("'" + c + "' was not found."), a = void 0 != b ? b : ""; return a }, getHiddenValFromDom: function (a, c) { var b = $(a).val(); if (void 0 == b || "" == b) window.console && window.console.log("The 'value' was not found."), b = void 0 != c ? c : ""; return b }, getUrlVars: function () { for (var a = [], c, b = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < b.length; d++) c = b[d].split("="), a.push(c[0]), a[c[0]] = c[1]; return a }, getUrlVar: function (a) { return $.getUrlVars()[a] }, getSpikesViewPort: function () { var a = window, c = "inner"; "innerWidth" in window || (c = "client", a = document.documentElement || document.body); return { width: a[c + "Width"], height: a[c + "Height"] } }, isMobile: function () { return !$.device.desktop }, addSpikesWindowEvent: function (a, c) { window.addEventListener ? window.addEventListener(a, c, !1) : window.attachEvent && window.attachEvent("on" + a, c) } }); function attachDetachSideBanners(a, c) { if (a < c) { var b = $(".leftside-3 .slider-wrapper, .rightside-3 .slider-wrapper, .side-2 .slider-wrapper").detach(); $(".master-wrapper-main").append('<div class="mobile-banners"></div>'); $(".mobile-banners").append(b) } else $(".mobile-banners").detach() } function menu_setMenuBackground(a, c, b, d, f, g, k) { var e = "rgba(", h = []; if (k > breakPointWidth) e = ""; else { try { h = c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(0|1|0\.\d+))?\)$/), delete h[0] } catch (l) { return } e = e.concat(validateColorValue(parseInt(h[1]), b) + ","); e = e.concat(validateColorValue(parseInt(h[2]), d) + ","); e = e.concat(validateColorValue(parseInt(h[3]), f) + ","); null != h[4] && (h[4] = parseFloat(h[4]) + g, c = parseFloat(h[4]), 1 < c ? c = 1 : 0 > c && (c = 0), e = e.concat(c)); e = e.concat(")") } $(a).css("background-color", e); $nextList = $(a).children("li").children("ul"); 0 < $nextList.length && menu_setMenuBackground($nextList, e, b, d, f, g, k) } function validateColorValue(a, c) { var b = parseInt(a) + c; 0 > b ? b = 0 : 255 < b && (b = 255); return b } function menu_setMenuPaddings(a, c, b, d, f) { $selectedLink = $(a).children("a, span"); d <= breakPointWidth ? f ? ($selectedLink.css("padding-left", ""), $selectedLink.css("padding-right", c * b)) : ($selectedLink.css("padding-left", c * b), $selectedLink.css("padding-right", "")) : ($selectedLink.css("padding-left", ""), $selectedLink.css("padding-right", "")); $nextLi = $(a).children("ul").children("li"); 0 < $nextLi.children("a").length && menu_setMenuPaddings($nextLi, parseInt(c), ++b, d, f) } function menu_prepareTopMenu(a, c) { $(".top-menu, .mega-menu, .mega-menu-responsive").css("display", ""); $(".mega-menu-responsive").hide(); 0 == megaMenuSkipEventBinding && ($(".menu-title").click(function () { $(this).hasClass("close") ? $(this).removeClass("close") : $(this).addClass("close"); $(this).siblings(".top-menu, .mega-menu-responsive").slideToggle("fast", function () { $(this).css("overflow", "") }) }), $(c).on("click", function (a) { a.stopPropagation(); $(this).hasClass("close") ? $(this).removeClass("close") : $(this).addClass("close"); a = $(this).siblings(".sublist"); $(a).hasClass("active") ? $(a).removeClass("active") : $(a).addClass("active") }), megaMenuSkipEventBinding = !0); a > breakPointWidth ? ($(".sublist.active").removeClass("active"), $(c + ".close").removeClass("close"), $(".top-menu li, .mega-menu .sublist li").on("mouseenter", function () { $("a", $(this)).first().addClass("hover"); $(".sublist", $(this)).first().addClass("active") }).on("mouseleave", function () { $("a", $(this)).first().removeClass("hover"); $(".sublist", $(this)).first().removeClass("active") })) : ($(".top-menu li, .mega-menu .sublist li").off("mouseenter mouseleave"), $(".sublist.active").removeClass("active"), $(c + ".close").removeClass("close")) } function toggleSideBlocks(a) { $(".block").each(function () { $.getSpikesViewPort().width > breakPointWidth ? a || ($(this).children().eq(1).show(), $(this).children().eq(0).children("a.toggleControl").removeClass("closed"), $(this).find(".jcarousel-container-vertical").show()) : ($(this).children().eq(1).hide(), $(this).children().eq(0).children("a.toggleControl").addClass("closed"), $(this).find(".jcarousel-container-vertical").hide()) }) } function addMobileClassIfEnabled(a, c, b) { a && $.isMobile() && c > b ? $(".product-grid .item-box").addClass("mobile-box") : $(".product-grid .item-box").removeClass("mobile-box") } function addSideBlocksClickEvents() { $(".block .title a").on("click", function (a) { a.stopPropagation() }); $(".block .title").on("click", function () { if ($.getSpikesViewPort().width <= breakPointWidth) { var a = $(this).siblings(); a.slideToggle("slow", function () { a.css("overflow", "") }) } }); $(".nop-jcarousel.vertical-holder .carousel-title").on("click", function () { if ($.getSpikesViewPort().width <= breakPointWidth) { var a = $(this).siblings(); a.slideToggle("slow", function () { a.css("overflow", "") }) } }) } function AntiSpam(a, c) { window.location.href = "mailto:" + a + "@" + c } function initSublistIndent(a, c) { 0 < $(".mega-menu-responsive").length ? sublistIndent(".mega-menu-responsive > li > .sublist", c, 320, 1) : sublistIndent(a + " > ul > li > .sublist", c, 320, 1) } function sublistIndent(a, c, b, d) { var f = $(a); $.getSpikesViewPort().width <= breakPointWidth ? (f.css({ width: b - 7, "z-index": f.css("z-index") + d }), $("> li > " + c, a).css("width", b - 57)) : (f.css({ width: "", "z-index": "" }), $("> li > " + c, a).css("width", "")); a += " > li > .sublist"; 0 < $(a).length && sublistIndent(a, c, b - 7, d + 1) } function windowScrollEvents(a, c, b, d, f, g, k) { c && stickyNav(d, f); a && stickyNav(g, k); $(window).on("scroll", function () { c && stickyNav(d, f); a && stickyNav(g, k); b && (100 < $(window).scrollTop() ? $("#goToTop").show() : $("#goToTop").hide()) }); if (b) $("#goToTop").on("click", function () { $("html,body").animate({ scrollTop: 0 }, 400) }) } function stickyNav(a, c) { var b = $(c), d = $(window).scrollTop(); 0 < d && d >= b.offset().top ? (b.css("height", b.height() + "px"), $(a).addClass("stick")) : (b.css("height", ""), $(a).removeClass("stick")) } function onWidthBreak(a, c, b, d, f) { d <= breakPointWidth ? ($(a.headerMenu).add($(a.sublist)).add($(a.overlayOffCanvas)), $(a.filtersContainer).detach().insertAfter(a.headerMenu), c && $(a.searchBox).detach().insertAfter(a.navWrapperParent), b && $(a.headerLinksWrapper).detach().insertAfter(a.headerLinksWrapperMobileInsertAfter), $(a.shoppingCartLink).off("mouseenter.flyout-cart").off("mouseleave.flyout-cart"), $(".top-menu > li > .sublist").css("display", "")) : ($(a.headerMenu).css({ height: "", top: "" }), $(a.sublist).css({ height: "", top: "" }), $(a.filtersContainer).css("height", ""), f || $(a.filtersContainer).detach().prependTo(".side-2"), c && $(a.searchBox).detach().insertAfter(a.searchBoxBefore), b && $(a.headerLinksWrapper).detach().prependTo(a.headerLinksWrapperDesktopPrependTo), $(a.shoppingCartLink).on("mouseenter.flyout-cart", function (a) { var b = $(this).children(".flyout-cart"); void 0 != b.attr("isSliding") && "false" != b.attr("isSliding") || b.attr("isSliding", "true").slideDown(100, function () { $(this).css("overflow", ""); $(this).attr("isSliding", "false") }); a.preventDefault() }).on("mouseleave.flyout-cart", function (a) { $(this).children(".flyout-cart").attr("isSliding", "true").slideUp(100, function () { $(this).css("overflow", ""); $(this).attr("isSliding", "false") }); a.preventDefault() })) } function addDetachableClickEvents(a, c, b) { c && $(".search-wrap > span").click(function () { $(a.searchBox).addClass("open"); $(a.overlayOffCanvas).show() }); $("#header-links-opener").on("click", function () { $(a.headerLinksWrapper).addClass("open"); $(a.overlayOffCanvas).show() }); $(a.menuTitle).click(function () { $(a.headerMenu).addClass("open").css("height", $(window).height() + "px"); $(a.movedElements).addClass("move-right"); $(a.overlayOffCanvas).show() }); $(a.closeMenu).click(function () { $(a.headerMenu).removeClass("open"); $(a.sublist).removeClass("active"); $(a.movedElements).removeClass("move-right"); $(a.overlayOffCanvas).hide() }); $(a.overlayOffCanvas).click(function () { $(a.sublist).removeClass("active"); $(a.headerMenu).add($(a.filtersContainer)).removeClass("open"); c && $(a.searchBox).removeClass("open"); b && $(a.headerLinksWrapper).removeClass("open"); $(a.movedElements).removeClass("move-right"); $(a.overlayOffCanvas).hide() }); $(".back-button").on("click", function () { $(this).parent(".sublist").removeClass("active") }); $(a.filtersOpener).click(function () { $(a.filtersContainer).toggleClass("open").css("height", $(window).height() + "px"); $(a.movedElements).toggleClass("move-right"); $(a.overlayOffCanvas).show() }); $('<div class="close-filters"><span>close</span></div>').insertBefore(".filtersPanel"); $(".close-filters").click(function () { $(a.filtersContainer).toggleClass("open"); $(a.movedElements).toggleClass("move-right"); $(a.overlayOffCanvas).hide() }) };
