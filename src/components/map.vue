<template>
    <div class="main-container">
      <img class="bg-img" src="../assets/image/bg.jpg"/>
<<<<<<< HEAD
      <div class="to-see-info">查看景点信息</div>
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      <div class="search-wrapper">
        <input type="text" class="search-input" :class="{'show-input':showInput}" v-model="searchVal"/>
        <span class="search" @click="setSearchInput" ><span class="icon iconfont icon-sousuo"></span></span>
      </div>
      <div class="map-wrapper">
        <div id="mapContainer"></div>
      </div>
      <div class="left-nav">
          <ul :class="{openLeftList:showLeft}">
            <li>111</li>
            <li>223</li>
            <li>333</li>
          </ul>
<<<<<<< HEAD
        <span class="extend" @click="showLeft=!showLeft">
          <span class="icon iconfont " :class="showLeft?'icon-xiangzuo':'icon-xiangyou'"></span>
        </span>
=======
        <span class="extend" @click="showLeft=!showLeft"></span>
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      </div>
      <div class="right-nav">
        <ul class="icon-class">
          <li v-for="(item,index) in iconclass" :class="{'select-icon':item.show}" @click="selectLabel(item)"><span class="icon iconfont " :class="item.icon"></span></li>
        </ul>
      </div>
      <div class="btn-wrapper">
        <span class="save">存稿</span>
        <span class="submit">提交</span>
      </div>
    </div>
</template>

<script>
export default {
  // name: '',
  data () {
    return {
      points:[],
      showLeft:false,
      showInput:false,
      searchVal:'',
      selectedOverlay:[],
      selectedOverlayPoint:[],
      overlayPointArr:[],
<<<<<<< HEAD
      bg:require('../assets/image/bg.jpg'),
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      infoImg: require('../assets/image/info-img.png'),
      infoTriangle: require('../assets/image/triangle.png'),
      iconclass:[
        {name:'酒店',icon:'icon-Hotel',show:false,markername:'markerHotel'},
        {name:'餐饮',icon:'icon-leicanyinzhusux',show:false,markername:'markerRest'},
        {name:'特产',icon:'icon-tutechan',show:false,markername:'markerSpec'},
        {name:'门票',icon:'icon-menpiao1',show:false,markername:'markerTicket'},
      ],
      marker:{
        markerHotel:[],
        markerRest:[],
      },
      markerAll:{},
      lineLabel:[],
      curMarker:{}
    }
  },
  methods:{
    //右侧选择类型
    selectLabel(item){
      if(item.show){
<<<<<<< HEAD
        item.show=!item.show
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
        this.markerAll[item.markername].forEach((mark)=>{
          if(mark.label.selected==false){
            map.removeOverlay(mark.marker);
            mark.selected=false
          }
        })
      }else{
<<<<<<< HEAD
        item.show=!item.show
        this.markerAll[item.markername].forEach((mark)=>{
          if(mark.label.selected==false){
            mark.selected=true
            this.showMarker(mark.marker,mark.label,mark.markername,mark.selected,mark.img,item.show)
          }
        })
      }

=======
        this.markerAll[item.markername].forEach((mark)=>{
          if(mark.label.selected==false){
            mark.selected=true
            this.showMarker(mark.marker,mark.label,mark.markername,mark.selected,mark.img)
          }
        })
      }
      item.show=!item.show
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
    },
    createMap(){
      let map = new BMap.Map("mapContainer");
      let point = new BMap.Point(120.210731,30.206723);
<<<<<<< HEAD
      map.centerAndZoom(point, 14);
=======
      map.centerAndZoom(point, 15);
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      window.map = map;
      this.map=map
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      let styleJson=[
          {
          "featureType": "background",
          "elementType": "geometry",
          "stylers": {
            "color": "#94c3e5ff"
          }
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": {
            "color": "#1a8fe0ff"
          }
        }
      ]
      let top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
      map.setMapStyle({styleJson:styleJson});
      map.addControl(top_right_navigation);
      this.addMarker()
    },
    addMarker(){
        this.marker={
         markerHotel:[
            {
              point:"120.210731|30.206723",
              icon:require("../assets/image/hotel.png"),
              type:'酒店',
              name:'酒店名',
              price:'150',
              img:require("../assets/image/fh_login_bg.png")
            },{
              point:"120.250831|30.236723",
              icon:require("../assets/image/hotel.png"),
              type:'酒店',
              name:'酒店名',
              price:'150',
             img:require("../assets/image/bg.jpg")
            }
          ],
         markerRest:[
            {
              point:"120.220731|30.226723",
              icon:require("../assets/image/hotel.png"),
              type:'餐饮',
              name:'餐饮名',
              price:'150',
              img:require("../assets/image/fh_login_bg.png")

            },{
              point:"120.230831|30.216723",
              icon:require("../assets/image/hotel.png"),
              type:'餐饮',
              name:'餐饮名',
              price:'150',
             img:require("../assets/image/fh_login_bg.png")
            }
          ],
         markerSpec:[
          {
            point:"120.270731|30.221723",
            icon:require("../assets/image/hotel.png"),
            type:'特产',
            name:'特产名',
            price:'150',
            img:require("../assets/image/fh_login_bg.png")

          },{
            point:"120.223831|30.243723",
            icon:require("../assets/image/hotel.png"),
            type:'特产',
            name:'特产名',
            price:'150',
             img:require("../assets/image/fh_login_bg.png")
          }
        ],
         markerTicket:[
          {
            point:"120.250731|30.16723",
            icon:require("../assets/image/hotel.png"),
            type:'门票',
            name:'门票名',
            price:'150',
            img:require("../assets/image/fh_login_bg.png")

          },{
            point:"120.210831|30.216723",
            icon:require("../assets/image/hotel.png"),
            type:'门票',
            name:'门票名',
            price:'150',
            img:require("../assets/image/fh_login_bg.png")
          }
        ]
        }
        for(let key in this.marker){
          this.setMarker(this.marker[key],key)
        }
        let t=setTimeout(function () {
          let anchorBL=document.getElementsByClassName('anchorBL')
          for(let i=0;i<anchorBL.length;i++){
            anchorBL[i].style.display='none'
          }
        },200)
    },
