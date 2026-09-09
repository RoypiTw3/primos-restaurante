/**
 * PRIMOS RESTAURANTE · SAN ANTONIO CALI (1982)
 * Aplicación Web Integral, Menú Digital de Autor y Sistema de Reservas
 * (Sin Emojis · Catálogo Unificado No Repetitivo · Spotlight Glow)
 */

(function () {
  'use strict';

  // Referencias a datos globales
  const { restaurant, categories, products } = window.PRIMOS_DATA;

  // Diccionario de Iconografía Vectorial SVG Artesanal (Sustituye 100% los emojis)
  const SVG_ICONS = {
    beef: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8A10 10 0 0 1 12 2z"/><path d="M2 12h20"/><path d="M12 2v10"/></svg>`,
    appetizer: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 17h18a1 1 0 0 1 1 1v1H2v-1a1 1 0 0 1 1-1z"/><path d="M4 17a8 8 0 1 1 16 0"/><circle cx="12" cy="7" r="1.5"/></svg>`,
    burger: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 11a8 8 0 0 1 16 0H4z"/><rect x="2" y="14" width="20" height="3" rx="1.5"/><path d="M4 20h16a2 2 0 0 0 2-2H2a2 2 0 0 0 2 2z"/></svg>`,
    ribs: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`,
    chicken: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 10a6 6 0 0 0-12 0c0 4 3 8 6 10 3-2 6-6 6-10z"/><circle cx="12" cy="9" r="2"/></svg>`,
    soup: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 11h18a8 8 0 0 1-8 8H11a8 8 0 0 1-8-8z"/><path d="M8 4c0 2-2 3-2 5M12 4c0 2-2 3-2 5M16 4c0 2-2 3-2 5"/></svg>`,
    salad: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 21a9 9 0 0 1-9-9c0-5 4-9 9-9s9 4 9 9a9 9 0 0 1-9 9z"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>`,
    sandwich: `<svg class="svg-icon" viewBox="0 0 24 24"><polygon points="3 6 21 6 12 18 3 6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    plant: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 22v-9"/><path d="M12 13a6 6 0 0 1 6-6c0 4-2.5 6-6 6z"/><path d="M12 17a6 6 0 0 0-6-6c0 4 2.5 6 6 6z"/></svg>`,
    chef: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M6 18h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2z"/><path d="M6 18V9a4 4 0 0 1 4-4 4 4 0 0 1 8 0v9"/></svg>`,
    dessert: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M4 14h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"/><path d="M12 4v4"/><circle cx="12" cy="3" r="1.5"/></svg>`,
    beer: `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M5 2h10v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V2z"/><path d="M15 6h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3"/></svg>`,
    'cold-drink': `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M7 2l1.5 18a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2L17 2H7z"/><line x1="6" y1="6" x2="18" y2="6"/></svg>`,
    'hot-drink': `<svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    all: `<svg class="svg-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>`
  };

  function getIconSVG(key) {
    return SVG_ICONS[key] || SVG_ICONS.all;
  }

  // ==========================================================================
  // Sistema Multilingüe Completo (Español, English, Português)
  // ==========================================================================
  const TRANSLATIONS = {
    es: {
      topbar_verified: "San Antonio · Carrera 5 # 2-123, Cali · Desde 1982",
      topbar_line: "Reservas:",
      nav_inicio: "Inicio",
      nav_servicios: "Servicios",
      nav_carta: "Carta",
      nav_baby_beef: "Baby Beef",
      nav_reservas: "Reservas",
      nav_takeaway: "Pide & Recoge",
      nav_historia: "Historia & Arte",
      table_label: "Mesa:",
      cart_btn: "Mi Orden",
      hero_tag: "Tradición Gastronómica · San Antonio · Cali 1982",
      hero_title: "Cortes de autor y clásicos en el corazón de San Antonio",
      hero_desc: "Más de cuatro décadas rindiendo homenaje a la buena parrilla, nuestro legendario Baby Beef con 7 salsas artesanales y la atmósfera artística y colonial de Cali.",
      hero_cta_menu: "Explorar la Carta Completa",
      hero_cta_reserve: "Reservar una Mesa",
      hero_quick_label: "ACCESOS RÁPIDOS:",
      hero_quick_menu: "Carta & Precios",
      hero_quick_baby: "7 Baby Beef Insigne",
      hero_quick_reserve: "Reservas en Sala",
      hero_quick_takeaway: "Pide & Recoge",
      hero_quick_delivery: "Domicilios Cali",
      portal_badge: "Canales Oficiales de Atención · San Antonio 1982",
      portal_title: "¿Cómo Deseas Vivir la Experiencia Primos Hoy?",
      portal_subtitle: "Selecciona tu opción preferida para disfrutar de la mejor parrilla de Cali, ya sea en nuestra casona colonial o desde tu casa.",
      card1_pill: "En Sala & Terraza",
      card1_tag: "Cocina a la Brasa",
      card1_title: "Carta Digital",
      card1_desc: "Explora nuestros 7 cortes de Baby Beef, entradas al carbón, hamburguesas artesanales y postres con precios oficiales.",
      card1_btn: "Ver Carta Digital ↓",
      card2_pill: "Reserva Previa",
      card2_tag: "Experiencia en Mesa",
      card2_title: "Reserva tu Mesa",
      card2_desc: "Asegura tu lugar en el patio colonial de los helechos o en el salón de arte para celebraciones y cenas en familia.",
      card2_btn: "Reservar Mesa →",
      card3_pill: "Listo al Llegar",
      card3_tag: "Retiro en el Local",
      card3_title: "Pide & Recoge",
      card3_desc: "Ordena tus cortes a la brasa con anticipación y recógelos recién preparados sin filas en nuestra sede de San Antonio.",
      card3_btn: "Pedir para Llevar →",
      card4_pill: "Empaque Térmico",
      card4_tag: "A tu Puerta en Cali",
      card4_title: "Domicilios en Cali",
      card4_desc: "Llevamos el sabor del carbón a tu hogar con sellado térmico especial que conserva el término, aroma y temperatura.",
      card4_btn: "Pedir a Domicilio →",
      catalog_super: "CULTURA GASTRONÓMICA · SAN ANTONIO 1982",
      catalog_title: "Nuestra Carta Digital & Especialidades a la Brasa",
      catalog_desc: "Explora nuestras 14 categorías. Personaliza tu término de cocción, selecciona tus guarniciones y realiza tu pedido directamente desde tu mesa.",
      search_placeholder: "Buscar en la carta por plato, salsa o ingrediente (ej. Béarnaise, pimienta, angus, champiñones, limonada)...",
      all_dishes_tab: "Todos los platos",
      dir_badge: "DIRECTORIO OFICIAL",
      dir_title: "Explora Nuestras 14 Secciones Gastronómicas",
      dir_hint: "Toca cualquier sección para ir directamente a sus platos",
      dish_official_price: "Precio oficial",
      dish_customize_btn: "Personalizar +",
      filter_searching: "Buscando",
      filter_dishes_found: "plato(s) encontrado(s)",
      filter_active_cat: "Categoría activa",
      filter_reset_btn: "✕ Ver todos los platos (Restablecer)",
      booking_tag: "Atención en Sala",
      booking_title: "Reserva tu mesa en el corazón de San Antonio",
      booking_desc: "Disfruta de una velada tranquila bajo los árboles de nuestro patio colonial o en el salón principal rodeado de arte colombiano. Atendemos reservas para parejas, familias y eventos privados.",
      booking_hl1: "Confirmación inmediata con el equipo de recepción de Primos",
      booking_hl2: "Servicio continuo de lunes a domingo de 12:00 m. a 10:30 p.m.",
      booking_hl3: "Carrera 5 # 2-123, Barrio Colonial San Antonio, Cali",
      booking_date_lbl: "Fecha",
      booking_time_lbl: "Hora",
      booking_guests_lbl: "Número de Comensales",
      booking_area_lbl: "Ambiente de Preferencia",
      booking_name_lbl: "Nombre y Apellidos",
      booking_occasion_lbl: "Motivo o Notas Especiales",
      booking_btn: "Confirmar Reserva por WhatsApp →",
      cart_title: "Tu Pedido",
      cart_empty_text: "Tu orden aún no tiene platos agregados.",
      cart_subtotal: "Subtotal",
      cart_tip: "Propina sugerida de servicio (10%)",
      cart_total: "Total a Pagar",
      cart_send_btn: "Enviar Pedido por WhatsApp",
      cart_clear_btn: "Vaciar orden",
      modal_doneness_title: "1. Selecciona el Término de la Carne",
      modal_doneness_hint: "Obligatorio para cortes de res al carbón",
      modal_sides_title: "2. Escoge tu Guarnición Incluida",
      modal_sides_hint: "Incluida en el precio del plato",
      modal_pairing_title: "Maridaje Sugerido de la Casa",
      modal_notes_title: "Instrucciones Especiales para la Cocina",
      modal_notes_ph: "¿Sin cebolla? ¿Salsa aparte? Escribe tus preferencias aquí...",
      modal_add_btn: "Añadir a mi Orden",
      historia_tag: "Nuestra historia",
      historia_title: "Había una vez un teatro y una <span class=\"text-rojo\">hamburguesa</span>",
      historia_subtitle: "Más de 40 años siendo parte de Cali. Esta es la historia de Primos: de una barra junto al Teatro San Fernando a la casa de los caleños en San Antonio.",
      historia_caption_fachada: "los gatos de Tejadita nos cuidan desde el techo",
      historia_timeline_title: "44 años en cinco actos",
      historia_timeline_tag: "como en el teatro de al lado",
      historia_acto_1982: "Nace Primos: una barra pequeña en un local junto al emblemático Teatro San Fernando. Hernando Tejada, «Tejadita», pintor, escultor y viejo amigo de la familia, nos regala pequeñas tallas en madera de sus ahora famosos gatos. Hasta los servilleteros eran gatos hechos por sus propias manos.",
      historia_acto_1990s: "Silenciosamente y sin prisa, los gatos se toman el Parque del Perro. Clientes traen fotos y afiches de gatos de sus viajes para decorar el restaurante. Generación tras generación, familias caleñas comparten su primera cita, su cumpleaños y su reunión de viejos amigos en nuestras mesas.",
      historia_acto_2020: "La pandemia nos golpea fuerte. Cerramos nuestras sedes; más de 100 personas de nuestra familia quedan sin empleo. Y entonces pasa algo que no esperábamos: recibimos más de 3.000 mensajes de cariño de los caleños. El cierre sale en El País, Noticias Caracol y Q'hubo. Eso no se olvida.",
      historia_acto_2022: "Con ese apoyo como combustible, volvemos. Esta vez en el barrio San Antonio, el barrio más bonito y patrimonial de Cali, con sus casas coloniales, sus calles empedradas y su ambiente bohemio. El barrio que mejor representa el alma de esta ciudad.",
      historia_acto_2026: "En la Carrera 5 # 2-123, Primos sigue siendo lo que siempre fue: un lugar donde los caleños son protagonistas. Donde la hamburguesa gourmet convive con la historia, el arte y la identidad vallecaucana.",
      historia_completa_title: "La historia completa",
      historia_p1: "En 1982, junto al emblemático Teatro San Fernando en Cali, abrió sus puertas Primos. No nació con pretensiones de grandeza. Nació con sabor, con calidez, con el instinto de que la buena comida une a la gente.",
      historia_p2: "Y así fue. Poco a poco, Primos se convirtió en el lugar al que los caleños van cuando quieren celebrar, cuando extrañan casa, cuando quieren presentarle a alguien la esencia de su ciudad. Generación tras generación, familias caleñas han compartido su primera cita, su cumpleaños, su reunión de viejos amigos en nuestras mesas. Hay algo en la hamburguesa y los cortes de Primos que no se encuentra en otra parte: una combinación de ingredientes y de ese momento en que muerdes y todo encaja, que se ha convertido en parte del ADN gastronómico de Cali.",
      historia_p3: "Desde el puro comienzo, Hernando Tejada, el pintor y escultor, viejo amigo de la familia, nos traía de regalo pequeñas tallas en madera de sus ahora famosos gatos. Hasta los servilleteros eran gatos hechos por sus propias manos. Nos sentimos orgullosos cuando nació, muchos años después, el Gato del Río, pues lo vimos crecer desde pequeñito. Queremos seguir honrando la memoria de Tejadita y sus gatos, patrimonio cultural de todos los caleños.",
      historia_p4_b: "Luego llegó la pandemia.",
      historia_p4: "Como a tantos negocios en Colombia y en el mundo, la crisis de 2020 nos golpeó fuerte. Cerramos nuestras sedes. Más de 100 personas que eran parte de nuestra familia quedaron sin empleo. Fue uno de los momentos más difíciles de nuestra historia.",
      historia_p5_b: "Pero entonces pasó algo que no esperábamos.",
      historia_p5: "Recibimos más de 3.000 mensajes de caleños expresando su cariño y apoyo. Familias enteras escribiendo para decirnos que Primos era su lugar, que sus historias de amor pasaban por nuestras mesas. Eso no se olvida.",
      historia_p6: "En 2022, con ese apoyo como combustible, volvimos. Esta vez en el barrio San Antonio, el barrio más bonito y patrimonial de Cali, con sus casas coloniales coloridas, sus calles empedradas, su ambiente bohemio y tranquilo. El barrio que mejor representa el alma de esta ciudad.",
      historia_p7: "Hoy, en la Carrera 5 # 2-123, Primos sigue siendo lo que siempre fue: un lugar donde los caleños son protagonistas. Donde la hamburguesa gourmet y los cortes tradicionales conviven con la historia, el arte y la identidad vallecaucana.",
      historia_signoff: "Si todavía no nos conoces, ya es hora.<br>Si nos conoces de toda la vida, bienvenido de vuelta a casa.",
      historia_cap_cuadros: "Cuadros de gatos en el salón, homenaje a Hernando Tejada",
      historia_cap_patio: "Patio interior en la casona colonial de San Antonio",
      historia_cta_title: "Ven a escribir tu historia con nosotros",
      historia_cta_btn: "Reservar mesa",
      historia_cta_info: "Carrera 5 # 2-123, San Antonio, Cali · 315 377 1321",
      order_title: "Mi Orden",
      order_mode_table: "En Sala / Mesa",
      order_mode_pickup: "Pide & Recoge",
      order_mode_delivery: "Domicilio",
      order_table_label: "Número de Mesa en Sala:",
      order_pickup_name_label: "Nombre de quien recoge:",
      order_delivery_addr_label: "Dirección en Cali & Barrio:",
      order_subtotal: "Subtotal platos:",
      order_tip: "Propina voluntaria sugerida (10%)",
      order_total: "Total estimado:",
      order_send_btn: "Enviar Pedido a WhatsApp Oficial",
      order_keep_btn: "+ Seguir agregando platos",
      order_clear_btn: "Vaciar orden",
      order_view_btn: "Ver Orden",
      order_empty_title: "Tu orden está vacía",
      order_empty_desc: "Explora nuestra carta y agrega tus cortes y platos favoritos.",
      order_empty_cta: "Explorar la Carta Completa",
      order_notes_ph: "Instrucciones para cocina (ej. salsas aparte, sin hielo)..."
    },
    en: {
      topbar_verified: "San Antonio · Carrera 5 # 2-123, Cali · Est. 1982",
      topbar_line: "Reservations:",
      nav_inicio: "Home",
      nav_servicios: "Services",
      nav_carta: "Menu",
      nav_baby_beef: "Baby Beef",
      nav_reservas: "Reservations",
      nav_takeaway: "Order & Pickup",
      nav_historia: "Heritage & Art",
      table_label: "Table:",
      cart_btn: "My Order",
      hero_tag: "Culinary Heritage · San Antonio · Cali 1982",
      hero_title: "Signature Cuts & Classics in the Heart of San Antonio",
      hero_desc: "More than four decades honoring the art of charcoal grilling, our legendary Baby Beef with 7 artisan sauces, and Cali's vibrant colonial artistic atmosphere.",
      hero_cta_menu: "Explore the Full Menu",
      hero_cta_reserve: "Book a Table",
      hero_quick_label: "QUICK ACCESS:",
      hero_quick_menu: "Menu & Prices",
      hero_quick_baby: "7 Signature Baby Beef",
      hero_quick_reserve: "Table Bookings",
      hero_quick_takeaway: "Order & Pickup",
      hero_quick_delivery: "Cali Delivery",
      portal_badge: "Official Guest Services · San Antonio 1982",
      portal_title: "How Would You Like to Experience Primos Today?",
      portal_subtitle: "Choose your preferred way to savor Cali's finest steakhouse, either inside our colonial estate or delivered to your home.",
      card1_pill: "Dine-in & Terrace",
      card1_tag: "Charcoal Grill",
      card1_title: "Digital Menu",
      card1_desc: "Explore our 7 signature Baby Beef cuts, grilled starters, artisan burgers, and desserts with official verified prices.",
      card1_btn: "View Digital Menu ↓",
      card2_pill: "Advance Booking",
      card2_tag: "Table Experience",
      card2_title: "Book your Table",
      card2_desc: "Secure your table in the colonial fern courtyard or art gallery dining hall for family celebrations and dinner parties.",
      card2_btn: "Book Table →",
      card3_pill: "Ready on Arrival",
      card3_tag: "Venue Pickup",
      card3_title: "Order & Pickup",
      card3_desc: "Order your charcoal meats in advance and collect them freshly grilled without waiting in our San Antonio estate.",
      card3_btn: "Order Takeaway →",
      card4_pill: "Thermal Pack",
      card4_tag: "At Your Door in Cali",
      card4_title: "Delivery in Cali",
      card4_desc: "We bring charcoal flavor to your doorstep with specialized thermal sealing preserving tenderness, aroma, and temperature.",
      card4_btn: "Order Delivery →",
      catalog_super: "GASTRONOMIC CULTURE · SAN ANTONIO 1982",
      catalog_title: "Our Digital Menu & Charcoal Specialties",
      catalog_desc: "Explore our 14 culinary categories. Customize meat doneness, select sides, and place your order directly from your table.",
      search_placeholder: "Search menu by dish, sauce or ingredient (e.g. Béarnaise, pepper, angus, mushrooms, lemonade)...",
      all_dishes_tab: "All Dishes",
      dir_badge: "OFFICIAL DIRECTORY",
      dir_title: "Explore Our 14 Culinary Sections",
      dir_hint: "Tap any section to jump directly to its dishes",
      dish_official_price: "Official price",
      dish_customize_btn: "Customize +",
      filter_searching: "Searching for",
      filter_dishes_found: "dish(es) found",
      filter_active_cat: "Active Category",
      filter_reset_btn: "✕ View all dishes (Reset)",
      booking_tag: "Dine-in Service",
      booking_title: "Reserve your table in the heart of San Antonio",
      booking_desc: "Enjoy an authentic culinary journey under the colonial fern patio or in our art galleries with live weekend music.",
      booking_hl1: "Instant confirmation with Primos front desk team",
      booking_hl2: "Open daily from 12:00 PM to 10:30 PM",
      booking_hl3: "Carrera 5 # 2-123, San Antonio Colonial Quarter, Cali",
      booking_date_lbl: "Date",
      booking_time_lbl: "Time",
      booking_guests_lbl: "Number of Guests",
      booking_area_lbl: "Preferred Ambience",
      booking_name_lbl: "Full Name",
      booking_occasion_lbl: "Special Occasion or Notes",
      booking_btn: "Confirm Reservation on WhatsApp →",
      cart_title: "Your Order",
      cart_empty_text: "No dishes added to your order yet.",
      cart_subtotal: "Subtotal",
      cart_tip: "Suggested service tip (10%)",
      cart_total: "Total to Pay",
      cart_send_btn: "Send Order via WhatsApp",
      cart_clear_btn: "Clear order",
      modal_doneness_title: "1. Select Meat Doneness",
      modal_doneness_hint: "Required for charcoal beef cuts",
      modal_sides_title: "2. Choose Your Included Side",
      modal_sides_hint: "Included in the dish price",
      modal_pairing_title: "House Recommended Wine Pairing",
      modal_notes_title: "Special Kitchen Instructions",
      modal_notes_ph: "No onions? Sauce on the side? Type your preferences here...",
      modal_add_btn: "Add to my Order",
      historia_tag: "Our Heritage",
      historia_title: "Once upon a time, a theatre and a <span class=\"text-rojo\">burger</span>",
      historia_subtitle: "More than 40 years being part of Cali. This is the story of Primos: from a small counter by Teatro San Fernando to the home of Cali locals in San Antonio.",
      historia_caption_fachada: "Tejadita's sculpted cats watch over us from the roof",
      historia_timeline_title: "44 years in five acts",
      historia_timeline_tag: "just like in the theatre next door",
      historia_acto_1982: "Primos is born: a cozy counter right beside the iconic Teatro San Fernando. Hernando Tejada, «Tejadita», celebrated painter, sculptor and lifelong family friend, gifts us small wooden carvings of his now famous cats. Even the napkin holders were cats hand-carved by him.",
      historia_acto_1990s: "Quietly and steadily, the cats take over Parque del Perro. Guests bring cat photos and vintage posters from their travels to adorn our walls. Generation after generation, local families celebrate their first dates, birthdays and reunions at our tables.",
      historia_acto_2020: "The pandemic hits hard. We have to shutter our doors; more than 100 family members lose their jobs. Then something unexpected happens: over 3,000 heartfelt messages pour in from Cali citizens. The closure is covered by national news. That love is never forgotten.",
      historia_acto_2022: "Fueled by that warmth, we return. This time in San Antonio, Cali's most artistic and preserved heritage quarter, with its colorful colonial estates and cobblestone streets. The neighborhood that truly mirrors this city's soul.",
      historia_acto_2026: "At Carrera 5 # 2-123, Primos remains true to what it always was: a place where our guests are the heroes. Where gourmet burgers and aged steaks meet history, art and Valle hospitality.",
      historia_completa_title: "The Full Story",
      historia_p1: "In 1982, next to the legendary Teatro San Fernando in Cali, Primos opened its doors. It was born without pretense. It was born with genuine flavor, warmth and the intuition that great food brings people together.",
      historia_p2: "And so it was. Little by little, Primos became the venue locals visit when they celebrate, miss home, or introduce someone to the true spirit of Cali. Generation after generation, families have shared milestones at our tables. There is something in our burgers and flame-grilled cuts that you won't find anywhere else: a harmony of craftsmanship where each bite feels like home.",
      historia_p3: "From the very beginning, Hernando Tejada, our dear family friend, would bring small carved wooden cats as gifts. Even the napkin rings were hand-carved cats. Years later, when the monumental Rio Cat monument was inaugurated, we felt proud knowing we saw its precursors born here. We honor Tejadita's legacy every day.",
      historia_p4_b: "Then the pandemic arrived.",
      historia_p4: "Like so many businesses across Colombia and the world, the 2020 crisis struck deeply. We had to close our venues. Over 100 people of our team were suddenly displaced. It was the hardest chapter of our history.",
      historia_p5_b: "Then something miraculous happened.",
      historia_p5: "Over 3,000 heartfelt messages flooded in. Families wrote expressing that Primos was their home and their greatest love stories began here. That kind of devotion cannot be forgotten.",
      historia_p6: "In 2022, fueled by that love, we reopened. This time in San Antonio: Cali's most picturesque, colonial and bohemian quarter, whose tiled roofs and breeze best capture the soul of the city.",
      historia_p7: "Today, at Carrera 5 # 2-123, Primos continues its legacy: where gourmet burgers and prime steaks converse with art, heritage and genuine Colombian warmth.",
      historia_signoff: "If you haven't met us yet, it's about time.<br>If you've known us your whole life, welcome back home.",
      historia_cap_cuadros: "Gallery of cat paintings, tribute to Hernando Tejada",
      historia_cap_patio: "Colonial inner courtyard and mountain breeze in San Antonio",
      historia_cta_title: "Come write your story with us",
      historia_cta_btn: "Reserve a Table",
      historia_cta_info: "Carrera 5 # 2-123, San Antonio, Cali · 315 377 1321",
      order_title: "My Order",
      order_mode_table: "Dine-in / Table",
      order_mode_pickup: "Takeaway",
      order_mode_delivery: "Delivery",
      order_table_label: "Dine-in Table Number:",
      order_pickup_name_label: "Pickup Name:",
      order_delivery_addr_label: "Cali Delivery Address & Neighborhood:",
      order_subtotal: "Dishes subtotal:",
      order_tip: "Suggested voluntary tip (10%)",
      order_total: "Estimated total:",
      order_send_btn: "Send Order to Official WhatsApp",
      order_keep_btn: "+ Continue browsing menu",
      order_clear_btn: "Clear order",
      order_view_btn: "View Order",
      order_empty_title: "Your order is empty",
      order_empty_desc: "Explore our menu and add your favorite cuts and signature burgers.",
      order_empty_cta: "Explore Full Menu",
      order_notes_ph: "Kitchen notes (e.g., sauces on the side, no ice)..."
    },
    pt: {
      topbar_verified: "San Antonio · Carrera 5 # 2-123, Cali · Desde 1982",
      topbar_line: "Reservas:",
      nav_inicio: "Início",
      nav_servicios: "Serviços",
      nav_carta: "Cardápio",
      nav_baby_beef: "Baby Beef",
      nav_reservas: "Reservas",
      nav_takeaway: "Pedir & Retirar",
      nav_historia: "História & Arte",
      table_label: "Mesa:",
      cart_btn: "Meu Pedido",
      hero_tag: "Tradição Gastronômica · San Antonio · Cali 1982",
      hero_title: "Cortes de autor e clássicos no coração de San Antonio",
      hero_desc: "Mais de quatro décadas prestando homenagem à boa grelha, nosso lendário Baby Beef com 7 molhos artesanais e a atmosfera artística de Cali.",
      hero_cta_menu: "Explorar Cardápio Completo",
      hero_cta_reserve: "Reservar uma Mesa",
      hero_quick_label: "ATALHOS RÁPIDOS:",
      hero_quick_menu: "Cardápio & Preços",
      hero_quick_baby: "7 Baby Beef Insigne",
      hero_quick_reserve: "Reservas no Salão",
      hero_quick_takeaway: "Pedir & Retirar",
      hero_quick_delivery: "Delivery em Cali",
      portal_badge: "Canais Oficiais de Atendimento · San Antonio 1982",
      portal_title: "Como Você Deseja Viver a Experiência Primos Hoje?",
      portal_subtitle: "Selecione sua opção preferida para saborear a melhor grelha de Cali, em nosso casarão colonial ou em sua casa.",
      card1_pill: "Salão & Terraço",
      card1_tag: "Cozinha na Brasa",
      card1_title: "Cardápio Digital",
      card1_desc: "Explore nossos 7 cortes de Baby Beef, entradas na brasa, hambúrgueres artesanais e sobremesas com preços oficiais.",
      card1_btn: "Ver Cardápio Digital ↓",
      card2_pill: "Reserva Prévia",
      card2_tag: "Experiência na Mesa",
      card2_title: "Reserve sua Mesa",
      card2_desc: "Garanta seu lugar no pátio colonial das samambaias ou no salão de arte para celebrações e jantares em família.",
      card2_btn: "Reservar Mesa →",
      card3_pill: "Pronto ao Chegar",
      card3_tag: "Retirada no Local",
      card3_title: "Pedir & Retirar",
      card3_desc: "Peça seus cortes na brasa com antecedência e retire recém-preparados sem filas em nossa unidade de San Antonio.",
      card3_btn: "Pedir para Levar →",
      card4_pill: "Embalagem Térmica",
      card4_tag: "À Sua Porta em Cali",
      card4_title: "Delivery em Cali",
      card4_desc: "Levamos o sabor do carvão à sua casa com embalagem térmica selada especial que preserva o ponto e a temperatura.",
      card4_btn: "Pedir Delivery →",
      catalog_super: "CULTURA GASTRONÔMICA · SAN ANTONIO 1982",
      catalog_title: "Nosso Cardápio Digital & Especialidades na Brasa",
      catalog_desc: "Explore nossas 14 categorias. Personalize o ponto da carne, selecione os acompanhamentos e faça seu pedido direto da mesa.",
      search_placeholder: "Buscar no cardápio por prato, molho ou ingrediente (ex. Béarnaise, pimenta, angus, cogumelos, limonada)...",
      all_dishes_tab: "Todos os pratos",
      dir_badge: "DIRETÓRIO OFICIAL",
      dir_title: "Explore Nossas 14 Seções Gastronômicas",
      dir_hint: "Toque em qualquer seção para ir direto aos pratos",
      dish_official_price: "Preço oficial",
      dish_customize_btn: "Personalizar +",
      filter_searching: "Buscando por",
      filter_dishes_found: "prato(s) encontrado(s)",
      filter_active_cat: "Categoria ativa",
      filter_reset_btn: "✕ Ver todo o cardápio (Restaurar)",
      booking_tag: "Atendimento no Salão",
      booking_title: "Reserve sua mesa no coração de San Antonio",
      booking_desc: "Viva uma experiência gastronômica sob o pátio das samambaias ou em nossas galerias de arte com música ao vivo nos fins de semana.",
      booking_hl1: "Confirmação imediata com a recepção do Primos",
      booking_hl2: "Funcionamento diário das 12:00 às 22:30",
      booking_hl3: "Carrera 5 # 2-123, Bairro Colonial San Antonio, Cali",
      booking_date_lbl: "Data",
      booking_time_lbl: "Hora",
      booking_guests_lbl: "Número de Pessoas",
      booking_area_lbl: "Ambiente de Preferência",
      booking_name_lbl: "Nome Completo",
      booking_occasion_lbl: "Ocasião Especial ou Observações",
      booking_btn: "Confirmar Reserva pelo WhatsApp →",
      cart_title: "Seu Pedido",
      cart_empty_text: "Nenhum prato adicionado ao seu pedido ainda.",
      cart_subtotal: "Subtotal",
      cart_tip: "Gorjeta sugerida de serviço (10%)",
      cart_total: "Total a Pagar",
      cart_send_btn: "Enviar Pedido pelo WhatsApp",
      cart_clear_btn: "Limpar pedido",
      modal_doneness_title: "1. Selecione o Ponto da Carne",
      modal_doneness_hint: "Obrigatório para cortes bovinos na brasa",
      modal_sides_title: "2. Escolha o Acompanhamento Incluso",
      modal_sides_hint: "Incluso no valor do prato",
      modal_pairing_title: "Harmonização Sugerida da Casa",
      modal_notes_title: "Instruções Especiais para a Cozinha",
      modal_notes_ph: "Sem cebola? Molho à parte? Escreva suas preferências aqui...",
      modal_add_btn: "Adicionar ao Pedido",
      historia_tag: "Nossa história",
      historia_title: "Era uma vez um teatro e um <span class=\"text-rojo\">hambúrguer</span>",
      historia_subtitle: "Mais de 40 anos fazendo parte de Cali. Esta é a história de Primos: de um balcão junto ao Teatro San Fernando à casa colonial em San Antonio.",
      historia_caption_fachada: "os gatos de Tejadita cuidam de nós a partir do telhado",
      historia_timeline_title: "44 anos em cinco atos",
      historia_timeline_tag: "como no teatro ao lado",
      historia_acto_1982: "Nasce Primos: um pequeno balcão ao lado do emblemático Teatro San Fernando. Hernando Tejada, «Tejadita», pintor, escultor e velho amigo da família, nos presenteia com pequenas esculturas em madeira dos seus famosos gatos. Até os porta-guardanapos eram gatos feitos pelas suas próprias mãos.",
      historia_acto_1990s: "Silenciosamente, os gatos conquistam o Parque del Perro. Clientes traem fotos e pôsteres de viagens para decorar o restaurante. Geração após geração, famílias celebram primeiros encontros, aniversários e reencontros em nossas mesas.",
      historia_acto_2020: "A pandemia nos atinge duramente. Fechamos nossas unidades; mais de 100 colaboradores ficam sem emprego. E então acontece algo inesperado: recebemos mais de 3.000 mensagens de carinho do povo de Cali. Uma solidariedade inesquecível.",
      historia_acto_2022: "Com esse apoio como combustível, voltamos. Desta vez no bairro San Antonio, o mais belo e histórico de Cali, com seus casarões coloniais, ladeiras de pedra e atmosfera boêmia que reflete a alma desta cidade.",
      historia_acto_2026: "Na Carrera 5 # 2-123, Primos continua sendo o que sempre foi: um lar onde os clientes são os protagonistas. Onde o hambúrguer artesanal e os cortes nobres convivem com a arte e a tradição.",
      historia_completa_title: "A história completa",
      historia_p1: "Em 1982, junto ao histórico Teatro San Fernando em Cali, abriu suas portas Primos. Não nasceu com pretensões de grandeza. Nasceu com sabor, acolhimento e a certeza de que a boa comida une as pessoas.",
      historia_p2: "E assim foi. Primos tornou-se o ponto de encontro dos caleños para celebrar a vida e apresentar o melhor da cidade a quem chega. Há algo no hambúrguer e nos cortes de Primos que não se encontra em outro lugar: um sabor artesanal que faz parte do patrimônio da cidade.",
      historia_p3: "Desde o início, Hernando Tejada trazia de presente pequenas talhas de madeira de seus famosos gatos. Temos orgulho de continuar honrando a memória de Tejadita e seus gatos, patrimônio cultural de todos.",
      historia_p4_b: "Depois veio a pandemia.",
      historia_p4: "Como em tantos negócios pelo mundo, a crise de 2020 nos atingiu forte. Tivemos que fechar nossas portas. Mais de 100 famílias ficaram sem trabalho. Foi o momento mais difícil da nossa trajetória.",
      historia_p5_b: "Mas então aconteceu o inesperado.",
      historia_p5: "Recebemos mais de 3.000 mensagens de apoio. Famílias inteiras nos lembrando de que Primos era parte de suas vidas. Esse carinho jamais se esquece.",
      historia_p6: "Em 2022, com esse carinho como inspiração, reabrimos no bairro colonial de San Antonio, com suas casas coloridas e ambiente tranquilo.",
      historia_p7: "Hoje, na Carrera 5 # 2-123, Primos preserva sua essência: culinária artesanal na brasa, hospitalidade caleña e amor pela nossa terra.",
      historia_signoff: "Se ainda não nos conhece, já é hora.<br>Se nos conhece desde sempre, seja bem-vindo de volta ao lar.",
      historia_cap_cuadros: "Galeria de quadros de gatos, homenagem a Hernando Tejada",
      historia_cap_patio: "Pátio colonial e brisa fresca em San Antonio",
      historia_cta_title: "Venha escrever sua história conosco",
      historia_cta_btn: "Reservar mesa",
      historia_cta_info: "Carrera 5 # 2-123, San Antonio, Cali · 315 377 1321",
      order_title: "Meu Pedido",
      order_mode_table: "No Salão / Mesa",
      order_mode_pickup: "Para Viagem",
      order_mode_delivery: "Delivery",
      order_table_label: "Número da Mesa no Salão:",
      order_pickup_name_label: "Nome para Retirada:",
      order_delivery_addr_label: "Endereço em Cali & Bairro:",
      order_subtotal: "Subtotal dos pratos:",
      order_tip: "Gorjeta voluntária sugerida (10%)",
      order_total: "Total estimado:",
      order_send_btn: "Enviar Pedido para WhatsApp Oficial",
      order_keep_btn: "+ Continuar escolhendo",
      order_clear_btn: "Esvaziar pedido",
      order_view_btn: "Ver Pedido",
      order_empty_title: "Seu pedido está vazio",
      order_empty_desc: "Explore nosso cardápio e adicione seus cortes e pratos favoritos.",
      order_empty_cta: "Explorar o Cardápio Completo",
      order_notes_ph: "Instruções para a cozinha (ex: molhos à parte, sem gelo)..."
    }
  };

  const CATEGORY_TRANSLATIONS = {
    entradas: {
      es: { label: "Entradas", subtitle: "Para empezar y compartir al centro de la mesa" },
      en: { label: "Starters & Appetizers", subtitle: "To start and share in the center of the table" },
      pt: { label: "Entradas", subtitle: "Para começar e compartilhar no centro da mesa" }
    },
    sopas: {
      es: { label: "Sopas", subtitle: "Cremas reconfortantes y caldos tradicionales" },
      en: { label: "Soups & Creams", subtitle: "Comforting creams and traditional broths" },
      pt: { label: "Sopas & Cremes", subtitle: "Cremes reconfortantes e caldos tradicionais" }
    },
    ensaladas: {
      es: { label: "Ensaladas", subtitle: "Hojas frescas del huerto y aderezos de autor" },
      en: { label: "Fresh Salads", subtitle: "Crisp garden greens and signature dressings" },
      pt: { label: "Saladas Frescas", subtitle: "Folhas frescas da horta e molhos artesanais" }
    },
    hamburguesas: {
      es: { label: "Hamburguesas", subtitle: "Carne angus a las brasas y pan brioche artesanal" },
      en: { label: "Gourmet Burgers", subtitle: "Charcoal-grilled angus beef and artisan brioche" },
      pt: { label: "Hambúrgueres Gourmet", subtitle: "Carne angus na brasa e pão brioche artesanal" }
    },
    costillas: {
      es: { label: "Costillas", subtitle: "Horneadas a baja temperatura durante horas" },
      en: { label: "BBQ Ribs", subtitle: "Slow-roasted at low heat for hours" },
      pt: { label: "Costelas BBQ", subtitle: "Assadas lentamente em baixa temperatura" }
    },
    "baby-beef": {
      es: { label: "Baby Beef", subtitle: "Nuestra especialidad insigne desde 1982 a la brasa" },
      en: { label: "Signature Baby Beef", subtitle: "Our charcoal-grilled flagship cut since 1982" },
      pt: { label: "Baby Beef Especial", subtitle: "Nossa especialidade clássica na brasa desde 1982" }
    },
    "asados-pollo": {
      es: { label: "Asados de Pollo", subtitle: "Pechugas y cortes jugosos al carbón de leña" },
      en: { label: "Grilled Chicken", subtitle: "Juicy chicken cuts over natural firewood charcoal" },
      pt: { label: "Frangos na Brasa", subtitle: "Cortes suculentos de frango no carvão de lenha" }
    },
    sandwiches: {
      es: { label: "Sándwiches", subtitle: "En pan rústico recién horneado con quesos fundidos" },
      en: { label: "Artisan Sandwiches", subtitle: "Freshly baked rustic bread with melted cheeses" },
      pt: { label: "Sanduíches Artesanais", subtitle: "Em pão rústico assado na hora com queijos derretidos" }
    },
    vegetarianos: {
      es: { label: "Opciones Vegetarianas", subtitle: "Platos a base de plantas y vegetales al wok" },
      en: { label: "Vegetarian Options", subtitle: "Plant-based dishes and wok-fired garden veggies" },
      pt: { label: "Opções Vegetarianas", subtitle: "Pratos à base de plantas e vegetais no wok" }
    },
    especiales: {
      es: { label: "Especiales", subtitle: "Recetas conmemorativas y carnes de corte fino" },
      en: { label: "Chef Specials", subtitle: "Commemorative house recipes and prime meats" },
      pt: { label: "Especiais da Casa", subtitle: "Receitas comemorativas e cortes nobres" }
    },
    postres: {
      es: { label: "Postres", subtitle: "El final dulce perfecto de nuestra repostería" },
      en: { label: "House Desserts", subtitle: "The perfect sweet finale from our pastry kitchen" },
      pt: { label: "Sobremesas Artesanais", subtitle: "O doce final perfeito de nossa confeitaria" }
    },
    "bebidas-calientes": {
      es: { label: "Bebidas Calientes", subtitle: "Cafés especiales de origen de la cordillera" },
      en: { label: "Hot Beverages", subtitle: "Specialty single-origin coffees from the Andes" },
      pt: { label: "Bebidas Quentes", subtitle: "Cafés especiais de origem da cordilheira" }
    },
    "bebidas-frias": {
      es: { label: "Bebidas", subtitle: "Limonadas naturales, jugos campesinos y sodas" },
      en: { label: "Cold Beverages", subtitle: "Natural lemonades, fresh farm juices, and sodas" },
      pt: { label: "Bebidas Geladas", subtitle: "Limonadas naturais, sucos da fazenda e sodas" }
    },
    cervezas: {
      es: { label: "Cervezas", subtitle: "Maestría cervecera y Club Colombia 100% malta" },
      en: { label: "Cold Beers", subtitle: "Brewing craftsmanship and 100% malt lagers" },
      pt: { label: "Cervejas Geladas", subtitle: "Mestria cervejeira e puro malte" }
    }
  };

  function t(key) {
    const dict = TRANSLATIONS[state.currentLang] || TRANSLATIONS.es;
    return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.es[key] || key);
  }

  function getCategoryLabel(catId) {
    const trans = CATEGORY_TRANSLATIONS[catId];
    if (trans && trans[state.currentLang]) {
      return trans[state.currentLang].label;
    }
    const defaultCat = categories.find(c => c.id === catId);
    return defaultCat ? defaultCat.label : catId;
  }

  function getCategorySubtitle(catId) {
    const trans = CATEGORY_TRANSLATIONS[catId];
    if (trans && trans[state.currentLang]) {
      return trans[state.currentLang].subtitle;
    }
    const defaultCat = categories.find(c => c.id === catId);
    return defaultCat ? defaultCat.subtitle : "";
  }

  // Estado de la Aplicación
  const state = {
    currentLang: localStorage.getItem('primos_lang') || 'es',
    activeCategory: 'todos',
    searchQuery: '',
    tableNumber: 1,
    cart: [],
    selectedDish: null,
    modalQty: 1,
    selectedDoneness: null,
    selectedSide: null,
    isTipIncluded: true,
    orderMode: 'mesa' // 'mesa' | 'recoge' | 'domicilio'
  };

  // Formato COP oficial colombiano
  function formatCOP(amount) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount).replace('COP', '$').trim();
  }

  // Elementos DOM
  const dom = {
    categoryScroller: document.getElementById('category-scroller'),
    categoryDirectoryGrid: document.getElementById('category-directory-grid'),
    activeFilterStrip: document.getElementById('active-filter-strip'),
    activeFilterText: document.getElementById('active-filter-text'),
    btnResetFilter: document.getElementById('btn-reset-filter'),
    menuCatalogContainer: document.getElementById('menu-catalog-container'),
    searchInput: document.getElementById('menu-search-input'),
    searchClear: document.getElementById('search-clear'),
    navBabyBeefBtn: document.getElementById('nav-baby-beef-btn'),
    heroBabyBeefBtn: document.getElementById('hero-baby-beef-btn'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIconMoon: document.getElementById('theme-icon-moon'),
    themeIconSun: document.getElementById('theme-icon-sun'),
    tableNumberInput: document.getElementById('table-number-input'),
    cartDrawerTrigger: document.getElementById('cart-drawer-trigger'),
    cartCount: document.getElementById('cart-count'),
    // Modal de Plato
    dishModal: document.getElementById('dish-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalDishImg: document.getElementById('modal-dish-img'),
    modalDishTitle: document.getElementById('modal-dish-title'),
    modalDishPrice: document.getElementById('modal-dish-price'),
    modalDishDesc: document.getElementById('modal-dish-desc'),
    cookingTermsSection: document.getElementById('cooking-terms-section'),
    cookingTermsOptions: document.getElementById('cooking-terms-options'),
    sidesSection: document.getElementById('sides-section'),
    sidesOptions: document.getElementById('sides-options'),
    pairingSection: document.getElementById('pairing-section'),
    pairingText: document.getElementById('pairing-text'),
    dishNotes: document.getElementById('dish-notes'),
    modalQtyMinus: document.getElementById('modal-qty-minus'),
    modalQtyPlus: document.getElementById('modal-qty-plus'),
    modalQtyVal: document.getElementById('modal-qty-val'),
    modalAddBtn: document.getElementById('modal-add-btn'),
    modalTotalPreview: document.getElementById('modal-total-preview'),
    // Drawer de Orden
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    orderDrawer: document.getElementById('order-drawer'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    drawerBadgeCount: document.getElementById('drawer-badge-count'),
    drawerModeTabs: document.querySelectorAll('.drawer-mode-tab'),
    fieldWrapMesa: document.getElementById('field-wrap-mesa'),
    fieldWrapRecoge: document.getElementById('field-wrap-recoge'),
    fieldWrapDomicilio: document.getElementById('field-wrap-domicilio'),
    drawerTableNumber: document.getElementById('drawer-table-number'),
    drawerPickupName: document.getElementById('drawer-pickup-name'),
    drawerDeliveryAddr: document.getElementById('drawer-delivery-addr'),
    drawerKitchenNotes: document.getElementById('drawer-kitchen-notes'),
    drawerItems: document.getElementById('drawer-items'),
    summarySubtotal: document.getElementById('summary-subtotal'),
    tipCheckbox: document.getElementById('tip-checkbox'),
    tipAmount: document.getElementById('tip-amount'),
    summaryTotal: document.getElementById('summary-total'),
    btnSendWhatsapp: document.getElementById('btn-send-whatsapp'),
    btnKeepOrdering: document.getElementById('btn-keep-ordering'),
    btnClearOrder: document.getElementById('btn-clear-order'),
    // Barra flotante móvil
    mobileCartBar: document.getElementById('mobile-cart-bar'),
    mobileCartCount: document.getElementById('mobile-cart-count'),
    mobileCartTotal: document.getElementById('mobile-cart-total'),
    mobileCartViewBtn: document.getElementById('mobile-cart-view-btn'),
    // Formulario de Reservas
    bookingForm: document.getElementById('booking-form'),
    bookingDate: document.getElementById('booking-date'),
    bookingTime: document.getElementById('booking-time'),
    bookingGuests: document.getElementById('booking-guests'),
    bookingArea: document.getElementById('booking-area'),
    bookingName: document.getElementById('booking-name'),
    bookingOccasion: document.getElementById('booking-occasion'),
    // Modal de Política de Datos
    dataModal: document.getElementById('data-modal'),
    openDataModalBtn: document.getElementById('open-data-modal-btn'),
    dataModalClose: document.getElementById('data-modal-close')
  };

  // Inicialización de la Aplicación
  function init() {
    setupTheme();
    setupLanguage();
    setupBookingDateMin();
    renderCategoryPills();
    setupScrollerArrows();
    renderCategoryDirectory();
    renderCatalog();
    setupEventListeners();
    setupSpotlightGlow();
    setupSmoothAnchorScroll();
    updateCartUI();
  }

  // Configuración del Sistema Multilingüe (ES, EN, PT)
  function setupLanguage() {
    const savedLang = localStorage.getItem('primos_lang') || 'es';
    setLanguage(savedLang, false);

    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang && targetLang !== state.currentLang) {
          setLanguage(targetLang, true);
        }
      });
    });
  }

  function setLanguage(lang, triggerRender = true) {
    if (!['es', 'en', 'pt'].includes(lang)) lang = 'es';
    state.currentLang = lang;
    localStorage.setItem('primos_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Actualizar estados visuales de los botones de idioma
    document.querySelectorAll('.lang-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Actualizar elementos estáticos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) {
        if (val.includes('<') && val.includes('>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Actualizar placeholders con data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = t(key);
      if (val) el.placeholder = val;
    });

    // Si se invoca interactivamente, re-renderizar componentes dinámicos
    if (triggerRender) {
      renderCategoryPills();
      renderCategoryDirectory();
      renderCatalog();
      updateCartUI();
    }
  }

  // Establecer fecha mínima para reservas a partir de hoy
  function setupBookingDateMin() {
    if (dom.bookingDate) {
      const today = new Date().toISOString().split('T')[0];
      dom.bookingDate.min = today;
      dom.bookingDate.value = today;
    }
  }

  // Configuración del Tema Robusta (Mobile-First & Color Scheme Awareness)
  function setupTheme() {
    let savedTheme = null;
    try {
      savedTheme = localStorage.getItem('primos_theme');
    } catch (e) {
      console.warn('localStorage not accessible', e);
    }

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    } else {
      // Si el usuario no ha elegido manualmente, detecta la preferencia de su dispositivo
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    // Escucha cambios de preferencia del sistema si el usuario no tiene guardado un tema fijo
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        let hasSaved = false;
        try {
          hasSaved = Boolean(localStorage.getItem('primos_theme'));
        } catch (_) {}
        if (!hasSaved) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  function setTheme(theme) {
    const activeTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', activeTheme);
    document.documentElement.style.colorScheme = activeTheme;

    try {
      localStorage.setItem('primos_theme', activeTheme);
    } catch (e) {
      // Ignorar restricciones de almacenamiento local
    }

    // Actualizar meta theme-color para navegadores móviles (Safari iOS, Brave, Chrome)
    const metaThemeColor = document.getElementById('theme-color-meta');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', activeTheme === 'dark' ? '#161311' : '#FDFBF4');
    }

    // Sincronizar iconos
    if (dom.themeIconMoon && dom.themeIconSun) {
      if (activeTheme === 'dark') {
        dom.themeIconMoon.style.display = 'none';
        dom.themeIconSun.style.display = 'block';
      } else {
        dom.themeIconMoon.style.display = 'block';
        dom.themeIconSun.style.display = 'none';
      }
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  // ==========================================================================
  // Spotlight Glow (Tracking interactivo de cursor para tarjetas de alto impacto)
  // ==========================================================================
  function setupSpotlightGlow() {
    document.querySelectorAll('[data-spotlight="true"]').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ==========================================================================
  // Scroll Suave Compensado (Evita que el menú fijo corte títulos de sección)
  // ==========================================================================
  function setupSmoothAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          smoothScrollTo(targetElem);
        }
      });
    });

    // Botones directos de Baby Beef (Scroll exacto a los cortes con margen superior perfecto)
    const handleBabyBeefNav = (e) => {
      if (e) e.preventDefault();
      selectCategory('baby-beef');
      setTimeout(() => {
        const target = document.getElementById('cat-block-baby-beef') || document.getElementById('menu-catalog-container');
        if (target) {
          smoothScrollTo(target);
        }
      }, 50);
    };

    if (dom.navBabyBeefBtn) {
      dom.navBabyBeefBtn.addEventListener('click', handleBabyBeefNav);
    }
    if (dom.heroBabyBeefBtn) {
      dom.heroBabyBeefBtn.addEventListener('click', handleBabyBeefNav);
    }
  }

  function smoothScrollTo(element, customOffset) {
    let headerOffset = customOffset;
    if (!headerOffset) {
      // Calcular dinámicamente la altura real de los elementos fijos/sticky
      const navH = document.querySelector('.navbar')?.offsetHeight || 64;
      const catNavH = document.querySelector('.category-nav-wrapper')?.offsetHeight || 64;
      const filterStrip = document.getElementById('active-filter-strip');
      const filterH = (filterStrip && filterStrip.style.display !== 'none') ? (filterStrip.offsetHeight || 44) : 0;

      // Si es un bloque de categoría o elemento dentro del catálogo, dejar espacio generoso
      if (element.classList && (element.classList.contains('category-group-block') || (element.id && element.id.startsWith('cat-block-')) || element.id === 'menu-catalog-container')) {
        headerOffset = navH + catNavH + filterH + 28; // ~190px - 210px
      } else {
        headerOffset = navH + 24; // ~88px
      }
    }
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }

  // ==========================================================================
  // 1. Renderizar Barra Sticky de Categorías con SVGs y Contadores (Sin Emojis)
  // ==========================================================================
  function renderCategoryPills() {
    const totalCount = products.length;
    let pillsHTML = `
      <button class="category-pill ${state.activeCategory === 'todos' ? 'active' : ''}" data-category="todos" role="tab" aria-selected="${state.activeCategory === 'todos'}">
        <span class="pill-icon">${getIconSVG('all')}</span>
        <span>${t('all_dishes_tab')}</span>
        <span class="pill-count">(${totalCount})</span>
      </button>
    `;

    categories.forEach(cat => {
      const count = products.filter(p => p.categoryId === cat.id).length;
      const isActive = state.activeCategory === cat.id;
      const label = getCategoryLabel(cat.id);
      pillsHTML += `
        <button class="category-pill ${isActive ? 'active' : ''}" data-category="${cat.id}" role="tab" aria-selected="${isActive}">
          <span class="pill-icon">${getIconSVG(cat.iconKey)}</span>
          <span>${label}</span>
          ${count > 0 ? `<span class="pill-count">(${count})</span>` : ''}
        </button>
      `;
    });

    dom.categoryScroller.innerHTML = pillsHTML;

    dom.categoryScroller.querySelectorAll('.category-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-category');
        selectCategory(catId);
        // Scroll suave al bloque del catálogo seleccionado
        setTimeout(() => {
          const target = catId === 'todos'
            ? document.getElementById('seccion-menu')
            : (document.getElementById(`cat-block-${catId}`) || document.getElementById('menu-catalog-container'));
          if (target) smoothScrollTo(target);
        }, 50);
      });
    });
  }

  // Controles de Flechas Laterales para el Scroller Horizontal
  function setupScrollerArrows() {
    const btnPrev = document.getElementById('scroller-arrow-prev');
    const btnNext = document.getElementById('scroller-arrow-next');
    if (!btnPrev || !btnNext || !dom.categoryScroller) return;

    window.updateScrollerArrows = () => {
      const sl = dom.categoryScroller.scrollLeft;
      const max = dom.categoryScroller.scrollWidth - dom.categoryScroller.clientWidth;
      btnPrev.disabled = sl <= 4;
      btnNext.disabled = sl >= max - 4;
    };

    btnPrev.addEventListener('click', () => {
      dom.categoryScroller.scrollBy({ left: -320, behavior: 'smooth' });
      setTimeout(window.updateScrollerArrows, 350);
    });

    btnNext.addEventListener('click', () => {
      dom.categoryScroller.scrollBy({ left: 320, behavior: 'smooth' });
      setTimeout(window.updateScrollerArrows, 350);
    });

    dom.categoryScroller.addEventListener('scroll', window.updateScrollerArrows, { passive: true });
    window.addEventListener('resize', window.updateScrollerArrows);
    setTimeout(window.updateScrollerArrows, 100);
  }

  // ==========================================================================
  // 1.1 Renderizar Directorio Visual de las 14 Secciones (2 Columnas Oficiales)
  // ==========================================================================
  function renderCategoryDirectory() {
    if (!dom.categoryDirectoryGrid) return;

    dom.categoryDirectoryGrid.innerHTML = categories.map(cat => {
      const count = products.filter(p => p.categoryId === cat.id).length;
      const isActive = state.activeCategory === cat.id;
      const label = getCategoryLabel(cat.id);
      const countWord = state.currentLang === 'en' 
        ? (count === 1 ? 'option' : 'dishes') 
        : (state.currentLang === 'pt' ? (count === 1 ? 'opção' : 'pratos') : (count === 1 ? 'opción' : 'platos'));
      return `
        <button class="category-directory-btn ${isActive ? 'active' : ''}" data-category="${cat.id}" type="button" aria-label="${label}">
          <div class="cat-dir-icon-wrap">
            ${getIconSVG(cat.iconKey)}
          </div>
          <div class="cat-dir-info">
            <span class="cat-dir-name">${label}</span>
            <span class="cat-dir-count">${count} ${countWord}</span>
          </div>
        </button>
      `;
    }).join('');

    dom.categoryDirectoryGrid.querySelectorAll('.category-directory-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId = btn.getAttribute('data-category');
        selectCategory(catId);
        setTimeout(() => {
          const target = document.getElementById(`cat-block-${catId}`) || document.getElementById('menu-catalog-container');
          if (target) smoothScrollTo(target);
        }, 50);
      });
    });
  }

  // ==========================================================================
  // 2. Renderizado del Catálogo Unificado (Sin Duplicaciones)
  // ==========================================================================
  function renderCatalog() {
    const container = dom.menuCatalogContainer;
    if (!container) return;

    // Caso A: Búsqueda activa
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const filtered = products.filter(p => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
          (p.badge && p.badge.toLowerCase().includes(q))
        );
      });

      dom.activeFilterStrip.style.display = 'flex';
      dom.activeFilterText.textContent = `${t('filter_searching')} "${state.searchQuery}" · ${filtered.length} ${t('filter_dishes_found')}`;

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 60px 16px; color: var(--text-muted);">
            <p style="font-size: 1.15rem; margin-bottom: 12px;">${state.currentLang === 'en' ? 'No dishes found matching your search.' : (state.currentLang === 'pt' ? 'Nenhum prato encontrado com esta busca.' : 'No encontramos platos que coincidan con la búsqueda.')}</p>
            <button id="btn-search-empty-reset" class="btn-primary">${t('filter_reset_btn')}</button>
          </div>
        `;
        const resetBtn = document.getElementById('btn-search-empty-reset');
        if (resetBtn) {
          resetBtn.addEventListener('click', resetAllFilters);
        }
        return;
      }

      container.innerHTML = `
        <div class="featured-grid">
          ${filtered.map(createProductCardHTML).join('')}
        </div>
      `;
      bindProductCardEvents(container);
      return;
    }

    // Caso B: Todos los platos (Catálogo unificado organizado por categorías, sin duplicar Baby Beef)
    if (state.activeCategory === 'todos') {
      dom.activeFilterStrip.style.display = 'none';

      let catalogHTML = '';
      categories.forEach(cat => {
        const catProducts = products.filter(p => p.categoryId === cat.id);
        if (catProducts.length === 0) return;
        const label = getCategoryLabel(cat.id);
        const subtitle = getCategorySubtitle(cat.id);
        const countWord = state.currentLang === 'en' 
          ? (catProducts.length === 1 ? 'option' : 'dishes') 
          : (state.currentLang === 'pt' ? (catProducts.length === 1 ? 'opção' : 'pratos') : (catProducts.length === 1 ? 'opción' : 'platos'));

        catalogHTML += `
          <div class="category-group-block" id="cat-block-${cat.id}">
            <div class="category-group-header">
              <div class="category-group-left">
                <div class="category-group-icon">${getIconSVG(cat.iconKey)}</div>
                <div>
                  <h3 class="category-group-title">${label}</h3>
                  <div class="category-group-sub">${subtitle}</div>
                </div>
              </div>
              <span class="category-group-count">${catProducts.length} ${countWord}</span>
            </div>
            <div class="featured-grid">
              ${catProducts.map(createProductCardHTML).join('')}
            </div>
          </div>
        `;
      });

      container.innerHTML = catalogHTML;
      bindProductCardEvents(container);
      return;
    }

    // Caso C: Categoría específica seleccionada
    const curCat = categories.find(c => c.id === state.activeCategory);
    const catProducts = products.filter(p => p.categoryId === state.activeCategory);
    const curLabel = getCategoryLabel(state.activeCategory);
    const curSub = getCategorySubtitle(state.activeCategory);
    const countWord = state.currentLang === 'en' 
      ? (catProducts.length === 1 ? 'option' : 'dishes') 
      : (state.currentLang === 'pt' ? (catProducts.length === 1 ? 'opção' : 'pratos') : (catProducts.length === 1 ? 'opción' : 'platos'));

    dom.activeFilterStrip.style.display = 'flex';
    dom.activeFilterText.textContent = `${t('filter_active_cat')}: ${curLabel} · ${catProducts.length} ${countWord}`;

    if (catProducts.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 16px; color: var(--text-muted);">
          <p style="font-size: 1.15rem; margin-bottom: 12px;">${state.currentLang === 'en' ? 'No dishes currently registered in this section.' : (state.currentLang === 'pt' ? 'Nenhum prato cadastrado nesta seção temporariamente.' : 'No hay platos registrados en esta categoría temporalmente.')}</p>
          <button id="btn-cat-empty-reset" class="btn-primary">${t('filter_reset_btn')}</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-cat-empty-reset');
      if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    container.innerHTML = `
      <div class="category-group-block" id="cat-block-${curCat ? curCat.id : 'selected'}">
        <div class="category-group-header">
          <div class="category-group-left">
            <div class="category-group-icon">${getIconSVG(curCat ? curCat.iconKey : 'all')}</div>
            <div>
              <h3 class="category-group-title">${curLabel}</h3>
              <div class="category-group-sub">${curSub}</div>
            </div>
          </div>
          <span class="category-group-count">${catProducts.length} ${countWord}</span>
        </div>
        <div class="featured-grid">
          ${catProducts.map(createProductCardHTML).join('')}
        </div>
      </div>
    `;

    bindProductCardEvents(container);
  }

  // Generador de Tarjeta de Producto (Fotografía gastronómica real y Cero Emojis)
  function createProductCardHTML(p) {
    const isGold = p.isSignature ? 'gold' : '';
    const badgeHTML = p.badge ? `<span class="product-badge ${isGold}">${p.badge}</span>` : '';
    const weightHTML = p.weight ? `<span class="product-weight">${p.weight}</span>` : '';

    return `
      <article class="product-card" data-product-id="${p.id}" data-spotlight="true">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name} - Primos Restaurante" class="product-img" loading="lazy">
          ${badgeHTML}
          ${weightHTML}
        </div>
        <div class="product-body">
          <h4 class="product-title">${p.name}</h4>
          <p class="product-description">${p.description}</p>
          <div class="product-meta-row">
            <div class="product-price">
              <span class="price-currency">${t('dish_official_price')}</span>
              <span class="price-amount">${formatCOP(p.price)}</span>
            </div>
            <button class="btn-action-add" aria-label="${t('dish_customize_btn')} ${p.name}">
              <span>${t('dish_customize_btn')}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function bindProductCardEvents(container) {
    container.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const prodId = card.getAttribute('data-product-id');
        openDishModal(prodId);
      });
    });
    // Aplicar spotlight listener a las tarjetas renderizadas
    setupSpotlightGlow();
  }

  function selectCategory(catId) {
    state.activeCategory = catId;
    state.searchQuery = '';
    dom.searchInput.value = '';
    dom.searchClear.classList.remove('visible');

    let activePillEl = null;
    dom.categoryScroller.querySelectorAll('.category-pill').forEach(btn => {
      const match = btn.getAttribute('data-category') === catId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match);
      if (match) activePillEl = btn;
    });

    if (dom.categoryDirectoryGrid) {
      dom.categoryDirectoryGrid.querySelectorAll('.category-directory-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-category') === catId);
      });
    }

    // Auto-centrar la pastilla seleccionada en el scroller horizontal para que NUNCA quede cortada en los bordes
    if (activePillEl) {
      activePillEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      if (window.updateScrollerArrows) {
        setTimeout(window.updateScrollerArrows, 350);
      }
    }

    renderCatalog();
  }

  function resetAllFilters() {
    state.activeCategory = 'todos';
    state.searchQuery = '';
    dom.searchInput.value = '';
    dom.searchClear.classList.remove('visible');

    let firstPillEl = null;
    dom.categoryScroller.querySelectorAll('.category-pill').forEach(btn => {
      const match = btn.getAttribute('data-category') === 'todos';
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match);
      if (match) firstPillEl = btn;
    });

    if (firstPillEl) {
      firstPillEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      if (window.updateScrollerArrows) {
        setTimeout(window.updateScrollerArrows, 350);
      }
    }

    if (dom.categoryDirectoryGrid) {
      dom.categoryDirectoryGrid.querySelectorAll('.category-directory-btn').forEach(btn => {
        btn.classList.remove('active');
      });
    }

    renderCatalog();
    const menuSec = document.getElementById('seccion-menu');
    if (menuSec) smoothScrollTo(menuSec);
  }

  // ==========================================================================
  // Modal de Detalle y Personalización Gourmet
  // ==========================================================================
  function openDishModal(productId) {
    const dish = products.find(p => p.id === productId);
    if (!dish) return;

    state.selectedDish = dish;
    state.modalQty = 1;
    state.selectedDoneness = dish.cookingOptions ? dish.cookingOptions[1] || dish.cookingOptions[0] : null;
    state.selectedSide = dish.sides ? dish.sides[0] : null;
    dom.dishNotes.value = '';

    dom.modalDishImg.src = dish.image;
    dom.modalDishImg.alt = dish.name;
    dom.modalDishTitle.textContent = dish.name;
    dom.modalDishPrice.textContent = formatCOP(dish.price);
    dom.modalDishDesc.textContent = dish.description;

    // Término de cocción (para carnes / lomos)
    if (dish.cookingOptions && dish.cookingOptions.length > 0) {
      dom.cookingTermsSection.style.display = 'block';
      dom.cookingTermsOptions.innerHTML = dish.cookingOptions.map(opt => `
        <label class="option-pill-label">
          <input type="radio" name="cooking-term" value="${opt}" ${opt === state.selectedDoneness ? 'checked' : ''}>
          <span>${opt}</span>
        </label>
      `).join('');

      dom.cookingTermsOptions.querySelectorAll('input').forEach(radio => {
        radio.addEventListener('change', (e) => {
          state.selectedDoneness = e.target.value;
        });
      });
    } else {
      dom.cookingTermsSection.style.display = 'none';
    }

    // Acompañamiento / Guarnición
    if (dish.sides && dish.sides.length > 0) {
      dom.sidesSection.style.display = 'block';
      dom.sidesOptions.innerHTML = dish.sides.map(side => `
        <label class="option-pill-label">
          <input type="radio" name="dish-side" value="${side}" ${side === state.selectedSide ? 'checked' : ''}>
          <span>${side}</span>
        </label>
      `).join('');

      dom.sidesOptions.querySelectorAll('input').forEach(radio => {
        radio.addEventListener('change', (e) => {
          state.selectedSide = e.target.value;
        });
      });
    } else {
      dom.sidesSection.style.display = 'none';
    }

    // Maridaje sugerido
    if (dish.pairingSuggestion) {
      dom.pairingSection.style.display = 'flex';
      dom.pairingText.textContent = dish.pairingSuggestion;
    } else {
      dom.pairingSection.style.display = 'none';
    }

    updateModalTotal();
    dom.dishModal.showModal();
  }

  function closeDishModal() {
    dom.dishModal.close();
    state.selectedDish = null;
  }

  function updateModalTotal() {
    dom.modalQtyVal.textContent = state.modalQty;
    if (state.selectedDish) {
      const total = state.selectedDish.price * state.modalQty;
      dom.modalTotalPreview.textContent = `(${formatCOP(total)})`;
    }
  }

  // ==========================================================================
  // Carrito / Mi Orden en Mesa & Domicilios
  // ==========================================================================
  function addItemToCart() {
    if (!state.selectedDish) return;

    const item = {
      id: Date.now().toString(),
      productId: state.selectedDish.id,
      name: state.selectedDish.name,
      price: state.selectedDish.price,
      image: state.selectedDish.image,
      qty: state.modalQty,
      doneness: state.selectedDoneness,
      side: state.selectedSide,
      notes: dom.dishNotes.value.trim()
    };

    state.cart.push(item);
    closeDishModal();
    updateCartUI();
    openDrawer();
  }

  function removeItemFromCart(itemId) {
    state.cart = state.cart.filter(item => item.id !== itemId);
    updateCartUI();
  }

  function clearCart() {
    state.cart = [];
    updateCartUI();
  }

  function updateCartUI() {
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (dom.cartCount) dom.cartCount.textContent = totalQty;
    if (dom.drawerBadgeCount) dom.drawerBadgeCount.textContent = totalQty;

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tip = state.isTipIncluded ? Math.round(subtotal * 0.10) : 0;
    const grandTotal = subtotal + tip;

    // Actualizar barra flotante móvil
    if (dom.mobileCartBar) {
      if (totalQty > 0) {
        dom.mobileCartBar.classList.add('visible');
        if (dom.mobileCartCount) dom.mobileCartCount.textContent = totalQty;
        if (dom.mobileCartTotal) dom.mobileCartTotal.textContent = formatCOP(grandTotal);
      } else {
        dom.mobileCartBar.classList.remove('visible');
      }
    }

    if (state.cart.length === 0) {
      dom.drawerItems.innerHTML = `
        <div class="order-empty-state">
          <div class="order-empty-state-icon">
            <svg class="svg-icon" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M12 2a10 10 0 0 1 10 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8A10 10 0 0 1 12 2z"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
          <h4 class="order-empty-title">${t('order_empty_title')}</h4>
          <p class="order-empty-desc">${t('order_empty_desc')}</p>
          <button type="button" class="order-empty-cta" id="drawer-empty-explore-btn">${t('order_empty_cta')}</button>
        </div>
      `;
      const exploreBtn = document.getElementById('drawer-empty-explore-btn');
      if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
          closeDrawer();
          const target = document.getElementById('seccion-menu');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      }
      dom.summarySubtotal.textContent = '$ 0';
      dom.tipAmount.textContent = '$ 0';
      dom.summaryTotal.textContent = '$ 0';
      return;
    }

    dom.drawerItems.innerHTML = state.cart.map(item => {
      let specs = [];
      if (item.doneness) specs.push(`Término: ${item.doneness}`);
      if (item.side) specs.push(`Guarnición: ${item.side}`);
      if (item.notes) specs.push(`Nota: "${item.notes}"`);

      return `
        <div class="order-item" data-item-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="order-item-img" loading="lazy">
          <div class="order-item-details">
            <div class="order-item-name">${item.name}</div>
            ${specs.length > 0 ? `<div class="order-item-specs">${specs.join(' · ')}</div>` : ''}
            <div class="order-item-controls">
              <div class="item-stepper">
                <button type="button" class="stepper-btn btn-qty-minus" data-id="${item.id}" aria-label="Disminuir cantidad">−</button>
                <span class="stepper-qty">${item.qty}</span>
                <button type="button" class="stepper-btn btn-qty-plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
              </div>
              <div class="order-item-price-wrap">
                <span class="order-item-price">${formatCOP(item.price * item.qty)}</span>
                <button type="button" class="order-item-remove-btn" data-remove-id="${item.id}">Quitar</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Event listeners para los steppers de cantidad y el botón quitar
    dom.drawerItems.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const it = state.cart.find(item => item.id === id);
        if (it) {
          it.qty++;
          updateCartUI();
        }
      });
    });

    dom.drawerItems.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const it = state.cart.find(item => item.id === id);
        if (it) {
          if (it.qty > 1) {
            it.qty--;
          } else {
            state.cart = state.cart.filter(item => item.id !== id);
          }
          updateCartUI();
        }
      });
    });

    dom.drawerItems.querySelectorAll('[data-remove-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-id');
        removeItemFromCart(id);
      });
    });

    dom.summarySubtotal.textContent = formatCOP(subtotal);
    dom.tipAmount.textContent = formatCOP(tip);
    dom.summaryTotal.textContent = formatCOP(grandTotal);
  }

  function openDrawer() {
    dom.orderDrawer.classList.add('open', 'active');
    dom.drawerBackdrop.classList.add('open', 'active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    dom.orderDrawer.classList.remove('open', 'active');
    dom.drawerBackdrop.classList.remove('open', 'active');
    document.body.style.overflow = '';
  }

  // Generar Mensaje de Comanda a WhatsApp Oficial según Modalidad
  function sendOrderToWhatsApp() {
    if (state.cart.length === 0) {
      alert('Tu orden está vacía. Selecciona al menos un plato de nuestra carta.');
      return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tip = state.isTipIncluded ? Math.round(subtotal * 0.10) : 0;
    const grandTotal = subtotal + tip;
    const kitchenNotes = dom.drawerKitchenNotes ? dom.drawerKitchenNotes.value.trim() : '';

    let modeTitle = '';
    let modeDetails = '';

    if (state.orderMode === 'mesa') {
      const table = dom.drawerTableNumber ? dom.drawerTableNumber.value : 1;
      modeTitle = `*MODALIDAD: En Sala (Mesa #${table})*`;
      modeDetails = `Sede San Antonio · Cra 5 # 2-123`;
    } else if (state.orderMode === 'recoge') {
      const name = dom.drawerPickupName ? (dom.drawerPickupName.value.trim() || 'Cliente Primos') : 'Cliente Primos';
      modeTitle = `*MODALIDAD: Pide & Recoge (Takeaway)*`;
      modeDetails = `Nombre de quien retira: ${name}`;
    } else {
      const addr = dom.drawerDeliveryAddr ? (dom.drawerDeliveryAddr.value.trim() || 'Por coordinar') : 'Por coordinar';
      modeTitle = `*MODALIDAD: Domicilio Cali*`;
      modeDetails = `Dirección de entrega: ${addr}`;
    }

    let lines = [];
    lines.push(`*PRIMOS RESTAURANTE · SAN ANTONIO (1982)*`);
    lines.push(modeTitle);
    lines.push(modeDetails);
    lines.push(`----------------------------------------`);

    state.cart.forEach((item, idx) => {
      lines.push(`*${idx + 1}. ${item.qty}x ${item.name}* (${formatCOP(item.price * item.qty)})`);
      if (item.doneness) lines.push(`   - Término: ${item.doneness}`);
      if (item.side) lines.push(`   - Guarnición: ${item.side}`);
      if (item.notes) lines.push(`   - Nota: ${item.notes}`);
    });

    lines.push(`----------------------------------------`);
    lines.push(`Subtotal platos: ${formatCOP(subtotal)}`);
    if (state.isTipIncluded) {
      lines.push(`Propina voluntaria sugerida (10%): ${formatCOP(tip)}`);
    } else {
      lines.push(`Propina voluntaria: No incluida`);
    }
    lines.push(`*VALOR TOTAL: ${formatCOP(grandTotal)}*`);

    if (kitchenNotes) {
      lines.push(`----------------------------------------`);
      lines.push(`*Observaciones de cocina:* ${kitchenNotes}`);
    }

    lines.push(`----------------------------------------`);
    lines.push(`Hola Primos, quisiera confirmar esta orden generada desde el menú oficial. ¡Muchas gracias!`);

    const encodedMsg = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/573153771321?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  }

  // ==========================================================================
  // Sistema de Reservas Interactivas
  // ==========================================================================
  function handleBookingSubmit(e) {
    e.preventDefault();

    const date = dom.bookingDate.value;
    const time = dom.bookingTime.value;
    const guests = dom.bookingGuests.value;
    const area = dom.bookingArea.value;
    const name = dom.bookingName.value.trim();
    const occasion = dom.bookingOccasion.value.trim();

    if (!name || !date) {
      alert('Por favor diligencia tu nombre y la fecha de reserva.');
      return;
    }

    let lines = [];
    lines.push(`*SOLICITUD DE RESERVA · PRIMOS RESTAURANTE (1982)*`);
    lines.push(`----------------------------------------`);
    lines.push(`*Nombre:* ${name}`);
    lines.push(`*Fecha:* ${date}`);
    lines.push(`*Hora solicitada:* ${time}`);
    lines.push(`*Número de personas:* ${guests}`);
    lines.push(`*Ambiente de preferencia:* ${area}`);
    if (occasion) {
      lines.push(`*Ocasión / Notas:* ${occasion}`);
    }
    lines.push(`----------------------------------------`);
    lines.push(`Agradezco confirmar disponibilidad de mesa en la sede San Antonio.`);

    const encodedMsg = encodeURIComponent(lines.join('\n'));
    const waUrl = `https://wa.me/573153771321?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  }

  // ==========================================================================
  // Listeners de Eventos Generales
  // ==========================================================================
  function setupEventListeners() {
    // Tema Claro / Oscuro
    dom.themeToggle.addEventListener('click', toggleTheme);

    // Número de Mesa
    if (dom.tableNumberInput) {
      dom.tableNumberInput.addEventListener('change', (e) => {
        state.tableNumber = e.target.value || 1;
      });
    }

    // Buscador en Vivo
    dom.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery.length > 0) {
        dom.searchClear.classList.add('visible');
      } else {
        dom.searchClear.classList.remove('visible');
      }
      renderCatalog();
    });

    dom.searchClear.addEventListener('click', () => {
      state.searchQuery = '';
      dom.searchInput.value = '';
      dom.searchClear.classList.remove('visible');
      renderCatalog();
    });

    // Botón de restablecer filtro activo
    if (dom.btnResetFilter) {
      dom.btnResetFilter.addEventListener('click', resetAllFilters);
    }

    // Modal de Plato
    dom.modalCloseBtn.addEventListener('click', closeDishModal);
    dom.dishModal.addEventListener('click', (e) => {
      const rect = dom.dishModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeDishModal();
      }
    });

    dom.modalQtyMinus.addEventListener('click', () => {
      if (state.modalQty > 1) {
        state.modalQty--;
        updateModalTotal();
      }
    });

    dom.modalQtyPlus.addEventListener('click', () => {
      state.modalQty++;
      updateModalTotal();
    });

    dom.modalAddBtn.addEventListener('click', addItemToCart);

    // Carrito y Drawer
    if (dom.cartDrawerTrigger) dom.cartDrawerTrigger.addEventListener('click', openDrawer);
    if (dom.drawerCloseBtn) dom.drawerCloseBtn.addEventListener('click', closeDrawer);
    if (dom.drawerBackdrop) dom.drawerBackdrop.addEventListener('click', closeDrawer);

    if (dom.btnKeepOrdering) {
      dom.btnKeepOrdering.addEventListener('click', () => {
        closeDrawer();
        const menuSec = document.getElementById('seccion-menu');
        if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (dom.mobileCartViewBtn) {
      dom.mobileCartViewBtn.addEventListener('click', openDrawer);
    }

    // Modalidades del Drawer (En Sala, Pide & Recoge, Domicilio)
    if (dom.drawerModeTabs) {
      dom.drawerModeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const mode = tab.getAttribute('data-order-mode');
          state.orderMode = mode;
          dom.drawerModeTabs.forEach(t => t.classList.toggle('active', t === tab));

          if (dom.fieldWrapMesa) dom.fieldWrapMesa.style.display = (mode === 'mesa') ? 'block' : 'none';
          if (dom.fieldWrapRecoge) dom.fieldWrapRecoge.style.display = (mode === 'recoge') ? 'block' : 'none';
          if (dom.fieldWrapDomicilio) dom.fieldWrapDomicilio.style.display = (mode === 'domicilio') ? 'block' : 'none';
        });
      });
    }

    // Tecla Escape para cerrar modales y comanda
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDrawer();
        if (dom.dishModal && dom.dishModal.open) closeDishModal();
      }
    });

    dom.tipCheckbox.addEventListener('change', (e) => {
      state.isTipIncluded = e.target.checked;
      updateCartUI();
    });

    dom.btnSendWhatsapp.addEventListener('click', sendOrderToWhatsApp);
    dom.btnClearOrder.addEventListener('click', clearCart);

    // Formulario de Reserva
    if (dom.bookingForm) {
      dom.bookingForm.addEventListener('submit', handleBookingSubmit);
    }

    // Modal Política de Datos
    if (dom.openDataModalBtn && dom.dataModal) {
      dom.openDataModalBtn.addEventListener('click', () => {
        dom.dataModal.showModal();
      });
      if (dom.dataModalClose) {
        dom.dataModalClose.addEventListener('click', () => {
          dom.dataModal.close();
        });
      }
      dom.dataModal.addEventListener('click', (e) => {
        const rect = dom.dataModal.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          dom.dataModal.close();
        }
      });
    }
  }

  // Ejecutar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
