import Layout from "@/business/app-layout/horizontal-layout"

const Network = {
  path: "/network",
  sort: 3,
  component: Layout,
  name: "Network",
  meta: {
    title: "business.network.network",
    icon: "iconfont iconnetwork"
  },
  children: [
    {
      path: "/services",
      component: () => import("@/business/network/services"),
      name: "Services",
      meta: {
        title: "Services",
      }
    },
    {
      path: "/services/:namespace/:name/detail",
      component: () => import("@/business/network/services/detail"),
      name: "ServiceDetail",
      hidden: true,
      props: true,
      meta: {
        activeMenu: "/services"
      }
    },
    {
      path: "/services/create",
      component: () => import("@/business/network/services/create"),
      name: "ServiceCreate",
      hidden: true,
      meta: {
        activeMenu: "/services"
      }
    },
    {
      path: "/ingresses",
      component: () => import("@/business/network/ingresses"),
      name: "Ingresses",
      meta: {
        title: "Ingresses",
      }
    },
    {
      path: "/endpoints",
      component: () => import("@/business/network/endpoints"),
      name: "Endpoints",
      meta: {
        title: "Endpoints",
      }
    },
    {
      path: "/networkpolicies",
      component: () => import("@/business/network/network-policies"),
      name: "NetworkPolicies",
      meta: {
        title: "Network Policies",
      }
    }
  ]
}

export default Network
