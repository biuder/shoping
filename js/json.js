Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=getInitTags', {
    sites:[
        {
            name:'孙夏光',
            telPhone:'15896562342',
            site:'北京市海淀区上地西街6号联想北研大厦',
            active:true
        },
        {
            name:'孙夏光',
            telPhone:'15896562342',
            site:'北京市海淀区上地',
            active:false
        },
        {
            name:'王夏光',
            telPhone:'15896562342',
            site:'海淀区上地西街6号联想北研大厦',
            active:false
        },
        {
            name:'刘夏光',
            telPhone:'15896562342',
            site:'北京市海淀区上地西街6号联想北研大厦',
            active:false
        },
        {
            name:'夏光',
            telPhone:'15896562342',
            site:'上地西街6号联想',
            active:false
        }
    ]
});
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_main.xhtml?c=showByRenQi', {
        body: [
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "联想手机联想手机联想手机联想手机",
                "percent": 20,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 2000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
        ],
    "code":0
}
);
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_main.xhtml?c=showByTime', {
        body: [
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "联想手机联想手机联想手机联想手机",
                "percent": 20,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 2000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },

            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
            {
                "goodsId": "2070a78783cb4f31a0d7561140cf3dc6",
                "goodsName": "1元购",
                "percent": 10,
                "periodNumber": "505251003",
                "renCi": 0,
                "thumbnail": "http://img1.imgtn.bdimg.com/it/u=3634024371,1230151706&fm=21&gp=0.jpg",
                "totalCount": 1000,
                "currentCount":100
            },
        ],
    "code":0
    }
);
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_main.xhtml?c=showAwardUser', {
    "body": [
        {
            "goodsName": "iphone 6s plus",
            "time": 113,
            "userName": "小李子"
        },
        {
            "goodsName": "独孤九剑",
            "time": 113,
            "userName": "杨过"
        },
        {
            "goodsName": "辟邪剑谱",
            "time": 113,
            "userName": "方世玉"
        },
        {
            "goodsName": "九阴真经",
            "time": 113,
            "userName": "郭靖"
        }],
    "code":0
});
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=queryGoodsQuantity&periodNumber=121512155', {
        "body":1000,
        "code":0,
        "message":"success"
});
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=queryUserDefaultAddress', {
    "body": {

        "coupon": [
            {
                "beginTime": 1464105600000,
                "couponAmount": 1,
                "couponNumer": "1234",
                "couponStatus": 1,
                "endTime": 1558713600000,
                "id": 1,
                "maxCouponAmount": 10,
                "name": "优惠",
                "needAmount": 5,
                "description":"活动期间凡参与一元夺宝的用户，享有满五减一的活动111；活动期间凡参与一元夺宝的用户，享有满五减一的活动；活动期间凡参与一元夺宝的用户，享有满五减一的活动；活动期间凡参与一元夺宝的用户，享有满五减一的活动；"
            }
        ]
    },
    "code": 0,
    "message": "success"
});
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=show', {
    "body": [
        {
            "addressType": 1,
            "city": "北京",
            "detailAddr": "啦啦啦",
            "district": "市辖区",
            "id": 821,
            "personalName": "测试",
            "personalPhone": "13693110032",
            "province": "北京",
            "provinceCode": "010",
            "status": 1,
            "userId": "10016197438",
            "userName": "13812151215"
        },
        {
            "addressType": 1,
            "city": "北京西城区",
            "detailAddr": "啦啦啦",
            "district": "市辖区",
            "id": 822,
            "personalName": "测试",
            "personalPhone": "13693110032",
            "province": "北京",
            "provinceCode": "010",
            "status": 0,
            "userId": "10016197438",
            "userName": "18600949460"
        },
        {
            "addressType": 1,
            "city": "北京朝阳区南",
            "detailAddr": "啦啦啦",
            "district": "市辖区",
            "id": 823,
            "personalName": "测试",
            "personalPhone": "13693110032",
            "province": "北京",
            "provinceCode": "010",
            "status": 1,
            "userId": "10016197438",
            "userName": "18600949460"
        },
        {
            "addressType": 0,
            "city": "北京海淀区",
            "detailAddr": "啦啦啦",
            "district": "市辖区",
            "id": 824,
            "personalName": "测试",
            "personalPhone": "13693110032",
            "province": "北京",
            "provinceCode": "010",
            "status": 1,
            "userId": "10016197438",
            "userName": "18600949460"
        }
    ],
    "code": 0,
    "message": "success"
});
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=saveAddress', {
    "code":0
})
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=updateSave', {
    "code":0
})
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_ajax.xhtml?c=deleteUserAddress', {
    "code":0
})
Mock.mock('http://vbtest.lenovomm.cn/mall/activity.xhtml', {
    "code": 3
})
Mock.mock('http://vbtest.lenovomm.cn/mall/yydb_cart.xhtml?c=queryOrderStatus&orderId=Y1606021350087267438', {
    "body": {
    "activityPeriodId": 45,
        "awardNumber": "505311040",
        "bankOrderId": "1201606020150177597438966579",
        "buyCount": 1,
        "deleteFlag": 0,
        "goodsId": "36630c8f65f74f0eb38ec476a379ec6d",
        "id": 20,
        "isAllowRepeatPay": 0,
        "isReal": 0,
        "merchantId": "111112",
        "orderAmount": 0.01,
        "orderId": "Y1606021350087267438",
        "payType": 8,

        "postage": 0,
        "status": 1,
        "userId": "10016197438",
        "userName": "18600949460",
        "yydbActivityId": 45,
        "order":{
            "status":1
        },
        "period":{
            "currentCount":33,
            "periodNumber": "505311008,505311008,505311008,505311008",
            "totalCount":100
        }
},
    "code": 0,
    "message": "success"
})