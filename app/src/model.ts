export type Product = {
  id: string
  title: string
  shortDescription: string
  path: string
}

export type LinkButton = {
  to: string
  text: string
  openInNewTab: boolean
}

type ShopSection<T extends string, P extends object> = {
  id: string
  type: T
  props: P
}

export type NavbarSection = ShopSection<
  'navbar',
  {
    links: {
      explore: boolean
      reviews: boolean
      support: boolean
      faq: boolean
      terms: boolean
    }
    settings: {
      logo: boolean
      storeName: boolean
      searchBar: boolean
      links: boolean
      authButtons: boolean
    }
  }
>

export type FooterSection = ShopSection<
  'footer',
  {
    featuredProducts: Product['id'][]
    socialLinks: {
      discord: string
      twitter: string
      telegram: string
    }
    settings: {
      logo: boolean
      navigation: boolean
      social: boolean
      copyright: boolean
      branding: boolean
    }
  }
>

export type TestSection = ShopSection<
  'text',
  {
    title: string
    description: string
    button: LinkButton
    settings: {
      alignment: 'left' | 'center' | 'right'
      title: boolean
      description: boolean
      button: boolean
    }
  }
>

export type Section = NavbarSection | FooterSection | TestSection

export type Settings = {
  general: {
    shopName: string
    shopLogo: string
  }
  theme: {
    color: {
      background: string
      heading: string
      paragraph: string
      special: string
      specialAccent: string
      secondary: string
    }
    font: ''
  }
  seo: {
    favicon: string
    metaImage: string
    pageTitle: string
    pageDescription: string
  }
}

export type ShopData = {
  products: Product[]
  layout: {
    settings: Settings
    sections: Section[]
  }
}

export const getShopData = async () => {
  // const data = await fetch(
  //   'https://dev.sellpass.io/v3/internal/public/shops/hyperflick.sellpass.io/main',
  //   { cache: 'no-store' }
  // )
  const data = await fetch(
    'https://dev.sellpass.io/v3/internal/public/shops/hyperflick.sellpass.io/main'
  )
  const json: { data: ShopData } = await data.json()
  return json.data
}
