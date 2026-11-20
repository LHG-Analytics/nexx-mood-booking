import type { Language } from '@/types/i18n';

/**
 * Descriptive alt text for every suite photo, keyed by its public path.
 * Written by looking at each photo; update it when a photo is replaced.
 */
export const imageAlts: Record<string, Record<Language, string>> = {
  // mood
  '/assets/mood/suite-mood/principal.jpg': {
    en: 'Bed with blue LED underglow beneath a swirling yellow and grey mosaic mural',
    pt: 'Cama com LED azul na base sob mural de mosaico ondulado amarelo e cinza',
    es: 'Cama con luz LED azul en la base bajo un mural de mosaico ondulado amarillo y gris',
  },
  '/assets/mood/suite-mood/room-1.jpg': {
    en: 'Bed under a wavy mosaic mural with orange and blue LED strips, glass shower beside',
    pt: 'Cama sob mural de mosaico ondulado com fitas de LED laranja e azul, box de vidro ao lado',
    es: 'Cama bajo un mural de mosaico ondulado con tiras LED naranjas y azules, ducha de vidrio al lado',
  },
  '/assets/mood/suite-mood/room-2.jpg': {
    en: 'Bed with blue LED underglow beneath a swirling yellow and grey mosaic mural',
    pt: 'Cama com LED azul na base sob mural de mosaico ondulado amarelo e cinza',
    es: 'Cama con luz LED azul en la base bajo un mural de mosaico ondulado amarillo y gris',
  },
  '/assets/mood/suite-mood/room-3.jpg': {
    en: 'Bed facing a glass-walled bathroom with round lit mirror and a desk with two chairs',
    pt: 'Cama de frente para banheiro com paredes de vidro, espelho redondo iluminado e bancada com duas cadeiras',
    es: 'Cama frente a un baño con paredes de vidrio, espejo redondo iluminado y escritorio con dos sillas',
  },
  '/assets/mood/suite-mood-plus/principal.webp': {
    en: 'Bed in purple light with disco ball, cloud lamps, round wall lights and mirrors',
    pt: 'Cama sob luz roxa com globo espelhado, luminárias de nuvem, arandelas redondas e espelhos',
    es: 'Cama bajo luz morada con bola de discoteca, lámparas de nube, apliques redondos y espejos',
  },
  '/assets/mood/suite-mood-plus/room-1.webp': {
    en: 'Bed in purple light with disco ball, cloud lamps, round wall lights and mirrors',
    pt: 'Cama sob luz roxa com globo espelhado, luminárias de nuvem, arandelas redondas e espelhos',
    es: 'Cama bajo luz morada con bola de discoteca, lámparas de nube, apliques redondos y espejos',
  },
  '/assets/mood/suite-mood-plus/room-2.webp': {
    en: 'Black vessel sink under a backlit mirror on a purple-lit herringbone tile wall',
    pt: 'Cuba de apoio preta sob espelho iluminado em parede de azulejos espinha de peixe com luz roxa',
    es: 'Lavabo negro sobre encimera bajo espejo iluminado en pared de azulejos en espiga con luz morada',
  },
  '/assets/mood/suite-mood-plus/room-3.webp': {
    en: 'Bed with white pillows in orange light, cloud lamps, disco ball and mirrored walls',
    pt: 'Cama com travesseiros brancos sob luz laranja, luminárias de nuvem, globo espelhado e paredes espelhadas',
    es: 'Cama con almohadas blancas bajo luz naranja, lámparas de nube, bola de discoteca y paredes espejadas',
  },
  '/assets/mood/suite-mood-plus/room-4.webp': {
    en: 'Vessel sink under a backlit mirror in an orange-lit bathroom, bed seen through the doorway',
    pt: 'Cuba de apoio sob espelho iluminado em banheiro com luz laranja, cama vista pela porta',
    es: 'Lavabo sobre encimera bajo espejo iluminado en baño con luz naranja, cama vista por la puerta',
  },
  '/assets/mood/suite-mood-plus/room-5.webp': {
    en: 'Bed under blue light with dance pole, cloud lamps and a mirrored wall',
    pt: 'Cama sob luz azul com barra de pole dance, luminárias de nuvem e parede espelhada',
    es: 'Cama bajo luz azul con tubo de baile, lámparas de nube y pared espejada',
  },
  '/assets/mood/suite-mood-plus/room-6.webp': {
    en: 'Purple-lit bed with white pillows beside a dance pole, mirrored wall and desk',
    pt: 'Cama com travesseiros brancos sob luz roxa ao lado de barra de pole dance, parede espelhada e bancada',
    es: 'Cama con almohadas blancas bajo luz morada junto a tubo de baile, pared espejada y escritorio',
  },
  '/assets/mood/suite-mood-plus/room-7.webp': {
    en: 'Vanity with vessel sink and backlit mirror on white herringbone tiles',
    pt: 'Bancada com cuba de apoio e espelho iluminado em azulejos brancos espinha de peixe',
    es: 'Tocador con lavabo sobre encimera y espejo iluminado en azulejos blancos en espiga',
  },
  '/assets/mood/suite-mood-plus/room-8.webp': {
    en: 'Close-up of a pillow and bedside touch-screen control panel in purple light',
    pt: 'Detalhe de travesseiro e painel de controle touch na cabeceira sob luz roxa',
    es: 'Detalle de almohada y panel de control táctil junto a la cama bajo luz morada',
  },
  '/assets/mood/suite-jacuzzi/principal.jpg': {
    en: 'King bed with geometric wood headboard and orange LED trim, jacuzzi in marble bathroom behind',
    pt: 'Cama king com cabeceira geométrica de madeira e LED laranja, hidromassagem em banheiro de mármore ao fundo',
    es: 'Cama king con cabecero geométrico de madera y LED naranja, jacuzzi en baño de mármol al fondo',
  },
  '/assets/mood/suite-jacuzzi/room-1.jpg': {
    en: 'King bed with geometric wood headboard and orange LED trim, jacuzzi in marble bathroom behind',
    pt: 'Cama king com cabeceira geométrica de madeira e LED laranja, hidromassagem em banheiro de mármore ao fundo',
    es: 'Cama king con cabecero geométrico de madera y LED naranja, jacuzzi en baño de mármol al fondo',
  },
  '/assets/mood/suite-jacuzzi/room-2.webp': {
    en: 'Bed facing a jacuzzi with towel swan, round table with black chairs and swirled ceiling',
    pt: 'Cama de frente para hidromassagem com cisne de toalha, mesa redonda com cadeiras pretas e teto estampado',
    es: 'Cama frente a jacuzzi con cisne de toalla, mesa redonda con sillas negras y techo estampado',
  },
  '/assets/mood/suite-jacuzzi/room-3.webp': {
    en: 'Round tables with champagne and glasses beside a mirrored wall and jacuzzi',
    pt: 'Mesas redondas com champanhe e taças ao lado de parede espelhada e hidromassagem',
    es: 'Mesas redondas con champán y copas junto a una pared espejada y jacuzzi',
  },
  '/assets/mood/suite-vip/principal.webp': {
    en: 'Bed in a blue-lit alcove with starry ceiling, glowing ring and dance pole',
    pt: 'Cama em nicho com luz azul, teto estrelado, aro iluminado e barra de pole dance',
    es: 'Cama en un nicho con luz azul, techo estrellado, aro iluminado y tubo de baile',
  },
  '/assets/mood/suite-vip/room-1.webp': {
    en: 'Bed under blue light with cloud lamps, round wall lights, dance pole and mirrors',
    pt: 'Cama sob luz azul com luminárias de nuvem, arandelas redondas, barra de pole dance e espelhos',
    es: 'Cama bajo luz azul con lámparas de nube, apliques redondos, tubo de baile y espejos',
  },
  '/assets/mood/suite-vip/room-2.webp': {
    en: 'Bed in a blue-lit alcove with starry ceiling, glowing ring and dance pole',
    pt: 'Cama em nicho com luz azul, teto estrelado, aro iluminado e barra de pole dance',
    es: 'Cama en un nicho con luz azul, techo estrellado, aro iluminado y tubo de baile',
  },
  '/assets/mood/suite-vip/room-3.webp': {
    en: 'Blue-lit room with glowing ring, starry ceiling, X-shaped wall cross and dance pole',
    pt: 'Ambiente com luz azul, aro iluminado, teto estrelado, cruz em X na parede e barra de pole dance',
    es: 'Ambiente con luz azul, aro iluminado, techo estrellado, cruz en X en la pared y tubo de baile',
  },
  '/assets/mood/suite-vip/room-4.webp': {
    en: 'Wide view in blue light with X-shaped cross, geometric wall and bed under starry ceiling',
    pt: 'Vista ampla sob luz azul com cruz em X, parede geométrica e cama sob teto estrelado',
    es: 'Vista amplia bajo luz azul con cruz en X, pared geométrica y cama bajo techo estrellado',
  },

  // yes
  '/assets/yes/suite-yes/principal.jpg': {
    en: 'Bed with orange headboard under a red and grey abstract mural, black chaise lounge',
    pt: 'Cama com cabeceira laranja sob mural abstrato vermelho e cinza, chaise longue preta',
    es: 'Cama con cabecero naranja bajo un mural abstracto rojo y gris, chaise longue negra',
  },
  '/assets/yes/suite-yes/room-1.jpg': {
    en: 'Bed facing a desk with wine glasses, wall TV and dance pole by an abstract mural',
    pt: 'Cama de frente para bancada com taças de vinho, TV na parede e barra de pole dance junto a mural abstrato',
    es: 'Cama frente a escritorio con copas de vino, TV en la pared y tubo de baile junto a mural abstracto',
  },
  '/assets/yes/suite-yes/room-2.jpg': {
    en: 'Bed with orange headboard under a red and grey abstract mural, black chaise lounge',
    pt: 'Cama com cabeceira laranja sob mural abstrato vermelho e cinza, chaise longue preta',
    es: 'Cama con cabecero naranja bajo un mural abstracto rojo y gris, chaise longue negra',
  },
  '/assets/yes/suite-yes/room-3.jpg': {
    en: 'Bed and chaise lounge bathed in red LED light under a mirrored ceiling',
    pt: 'Cama e chaise longue banhadas por luz LED vermelha sob teto espelhado',
    es: 'Cama y chaise longue bañadas en luz LED roja bajo techo espejado',
  },
  '/assets/yes/suite-yes/room-4.jpg': {
    en: 'Bed with red headboard below a black and red graphic mural, chaise lounge and minibar',
    pt: 'Cama com cabeceira vermelha sob mural gráfico preto e vermelho, chaise longue e frigobar',
    es: 'Cama con cabecero rojo bajo un mural gráfico negro y rojo, chaise longue y minibar',
  },
  '/assets/yes/suite-yes/room-5.jpg': {
    en: 'Desk with champagne flutes, black armchair and dance pole beside a graphic mural',
    pt: 'Bancada com taças de champanhe, poltrona preta e barra de pole dance ao lado de mural gráfico',
    es: 'Escritorio con copas de champán, sillón negro y tubo de baile junto a un mural gráfico',
  },
  '/assets/yes/suite-yes/room-6.jpg': {
    en: 'Red-lit bed beneath a graphic mural, with minibar and chaise lounge',
    pt: 'Cama sob luz vermelha abaixo de mural gráfico, com frigobar e chaise longue',
    es: 'Cama bajo luz roja debajo de un mural gráfico, con minibar y chaise longue',
  },
  '/assets/yes/suite-yes-plus/principal.webp': {
    en: 'Bed with blue frame below a turquoise ocean wave mural, desk and chair',
    pt: 'Cama com estrutura azul sob mural de onda do mar turquesa, bancada e cadeira',
    es: 'Cama con estructura azul bajo un mural de ola marina turquesa, escritorio y silla',
  },
  '/assets/yes/suite-yes-plus/room-1.webp': {
    en: 'Bed with blue frame below a turquoise ocean wave mural, desk and chair',
    pt: 'Cama com estrutura azul sob mural de onda do mar turquesa, bancada e cadeira',
    es: 'Cama con estructura azul bajo un mural de ola marina turquesa, escritorio y silla',
  },
  '/assets/yes/suite-yes-plus/room-2.jpg': {
    en: 'Bed and desk beside a frosted glass door to a navy-tiled walk-in shower',
    pt: 'Cama e bancada ao lado de porta de vidro jateado para chuveiro com azulejos azul-marinho',
    es: 'Cama y escritorio junto a puerta de vidrio esmerilado hacia ducha con azulejos azul marino',
  },
  '/assets/yes/suite-yes-plus/room-3.jpg': {
    en: 'Walk-in shower with navy tiles, grab bars and handheld showerhead',
    pt: 'Chuveiro amplo com azulejos azul-marinho, barras de apoio e ducha manual',
    es: 'Ducha amplia con azulejos azul marino, barras de apoyo y ducha de mano',
  },
  '/assets/yes/suite-yes-plus/room-4.jpg': {
    en: 'Bathroom with toilet, grab bar and blue vanity between navy and marble tiles',
    pt: 'Banheiro com vaso sanitário, barra de apoio e bancada azul entre azulejos azul-marinho e mármore',
    es: 'Baño con inodoro, barra de apoyo y tocador azul entre azulejos azul marino y mármol',
  },
  '/assets/yes/suite-yes-plus/room-5.jpg': {
    en: 'Bed with backlit headboard in deep blue LED light',
    pt: 'Cama com cabeceira retroiluminada sob luz LED azul intensa',
    es: 'Cama con cabecero retroiluminado bajo intensa luz LED azul',
  },
  '/assets/yes/suite-jacuzzi/principal.jpg': {
    en: 'Magenta and red-lit room with X-shaped wall cross, jacuzzi, bed and champagne',
    pt: 'Ambiente com luz magenta e vermelha, cruz em X na parede, hidromassagem, cama e champanhe',
    es: 'Ambiente con luz magenta y roja, cruz en X en la pared, jacuzzi, cama y champán',
  },
  '/assets/yes/suite-jacuzzi/room-1.jpg': {
    en: 'Bed against a glossy red wavy headboard wall under a mirrored ceiling',
    pt: 'Cama junto a parede de cabeceira vermelha ondulada e brilhante sob teto espelhado',
    es: 'Cama junto a una pared de cabecero roja ondulada y brillante bajo techo espejado',
  },
  '/assets/yes/suite-jacuzzi/room-2.jpg': {
    en: 'Bed facing a jacuzzi and glass shower with red tiles',
    pt: 'Cama de frente para hidromassagem e box de vidro com azulejos vermelhos',
    es: 'Cama frente a jacuzzi y ducha de vidrio con azulejos rojos',
  },
  '/assets/yes/suite-jacuzzi/room-3.jpg': {
    en: 'Bed and wavy headboard wall bathed entirely in red LED light',
    pt: 'Cama e parede de cabeceira ondulada totalmente banhadas por luz LED vermelha',
    es: 'Cama y pared de cabecero ondulada totalmente bañadas en luz LED roja',
  },
  '/assets/yes/suite-jacuzzi/room-4.jpg': {
    en: 'Bed with glossy blue wavy headboard beside a glass-enclosed jacuzzi',
    pt: 'Cama com cabeceira azul ondulada e brilhante ao lado de hidromassagem com vidro',
    es: 'Cama con cabecero azul ondulado y brillante junto a un jacuzzi con cerramiento de vidrio',
  },
  '/assets/yes/suite-jacuzzi/room-5.jpg': {
    en: 'Jacuzzi beside a glass shower with dark blue tiles and marble walls',
    pt: 'Hidromassagem ao lado de box de vidro com azulejos azul-escuros e paredes de mármore',
    es: 'Jacuzzi junto a ducha de vidrio con azulejos azul oscuro y paredes de mármol',
  },
  '/assets/yes/suite-jacuzzi/room-6.jpg': {
    en: 'Bed and chaise lounge in blue LED light under a mirrored ceiling',
    pt: 'Cama e chaise longue sob luz LED azul e teto espelhado',
    es: 'Cama y chaise longue bajo luz LED azul y techo espejado',
  },
  '/assets/yes/suite-jacuzzi/room-7.jpg': {
    en: 'Bed with wooden slat headboard, red walls and a glass-enclosed jacuzzi',
    pt: 'Cama com cabeceira de ripas de madeira, paredes vermelhas e hidromassagem com vidro',
    es: 'Cama con cabecero de listones de madera, paredes rojas y jacuzzi con cerramiento de vidrio',
  },
  '/assets/yes/suite-jacuzzi/room-8.jpg': {
    en: 'Bed, black chaise lounge, desk with chairs and wall TV against red walls',
    pt: 'Cama, chaise longue preta, bancada com cadeiras e TV na parede vermelha',
    es: 'Cama, chaise longue negra, escritorio con sillas y TV en pared roja',
  },
  '/assets/yes/suite-jacuzzi/room-9.jpg': {
    en: 'Magenta and red-lit room with X-shaped wall cross, jacuzzi, bed and champagne',
    pt: 'Ambiente com luz magenta e vermelha, cruz em X na parede, hidromassagem, cama e champanhe',
    es: 'Ambiente con luz magenta y roja, cruz en X en la pared, jacuzzi, cama y champán',
  },

  // calle8
  '/assets/calle8/suite-calle8/principal.jpg': {
    en: 'Bed with curved wooden headboard beside a red X-shaped wall cross in red light',
    pt: 'Cama com cabeceira curva de madeira ao lado de cruz vermelha em X na parede, sob luz vermelha',
    es: 'Cama con cabecero curvo de madera junto a una cruz roja en X en la pared, bajo luz roja',
  },
  '/assets/calle8/suite-calle8/room-1.webp': {
    en: 'Red-lit room with X-shaped cross, glass-walled bathroom and desk with red chairs',
    pt: 'Ambiente com luz vermelha, cruz em X, banheiro com paredes de vidro e bancada com cadeiras vermelhas',
    es: 'Ambiente con luz roja, cruz en X, baño con paredes de vidrio y escritorio con sillas rojas',
  },
  '/assets/calle8/suite-calle8/room-2.webp': {
    en: 'Glass shower with pink towels next to a wall TV and minibar in red light',
    pt: 'Box de vidro com toalhas rosa ao lado de TV na parede e frigobar sob luz vermelha',
    es: 'Ducha de vidrio con toallas rosadas junto a TV en la pared y minibar bajo luz roja',
  },
  '/assets/calle8/suite-calle8/room-3.jpg': {
    en: 'Wall-mounted TV above a desk with two red chairs and minibar, red LED glow',
    pt: 'TV na parede acima de bancada com duas cadeiras vermelhas e frigobar, com brilho de LED vermelho',
    es: 'TV en la pared sobre escritorio con dos sillas rojas y minibar, con brillo de LED rojo',
  },
  '/assets/calle8/suite-calle8/room-4.webp': {
    en: 'Vanity with vessel sink, backlit mirror and hair dryer on copper-toned tiles',
    pt: 'Bancada com cuba de apoio, espelho iluminado e secador de cabelo em azulejos cor de cobre',
    es: 'Tocador con lavabo sobre encimera, espejo iluminado y secador en azulejos color cobre',
  },
  '/assets/calle8/suite-calle8-plus/principal.webp': {
    en: 'Bed with green LED-lit wooden headboard beneath gold tropical leaf wallpaper',
    pt: 'Cama com cabeceira de madeira iluminada por LED verde sob papel de parede de folhas douradas',
    es: 'Cama con cabecero de madera iluminado con LED verde bajo papel tapiz de hojas doradas',
  },
  '/assets/calle8/suite-calle8-plus/room-1.webp': {
    en: 'Bed with curved wooden headboard under a colourful marbled wall mural',
    pt: 'Cama com cabeceira curva de madeira sob mural colorido com efeito marmorizado',
    es: 'Cama con cabecero curvo de madera bajo un mural colorido con efecto marmoleado',
  },
  '/assets/calle8/suite-calle8-plus/room-2.jpg': {
    en: 'Room in green LED light with dance pole, glass shower and desk with chairs',
    pt: 'Ambiente com luz LED verde, barra de pole dance, box de vidro e bancada com cadeiras',
    es: 'Ambiente con luz LED verde, tubo de baile, ducha de vidrio y escritorio con sillas',
  },
  '/assets/calle8/suite-calle8-plus/room-3.jpg': {
    en: 'Glass-enclosed shower glowing with green LED light beside leaf-print wallpaper',
    pt: 'Box de vidro iluminado por LED verde ao lado de papel de parede com folhas',
    es: 'Ducha con cerramiento de vidrio iluminada con LED verde junto a papel tapiz de hojas',
  },
  '/assets/calle8/suite-calle8-plus/room-4.webp': {
    en: 'Glass walk-in shower with white towels beside leaf-print wallpaper',
    pt: 'Box de vidro amplo com toalhas brancas ao lado de papel de parede com folhas',
    es: 'Ducha amplia de vidrio con toallas blancas junto a papel tapiz de hojas',
  },
  '/assets/calle8/suite-calle8-plus/room-5.webp': {
    en: 'Wall-mounted shampoo, conditioner and body wash dispensers on shower tiles',
    pt: 'Dispensers de xampu, condicionador e sabonete líquido fixados nos azulejos do chuveiro',
    es: 'Dispensadores de champú, acondicionador y gel de baño fijados en los azulejos de la ducha',
  },
  '/assets/calle8/suite-calle8-plus/room-6.webp': {
    en: 'Pink-lit room with glass double shower, white towels and desk with purple chairs',
    pt: 'Ambiente com luz rosa, box de vidro com ducha dupla, toalhas brancas e bancada com cadeiras roxas',
    es: 'Ambiente con luz rosada, ducha doble de vidrio, toallas blancas y escritorio con sillas moradas',
  },
  '/assets/calle8/suite-calle8-plus/room-7.webp': {
    en: 'Pink wall with tall mirror and dance pole, desk with magenta chairs and wall TV',
    pt: 'Parede rosa com espelho alto e barra de pole dance, bancada com cadeiras magenta e TV',
    es: 'Pared rosada con espejo alto y tubo de baile, escritorio con sillas magenta y TV',
  },
  '/assets/calle8/suite-calle8-plus/room-8.webp': {
    en: 'Herringbone-tiled shower wall with toiletry dispensers and grab bar',
    pt: 'Parede do chuveiro com azulejos espinha de peixe, dispensers de banho e barra de apoio',
    es: 'Pared de ducha con azulejos en espiga, dispensadores de baño y barra de apoyo',
  },
  '/assets/calle8/suite-calle8-plus/room-9.webp': {
    en: 'Vanity with black sink, mirror and hair dryer between herringbone-tiled walls',
    pt: 'Bancada com cuba preta, espelho e secador de cabelo entre paredes de azulejos espinha de peixe',
    es: 'Tocador con lavabo negro, espejo y secador entre paredes de azulejos en espiga',
  },
  '/assets/calle8/suite-jacuzzi/principal.webp': {
    en: 'Bed with blue LED underglow and headboard lines, jacuzzi behind glass in the corner',
    pt: 'Cama com LED azul na base e linhas de luz na cabeceira, hidromassagem atrás de vidro no canto',
    es: 'Cama con LED azul en la base y líneas de luz en el cabecero, jacuzzi tras vidrio en la esquina',
  },
  '/assets/calle8/suite-jacuzzi/room-1.webp': {
    en: 'Bed under blue and purple LED lighting with the jacuzzi beside it',
    pt: 'Cama sob iluminação LED azul e roxa com a hidromassagem ao lado',
    es: 'Cama bajo iluminación LED azul y morada con el jacuzzi al lado',
  },
  '/assets/calle8/suite-jacuzzi/room-2.webp': {
    en: 'Bed with blue LED base next to a glass-enclosed jacuzzi and black lounge chair',
    pt: 'Cama com base em LED azul ao lado de hidromassagem com vidro e poltrona preta',
    es: 'Cama con base de LED azul junto a jacuzzi con cerramiento de vidrio y sillón negro',
  },

  // scape
  '/assets/scape/suite-scape/principal.jpg': {
    en: 'Bed with white pillows beneath a black and white face and birds mural, glass shower',
    pt: 'Cama com travesseiros brancos sob mural preto e branco de rosto e pássaros, box de vidro',
    es: 'Cama con almohadas blancas bajo un mural en blanco y negro de rostro y aves, ducha de vidrio',
  },
  '/assets/scape/suite-scape/room-1.jpg': {
    en: 'Bed beside a grey-tiled glass shower and vanity, under a face and birds mural',
    pt: 'Cama ao lado de box de vidro com azulejos cinza e bancada, sob mural de rosto e pássaros',
    es: 'Cama junto a ducha de vidrio con azulejos grises y tocador, bajo un mural de rostro y aves',
  },
  '/assets/scape/suite-scape/room-2.jpg': {
    en: 'Bed and face and birds mural in purple and blue LED light',
    pt: 'Cama e mural de rosto e pássaros sob luz LED roxa e azul',
    es: 'Cama y mural de rostro y aves bajo luz LED morada y azul',
  },
  '/assets/scape/suite-scape/room-3.jpg': {
    en: 'Bed on a wooden platform beneath a blue water-drop mural, glass shower beside',
    pt: 'Cama em plataforma de madeira sob mural azul de gota de água, box de vidro ao lado',
    es: 'Cama sobre plataforma de madera bajo un mural azul de gota de agua, ducha de vidrio al lado',
  },
  '/assets/scape/suite-scape/room-4.jpg': {
    en: 'Glass shower with wood-look tiles and vanity with blue vessel sink',
    pt: 'Box de vidro com azulejos amadeirados e bancada com cuba de apoio azul',
    es: 'Ducha de vidrio con azulejos imitación madera y tocador con lavabo azul sobre encimera',
  },
  '/assets/scape/suite-scape/room-5.jpg': {
    en: 'Wall TV above a desk with metal chair, minibar and zebra-print chair',
    pt: 'TV na parede acima de bancada com cadeira de metal, frigobar e poltrona de estampa de zebra',
    es: 'TV en la pared sobre escritorio con silla metálica, minibar y sillón con estampado de cebra',
  },
  '/assets/scape/suite-scape/room-6.jpg': {
    en: 'Glass corner shower with wood-look tiles, blue vessel sink and bed with white pillows',
    pt: 'Box de vidro de canto com azulejos amadeirados, cuba de apoio azul e cama com travesseiros brancos',
    es: 'Ducha esquinera de vidrio con azulejos imitación madera, lavabo azul y cama con almohadas blancas',
  },
  '/assets/scape/suite-scape/room-7.webp': {
    en: 'Bed with towel decoration under purple LED light and a white textured wall',
    pt: 'Cama com toalha decorativa sob luz LED roxa e parede branca texturizada',
    es: 'Cama con toalla decorativa bajo luz LED morada y pared blanca texturizada',
  },
  '/assets/scape/suite-scape-plus/principal.jpg': {
    en: 'Bed on a wooden platform beneath a blue light-streak mural, dance pole and glass shower',
    pt: 'Cama em plataforma de madeira sob mural azul de feixes de luz, barra de pole dance e box de vidro',
    es: 'Cama sobre plataforma de madera bajo mural azul de haces de luz, tubo de baile y ducha de vidrio',
  },
  '/assets/scape/suite-scape-plus/room-1.jpg': {
    en: 'Bed with white pillows, zebra-print lounge chair and blue light-streak mural',
    pt: 'Cama com travesseiros brancos, poltrona com estampa de zebra e mural azul de feixes de luz',
    es: 'Cama con almohadas blancas, sillón con estampado de cebra y mural azul de haces de luz',
  },
  '/assets/scape/suite-scape-plus/room-2.jpg': {
    en: 'Bed and zebra-print lounge chair in blue LED light under a light-streak mural',
    pt: 'Cama e poltrona com estampa de zebra sob luz LED azul e mural de feixes de luz',
    es: 'Cama y sillón con estampado de cebra bajo luz LED azul y mural de haces de luz',
  },
  '/assets/scape/suite-scape-plus/room-3.jpg': {
    en: 'Wall TV above a desk, dance pole, blue lounge chair and brick-tiled shower',
    pt: 'TV na parede acima de bancada, barra de pole dance, poltrona azul e chuveiro com revestimento de tijolinho',
    es: 'TV en la pared sobre escritorio, tubo de baile, sillón azul y ducha con revestimiento de ladrillo',
  },
  '/assets/scape/suite-scape-plus/room-4.jpg': {
    en: 'Bed beneath a gold lips mural, blue lounge chair and brick-walled shower',
    pt: 'Cama sob mural de lábios dourados, poltrona azul e chuveiro com paredes de tijolinho',
    es: 'Cama bajo mural de labios dorados, sillón azul y ducha con paredes de ladrillo',
  },
  '/assets/scape/suite-scape-plus/room-5.jpg': {
    en: 'Bed and gold lips mural in dim green LED light',
    pt: 'Cama e mural de lábios dourados sob luz LED verde suave',
    es: 'Cama y mural de labios dorados bajo tenue luz LED verde',
  },
  '/assets/scape/suite-scape-plus/room-6.webp': {
    en: 'Bed with cyan LED underglow and ceiling light, glass-walled bathroom behind',
    pt: 'Cama com LED ciano na base e no teto, banheiro com paredes de vidro ao fundo',
    es: 'Cama con LED cian en la base y el techo, baño con paredes de vidrio al fondo',
  },
  '/assets/scape/suite-jacuzzi/principal.jpg': {
    en: 'Bed beneath colourful geometric wallpaper, zebra-print chair and jacuzzi in yellow-tiled glass room',
    pt: 'Cama sob papel de parede geométrico colorido, poltrona de zebra e hidromassagem em ambiente de vidro com azulejos amarelos',
    es: 'Cama bajo papel tapiz geométrico colorido, sillón de cebra y jacuzzi en ambiente de vidrio con azulejos amarillos',
  },
  '/assets/scape/suite-jacuzzi/room-1.jpg': {
    en: 'Bed, zebra-print chair and jacuzzi in purple and pink LED light',
    pt: 'Cama, poltrona de estampa de zebra e hidromassagem sob luz LED roxa e rosa',
    es: 'Cama, sillón con estampado de cebra y jacuzzi bajo luz LED morada y rosada',
  },
  '/assets/scape/suite-jacuzzi/room-2.jpg': {
    en: 'Jacuzzi in a glass-enclosed yellow-tiled room beside double vessel sinks',
    pt: 'Hidromassagem em ambiente de vidro com azulejos amarelos ao lado de cubas duplas',
    es: 'Jacuzzi en ambiente de vidrio con azulejos amarillos junto a lavabos dobles',
  },
  '/assets/scape/suite-jacuzzi/room-3.jpg': {
    en: 'Bed under a red and blue flame mural, jacuzzi in glass-walled green-tiled bathroom',
    pt: 'Cama sob mural de chamas vermelhas e azuis, hidromassagem em banheiro de vidro com azulejos verdes',
    es: 'Cama bajo mural de llamas rojas y azules, jacuzzi en baño de vidrio con azulejos verdes',
  },
  '/assets/scape/suite-jacuzzi/room-4.jpg': {
    en: 'Glass-enclosed jacuzzi and shower with green tiles beside double vessel sinks',
    pt: 'Hidromassagem e chuveiro em ambiente de vidro com azulejos verdes ao lado de cubas duplas',
    es: 'Jacuzzi y ducha en ambiente de vidrio con azulejos verdes junto a lavabos dobles',
  },
  '/assets/scape/suite-jacuzzi/room-5.jpg': {
    en: 'Bed facing a wall TV, desk with chairs and glass-walled jacuzzi room',
    pt: 'Cama de frente para TV na parede, bancada com cadeiras e hidromassagem em ambiente de vidro',
    es: 'Cama frente a TV en la pared, escritorio con sillas y jacuzzi en ambiente de vidrio',
  },
  '/assets/scape/suite-jacuzzi/room-6.webp': {
    en: 'Bed with towel decoration in magenta LED light, orange chair and corner jacuzzi',
    pt: 'Cama com toalha decorativa sob luz LED magenta, poltrona laranja e hidromassagem no canto',
    es: 'Cama con toalla decorativa bajo luz LED magenta, sillón naranja y jacuzzi en la esquina',
  },
  '/assets/scape/suite-vip/principal.jpg': {
    en: 'Bed with granite ledge, dance pole, jacuzzi and red rose wallpaper',
    pt: 'Cama com aparador de granito, barra de pole dance, hidromassagem e papel de parede de rosas vermelhas',
    es: 'Cama con repisa de granito, tubo de baile, jacuzzi y papel tapiz de rosas rojas',
  },
  '/assets/scape/suite-vip/room-1.jpg': {
    en: 'Double vessel sinks under round mirrors with champagne, bed in the foreground',
    pt: 'Cubas de apoio duplas sob espelhos redondos com champanhe, cama em primeiro plano',
    es: 'Lavabos dobles sobre encimera bajo espejos redondos con champán, cama en primer plano',
  },
  '/assets/scape/suite-vip/room-2.jpg': {
    en: 'Jacuzzi in a marble bathroom with glass shower, red lounge chair and X-shaped cross',
    pt: 'Hidromassagem em banheiro de mármore com box de vidro, poltrona vermelha e cruz em X',
    es: 'Jacuzzi en baño de mármol con ducha de vidrio, sillón rojo y cruz en X',
  },
  '/assets/scape/suite-vip/room-3.jpg': {
    en: 'Bed facing red rose wallpaper, red X-shaped cross, dance pole and wall TV',
    pt: 'Cama de frente para papel de parede de rosas vermelhas, cruz vermelha em X, barra de pole dance e TV',
    es: 'Cama frente a papel tapiz de rosas rojas, cruz roja en X, tubo de baile y TV',
  },

  // nexx
  '/assets/nexx/suite-nexx/principal.jpg': {
    en: 'Bed on a yellow platform beneath a black and white city skyline mural',
    pt: 'Cama em plataforma amarela sob mural preto e branco de skyline da cidade',
    es: 'Cama sobre plataforma amarilla bajo un mural en blanco y negro del horizonte urbano',
  },
  '/assets/nexx/suite-nexx/room-1.jpg': {
    en: 'Bed and city skyline mural in blue LED light',
    pt: 'Cama e mural de skyline da cidade sob luz LED azul',
    es: 'Cama y mural del horizonte urbano bajo luz LED azul',
  },
  '/assets/nexx/suite-nexx/room-2.jpg': {
    en: 'Yellow desk with wall TV, black chaise lounge, mirror and brick-walled shower',
    pt: 'Bancada amarela com TV na parede, chaise longue preta, espelho e chuveiro com paredes de tijolinho',
    es: 'Escritorio amarillo con TV en la pared, chaise longue negra, espejo y ducha con paredes de ladrillo',
  },
  '/assets/nexx/suite-nexx/room-3.jpg': {
    en: 'Glass shower with brick walls beside a yellow vanity with vessel sink',
    pt: 'Box de vidro com paredes de tijolinho ao lado de bancada amarela com cuba de apoio',
    es: 'Ducha de vidrio con paredes de ladrillo junto a tocador amarillo con lavabo sobre encimera',
  },
  '/assets/nexx/suite-nexx-plus/principal.jpg': {
    en: 'Bed in magenta LED light with dance pole, slatted wood walls and champagne table',
    pt: 'Cama sob luz LED magenta com barra de pole dance, paredes de ripas de madeira e mesa com champanhe',
    es: 'Cama bajo luz LED magenta con tubo de baile, paredes de listones de madera y mesa con champán',
  },
  '/assets/nexx/suite-nexx-plus/room-1.jpg': {
    en: 'Glass shower with wood-look tiles, dance pole and TV on a slatted wood wall',
    pt: 'Box de vidro com azulejos amadeirados, barra de pole dance e TV em parede de ripas de madeira',
    es: 'Ducha de vidrio con azulejos imitación madera, tubo de baile y TV en pared de listones',
  },
  '/assets/nexx/suite-nexx-plus/room-2.jpg': {
    en: 'Bed on a wooden platform, dance pole and black chaise lounge under a palm ceiling mural',
    pt: 'Cama em plataforma de madeira, barra de pole dance e chaise longue preta sob mural de palmeiras no teto',
    es: 'Cama sobre plataforma de madera, tubo de baile y chaise longue negra bajo mural de palmeras en el techo',
  },
  '/assets/nexx/suite-nexx-plus/room-3.jpg': {
    en: 'Dance pole, black chaise lounge and desk with champagne against slatted wood walls',
    pt: 'Barra de pole dance, chaise longue preta e bancada com champanhe junto a paredes de ripas de madeira',
    es: 'Tubo de baile, chaise longue negra y escritorio con champán junto a paredes de listones de madera',
  },
  '/assets/nexx/suite-jacuzzi/principal.jpg': {
    en: 'Bed with wooden headboard, mirrored ceiling panels and jacuzzi in a glass-enclosed bathroom',
    pt: 'Cama com cabeceira de madeira, painéis espelhados no teto e hidromassagem em banheiro de vidro',
    es: 'Cama con cabecero de madera, paneles espejados en el techo y jacuzzi en baño de vidrio',
  },
  '/assets/nexx/suite-jacuzzi/room-1.jpg': {
    en: 'Bed and glass-enclosed jacuzzi in purple LED light under mirrored ceiling panels',
    pt: 'Cama e hidromassagem em ambiente de vidro sob luz LED roxa e painéis espelhados no teto',
    es: 'Cama y jacuzzi en ambiente de vidrio bajo luz LED morada y paneles espejados en el techo',
  },
  '/assets/nexx/suite-jacuzzi/room-2.jpg': {
    en: 'Jacuzzi inside a glass-walled room with green tiles and rain shower',
    pt: 'Hidromassagem em ambiente com paredes de vidro, azulejos verdes e chuveiro de teto',
    es: 'Jacuzzi en ambiente con paredes de vidrio, azulejos verdes y ducha tipo lluvia',
  },
  '/assets/nexx/suite-jacuzzi/room-3.jpg': {
    en: 'Desk with champagne before a sunset pier mural, vessel sink and green-tiled glass shower',
    pt: 'Bancada com champanhe diante de mural de píer ao pôr do sol, cuba de apoio e box com azulejos verdes',
    es: 'Escritorio con champán ante un mural de muelle al atardecer, lavabo y ducha con azulejos verdes',
  },
  '/assets/nexx/suite-jacuzzi/room-4.jpg': {
    en: 'Bed with wooden headboard under mirrored ceiling panels beside black curtains',
    pt: 'Cama com cabeceira de madeira sob painéis espelhados no teto ao lado de cortinas pretas',
    es: 'Cama con cabecero de madera bajo paneles espejados en el techo junto a cortinas negras',
  },
};
