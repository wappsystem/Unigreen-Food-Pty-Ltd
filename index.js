$vm.module_list={
    layout:        ['--------','.../layout.html'],
    home:               ['--------','.../modules/home.html'],
    business_portal_nav:['--------','.../modules/business_portal_nav.html'],
    production_list:    ['20007681','.../modules/production_list.html'],
    staff_list:         ['20007682','.../modules/staff_list.html'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    $vm.module_list[key].push($vm.module_list[key][1]);
    $vm.module_list[key][1]=$vm.module_list[key][1].replace('...','__BASE__/'+$vm.repository)
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('...','https://github.com/'+$vm.repository+'/master')
}
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js');
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js');
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js');
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js');
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108');
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 100);
}
//--------------------------------------------------------