<<<<<<< HEAD
    showMarker(marker,label,markerName,selected,img,show){
=======
    showMarker(marker,label,markerName,selected,img){
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      let vm=this
      let startpoint,endpoint,searchRoute,driving
      let onPolylinesSet,onMarkersSet
        marker.setLabel(label);
      if(selected){     //点位所在标签被选中，渲染点位
        map.addOverlay(marker);
      }
        label.setStyle({
          border:"none",
          backgroundColor:"transparent",
          transition: 'all .3s',
          transform:'scale(1)'
        });
        if(vm.markerAll[markerName]){
          vm.markerAll[markerName].push({"marker":marker,'label':label,selected:selected,img:img})
        }else{
          vm.markerAll[markerName]=[]
          vm.markerAll[markerName].push({"marker":marker,'label':label,selected:selected,img:img})
        }
      let setLabel=function () {
<<<<<<< HEAD

=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
        //  label被选中
        if(!label.selected){
          label.V.getElementsByClassName('label')[0].style.background='#f00'
          label.V.getElementsByClassName('label')[0].style.color='#fff'
          label.setStyle({
            border:"none",
            backgroundColor:"transparent",
            transition: 'all .3s',
            transform:'scale(1.1)'
          });
          vm.lineLabel.push({marker,label,markerName,img})
          if(vm.lineLabel.length>=2){
            startpoint = new BMap.Point(vm.lineLabel[vm.lineLabel.length-2].label.point.lng, vm.lineLabel[vm.lineLabel.length-2].label.point.lat);
            endpoint = new BMap.Point(vm.lineLabel[vm.lineLabel.length-1].label.point.lng, vm.lineLabel[vm.lineLabel.length-1].label.point.lat);
<<<<<<< HEAD
            driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: false},
=======
            driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
              onPolylinesSet:function(routes) {
                searchRoute = routes[0].getPolyline();//导航路线
                map.addOverlay(searchRoute);
              },
              onMarkersSet:function(routes) {
                map.removeOverlay(routes[0].marker); //删除起点
                map.removeOverlay(routes[1].marker);//删除终点
              }});
            driving.search(startpoint, endpoint);
          }
          label.selected=!label.selected
        }
        //  label被取消
        else{
          label.selected=!label.selected
          map.clearOverlays()
          //重新渲染点位
          for(let key in vm.markerAll){
<<<<<<< HEAD
            console.log(vm.markerAll[key])
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
            vm.markerAll[key].forEach((item)=>{
              item.marker.setLabel(item.label);
              map.addOverlay(item.marker);
              if(item.selected==true){
                item.label.V.getElementsByClassName('label')[0].style.background='#fff'
                item.label.V.getElementsByClassName('label')[0].style.color='#000'
                item.label.setStyle({
                  border:"none",
                  backgroundColor:"transparent",
                  transition: 'all .3s',
                  transform:'scale(1)'
                });
                if(item.label.selected==true){
                  item.label.V.getElementsByClassName('label')[0].style.background='#f00'
                  item.label.V.getElementsByClassName('label')[0].style.color='#fff'
                  item.label.setStyle({
                    border:"none",
                    backgroundColor:"transparent",
                    transition: 'all .3s',
                    transform:'scale(1.1)'
                  });
                }
              }
              //点位所在标签未被选择，清除
              else{
                map.removeOverlay(item.marker);
              }
            })
          }
          //删除路线中被取消的点位
          vm.lineLabel.forEach((item,index)=>{
            if(label==item.label){
              vm.lineLabel.splice(index,1)
            }
          })
          //重新渲染路线
          vm.lineLabel.forEach((item,index)=>{
            if(index>0){
              startpoint = new BMap.Point(vm.lineLabel[index].label.point.lng, vm.lineLabel[index].label.point.lat);
              endpoint = new BMap.Point(vm.lineLabel[index-1].label.point.lng, vm.lineLabel[index-1].label.point.lat);
<<<<<<< HEAD
              driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: false},
=======
              driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
                onPolylinesSet:function(routes) {
                  searchRoute = routes[0].getPolyline();//导航路线
                  map.addOverlay(searchRoute);
                },
                onMarkersSet:function(routes) {
                  map.removeOverlay(routes[0].marker); //删除起点
                  map.removeOverlay(routes[1].marker);//删除终点
                }});
              driving.search(startpoint, endpoint);
            }
          })
        }
        //修改背景
