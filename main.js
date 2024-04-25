// const PI = 3.14

// let angka = 5

// //console.log(PI)
// //console.log(angka)

// angka = 7

// //PI = 4

// //console.log(angka)

// // let nama = "Bagus"

// //console.log(nama)

// let perempuan = false

// //console.log(perempuan)

// //console.log(typeof(PI))
// //console.log(typeof(angka))
// //console.log(typeof(nama))
// //console.log(typeof(perempuan))

// // let data = null

// // console.log(data)
// // console.log(typeof(data))

// // let variable

// // console.log(variable)
// // console.log(typeof(variable))

// // // FUNGSI
// // function f(x){
// //     return 5 + x
// // }

// // f(5)

// // console.log(f(5))
// // console.log(f(7))

// // function f(x,y){
// //     return 10/x+y
// // }

// // console.log(f(2,3))
// // console.log(f(5,3))


// IF ELSE
// let nama = 'bagus'

// nama = 'bagus'

// if(nama === 'bagus'){
//     console.log('Hasilnya adalah WebGIS')
// } else if(nama === 'faiz'){
//     console.log('Hasilnya adalah LEMARI')
// } else{
//     console.log('Hasilnya tidak ada')
// }

// const angka1 = 5
// const angka2 = 7-2

// console.log(angka1 <= angka2)


// LOOP
// let percobaan = 1

// if(percobaan <= 3){
//     console.log('Anda bisa login')
//     percobaan = percobaan + 1
//     console.log('Percobaan ke-' +percobaan)
// } else{
//     console.log('Tunggu selama 5 menit')
// }

// while(percobaan < 10){
//     console.log('Anda bisa login')
//     percobaan = percobaan + 1
//     console.log('Percobaan ke-' + percobaan)
// }

// if(percobaan >= 10){
//     console.log('Mohon tunggu selama 5 menit')
// }

// const nama = 'BAGUS'

// for(let i=0; i <nama.length; i++){
//     console.log(nama[i])
// }


// ARRAY & OBJECT

// const siswa = ['faiz', 'bagus', 'zainal']
// console.log(siswa[1])

// const lokasi = [
//     [2, 5],
//     [4, 7],
//     [6, 3]
// ]

// console.log(lokasi[1][0])

// const rumah = {
//     pemilik: 'bagus',
//     harga: 500000000,
//     lokasi: [100, 5]
// }
// console.log(rumah.pemilik)

// ALGORITMA WEBGIS
// Konfigurasi tampilan peta
const settingPeta = {
    center: [0, 110],
    zoom: 5
}
const peta = L.map('peta', settingPeta)

// Konfigurasi Basemap
const urlBasemap = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
const settingBasemap = {
    attribution: 'OpenStreetMap'
}
const basemap = L.tileLayer(urlBasemap, settingBasemap)
basemap.addTo(peta)

const urlBasemap2 = 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
const settingBasemap2 = {
    attribution: 'ESRI'
}
const basemap2 = L.tileLayer(urlBasemap2, settingBasemap2)
basemap2.addTo(peta)

// Konfigurasi Layer
const LRTDukuhAtas = L.marker([-6.2077703, 106.8195632])
LRTDukuhAtas.addTo(peta)
LRTDukuhAtas.bindPopup('<img src=https://awsimages.detik.net.id/visual/2023/08/28/penumpang-menunggu-kedatangan-lrt-jabodebek-di-stasiun-dukuh-atas-jakarta-senin-2882023-lrt-jabodebek-yang-diresmikan-oleh-pre-4_169.jpeg?w=650" alt="" height="50">')

const TanahAbang = L.marker([-6.1879419, 106.811456])
TanahAbang.addTo(peta)

const tankus = L.marker([-6.2526403,106.7708334])
tankus.addTo(peta)

const settingPolygon = {
color: 'orange'
}
const polygon = L.polygon([
    [-6.2077703, 106.8195632],
    [-6.1879419, 106.811456],
    [-6.2526403,106.7708334]
], settingPolygon)
polygon.addTo(peta)


fetch('./data/lokasi1.geojson')
.then(response=>response.json())
.then(json=>L.geoJSON(json).addTo(peta))

// Konfigurasi Layer Grup & Kontrol
const kota = L.layerGroup([LRTDukuhAtas, TanahAbang, tankus])

const toogleBasemap = {
    OSM: basemap,
    ESRI: basemap2
}

const toogleLayer = {
    kota: kota,
    polygon: polygon
}

const layerControl = L.control.layers(toogleBasemap, toogleLayer)
layerControl.addTo(peta)