# holiday-test8
这是2019年2月19日的代码记录，自写一周课程表的小程序，无TX自带云服务，课程信息均为固定写于js文件内的data项的数组dates1[]，仅供参考。
## 数据如下：
```javascript
dates1: [
      {
        'cnum': '一',
        'cname': '软件工程',
        'tname': "陈伟莲",
        'peroid': " 42-706",
        'name': 1
      },
      {
        'cnum': '二',
        'cname': '无',
        'tname': " ",
        'peroid': " ",
        'name': 2
      },

      {
        'cnum': '三',
        'cname': '网络管理',
        'tname': "刘建友",
        'peroid': " 42-706",
        'name': 3
      },
      {
        'cnum': '四',
        'cname': '计算机系统结构/人机交互',
        'tname': "陈权 1-8周 42-805\n",
        'peroid': "周锡玲 9-16周 42-611",
        'name': 4
      },
      {
        'cnum': '五',
        'cname': '无',
        'tname': " ",
        'peroid': " ",
        'name': 5
      },
    ],
```

## 布局页面读取数据如下：
```html
<view class='vi2' wx:for="{{dates1}}" wx:key="dates1" >
<view class='vi3 padding radius shadow-blur'>
  <text class='text-white'>第{{item.cnum}}大节</text>
</view>
<van-collapse class='vi5'value="{{ activeNames }}" bind:change="onChange">
  <van-collapse-item title="{{item.cname}}" name="{{item.name}}">
    <text>{{item.tname}}{{item.peroid}}</text> 
  </van-collapse-item>
  </van-collapse>
</view>
```
