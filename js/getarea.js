/**
 * @author coolli2@163.com 李宝君 2015-9-6  省市区联动
 *
 */

$(function() {
    //初始化定义
    var _pop=$(".pop_pos"), _poplist=$(".pop_pos .mui-table-view"), _trigger = $("input[name=trigger]").eq(2), html="";
    //变量缓存省市区名和省市区代码
    var province,city,district;
    //回显省市区信息
    if($("input.province").val()) {
        var _orapos=$("input.province").val()+$("input.city").val()+$("input.district").val();
        _trigger.val(_orapos);
    }
    //点击input触发弹出窗显示省份列表
    _trigger.click(function(){
        _pop.show();
        $(".mui-backdrop").show();
        html = "";
        mui.each(areadata.province,function(index, item){
            html+='<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_province" title="'+item.provinceID+'">'+item.province+'</a></li>';
        });
        _poplist.append(html);
        //点击省显示市列表，缓存省份名
        $(".list_province").click(function() {
            var thisid = $(this).attr("title") || '';
            province = $(this).text();
            _poplist.empty();
            html = "";
            if (thisid === '') {
                return false;
            }
            mui.each(areadata.city,function(index, item) {
                if (item.fatherID == thisid) {
                    html += '<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_city" title="'+item.cityID+'">'+item.city+'</a></li>';
                }
            });
            _poplist.append(html);
            //点击市显示地区列表，缓存城市名
            $(".list_city").click(function(){
                city = $(this).text();
                var thisid=$(this).attr("title");
                _poplist.empty();
                html="";
                mui.each(areadata.area,function(index, item){
                    if (item.fatherID == thisid)
                        html+='<li class="mui-table-view-cell"><a href="#" class="mui-navigate-right list_district">'+item.area+'</a></li>';
                })
                _poplist.append(html);
                //点击地区把 省市区三个变量连接 显示到input,并赋值给三个input,并关闭弹出窗
                $(".list_district").click(function(){
                    _poplist.empty();

                    district = $(this).text();
                    $("input[name=trigger]").val(province+city+district);
                    $("input.province").val(province);
                    $("input.city").val(city);
                    $("input.district").val(district);
                    _pop.hide();
                    $(".mui-backdrop").hide();
                });
            });
        });
    });

    //关闭弹出窗,取消录入
    $(".mui-backdrop").click(function(){
        $(this).hide();
        _pop.hide();
    });
});/**
 * Created by RayooTech on 2016/5/30.
 */
