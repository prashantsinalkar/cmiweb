jQuery( document ).ready(function() {
    /*jQuery For Header - Main Menu Starts Here*/
    jQuery('#header-main-menu ul.menu li:last-child').addClass('last-menu');
        var is_safari = navigator.userAgent.indexOf("Safari") > -1;
        var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
        var is_safari = navigator.userAgent.indexOf("Safari") > -1;
        var is_chrome = navigator.userAgent.indexOf("Chrome") > -1;
        var is_ie = navigator.userAgent.toUpperCase().indexOf("IE") >= 0;
        var trident = !!navigator.userAgent.match(/Trident\/7.0/);
        var net = !!navigator.userAgent.match(/.NET4.0E/);
        var IE11 = trident && net
        var IEold = ( navigator.userAgent.match(/MSIE/i) ? true : false );
        if(IE11 || IEold){
            jQuery('.block-social-media-links-block').attr("style","display:inline-block;");
            jQuery('body').addClass('font-in-ie');
        }
        if (is_safari){
            jQuery('#header-main-menu').attr("style","margin-top:10px;");
            jQuery('.search-open input').addClass('safari-small-screen-search-open');
        }
        if (is_chrome){
            jQuery('#header-main-menu .content>ul').addClass('hamburger-menu-opened');
            jQuery('#header-main-menu .block-colossal-menu ul.main-menu').attr("style","margin: -3px 0 0 0px;");
            jQuery('#header-main-menu ul.menu li a').attr("style","display:inherit;");
            jQuery('.search-open input').addClass('chrome-small-screen-search-open');
            jQuery('body').addClass('font-in-chrome');
        }
    /*jQuery For Header - Main Menu Ends Here*/

    /*jQuery For Header - Search Function Starts Here*/
    jQuery("#header-search.search").click(function() {
        if (jQuery('.search-btn').hasClass('icon-search')) {
            jQuery('.search-open').fadeIn(500);
            jQuery('.search-btn').removeClass('icon-search');
            jQuery('.search-btn').addClass('icon-remove');
            jQuery("#header-main-menu>div.nav-main-collapse").removeClass('in');
        } else {
            jQuery('.search-open').fadeOut(500);
            jQuery('.search-btn').addClass('icon-search');
            jQuery('.search-btn').removeClass('icon-remove');
            jQuery('.search-open').removeClass('hamburger-search-opened');
        }
        return false;
    });
    jQuery("#header-main-menu ul li").hover(function() {
        jQuery('.search-open').fadeOut(500);
        jQuery('.search-btn').addClass('icon-search');
        jQuery('.search-btn').removeClass('icon-remove');
    });
    /*jQuery For Header - Search Ends Here*/

    /*jQuery For Header - Main Menu(Colossal Menu) Starts Here*/
    jQuery('#header-main-menu .block-colossal-menu ul.main-menu > li.menu-level-topic>ul.sub-menu>li.menu-level-topic').parent().addClass('cmi-big-menu');
    jQuery('#header-main-menu .block-colossal-menu ul.main-menu > li.menu-level-topic>ul.sub-menu.cmi-big-menu>li>ul.sub-menu>li.expanded.menu-level-2').addClass('grouped-menu');
    jQuery('#header-main-menu .block-colossal-menu ul.main-menu > li.menu-level-topic>ul.sub-menu.cmi-big-menu>li>ul.sub-menu>li.expanded.menu-level-2.grouped-menu').parent().addClass('grouped-menu-parent');
    jQuery('#header-main-menu .block-colossal-menu ul.main-menu > li.menu-level-topic>ul.sub-menu.cmi-big-menu>li>ul.sub-menu>li.expanded.menu-level-2.grouped-menu').parent().parent().addClass('grouped-menu-parent');
    var maxHeight = -1;
    jQuery('.cmi-big-menu>li.menu-level-topic>ul').each(function() {
         maxHeight = maxHeight > jQuery(this).height() ? maxHeight : jQuery(this).height();
    });
    jQuery('.cmi-big-menu>li.menu-level-topic').each(function() {
         jQuery(this).height(maxHeight);
    });
    /*jQuery For Header - Main Menu(Colossal Menu) Ends Here*/

    /* jQuery For Hamburger Menu Starts Here */
    jQuery('.icon-bars').on('click', function () {
        addActiveClass = jQuery('#header-main-menu>.nav-main-collapse').hasClass("resp-active");
        jQuery('#header-main-menu>.nav-main-collapse').removeClass("resp-active");
        if(!addActiveClass) {
            jQuery('#header-main-menu>.nav-main-collapse').addClass("resp-active");
        }
    });
    jQuery('.menu-item.menu-item--expanded', '.region-header-menu').prepend('<i class="caret-custom"></i>');
    jQuery('.menu-item.menu-item--expanded > .caret-custom').on('click', function () {
        jQuery(this).parent('li').toggleClass('resp-active').siblings().removeClass('resp-active');
    });
    /* jQuery For Hamburger Menu Ends Here */
    /* CSV button top script starts here */
      csvIfData();
      if(jQuery('.cmi-csv-top .view-filters .form-actions input').is('#edit-reset')){
        jQuery('.cmi-csv-top .feed-icons').insertAfter('.cmi-csv-top .view-filters .form-actions input#edit-reset');
      }
      else{
        jQuery('.cmi-csv-top .feed-icons').insertAfter('.cmi-csv-top .view-filters .form-actions input[id *="edit-submit"]');
      }
      jQuery('.cmi-csv-top .feed-icons').attr('title','Download to CSV');
      jQuery(document).ajaxComplete(function(event, xhr, settings) {
        if(settings.url.indexOf("/views/ajax") >= 0){
          if(jQuery('.cmi-csv-top .view-filters .form-actions input').is('#edit-reset')){
            jQuery('.cmi-csv-top .feed-icons').insertAfter('.cmi-csv-top .view-filters .form-actions input#edit-reset');
          }
          else{
            jQuery('.cmi-csv-top .feed-icons').insertAfter('.cmi-csv-top .view-filters .form-actions input[id *="edit-submit"]');
          }
          jQuery('.cmi-csv-top .feed-icons').attr('title','Download to CSV');
          csvIfData();
        }
      });
      jQuery('body').on('click','.cmi-views-search-icon',function(e){
        jQuery(this).parent().find('input').trigger('click');
      });
      function csvIfData(){
        if(jQuery('.cmi-csv-top .view-empty').is(":visible")) {
          jQuery('.cmi-csv-top .feed-icons').hide();
        }
        else if(jQuery('.ccmi-csv-top .view-content').is(":visible")){
          jQuery('.cmi-csv-top .feed-icons').show();
        }
      }
    /* CSV button top script ends here */
    /* jQuery For Hamburger Menu(BIG-MENU) Starts Here */
        jQuery('.expanded', '.region-header-menu').prepend('<i class="caret-custom"></i>');
        jQuery('.expanded > .caret-custom').on('click', function () {
            jQuery(this).parent('li').toggleClass('open').siblings().removeClass('open');
        });
    /* jQuery For Hamburger Menu(BIG-MENU) Ends Here */
    /* jQuery for accordions starts Here */
    jQuery('.cmi-views-accordion-filters .view-filters').addClass('cmi-accordion');
    jQuery('.cmi-views-accordion-filters .view-filters').prepend('<div class="cmi-accordion-title"><i class="caret-custom"></i>Filters</div>');
    jQuery('.cmi-views-accordion-filters .view-filters .views-exposed-form').addClass('cmi-accordion-body');
    jQuery('body').on('click','.cmi-accordion-title', function () {
      addActiveClass = jQuery(this).parents().hasClass("resp-active");
      jQuery(this).parent().removeClass("resp-active");
      jQuery(this).parent().parent().find('.view-header').removeClass('resp-active');
      if(!addActiveClass) {
       jQuery(this).parent().addClass("resp-active").siblings().removeClass('resp-active');
       jQuery(this).parent().parent().find('.view-header').addClass('resp-active');
      }
    });
    /* jQuery for accordions Ends Here */
    /*jQuery For left-navigation Starts Here*/
    jQuery('.menu-item--active-trail', '.region-sidebar-first').parents('.menu-item--expanded').addClass('open');
    jQuery('.menu-item--active-trail', '.region-sidebar-first').parents('.menu-item--expanded').addClass('is-active');
    jQuery('.menu-item--expanded.menu-item--active-trail', '.region-sidebar-first').addClass('open');
    jQuery('.menu-item--expanded', '.region-sidebar-first').prepend('<i class="caret-custom"></i>');
    jQuery('.menu-item--expanded > .caret-custom').on('click', function () {
          jQuery(this).parent('li').toggleClass('open').siblings().removeClass('open');
    });
    /*jQuery for left-Navigation Ends Here*/
    /*jQuery for Template Accordions starts Here*/
    jQuery('.accordions .accordion-title').on('click', function () {
      jQuery(this).parents('.field__item').toggleClass('open').siblings().removeClass('open');
    });
    /*jQuery for Template Accordions Ends Here*/
    /*jQuery For Comments Replies*/
    var count = jQuery(".indented>div.comment").length;
    jQuery(".indented").wrap("<comments-replies></comments-replies>");
    jQuery("comments-replies").prepend("<a class='dropdown-toggle' data-toggle='dropdown' style='display: inline;padding-right:0px !important;'></a>");
    jQuery("comments-replies>a").html("View all Reply");
    jQuery("comments-replies > a:not(.disabled)").on("click", function(e) {
        addActiveClass = jQuery(this).parent().hasClass("resp-active");
        jQuery(this).parent().removeClass("resp-active");
      jQuery("comments-replies>a").html("View all Reply");
        if(!addActiveClass) {
            jQuery(this).parent().addClass("resp-active");
            jQuery("comments-replies.resp-active>a").html("Hide all Reply");
        }
        return;
    });
    /*jQuery For Comments Replies Ends Here*/
    if (jQuery(document).height() > jQuery(window).height()) {
      jQuery('footer#globalfooter').attr("style","position: relative;width: 100%;bottom: 0;");
      var winSize = jQuery(document).height();
      var headerSize = jQuery('#header').height();
      var footerSize = jQuery('footer#globalfooter').height();
      var toolbarsize = jQuery('#toolbar-bar').height()
      if (toolbarsize !== undefined){
      }
      else{
        toolbarsize = 0;
      }
    }

    if (jQuery(document).height() <= jQuery(window).height()){
      jQuery('#footer').attr("style","position: fixed; width: 100%; bottom:70px;");
      jQuery('#page').attr("style","margin-bottom: 50px;");
      jQuery('footer#globalfooter').attr("style","position: fixed; width: 100%; bottom:0;");
      var winSize = jQuery(document).height();
      var headerSize = jQuery('#header').height();
      var footerSize = jQuery('footer#globalfooter').height();
      var toolbarsize = jQuery('#toolbar-bar').height()
      if (toolbarsize !== undefined){
      }
      else{
        toolbarsize = 0;
      }
    }
    /*jQuery For Footer Sitemap*/
    jQuery("#footer-sitemap .content>ul.menu>li.menu-item--expanded").prepend("<a class='dropdown-toggle' data-toggle='dropdown' style='display: inline;padding-right:0px !important;'><b class='caret-custom'></b></a>");
    jQuery("#footer-sitemap li.menu-item--expanded > a:not(.disabled)").on("click", function(e) {
        addActiveClass = jQuery(this).parent().hasClass("resp-active");
        jQuery("#footer-sitemap").find(".resp-active").removeClass("resp-active");
        jQuery("#footer-sitemap").find(".opened").removeClass("opened");
        if(!addActiveClass) {
            jQuery(this).parents("li").addClass("resp-active");
        }
        return;
    });
    /*jQuery for Footer Sitemap Ends Here*/

    /***** List-Grid Display JS Start Here *****/
    jQuery('.cmi-list-grid-display .view-content').addClass('cmi-display-list');
    jQuery('.cmi-list-grid-display .cmi-list-display').parent().addClass('active');
    jQuery('.cmi-list-grid-display .cmi-list-display').on('click', function(e) {
        jQuery('.cmi-list-grid-display .cmi-grid-display').parent().removeClass('active');
        jQuery('.cmi-list-grid-display .cmi-list-display').parent().addClass('active');
        jQuery('.cmi-list-grid-display .view-content').addClass('cmi-display-list');
        jQuery('.cmi-list-grid-display .view-content').removeClass('cmi-display-grid');
    });
    jQuery('.cmi-list-grid-display .cmi-grid-display').on('click', function(e){
        jQuery('.cmi-list-grid-display .cmi-grid-display').parent().addClass('active');
        jQuery('.cmi-list-grid-display .cmi-list-display').parent().removeClass('active');
        jQuery('.cmi-list-grid-display .view-content').addClass('cmi-display-grid');
        jQuery('.cmi-list-grid-display .view-content').removeClass('cmi-display-list');
    });
    /***** List-Grid Display JS Ends Here *****/

    /***** Photo Gallery JS Start Here *****/
    if(jQuery('body div').hasClass('cmi-gallery-photo-images')){
        var titleval = jQuery('.cmi-gallery-photo-images .slick-track .slick__slide:first-child .views-field-field-cmi-grouped-gallery-title div').text();
        var titleValue = titleval+"<a href='javascript:void(0)' class='cmi-back-to-prev-page'>×</a>";
        jQuery('h1.page-title span').html(titleValue);
    }
    /***** Photo Gallery JS Ends Here *****/
    /***** Video Gallery JS Start Here *****/
    jQuery('.cmi-gallery-video-link').on('click', function(){
        var link;
        link = jQuery(this).attr('link');
        link = link.replace("watch?v=", "embed/");
        jQuery('.cmi-gallery-video-play iframe').attr('src', link);
    });
    /***** Video Gallery JS Ends Here *****/
    /***** back to prev page JS Start Here *****/
    jQuery('.cmi-back-to-prev-page').on('click', function(){
        window.history.back();
    });
    /***** back to prev page JS Start Here *****/
    /***** bookmarks JS Start Here *****/
    pollVisibility();
    function pollVisibility() {
      if (jQuery(".block-system-main-block .flag-my-bookmarks").is(":visible")) {
        jQuery('.block-system .flag.flag-my-bookmarks a').prepend("<span class='cmi-black'>☆</span>");
        jQuery(".block-system-main-block .flag-my-bookmarks").prependTo(".region-content");
      }
      else {
        setTimeout(pollVisibility, 100);
      }
    }
    /***** bookmarks JS Start Here *****/
    /****Diversity Procurement JS****/
    var url = window.location.href;
    if(((url.indexOf('cumminsstg') >= 0) && (url.indexOf('diversityprocurement') >= 0) && (url.indexOf('billion-dollar-buzz') >= 0)) || ((url.indexOf('diversityprocurement.cummins.com') >= 0) && (url.indexOf('billion-dollar-buzz') >= 0))){
      jQuery('body').addClass('diversity-procurement');
      jQuery('<div data-quickedit-field-id='+'"node/511/field_cmi_collection/en/full"'+' class='+'"field field--name-field-cmi-collection field--type-entity-reference-revisions field--label-hidden field__items quickedit-field"'+'><div class='+'"field__item"'+'>  <div data-quickedit-entity-id='+'"paragraph/826"'+' class='+'"paragraph paragraph--type--cmi-images paragraph--view-mode--default"'+' data-quickedit-entity-instance-id='+'"0"'+'><div data-quickedit-field-id='+'"paragraph/826/field_cmi_images/en/default"'+' class='+'"field field--name-field-cmi-images field--type-image field--label-hidden field__items"'+'><div class='+'"field__item"'+'>  <img src='+'"/sites/diversityprocurement/files/images_content/BDR_logo.jpg"'+' width='+'"228" '+'height='+'"160"'+' alt='+'""'+' typeof='+'"foaf:Image"'+'></div></div></div></div></div>').prependTo('#main #content-wrapper .region');
    }
    else{
      jQuery('body').removeClass('diversity-procurement');
    }

    /* disable click event */
    jQuery("body").on('click','.cmi-click-disabled,.cmi-click-disabled.form-managed-file input',function(e){
      e.preventDefault();
    });

    /* side header */
    jQuery('body').on('click','.side-header-menu span',function(e){
      addActiveClass = jQuery(this).closest('#header-left').hasClass("expanded");
      jQuery(this).closest('#header-left').removeClass("expanded");
      if(!addActiveClass) {
          jQuery(this).closest('#header-left').addClass("expanded");
      }
      return;
    });
    /* Date picker compatible with newer versions - check */
    navigator.sayswho= (function(){
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  })();

  if(navigator.sayswho > 'Edge 18' || navigator.sayswho > 'Chrome 86' || navigator.sayswho > 'Firefox 53')
  {
    /* date picker */
    jQuery( ".cmi-datepicker" ).datepicker();
    jQuery( ".cmi-datepicker" ).datepicker("option", "dateFormat", 'dd-mm-yy');
  }
});
