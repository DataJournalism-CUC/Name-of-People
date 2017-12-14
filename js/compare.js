document.write("<script language='javascript' src='echarts.js'></script>");

var myChart5 = echarts.init(document.getElementById('compare'),'dark');
//app.title = '极坐标系下的堆叠柱状图';



function getVirtulData1(year) {
    year = year || '2011';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
        
    ['2011-02-01', 850],
    ['2011-02-02', 674],
    ['2011-02-03', 539],
    ['2011-02-04', 733],
    ['2011-02-05', 12297],
    ['2011-02-06', 40679],
    ['2011-02-07', 48578],
    ['2011-02-08', 54772],
    ['2011-02-09', 96205],
    ['2011-02-10', 102789],
    ['2011-02-11', 103757],
    ['2011-02-12', 97852],
    ['2011-02-13', 100583],
    ['2011-02-14', 89073],
    ['2011-02-15', 88907],
    ['2011-02-16', 80712],
    ['2011-02-17', 94967],
    ['2011-02-18', 118549],
    ['2011-02-19', 87892],
    ['2011-02-20', 73151],
    ['2011-02-21', 128039],
    ['2011-02-22', 326328],
    ['2011-02-23', 467028],
    ['2011-02-24', 557269],
    ['2011-02-25', 682108],
    ['2011-02-26', 634606],
    ['2011-02-27', 546583],
    ['2011-02-28', 647328],
    ['2011-03-01', 679647],
    ['2011-03-02', 722011],
    ['2011-03-03', 832780],
    ['2011-03-04', 927474],
    ['2011-03-05', 1058703],
    ['2011-03-06', 1168691],
    ['2011-03-07', 1077486],
    ['2011-03-08', 1140268],
    ['2011-03-09', 1410598],
    ['2011-03-10', 1542835],
    ['2011-03-11', 1667931],
    ['2011-03-12', 1742243],
    ['2011-03-13', 1517508],
    ['2011-03-14', 1435888],
    ['2011-03-15', 1425879],
    ['2011-03-16', 1387182],
    ['2011-03-17', 1326481],
    ['2011-03-18', 1486980],
    ['2011-03-19', 1512614],
    ['2011-03-20', 1578147],
    ['2011-03-21', 1399043],
    ['2011-03-22', 1384305],
    ['2011-03-23', 1389919],
    ['2011-03-24', 1416821],
    ['2011-03-25', 1540462],
    ['2011-03-26', 1505361],
    ['2011-03-27', 1406989],
    ['2011-03-28', 1256763],
    ['2011-03-29', 1273097],
    ['2011-03-30', 1271097],
    ['2011-03-31', 1242797],
    ['2011-04-01', 1164503],
    ['2011-04-02', 1014631],
    ['2011-04-03', 627697],
    ['2011-04-04', 487534],
    ['2011-04-05', 423387],
    ['2011-04-06', 313609],
    ['2011-04-07', 264596],
    ['2011-04-08', 247692],
    ['2011-04-09', 249391],
    ['2011-04-10', 228790],
    ['2011-04-11', 181879],
    ['2011-04-12', 169573],
    ['2011-04-13', 159086],
    ['2011-04-14', 155626],
    ['2011-04-15', 167199],
    ['2011-04-16', 186743],
    ['2011-04-17', 180809],
    ['2011-04-18', 133395],
    ['2011-04-19', 133660],
    ['2011-04-20', 137061],
    ['2011-04-21', 142215],
    ['2011-04-22', 148899],
    ['2011-04-23', 161342],
    ['2011-04-24', 165818],
    ['2011-04-25', 139022],
    ['2011-04-26', 135609],
    ['2011-04-27', 122564],
    ['2011-04-28', 111913],
    ['2011-04-29', 130112],
    ['2011-04-30', 154552]

        ];
    
    
    return data;
    
}

