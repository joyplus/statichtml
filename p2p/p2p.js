var select_state = [0,0,0];
var p2p_filter = new Vue({
  el: '#p2p_filter',
  data: {
    state:[false,false,false],
    select_titles: [
      { child_title: '投资金额',child_title_bk: '投资金额',child_content:['1','2','3'],ifdisplay: false,index:0 },
      { child_title: '投资周期',child_title_bk: '投资金额',child_content:['4','6','8'],ifdisplay: false,index:1 },
      { child_title: '预期收益',child_title_bk: '投资金额',child_content:['7','9','0'],ifdisplay: false,index:2 }
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
    },
    select: function (selecttype,filtertype,filtervalue,item) {
      if(selecttype==0){
        item.child_title = item.child_title_bk;
      }
      else{
        item.child_title = filtervalue;
      }
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