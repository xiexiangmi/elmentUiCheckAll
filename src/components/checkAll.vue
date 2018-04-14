<template>
  <div>
      <div class="orderItem" v-for="(item,index) in orderList" :key="index">
          <div class="orderItemTop">
              <el-checkbox  class="fl"  v-model='checkArr' :label="item.id" @change="changevalue"></el-checkbox>
              <span class="fl orderTime">{{item.order_time}}</span>
              <span class="fl">订单编号: <em>{{item.order_serial}}</em></span>
              <span class="fr">获得积分：<em>{{item.order_integral}}</em></span>
          </div>
          <table>
              <tbody>
                  <tr>
                      <td>
                          <div class="drugImgBox"><img src="./images/bak03.jpg" alt=""></div>
                          <div class="drugMsg">
                              <h5>药品：感冒药</h5>
                              <p>客户：{{item.order_customer}}<br>
                              来源： {{item.order_source}}</p>
                          </div>
                      </td>
                      <td>
                          <h5>￥{{item.order_orderprice}}</h5>
                          <span>订单总价</span>
                      </td>
                      <td>
                          <h5>￥{{item.order_Informationcosts}}</h5>
                          <span>信息费</span>
                      </td>
                      <td>
                          <h5>待处理</h5>
                          <span>订单状态</span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <el-checkbox class="fl" v-model='cheackAllChecked' @change='checkAllFun'>全选</el-checkbox>
      <span class="reverseSelected" @click="reverseChecked">反选</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          id: "1",
          order_time: "2018.04.12 18:00",
          order_serial: "2478454415558",
          order_integral: "360000",
          order_customer: "xxx",
          order_source: "app商城",
          order_orderprice: "100000.00",
          order_Informationcosts: "2400"
        },
        {
          id: "2",
          order_time: "2018.04.12 18:00",
          order_serial: "2478454415558",
          order_integral: "360000",
          order_customer: "xxx",
          order_source: "app商城",
          order_orderprice: "100000.00",
          order_Informationcosts: "2400"
        }
      ],
      cheackAllChecked: false,
      checkArr: [],
      checkCompleteArr: []
    };
  },
  methods: {
    checkAllFun() {
      //实现全选（1/5）
      var _this = this;
      this.checkArr = [];
      if (this.cheackAllChecked) {
        this.orderList.forEach(function(item, index) {
          if (index >= 0) {
            _this.checkArr.push(item.id);
          }
        });
      }
    },
    reverseChecked() {
      //实现反选（2/5）
      var _this = this;
      var changeArr = [];
      this.orderList.forEach(function(item, index) {
        if (index >= 0) {
          changeArr.push(item.id);
        }
      });
      this.removeByValue(changeArr, this.checkArr);
    },
    removeByValue(changearr, checkarr) {
      //反选过滤函数（3/5）
      var _this = this;
      for (var j = 0; j < checkarr.length; j++) {
        for (var i = 0; i < changearr.length; i++) {
          if (changearr[i] === checkarr[j]) {
            changearr.splice(i, 1);
            break;
          }
        }
      }
      this.checkArr = changearr;
      if (changearr.length <= _this.checkCompleteArr.length) {
        this.cheackAllChecked = false;
      }
      if (changearr.length === _this.checkCompleteArr.length) {
        this.cheackAllChecked = true;
      }
    },
    changevalue() {
      //选项的change事件（4/5）
      var _this = this;
      if (this.checkArr.length <= _this.checkCompleteArr.length) {
        this.cheackAllChecked = false;
      }
      if (this.checkArr.length === _this.checkCompleteArr.length) {
        this.cheackAllChecked = true;
      }
    }
  },
  mounted() {
    //全选或反选用到的完整数组值（5/5）
    var _this = this;
    this.orderList.forEach(function(item, index) {
      if (index >= 0) {
        _this.checkCompleteArr.push(item.id);
      }
    });
  }
};
</script>
<style lang="less">
.orderItem {
  border: 1px solid #ccc;
  margin-top: 20px;
  .orderItemTop {
    height: 40px;
    background-color: #f5f5f5;
    padding: 0 10px;
    line-height: 40px;
    color: #888888;
    span {
      em {
        font-style: normal;
        color: #202020;
      }
    }
    .orderTime {
      margin: 0 50px 0 10px;
    }
    .el-checkbox__label{
        display: none;
      }
  }
  table {
    margin: 10px 0;
    width: 100%;
    td {
      .drugImgBox {
        float: left;
        width: 60px;
        height: 60px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .drugMsg {
        margin-left: 70px;
        h5 {
          color: #202020;
        }
        p {
          color: #888;
        }
      }
      &:nth-child(1) {
        padding-left: 10px;
      }
    }
  }
}
.reverseSelected{
  font-size: 14px;
  cursor: pointer;
}
</style>

