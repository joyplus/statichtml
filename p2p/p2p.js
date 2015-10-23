var p2p_filter = new Vue({
  el: '#p2p_filter',
  data: {
    state:[false,false,false],
    select_titles: [
      { child_title: '投资金额',child_content:['1','2','3'],ifdisplay: false, },
      { child_title: '投资周期',child_content:['4','6','8'],ifdisplay: false, },
      { child_title: '预期收益',child_content:['7','9','0'],ifdisplay: false, }
    ]
  },
  methods: {
    toggle: function (item) {
      if(item.ifdisplay){
        item.ifdisplay = !item.ifdisplay;
      }
      else{
        p2p_filter.select_titles[0].ifdisplay = false;
        p2p_filter.select_titles[1].ifdisplay = false;
        p2p_filter.select_titles[2].ifdisplay = false;
        item.ifdisplay = true;
      }
    },
    cancel: function (){
        p2p_filter.select_titles[0].ifdisplay = false;
        p2p_filter.select_titles[1].ifdisplay = false;
        p2p_filter.select_titles[2].ifdisplay = false;
    }
  },
})
var wealth_result = new Vue({
  el: '#wealth_result',
  data: {
    wealth_contents: [
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11' },
    ]
  }
})