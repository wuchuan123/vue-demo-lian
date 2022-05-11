//在Echarts.vue文件中
<template>
  <div class="Echarts">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  name: "Echarts",
  data() {
    return {
      datas: [
        [
          { name: "圣彼得堡来客", value: 5.6 },
          { name: "陀思妥耶夫斯基全集", value: 1 },
          { name: "史记精注全译（全6册）", value: 0.8 },
          { name: "加德纳艺术通史", value: 0.5 },
          { name: "表象与本质", value: 0.5 },
          { name: "其它", value: 3.8 },
        ],
      ],
    };
  },
  methods: {
    myEcharts() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      //配置图表
      var option = {
        title: {
          text: "阅读书籍分布",
          left: "center",
          textStyle: {
            color: "#999",
            fontWeight: "normal",
            fontSize: 14,
          },
        },
        series: this.datas.map(function (data, idx) {
          var top = idx * 33.3;
          return {
            type: "pie",
            radius: [40, 60],
            top: top + "%",
            height: "33.33%",
            left: "center",
            width: 400,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            showEmptyCircle: false,
            label: {
              alignTo: "edge",
              formatter: "{name|{b}}\n{time|{c} 小时,{d}%}",
              minMargin: 5,
              edgeDistance: 10,
              lineHeight: 15,
              rich: {
                time: {
                  fontSize: 10,
                  color: "#999",
                },
              },
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80,
            },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < myChart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points,
              };
            },
            data: data,
          };
        }),
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>

<style></style>
