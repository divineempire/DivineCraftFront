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
