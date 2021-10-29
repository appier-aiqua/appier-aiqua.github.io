const baseUrl = 'https://aiqua-edge-gateway.stg.c.appier.net/demo-site';

Vue.use(VueMaterial.default);

const PolarArea = Vue.component('polar-area', {
  extends: VueChartJs.PolarArea,
  mixins: [VueChartJs.mixins.reactiveProp],
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
})

const routes = [{
  path: '/appId/:appId',
}]

new Vue({
  router: new VueRouter({
    routes
  }),
  el: '#app',
  components: {},
  data: {
    menuVisible: false,
    viewStage: 'homepage',
    siteConfig: {},

    // Recommendation page
    loadingProductList: false,
    loadingProduct: false,
    hotTags: [],
    autoCompleteTags: [],
    keyword: '',
    relatedTags: [],
    products: [],
    productInfo: {},
    productTags: [],

    // Personalization page
    selectedUser: '',
    userEvents: [],
    userTags: {},
    polarAreaData: null
  },
  methods: {

    // Utils
    formatTime(datetime) {
      return moment.tz(datetime, "Asia/Taipei").format('YYYY/MM/DD HH:mm:ss');
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    // Left nemu
    clickHomepage() {
      this.viewStage = 'homepage';
      this.keyword = '';
      this.autoCompleteTags = this.hotTags.map(tag => tag.tag_name);
      this.menuVisible = false;
    },
    clickPersonalization() {
      this.products = [];
      this.viewStage = 'personalization';
      this.menuVisible = false;
    },

    // Recommendation page
    clickSearch(keyword) {
      if (keyword) {

        // Get tag id 
        axios.get(`${baseUrl}/tags/${this.siteConfig.appId}?q=${keyword}`).then(({
          data
        }) => {

          if (data.length == 0) {
            return;
          }
          const tagId = data[0]['tag_id'];
          this.getProductRecommendationByTagId(tagId);
        }, err => {
          console.error('Error: ', err);
        });
      }
    },
    clickHotTag(tag) {
      this.keyword = tag.tag_name;
      this.getProductRecommendationByTagId(tag.tag_id);
    },
    clickRelatedTag(tag) {
      this.keyword = tag.tag_name;
      this.getProductRecommendationByTagId(tag.tag_id);
    },
    clickProduct(product) {
      this.viewStage = 'product';
      this.loadingProduct = true;
      this.productInfo = product;

      axios.get(`${baseUrl}/product/${this.siteConfig.appId}/tags?productId=${this.productInfo.product_id}`).then(({
        data
      }) => {
        this.productTags = data;
        this.products = [];

        document.querySelector('.md-scrollbar').scrollTop = 0;
        this.loadingProduct = false;
      }, err => {
        console.error('Error: ', err);
      })
    },
    getAutoCompleteTags(searchTerm) {
      if (searchTerm) {
        new Promise(resolve => {
          window.setTimeout(() => {
            axios.get(`${baseUrl}/tags/${this.siteConfig.appId}?q=${searchTerm}`).then(({
              data
            }) => {
              this.autoCompleteTags = data.map(tag => tag.tag_name);
              resolve();
            }, err => {
              console.error('Error: ', err);
            });
          }, 500)
        })
      }
    },
    getProductRecommendationByTagId(tagId) {
      this.loadingProductList = true;

      // Get tag recommendation
      axios.get(`${baseUrl}/tag/${this.siteConfig.appId}/tags?tagId=${tagId}`).then(({
        data
      }) => {
        this.relatedTags = data;

        // Get product recommendation
        axios.get(`${baseUrl}/rec/${this.siteConfig.appId}/t/${tagId}`).then(({
          data
        }) => {
          this.products = data;
          this.viewStage = 'list';
          document.querySelector('.md-scrollbar').scrollTop = 0;
          this.loadingProductList = false;

        }, err => {
          console.error('Error: ', err);
        });

      }, err => {
        console.error('Error: ', err);
      });
    },

    // Personalization page
    clickUserSearch() {

      if (this.selectedUser == '') {
        return;
      }

      // Get user events
      axios.get(`${baseUrl}/user-events/${this.siteConfig.appId}/u/${this.selectedUser}`).then(({
        data
      }) => {
        if (data.length == 0) {
          return;
        }
        this.userEvents = data;

        // Get user to tag
        axios.get(`${baseUrl}/user/${this.siteConfig.appId}/tags?userId=${this.selectedUser}`).then(({
          data
        }) => {
          if (data.length == 0) {
            return;
          }
          this.userTags = data;
          this.polarAreaData = {};

          Object.keys(this.userTags).forEach(category => {
            if (this.userTags[category].length <= 3) {
              return;
            }

            const colors = this.shuffle(["rgba(249, 65, 68, 0.5)", "rgba(243, 114, 44, 0.5)", "rgba(248, 150, 30, 0.5)", "rgba(249, 132, 74, 0.5)", "rgba(249, 199, 79, 0.5)", "rgba(144, 190, 109, 0.5)", "rgba(67, 170, 139, 0.5)", "rgba(77, 144, 142, 0.5)", "rgba(87, 117, 144, 0.5)"]);
            const labels = this.userTags[category].map(tag => tag.tag_name).slice(0, 9);
            const tagData = this.userTags[category].map(tag => tag.score).slice(0, 9);
            this.polarAreaData[category] = {
              labels: labels,
              datasets: [{
                data: tagData,
                backgroundColor: colors
              }]
            }
          })

          // Get user to product
          axios.get(`${baseUrl}/rec/${this.siteConfig.appId}/u/${this.selectedUser}`).then(({
            data
          }) => {
            if (data.length == 0) {
              return;
            }
            this.products = data;
          }, err => {
            console.error('Error: ', err);
          });
        }, err => {
          console.error('Error: ', err);
        });
      }, err => {
        console.error('Error: ', err);
      });


    },
    switchTab() {

    },
    getEventIcon(eventName) {
      switch (eventName) {
        case 'product_viewed':
          return 'visibility';
        case 'product_added_to_cart':
          return 'add_shopping_cart';
        case 'product_purchased':
          return 'shopping_basket';
        case 'product_added_to_wishlist':
          return 'playlist_add_check';
        default:
          return '';
      }
    },
    getEventName(eventName) {
      switch (eventName) {
        case 'product_viewed':
          return '產品瀏覽';
        case 'product_added_to_cart':
          return '產品加入購物車';
        case 'product_purchased':
          return '產品購買';
        case 'product_added_to_wishlist':
          return '產品加入願望清單';
        default:
          return eventName;
      }
    },
  },
  created() {
    const appId = this.$route.params.appId;

    if (!appId){
      this.viewStage = 'notExist';
      return;
    }

    if (appId) {
      // Get config
      axios.get(`configs/${appId}.json`).then(({
        data
      }) => {
        if (!data) {
          return;
        }

        this.siteConfig = data;

        // Load CSS
        const link = document.createElement('link');
        link.href = `css/${appId}.css`;
        link.type = 'text/css';
        link.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(link);

        // Get hot tags
        axios.get(`${baseUrl}/tags/${this.siteConfig.appId}`).then(({
          data
        }) => {
          this.hotTags = data.slice(0, 32);
          this.autoCompleteTags = this.hotTags.map(tag => tag.tag_name);
        }, err => {
          this.viewStage = 'notExist';
          console.error('Error: ', err);
        });

      }, err => {
        this.viewStage = 'notExist';
        console.error('Error: ', err);
      });
    }
  }
})