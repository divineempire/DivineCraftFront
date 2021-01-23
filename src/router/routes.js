import Main from '@/pages/Main'
import PaymentResult from '@/pages/PaymentResult'

export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/privilege/:name',
    name: 'privilege',
    component: () => import('@/pages/Privilege')
  },
  {
    path: '/products/:name',
    name: 'category',
    component: () => import('@/pages/Products')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/pages/Cart')
  },
  {
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: () => import('@/pages/TermsOfUse')
  },
  {
    path: '/result',
    name: 'result',
    component: PaymentResult,
    children: [
      {
        path: 'fail',
        name: 'fail',
        component: () => import('@/components/PaymentResult/Fail')
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('@/components/PaymentResult/Success')
      }
    ]
  },
  {
    path: '/.*/',
    name: '404',
    redirect: { name: 'main' }
  }
]