function getVirtulData2(year) {
    year = year || '2015';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
        
    ['2015-08-01', 1550],
    ['2015-08-02', 1601],
    ['2015-08-03', 2252],
    ['2015-08-04', 2155],
    ['2015-08-05', 5488],
    ['2015-08-06', 3064],
    ['2015-08-07', 2317],
    ['2015-08-08', 4290],
    ['2015-08-09', 12825],
    ['2015-08-10', 19918],
    ['2015-08-11', 31030],
    ['2015-08-12', 25053],
    ['2015-08-13', 18557],
    ['2015-08-14', 19871],
    ['2015-08-15', 18800],
    ['2015-08-16', 26329],
    ['2015-08-17', 28797],
    ['2015-08-18', 26178],
    ['2015-08-19', 23640],
    ['2015-08-20', 18213],
    ['2015-08-21', 18637],
    ['2015-08-22', 21516],
    ['2015-08-23', 23627],
    ['2015-08-24', 23051],
    ['2015-08-25', 23190],
    ['2015-08-26', 21563],
    ['2015-08-27', 18548],
    ['2015-08-28', 21618],
    ['2015-08-29', 41066],
    ['2015-08-30', 76087],
    ['2015-08-31', 209090],
    ['2015-09-01', 479025],
    ['2015-09-02', 476411],
    ['2015-09-03', 622705],
    ['2015-09-04', 790188],
    ['2015-09-05', 765846],
    ['2015-09-06', 570430],
    ['2015-09-07', 534583],
    ['2015-09-08', 505750],
    ['2015-09-09', 539967],
    ['2015-09-10', 577436],
    ['2015-09-11', 634657],
    ['2015-09-12', 676446],
    ['2015-09-13', 726866],
    ['2015-09-14', 661769],
    ['2015-09-15', 662815],
    ['2015-09-16', 631308],
    ['2015-09-17', 664660],
    ['2015-09-18', 656900],
    ['2015-09-19', 674848],
    ['2015-09-20', 734052],
    ['2015-09-21', 764683],
    ['2015-09-22', 799974],
    ['2015-09-23', 865511],
    ['2015-09-24', 832635],
    ['2015-09-25', 826815],
    ['2015-09-26', 854269],
    ['2015-09-27', 847186],
    ['2015-09-28', 883586],
    ['2015-09-29', 870174],
    ['2015-09-30', 507116],
    ['2015-10-01', 401224],
    ['2015-10-02', 291331],
    ['2015-10-03', 262259],
    ['2015-10-04', 257303],
    ['2015-10-05', 287852],
    ['2015-10-06', 284137],
    ['2015-10-07', 271544],
    ['2015-10-08', 189838],
    ['2015-10-09', 172741],
    ['2015-10-10', 169544],
    ['2015-10-11', 182324],
    ['2015-10-12', 154810],
    ['2015-10-13', 155683],
    ['2015-10-14', 149785],
    ['2015-10-15', 151827],
    ['2015-10-16', 163941],
    ['2015-10-17', 185158],
    ['2015-10-18', 191154],
    ['2015-10-19', 177824],
    ['2015-10-20', 170933],
    ['2015-10-21', 164566],
    ['2015-10-22', 163427],
    ['2015-10-23', 160261],
    ['2015-10-24', 170859],
    ['2015-10-25', 172791],
    ['2015-10-26', 154711],
    ['2015-10-27', 142860],
    ['2015-10-28', 137763],
    ['2015-10-29', 135048],
    ['2015-10-30', 130590],
    ['2015-10-31', 122490]
        ];
    
    
    return data;
    
}

