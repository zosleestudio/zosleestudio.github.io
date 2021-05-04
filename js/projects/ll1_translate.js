i18next.init({
    lng: 'de',
    resources: {
      en: {
        translation: {
          text: {
            p1: "To express the lighting device as the best product to highlight tension, \
            the designer focused on the characteristic that the stand is basically an indirect \
            product that touches the product only when it is turned on and off, \
            rather than a direct product that is manipulated by the user.",
            p2: "Tension was maximised solely through the proportional composition of the shipping \
            elements on the plane and the seemingly close support.",
            p3: "The user can change the proportion between the components by adjusting the length of the stainless steel rod, \
            at which time the tight connection between the two rods is felt intact. \
            This light is immobile, but the fingertips show that kinetic power is latent."
          }
        }
      },
      ko: {
        translation: {
          text: {
            p1: "디자이너는 스탠드라는 제품이 기본적으로 사용자가 조작을 하는 직접사용제품이 아닌 켤 때와 \
            끌 때에만 제품을 건드리는 간접사용제품이라는 특징에 집중하여, \
            조명기기가 긴장감을 부각함에 최적의 제품임을 이야기하고자 했다.",
            p2: "오로지 평면상의 선적 요소들의 비례적 구성과 아슬아슬해보이는 지탱부를 통해 긴장감을 극대화시켰다.",
            p3: "사용자는 스테인레스 봉의 길이를 조절하여 구성요소들 간의 비례를 바꿀 수 있는데, 이 때 두개의 봉 사이의 팽팽한 연결력이 고스란히 느껴진다. \
            이 조명은 움직이지 않지만, 운동력이 잠재되어 있음을 손 끝에서 알 수 있다."
          }
        }
      },
    }
  }, function(err, t) {
      jqueryI18next.init(i18next, $, {
        i18nName: 'i18next'
    });

    $('.text').localize();

    $('.translate').click(function() {
      debugger;
      i18next.changeLanguage(this.innerHTML);
      $('.text').localize();
    });
  });

  i18next
  .use(i18nextXHRBackend)
  .init({
      lng: 'en',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }
    }, function(err, t) {
        jqueryI18next.init(i18next, $, {
          i18nName: 'i18next'
      });

      $('.text').localize();

      $('.translate').click(function() {
        debugger;
        i18next.changeLanguage(this.innerHTML);
        $('.text').localize();
      });
    });