<<<<<<< HEAD
        if(vm.lineLabel.length>0){
          document.getElementsByClassName('bg-img')[0].setAttribute('src',vm.lineLabel[vm.lineLabel.length-1].img)
        }else{
          document.getElementsByClassName('bg-img')[0].setAttribute('src',vm.bg)
        }

=======
        document.getElementsByClassName('bg-img')[0].setAttribute('src',vm.lineLabel[vm.lineLabel.length-1].img)
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      }
        // label.addEventListener('click',setLabel,false)
        label.onclick=setLabel
    },
    setMarker(markerArr,markerName){
      let vm=this
      for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = this.createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var label = new BMap.Label('<div class="info-window" style="position: relative;background: #fff;text-align: left;cursor: pointer;width: 110px;padding-bottom: 5px;">\n' +
          '        <img src="'+ json.img +'" style="height: 60px;width: 110px"/>\n' +
          '        <div class="label" style="position: absolute;top: -8px;left: 15px;font-size: 14px;background: #fff;padding: 11px 8px 8px 8px;">'+ json.type+'</div>\n' +
          '        <div class="info-name" style="margin: 5px;">'+ json.name+'</div>\n' +
          '        <div class="info-price" style="margin: 5px;">价格 '+json.price+ '</div>\n' +
          '        <div class="triangle" style="position: absolute;bottom: -32px;">\n' +
          '          <img src="'+ vm.infoTriangle +'"/>\n' +
          '        </div>\n' +
          '      </div>',{"offset":new BMap.Size(-50,-115)});
        label.selected=false
<<<<<<< HEAD
        this.showMarker(marker,label,markerName,false,json.img,false)
=======
        this.showMarker(marker,label,markerName,false,json.img)
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
      }
    },
    createIcon(image){
      var icon = new BMap.Icon(image,
        new BMap.Size(),{
          imageOffset: new BMap.Size(0,0),
          infoWindowOffset:new BMap.Size(0,0),
          offset:new BMap.Size(0,0)})
      return icon;
    },
    setSearchInput(){
      if(this.showInput==false){
        this.showInput=true
      }else{
        if(this.searchVal==''){
          this.showInput=false
        }else{

        }
      }
    }
  },
  mounted(){
    this.createMap()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    font-size: .16rem;
  }
  ul,li{
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
    text-align: left;
  }
  .main-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .bg-img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