function getVirtulData3(year) {
    year = year || '2015';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
        
    ['2015-11-01', 25868],
    ['2015-11-02', 32893],
    ['2015-11-03', 36179],
    ['2015-11-04', 42107],
    ['2015-11-05', 37322],
    ['2015-11-06', 116551],
    ['2015-11-07', 90651],
    ['2015-11-08', 60591],
    ['2015-11-09', 36176],
    ['2015-11-10', 73772],
    ['2015-11-11', 69134],
    ['2015-11-12', 110169],
    ['2015-11-13', 131797],
    ['2015-11-14', 119392],
    ['2015-11-15', 123114],
    ['2015-11-16', 114045],
    ['2015-11-17', 111678],
    ['2015-11-18', 116666],
    ['2015-11-19', 129674],
    ['2015-11-20', 151218],
    ['2015-11-21', 136957],
    ['2015-11-22', 173701],
    ['2015-11-23', 167469],
    ['2015-11-24', 189010],
    ['2015-11-25', 185072],
    ['2015-11-26', 183326],
    ['2015-11-27', 199358],
    ['2015-11-28', 211174],
    ['2015-11-29', 444938],
    ['2015-11-30', 1571938],
    ['2015-12-01', 4191490],
    ['2015-12-02', 4072969],
    ['2015-12-03', 3951716],
    ['2015-12-04', 3848066],
    ['2015-12-05', 3814513],
    ['2015-12-06', 3570646],
    ['2015-12-07', 3418417],
    ['2015-12-08', 3516396],
    ['2015-12-09', 3697851],
    ['2015-12-10', 3816286],
    ['2015-12-11', 3840806],
    ['2015-12-12', 4191071],
    ['2015-12-13', 3963259],
    ['2015-12-14', 3374779],
    ['2015-12-15', 3131404],
    ['2015-12-16', 3001160],
    ['2015-12-17', 2893380],
    ['2015-12-18', 2839462],
    ['2015-12-19', 2830711],
    ['2015-12-20', 2865779],
    ['2015-12-21', 2738631],
    ['2015-12-22', 2974032],
    ['2015-12-23', 1570920],
    ['2015-12-24', 3051704],
    ['2015-12-25', 3202991],
    ['2015-12-26', 3529149],
    ['2015-12-27', 3882187],
    ['2015-12-28', 3914764],
    ['2015-12-29', 3678951],
    ['2015-12-30', 3736693],
    ['2015-12-31', 3390234],
    ['2016-01-01', 3416641],
    ['2016-01-02', 3303838],
    ['2016-01-03', 3312915],
    ['2016-01-04', 3065428],
    ['2016-01-05', 2791889],
    ['2016-01-06', 2542116],
    ['2016-01-07', 2456822],
    ['2016-01-08', 2506766],
    ['2016-01-09', 2472919],
    ['2016-01-10', 2198419],
    ['2016-01-11', 1353111],
    ['2016-01-12', 941846],
    ['2016-01-13', 772074],
    ['2016-01-14', 668000],
    ['2016-01-15', 629939],
    ['2016-01-16', 606602],
    ['2016-01-17', 552803],
    ['2016-01-18', 479770],
    ['2016-01-19', 452359],
    ['2016-01-20', 450323],
    ['2016-01-21', 400689],
    ['2016-01-22', 418179],
    ['2016-01-23', 397323],
    ['2016-01-24', 362756],
    ['2016-01-25', 303935],
    ['2016-01-26', 281814],
    ['2016-01-27', 275471],
    ['2016-01-28', 270785],
    ['2016-01-29', 251452],
    ['2016-01-30', 234914],
    ['2016-01-31', 233938]
        ];
    
    
    return data;
    
}

