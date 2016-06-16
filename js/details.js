(function () {
    //Vue.config.debug = true;
    Vue.component('modal', {
        template: '#error-template',
        props: {
            show: Boolean
        }
    });
  var myVue=new Vue({
        el: 'body',
        data: {
            httpHeader: 'http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml',
            payHttpHeader: 'http://vbtest.lenovomm.cn/mall/yydb_cart.xhtml?c=genOrder',
            numShow: false,
            fShow: false,
            siteShow: false,
            ressShow: false,
            addShow: false,
            mackShow: false,
            errorShow: false,
            isDefaultShow: false,
            popupShow: true,
            goodsNumber: 1,         //默认商品数量
            defaultNumber: 0,       //优惠金额
            couponName: '',         //优惠券名称
            description: '',        //优惠券描述
            moneyNumber: 0,         //应付金额
            siteIndex: '',           //地址数组索引
            inventory: 0,           //库存
            defaultaddressCity: {}, //默认地址
            coupon: [],             //优惠券
            goodsUnit: 1,           //商品单价
            addressListArr: [],     //地址列表
            addressType: false,     //默认地址标记
            editorMsg: [],          //修改信息
            addressVlu: {},
            couponId: '',
            addressTitle: '',
            isAddAddress: false,
            address: '',
            delSiteIndex: 0,
            errorTipsShow:false,
            errorTipsContent:'',
            isError:false
        },
        methods: {
            init: function () {
                this.swipre();
                this.isNumber();
            },
            swipre: function () {
                var details_banner = new Swiper('.details_banner .swiper-container', {
                    direction: 'horizontal',
                    speed: 500,
                    autoplayDisableOnInteraction: false,
                    autoplay: 2000,
                    updateOnImagesReady: true,
                    loop: true,
                    pagination: '.swiper-pagination'
                });
            },
            reduction: function () {
                if (this.goodsNumber > 1) {
                    this.goodsNumber--;
                }
            },
            add: function () {
                this.goodsNumber++;
                this.isGoodsNum();
            },
            del: function () {
                var doAjaxobj = {};
                console.log(this.delSiteIndex.id);
                doAjaxobj.url = this.httpHeader + '?c=deleteUserAddress';
                doAjaxobj.method = 'POST';
                doAjaxobj.data = {addressId: this.delSiteIndex.id};
                doAjaxobj.type = 'JSON';
                this.doAjax(doAjaxobj, this.delSuc,this.initSubErrorDatas);
            },
            delSuc: function (datas) {
                if (datas.code == 0) {
                    this.addressListArr.$remove(this.delSiteIndex);
                    this.errorShow = false;
                }
            },
            delShow: function (site) {
                this.errorShow = true;
                this.delSiteIndex = site;
                console.log(this.errorShow)

            },
            isNumber: function () {
                var th = this;
                $('#goodsNumber').on('keyup', function () {
                    var c = $(this);
                    if (/[^\d]/.test(c.val())) {//替换非数字字符
                        th.goodsNumber = c.val().replace(/[^\d]/g, '');
                    }
                    if (c.val() > th.inventory) {
                        th.goodsNumber = th.inventory;
                    }
                    if (c.val() < 1) {
                        th.goodsNumber = 1;
                    }
                })
            },
            choose: function (index) {
                this.siteIndex = index;
                this.defaultaddressCity = this.addressListArr[index];
            },
            isGoodsNum: function () {
                if (this.inventory < this.goodsNumber) {
                    this.goodsNumber = this.inventory;
                    return false;
                }
            },
            verifyGooodsNum: function () {
                var doAjaxobj = {}, periodNumber = $('#periodNumber').val();
                doAjaxobj.url = this.httpHeader + '?c=queryGoodsQuantity&periodNumber=' + periodNumber + '';
                doAjaxobj.method = 'POST';
                doAjaxobj.data = '';
                doAjaxobj.type = 'JSON';
                this.doAjax(doAjaxobj, this.sucGoodsNum,this.initSubErrorDatas);
            },
            sucGoodsNum: function (datas) {
                if (datas.code == 0) {
                    this.inventory = datas.body;
                    this.goodsUnit = $('#price').val();
                    this.goodsNumBulr();
                    this.numShow = true;
                    this.mackShow = true;
                    this.popupShow = true;
                    this.initShow();
                }
            },
            initShow: function () {
                this.fShow = false;
                this.siteShow = false;
                this.addShow = false;
                this.ressShow = false;
            },
            goodsNumBulr: function () {
                var th = this;
                $('#goodsNumber').blur(function () {
                    th.isGoodsNum();
                    //$('body').css('transform','none')
                });
                $('#goodsNumber').focus(function () {
                    //$('body').css('transition', 'all .3s ease').css('transform','translate3d(0,-8rem,0)')
                })
            },
            defaultaddress: function () {
                var doAjaxobj = {};
                doAjaxobj.url = this.httpHeader + '?c=queryUserDefaultAddress';
                doAjaxobj.method = 'POST';
                doAjaxobj.data = '';
                doAjaxobj.type = 'JSON';
                this.doAjax(doAjaxobj, this.sucDefaultaddress,this.initSubErrorDatas);
            },
            sucDefaultaddress: function (datas) {
                if (datas.code == 0) {
                    this.numShow = false;
                    this.fShow = true;
                    this.defaultaddressCity = datas.body.address;
                    this.coupon = datas.body.coupon;
                    for (var i = 0, lens = this.coupon.length; i < lens; i++) {
                        if (this.goodsNumber >= this.coupon[i].needAmount / this.goodsUnit) {
                            this.isDefaultShow = true;
                            this.couponName = this.coupon[i].name;
                            this.couponId = this.coupon[i].id;
                        }else {
                            this.isDefaultShow = false;
                        }
                        this.description = this.coupon[0].description;
                    }
                } else {
                    this.errTips(datas.message)
                }
            },
            addressList: function () {
                var doAjaxobj = {};
                doAjaxobj.url = this.httpHeader + '?c=show';
                doAjaxobj.method = 'POST';
                doAjaxobj.data = '';
                doAjaxobj.type = 'JSON';
                this.doAjax(doAjaxobj, this.addressListSuc,this.initSubErrorDatas);
            },
            addressListSuc: function (datas) {
                this.fShow = false;
                this.siteShow = true;
                this.addressListArr = datas.body;
            },
            editorDefaultaddress: function (index) {
                this.siteIndex = index;
                this.addressTitle = '修改地址';
                this.addressType = this.addressListArr[index].addressType == 0;
                this.addressVlu = this.addressListArr[index];
                var province = this.addressListArr[index].province;
                var city = this.addressListArr[index].city;
                var district = this.addressListArr[index].district;
                this.address = province + city + district;
            },
            addAddress: function () {
                this.addressTitle = '添加新地址';
                this.addShow = true;
                this.siteShow = false;
                this.addressType = false;
                this.addressVlu = {};
                this.addressVlu.addressType = 1;
                this.isAddAddress = true;
                this.address = '';
            },
            addressSave: function () {
                var doAjaxobj = {};
                var thisAddressVlu = this.addressVlu;
                if(!this.isNull(thisAddressVlu.personalName)){
                    this.errTips('请填写收件人姓名');
                    return false;
                }
                if(!this.isNull(thisAddressVlu.personalPhone)){
                    this.errTips('请填写收件人电话');
                    return false;
                }
                if(!this.isNull(thisAddressVlu.province)){
                    this.errTips('请选择收件人所在地区');
                    return false;
                }
                if(!this.isNull(thisAddressVlu.detailAddr)){
                    this.errTips('请填写收件人详细地址');
                    return false;
                }
                if(this.isMoibleNumber(thisAddressVlu.personalPhone)){
                    var data = {
                        personalName: thisAddressVlu.personalName,
                        personalPhone: thisAddressVlu.personalPhone,
                        detailAddr: thisAddressVlu.detailAddr,
                        province: thisAddressVlu.province,
                        city: thisAddressVlu.city,
                        district: thisAddressVlu.district,
                        addressId: thisAddressVlu.id,
                        addressType: thisAddressVlu.addressType
                    };
                    if (this.addressTitle == '添加新地址') {
                        doAjaxobj.url = this.httpHeader + '?c=saveAddress';
                    } else {
                        doAjaxobj.url = this.httpHeader + '?c=updateSave';
                    }
                    doAjaxobj.method = 'POST';
                    doAjaxobj.data = data;
                    doAjaxobj.type = 'JSON';
                    this.doAjax(doAjaxobj, this.addressSaveSuc,this.initSubErrorDatas);
                }else {
                    this.errTips('请输入正确的手机号码')
                }
            },
            isNull:function (val) {
                return !(val == null || val == "" || val == undefined);

            },
            addressSaveSuc: function (datas) {
                if (datas.code == 0) {
                    this.fShow = true;
                    this.addShow = false;
                    this.defaultaddressCity = this.addressVlu;
                }
            },
            paymentSave: function () {
                var doAjaxobj = {}, goodsId = $('#goodsId').val(), periodNumber = $('#periodNumber').val();
                if(!this.defaultaddressCity){
                    this.errTips('请选择收货地址');
                    return false;
                }
                var data = {
                    goodsId: goodsId,
                    periodNumber: periodNumber,
                    buyTimes: this.goodsNumber,
                    addressId: this.defaultaddressCity.id,
                    couponId: this.couponId,
                    totalAmount: this.moneyNumber
                };
                console.log(data);
                doAjaxobj.url = this.payHttpHeader;
                doAjaxobj.method = 'POST';
                doAjaxobj.data = data;
                doAjaxobj.type = 'JSON';
                this.doAjax(doAjaxobj, this.paymentSaveSuc,this.initSubErrorDatas);
            },
            paymentSaveSuc: function (datas) {
                var data = datas.body;
                console.log(data);
                if (datas.code == 0) {
                    this.mackShow = false;
                    this.fShow = false;
                    LenovoID.doPay(data.orderId, data.totalAmount, data.realm, data.productName,data.stName,data.retrunUrl);
                }
            },
            isStatus: function () {
                this.addressType = true;
                this.addressVlu.addressType = 0;
            },
            cityPopShow: function () {
                var th = this;
                //初始化定义
                var _pop = $(".pop_pos"), _poplist = $(".pop_pos .mui-table-view"), _trigger = $("input[name=trigger]").eq(2), html = "";
                //变量缓存省市区名和省市区代码
                var province, city, district;
                //回显省市区信息
                if ($("input.province").val()) {
                    var _orapos = $("input.province").val() + $("input.city").val() + $("input.district").val();
                    _trigger.val(_orapos);
                }
                //关闭弹出窗,取消录入
                $(".mui-mack").click(function () {
                    $(this).hide();
                    _pop.hide();
                });

                _pop.show();
                $(".mui-mack").show();
                html = "";
                mui.each(areadata.province, function (index, item) {
                    html += '<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_province" title="' + item.provinceID + '">' + item.province + '</a></li>';
                });
                _poplist.append(html);
                //点击省显示市列表，缓存省份名
                $(".list_province").click(function () {
                    var thisid = $(this).attr("title") || '';
                    province = $(this).text();
                    _poplist.empty();
                    html = "";
                    if (thisid === '') {
                        return false;
                    }
                    mui.each(areadata.city, function (index, item) {
                        if (item.fatherID == thisid) {
                            html += '<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_city" title="' + item.cityID + '">' + item.city + '</a></li>';
                        }
                    });
                    _poplist.append(html);
                    //点击市显示地区列表，缓存城市名
                    $(".list_city").click(function () {
                        city = $(this).text();
                        var thisid = $(this).attr("title");
                        _poplist.empty();
                        html = "";
                        mui.each(areadata.area, function (index, item) {
                            if (item.fatherID == thisid)
                                html += '<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_district">' + item.area + '</a></li>';
                        });
                        _poplist.append(html);
                        //点击地区把 省市区三个变量连接 显示到input,并赋值给三个input,并关闭弹出窗
                        $(".list_district").click(function () {
                            _poplist.empty();
                            district = $(this).text();
                            if (!th.isAddAddress) {
                                th.addressVlu = th.addressListArr[th.siteIndex];
                            }
                            th.addressVlu.province = province;
                            th.addressVlu.city = city;
                            th.addressVlu.district = district;
                            th.address = province + city + district;
                            _pop.hide();
                            $(".mui-mack").hide();
                        });
                    });
                });

            },
            isMoibleNumber:function (tel) {
                var ab = /^1[34578]\d{9}$|^01[34578]\d{9}$/;
                return ab.test(tel);
            },
            errTips: function (tips) {
                var self=this;
                if(!this.isError){
                    this.errorTipsShow=true;
                    this.errorTipsContent=tips;
                    this.isError=true;
                    setTimeout(function () {
                        self.errorTipsShow=false;
                        self.isError=false;
                    },2000)
                }

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
            },
            initSubErrorDatas:function (error, errorStatus) {
                console.log(error);
                console.log(errorStatus);
            }
        },
        computed: {
            defaultNum: function () {
                var moneyNumbers = this.goodsNumber * this.goodsUnit;
                for (var i = 0, lens = this.coupon.length; i < lens; i++) {
                    this.defaultNumber = Math.floor(moneyNumbers / this.coupon[i].needAmount);
                    if (this.defaultNumber > this.coupon[i].maxCouponAmount / this.goodsUnit) {
                        this.defaultNumber = this.coupon[i].maxCouponAmount
                    }
                }
                this.moneyNumber = moneyNumbers - this.defaultNumber;
                return this.defaultNumber;
            }
        }
    });
    myVue.init();
})();
