(function(n,p,b,c,k,f,a,g,m){b(p).ready(function(){function q(){b(".tribe-events-day-time-slot").length&&(b(".tribe-events-day-time-slot").find(".vevent:last").addClass("tribe-events-last"),b(".tribe-events-day-time-slot:first").find(".vevent:first").removeClass("tribe-events-first"))}function r(d){"change_view"!=tribe_events_bar_action&&(d.preventDefault(),a.ajax_running||(d=b("#tribe-bar-date").val(),a.popping=!1,d.length?(a.date=b("#tribe-bar-date").val(),c.cur_url=h+a.date+"/"):(a.date=c.cur_date,
c.cur_url=h+c.cur_date+"/"),f.pre_ajax(function(){l()})))}function l(){if(!f.invalid_date(a.date)){a.pushcount=0;a.ajax_running=!0;if(!a.popping&&(a.url_params={},a.params={action:"tribe_event_day",eventDate:a.date},a.url_params={action:"tribe_event_day"},a.category&&(a.params.tribe_event_category=a.category),b(k).trigger("tribe_ev_serializeBar"),a.params=b.param(a.params),a.url_params=b.param(a.url_params),b(k).trigger("tribe_ev_collectParams"),a.pushstate=!0,a.do_string=!1,0<a.pushcount||a.filters))a.pushstate=
!1,a.do_string=!0;g.pushstate&&!a.filter_cats?(m&&debug.time("Day View Ajax Timer"),b(k).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_dayView_AjaxStart"),b("#tribe-events-content .tribe-events-loop").tribe_spin(),b.post(TribeCalendar.ajaxurl,a.params,function(d){a.initial_load=!1;f.enable_inputs("#tribe_events_filters_form","input, select");if(d.success){a.ajax_running=!1;c.ajax_response={total_count:parseInt(d.total_count),view:d.view,max_pages:"",tribe_paged:"",timestamp:(new Date).getTime()};
var e="",e=b.isFunction(b.fn.parseHTML)?b.parseHTML(d.html):d.html;b("#tribe-events-content").replaceWith(e);0===d.total_count&&b("#tribe-events-header .tribe-events-sub-nav").empty();b(".tribe-events-promo").next(".tribe-events-promo").remove();a.page_title=b("#tribe-events-header").data("title");p.title=a.page_title;a.do_string&&(c.cur_url=c.cur_url+"?"+a.url_params,history.pushState({tribe_date:a.date,tribe_params:a.params},a.page_title,c.cur_url));a.pushstate&&history.pushState({tribe_date:a.date,
tribe_params:a.params},a.page_title,c.cur_url);q();b(k).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_dayView_AjaxSuccess");m&&debug.timeEnd("Day View Ajax Timer")}})):n.location=a.url_params.length?c.cur_url+"?"+a.url_params:c.cur_url}}var e=b('[class^="tribe-events-nav-"] a'),h="/";e.length&&(h=e.first().attr("href").slice(0,-11));a.filter_cats&&(h=b("#tribe-events-header").data("baseurl").slice(0,-11));a.date=b("#tribe-events-header").data("date");q();g.pushstate&&!g.map_view()&&(e="action=tribe_event_day&eventDate="+
a.date,c.params.length&&(e=e+"&"+c.params),a.category&&(e=e+"&tribe_event_category="+a.category),history.replaceState({tribe_params:e,tribe_url_params:c.params},"",location.href),b(n).on("popstate",function(b){if(b=b.originalEvent.state)a.do_string=!1,a.pushstate=!1,a.popping=!0,a.params=b.tribe_params,f.pre_ajax(function(){l()}),f.set_form(a.params)}));b("#tribe-events").on("click",".tribe-events-nav-previous a, .tribe-events-nav-next a",function(d){d.preventDefault();!a.ajax_running&&!a.updating_picker&&
(d=b(this),a.popping=!1,a.date=d.attr("data-day"),c.cur_url=a.filter_cats?h+a.date+"/":d.attr("href"),"0"!==a.datepicker_format?f.update_picker(tribeDateFormat(a.date,c.datepicker_formats.main[a.datepicker_format])):f.update_picker(a.date),f.pre_ajax(function(){l()}))});f.snap("#tribe-events-bar","#tribe-events","#tribe-events-footer .tribe-events-nav-previous a, #tribe-events-footer .tribe-events-nav-next a");b("form#tribe-bar-form").on("submit",function(a){r(a)});if(g.no_bar()||g.live_ajax()&&g.pushstate)b("#tribe-bar-date").on("changeDate",
function(d){g.reset_on()||(a.popping=!1,a.date="0"!==a.datepicker_format?tribeDateFormat(b(this).bootstrapDatepicker("getDate"),"tribeQuery"):b(this).val(),c.cur_url=h+a.date+"/",f.pre_ajax(function(){l()}))});b(k).on("tribe_ev_runAjax",function(){l()});b(k).on("tribe_ev_updatingRecurrence",function(){c.cur_url=a.filter_cats?h+a.date+"/":b("#tribe-events-header").attr("data-baseurl");a.popping=!1});m&&debug.info("TEC Debug: tribe-events-ajax-day.js successfully loaded");a.view&&m&&debug.timeEnd("Tribe JS Init Timer")})})(window,
document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_debug);