function getVirtulData4(year) {
    year = year || '2016';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
        
    ['2016-04-01', 13846],
    ['2016-04-02', 12229],
    ['2016-04-03', 11302],
    ['2016-04-04', 9211],
    ['2016-04-05', 6917],
    ['2016-04-06', 7166],
    ['2016-04-07', 16642],
    ['2016-04-08', 25084],
    ['2016-04-09', 18141],
    ['2016-04-10', 14385],
    ['2016-04-11', 15698],
    ['2016-04-12', 28309],
    ['2016-04-13', 27143],
    ['2016-04-14', 26050],
    ['2016-04-15', 31466],
    ['2016-04-16', 37439],
    ['2016-04-17', 47960],
    ['2016-04-18', 206874],
    ['2016-04-19', 453456],
    ['2016-04-20', 788509],
    ['2016-04-21', 944500],
    ['2016-04-22', 989288],
    ['2016-04-23', 1280930],
    ['2016-04-24', 1426768],
    ['2016-04-25', 1291732],
    ['2016-04-26', 1466517],
    ['2016-04-27', 1496972],
    ['2016-04-28', 1546393],
    ['2016-04-29', 1463980],
    ['2016-04-30', 1485852],
    ['2016-05-01', 1565386],
    ['2016-05-02', 1836631],
    ['2016-05-03', 1841148],
    ['2016-05-04', 1928082],
    ['2016-05-05', 1952918],
    ['2016-05-06', 2026610],
    ['2016-05-07', 2189368],
    ['2016-05-08', 2168106],
    ['2016-05-09', 2039915],
    ['2016-05-10', 2072243],
    ['2016-05-11', 1719748],
    ['2016-05-12', 1127382],
    ['2016-05-13', 979027],
    ['2016-05-14', 1029184],
    ['2016-05-15', 918686],
    ['2016-05-16', 665341],
    ['2016-05-17', 600651],
    ['2016-05-18', 568803],
    ['2016-05-19', 544195],
    ['2016-05-20', 510549],
    ['2016-05-21', 532345],
    ['2016-05-22', 506331],
    ['2016-05-23', 393828],
    ['2016-05-24', 367417],
    ['2016-05-25', 350807],
    ['2016-05-26', 329759],
    ['2016-05-27', 333717],
    ['2016-05-28', 350810],
    ['2016-05-29', 329801],
    ['2016-05-30', 251456],
    ['2016-05-31', 239225],
    ['2016-06-01', 219051],
    ['2016-06-02', 214888],
    ['2016-06-03', 213209],
    ['2016-06-04', 219519],
    ['2016-06-05', 223445],
    ['2016-06-06', 193319],
    ['2016-06-07', 187225],
    ['2016-06-08', 177756],
    ['2016-06-09', 182245],
    ['2016-06-10', 174922],
    ['2016-06-11', 166608],
    ['2016-06-12', 143055],
    ['2016-06-13', 128959],
    ['2016-06-14', 126339],
    ['2016-06-15', 121199],
    ['2016-06-16', 109314],
    ['2016-06-17', 115052],
    ['2016-06-18', 114130],
    ['2016-06-19', 115368],
    ['2016-06-20', 98457],
    ['2016-06-21', 101004],
    ['2016-06-22', 99081],
    ['2016-06-23', 95551],
    ['2016-06-24', 89622],
    ['2016-06-25', 103711],
    ['2016-06-26', 107148],
    ['2016-06-27', 104952],
    ['2016-06-28', 120088],
    ['2016-06-29', 131395],
    ['2016-06-30', 136853]
        ];
    
    
    return data;
    
}

