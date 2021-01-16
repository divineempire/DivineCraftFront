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
  }
]
