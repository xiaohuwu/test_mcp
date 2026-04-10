/* ===== 公共配色 ===== */
const COLORS = {
  a0: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#28B7FF' }, { offset: 1, color: '#80FFFF' }
  ]),
  a1: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#288EF3' }, { offset: 1, color: '#3BD8F7' }
  ]),
  a2: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#FB9220' }, { offset: 1, color: '#FBBE20' }
  ]),
  a3: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#7295FF' }, { offset: 1, color: '#7EB4FF' }
  ]),
  a4: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#05E3E5' }, { offset: 1, color: '#1AF4D7' }
  ]),
  a5: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: '#FF748B' }, { offset: 1, color: '#FFA19A' }
  ]),
};
const COLOR_LIST = ['#28B7FF','#3BD8F7','#FB9220','#7295FF','#05E3E5','#FF748B','#80FFFF','#FBBE20','#7EB4FF','#1AF4D7'];
const AXIS_LABEL = { color: 'rgba(160,200,255,0.7)', fontSize: 10 };
const AXIS_LINE  = { lineStyle: { color: 'rgba(62,156,255,0.2)' } };
const SPLIT_LINE = { lineStyle: { color: 'rgba(62,156,255,0.1)' } };

/* ===== 工具函数 ===== */
function init(id) {
  const dom = document.getElementById(id);
  if (!dom) return null;
  return echarts.init(dom);
}

/* ===== 1. 男女占比 - 已改为CSS条形比例，无需ECharts ===== */

/* ===== 2. 年龄分布 - 环形图 ===== */
(function() {
  const chart = init('chart-age');
  if (!chart) return;
  const data = [
    { value: 10,  name: '100岁及以上', itemStyle: { color: COLOR_LIST[0] } },
    { value: 60,  name: '90-99岁',    itemStyle: { color: COLOR_LIST[1] } },
    { value: 120, name: '80-89岁',    itemStyle: { color: COLOR_LIST[2] } },
    { value: 80,  name: '70-79岁',    itemStyle: { color: COLOR_LIST[3] } },
    { value: 45,  name: '60-69岁',    itemStyle: { color: COLOR_LIST[4] } },
    { value: 30,  name: '60岁及以下',  itemStyle: { color: COLOR_LIST[5] } }
  ];
  chart.setOption({
    legend: {
      orient: 'vertical',
      left: 0,
      top: 'center',
      textStyle: { color: '#A0C8FF', fontSize: 12, fontWeight: 700, fontFamily: 'Douyin Sans, PingFang SC' },
      itemWidth: 8, itemHeight: 8,
      itemGap: 10,
      icon: 'circle'
    },
    series: [{
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['68%', '50%'],
      label: { show: false },
      data: data,
      emphasis: { scale: false }
    }],
    graphic: [{
      type: 'text',
      left: '65%',
      top: '38%',
      style: { text: '201.39', fill: '#91EDFF', fontSize: 20, fontWeight: 700, textAlign: 'center' }
    }, {
      type: 'text',
      left: '65%',
      top: '56%',
      style: { text: '单位: 人', fill: 'rgba(160,200,255,0.6)', fontSize: 12, textAlign: 'center' }
    }]
  });
})();

/* ===== 3. 风险防范 - 横向柱状图 ===== */
(function() {
  const chart = init('chart-risk');
  if (!chart) return;
  const categories = ['食物中毒','坠床','文娱活动意外','烫伤','走失','压疮','他伤和自伤','食品药品误服','跌倒','噎食'];
  const values = [592, 676, 684, 737, 691, 777, 736, 861, 942, 992];
  chart.setOption({
    grid: { left: 90, right: 40, top: 5, bottom: 5 },
    xAxis: { type: 'value', show: false },
    yAxis: {
      type: 'category',
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { ...AXIS_LABEL, fontSize: 10 }
    },
    series: [{
      type: 'bar',
      data: values,
      barWidth: 6,
      itemStyle: {
        borderRadius: [0, 3, 3, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(40,183,255,0.3)' },
          { offset: 1, color: '#28B7FF' }
        ])
      },
      showBackground: true,
      backgroundStyle: { color: 'rgba(62,156,255,0.06)', borderRadius: [0, 3, 3, 0] },
      label: {
        show: true, position: 'right',
        color: '#7CCFFF', fontSize: 9
      }
    }]
  });
})();

