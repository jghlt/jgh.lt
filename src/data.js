import kingAndPartnersImage from '../assets/images/kingandpartners.jpg';
import carillonMiamiImage from '../assets/images/carillonmiami.jpg';
import waldhausFlimsImage from '../assets/images/waldhausflims.jpg';
import hugoMadureiraImge from '../assets/images/hugomadureira.jpg';
import mattJohnGillImage from '../assets/images/mattjohngill.jpg';

const data = {
  holding: {
    title: 'Senior Fullstack Developer',
    items: [],
    footer: '↳ NYC'
  },
  projects: {
    title: 'Fullstack Developer',
    items: [
      {
        link: 'https://www.kingandpartners.com/10/',
        title: 'KP/10',
        target: '_blank',
        image: kingAndPartnersImage
      },
      {
        link: 'https://www.carillonhotel.com/en/',
        title: 'carillon.miami',
        target: '_blank',
        image: carillonMiamiImage
      },
      {
        link: 'https://www.waldhaus-flims.ch/en/',
        title: 'waldhaus-flims',
        target: '_blank',
        image: waldhausFlimsImage
      },
      {
        link: 'https://hugomadureira.com/',
        title: 'h.madureira',
        target: '_blank',
        image: hugoMadureiraImge
      },
      {
        link: 'https://mattjohngill.com/',
        title: 'mj-gill',
        target: '_blank',
        image: mattJohnGillImage
      }
    ],
    footer: '↓'
  },
  contact: {
    title: 'Say hello',
    items: [
      {
        link: 'mailto:hello@jgh.lt',
        title: 'hello@jgh.lt',
        target: '_blank'
      },
      {
        link: 'https://github.com/jghlt',
        title: 'github',
        target: '_blank'
      },
      {
        link: 'https://twitter.com/jgh_lt',
        title: 'twitter',
        target: '_blank'
      }
    ],
    footer: '↳ NYC'
  }
};

export default data;