<<<<<<< HEAD
  .to-see-info{
    position: absolute;
    top: 5%;
    left: 5%;
    background: #fff;
    border-radius: 5px;
    padding: 5px 9px;
    box-shadow: 0 0 5px rgba(255,255,255,1);
    font-size: .14rem;
    cursor: pointer;
  }
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
  .search-wrapper{
    position: absolute;
    right: 10%;
    top: 6%;
  }
  .search-input{
    height: 34px;
    width: 0;
    padding:0;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    box-sizing: border-box;
    background-color: #fff;
    background-image: none;
    border: none;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .show-input{
    width: 400px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    display: inline-block;
    vertical-align: top;
  }
  .search{
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
    outline: none;
    cursor: pointer;
    height: 34px;
    line-height: 34px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }
  .icon-sousuo{
    display: inline-block;
    vertical-align: top;
  }
  .map-wrapper{
    position: absolute;
    top: 15%;
    left: 10%;
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%,-50%);*/
    height: 80%;
    width: 80%;
  }
  #mapContainer{
    height: 100%;
    width: 100%;
    /*display: none;*/
  }
  .left-nav{
    position: absolute;
    left: 0;
    top: 10%;
    bottom: 10%;
  }
  .left-nav ul{
    width: 0;
    background: #fff;
    height: 100%;
    overflow: hidden;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .extend{
    position: absolute;
    right: -25px;
    top: 37%;
    height: 103px;
<<<<<<< HEAD
    line-height: 103px;
=======
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
    width: 25px;
    background: #fff;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
  }

  .left-nav .openLeftList{
    width: 230px;
    border-radius: 0 5px 5px 0;
  }
  .icon-class{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
  }
  .icon-class li{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .icon-class li:nth-child(1){
    background: rgba(255,0,0,0.5);
    margin-bottom: 10px;
  }
  .icon-class li:nth-child(2){
    background: rgba(16,37,117,0.8);
    margin-bottom: 10px;
  }
  .icon-class li:nth-child(3){
    background: rgba(16,126,37,0.8);
    margin-bottom: 10px;
  }
  .icon-class li:nth-child(4){
    background: rgba(201,193,69,0.8);
  }
<<<<<<< HEAD
  .select-icon{
    margin-left: -10px;
  }
=======
  /*.select-icon{*/
    /*width: 50px;*/
  /*}*/
>>>>>>> 75a5ca3335432b32e1f1fcfad9e80541d90e5622
  .btn-wrapper{
    position: fixed;
    top: 16%;
    right: 11%;
  }
  .btn-wrapper>span{
    color: #333;
    background-color: rgba(255,255,255,0.7);
    border-color: #ccc;
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
  }
  .info-window{
    position: fixed;
    top: 300px;
    left: 300px;
    background: #fff;
    text-align: left;
    cursor: pointer;
  }
  .triangle{
    height: 0;
    width: 0;
  }
  .label{
    position: absolute;top: -8px;left: 15px;font-size: 14px;background: #fff;padding: 22px 8px 8px 8px;
  }
  .info-name,
  .info-price{
    margin: 5px;
  }
  .info-price{
    margin-bottom: 30px;
  }
  .BMapLabel .selectedLabel{
    background: red;
    color: #fff;
  }
  .anchorBL {
    display:none
  }

</style>