function getVirtulData5(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
    
    ['2017-03-01', 1794],
    ['2017-03-02', 1767],
    ['2017-03-03', 1631],
    ['2017-03-04', 1534],
    ['2017-03-05', 1413],
    ['2017-03-06', 1423],
    ['2017-03-07', 1460],
    ['2017-03-08', 1454],
    ['2017-03-09', 1453],
    ['2017-03-10', 1446],
    ['2017-03-11', 1376],
    ['2017-03-12', 1469],
    ['2017-03-13', 1557],
    ['2017-03-14', 1702],
    ['2017-03-15', 1769],
    ['2017-03-16', 52342],
    ['2017-03-17', 13423],
    ['2017-03-18', 14337],
    ['2017-03-19', 21228],
    ['2017-03-20', 15607],
    ['2017-03-21', 13372],
    ['2017-03-22', 14651],
    ['2017-03-23', 15677],
    ['2017-03-24', 14682],
    ['2017-03-25', 18388],
    ['2017-03-26', 23534],
    ['2017-03-27', 26704],
    ['2017-03-28', 127910],
    ['2017-03-29', 395976],
    ['2017-03-30', 740802],
    ['2017-03-31', 966845],
    ['2017-04-01', 1223419],
    ['2017-04-02', 1465722],
    ['2017-04-03', 1931489],
    ['2017-04-04', 2514324],
    ['2017-04-05', 3024847],
    ['2017-04-06', 3174056],
    ['2017-04-07', 3208696],
    ['2017-04-08', 3644736],
    ['2017-04-09', 4198117],
    ['2017-04-10', 3868350],
    ['2017-04-11', 3576440],
    ['2017-04-12', 3524784],
    ['2017-04-13', 3621275],
    ['2017-04-14', 3695967],
    ['2017-04-15', 3728965],
    ['2017-04-16', 3845193],
    ['2017-04-17', 3525579],
    ['2017-04-18', 3452680],
    ['2017-04-19', 3535350],
    ['2017-04-20', 3655541],
    ['2017-04-21', 3884779],
    ['2017-04-22', 3780629],
    ['2017-04-23', 3633830],
    ['2017-04-24', 3224390],
    ['2017-04-25', 2923902],
    ['2017-04-26', 2880839],
    ['2017-04-27', 2755101],
    ['2017-04-28', 2668817],
    ['2017-04-29', 2186199],
    ['2017-04-30', 1380389],
    ['2017-05-01', 1153320],
    ['2017-05-02', 969908],
    ['2017-05-03', 855008],
    ['2017-05-04', 778459],
    ['2017-05-05', 705690],
    ['2017-05-06', 644825],
    ['2017-05-07', 605013],
    ['2017-05-08', 519751],
    ['2017-05-09', 462824],
    ['2017-05-10', 412711],
    ['2017-05-11', 397259],
    ['2017-05-12', 360223],
    ['2017-05-13', 351614],
    ['2017-05-14', 332985],
    ['2017-05-15', 288986],
    ['2017-05-16', 262668],
    ['2017-05-17', 254744],
    ['2017-05-18', 247669],
    ['2017-05-19', 245234],
    ['2017-05-20', 235613],
    ['2017-05-21', 242238],
    ['2017-05-22', 230282],
    ['2017-05-23', 208963],
    ['2017-05-24', 77862],
    ['2017-05-25', 186705],
    ['2017-05-26', 173613],
    ['2017-05-27', 167778],
    ['2017-05-28', 172338],
    ['2017-05-29', 174826]
        ];
    
    
    return data;
    
}

function getVirtulData6(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [
        
    ['2017-03-01', 368692],
    ['2017-03-02', 335052],
    ['2017-03-03', 330779],
    ['2017-03-04', 374224],
    ['2017-03-05', 390293],
    ['2017-03-06', 334958],
    ['2017-03-07', 333016],
    ['2017-03-08', 321512],
    ['2017-03-09', 324778],
    ['2017-03-10', 322461],
    ['2017-03-11', 337038],
    ['2017-03-12', 339622],
    ['2017-03-13', 342722],
    ['2017-03-14', 386567],
    ['2017-03-15', 343535],
    ['2017-03-16', 333144],
    ['2017-03-17', 344473],
    ['2017-03-18', 319468],
    ['2017-03-19', 322849],
    ['2017-03-20', 304899],
    ['2017-03-21', 313616],
    ['2017-03-22', 307215],
    ['2017-03-23', 291565],
    ['2017-03-24', 297487],
    ['2017-03-25', 301047],
    ['2017-03-26', 303562],
    ['2017-03-27', 291824],
    ['2017-03-28', 289079],
    ['2017-03-29', 296808],
    ['2017-03-30', 300099],
    ['2017-03-31', 285811],
    ['2017-04-01', 282294],
    ['2017-04-02', 278280],
    ['2017-04-03', 281944],
    ['2017-04-04', 291643],
    ['2017-04-05', 321342],
    ['2017-04-06', 315319],
    ['2017-04-07', 317153],
    ['2017-04-08', 340449],
    ['2017-04-09', 366677],
    ['2017-04-10', 335548],
    ['2017-04-11', 329059],
    ['2017-04-12', 346860],
    ['2017-04-13', 351076],
    ['2017-04-14', 368343],
    ['2017-04-15', 403217],
    ['2017-04-16', 482953],
    ['2017-04-17', 714540],
    ['2017-04-18', 1338645],
    ['2017-04-19', 1341271],
    ['2017-04-20', 1232032],
    ['2017-04-21', 1217217],
    ['2017-04-22', 1165758],
    ['2017-04-23', 1058045],
    ['2017-04-24', 941293],
    ['2017-04-25', 1086357],
    ['2017-04-26', 1138779],
    ['2017-04-27', 1093159],
    ['2017-04-28', 1026610],
    ['2017-04-29', 1082043],
    ['2017-04-30', 1104689],
    ['2017-05-01', 1208021],
    ['2017-05-02', 1166415],
    ['2017-05-03', 1149034],
    ['2017-05-04', 1192474],
    ['2017-05-05', 1130287],
    ['2017-05-06', 1074245],
    ['2017-05-07', 895503],
    ['2017-05-08', 740913],
    ['2017-05-09', 797536],
    ['2017-05-10', 790334],
    ['2017-05-11', 771000],
    ['2017-05-12', 770319],
    ['2017-05-13', 737427],
    ['2017-05-14', 624006],
    ['2017-05-15', 506800],
    ['2017-05-16', 686222],
    ['2017-05-17', 704458],
    ['2017-05-18', 669764],
    ['2017-05-19', 672913],
    ['2017-05-20', 623165],
    ['2017-05-21', 544190],
    ['2017-05-22', 428791],
    ['2017-05-23', 562885],
    ['2017-05-24', 579994],
    ['2017-05-25', 580485],
    ['2017-05-26', 569405],
    ['2017-05-27', 468452],
    ['2017-05-28', 530505],
    ['2017-05-29', 577067]
        ];
    
    
    return data;
    
}


