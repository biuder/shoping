(function () {
    var ScreenPage = function () {
        this.httpHeader = 'http://vbtest.lenovomm.cn/mall/yydb_main.xhtml'
    };
    ScreenPage.prototype = {
        init: function () {
            this.initNewsListDatas();
            this.initGoodsListDatas();
            this.tabs();
            this.bannerWipre()
        },
        bannerWipre: function () {
                screen_banner = new Swiper('.screen_banner .swiper-container', {
                direction: 'horizontal',
                speed: 500,
                autoplayDisableOnInteraction: false,
                autoplay: 2000,
                preloadImages: true,
                updateOnImagesReady : true,
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination'
            });

        },
        newSwiper:function () {
            var screen_news = new Swiper('.screen_news .swiper-container', {
                direction: 'vertical',
                speed: 500,
                simulateTouch:false,
                autoplayDisableOnInteraction: false,
                autoplay: 2000,
                observeParents:true,
                loop: true,
                auto:2000
            });
        },
        tabs: function () {
            var self = this;
            $('.screen_wap').on('click', 'li', function () {
                var url = $(this).attr('data-ajaxUrl');
                var doAjaxobj = {};
                $(this).children().addClass('active').parent().siblings().children('span').removeClass('active');
                $('#goodsList').empty();
                doAjaxobj.url = self.httpHeader + url;
                doAjaxobj.method = 'GET';
                doAjaxobj.data = '';
                doAjaxobj.type = 'JSON';
                self.doAjax(doAjaxobj, self.initGoodsDatas);
//                    $(this).parent().nextAll().hide().eq($(this).index()).show();
            })
        },
        initGoodsListDatas:function () {
            var self=this;
            var doAjaxobj = {};
            doAjaxobj.url = self.httpHeader + '?c=showByRenQi';
            doAjaxobj.method = 'GET';
            doAjaxobj.data = '';
            doAjaxobj.type = 'JSON';
            self.doAjax(doAjaxobj, self.initGoodsDatas);
        },
        initGoodsDatas: function (datas) {
            var html = '';
            var htmlContent = '<li data-goodsId="{{goodsId}}" data-periodNumber="{{periodNumber}}"><img src={{goodsSrc}} alt=""><h5>{{goodsTitle}}</h5><span>总需<b>{{sum}}</b>张/已售<b>{{remaining}}</b>张</span><div class="bar"></div></li>';
            if(datas.code==0){
                for (var i = 0,lens=datas.body.length; i < lens; i++) {
                    html += htmlContent.replace('{{goodsTitle}}', datas.body[i].goodsName);
                    html = html.replace('{{goodsSrc}}', datas.body[i].thumbnail);
                    html = html.replace('{{sum}}', datas.body[i].totalCount);
                    html = html.replace('{{remaining}}',datas.body[i].currentCount);
                    html = html.replace('{{goodsId}}',datas.body[i].goodsId);
                    html = html.replace('{{periodNumber}}',datas.body[i].periodNumber);
                    $('#goodsList').html(html);
                    var $barPart = $('#goodsList').find('li').eq(i).children('div');
                    page.progressbar($barPart,datas.body[i].percent);
                    html = $('#goodsList').html();
                }
                $('#goodsList').on('click','li',function () {
                    var self=page,th=$(this);
                   self.goDetails(th);
                })
            }else {
            }
        },
        goDetails:function (th) {
         
                var goodsId=th.attr('data-goodsId');
				var periodNumber=th.attr('data-periodNumber');
                var st=$("#st").val();
                location.href='http://vbtest.lenovomm.cn/mall/yydb_record.xhtml?c=showDetail&goodsId='+goodsId+'&periodNumber='+periodNumber+'&st='+st;

        },
        initNewsListDatas:function () {
            var self=this;
            var doAjaxobj = {};
            doAjaxobj.url = self.httpHeader + '?c=showAwardUser';
            doAjaxobj.method = 'GET';
            doAjaxobj.data = '';
            doAjaxobj.type = 'JSON';
            self.doAjax(doAjaxobj, self.initNewsDatas);
        },
        initNewsDatas: function (datas) {
            if(datas.code==0){
                var html = '',self=page;
                var htmlContent = '<div class="swiper-slide">{{newsText}}</div>';
                for(var i=0 ,lens=datas.body.length; i<lens; i++){
                    html+=htmlContent.replace('{{newsText}}','恭喜<b class="fontColor1">'+datas.body[i].userName+'</b>'+datas.body[i].time+'分钟前获得<b class="fontColor2">'+datas.body[i].goodsName+'</b>');
                }
                $('#newsList').append(html);
                self.newSwiper();
            }

        },
        progressbar: function ($dom, val) {
            $($dom).html('<div class="bar_ch" style="width: ' + val + '%"></div>');
        },
        doAjax: function (obj, suc, err) {
            var request = $.ajax({
                url: obj.url || '',
                method: obj.method || 'POST',
                data: obj.data || '',
                dataType: obj.type || 'JSON'
            });
            request.done(function (datas) {
                suc(datas);
            });
            request.fail(function (jqXHR, textStatus) {
                err(jqXHR, textStatus);
            });
        }
    };
    var page = new ScreenPage();
    page.init();

})();