/* ===== 4. 现存疾病分布 - 饼图 ===== */
(function() {
  const chart = init('chart-disease');
  if (!chart) return;
  chart.setOption({
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#A0C8FF', fontSize: 10 },
      itemWidth: 8, itemHeight: 8
    },
    series: [{
      type: 'pie',
      radius: ['40%', '65%'],
      center: ['35%', '50%'],
      label: { show: false },
      data: [
        { value: 280, name: '高血压', itemStyle: { color: COLOR_LIST[0] } },
        { value: 200, name: '高血脂', itemStyle: { color: COLOR_LIST[1] } },
        { value: 170, name: '糖尿病', itemStyle: { color: COLOR_LIST[2] } },
        { value: 120, name: '心脏病', itemStyle: { color: COLOR_LIST[3] } },
        { value: 90,  name: 'xxx病',  itemStyle: { color: COLOR_LIST[4] } },
        { value: 140, name: '其他',   itemStyle: { color: COLOR_LIST[5] } }
      ]
    }]
  });
})();

/* ===== 5. 入住退住人数趋势 - 双折线图 ===== */
(function() {
  const chart = init('chart-bed-trend');
  if (!chart) return;
  const months = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  chart.setOption({
    grid: { left: 30, right: 8, top: 8, bottom: 20 },
    xAxis: {
      type: 'category',
      data: months,
      axisLabel: AXIS_LABEL,
      axisLine: AXIS_LINE,
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      axisLabel: AXIS_LABEL,
      axisLine: { show: false },
      splitLine: SPLIT_LINE
    },
    series: [
      {
        name: '入住', type: 'line', smooth: true,
        data: [45, 50, 38, 64, 55, 42, 60, 48, 52, 58, 46, 50],
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#288EF3' },
            { offset: 1, color: '#3BD8F7' }
          ]),
          width: 2,
          shadowColor: 'rgba(59,190,247,0.4)',
          shadowBlur: 9
        },
        itemStyle: { color: '#3BD8F7' },
        symbol: 'circle', symbolSize: 4,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(59,190,247,0.1)' },
            { offset: 1, color: 'rgba(59,190,247,0)' }
          ])
        }
      },
      {
        name: '退住', type: 'line', smooth: true,
        data: [20, 25, 18, 30, 22, 28, 15, 20, 25, 18, 22, 16],
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#FB9220' },
            { offset: 1, color: '#FBBE20' }
          ]),
          width: 2,
          shadowColor: 'rgba(251,146,32,0.4)',
          shadowBlur: 9
        },
        itemStyle: { color: '#FB9220' },
        symbol: 'circle', symbolSize: 4,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(251,146,32,0.1)' },
            { offset: 1, color: 'rgba(251,146,32,0)' }
          ])
        }
      }
    ]
  });
})();

/* ===== 6. 能力等级分布 - 柱状图 ===== */
(function() {
  const chart = init('chart-ability');
  if (!chart) return;
  chart.setOption({
    grid: { left: 10, right: 10, top: 10, bottom: 25 },
    xAxis: {
      type: 'category',
      data: ['能力完好', '轻度失能', '中度失能', '重度失能', '完全失能'],
      axisLabel: { ...AXIS_LABEL, fontSize: 10 },
      axisLine: AXIS_LINE,
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value', show: false
    },
    series: [{
      type: 'bar',
      data: [
        { value: 120, itemStyle: { color: COLOR_LIST[0] } },
        { value: 90,  itemStyle: { color: COLOR_LIST[1] } },
        { value: 65,  itemStyle: { color: COLOR_LIST[2] } },
        { value: 40,  itemStyle: { color: COLOR_LIST[3] } },
        { value: 25,  itemStyle: { color: COLOR_LIST[4] } }
      ],
      barWidth: 20,
      itemStyle: { borderRadius: [4, 4, 0, 0] },
      label: {
        show: true, position: 'top',
        color: '#7CCFFF', fontSize: 10
      }
    }]
  });
})();

/* ===== 7. 护理等级分布 - 柱状图 ===== */
(function() {
  const chart = init('chart-nursing');
  if (!chart) return;
  const levels = ['护理等级1','护理等级2','护理等级3','护理等级4','护理等级5','护理等级6','护理等级7','护理等级8'];
  const values = [80, 65, 55, 70, 45, 50, 35, 36];
  chart.setOption({
    grid: { left: 10, right: 10, top: 10, bottom: 25 },
    xAxis: {
      type: 'category',
      data: levels,
      axisLabel: { ...AXIS_LABEL, fontSize: 9, rotate: 30 },
      axisLine: AXIS_LINE,
      axisTick: { show: false }
    },
    yAxis: { type: 'value', show: false },
    series: [{
      type: 'bar',
      data: values.map((v, i) => ({ value: v, itemStyle: { color: COLOR_LIST[i % COLOR_LIST.length] } })),
      barWidth: 16,
      itemStyle: { borderRadius: [4, 4, 0, 0] },
      label: {
        show: true, position: 'top',
        color: '#7CCFFF', fontSize: 9
      }
    }]
  });
})();