var option5 = {
    backgroundColor: '#1a242c',

    title: {
        top: 30,
        text: '',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:'{a}: {c}'
    },
    // legend: {
    //     //top: '30',
    //     //left: '100',
    //     data:['人民的名义', '回家的诱惑','伪装者','芈月传','欢乐颂','择天记'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    calendar: [{
        top: 770,
        cellSize:38,
        left: 25,
        orient:'vertical',
        range: ['2011-02-01', '2011-04-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '回家的诱惑',
            
            textStyle: {
                color: '#fff'
               
            }
           
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }, {
        top: 770,
        left: 705,
        cellSize:38,
        orient:'vertical',
        range: ['2015-08-02', '2015-10-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '伪装者',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
        
    },
     {
        top: 120,
        left: 370,
        cellSize:38,
        orient:'vertical',
        range: ['2015-11-01', '2016-01-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '芈月传',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
        
    },
    {
        top: 770,
        left:370,
        cellSize:38,
        orient:'vertical',
        range: ['2016-04-03', '2016-06-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '欢乐颂',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
        
    },
    {
        top: 120,
        left:25,
        cellSize:38,
        orient:'vertical',
        range: ['2017-03-05', '2017-05-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '人民的名义',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
        
    },
    
    {
        top: 120,
        left:715,
        cellSize:38,
        orient:'vertical',
        range: ['2017-03-01', '2017-05-31'],
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.6)',
                width: 2,
                type: 'solid'
            }
        },
        yearLabel: {
            margin:50,
            formatter: '择天记',
            textStyle: {
                color: '#fff'
            }
        },
        itemStyle: {
            normal: {
                color: '#323c48',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
        
    }
    
    
    ],
    series : [
        {
            name: '回家的诱惑',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: getVirtulData1(2011),
            symbolSize: function (val) {
                return val[1] /90000 ;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '伪装者',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtulData2(2015),
            symbolSize: function (val) {
                return val[1] /90000;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '芈月传',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtulData3(2015),
            symbolSize: function (val) {
                return val[1] /90000;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
         {
            name: '欢乐颂',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex:3,
            data: getVirtulData4(2016),
            symbolSize: function (val) {
                return val[1] /90000;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '人民的名义',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex:4,
            data: getVirtulData5(2017),
            symbolSize: function (val) {
                return val[1] /90000;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: '择天记',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex:5,
            data: getVirtulData6(2017),
            symbolSize: function (val) {
                return val[1] /90000;
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data:  getVirtulData1(2011).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data:  getVirtulData2(2015).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data:  getVirtulData3(2015).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
         {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 3,
            data:  getVirtulData4(2016).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 4,
            data:  getVirtulData5(2017).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 5,
            data:  getVirtulData6(2017).sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 5),
            symbolSize: function (val) {
                return val[1] / 100000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};