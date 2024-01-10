
//Bài 1
var diemTong = 0
document.getElementById('btnTinhDiem').onclick = function(){
  var diemChuan = document.getElementById('txt-diemChuan').value*1
  console.log(diemChuan)
  var diemToan = document.getElementById('txt-diemToan').value*1
  console.log(diemToan)
  var diemLy = document.getElementById('txt-diemLy').value*1
  console.log(diemLy)
  var diemHoa = document.getElementById('txt-diemHoa').value*1
  console.log(diemHoa)
  var khuVuc = document.getElementById('txt-khuVuc').value
  console.log(khuVuc)
  var doiTuong = document.getElementById('txt-doiTuong').value
  console.log(doiTuong)
  diemTong = diemToan+diemHoa+diemLy
  if(diemToan*diemHoa*diemLy == 0){
    return document.getElementById('ketQuaBai1').innerHTML = 'Bạn đã rớt do có điểm bằng 0'
  }
  if(khuVuc == 'A'){
    diemTong += 2
  }else if(khuVuc == 'B'){
    diemTong += 1
  }else if(khuVuc == 'C'){
    diemTong += 0.5
  }
  if(doiTuong == '1'){
    diemTong += 2.5
  }else if(doiTuong == '2'){
    diemTong += 1.5
  }else if(doiTuong == '3'){
    diemTong += 1
  }
  if(diemTong>=diemChuan){
    document.getElementById('ketQuaBai1').innerHTML = `Bạn đã đậu với tổng điểm là ${diemTong}`
  }else{
    document.getElementById('ketQuaBai1').innerHTML = `Bạn đã rớt với tổng điểm là ${diemTong}`
  }
}

//Bài 2
document.querySelector(".btnKetQuaBai2").onclick = function () {
  var ten = document.getElementById('txt-ten').value
  console.log(ten)
  var soDien = document.getElementById('txt-soDien').value*1
  console.log(soDien)
  var soTien = 0
  var tienDien1 = 500
  var tienDien2 = 650
  var tienDien3 = 850
  var tienDien4 = 1100
  var tienDien5 = 1300

  if(soDien<=50){
    soTien = tienDien1*soDien
  }else if(soDien>50 && soDien<=100){
    soTien = tienDien1*50+tienDien2*(soDien-50)
  }else if(soDien>100 && soDien<=150){
    soTien = tienDien1*50+tienDien2*50+tienDien3*(soDien-100)
  }else if(soDien>150 && soDien<=200){
    soTien = tienDien1*50+tienDien2*50+tienDien3*50+tienDien4*(soDien-150)
  }
  // Đề bài cho tiền điện còn lại là 1300 chứ ko nói là trên ba0 nhiêu kw thì tính là 1300 nên giả sử từ 200kw trờ lên thì tính 1300/kw
  else{
    soTien = tienDien1*50+tienDien2*50+tienDien3*50+tienDien4*50+tienDien5*(soDien-200)
  }
  console.log(soTien)
  document.getElementById('ketQuaBai2').innerHTML = `Số tiền điện của ${ten} cần thanh toán là ${soTien.toLocaleString({
    style: 'currency',
    currency: 'VND',
  }) + ' VNĐ'}`
  document.getElementById('ghiChu').innerHTML = `Đề bài cho tiền điện còn lại là 1300 chứ ko nói là trên bao nhiêu kw thì tính là 1300 nên giả sử từ 200kw trờ lên thì tính 1300/kw`
}