/* ===== 8. 服务人员部门分布 - 柱状图 ===== */
(function() {
  const chart = init('chart-dept');
  if (!chart) return;
  chart.setOption({
    grid: { left: 10, right: 10, top: 10, bottom: 25 },
    xAxis: {
      type: 'category',
      data: ['部门1', '部门2', '部门3', '部门4', '部门5'],
      axisLabel: AXIS_LABEL,
      axisLine: AXIS_LINE,
      axisTick: { show: false }
    },
    yAxis: { type: 'value', show: false },
    series: [{
      type: 'bar',
      data: [15, 12, 10, 8, 7],
      barWidth: 20,
      itemStyle: {
        borderRadius: [4, 4, 0, 0],
        color: COLORS.a1
      },
      label: {
        show: true, position: 'top',
        color: '#7CCFFF', fontSize: 10
      }
    }]
  });
})();

/* ===== 9. 智能设备数 - 柱状图 ===== */
(function() {
  const chart = init('chart-device');
  if (!chart) return;
  const devices = ['火柴人摄像头','跌倒报警器','智能床带','超脑摄像头','声光报警器','紧急按钮','智能手环','呼叫对讲'];
  const normal = [55, 18, 39, 43, 69, 70, 37, 89];
  const abnormal = [1, 2, 0, 3, 1, 0, 2, 3];
  chart.setOption({
    grid: { left: 80, right: 30, top: 10, bottom: 5 },
    xAxis: { type: 'value', show: false },
    yAxis: {
      type: 'category',
      data: devices,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { ...AXIS_LABEL, fontSize: 10 }
    },
    series: [
      {
        name: '正常', type: 'bar', stack: 'total',
        data: normal, barWidth: 8,
        itemStyle: { color: '#28B7FF', borderRadius: [0, 0, 0, 0] },
        label: { show: true, position: 'right', color: '#7CCFFF', fontSize: 9,
          formatter: function(p) { return normal[p.dataIndex] + abnormal[p.dataIndex]; }
        }
      },
      {
        name: '异常', type: 'bar', stack: 'total',
        data: abnormal, barWidth: 8,
        itemStyle: { color: '#FF748B', borderRadius: [0, 3, 3, 0] }
      }
    ]
  });
})();

/* ===== 10. 预警事件类型统计 - 横向柱状图 ===== */
(function() {
  const chart = init('chart-alert-type');
  if (!chart) return;
  const types = ['异常行为检测','禁区闯入','夜间异常活动','长时间静止','电子围栏越界','紧急SOS求助','生命体征异常','疑似坠床','离床','疑似跌倒'];
  const values = [120, 150, 180, 200, 250, 300, 450, 600, 800, 2104];
  chart.setOption({
    grid: { left: 90, right: 40, top: 5, bottom: 5 },
    xAxis: { type: 'value', show: false },
    yAxis: {
      type: 'category',
      data: types,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { ...AXIS_LABEL, fontSize: 9 }
    },
    series: [{
      type: 'bar',
      data: values,
      barWidth: 6,
      itemStyle: {
        borderRadius: [0, 3, 3, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: 'rgba(40,183,255,0.2)' },
          { offset: 1, color: '#28B7FF' }
        ])
      },
      showBackground: true,
      backgroundStyle: { color: 'rgba(62,156,255,0.05)' },
      label: {
        show: true, position: 'right',
        color: '#7CCFFF', fontSize: 9
      }
    }]
  });
})();

/* ===== 11. 预警事件等级分布 - 饼图 ===== */
(function() {
  const chart = init('chart-alert-level');
  if (!chart) return;
  chart.setOption({
    legend: {
      bottom: 5,
      textStyle: { color: '#A0C8FF', fontSize: 10 },
      itemWidth: 8, itemHeight: 8
    },
    series: [{
      type: 'pie',
      radius: ['40%', '65%'],
      center: ['50%', '42%'],
      label: { show: false },
      data: [
        { value: 34,  name: '紧急事件', itemStyle: { color: '#FF748B' } },
        { value: 89,  name: '重大事件', itemStyle: { color: '#FB9220' } },
        { value: 93,  name: '一般事件', itemStyle: { color: '#28B7FF' } }
      ]
    }],
    graphic: [{
      type: 'text',
      left: 'center',
      top: '34%',
      style: { text: '216', fill: '#91EDFF', fontSize: 18, fontWeight: 700, textAlign: 'center' }
    }, {
      type: 'text',
      left: 'center',
      top: '46%',
      style: { text: '单位: 件', fill: 'rgba(160,200,255,0.6)', fontSize: 10, textAlign: 'center' }
    }]
  });
})();

/* ===== 窗口自适应 ===== */
window.addEventListener('resize', function() {
  document.querySelectorAll('[id^="chart-"]').forEach(function(dom) {
    var instance = echarts.getInstanceByDom(dom);
    if (instance) instance.resize();
  });
});
