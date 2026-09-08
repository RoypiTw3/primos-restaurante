// ==========================================================================
// PRIMOS RESTAURANTE · SAN ANTONIO CALI (1982)
// Catálogo gastronómico oficial completo extraído de Cluvi Oficial
// ==========================================================================

const PRIMOS_DATA = {
  restaurant: {
    name: "Primos Restaurante",
    legalName: "Primos Restaurante · San Antonio · Cali 1982",
    tagline: "Cortes de Autor & Tradición Gastronómica",
    founded: "1982",
    heritageYear: 1982,
    location: {
      neighborhood: "San Antonio",
      city: "Cali, Valle del Cauca, Colombia",
      address: "Carrera 10 # 2-18, Barrio San Antonio",
      reference: "A pocas cuadras de la Colina y la Capilla de San Antonio",
      mapsUrl: "https://maps.google.com/?q=Primos+Restaurante+San+Antonio+Cali"
    },
    contact: {
      phoneDisplay: "315 377 1321",
      phoneRaw: "573153771321",
      whatsappUrl: "https://wa.me/573153771321?text=Hola%20Primos%20Restaurante%2C%20quisiera%20hacer%20una%20consulta%20o%20reserva.",
      hours: "Lunes a Domingo · 12:00 m. a 10:30 p.m."
    },
    socialLinks: {
      facebook: "https://www.facebook.com/PrimosColombia/?mibextid=ZbWKwL",
      instagram: "https://www.instagram.com/primoscolombia/",
      whatsapp: "https://wa.me/573153771321"
    },
    dataPolicyUrl: "https://drive.google.com/file/d/1ECC4IUGIOxewwJR6LFvlAMLlBCq-Q1Rw/view?usp=sharing",
    rating: {
      stars: 4.8,
      reviewsCount: 1420,
      label: "Excelencia Gastronómica en San Antonio"
    },
    brandImages: {
      logo: "https://images.cluvi.com/UPv1OW6PzJ/w_576_UPv1OW6PzJ_montaje-51.png",
      catEmblem: "https://images.cluvi.com/hXMDK7OSRS/w_576_hXMDK7OSRS_montaje-52.png",
      patioAtmosphere: "https://images.cluvi.com/iN506Nv4Xu/w_1200_iN506Nv4Xu_banner-del-home.png",
      artInterior: "https://images.cluvi.com/W4I7LOrwir/w_768_W4I7LOrwir_20250111_114944.jpg",
      beerPairing: "https://images.cluvi.com/Vil18opj06/w_1200_Vil18opj06_valla-1200-x-600-club-colombia.png"
    }
  },

  // 4 Puertas de Entrada del Sitio (Portal Hub de Alto Impacto)
  portalServices: [
    {
      id: "menu-digital",
      title: "Carta Digital & Cortes",
      tagline: "Especialidad en Baby Beef y Parrilla",
      badgeText: "Popular en Sala",
      description: "Explora nuestras 14 categorías, los 7 cortes Baby Beef con sus salsas de autor y personaliza tu término de cocción en mesa.",
      iconKey: "menu",
      actionText: "Ver Menú Completo ↓",
      targetAnchor: "#seccion-menu"
    },
    {
      id: "reservas",
      title: "Reserva tu Mesa",
      tagline: "Patio colonial & Salón de arte",
      badgeText: "Atención Inmediata",
      description: "Asegura tu ubicación preferida bajo los árboles de nuestro patio tradicional o en el salón de pintura colombiana en San Antonio.",
      iconKey: "reservation",
      actionText: "Reservar Ubicación ↓",
      targetAnchor: "#seccion-reservas"
    },
    {
      id: "take-away",
      title: "Pedir para Llevar",
      tagline: "Recoge en Cra 10 # 2-18",
      badgeText: "Listo sin Esperas",
      description: "Haz tu pedido con anticipación, selecciona la hora exacta de recogida y llévate nuestros cortes recién salidos del carbón.",
      iconKey: "takeaway",
      actionText: "Ordenar para Llevar →",
      targetAnchor: "#seccion-menu"
    },
    {
      id: "domicilios",
      title: "Domicilios en Cali",
      tagline: "Empaque térmico de alta gama",
      badgeText: "Cali y alrededores",
      description: "Disfruta de nuestros cortes a la brasa en tu casa con empaque especial que mantiene temperatura, jugosidad y aroma intactos.",
      iconKey: "delivery",
      actionText: "Pedir a Domicilio →",
      targetAnchor: "https://wa.me/573153771321?text=Hola%20Primos%20Restaurante%2C%20quisiera%20hacer%20un%20pedido%20a%20domicilio."
    }
  ],

  // 14 Categorías Oficiales (Ordenadas exactamente como el menú oficial de Primos)
  categories: [
    {
      id: "entradas",
      label: "Entradas",
      subtitle: "Para empezar y compartir al centro de la mesa",
      iconKey: "appetizer"
    },
    {
      id: "sopas",
      label: "Sopas",
      subtitle: "Cremas reconfortantes y caldos tradicionales",
      iconKey: "soup"
    },
    {
      id: "ensaladas",
      label: "Ensaladas",
      subtitle: "Hojas frescas del huerto y aderezos de autor",
      iconKey: "salad"
    },
    {
      id: "hamburguesas",
      label: "Hamburguesas",
      subtitle: "Nuestras icónicas hamburguesas 100% carne de res molida en casa o pollo a la brasa",
      iconKey: "burger"
    },
    {
      id: "costillas",
      label: "Costillas",
      subtitle: "Horneadas a baja temperatura durante horas",
      iconKey: "ribs"
    },
    {
      id: "baby-beef",
      label: "Baby Beef",
      subtitle: "Nuestra especialidad insigne desde 1982 a la brasa",
      iconKey: "beef",
      featured: true
    },
    {
      id: "asados-pollo",
      label: "Asados de Pollo",
      subtitle: "Pechugas y cortes jugosos al carbón de leña",
      iconKey: "chicken"
    },
    {
      id: "sandwiches",
      label: "Sándwiches",
      subtitle: "En pan rústico recién horneado con quesos fundidos",
      iconKey: "sandwich"
    },
    {
      id: "vegetarianos",
      label: "Opciones Vegetarianas",
      subtitle: "Platos a base de plantas y vegetales al wok",
      iconKey: "plant"
    },
    {
      id: "especiales",
      label: "Especiales",
      subtitle: "Recetas conmemorativas y carnes de corte fino",
      iconKey: "chef"
    },
    {
      id: "postres",
      label: "Postres",
      subtitle: "El final dulce perfecto de nuestra repostería",
      iconKey: "dessert"
    },
    {
      id: "bebidas-calientes",
      label: "Bebidas Calientes",
      subtitle: "Cafés especiales de origen de la cordillera",
      iconKey: "hot-drink"
    },
    {
      id: "bebidas-frias",
      label: "Bebidas",
      subtitle: "Limonadas naturales, jugos campesinos y sodas",
      iconKey: "cold-drink"
    },
    {
      id: "cervezas",
      label: "Cervezas",
      subtitle: "Maestría cervecera y Club Colombia 100% malta",
      iconKey: "beer"
    }
  ],

  // Catálogo Oficial Completo (111 productos con fotografía oficial Cluvi)
  products: [
    {
        "id": "sandwich-champiqueso-con-pollo-gratinado",
        "categoryId": "sandwiches",
        "name": "Sandwich Champiqueso con Pollo Gratinado",
        "rawName": "SANDWICH CHAMPIQUESO CON POLLO GRATINADO",
        "price": 36200,
        "description": "Pollo desmechado con salsa de champiñones, cebolla al vino y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/G7m2xiUkKw/w_1200_G7m2xiUkKw_sandwich-champiqueso-con-pollo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "ensalada-c-sar-con-pollo-y-aguacate",
        "categoryId": "ensaladas",
        "name": "Ensalada César con Pollo y Aguacate",
        "rawName": "ENSALADA CÉSAR CON POLLO Y AGUACATE",
        "price": 51900,
        "description": "Lechuga romana aderezada con vinagre de anchoas y queso parmesano,  lomitos de pollo marinados en balsámico, aguacate en julianas y  crutones.",
        "image": "https://images.cluvi.com/oHglWgvpVu/w_1200_oHglWgvpVu_ensalada-cesar-con-pollo-y-aguacate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "asado-de-pollo-champiqueso-gratinado",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo Champiqueso Gratinado",
        "rawName": "ASADO DE POLLO CHAMPIQUESO GRATINADO",
        "price": 56400,
        "description": "Salsa de champiñones con cebolla al vino y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/pDD6V7D9hN/w_1200_pDD6V7D9hN_asado-champiqueso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "deditos-de-pollo-apanado",
        "categoryId": "especiales",
        "name": "Deditos de Pollo Apanado",
        "rawName": "DEDITOS DE POLLO APANADO",
        "price": 48400,
        "description": "Trozos de pollo apanado. Acompañados de salsa barbecue, papas y ensalada primos.",
        "image": "https://images.cluvi.com/RnVSHWg0WW/w_1200_RnVSHWg0WW_apanados-de-pollo-barbecue.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "sopa-de-tomate",
        "categoryId": "sopas",
        "name": "Sopa de Tomate",
        "rawName": "SOPA DE TOMATE",
        "price": 20400,
        "description": "Hecha con tomates frescos, albahaca de la huerta y trozos de tomate. Acompañada de pan artellano.",
        "image": "https://images.cluvi.com/iI2dKvOOh0/w_1200_iI2dKvOOh0_sopa-de-tomate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sopas"
        ]
    },
    {
        "id": "hamburguesa-agriqueso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Agriqueso",
        "rawName": "HAMBURGUESA AGRIQUESO",
        "price": 31900,
        "description": "Con salsa agridulce de piña, pimentón y cebolla caramelizada, con queso doble crema gratinado.",
        "image": "https://images.cluvi.com/DSBYiAYiKi/w_1200_DSBYiAYiKi_agriqueso.JPG",
        "isSignature": false,
        "badge": "Favorito Primos",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "baby-beef-pico-de-gallo",
        "categoryId": "baby-beef",
        "name": "Baby Beef Pico de Gallo",
        "rawName": "BABY BEEF PICO DE GALLO",
        "price": 64900,
        "description": "Con nuestro tradicional pico de gallo y aguacate en julianas.(No incluye ensalada)",
        "image": "https://images.cluvi.com/rgojeWVO8B/w_1200_rgojeWVO8B_1_baby-beef-pico-de-gallo.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "cerveza-nacional",
        "categoryId": "cervezas",
        "name": "Cerveza Nacional",
        "rawName": "CERVEZA NACIONAL",
        "price": 11900,
        "description": "Deliciosa preparación artesanal de Cerveza Nacional.",
        "image": "https://images.cluvi.com/Vil18opj06/w_1200_Vil18opj06_valla-1200-x-600-club-colombia.png",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Cervezas"
        ]
    },
    {
        "id": "champi-ones-con-salsa-de-queso-azul",
        "categoryId": "vegetarianos",
        "name": "Champiñones con Salsa de Queso Azul",
        "rawName": "CHAMPIÑONES CON SALSA DE QUESO AZUL",
        "price": 28900,
        "description": "Champiñones salteados en aceite de oliva, bañados en salsa de queso azul y gratinados con queso doble crema. Acompañados de pan artellano.",
        "image": "https://images.cluvi.com/WD5xo8PFZj/w_1200_WD5xo8PFZj_champinones-en-salsa-de-queso-azul.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "arom-tica",
        "categoryId": "bebidas-calientes",
        "name": "Aromática",
        "rawName": "AROMÁTICA",
        "price": 5900,
        "description": "Deliciosa preparación artesanal de Aromática.",
        "image": "assets/products/aromatica.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "costillas-primos-bbq-la-de-siempre",
        "categoryId": "costillas",
        "name": "Costillas Primos BBQ - la de Siempre",
        "rawName": "COSTILLAS PRIMOS  BBQ - LA DE SIEMPRE",
        "price": 69900,
        "description": "Bañadas en nuestra tradicional salsa barbecue.",
        "image": "https://images.cluvi.com/E77ndbWwuw/w_1200_E77ndbWwuw_bbq-la-de-siempre.JPG",
        "isSignature": false,
        "badge": "La de Siempre",
        "tags": [
            "Costillas"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "aros-de-cebolla",
        "categoryId": "entradas",
        "name": "Aros de Cebolla",
        "rawName": "AROS DE CEBOLLA",
        "price": 22200,
        "description": "Apanados y crujientes.",
        "image": "https://images.cluvi.com/ed6uT3kSAu/w_1200_ed6uT3kSAu_aros-de-cebolla.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Entradas"
        ]
    },
    {
        "id": "t-helado-frappe",
        "categoryId": "bebidas-frias",
        "name": "Té Helado Frappe",
        "rawName": "TÉ HELADO FRAPPE",
        "price": 9900,
        "description": "Deliciosa preparación artesanal de Té Helado Frappe.",
        "image": "https://images.cluvi.com/uK3INmiTpi/w_1200_uK3INmiTpi_te-helado-frappe.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "agua",
        "categoryId": "bebidas-frias",
        "name": "Agua",
        "rawName": "AGUA",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Agua.",
        "image": "assets/products/agua.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "asado-de-pollo-al-ajillo",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo al Ajillo",
        "rawName": "ASADO DE POLLO  AL AJILLO",
        "price": 52900,
        "description": "Con mantequilla de ajo a las finas hierbas.",
        "image": "https://images.cluvi.com/oGS59WAHxU/w_1200_oGS59WAHxU_asado-al-ajillo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "burritos",
        "categoryId": "especiales",
        "name": "Burritos",
        "rawName": "BURRITOS",
        "price": 41200,
        "description": "Tortilla de trigo rellena con frijoles refritos, pollo desmechado, queso doble crema gratinado, un toque de crema agria y pico de gallo. Acompañados de jalapeños.",
        "image": "https://images.cluvi.com/5QPq28ksKy/w_1200_5QPq28ksKy_burritos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "sandwich-costilla-de-cerdo-desmechada",
        "categoryId": "sandwiches",
        "name": "Sandwich Costilla de Cerdo Desmechada",
        "rawName": "SANDWICH COSTILLA DE CERDO DESMECHADA",
        "price": 46700,
        "description": "Tiernas costillas de cerdo desmechadas con tomate y lechuga crespa, gratinadas con queso doble crema.  Terminadas con cebolla morada caramelizada .(opcional con o sin la cebolla caramelizada)",
        "image": "https://images.cluvi.com/P6XNKxGqzy/w_1200_P6XNKxGqzy_sandwich-de-costilla-de-cerdo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "falafel",
        "categoryId": "vegetarianos",
        "name": "Falafel",
        "rawName": "FALAFEL",
        "price": 19200,
        "description": "Bolas de garbanzo, hierbas y especias. Fritas y acompañadas de suave hummus de garbanzo.",
        "image": "https://images.cluvi.com/sjhxvv2Rnf/w_1200_sjhxvv2Rnf_falafel.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "sopa-mexicana",
        "categoryId": "sopas",
        "name": "Sopa Mexicana",
        "rawName": "SOPA MEXICANA",
        "price": 33200,
        "description": "Hecha con tomates frescos, pollo desmechado, crema agria, aguacate, tortillas crocantes de maíz y trozos de tomate. Acompañada de jalapeños.",
        "image": "https://images.cluvi.com/CjuUeCRlfd/w_1200_CjuUeCRlfd_mexicana.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sopas"
        ]
    },
    {
        "id": "ensalada-primos",
        "categoryId": "ensaladas",
        "name": "Ensalada Primos",
        "rawName": "ENSALADA PRIMOS",
        "price": 35900,
        "description": "Un clásico nuestro. Con pollo, jamón, mozarella, piña, tomate, lechuga y mayonesa Primos.",
        "image": "https://images.cluvi.com/mq8xhOSkru/w_1200_mq8xhOSkru_ensalada-primos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "costillas-queso-azul",
        "categoryId": "costillas",
        "name": "Costillas Queso Azul",
        "rawName": "Costillas Queso Azul",
        "price": 74200,
        "description": "Cubiertas con queso azul gratinado.",
        "image": "https://images.cluvi.com/AlFhQl8FfU/w_1200_AlFhQl8FfU_queso-azul.JPG",
        "isSignature": false,
        "badge": "Cocción Lenta",
        "tags": [
            "Costillas"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "champi-ones-con-salsa-de-queso-azul-1",
        "categoryId": "entradas",
        "name": "Champiñones con Salsa de Queso Azul",
        "rawName": "CHAMPIÑONES CON SALSA DE QUESO AZUL",
        "price": 28900,
        "description": "Champiñones salteados en aceite de oliva, bañados en salsa de queso azul y gratinados con queso doble crema. Acompañados de pan artellano.",
        "image": "https://images.cluvi.com/WD5xo8PFZj/w_1200_WD5xo8PFZj_champinones-en-salsa-de-queso-azul.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Entradas"
        ]
    },
    {
        "id": "caf-americano",
        "categoryId": "bebidas-calientes",
        "name": "Café Americano",
        "rawName": "CAFÉ AMERICANO",
        "price": 6900,
        "description": "Deliciosa preparación artesanal de Café Americano.",
        "image": "assets/products/cafe-americano.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "cheesecake",
        "categoryId": "postres",
        "name": "Cheesecake",
        "rawName": "CHEESECAKE",
        "price": 18400,
        "description": "Bañado en salsa de frutos rojos.",
        "image": "https://images.cluvi.com/SPqfj1Yiul/w_1200_SPqfj1Yiul_chessecake.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "baby-beef-ajillo",
        "categoryId": "baby-beef",
        "name": "Baby Beef Ajillo",
        "rawName": "BABY BEEF AJILLO",
        "price": 65700,
        "description": "Con mantequilla de ajo a las finas hierbas.",
        "image": "https://images.cluvi.com/WpRHqoJlBc/w_1200_WpRHqoJlBc_1_baby-beef-al-ajillo.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "hamburguesa-aguacate",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Aguacate",
        "rawName": "HAMBURGUESA AGUACATE",
        "price": 30900,
        "description": "Con aguacate, tomate y lechuga.",
        "image": "https://images.cluvi.com/wkgSC8113S/w_1200_wkgSC8113S_aguacate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "costillas-louisiana",
        "categoryId": "costillas",
        "name": "Costillas Louisiana",
        "rawName": "COSTILLAS LOUISIANA",
        "price": 76400,
        "description": "Con salsa barbecue, caramelizada con miel y Jack Daniels.",
        "image": "https://images.cluvi.com/ckHjisBq4v/w_1200_ckHjisBq4v_louisiana.JPG",
        "isSignature": false,
        "badge": "Cocción Lenta",
        "tags": [
            "Costillas"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "caf-latte",
        "categoryId": "bebidas-calientes",
        "name": "Café Latte",
        "rawName": "CAFÉ LATTE",
        "price": 7200,
        "description": "Deliciosa preparación artesanal de Café Latte.",
        "image": "assets/products/cafe-latte.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "agua-con-gas",
        "categoryId": "bebidas-frias",
        "name": "Agua con Gas",
        "rawName": "AGUA CON GAS",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Agua con Gas.",
        "image": "assets/products/agua-con-gas.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "cerveza-corona",
        "categoryId": "cervezas",
        "name": "Cerveza Corona",
        "rawName": "CERVEZA CORONA",
        "price": 16400,
        "description": "Deliciosa preparación artesanal de Cerveza Corona.",
        "image": "assets/products/cerveza-corona.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Cervezas"
        ]
    },
    {
        "id": "sopa-minestrone",
        "categoryId": "sopas",
        "name": "Sopa Minestrone",
        "rawName": "SOPA MINESTRONE",
        "price": 22700,
        "description": "Vegetales con un toque de pollo desmechado y pasta. Acompañada de queso parmesano y pan artellano.",
        "image": "https://images.cluvi.com/ZZlUX22Rct/w_1200_ZZlUX22Rct_minestrone.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sopas"
        ]
    },
    {
        "id": "baby-beef-champi-ones",
        "categoryId": "baby-beef",
        "name": "Baby Beef Champiñones",
        "rawName": "BABY BEEF CHAMPIÑONES",
        "price": 67400,
        "description": "Con champiñones salteados al wok en aceite de oliva y pimienta.",
        "image": "https://images.cluvi.com/Z7P1lsRhy9/w_1200_Z7P1lsRhy9_1_baby-beef-champinones.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "asado-de-pollo-mexicano",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo Mexicano",
        "rawName": "ASADO DE POLLO MEXICANO",
        "price": 56400,
        "description": "Con frijoles refritos, lechuga, guacamole, tomate y queso fresco rallado. Acompañado de tortillas de maíz y jalapeños.(No incluye papas ni ensalada Primos).",
        "image": "https://images.cluvi.com/sJaEcPxkiT/w_1200_sJaEcPxkiT_asado-mexicano.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "cordon-bleu-de-pollo",
        "categoryId": "especiales",
        "name": "Cordon Bleu de Pollo",
        "rawName": "CORDON BLEU DE POLLO",
        "price": 44200,
        "description": "Carne de pollo molida, con curry y hierbas aromáticas, rellena con jamón y queso doble crema fundido a la parrilla. Acompañado de papas y ensalada primos.",
        "image": "https://images.cluvi.com/ylEHYYeFYu/w_1200_ylEHYYeFYu_cordon-blue-de-pollo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "hamburguesa-champiqueso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Champiqueso",
        "rawName": "HAMBURGUESA CHAMPIQUESO",
        "price": 35900,
        "description": "Salsa de champiñones con cebolla al vino y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/FgKfFHWuBP/w_1200_FgKfFHWuBP_champiqueso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "sandwichw-lomo-de-res-con-salsa-de-queso-azul",
        "categoryId": "sandwiches",
        "name": "Sandwichw Lomo de Res con Salsa de Queso Azul",
        "rawName": "SANDWICHW  LOMO DE RES CON SALSA DE QUESO AZUL",
        "price": 49900,
        "description": "Julianas de lomo viche con salsa de queso azul, rúcula, tomate y lechuga crespa con un toque de vinagre balsámico y miel. Terminadas con cebolla morada caramelizada (opcional con o sin la cebolla caramelizada).",
        "image": "https://images.cluvi.com/wJGCvY1iPS/w_1200_wJGCvY1iPS_sandwich-lomo-queso-azul.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "falafel-1",
        "categoryId": "entradas",
        "name": "Falafel",
        "rawName": "FALAFEL",
        "price": 19200,
        "description": "Bolas de garbanzo, hierbas y especias. Fritas y acompañadas de suave hummus de garbanzo.",
        "image": "https://images.cluvi.com/sjhxvv2Rnf/w_1200_sjhxvv2Rnf_falafel.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Entradas"
        ]
    },
    {
        "id": "creme-brulee",
        "categoryId": "postres",
        "name": "Creme Brulee",
        "rawName": "CREME BRULEE",
        "price": 17400,
        "description": "De la cocina francesa, cremoso, con vainilla, crujiente y caramelizado al soplete.",
        "image": "https://images.cluvi.com/JUkmlJTVOe/w_1200_JUkmlJTVOe_creme-brulee.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "hamburguesa-fusi-n",
        "categoryId": "vegetarianos",
        "name": "Hamburguesa Fusión",
        "rawName": "HAMBURGUESA FUSIÓN",
        "price": 29900,
        "description": "Hamburguesa con carne de zapallo, tofu y garbanzo. Con julianas de cebolla al wok, tomates a la parrilla y lechuga. Aderezada con mayonesa de queso parmesano.",
        "image": "https://images.cluvi.com/fCj6CwdqzU/w_1200_fCj6CwdqzU_fusion.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "1-2-ensalada-primos",
        "categoryId": "ensaladas",
        "name": "1/2 Ensalada Primos",
        "rawName": "1/2 ENSALADA PRIMOS",
        "price": 25400,
        "description": "Un clásico nuestro. Con pollo, jamón, mozzarella, piña, tomate, lechuga y mayonesa primos.",
        "image": "https://images.cluvi.com/PF5tVXGe0i/w_1200_PF5tVXGe0i_adobe-express-file.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "asado-de-pollo-mixto-gratinado",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo Mixto Gratinado",
        "rawName": "ASADO DE POLLO MIXTO GRATINADO",
        "price": 56400,
        "description": "Salsa de champiñones con cebolla al vino, salsa de tomate, salsa barbecue, jamón, tomate tomillo y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/DBnsKt7knV/w_1200_DBnsKt7knV_asado-mixto.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "costilla-orgi-stica",
        "categoryId": "costillas",
        "name": "Costilla Orgiástica",
        "rawName": "Costilla Orgiástica",
        "price": 74200,
        "description": "Con salsa agridulce de piña, pimentón y cebolla caramelizada cubierta con queso doble crema gratinada.",
        "image": "https://images.cluvi.com/QtCoerliFK/w_1200_QtCoerliFK_orgiastica.JPG",
        "isSignature": false,
        "badge": "Especialidad",
        "tags": [
            "Costillas"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "copa-de-helado",
        "categoryId": "postres",
        "name": "Copa de Helado",
        "rawName": "COPA DE HELADO",
        "price": 15900,
        "description": "Helado de vainilla, bañado con una salsa de tu elección: maracuyá, chocolate, fresa, frutos rojos o mora.",
        "image": "https://images-mini.cluvi.com/kJebfdzjBs/w_1200_kJebfdzjBs_003-helado.png",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "capuccino",
        "categoryId": "bebidas-calientes",
        "name": "Capuccino",
        "rawName": "CAPUCCINO",
        "price": 7900,
        "description": "Deliciosa preparación artesanal de Capuccino.",
        "image": "https://images.cluvi.com/oeX31IbzQi/w_1200_oeX31IbzQi_capuchino.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "baby-beef-queso-azul",
        "categoryId": "baby-beef",
        "name": "Baby Beef Queso Azul",
        "rawName": "BABY BEEF QUESO AZUL",
        "price": 69900,
        "description": "Bañado en salsa de queso azul.",
        "image": "https://images.cluvi.com/x4u8PuignO/w_1200_x4u8PuignO_1_baby-beef-queso-azul.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "sandwich-pollo-apanado-gratinado",
        "categoryId": "sandwiches",
        "name": "Sandwich Pollo Apanado Gratinado",
        "rawName": "SANDWICH  POLLO APANADO GRATINADO",
        "price": 37900,
        "description": "Milanesa de pollo, tomate, lechuga crespa, queso doble crema gratinado y salsa miel mostaza.",
        "image": "https://images.cluvi.com/6iL3MQHtTG/w_1200_6iL3MQHtTG_sandwich-de-pollo-apanado.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "ensalada-thai",
        "categoryId": "ensaladas",
        "name": "Ensalada Thai",
        "rawName": "ENSALADA THAI",
        "price": 39900,
        "description": "Mix de lechugas con lomitos de pollo marinados en jengibre a la parrilla, champiñones, pimentón, tomates cherry, ajonjolí y julianas crocantes de maíz. Acompañada de vinagreta thai.",
        "image": "https://images.cluvi.com/C5tfZ7xuds/w_1200_C5tfZ7xuds_ensalada-thai.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "hamburguesa-doble-carne-queso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Doble Carne+Queso",
        "rawName": "HAMBURGUESA DOBLE CARNE+QUESO",
        "price": 35900,
        "description": "Con lechuga, tomate y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/NE4YVvz8GN/w_1200_NE4YVvz8GN_doble-carne-queso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "cordon-bleu-de-res",
        "categoryId": "especiales",
        "name": "Cordon Bleu de Res",
        "rawName": "CORDON BLEU DE RES",
        "price": 48400,
        "description": "Carne de res molida, con mostaza y finas hierbas, rellena con jamón y queso doble crema fundido a la parrilla. Acompañado de papas y ensalada primos.",
        "image": "https://images.cluvi.com/ZmymOIW0fN/w_1200_ZmymOIW0fN_cordon-blue-de-res.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "papas-primos",
        "categoryId": "entradas",
        "name": "Papas Primos",
        "rawName": "PAPAS PRIMOS",
        "price": 15900,
        "description": "Las de siempre, las que no pueden faltar, nuestras deliciosas, grandes y crocantes papas a la francesa, acompañadas de nuestra inigualable salsa primos.",
        "image": "https://images.cluvi.com/I1gJR1Des7/w_1200_I1gJR1Des7_papas-primos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Entradas"
        ]
    },
    {
        "id": "hamburguesa-turca",
        "categoryId": "vegetarianos",
        "name": "Hamburguesa Turca",
        "rawName": "HAMBURGUESA TURCA",
        "price": 29900,
        "description": "Hamburguesa con carne de garbanzos y especias, en pan árabe. Acompañada de ensalada de tomate con tahini.",
        "image": "https://images-mini.cluvi.com/6Cq6eArmrh/w_1200_6Cq6eArmrh_002-hamburguesa-turca.png",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "cerveza-stella-artois",
        "categoryId": "cervezas",
        "name": "Cerveza Stella Artois",
        "rawName": "CERVEZA STELLA ARTOIS",
        "price": 16400,
        "description": "Deliciosa preparación artesanal de Cerveza Stella Artois.",
        "image": "assets/products/cerveza-stella.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Cervezas"
        ]
    },
    {
        "id": "baby-beef-pimienta",
        "categoryId": "baby-beef",
        "name": "Baby Beef Pimienta",
        "rawName": "BABY BEEF PIMIENTA",
        "price": 67900,
        "description": "Con mantequilla de pimienta y finas hierbas, mezcladas con crema de leche.",
        "image": "https://images.cluvi.com/Ud15O7qHJI/w_1200_Ud15O7qHJI_1_baby-beef-pimienta.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "malteada-de-frutas-naturales",
        "categoryId": "postres",
        "name": "Malteada de Frutas Naturales",
        "rawName": "MALTEADA DE FRUTAS NATURALES",
        "price": 19900,
        "description": "Crea tu malteada con frutas 100% naturales y una deliciosa salsa artesanal.Opciones salsas: Mango, Lulo, Mora, Fresa, Guanábana, Maracuyá.Opciones de fruta: Mango, Lulo, Mora, Fresa, Guanábana, Maracuyá.",
        "image": "https://images.cluvi.com/I5PBIXVAtm/w_1200_I5PBIXVAtm_adobe-express-file-2.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "espresso-corto",
        "categoryId": "bebidas-calientes",
        "name": "Espresso Corto",
        "rawName": "ESPRESSO CORTO",
        "price": 5900,
        "description": "Deliciosa preparación artesanal de Espresso Corto.",
        "image": "https://images.cluvi.com/lWbRECzE2f/w_1200_lWbRECzE2f_espresso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "hamburguesa-encebollada-queso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Encebollada+Queso",
        "rawName": "HAMBURGUESA ENCEBOLLADA+QUESO",
        "price": 35900,
        "description": "Con cebolla salteada al wok, lechuga y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/Sd4d4ri3Py/w_1200_Sd4d4ri3Py_encebo-queso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "sandwich-filete-de-pollo-agridulce-gratinado",
        "categoryId": "sandwiches",
        "name": "Sandwich Filete de Pollo Agridulce Gratinado",
        "rawName": "SANDWICH FILETE DE POLLO AGRIDULCE GRATINADO",
        "price": 37900,
        "description": "Filete de pollo con salsa agridulce, queso doble crema gratinado y rúcula bañada en vinagreta Mediterránea.",
        "image": "https://images.cluvi.com/BmreENzfMp/w_1200_BmreENzfMp_sandwich-de-pollo-agridulce-gratinado.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "quesadillas-con-pollo",
        "categoryId": "especiales",
        "name": "Quesadillas con Pollo",
        "rawName": "QUESADILLAS CON POLLO",
        "price": 32700,
        "description": "Tortillas de trigo con pollo desmechado y queso doble crema fundido. Acompañadas de pico de gallo.",
        "image": "https://images.cluvi.com/6XnehgoCAa/w_1200_6XnehgoCAa_quesadilla-con-pollo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "costilla-syracha",
        "categoryId": "costillas",
        "name": "Costilla Syracha",
        "rawName": "Costilla Syracha",
        "price": 76400,
        "description": "Con salsa barbecue y syracha con picante medio que se disuelve al probarla.",
        "image": "https://images.cluvi.com/eONF4tLQPn/w_1200_eONF4tLQPn_syracha.JPG",
        "isSignature": false,
        "badge": "Cocción Lenta",
        "tags": [
            "Costillas"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "yucas-fritas",
        "categoryId": "entradas",
        "name": "Yucas Fritas",
        "rawName": "YUCAS FRITAS",
        "price": 14900,
        "description": "Deliciosas yucas crocantes.",
        "image": "https://images.cluvi.com/fNgSgMmElN/w_1200_fNgSgMmElN_yucas-fritas.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Entradas"
        ]
    },
    {
        "id": "burritos-veggies",
        "categoryId": "vegetarianos",
        "name": "Burritos Veggies",
        "rawName": "BURRITOS VEGGIES",
        "price": 35400,
        "description": "Tortillas de trigo rellenas con frijol refrito, queso doble crema gratinado, un toque de crema agria y pico de gallo. Acompañados de jalapeños.",
        "image": "https://images.cluvi.com/R95yyFkXxr/w_1200_R95yyFkXxr_adobe-express-file-3.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "ensalada-de-lomo-salteado",
        "categoryId": "ensaladas",
        "name": "Ensalada de Lomo Salteado",
        "rawName": "ENSALADA DE LOMO SALTEADO",
        "price": 48700,
        "description": "Lechuga romana, tomate cherry, ajonjolí, aguacate y lomo viche marinado en vino tinto salteado al wok. Acompañada de vinagreta a base de jengibre.",
        "image": "https://images.cluvi.com/LTLBF1nQho/w_1200_LTLBF1nQho_ensalada-de-lomo-salteado.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "asado-de-pollo-orgi-stico",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo Orgiástico",
        "rawName": "ASADO DE POLLO ORGIÁSTICO",
        "price": 56400,
        "description": "Con salsa agridulce de piña, pimentón y cebolla caramelizada, jamón y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/yCzrQgF2MW/w_1200_yCzrQgF2MW_asado-orgiastico.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "sandwich-pollo-desmechado-y-aguacate",
        "categoryId": "sandwiches",
        "name": "Sandwich Pollo Desmechado y Aguacate",
        "rawName": "SANDWICH  POLLO DESMECHADO Y AGUACATE",
        "price": 37900,
        "description": "Pollo desmechado con mayonesa Primos, aguacate en julianas, tomate y lechuga.",
        "image": "https://images.cluvi.com/YDILzrkSnW/w_1200_YDILzrkSnW_sandwich-de-pollo-y-aguacate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "pavlova",
        "categoryId": "postres",
        "name": "Pavlova",
        "rawName": "PAVLOVA",
        "price": 20700,
        "description": "Copa con crujientes merengues, helado de vainilla y crema batida. Pídela de frutos rojos, brownie con salsa de chocolate o banano con caramelo.",
        "image": "https://images.cluvi.com/zsqos87tiq/w_1200_zsqos87tiq_pavlova-frutos-rojos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "hamburguesa-hawaiana",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Hawaiana",
        "rawName": "HAMBURGUESA HAWAIANA",
        "price": 35900,
        "description": "Con jamón, piña y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/mEoVdw3Hvc/w_1200_mEoVdw3Hvc_hawaiiana.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "asado-de-pollo-primos",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo Primos",
        "rawName": "ASADO DE POLLO  PRIMOS",
        "price": 52900,
        "description": "Con salsa barbecue. Filete de pollo seleccionado, marinado en ajo y mostaza. Acompañado con ensalada primos y papas, nuestro proceso es artesanal. Las papas pueden cambiarse por otra porción de la misma ensalada. &lt;/p&gt;",
        "image": "https://images.cluvi.com/4kg8jl0hRR/w_1200_4kg8jl0hRR_asado-primos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "tacos-veggies",
        "categoryId": "vegetarianos",
        "name": "Tacos Veggies",
        "rawName": "TACOS VEGGIES",
        "price": 29900,
        "description": "Tortillas crocantes de maíz con frijol refrito, guacamole, tomate, lechuga y queso fresco rallado. Acompañados de jalapeños.",
        "image": "https://images.cluvi.com/lxORuY4GAt/w_1200_lxORuY4GAt_tacos-veggies.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Opciones Vegetarianas"
        ]
    },
    {
        "id": "salm-n-en-quinua",
        "categoryId": "especiales",
        "name": "Salmón en Quinua",
        "rawName": "SALMÓN EN QUINUA",
        "price": 64900,
        "description": "Salmón a la plancha, sobre una cama de quinua, con vegetales salteados y vinagreta verde de cilantro con eneldo.",
        "image": "https://images.cluvi.com/VK3AaDa4ah/w_1200_VK3AaDa4ah_salmon-en-quinua.JPG",
        "isSignature": false,
        "badge": "Corte Fino",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "baby-beef-mostaza",
        "categoryId": "baby-beef",
        "name": "Baby Beef Mostaza",
        "rawName": "BABY BEEF MOSTAZA",
        "price": 67900,
        "description": "Suave salsa de mostaza, mezclada con crema de leche.",
        "image": "https://images.cluvi.com/0W2Pe7bcVY/w_1200_0W2Pe7bcVY_1_baby-beef-mostaza.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "espresso-largo",
        "categoryId": "bebidas-calientes",
        "name": "Espresso Largo",
        "rawName": "ESPRESSO LARGO",
        "price": 6900,
        "description": "Deliciosa preparación artesanal de Espresso Largo.",
        "image": "https://images.cluvi.com/MDOjZpWGCT/w_1200_MDOjZpWGCT_espresso-largo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "baby-beef-bearnese",
        "categoryId": "baby-beef",
        "name": "Baby Beef Bearnese",
        "rawName": "BABY BEEF BEARNESE",
        "price": 67900,
        "description": "Clásica salsa francesa que combina sabores a anchoas, alcaparras, nueces y estragón.",
        "image": "https://images.cluvi.com/fjh1MdkdXK/w_1200_fjh1MdkdXK_1_baby-beef-bearnese.jpg",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "1-2-ensalada-c-sar-con-pollo-y-aguacate",
        "categoryId": "ensaladas",
        "name": "1/2 Ensalada César con Pollo y Aguacate",
        "rawName": "1/2 ENSALADA CÉSAR CON POLLO Y AGUACATE",
        "price": 38900,
        "description": "Lechuga romana aderezada con vinagre de anchoas y queso parmesano,  lomitos de pollo marinados en balsámico, aguacate en julianas y  crutones.",
        "image": "https://images.cluvi.com/1yZekhrY8D/w_1200_1yZekhrY8D_adobe-express-file-1.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Ensaladas"
        ]
    },
    {
        "id": "asado-de-pollo-con-aguacate",
        "categoryId": "asados-pollo",
        "name": "Asado de Pollo con Aguacate",
        "rawName": "ASADO DE POLLO CON AGUACATE",
        "price": 56400,
        "description": "Con salsa barbecue, aguacate en julianas y tomate",
        "image": "https://images.cluvi.com/J3YOQFClij/w_1200_J3YOQFClij_asado-de-aguacate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "sandwich-filete-de-pollo-con-queso-gratinado",
        "categoryId": "sandwiches",
        "name": "Sandwich Filete de Pollo con Queso Gratinado",
        "rawName": "SANDWICH FILETE DE POLLO CON QUESO GRATINADO",
        "price": 37900,
        "description": "Filete de pollo con tomate, rúcula bañada en vinagreta mediterránea y queso doble crema gratinado.",
        "image": "https://images-mini.cluvi.com/GtUIsDvBMy/w_1200_GtUIsDvBMy_sandwich.png",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "tiramis",
        "categoryId": "postres",
        "name": "Tiramisú",
        "rawName": "TIRAMISÚ",
        "price": 18400,
        "description": "Clásico de la cocina italiana con bizcochos mojados en café con licor. Un poco más húmedo que el tradicional.",
        "image": "https://images.cluvi.com/Fp6LdnSxZv/w_1200_Fp6LdnSxZv_turamisu.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "hamburguesa-jucy-lucy",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Jucy Lucy",
        "rawName": "HAMBURGUESA JUCY LUCY",
        "price": 41200,
        "description": "Tradicional Jucy Lucy elaborada con carne rellena de tocineta crocante, queso pepper Jack, con lechuga crespa y tomate.",
        "image": "https://images.cluvi.com/q2i47wdTK8/w_1200_q2i47wdTK8_jucy-lucy-1.JPG",
        "isSignature": false,
        "badge": "Jucy Lucy Original",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "salm-n-con-salsa-de-queso-azul",
        "categoryId": "especiales",
        "name": "Salmón con Salsa de Queso Azul",
        "rawName": "SALMÓN CON SALSA DE QUESO AZUL",
        "price": 68900,
        "description": "Salmón a la plancha, con nuestra tradicional salsa de queso azul y champiñones. Acompañado de mix de lechugas, tomate y aguacate.",
        "image": "https://images.cluvi.com/Y7feS0pmMw/w_1200_Y7feS0pmMw_salmon-queso-azul.JPG",
        "isSignature": false,
        "badge": "Corte Fino",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "macchiato",
        "categoryId": "bebidas-calientes",
        "name": "Macchiato",
        "rawName": "MACCHIATO",
        "price": 7900,
        "description": "Deliciosa preparación artesanal de Macchiato.",
        "image": "https://images.cluvi.com/hXmgY0TCV2/w_1200_hXmgY0TCV2_macciato.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Calientes"
        ]
    },
    {
        "id": "sandwich-roast-beef-con-aguacate",
        "categoryId": "sandwiches",
        "name": "Sandwich Roast Beef con Aguacate",
        "rawName": "SANDWICH  ROAST BEEF CON AGUACATE",
        "price": 46700,
        "description": "Roast beef, aguacate en julianas, tomate y lechuga crespa. (Opcional: frío o caliente). Acompañado de salsa barbecue.",
        "image": "https://images.cluvi.com/dntc1X9AmI/w_1200_dntc1X9AmI_sandwich-de-roast-beef-con-aguacate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Sándwiches"
        ]
    },
    {
        "id": "hamburguesa-ltt-queso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa LTT+QUESO",
        "rawName": "HAMBURGUESA LTT+QUESO",
        "price": 41200,
        "description": "Con tocineta crocante, lechuga, tomate y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/84NAORFqBn/w_1200_84NAORFqBn_ltt-queso.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "torta-mousse-de-chocolate",
        "categoryId": "postres",
        "name": "Torta Mousse de Chocolate",
        "rawName": "TORTA MOUSSE DE CHOCOLATE",
        "price": 18400,
        "description": "Nuestra tradicional torta con 3 capas de chocolate: base de brownie, capa intermedia de mousse, terminado con un delicioso ganache.",
        "image": "https://images.cluvi.com/bwaekVCHUM/w_1200_bwaekVCHUM_torta-mousse-de-chocolate.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Postres"
        ]
    },
    {
        "id": "pinchos-de-lomo-teriyaki",
        "categoryId": "baby-beef",
        "name": "Pinchos de Lomo Teriyaki",
        "rawName": "PINCHOS DE LOMO TERIYAKI",
        "price": 56900,
        "description": "Pinchos de lomo viche en salsa teriyaki.",
        "image": "https://images.cluvi.com/195452xKdX/w_1200_195452xKdX_pincho-de-lomo-teriyaki.JPG",
        "isSignature": true,
        "badge": "Insignia Primos",
        "tags": [
            "Baby Beef"
        ],
        "cookingOptions": [
            "Término Azul (Sellado)",
            "Término Medio (Recomendado)",
            "Tres Cuartos (3/4)",
            "Bien Asado"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada verde de la casa",
            "Yuca frita crocante"
        ],
        "weight": "350g de lomo fino seleccionado"
    },
    {
        "id": "pinchos-de-pollo",
        "categoryId": "asados-pollo",
        "name": "Pinchos de Pollo",
        "rawName": "PINCHOS DE POLLO",
        "price": 44400,
        "description": "Pinchos de pechuga de pollo.",
        "image": "https://images.cluvi.com/cz7Z2ITIzZ/w_1200_cz7Z2ITIzZ_pinchos-de-pollo.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Asados de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "plato-primos",
        "categoryId": "especiales",
        "name": "Plato Primos",
        "rawName": "PLATO PRIMOS",
        "price": 48400,
        "description": "Roast beef en salsa barbecue. Acompañado de papas y ensalada primos. (opcional frío o caliente)",
        "image": "https://images.cluvi.com/ojIHiN3EbQ/w_1200_ojIHiN3EbQ_plato-primos.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Especiales"
        ],
        "sides": [
            "Papas a la francesa",
            "Papa al vapor con crema agria",
            "Ensalada Primos",
            "Yuca frita"
        ]
    },
    {
        "id": "cimarrona",
        "categoryId": "bebidas-frias",
        "name": "Cimarrona",
        "rawName": "CIMARRONA",
        "price": 13200,
        "description": "Limonada natural sin azúcar, en agua con gas, servida en vaso michelado.",
        "image": "https://images.cluvi.com/aNudNOYwZc/w_1200_aNudNOYwZc_cimarrona.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "hamburguesa-mixta",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Mixta",
        "rawName": "HAMBURGUESA  MIXTA",
        "price": 35900,
        "description": "Salsa de champiñones con cebolla al vino, tomate, salsa de tomate, jamón y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/9YEMmBn2oA/w_1200_9YEMmBn2oA_mixta.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "hamburguesa-napolitana",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Napolitana",
        "rawName": "HAMBURGUESA NAPOLITANA",
        "price": 32900,
        "description": "Con jamón, queso doble crema gratinado, tomate, salsa de tomate y orégano.",
        "image": "https://images.cluvi.com/R4aZvGS33B/w_1200_R4aZvGS33B_napolitana.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "ginger-fizz-primos",
        "categoryId": "bebidas-frias",
        "name": "Ginger Fizz Primos",
        "rawName": "GINGER FIZZ PRIMOS",
        "price": 12900,
        "description": "Bebida de la casa. Burbujeante y refrescante a base de jengibre y limón.",
        "image": "https://images.cluvi.com/nxfYWjEFJn/w_1200_nxfYWjEFJn_ginger-fizz.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "hamburguesa-orgi-stica",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Orgiástica",
        "rawName": "HAMBURGUESA ORGIÁSTICA",
        "price": 41200,
        "description": "Con salsa agridulce de piña, pimentón y cebolla caramelizada, pollo desmechado, jamón y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/Ay0luG8VMk/w_1200_Ay0luG8VMk_orgiastica-1.JPG",
        "isSignature": false,
        "badge": "Especialidad",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "jamaica-fizz",
        "categoryId": "bebidas-frias",
        "name": "Jamaica Fizz",
        "rawName": "JAMAICA FIZZ",
        "price": 13200,
        "description": "Bebida refrescante, natural y burbujeante a base de flor de Jamaica.",
        "image": "https://images.cluvi.com/fw2CecFwfY/w_1200_fw2CecFwfY_jamaica-fizz.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "hamburguesa-queso-azul",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Queso Azul",
        "rawName": "HAMBURGUESA QUESO AZUL",
        "price": 39200,
        "description": "Con queso azul y rúgula bañada en vinagreta mediterránea.",
        "image": "https://images.cluvi.com/5KQYlOpz3q/w_1200_5KQYlOpz3q_queso-azul-1.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "lim-n-naranja-fizz",
        "categoryId": "bebidas-frias",
        "name": "Limón Naranja Fizz",
        "rawName": "LIMÓN NARANJA FIZZ",
        "price": 13200,
        "description": "Bebida refrescante, natural y burbujeante a base de zumo de limón y naranja.",
        "image": "https://images.cluvi.com/98SmeMGZte/w_1200_98SmeMGZte_limon-naranja-fizz.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "hamburguesa-sencilla",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Sencilla",
        "rawName": "HAMBURGUESA SENCILLA",
        "price": 28900,
        "description": "Con lechuga y tomate.",
        "image": "https://images.cluvi.com/dkc5Vc0q6b/w_1200_dkc5Vc0q6b_sencilla.JPG",
        "isSignature": false,
        "badge": "Pan Sellado Clásico",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "maracuy-lulo-fizz",
        "categoryId": "bebidas-frias",
        "name": "Maracuyá Lulo Fizz",
        "rawName": "MARACUYÁ LULO FIZZ",
        "price": 13200,
        "description": "Bebida refrescante, natural y burbujeante a base de maracuyá y lulo.",
        "image": "assets/products/maracuya-lulo-fizz.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "mandarina-natural-reci-n-exprimida",
        "categoryId": "bebidas-frias",
        "name": "Mandarina Natural Recién Exprimida",
        "rawName": "MANDARINA NATURAL RECIÉN EXPRIMIDA",
        "price": 16400,
        "description": "Deliciosa preparación artesanal de Mandarina Natural Recién Exprimida.",
        "image": "assets/products/mandarina-natural.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "hamburguesa-sencilla-queso",
        "categoryId": "hamburguesas",
        "name": "Hamburguesa Sencilla+Queso",
        "rawName": "HAMBURGUESA SENCILLA+QUESO",
        "price": 31900,
        "description": "Con lechuga, tomate y queso doble crema gratinado.",
        "image": "https://images.cluvi.com/GfRDhvnH7C/w_1200_GfRDhvnH7C_sencilla-queso.JPG",
        "isSignature": false,
        "badge": "Pan Sellado Clásico",
        "tags": [
            "Hamburguesas"
        ],
        "cookingOptions": [
            "Carne de Res 130g",
            "Carne de Res 180g",
            "Pechuga de Pollo"
        ],
        "sides": [
            "Papas a la francesa",
            "Yuca frita",
            "Aros de cebolla"
        ]
    },
    {
        "id": "limonada-cerezada",
        "categoryId": "bebidas-frias",
        "name": "Limonada Cerezada",
        "rawName": "LIMONADA CEREZADA",
        "price": 13200,
        "description": "Deliciosa preparación artesanal de Limonada Cerezada.",
        "image": "https://images.cluvi.com/1JH1QkTd38/w_1200_1JH1QkTd38_limonada-cerezada.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "limonada-de-coco",
        "categoryId": "bebidas-frias",
        "name": "Limonada de Coco",
        "rawName": "LIMONADA DE COCO",
        "price": 17400,
        "description": "Deliciosa preparación artesanal de Limonada de Coco.",
        "image": "https://images.cluvi.com/29vWH3GOFm/w_1200_29vWH3GOFm_limonada-de-coco.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "limonada-de-hierbabuena",
        "categoryId": "bebidas-frias",
        "name": "Limonada de Hierbabuena",
        "rawName": "LIMONADA DE HIERBABUENA",
        "price": 13200,
        "description": "Deliciosa preparación artesanal de Limonada de Hierbabuena.",
        "image": "https://images.cluvi.com/XKtgkAs5CW/w_1200_XKtgkAs5CW_limonada-de-hierbabuena.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "limonada-natural",
        "categoryId": "bebidas-frias",
        "name": "Limonada Natural",
        "rawName": "LIMONADA NATURAL",
        "price": 10400,
        "description": "Deliciosa preparación artesanal de Limonada Natural.",
        "image": "assets/products/limonada-natural.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "jugos-en-agua",
        "categoryId": "bebidas-frias",
        "name": "Jugos en Agua",
        "rawName": "JUGOS EN AGUA",
        "price": 11200,
        "description": "Mango, Lulo, Mora, Fresa, Guanábana, Maracuyá.",
        "image": "https://images.cluvi.com/jSYPqpGGsp/w_1200_jSYPqpGGsp_jugo-de-lulo-en-agua.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "jugos-en-leche",
        "categoryId": "bebidas-frias",
        "name": "Jugos en Leche",
        "rawName": "JUGOS EN LECHE",
        "price": 13200,
        "description": "Mango, Lulo, Mora, Fresa, Guanábana, Maracuyá.",
        "image": "assets/products/jugo-en-leche.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "mix-agua-fresa-guan-bana",
        "categoryId": "bebidas-frias",
        "name": "Mix Agua Fresa+Guanábana",
        "rawName": "MIX AGUA FRESA+GUANÁBANA",
        "price": 13200,
        "description": "Deliciosa preparación artesanal de Mix Agua Fresa+Guanábana.",
        "image": "https://images.cluvi.com/3m0USrkpId/w_1200_3m0USrkpId_mix-agua-fresa-guanabana.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "mix-agua-lulo-fresa",
        "categoryId": "bebidas-frias",
        "name": "Mix Agua Lulo+Fresa",
        "rawName": "MIX AGUA LULO+FRESA",
        "price": 13200,
        "description": "Deliciosa preparación artesanal de Mix Agua Lulo+Fresa.",
        "image": "https://images.cluvi.com/Na126g7hWe/w_1200_Na126g7hWe_mix-agua-lulo-fresa.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "mix-agua-mango-fresa-maracuy",
        "categoryId": "bebidas-frias",
        "name": "Mix Agua Mango+Fresa+Maracuyá",
        "rawName": "MIX AGUA MANGO+FRESA+MARACUYÁ",
        "price": 13200,
        "description": "Deliciosa preparación artesanal de Mix Agua Mango+Fresa+Maracuyá.",
        "image": "https://images.cluvi.com/JjUD31GXqn/w_1200_JjUD31GXqn_mix-agua-mango-fresa-maracuya.JPG",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "mix-mandarina-mango-jengibre",
        "categoryId": "bebidas-frias",
        "name": "Mix Mandarina+Mango+Jengibre",
        "rawName": "MIX MANDARINA+MANGO+JENGIBRE",
        "price": 16200,
        "description": "Deliciosa preparación artesanal de Mix Mandarina+Mango+Jengibre.",
        "image": "assets/products/mix-mandarina-mango.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "coca-cola-original",
        "categoryId": "bebidas-frias",
        "name": "Coca-cola Original",
        "rawName": "COCA-COLA ORIGINAL",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Coca-cola Original.",
        "image": "assets/products/coca-cola-original.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "coca-cola-zero",
        "categoryId": "bebidas-frias",
        "name": "Coca-cola Zero",
        "rawName": "COCA-COLA ZERO",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Coca-cola Zero.",
        "image": "assets/products/coca-cola-zero.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "ginger",
        "categoryId": "bebidas-frias",
        "name": "Ginger",
        "rawName": "GINGER",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Ginger.",
        "image": "assets/products/ginger.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    },
    {
        "id": "soda",
        "categoryId": "bebidas-frias",
        "name": "Soda",
        "rawName": "SODA",
        "price": 9400,
        "description": "Deliciosa preparación artesanal de Soda.",
        "image": "assets/products/soda.jpg",
        "isSignature": false,
        "badge": "",
        "tags": [
            "Bebidas Frías"
        ]
    }
]
};

// Exportar globalmente para el navegador
if (typeof window !== 'undefined') {
  window.PRIMOS_DATA = PRIMOS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRIMOS_DATA;
}