//Bài 3
const den60 = (60e+6)*5/100
const tren60den120 =den60 + (120e+6-60e+6)*10/100 
const tren120den210 =den60+tren60den120+ (210e+6-120e+6)*15/100 
const tren210den384 = den60+tren60den120+tren120den210+ (384e+6-210e+6)*20/100
const tren384den624 = den60+tren60den120+tren120den210+tren210den384+ (-384e+6+624e+6)*25/100
console.log(tren384den624)
const tren624den960 = den60+tren60den120+tren120den210+tren210den384+ tren384den624+(-624e+6+960e+6)*30/100
console.log(tren624den960)
document.querySelector(".btnKetQuaBai3").onclick = function () {
  var tongThuNhap = document.getElementById('txt-tongThuNhap').value*1
  console.log(tongThuNhap)
  var soNguoi = document.getElementById('txt-soNguoi').value*1
  console.log(soNguoi)
  var thuNhapChiuThue = 0
  var thueTNCN = 0
  thuNhapChiuThue = tongThuNhap-4e+6-Math.abs(soNguoi)*1.6e+6
  if(thuNhapChiuThue<=0){
     return document.getElementById('ketQuaBai3').innerHTML = `Với tổng thu nhập ${tongThuNhap.toLocaleString({
      style: 'currency',
      currency: 'VND',
    }) + ' VNĐ'} bạn chưa cần phải đóng thuế thu nhập cá nhân`
  }else if(thuNhapChiuThue>0 && thuNhapChiuThue<=60e+6){
    thueTNCN = thuNhapChiuThue*5/100
  }else if(thuNhapChiuThue>60e+6 && thuNhapChiuThue<=120e+6){
    thueTNCN = den60 + (thuNhapChiuThue-60e+6)*10/100
  }else if(thuNhapChiuThue>120e+6 && thuNhapChiuThue<=210e+6){
    thueTNCN = tren60den120 + (thuNhapChiuThue-120e+6)*15/100
  }else if(thuNhapChiuThue>210e+6 && thuNhapChiuThue<=384e+6){
    thueTNCN = tren120den210 + (thuNhapChiuThue-210e+6)*20/100
  }else if(thuNhapChiuThue>384e+6 && thuNhapChiuThue<624e+6){
    thueTNCN = tren210den384 + (thuNhapChiuThue-384e+6)*25/100
  }else if(thuNhapChiuThue>624e+6 && thuNhapChiuThue<=960e+6){
    thueTNCN = tren384den624 + (thuNhapChiuThue-624e+6)*30/100
  }else{
    thueTNCN = tren624den960 + (thuNhapChiuThue-960e+6)*35/100
  }
  document.getElementById('ketQuaBai3').innerHTML = `Tiền thuế thu nhập cá nhân bạn cần phải nộp là ${thueTNCN.toLocaleString({
    style: 'currency',
    currency: 'VND',
  }) + ' VNĐ'} `
  document.getElementById('txt-thuNhapChiuThue').value =
  document.getElementById('txt-thuNhapChiuThue').innerHTML = `${thuNhapChiuThue.toLocaleString({
    style: 'currency',
    currency: 'VND',
  }) + ' VNĐ'}`
}


//Bài 4
function hienThiSoKetNoi(){
  var khachHang = document.getElementById('txt-khachHang').value
  var hienThiSoKetNoi = document.getElementById('hienThiSoKetNoi')
  if(khachHang == 'Doanh nghiệp'){
    hienThiSoKetNoi.classList.remove('d-none')
  }else{
    hienThiSoKetNoi.classList.add('d-none')
  }
}
document.querySelector(".btnKetQuaBai4").onclick = function () {
  var tongTienCap = 0
  var ketQua = document.getElementById('ketQuaBai4')
  var soKenh = document.getElementById('txt-soKenh').value*1
  var khachHang = document.getElementById('txt-khachHang').value
  var soKetNoi = document.getElementById('txt-soKetNoi').value*1
  if(khachHang == 'Doanh nghiệp' && soKetNoi<=10){
    tongTienCap =15+75+soKenh*50
    ketQua.style.display='inline-block'
  }else if(khachHang == 'Doanh nghiệp' && soKetNoi>10){
    tongTienCap =15+soKenh*50+75+5*(soKetNoi-10)
    ketQua.style.display='inline-block'
  }else if(khachHang == 'Nhà dân'){
    tongTienCap = 4.5+20.5+7.5*soKenh
    ketQua.style.display='inline-block'
  }else{
    var overLay = document.getElementById('overLay')
    var popUp = document.getElementById('popUp')
    overLay.classList.remove('d-none')
    popUp.classList.remove('d-none')
    ketQua.style.display='none'
  }
  ketQua.innerHTML = `Số tiền cáp cần thanh toán là $${tongTienCap}`
}
function dongPopup() {
  var overLay = document.getElementById('overLay')
  var popUp = document.getElementById('popUp')
  overLay.classList.add('d-none')
  popUp.classList.add('d-none')
}
