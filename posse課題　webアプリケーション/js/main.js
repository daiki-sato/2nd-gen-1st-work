'use strict'
{
  
  // labelクリック時、背景色を変える
  let checks = document.querySelectorAll('.check');
  // let checks = [3,4,5];
  checks.forEach(check => {
  console.log(check);
  
  check.addEventListener('toggle' , function() {
    check.classList.add('is-check');
    console.log(111111);
    });
  });



  // -------------------モーダル ------------------------ 
(function () {
  const modalArea = document.getElementById('modalArea');
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modalBg = document.getElementById('modalBg');
  const toggle = [openModal,closeModal,modalBg];
  
  for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  }
}());

// ----------------------loading----------------------------

// loading＿モーダル
(function () {
  const modalArea_3 = document.getElementById('modalArea_3');
  const openModal_3 = document.getElementById('openModal_2');
  const closeModal_3 = document.getElementById('closeModal_3');
  const modalBg_3 = document.getElementById('modalBg_3');
  const toggle_3 = [openModal_3,closeModal_3,modalBg_3];
  // 要素を取得
  const loading = document.querySelector( '.loading' );
  const koko = document.querySelector( '.koko' );
  
  for(let i=0, len=toggle_3.length ; i<len ; i++){
    toggle_3[i].addEventListener('click',function(){
      modalArea_3.classList.toggle('is-show');
    },false);
  }

  //クリックしたとき、.hideを取り除く (loading画面表示 )→5秒で非表示
  window.addEventListener( 'click', () => {
    loading.classList.add( 'hide' );
  }, false );

}());

// // 3000sでstopload()を発火
  //   $(function(){
  //     setTimeout('stopload()',3000);
  //   });
    
  //   // .hideを追加する loading画面非表示 
  //   function stopload() {
  //     loading.classList.add( 'hide' );
  //   }




//--------------------- 記録完了＿モーダル----------------------
// (function () {
//   const modalArea_2 = document.getElementById('modalArea_2');
//   const openModal_2 = document.getElementById('openModal_2');
//   const closeModal_2 = document.getElementById('closeModal_2');
//   const modalBg_2 = document.getElementById('modalBg_2');
//   const toggle_2 = [openModal_2,closeModal_2,modalBg_2];
  
//   for(let i=0, len=toggle_2.length ; i<len ; i++){
//     toggle_2[i].addEventListener('click',function(){
//       modalArea_2.classList.toggle('is-show');
//     },false);
//   }
// }());







// <!-- 円グラフ -->
  var myDoughnutElement = document.getElementById("myDoughnut");
  var myDoughnut = new Chart(myDoughnutElement, {
    type: 'doughnut', // チャートのタイプ
    data: { // チャートの内容
      labels: ["ドットインストール", "N予備校", "POSSE課題"],
      
      datasets: [{
        label: 'doughnut',
        lineTension: 0, // ベジェ曲線を無効化
        data: [14, 16, 6],
        backgroundColor: ['blue', '#3c68a3', '#52caf2'],
        borderWidth: 6
      }]
    },
    options: { // チャートのその他オプション
      // 設定なし
    }
  });

// <!-- 円グラフ -->
var myDoughnutElement = document.getElementById("myDoughnut2");
var myDoughnut = new Chart(myDoughnutElement, {
  type: 'doughnut', // チャートのタイプ
  data: { // チャートの内容
    labels: ["JavaScript", "CSS", "PHP","HTML","Laravel","SQL","SHELL","情報システム基礎知識(その他)"],
    
    datasets: [{
      label: 'doughnut',
      lineTension: 0, // ベジェ曲線を無効化
      data: [14, 16, 6,4,5,7,8,4],
      backgroundColor: ['blue', '#3c68a3', '#52caf2',"red","skyblue","#2f4d8e","#6d86bc","#37ccb8"],
      borderWidth: 5
    }],
  },
  options: { // チャートのその他オプション
    // 設定なし
  }
});


// <!-- 棒グラフ -->
var myBarElement = document.getElementById("myBar");
var myBar = new Chart(myBarElement, {
  type: 'bar', // チャートのタイプ
  data: { // チャートの内容
    labels: ["2", "4", "6", "8", "10", "12","14","16","18","20","22","24","26","28","30"],
    datasets: [{
      // label: '',
      data: [12, 9, 3, 5, 2,  3, 5, 2, 6, 9, 3, 5, 2, 3,5],
      backgroundColor: '#2CA7E3',
      borderColor: '#2CA7E3',
      borderWidth: 1
    }]
  },
  options: { // チャートのその他オプション
    scales: {
      yAxes: [{
        display: true,             //表示設定
        scaleLabel: {              //軸ラベル設定
          display: true,          //表示設定
          labelString: '',  //ラベル
          fontSize: 18               //フォントサイズ
        },
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});





}
