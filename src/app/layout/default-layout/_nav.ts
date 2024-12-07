import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [
  {
    name: 'Monitoramento',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Cadastrar'
  },
  {
    name: 'Morador',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Visitante',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Opções',
    title: true
  },
  {
    name: 'Buscar',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Funcionário',
        url: '/base/accordion',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Morador',
        url: '/base/breadcrumbs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Visitante',
        url: '/base/cards',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Encomendas',
        url: '/base/carousel',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ocorrência',
        url: '/base/collapse',
        icon: 'nav-icon-bullet'
      },
      /*{
        name: 'List Group',
        url: '/base/list-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pagination',
        url: '/base/pagination',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Spinners',
        url: '/base/spinners',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'nav-icon-bullet'
      }*/
    ]
  },
  {
    name: 'Cadastros',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Morador',
        url: '/buttons/buttons',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Funcionário',
        url: '/buttons/button-groups',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Visitante',
        url: '/buttons/dropdowns',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Autorizações',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Funcionários',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Moradores',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Visitantes',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      /*{
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Layout',
        url: '/forms/layout',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }*/
    ]
  },
  /*{
    name: 'Ocorrências',
    iconComponent: { name: 'cil-chart-pie' },
    url: '/charts'
  },*/
  {
    name: 'Reservas',
    iconComponent: { name: 'bi bi-life-preserver' },
    url: '/icons',
    children: [
      {
        name: 'Moradores',
        url: '/icons/coreui-icons',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'Manuntenção',
        url: '/icons/flags',
        icon: 'nav-icon-bullet'
      },
      /*{
        name: 'CoreUI Brands',
        url: '/icons/brands',
        icon: 'nav-icon-bullet'
      }*/
    ]
  },
  {
    name: 'Notificação',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alertas',
        url: '/notifications/alerts',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Mensagens',
        url: '/notifications/badges',
        icon: 'nav-icon-bullet'
      },
      /*{
        name: 'Modal',
        url: '/notifications/modal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts',
        icon: 'nav-icon-bullet'
      }*/
    ]
  },
  {
    name: 'Permissões',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  /*{
    title: true,
    name: 'Extras'
  },*/
  {
    name: 'Ocorrências',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  /*{
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },*/
  {
    name: 'Correspondências',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
