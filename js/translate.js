// var arrLang = {
//         "en": {
//             'YOU': "you seem to be interested..",
//             "ADDRESS": "address",
//             "UNIT" : "Unit 203, 59, Sinseong-ro 68beon-gil, Yuseong-gu, Daejeon, Republic of Korea",
//             "CONTACT": "contact",
//             "MAIL" : "mail",
//             "PHONE" : "phone"
//         }, "kr": {
//             "YOU": "우리 여기있소..",
//             "ADDRESS": "주소",
//             "UNIT" : "대한민국 대전광역시 신성로 68번길 59, 203호",
//             "CONTACT": "연락처",
//             "MAIL" : "메일",
//             "PHONE" : "전화번호"
//         }
//     };

// $(document).ready(function() {
//     // The default language is English
//     var lang = "en";
//     $(".lang").each(function(index, element) {
//         $(this).text(arrLang[lang][$(this).attr("key")]);
//     });
// });

// // get/set the selected language
// $(".translate").click(function() {
//     var lang = $(this).attr("id");

//     $(".lang").each(function(index, element) {
//         $("this").text(arrLang[lang][$(this).attr("key")]);
//     });
// });

// if (window.location.hash) {
//     if (window.location.hash === "#en") {
//         history.textContent = 
//     }
// }

// function Translate() { 
//     //initialization
//     this.init =  function(attribute, lng){
//         this.attribute = attribute;
//         this.lng = lng;    
//     }
//     //translate 
//     this.process = function(){
//                 _self = this;
//                 var xrhFile = new XMLHttpRequest();
//                 //load content data 
//                 xrhFile.open("GET", "./resources/"+this.lng+".json", false);
//                 xrhFile.onreadystatechange = function ()
//                 {
//                     if(xrhFile.readyState === 4)
//                     {
//                         if(xrhFile.status === 200 || xrhFile.status == 0)
//                         {
//                             var LngObject = JSON.parse(xrhFile.responseText);
//                             console.log(LngObject["name1"]);
//                             var allDom = document.getElementsByTagName("*");
//                             for(var i =0; i < allDom.length; i++){
//                                 var elem = allDom[i];
//                                 var key = elem.getAttribute(_self.attribute);
                                 
//                                 if(key != null) {
//                                      console.log(key);
//                                      elem.innerHTML = LngObject[key]  ;
//                                 }
//                             }
                     
//                         }
//                     }
//                 }
//                 xrhFile.send();
//     }    
// }

var language;
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({
        url: '/../language/' + localStorage.getitem('language') + '.json',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { language = lang }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
}

$(document).ready(function(){
    $('.lang').text(language.YOU);
});