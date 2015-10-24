var p2p_filter = new Vue({
  el: '#p2p_filter',
  data: {
    state:[false,false,false],
    select_titles: [
      { child_title: '投资金额',child_title_bk: '投资金额',child_content:['不限','0-5万元','5-10万元','10-20万元','20-50万元','50万元以上',],ifdisplay: false,index:0,chosen:0 },
      { child_title: '投资周期',child_title_bk: '投资金额',child_content:['不限','1个月以内','1-3个月','3-6个月','6个月-1年','1年以上',],ifdisplay: false,index:1,chosen:0 },
      { child_title: '预期收益',child_title_bk: '投资金额',child_content:['不限','0-5％','5％-10％','10％-15%','15%以上',],ifdisplay: false,index:2,chosen:0 }
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
        p2p_filter.select_titles[filtertype].chosen = selecttype;
      }
      else{
        item.child_title = filtervalue;
        p2p_filter.select_titles[filtertype].chosen = selecttype;
      }
      p2p_filter.select_titles[0].ifdisplay = false;
      p2p_filter.select_titles[1].ifdisplay = false;
      p2p_filter.select_titles[2].ifdisplay = false;
      // console.log(p2p_filter.select_titles[0].chosen);
      // console.log(p2p_filter.select_titles[1].chosen);
      // console.log(p2p_filter.select_titles[2].chosen);
      set_filter(p2p_filter.select_titles[0].chosen,p2p_filter.select_titles[1].chosen,p2p_filter.select_titles[2].chosen);
    }
  },
})
var wealth_result = new Vue({
  el: '#wealth_result',
  data: {
    wealth_contents: [
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '1' ,profit:'11',ifdisplay:'true',money:'50001' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '2' ,profit:'1',ifdisplay:'true',money:'150000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '3' ,profit:'5',ifdisplay:'true',money:'250000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '4' ,profit:'6',ifdisplay:'true',money:'500000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '5' ,profit:'3',ifdisplay:'true',money:'150000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '6' ,profit:'19',ifdisplay:'true',money:'50000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '13' ,profit:'19',ifdisplay:'true',money:'250000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '13' ,profit:'1',ifdisplay:'true',money:'150000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '13' ,profit:'5',ifdisplay:'true',money:'250000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '7' ,profit:'8',ifdisplay:'true',money:'150000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '7' ,profit:'12',ifdisplay:'true',money:'250000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '7' ,profit:'1',ifdisplay:'true',money:'500000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '10' ,profit:'5',ifdisplay:'true',money:'550000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '10' ,profit:'8',ifdisplay:'true',money:'550000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '10' ,profit:'12',ifdisplay:'true',money:'150000' },
      { url: 'www.baidu.com' ,title: '君融贷 - 供应链-联想经销商融资',time: '10' ,profit:'9',ifdisplay:'true',money:'3000' },
    ]
  }
})

var set_filter=function(money,time,profit){
  for(item in wealth_result.wealth_contents){
    flag = false;
    switch(money)
    {
      case 0:
        flag = true;
        break;
      case 1:
        if(wealth_result.wealth_contents[item].money<=50000) flag=true;
        break;
      case 2:
        if(wealth_result.wealth_contents[item].money<=100000 && wealth_result.wealth_contents[item].money>50000) flag=true;
        break;
      case 3:
        if(wealth_result.wealth_contents[item].money<=200000 && wealth_result.wealth_contents[item].money>100000) flag=true;
        break;
      case 4:
        if(wealth_result.wealth_contents[item].money<=500000 && wealth_result.wealth_contents[item].money>200000) flag=true;
        break;
      case 5:
        if(wealth_result.wealth_contents[item].money>500000) flag=true;
        break;
    }
    if(!flag){
      wealth_result.wealth_contents[item].ifdisplay = false;
      continue;
    }
    flag = false;
    switch(time)
    {
      case 0:
        flag = true;
        break;
      case 1:
        if(wealth_result.wealth_contents[item].time<=1) flag=true;
        break;
      case 2:
        if(wealth_result.wealth_contents[item].time<=3 && wealth_result.wealth_contents[item].time>1) flag=true;
        break;
      case 3:
        if(wealth_result.wealth_contents[item].time<=6 && wealth_result.wealth_contents[item].time>3) flag=true;
        break;
      case 4:
        if(wealth_result.wealth_contents[item].time<=12 && wealth_result.wealth_contents[item].time>6) flag=true;
        break;
      case 5:
        if(wealth_result.wealth_contents[item].time>12) flag=true;
        break;
    }
    if(!flag){
      wealth_result.wealth_contents[item].ifdisplay = false;
      continue;
    }
    flag = false;
    switch(profit)
    {
      case 0:
        flag = true;
        break;
      case 1:
        if(wealth_result.wealth_contents[item].profit<=5) flag=true;
        break;
      case 2:
        if(wealth_result.wealth_contents[item].profit<=10 && wealth_result.wealth_contents[item].profit>5) flag=true;
        break;
      case 3:
        if(wealth_result.wealth_contents[item].profit<=15 && wealth_result.wealth_contents[item].profit>10) flag=true;
        break;
      case 4:
        if(wealth_result.wealth_contents[item].profit>15) flag=true;
        break;
    }
    if(!flag){
      wealth_result.wealth_contents[item].ifdisplay = false;
      continue;
    }
    wealth_result.wealth_contents[item].ifdisplay = true;
  }
};  