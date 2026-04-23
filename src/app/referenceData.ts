export const REDE_OPTIONS = [
  "Centauro",
  "Fisía"
];

export const CANAL_OPTIONS = [
  "Loja Física Centauro",
  "Digital Centauro",
  "NVS",
  "NDIS",
  "Digital Nike"
];

export const FATURAMENTO_OPTIONS = [
  "Loja Física",
  "Digital"
];

export const ENTRADA_OPTIONS = [
  "Socialcomm",
  "CRM",
  "Facebook",
  "Instagram",
  "Marketplaceout",
  "Loja Física"
];

export const COMPRA_OPTIONS = [
  "App",
  "Site",
  "Encomenda Expressa",
  "Loja Fisica",
  "Mktplaceout"
];

export const MD_ENTREGA_OPTIONS = [
  "OMS Pickup",
  "OMS SFS",
  "Click & Retire",
  "Click & Retire 3P",
  "Loja Física Normal",
  "CD Normal",
  "MktPlace 3P",
  "Centauro envios"
];

export const REGIONAL_OPTIONS = [
  "Águias de Elite",
  "Águias do Cerrado",
  "Esquadrão 40 graus",
  "Esquadrão Valente",
  "Flechas do Norte",
  "Furacão Sul I",
  "Fúria do Interior",
  "Gigante Paulista",
  "Guadiões da Fronteira",
  "Guerreiros do Cangaço",
  "Legião Mineira",
  "Lobos SP",
  "SULcesso",
  "Titãs SP-MG",
  "Ultra Hight"
];

/** Centros CD (apenas CD, sem CDS) — usado no cluster de localização */
export const LOCALIZACAO_CD_OPTIONS = [
  "CD Jarinu - SP",
  "CD Extrema - MG",
];

/** Centros CDS — usado no cluster de localização */
export const LOCALIZACAO_CDS_OPTIONS = [
  "CDS Lapa - SP",
  "CDS João Pessoa - PB",
];

export const STATUS_OPTIONS = [
  "em Loja",
  "em Trânsito",
  "Em separação",
  "Separado",
];

/** Lista plana (valores persistidos em seleção / exclusão) — sem prefixo "STATUS:" */
export const LOCALIZACAO_OPTIONS = [
  ...STATUS_OPTIONS,
  ...LOCALIZACAO_CD_OPTIONS,
  ...LOCALIZACAO_CDS_OPTIONS,
];

/** Grupos apenas visuais no dropdown de LOCALIZAÇÃO (STATUS / CD / CDS) */
export interface LocalizacaoOptionGroup {
  id: "status" | "cd" | "cds";
  label: string;
  options: readonly string[];
}

export const LOCALIZACAO_OPTION_GROUPS: LocalizacaoOptionGroup[] = [
  { id: "status", label: "STATUS", options: STATUS_OPTIONS },
  { id: "cd", label: "CD", options: LOCALIZACAO_CD_OPTIONS },
  { id: "cds", label: "CDS", options: LOCALIZACAO_CDS_OPTIONS },
];

export const VENDEDOR_OPTIONS = [
  'JUSSARA RIBEIRO - 105307',
  'CARLOS MENDES - 102145',
  'PATRICIA SANTOS - 108923',
  'RICARDO OLIVEIRA - 103456',
  'FERNANDA COSTA - 107892',
  'JULIANO FERREIRA - 104567',
  'MARIANA SOUZA - 109234',
  'RODRIGO ALMEIDA - 106789',
  'CLAUDIA PEREIRA - 101234',
  'BRUNO MARTINS - 108456',
  'AMANDA LIMA - 105678',
  'RAFAEL CAMPOS - 102890',
  'LUCIANA ROCHA - 107345',
  'GABRIEL SILVA - 104123',
  'RENATA CARDOSO - 109567',
  'MARCOS VIANA - 103789',
  'JULIANA BARBOSA - 106234',
  'THIAGO MOREIRA - 108901',
  'BEATRIZ GOMES - 105432',
  'ANDERSON FREITAS - 102567',
];

export const ORIGEM_OPTIONS = [
  "Nacional",
  "Importado",
];

export const TIPO_OPTIONS = [
  "OMS",
  "Encomenda Expressa 1P",
  "Encomenda Expressa 3P",
  "Click e Retire",
  "Pickup"
];

export const LOJAS_LIST = [
  "CE20 - RIO SUL", "CE23 - BRASILIA SHOPPING", "CE25 - PARK SHOPPING BRASILIA", "CE32 - BARRA SHOPPING 32", 
  "CE34 - MORUMBI", "CE35 - CENTER NORTE", "CE37 - PÁTIO BRASIL BRASÍLIA", "CE38 - BARRA SALVADOR", 
  "CE39 - DOM PEDRO", "CE41 - METRÔ TATUAPÉ", "CE43 - BH SHOPPING", "CE44 - SP MARKET", 
  "CE45 - RIBEIRÃO SHOPPING", "CE46 - ELDORADO", "CE47 - IGUATEMI FORTALEZA", "CE48 - ARICANDUVA", 
  "CE50 - BARIGUI", "CE52 - TAMBORÉ", "CE53 - SHOPPING RECIFE", "CE54 - ESTAÇÃO CURITIBA", 
  "CE55 - PÁTIO SAVASSI", "CE56 - MIDWAY NATAL", "CE57 - JARDIM SUL", "CE59 - OSASCO SUPER SHOPPING", 
  "CE60 - SHOPPING DA BAHIA", "CE62 - METRÔ SANTA CRUZ", "CE63 - JARDINS ARACAJÚ", "CE64 - FLORIPA", 
  "CE66 - LEBLON", "CE67 - SALVADOR SHOPPING", "CE68 - MAUÁ", "CE69 - BALNEÁRIO CAMBORIÚ", 
  "CE70 - PIRACICABA", "CE71 - BOURBON SP", "CE72 - CASA FORTE", "CE73 - ITAÚ POWER", 
  "CE75 - SANTANA PARK", "CE76 - BANGÚ", "CE77 - LITORAL PLAZA", "CE80 - CENTRAL PLAZA", 
  "CE81 - NOVO SHOPPING RIBEIRÃO", "CE82 - JUIZ DE FORA INDEPENDÊNCIA", "CE84 - PALLADIUM CURITIBA", 
  "CE85 - CENTER VALE", "CE86 - NORTE SHOPPING RIO", "CE87 - BOURBON SÃO LEOPOLDO", 
  "CE88 - BOUGAINVILLE GOIÂNIA", "CE89 - BLUMENAU NEUMARKT", "CE90 - SÃO JOSDÉ DOS PINHAIS", 
  "CE91 - CATUAÍ LONDRINA", "CE92 - ANÁPOLIS BRASIL PARK", "CE94 - APARECIDA DE GOIANIA", 
  "CE95 - GRANDE RIO", "CE96 - NORTH SHOPPING FORTALEZA", "CE97 - VIA SUL FORTALEZA", 
  "CE98 - UNIÃO OSASCO", "CE99 - GOIÂNIA SHOPPING", "CE100 - TACARUNA", "CE101 - SUZANO", 
  "CE102 - DIADEMA", "CE103 - IGUATEMI CAXIAS", "CE105 - PARALELA", "CE106 - BOULEVARD BRASÍLIA", 
  "CE107 - BOURBON PORTO ALEGRE", "CE108 - GUARARAPES", "CE109 - TAGUATIGA SHOPPING", 
  "CE112 - BOULEVARD BELÉM", "CE114 - ILHA PLAZA RJ", "CE115 - PRUDENTE SHOPPING", 
  "CE116 - BEIRAMAR FLORIANÓPOLIS", "CE117 - ANÁLIA FRANCO", "CE118 - OUTLET EXTREMA", 
  "CE119 - MUELLER CURITIBA", "CE120 - BOURBON NOVO HAMBURGO", "CE121 - BONSUCESSO GUARULHOS", 
  "CE122 - MARÍLIA", "CE123 - VIA SHOPPING BARREIRO", "CE124 - RIO MAR ARACAJÚ", 
  "CE125 - BAURU SHOPPING", "CE128 - BOTAFOGO", "CE129 - CENTER SHOPPING UBERLÂNDIA", 
  "CE130 - JOINVILLE GARTEN", "CE131 - BOULEVARD BH", "CE133 - GRANJA VIANNA", "CE135 - RIO CLARO", 
  "CE138 - RIO ANIL SÃO LUÍS", "CE139 - CAPIM DOURADO PALMAS", "CE141 - TABOÃO DA SERRA", 
  "CE142 - FRANCA", "CE143 - SÃO GONÇALO SHOPPING", "CE144 - PENHA SP", "CE145 - CATUAÍ MARINGÁ", 
  "CE146 - NORTE SUL PLAZA", "CE147 - HIGIENÓPOLIS", "CE149 - WEST SHOPPING RIO", 
  "CE150 - SALVADOR NORTE", "CE151 - MINAS SHOPPING", "CE152 - SETE LAGOAS", "CE153 - SÃO GONÇALO PARTAGE", 
  "CE156 - ITAPETININGA", "CE157 - INDAIATUBA POLO", "CE158 - BLUMENAU NORTE SHOPPING", 
  "CE159 - PÁTIO RESENDE", "CE161 - UBERLÂNDIA SHOPPING", "CE162 - SHOPPING DA ILHA", 
  "CE164 - PARQUE BARUERI", "CE165 - PARK SHOPPING SÃO CAETANO", "CE167 - GOLDEN SQUARE", 
  "CE168 - POÇOS DE CALDAS", "CE169 - CAMPOS DOS GOYTACAZES", "CE170 - PÁTIO LIMEIRA", 
  "CE171 - ITÚ PLAZA", "CE173 - ITABUNA", "CE174 - CAMPO GRANDE SHOPPING", "CE175 - FEIRA DE SANTANA", 
  "CE176 - PLAZA NITERÓI", "CE177 - MACAÉ", "CE178 - PETROLINA RIVER", "CE179 - PATIO CHAPECÓ", 
  "CE180 - MOOCA PLAZA", "CE181 - MONTES CLAROS", "CE182 - VALPARAISO SHOPPING SUL", 
  "CE183 - RIO BRANCO", "CE184 - PALLADIUM PONTE GROSSA", "CE185 - MANAUARA", 
  "CE186 - JOÃO PESSOA MANAIRA", "CE187 - INTERNACIONAL GUARULHOS", "CE188 - CARAGUATATUBA", 
  "CE190 - PARK SHOPPING BELÉM", "CE192 - BELA VISTA SALVADOR", "CE193 - IMPERATRIZ", 
  "CE194 - PARQUE DAS BANDEIRAS", "CE195 - JUNDIAÍ SHOPPING", "CE196 - SANTO ANDRÉ GRAN PLAZA", 
  "CE197 - PÁTIO BATEL", "CE198 - RIOMAR RECIFE", "CE199 - JUAZEIRO DO NORTE", "CE200 - ESTAÇÃO BH", 
  "CE202 - CONTINENTE PARK SC", "CE203 - BOULEVARD LONDRINA", "CE205 - MARABÁ", 
  "CE206 - CAMPO GRANDE RIO", "CE207 - MOGI SHOPPING", "CE208 - SÃO BERNARDO PLAZA", 
  "CE209 - AMAZONAS SHOPPING", "CE217 - BETIM", "CE218 - CIDADE SOROCABA", "CE219 - PELOTAS SHOPPING", 
  "CE220 - TIETÊ PLAZA", "CE221 - PARANGABA", "CE222 - NATAL SHOPPING", "CE223 - ARAPIRACA GARDEN", 
  "CE224 - METROPOLITANO BARRA", "CE225 - PARQUE SHOPPING MACEIÓ", "CE226 - RIOMAR FORTALEZA", 
  "CE227 - JOÃO PESSOA MANGABEIRA", "CE229 - CAMPINAS SHOPPING", "CE230 - ANANINDEUA", 
  "CE234 - PANTANAL CUIABÁ", "CE235 - RIOMAR KENNEDY", "CE236 - PARK SHOPPING CANOAS", 
  "CE237 - ESTAÇÃO CUIABÁ", "CE238 - IGUATEMI PORTO ALEGRE", "CE239 - NOVA IGUAÇU", 
  "CE240 - BARRA SUL", "CE241 - BARRA SHOPPING 241", "CE242 - JOCKEY PLAZA", "CE243 - TIJUCA", 
  "CE245 - JÓQUEI FORTALEZA", "CE246 - CARIOCA SHOPPING", "CE247 - AMÉRICAS RIO", 
  "CE248 - PÁTIO BELÉM", "CE249 - CAMPINA GRANDE", "CE250 - BOSQUE GRÃO-PARÁ", 
  "CE251 - BOSQUE DOS IPÊS", "CE252 - PARQUE MAIA GUARULHOS", "CE253 - PARQUE SHOPPING BAHIA", 
  "CE254 - BOULEVARD BAURU", "CE255 - PAULISTA", "CE256 - VITÓRIA DA CONQUISTA", 
  "CE258 - IBIRAPUERA", "CE259 - CRICIÚMA", "CE260 - PARTAGE RIO GRANDE", "CE262 - ITAGUAÇU SC", 
  "CE263 - CAMARAGIBE", "CE264 - PÁTIO RORAIMA", "CE266 - PASSEIO DAS ÁGUAS GOIÂNIA", 
  "CE267 - TERESINA RIO POTY", "CE269 - IGUATEMI RIO PRETO", "CE270 - IGUATEMI CAMPINAS", 
  "CE272 - SANTA BÁRBARA D'OESTE", "CE273 - FLABOYANT SHOPPING", "CE274 - DEL REY", 
  "CE275 - PATIO CIANÊ", "CE276 - TRIMAIS", "CE277 - MARINGÁ PARK", "CE278 - CANTAREIRA", 
  "CE279 - IGUATEMI PRAIA DE BELAS", "CE280 - IGUATEMI BRASILIA", "CE281 - IGUATEMI RIBEIRÃO PRETO", 
  "CE283 - PALLADIUM UMUARAMA", "CE284 - PATTEO OLINDA", "CE285 - POUSO ALEGRE", 
  "CE286 - PASSO FUNDO", "CE287 - JK IGUATEMI", "CE288 - IGUATEMI SÃO PAULO", 
  "CE291 - SINOP SHOPPING", "CE292 - ARAÇATUBA PRAÇA NOVA", "CE294 - PORTO VELHO", 
  "CE295 - METRÔ TUCURUVI", "CE296 - CONJUNTO NACIONAL", "CE297 - INTERLAGOS", 
  "CE298 - VITÓRIA", "CE299 - ITAQUERA", "CE300 - CURITIBA SHOPPING", "CE301 - PATO BRANCO", 
  "CE303 - PÁTIO MACEIÓ", "CE304 - NOVA AMÉRICA", "CE305 - MADUREIRA SHOPPING", 
  "CE306 - SANTO ANDRÉ ABC", "CE307 - IGUATEMI ALPHAVILLE", "CE308 - MUELLER JOINVILLE", 
  "CE310 - VALE SUL", "CE311 - PLAZA SUL", "CE312 - RIO PRETO SHOPPING", "CE313 - CIDADE BH", 
  "CE314 - MAXI JUNDIAÍ", "CE315 - CARUARU SHOPPING", "CE316 - CATUAÍ CASCAVEL", 
  "CE1101 - ARARAS"
];

// Data for Estados/Cidades filtering
export const ESTADOS_LIST = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", 
  "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", 
  "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", 
  "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", 
  "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

export const STATE_TO_UF: Record<string, string> = {
  "Acre": "AC", "Alagoas": "AL", "Amapá": "AP", "Amazonas": "AM", "Bahia": "BA", 
  "Ceará": "CE", "Distrito Federal": "DF", "Espírito Santo": "ES", "Goiás": "GO", 
  "Maranhão": "MA", "Mato Grosso": "MT", "Mato Grosso do Sul": "MS", "Minas Gerais": "MG", 
  "Pará": "PA", "Paraíba": "PB", "Paraná": "PR", "Pernambuco": "PE", "Piauí": "PI", 
  "Rio de Janeiro": "RJ", "Rio Grande do Norte": "RN", "Rio Grande do Sul": "RS", 
  "Rondônia": "RO", "Roraima": "RR", "Santa Catarina": "SC", "São Paulo": "SP", 
  "Sergipe": "SE", "Tocantins": "TO"
};

export const CIDADES_BY_ESTADO: Record<string, string[]> = {
  "São Paulo": [
    "São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "São José dos Campos", 
    "Santo André", "Ribeirão Preto", "Osasco", "Sorocaba", "Mauá", "São José do Rio Preto", 
    "Mogi das Cruzes", "Santos", "Diadema", "Jundiaí", "Piracicaba", "Carapicuíba", "Bauru", 
    "Itaquaquecetuba", "São Vicente", "Franca", "Praia Grande", "Guarujá", "Taubaté", "Limeira", 
    "Suzano", "Taboão da Serra", "Sumaré", "Barueri", "Embu das Artes", "Indaiatuba", "Cotia", 
    "São Carlos", "Americana", "Marília", "Jacareí", "Araraquara", "Presidente Prudente", 
    "Hortolândia", "Rio Claro", "Araçatuba", "Santa Bárbara d'Oeste", "Ferraz de Vasconcelos", 
    "Francisco Morato", "Itapecerica da Serra", "Itu", "Bragança Paulista", "Pindamonhangaba", 
    "Itapetininga", "São Caetano do Sul", "Franco da Rocha", "Mogi Guaçu", "Jaú", "Botucatu", 
    "Atibaia", "Santana de Parnaíba", "Araras", "Cubatão", "Valinhos", "Sertãozinho", 
    "Jandira", "Ribeirão Pires", "Birigui", "Votorantim", "Barretos", "Catanduva", "Várzea Paulista", 
    "Guaratinguetá", "Tatuí", "Caraguatatuba", "Itatiba", "Salto", "Poá", "Ourinhos", "Paulínia", 
    "Assis", "Leme", "Itanhaém", "Caieiras", "Mairiporã", "Itapevi", "Votuporanga", "Caçapava",
    "Ubatuba", "São Roque", "São Sebastião", "Peruíbe", "Avaré", "Lorena", "Batatais", "Mirassol"
  ],
  "Rio de Janeiro": [
    "Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", 
    "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Magé", "Macaé", 
    "Itaboraí", "Cabo Frio", "Angra dos Reis", "Nova Friburgo", "Barra Mansa", "Teresópolis", 
    "Mesquita", "Nilópolis", "Maricá", "Queimados", "Rio das Ostras", "Resende", "Araruama", 
    "Itaguaí", "Japeri", "São Pedro da Aldeia", "Itaperuna", "Barra do Piraí", "Saquarema", 
    "Seropédica", "Três Rios", "Valença", "Rio Bonito", "Guapimirim", "Cachoeiras de Macacu", 
    "Paracambi", "Paraíba do Sul"
  ],
  "Minas Gerais": [
    "Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", 
    "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", 
    "Divinópolis", "Santa Luzia", "Ibirité", "Poços de Caldas", "Patos de Minas", "Pouso Alegre", 
    "Teófilo Otoni", "Barbacena", "Sabará", "Varginha", "Conselheiro Lafaiete", "Vespasiano", 
    "Itabira", "Araguari", "Ubá", "Passos", "Coronel Fabriciano", "Muriaé", "Ituiutaba", 
    "Araxá", "Lavras", "Itajubá", "Itaúna", "Pará de Minas", "Paracatu", "Caratinga", 
    "Nova Serrana", "Patrocínio", "Manhuaçu", "Timóteo", "São João del Rei", "Unaí", "Curvelo", 
    "Alfenas", "João Monlevade", "Três Corações", "Viçosa", "Cataguases", "Ouro Preto", "Janaúba", 
    "São Sebastião do Paraíso", "Januária", "Formiga", "Esmeraldas", "Pedro Leopoldo", "Ponte Nova"
  ],
  "Rio Grande do Sul": [
    "Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", 
    "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", 
    "Uruguaiana", "Santa Cruz do Sul", "Cachoeirinha", "Bagé", "Bento Gonçalves", "Erechim", 
    "Guaíba", "Cachoeira do Sul", "Esteio", "Santana do Livramento", "Ijuí", "Sapiranga", 
    "Santo Ângelo", "Alegrete", "Lajeado", "Farroupilha", "Venâncio Aires", "Vacaria", "Cap��o da Canoa",
    "Santa Rosa", "Campo Bom", "Cruz Alta", "Montenegro", "São Borja", "Taquara", "Camaquã"
  ],
  "Paraná": [
    "Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", 
    "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Araucária", "Toledo", "Apucarana", 
    "Pinhais", "Campo Largo", "Arapongas", "Almirante Tamandaré", "Piraquara", "Umuarama", 
    "Cambé", "Fazenda Rio Grande", "Sarandi", "Campo Mourão", "Francisco Beltrão", "Paranavaí", 
    "Pato Branco", "Cianorte", "Telêmaco Borba", "Castro", "Rolândia", "Irati", "União da Vitória"
  ],
  "Santa Catarina": [
    "Joinville", "Florianópolis", "Blumenau", "São José", "Chapecó", "Itajaí", "Criciúma", 
    "Jaraguá do Sul", "Palhoça", "Lages", "Balneário Camboriú", "Brusque", "Tubarão", 
    "São Bento do Sul", "Camboriú", "Caçador", "Navegantes", "Concórdia", "Rio do Sul", 
    "Araranguá", "Gaspar", "Biguaçu", "Indaial", "Itapema", "Mafra", "Canoinhas", "Içara"
  ],
  "Bahia": [
    "Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", 
    "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas", "Alagoinhas", "Barreiras", 
    "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", 
    "Valença", "Candeias", "Guanambi", "Jacobina", "Serrinha", "Senhor do Bonfim", "Dias d'Ávila"
  ],
  "Pernambuco": [
    "Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", 
    "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", 
    "Igarassu", "São Lourenço da Mata", "Abreu e Lima", "Santa Cruz do Capibaribe", 
    "Ipojuca", "Serra Talhada", "Araripina", "Gravatá", "Carpina", "Goiana", "Belo Jardim"
  ],
  "Ceará": [
    "Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", 
    "Maranguape", "Iguatu", "Quixadá", "Pacatuba", "Aquiraz", "Quixeramobim", "Canindé", 
    "Russas", "Crateús", "Tianguá", "Aracati", "Cascavel", "Pacajus", "Icó", "Horizonte"
  ],
  "Goiás": [
    "Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", 
    "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Senador Canedo", "Itumbiara", 
    "Catalão", "Jataí", "Planaltina", "Caldas Novas", "Santo Antônio do Descoberto", "Goianésia"
  ],
  "Distrito Federal": [
    "Brasília", "Ceilândia", "Samambaia", "Taguatinga", "Plano Piloto", "Planaltina", "Águas Claras",
    "Recanto das Emas", "Gama", "Guará", "Santa Maria", "Sobradinho", "São Sebastião", "Vicente Pires",
    "Itapoã", "Paranoá", "Sudoeste/Octogonal", "Brazlândia", "Riacho Fundo", "Lago Norte", "Lago Sul"
  ],
  "Espírito Santo": [
    "Serra", "Vila Velha", "Cariacica", "Vitória", "Cachoeiro de Itapemirim", "Linhares", 
    "São Mateus", "Colatina", "Guarapari", "Aracruz", "Viana", "Nova Venécia", "Barra de São Francisco"
  ],
  "Pará": [
    "Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas", "Castanhal", "Abaetetuba", 
    "Cametá", "Marituba", "São Félix do Xingu", "Barcarena", "Altamira", "Tucuruí", "Paragominas"
  ],
  "Amazonas": [
    "Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tabatinga", "Maués", "Tefé"
  ],
  "Mato Grosso": [
    "Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Cáceres", 
    "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garças"
  ],
  "Mato Grosso do Sul": [
    "Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã", "Sidrolândia", "Naviraí"
  ],
  "Paraíba": [
    "João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cabedelo", "Cajazeiras"
  ],
  "Rio Grande do Norte": [
    "Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim"
  ],
  "Alagoas": [
    "Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "Penedo"
  ],
  "Sergipe": [
    "Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão", "Estância"
  ],
  "Maranhão": [
    "São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar"
  ],
  "Piauí": [
    "Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano", "Barras", "Campo Maior"
  ],
  "Tocantins": [
    "Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"
  ],
  "Rondônia": [
    "Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"
  ],
  "Acre": [
    "Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"
  ],
  "Amapá": [
    "Macapá", "Santana", "Laranjal do Jari"
  ],
  "Roraima": [
    "Boa Vista", "Rorainópolis"
  ]
};

// City → Store mapping (each store belongs to a city)
export const LOJAS_BY_CIDADE: Record<string, string[]> = {
  "Belo Horizonte": ["CE43 - BH SHOPPING", "CE55 - PÁTIO SAVASSI", "CE123 - VIA SHOPPING BARREIRO", "CE131 - BOULEVARD BH", "CE151 - MINAS SHOPPING", "CE200 - ESTAÇÃO BH", "CE274 - DEL REY", "CE313 - CIDADE BH"],
  "São Paulo": ["CE34 - MORUMBI", "CE35 - CENTER NORTE", "CE41 - METRÔ TATUAPÉ", "CE44 - SP MARKET", "CE46 - ELDORADO", "CE48 - ARICANDUVA", "CE57 - JARDIM SUL", "CE62 - METRÔ SANTA CRUZ", "CE71 - BOURBON SP", "CE75 - SANTANA PARK", "CE80 - CENTRAL PLAZA", "CE117 - ANÁLIA FRANCO", "CE144 - PENHA SP", "CE147 - HIGIENÓPOLIS", "CE180 - MOOCA PLAZA", "CE220 - TIETÊ PLAZA", "CE258 - IBIRAPUERA", "CE278 - CANTAREIRA", "CE287 - JK IGUATEMI", "CE288 - IGUATEMI SÃO PAULO", "CE295 - METRÔ TUCURUVI", "CE297 - INTERLAGOS", "CE299 - ITAQUERA", "CE311 - PLAZA SUL"],
  "Rio de Janeiro": ["CE20 - RIO SUL", "CE32 - BARRA SHOPPING 32", "CE66 - LEBLON", "CE76 - BANGÚ", "CE86 - NORTE SHOPPING RIO", "CE114 - ILHA PLAZA RJ", "CE128 - BOTAFOGO", "CE149 - WEST SHOPPING RIO", "CE206 - CAMPO GRANDE RIO", "CE224 - METROPOLITANO BARRA", "CE241 - BARRA SHOPPING 241", "CE243 - TIJUCA", "CE246 - CARIOCA SHOPPING", "CE247 - AMÉRICAS RIO", "CE304 - NOVA AMÉRICA", "CE305 - MADUREIRA SHOPPING"],
  "Curitiba": ["CE50 - BARIGUI", "CE54 - ESTAÇÃO CURITIBA", "CE84 - PALLADIUM CURITIBA", "CE119 - MUELLER CURITIBA", "CE197 - PÁTIO BATEL", "CE242 - JOCKEY PLAZA", "CE300 - CURITIBA SHOPPING"],
  "Salvador": ["CE38 - BARRA SALVADOR", "CE60 - SHOPPING DA BAHIA", "CE67 - SALVADOR SHOPPING", "CE105 - PARALELA", "CE150 - SALVADOR NORTE", "CE192 - BELA VISTA SALVADOR"],
  "Fortaleza": ["CE47 - IGUATEMI FORTALEZA", "CE96 - NORTH SHOPPING FORTALEZA", "CE97 - VIA SUL FORTALEZA", "CE108 - GUARARAPES", "CE221 - PARANGABA", "CE226 - RIOMAR FORTALEZA", "CE235 - RIOMAR KENNEDY", "CE245 - JÓQUEI FORTALEZA"],
  "Recife": ["CE53 - SHOPPING RECIFE", "CE72 - CASA FORTE", "CE100 - TACARUNA", "CE198 - RIOMAR RECIFE"],
  "Porto Alegre": ["CE107 - BOURBON PORTO ALEGRE", "CE238 - IGUATEMI PORTO ALEGRE", "CE279 - IGUATEMI PRAIA DE BELAS"],
  "Goiânia": ["CE88 - BOUGAINVILLE GOIÂNIA", "CE99 - GOIÂNIA SHOPPING", "CE266 - PASSEIO DAS ÁGUAS GOIÂNIA", "CE273 - FLABOYANT SHOPPING"],
  "Brasília": ["CE23 - BRASILIA SHOPPING", "CE25 - PARK SHOPPING BRASILIA", "CE37 - PÁTIO BRASIL BRASÍLIA", "CE106 - BOULEVARD BRASÍLIA", "CE109 - TAGUATIGA SHOPPING", "CE280 - IGUATEMI BRASILIA", "CE296 - CONJUNTO NACIONAL"],
  "Campinas": ["CE39 - DOM PEDRO", "CE194 - PARQUE DAS BANDEIRAS", "CE229 - CAMPINAS SHOPPING", "CE270 - IGUATEMI CAMPINAS"],
  "Florianópolis": ["CE64 - FLORIPA", "CE116 - BEIRAMAR FLORIANÓPOLIS", "CE202 - CONTINENTE PARK SC"],
  "Belém": ["CE112 - BOULEVARD BELÉM", "CE190 - PARK SHOPPING BELÉM", "CE248 - PÁTIO BELÉM", "CE250 - BOSQUE GRÃO-PARÁ"],
  "Manaus": ["CE185 - MANAUARA", "CE209 - AMAZONAS SHOPPING"],
  "Natal": ["CE56 - MIDWAY NATAL", "CE222 - NATAL SHOPPING"],
  "Aracaju": ["CE63 - JARDINS ARACAJÚ", "CE124 - RIO MAR ARACAJÚ"],
  "Maceió": ["CE225 - PARQUE SHOPPING MACEIÓ", "CE303 - PÁTIO MACEIÓ"],
  "João Pessoa": ["CE186 - JOÃO PESSOA MANAIRA", "CE227 - JOÃO PESSOA MANGABEIRA"],
  "Cuiabá": ["CE234 - PANTANAL CUIABÁ", "CE237 - ESTAÇÃO CUIABÁ"],
  "Londrina": ["CE91 - CATUAÍ LONDRINA", "CE203 - BOULEVARD LONDRINA"],
  "Maringá": ["CE145 - CATUAÍ MARINGÁ", "CE277 - MARINGÁ PARK"],
  "Ribeirão Preto": ["CE45 - RIBEIRÃO SHOPPING", "CE81 - NOVO SHOPPING RIBEIRÃO", "CE281 - IGUATEMI RIBEIRÃO PRETO"],
  "São José do Rio Preto": ["CE269 - IGUATEMI RIO PRETO", "CE312 - RIO PRETO SHOPPING"],
  "Uberlândia": ["CE129 - CENTER SHOPPING UBERLÂNDIA", "CE161 - UBERLÂNDIA SHOPPING"],
  "Blumenau": ["CE89 - BLUMENAU NEUMARKT", "CE158 - BLUMENAU NORTE SHOPPING"],
  "Joinville": ["CE130 - JOINVILLE GARTEN", "CE308 - MUELLER JOINVILLE"],
  "Bauru": ["CE125 - BAURU SHOPPING", "CE254 - BOULEVARD BAURU"],
  "Jundiaí": ["CE195 - JUNDIAÍ SHOPPING", "CE314 - MAXI JUNDIAÍ"],
  "Guarulhos": ["CE121 - BONSUCESSO GUARULHOS", "CE187 - INTERNACIONAL GUARULHOS", "CE252 - PARQUE MAIA GUARULHOS"],
  "Osasco": ["CE59 - OSASCO SUPER SHOPPING", "CE98 - UNIÃO OSASCO"],
  "Santo André": ["CE196 - SANTO ANDRÉ GRAN PLAZA", "CE306 - SANTO ANDRÉ ABC"],
  "São Bernardo do Campo": ["CE167 - GOLDEN SQUARE", "CE208 - SÃO BERNARDO PLAZA"],
  "São José dos Campos": ["CE85 - CENTER VALE", "CE310 - VALE SUL"],
  "São Gonçalo": ["CE143 - SÃO GONÇALO SHOPPING", "CE153 - SÃO GONÇALO PARTAGE"],
  "Sorocaba": ["CE218 - CIDADE SOROCABA", "CE275 - PATIO CIANÊ"],
  "Campo Grande": ["CE174 - CAMPO GRANDE SHOPPING", "CE251 - BOSQUE DOS IPÊS"],
  "São Luís": ["CE138 - RIO ANIL SÃO LUÍS", "CE162 - SHOPPING DA ILHA"],
  "Barueri": ["CE52 - TAMBORÉ", "CE164 - PARQUE BARUERI", "CE307 - IGUATEMI ALPHAVILLE"],
  "Balneário Camboriú": ["CE69 - BALNEÁRIO CAMBORIÚ"],
  "Mauá": ["CE68 - MAUÁ"],
  "Piracicaba": ["CE70 - PIRACICABA"],
  "Contagem": ["CE73 - ITAÚ POWER"],
  "Praia Grande": ["CE77 - LITORAL PLAZA"],
  "Juiz de Fora": ["CE82 - JUIZ DE FORA INDEPENDÊNCIA"],
  "São Leopoldo": ["CE87 - BOURBON SÃO LEOPOLDO"],
  "São José dos Pinhais": ["CE90 - SÃO JOSDÉ DOS PINHAIS"],
  "Anápolis": ["CE92 - ANÁPOLIS BRASIL PARK"],
  "Aparecida de Goiânia": ["CE94 - APARECIDA DE GOIANIA"],
  "Duque de Caxias": ["CE95 - GRANDE RIO"],
  "Suzano": ["CE101 - SUZANO"],
  "Diadema": ["CE102 - DIADEMA"],
  "Caxias do Sul": ["CE103 - IGUATEMI CAXIAS"],
  "Presidente Prudente": ["CE115 - PRUDENTE SHOPPING"],
  "Novo Hamburgo": ["CE120 - BOURBON NOVO HAMBURGO"],
  "Marília": ["CE122 - MARÍLIA"],
  "Cotia": ["CE133 - GRANJA VIANNA"],
  "Rio Claro": ["CE135 - RIO CLARO"],
  "Palmas": ["CE139 - CAPIM DOURADO PALMAS"],
  "Taboão da Serra": ["CE141 - TABOÃO DA SERRA"],
  "Franca": ["CE142 - FRANCA"],
  "Sete Lagoas": ["CE152 - SETE LAGOAS"],
  "Itapetininga": ["CE156 - ITAPETININGA"],
  "Indaiatuba": ["CE157 - INDAIATUBA POLO"],
  "Resende": ["CE159 - PÁTIO RESENDE"],
  "São Caetano do Sul": ["CE165 - PARK SHOPPING SÃO CAETANO"],
  "Poços de Caldas": ["CE168 - POÇOS DE CALDAS"],
  "Campos dos Goytacazes": ["CE169 - CAMPOS DOS GOYTACAZES"],
  "Limeira": ["CE170 - PÁTIO LIMEIRA"],
  "Itu": ["CE171 - ITÚ PLAZA"],
  "Itabuna": ["CE173 - ITABUNA"],
  "Feira de Santana": ["CE175 - FEIRA DE SANTANA"],
  "Niterói": ["CE176 - PLAZA NITERÓI"],
  "Macaé": ["CE177 - MACAÉ"],
  "Petrolina": ["CE178 - PETROLINA RIVER"],
  "Chapecó": ["CE179 - PATIO CHAPECÓ"],
  "Montes Claros": ["CE181 - MONTES CLAROS"],
  "Valparaíso de Goiás": ["CE182 - VALPARAISO SHOPPING SUL"],
  "Rio Branco": ["CE183 - RIO BRANCO"],
  "Ponta Grossa": ["CE184 - PALLADIUM PONTE GROSSA"],
  "Caraguatatuba": ["CE188 - CARAGUATATUBA"],
  "Imperatriz": ["CE193 - IMPERATRIZ"],
  "Juazeiro do Norte": ["CE199 - JUAZEIRO DO NORTE"],
  "Marabá": ["CE205 - MARABÁ"],
  "Mogi das Cruzes": ["CE207 - MOGI SHOPPING"],
  "Betim": ["CE217 - BETIM"],
  "Pelotas": ["CE219 - PELOTAS SHOPPING"],
  "Arapiraca": ["CE223 - ARAPIRACA GARDEN"],
  "Campina Grande": ["CE249 - CAMPINA GRANDE"],
  "Ananindeua": ["CE230 - ANANINDEUA"],
  "Canoas": ["CE236 - PARK SHOPPING CANOAS"],
  "Nova Iguaçu": ["CE239 - NOVA IGUAÇU"],
  "Lauro de Freitas": ["CE253 - PARQUE SHOPPING BAHIA"],
  "Paulista": ["CE255 - PAULISTA"],
  "Vitória da Conquista": ["CE256 - VITÓRIA DA CONQUISTA"],
  "Criciúma": ["CE259 - CRICIÚMA"],
  "Rio Grande": ["CE260 - PARTAGE RIO GRANDE"],
  "São José": ["CE262 - ITAGUAÇU SC"],
  "Camaragibe": ["CE263 - CAMARAGIBE"],
  "Boa Vista": ["CE264 - PÁTIO RORAIMA"],
  "Teresina": ["CE267 - TERESINA RIO POTY"],
  "Santa Bárbara d'Oeste": ["CE272 - SANTA BÁRBARA D'OESTE"],
  "Olinda": ["CE284 - PATTEO OLINDA"],
  "Pouso Alegre": ["CE285 - POUSO ALEGRE"],
  "Passo Fundo": ["CE286 - PASSO FUNDO"],
  "Umuarama": ["CE283 - PALLADIUM UMUARAMA"],
  "Sinop": ["CE291 - SINOP SHOPPING"],
  "Araçatuba": ["CE292 - ARAÇATUBA PRAÇA NOVA"],
  "Porto Velho": ["CE294 - PORTO VELHO"],
  "Vitória": ["CE298 - VITÓRIA"],
  "Pato Branco": ["CE301 - PATO BRANCO"],
  "Caruaru": ["CE315 - CARUARU SHOPPING"],
  "Cascavel": ["CE316 - CATUAÍ CASCAVEL"],
  "Araras": ["CE1101 - ARARAS"],
  "Extrema": ["CE118 - OUTLET EXTREMA"],
};

export const CATEGORIAS_LIST = [
  "Alimento", "Aquáticos", "Arremesso", "Artes Marciais", "Aventura", 
  "Baseball", "Basquete", "Bike", "Caminhada", "Corrida", "Futebol", 
  "Futebol Americano", "Handball", "Infantil", "Patinacao", "Patinete", 
  "Racket", "Skate", "Slackline", "Treino", "Volei"
];

export const MODALIDADES_BY_CATEGORIA: Record<string, string[]> = {
  "Futebol": ["Campo", "Futsal", "Society", "Salão", "Lifestyle", "Multiuso", "Alta Performance", "Casual", "Torcedor", "Praticante"],
  "Corrida": ["Rua", "Trilha", "Maratona", "Caminhada", "Performance"],
  "Treino": ["Academia", "Crossfit", "Funcional", "Yoga", "Pilates"],
  "Bike": ["Mountain Bike", "Speed", "Urbano", "Infantil"],
  "Basquete": ["Quadra", "Street", "NBA", "Casual"],
  "Volei": ["Quadra", "Praia", "Indoor"],
  "Aquáticos": ["Piscina", "Mar", "Competição"],
  "Casual": ["Dia a dia", "Moda"],
  "Alimento": ["Suplementação", "Energia", "Hidratação", "Vitaminas"]
};

export const GRUPOS_LIST = [
  "Acessórios", "Alimentos", "Calçados", "Equipamentos", "Vestuários"
];

export const SUBGRUPOS_BY_GRUPO: Record<string, string[]> = {
  "Alimentos": [
    "Barrinha", "BCAA", "Bebida", "Carbo", "Creatina", "Emagrecedores", "Gel", 
    "Glutamina", "Hipercalórico", "Pré Treino", "Proteína", "Vitamínicos", "Whey Protein"
  ],
  "Vestuários": [
    "Bermuda", "Blusa", "Blusão", "Body", "Bretelle", "Calça", "Calção", 
    "Camisa", "Camiseta", "Colete", "Complemento", "Conjunto", "Fleece", 
    "Jaqueta", "Kimono", "Kit Uniforme", "Legging", "Maiô", "Manguito", 
    "Pernito", "Polo", "Poncho", "Rashguard", "Regata", "Roupão", "Saia", 
    "Shorts", "Sunga", "Top", "Vestido"
  ],
  "Calçados": [
    "Botas", "Chinelo", "Chuteira", "Sandália", "Sapatilha", "Tênis"
  ],
  "Acessórios": ["Boné", "Luva", "Meia", "Mochila", "Óculos"],
  "Equipamentos": ["Bola", "Bomba de Ar", "Caneleira", "Cronômetro", "Raquete"]
};

export const MARCA_OPTIONS = [
  "Adidas", "Asics", "Fila", "Mizuno", "New Balance", 
  "Nike", "Olympikus", "Penalty", "Puma", "Umbro", "Under Armour"
];

export const GENERO_OPTIONS = [
  "Feminino", "Masculino", "Unissex", "Não Informado"
];

export const FAIXA_ETARIA_OPTIONS = [
  "Adulto", "Infantil"
];

export const COR_OPTIONS = [
  "Amarelo", "Azul", "Bege", "Branco", "Cinza", "Dourado", "Laranja", 
  "Marrom", "Multicolorido", "Preto", "Prata", "Rosa", "Roxo", "Verde", "Vermelho"
];

export const TAMANHO_OPTIONS = [
  "Único", 
  "PP", "P", "M", "G", "GG", "XG", "XXG",
  "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"
];

export const SABOR_OPTIONS = [
  "Baunilha", "Chocolate", "Cookies & Cream", "Coco", "Frutas Vermelhas", 
  "Laranja", "Limão", "Morango", "Natural", "Sem Sabor", "Uva"
];

export const SALA_OPTIONS = [
  "Sala C",
  "Sala V",
  "Sala F",
  "Sala O",
];

export const UDN_OPTIONS = [
  "AQUATICOS - MAR - CAMISETA UV - 0002/SPEEDO",
  "AQUATICOS - MAR - MASCARAS - 0005/INICIANTE",
  "AQUATICOS - MAR - POLO - 0001/DEMAIS",
  "AQUATICOS - PISCINA - MAIO - 0002/FILA/TRADICIONAL",
  "AQUATICOS - PISCINA - MAIO - 0002/SPEEDO/TRADICIONAL",
  "AQUATICOS - PISCINA - MAIO - 0004/SPEEDO/TRADICIONAL",
  "AQUATICOS - PISCINA - OCULOS - 0005/DEMAIS/INICIANTE",
  "AQUATICOS - PISCINA - OCULOS - 0005/OXER/INICIANTE",
  "AQUATICOS - PISCINA - OCULOS - 0005/SPEEDO/AVANCADO",
  "ARTES MARCIAIS - BOXE - APARADOR - 0005/SOCO",
  "ARTES MARCIAIS - BOXE - LUVA - 0005/10OZ",
  "ARTES MARCIAIS - BOXE - LUVA - 0005/12OZ",
  "ARTES MARCIAIS - JIU JITSU - KIMONO - 0001/KORAL",
  "ARTES MARCIAIS - JIU JITSU - KIMONO - 0003/DEMAIS",
  "ARTES MARCIAIS - MMA - CAMISETA - 0001/VENUM",
  "BASQUETE - BASQUETE - TENIS - 0001/ADIDAS/P3/OUTROS",
  "BASQUETE - BASQUETE - TENIS - 0001/ADIDAS/P3/SIGN",
  "BASQUETE - BASQUETE - TENIS - 0001/NIKE/P1/OUTROS",
  "BASQUETE - BASQUETE - TENIS - 0001/NIKE/P2/OUTROS",
  "BASQUETE - BASQUETE - TENIS - 0001/NIKE/P3/OUTROS",
  "CORRIDA - CAMINHADA - TENIS CAM - 0001/UNDER ARMOUR/OUTROS",
  "CORRIDA - CAMINHADA - TENIS CAM - 0002/ADIDAS/DURAMO",
  "CORRIDA - CAMINHADA - TENIS CAM - 0002/ADIDAS/LITE RACER",
  "CORRIDA - CAMINHADA - TENIS CAM - 0002/PUMA/OUTROS",
  "CORRIDA - CORRIDA - CALCA COMP MP - 0001/OXER/OUTROS",
  "CORRIDA - CORRIDA - CALCA LEGGING - 0002/DEMAIS/OUTROS",
  "CORRIDA - CORRIDA - CAMISETA - 0001/DEMAIS/OUTROS",
  "CORRIDA - CORRIDA - CAMISETA - 0001/NIKE/BASICOS",
  "CORRIDA - CORRIDA - CAMISETA MP - 0001/ASICS LIC/OUTROS",
  "CORRIDA - CORRIDA - CAMISETA MP - 0001/OXER/OUTROS",
  "CORRIDA - CORRIDA - CAMISETA MP - 0002/ASICS LIC/OUTROS",
  "FITNESS - ACADEMIA - CALCA LEGGING - 0002/ADIDAS/OUTROS",
  "FITNESS - ACADEMIA - CALCA LEGGING - 0002/DEMAIS/OUTROS",
  "FITNESS - ACADEMIA - CALCA LEGGING - 0002/FILA/OUTROS",
  "FITNESS - ACADEMIA - CALCA LEGGING - 0002/PUMA/OUTROS",
  "FITNESS - ACADEMIA - CALCA LEGGING MP - 0002/ASICS LIC/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA - 0001/ADIDAS/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA - 0001/MIZUNO/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA - 0001/NIKE/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA - 0004/OXER/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA ML - 0002/VESTEM/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA MP - 0001/OXER/OUTROS",
  "FITNESS - ACADEMIA - CAMISETA MP - 0002/OXER/OUTROS",
  "FITNESS - ACADEMIA - CANELEIRA - 0005/DEMAIS/OUTROS",
  "FITNESS - ACADEMIA - JAQUETA - 0001/DEMAIS/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS - 0003/PUMA/BABY",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/FILA/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/LACOSTE/EUROPA",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/LACOSTE/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/NEW BALANCE/480",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/NEW BALANCE/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/NIKE/COURT VISION",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/NIKE/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/ON BRAZIL/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0001/PUMA/SMASH",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/ADIDAS/ADVANTAGE",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/ADIDAS/OUTROS",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/NIKE/GAMMAFORCE",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/NIKE/JORDAN",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/PUMA/CARINA",
  "FITNESS - SPORTSWEAR - TENIS LS - 0002/PUMA/OUTROS",
  "FITNESS - SPORTSWEAR - TOP LS MP - 0002/OXER/OUTROS",
  "FUTEBOL - CAMPO - ACESSORIOS TIME - 0005/DESCONTINUADO",
  "FUTEBOL - CAMPO - BLUSAO FEDERACAO - 0001/CBF",
  "FUTEBOL - CAMPO - BLUSAO FEDERACAO - 0001/DEMAIS FEDERACOES",
  "FUTEBOL - CAMPO - BLUSAO INT LIC - 0001/DEMAIS/DEMAIS INTERNACIONAL",
  "FUTEBOL - CAMPO - BLUSAO NAC - 0001/DEMAIS NACIONAL",
  "FUTEBOL - CAMPO - BLUSAO NAC - 0001/PALMEIRAS",
  "FUTEBOL - CAMPO - BLUSAO NAC LIC - 0001/DEMAIS/CORINTHIANS",
  "FUTEBOL - CAMPO - BLUSAO NAC LIC - 0001/DEMAIS/DEMAIS NACIONAL",
  "FUTEBOL - CAMPO - BOLA - 0005/ADIDAS/P0",
  "FUTEBOL - CAMPO - BOLA - 0005/ADIDAS/P2",
  "FUTEBOL - CAMPO - BOLA - 0005/DEMAIS/P0",
  "FUTEBOL - CAMPO - BOLA - 0005/NIKE/P1",
  "FUTEBOL - CAMPO - BOLA - 0005/PUMA/P0",
  "FUTEBOL - CAMPO - BOLA COPA DO MUNDO - 0005/P1",
  "FUTEBOL - CAMPO - BOLA FEDERACAO - 0005/DEMAIS FEDERACOES",
  "FUTEBOL - CAMPO - CALCA INT - 0001/DEMAIS INTERNACIONAL",
  "FUTEBOL - CAMPO - CALCAO FEDERACAO - 0001/DEMAIS FEDERACOES",
  "FUTEBOL - CAMPO - CALCAO FEDERACAO - 0003/DEMAIS FEDERACOES",
  "FUTEBOL - CAMPO - CALCAO INT LIC - 0001/BARCELONA/BARCELONA",
  "FUTEBOL - CAMPO - CALCAO INT LIC - 0001/DEMAIS/REAL MADRID",
  "FUTEBOL - CAMPO - CALCAO NAC - 0001/CORINTHIANS",
  "FUTEBOL - CAMPO - CALCAO NAC - 0003/PALMEIRAS",
  "FUTEBOL - CAMPO - CALCAO NAC LIC - 0003/DEMAIS/DEMAIS NACIONAL",
  "FUTEBOL - CAMPO - CAMISA FEDERACAO - 0001/ARGENTINA",
  "FUTEBOL - CAMPO - CAMISA FEDERACAO - 0001/CBF_AWAY",
  "FUTEBOL - CAMPO - CAMISA FEDERACAO - 0001/FRANCA",
  "FUTEBOL - CAMPO - CAMISA INT - 0001/BAYERN",
  "NUTRICAO - SUPLEMENTOS - HIPERCALORICO - 0005/OUTROS",
  "RACKET - TENNIS - ANTI VIBRADOR - 0005/DEMAIS",
  "RACKET - TENNIS - BLUSAO - 0001/NIKE",
  "RACKET - TENNIS - CAMISETA - 0001/ADIDAS",
  "RACKET - TENNIS - CAMISETA - 0001/FILA",
  "RACKET - TENNIS - CAMISETA - 0002/NIKE",
  "RACKET - TENNIS - CAMISETA - 0004/ASICS LIC",
  "RACKET - TENNIS - CORDA - 0005/P1",
  "RACKET - TENNIS - MUNHEQUEIRA - 0005/NIKE",
  "RACKET - TENNIS - POLO - 0001/DEMAIS",
  "RACKET - TENNIS - POLO - 0001/FILA",
  "RACKET - TENNIS - POLO - 0001/NIKE",
  "RACKET - TENNIS - POLO - 0002/DEMAIS"
];

export const MODELO_OPTIONS = [
  "0000000000000 NSW CLUB MASC",
  "BERMUDA ADIDAS 3 LISTRAS",
  "BERMUDA ADIDAS 3 STRIPES MASCULINA",
  "BERMUDA ADIDAS ESSENTIALS",
  "BERMUDA ADIDAS M LOGO MAS",
  "BERMUDA M NIKE CLUB FLOW",
  "BERMUDA NIKE DF TOTALITY KNIT 7IN UL G",
  "BERMUDA NIKE M DF FLEX 7IN SHO",
  "BERMUDA NIKE PRO 365 SHORT 5IN",
  "BOLA ADIDAS WC CLB",
  "BOLA ADIDAS WC LGE",
  "BOLA ADIDAS WC TRN",
  "BONE ADIDAS 3 LISTRAS",
  "BONE ADIDAS RUN MES CC",
  "BONE NIKE CLUB U CB FUT WSH",
  "BONE NIKE DF FLY CAP U CB",
  "CALCA LEGGING ADIDAS TREINO BASICA",
  "CALCAO NIKE DF PARK III NB K 21 JUV",
  "CAMISA ALEMANHA I 26 TORCEDOR MASC",
  "CAMISA ARGENTINA I 26 TORCEDOR MASC",
  "CAMISA ARSENAL I 26 TORCEDOR MASC",
  "CAMISA ATLETICO MINEIRO I 25 TORCEDOR MASC",
  "CAMISA ATLETICO MINEIRO I 26 JOGO MASC",
  "CAMISA ATLETICO MINEIRO II 25 TORCEDOR FEM",
  "CAMISA ATLETICO MINEIRO TREINO 26 MASC",
  "CAMISA ATLETICO PARANAENSE I 25 TORCEDOR MASC",
  "CAMISA ATLETICO PARANAENSE II 25 TORCEDOR FEM",
  "CAMISA BAHIA I 25 TORCEDOR MASC",
  "CAMISA BARCELONA I 26 TORCEDOR MASC",
  "CAMISA BARCELONA II 26 TORCEDOR FEM",
  "CAMISA BOCA JRS I 25 TORCEDOR MASC",
  "CAMISA BOTAFOGO I 25 TORCEDOR MASC",
  "CAMISA BOTAFOGO II 25 TORCEDOR FEM",
  "CAMISA CORINTHIANS I 25 TORCEDOR FEM",
  "CAMISA CORINTHIANS I 25 TORCEDOR JUV",
  "CAMISA CORINTHIANS I 25 TORCEDOR MASC",
  "CAMISA CORINTHIANS II 25 TORCEDOR JUV",
  "CAMISA CORINTHIANS II 25 TORCEDOR MASC",
  "CAMISA CORINTHIANS TREINO 26 MASC",
  "CAMISA CRUZEIRO I 25 TORCEDOR MASC",
  "CAMISA CRUZEIRO II 25 TORCEDOR FEM",
  "CAMISA FLAMENGO I 26 TORCEDOR FEM",
  "CAMISA FLAMENGO I 26 TORCEDOR INF",
  "CAMISA FLAMENGO I 26 TORCEDOR MASC",
  "CAMISA FLAMENGO II 25 TORCEDOR MASC",
  "CAMISA FLUMINENSE I 25 TORCEDOR MASC",
  "CAMISA FLUMINENSE II 25 TORCEDOR FEM",
  "CAMISA GREMIO I 25 TORCEDOR MASC",
  "CAMISA GREMIO II 25 TORCEDOR FEM",
  "CAMISA INTERNACIONAL I 25 TORCEDOR MASC",
  "CAMISA INTERNACIONAL II 25 TORCEDOR FEM",
  "CAMISA JUVENTUS I 26 TORCEDOR MASC",
  "CAMISA MANCHESTER CITY I 26 TORCEDOR MASC",
  "CAMISA MILAN I 26 TORCEDOR MASC",
  "CAMISA NIKE DRY PARK VII MASC",
  "CAMISA PALMEIRAS I 25 TORCEDOR MASC",
  "CAMISA PALMEIRAS II 25 TORCEDOR FEM",
  "CAMISA PALMEIRAS TREINO 26 MASC",
  "CAMISA PSG I 26 TORCEDOR MASC",
  "CAMISA REAL MADRID III 25 TORCEDOR MASC",
  "CAMISA SANTOS I 25 TORCEDOR MASC",
  "CAMISA SAO PAULO I 25 TORCEDOR MASC",
  "CAMISA SAO PAULO II 25 TORCEDOR FEM",
  "CAMISA VASCO I 26 TORCEDOR MASC",
  "CAMISETA ADIDAS 3 STRIPES",
  "CAMISETA ADIDAS ESSENTIALS 3 LISTRAS",
  "CAMISETA ADIDAS ESSENTIALS LOGO",
  "CAMISETA ADIDAS OWN THE RUN 3 LISTRAS",
  "CAMISETA ADIDAS SMALL LOGO",
  "CAMISETA ADIDAS TREINO BASICA",
  "CAMISETA ADIDAS WE BASE 3S",
  "CAMISETA ADIDAS WE BASE T",
  "CAMISETA MANGA CURTA NSW ESSNTL IC NIKE",
  "CAMISETA MANGA CURTA NSW TEE CLUB NIKE F",
  "CAMISETA NIKE DF M180RLGD RE MASC",
  "CAMISETA NIKE DF PARK VII JS INF",
  "CAMISETA NIKE ICON FUTURA",
  "CAMISETA NIKE M DF TEE RUN SWOOSH",
  "CAMISETA NIKE M NK DF HBR",
  "CAMISETA NIKE MANGA CURTA TEE RLGD LB",
  "CAMISETA NIKE MC K DF LGD SWO",
  "CAMISETA NIKE SB TEE LOGO",
  "CAMISETA NIKE TEE JUST DO I",
  "CAMISETA NIKE UV MILER SS MASC",
  "CHINELO ADIDAS ADILETTE AQUA",
  "CHINELO NIKE VICTORI ONE SLIDE",
  "CHUTEIRA CAMPO F50 LEAGUE",
  "CHUTEIRA CAMPO PREDATOR CLUB",
  "CHUTEIRA FUT NIKE JR SUPERFLY 10 CLUB IC",
  "CHUTEIRA FUTSAL F50 CLUB INFANTIL",
  "CHUTEIRA FUTSAL NIKE JR LEGEND 10 CLUB IC",
  "CHUTEIRA FUTSAL ZOOM VAPOR 16 ACADEMY KM",
  "CHUTEIRA NIKE BECO 2 646433",
  "CHUTEIRA NIKE JR VAPOR 16 CLUB IC",
  "CHUTEIRA NIKE JR VAPOR 16 CLUB TF",
  "CHUTEIRA NIKE VAPOR 16 CLUB TF",
  "CHUTEIRA NIKE ZOOM VAPOR 16 ACADEMY KM",
  "CHUTEIRA NIKE ZOOM VAPOR 16 ACADEMY TF",
  "CHUTEIRA RABISCO JR",
  "CHUTEIRA SOCIETY ADIDAS PREDATOR LEAGUE",
  "CHUTEIRA SOCIETY F50 CLUB",
  "CHUTEIRA SOCIETY F50 LEAGUE MID",
  "CHUTEIRA SOCIETY NIKE BECO",
  "CHUTEIRA SOCIETY PREDATOR CLUB",
  "KIT MEIA ADIDAS CANO ALTO 3 LISTRAS",
  "KIT MEIA NIKE EVERYDAY CUSH LOW 3P",
  "LEGGING NIKE W DF ONE HR TIGHT USEAM",
  "MALA ADIDAS DUFFEL LINEAR PEQUENA",
  "MALA NIKE BRSLA M DUFF 9 5 60L",
  "MALA NIKE BRSLA S DUFF 9 5 41L",
  "MEIA NIKE ELITE LIGHTWEIGHT 3P",
  "MEIA NIKE EVERYDAY CUSH ANKLE 3P",
  "MEIA NIKE EVERYDAY CUSH CREW 3P",
  "MEIA NIKE NSW EVERYDAY ESSENTIAL CREW 3",
  "MINI BOLA ADIDAS WC",
  "MOCHILA ADIDAS CLASSICA TREINO 3 LISTRAS",
  "MOCHILA ADIDAS CL TAPE BPK U",
  "MOCHILA ADIDAS LINEAR",
  "MOCHILA ADIDAS POWER VIII",
  "MOCHILA NIKE BRSLA JDI MINI BKPK",
  "MOCHILA NIKE BRSLA M BKPK 9 5 24L",
  "MOCHILA NIKE CLASSIC YA BA5928",
  "MOCHILA NIKE ELEMENTAL BKPK HBR",
  "MOCHILA NIKE HERITAGE UNI",
  "REGATA NIKE DF RLGD SL MASC",
  "SHORT ADIDAS BIG LOGO",
  "SHORT ADIDAS CHELSEA 3 STRIPES",
  "SHORT ADIDAS CHELSEA SMALL LOGO",
  "SHORT NIKE M DF CHALLENGER 7BF SHORT",
  "SHORTS NIKE DF CHALLENGER 7UL MASC",
  "SHORTS NIKE M DF CHALLENGER 5BF",
  "SHORTS NIKE TOTALITY KNIT 7IN UL MASC",
  "SHORTS NIKE TOTALITY KNIT 9 IN UL MASC",
  "SUNGA ADIDAS 3 LISTRAS",
  "SUNGA ADIDAS 3S BOXER",
  "TENIS ADIDAS ADIZERO ADIOS PRO 4 MASC",
  "TENIS ADIDAS ADIZERO DRIVE FEM",
  "TENIS ADIDAS ADIZERO DRIVE MASC",
  "TENIS ADIDAS ADIZERO EVO SL FEM",
  "TENIS ADIDAS ADIZERO EVO SL MASC",
  "TENIS ADIDAS ADVANTAGE BASE 2 0",
  "TENIS ADIDAS ADVANTAGE BASE 2 0 JUNIOR",
  "TENIS ADIDAS ADVANTAGE BASE FEM",
  "TENIS ADIDAS ADVANTAGE BASE MASC",
  "TENIS ADIDAS ASTRASTAR",
  "TENIS ADIDAS BOOST RUN FEM",
  "TENIS ADIDAS BOOST RUN MASC",
  "TENIS ADIDAS COURTBLOCK FEM",
  "TENIS ADIDAS DROPSET 4 POWER TRAINER M",
  "TENIS ADIDAS DURAMO RC 2 FEM",
  "TENIS ADIDAS DURAMO RC 2 MASC",
  "TENIS ADIDAS DURAMO SL2 FEM",
  "TENIS ADIDAS DURAMO SL2 MASC",
  "TENIS ADIDAS DURAMO SPEED 2 MASC",
  "TENIS ADIDAS GRAND COURT 2 0 FEM",
  "TENIS ADIDAS GRAND COURT 2 0 FEMININO",
  "TENIS ADIDAS GRAND COURT 2 0 M",
  "TENIS ADIDAS GRAND COURT BASE 2 0 MASC",
  "TENIS ADIDAS GRAND COURT KIDS INF",
  "TENIS ADIDAS LITE RACER 4 0",
  "TENIS ADIDAS LITE RACER 4 0 FEM",
  "TENIS ADIDAS LITE RACER 4 0 MASC",
  "TENIS ADIDAS RESPONSE RUNNER",
  "TENIS ADIDAS RUN 70S 20 MASC",
  "TENIS ADIDAS RUN FALCON",
  "TENIS ADIDAS RUN FALCON KIDS",
  "TENIS ADIDAS RUNFALCON 5 FEM",
  "TENIS ADIDAS RUNFALCON 5 MASC",
  "TENIS ADIDAS STREETALK FEM",
  "TENIS ADIDAS STREETTALK MASC",
  "TENIS ADIDAS SUPERNOVA RISE 3 MERCEDES",
  "TENIS ADIDAS TENSAUR",
  "TENIS ADIDAS TENSAUR RUN",
  "TENIS ADIDAS TENSAUR SPORT 3 0 CF K",
  "TENIS ADIDAS ULTRABOOST 5 FEM",
  "TENIS ADIDAS ULTRARUN 5 FEM",
  "TENIS ADIDAS ULTRARUN 5 MASC",
  "TENIS ADIDAS ULTIMASHOW 2 0",
  "TENIS ADIDAS VL COURT",
  "TENIS ADIDAS VL COURT BOLD FEM",
  "TENIS ADIDAS VS PACE 2 0",
  "TENIS BQT ADIDAS OWNTHEGAME",
  "TENIS BQT NIKE G T HUSTLE ACADEMY",
  "TENIS NIKE AIR MAX ALPHA TRAINER 6 MASC",
  "TENIS NIKE AIR MAX EXCEE 365 MASC",
  "TENIS NIKE AIR MAX EXCEE MASC",
  "TENIS NIKE AIR MAX FIRE",
  "TENIS NIKE AIR MAX NUAXIS MASC",
  "TENIS NIKE AIR WINFLO 11 FEM",
  "TENIS NIKE AIR WINFLO 11 MASC",
  "TENIS NIKE AIR ZOOM PEGASUS 41 FEM",
  "TENIS NIKE AIR ZOOM PEGASUS 41 MASC",
  "TENIS NIKE AIR ZOOM RIVAL FLY 4 MASC",
  "TENIS NIKE BIG LOW",
  "TENIS NIKE COSMIC RUNNER",
  "TENIS NIKE COURT BOROUGH LOW RECRAFT B",
  "TENIS NIKE COURT BOROUGH LOW RECRAFT BG",
  "TENIS NIKE COURT VISION ALTA LTR FEM",
  "TENIS NIKE COURT VISION LO",
  "TENIS NIKE COURT VISION LO MASC",
  "TENIS NIKE COURT VISION LO NN FEM",
  "TENIS NIKE COURT VISION LO TRK32",
  "TENIS NIKE COURT VISION LOW NEXT NATURE",
  "TENIS NIKE COURT VISION MID MASC",
  "TENIS NIKE DOWNSHIFTER 13 FEM",
  "TENIS NIKE DOWNSHIFTER 13 MASC",
  "TENIS NIKE FLEX RUNNER 3 PS",
  "TENIS NIKE FLEX RUNNER 4 GS",
  "TENIS NIKE FLEX RUNNER 4 PS",
  "TENIS NIKE FLEX TRAIN FEM",
  "TENIS NIKE FLEX TRAIN MASC",
  "TENIS NIKE FREE METCON 6 MASC",
  "TENIS NIKE FULL FORCE LO MASC",
  "TENIS NIKE FULL FORCE MASC",
  "TENIS NIKE G T JUMP ACADEMY",
  "TENIS NIKE GAMMA FORCE FEM",
  "TENIS NIKE JOURNEY FEM",
  "TENIS NIKE JOURNEY R MASC",
  "TENIS NIKE PEGASUS PLUS MASC",
  "TENIS NIKE PEGASUS PREMIUM MASC",
  "TENIS NIKE PEGASUS TURBO 4 MASC",
  "TENIS NIKE PRECISION VII",
  "TENIS NIKE QUEST 6 FEM",
  "TENIS NIKE QUEST 6 MASC",
  "TENIS NIKE REVOLUTION 7 GS",
  "TENIS NIKE REVOLUTION 7 PSV",
  "TENIS NIKE REVOLUTION 8 FEM",
  "TENIS NIKE REVOLUTION 8 MASC",
  "TENIS NIKE RUN DEFY FEM",
  "TENIS NIKE RUN DEFY MASC",
  "TENIS NIKE SB FORCE 58 MASC",
  "TENIS NIKE TERRA MANTA",
  "TENIS NIKE V5 RNR",
  "TENIS NIKE VOMERO 18 FEM",
  "TENIS NIKE VOMERO 18 MASC",
  "TENIS NIKE VOMERO PLUS FEM",
  "TENIS NIKE VOMERO PLUS MASC",
  "TENIS NIKE ZOOM FLY 6 MASC",
  "TOP ADIDAS ESSENTIALS SUPORTE LEVE"
];

// --- MOCK DATA FOR METRICS ---

export const MOCK_LUCRO_BRUTO = [
  1183011.46, 970809.83, 990638.05, 1072360.89, 960070.61, 893425.80, 854714.00, 824552.13,
  814409.13, 772033.57, 917052.54, 746562.14, 738470.01, 696103.03, 683051.54, 731695.71,
  658269.04, 658260.85, 665300.03, 654271.83, 570075.77, 632588.21, 571883.25, 665052.99,
  574445.31, 550761.77, 530612.42, 548591.05, 569889.34, 589094.09, 562975.85, 540568.14,
  546420.61, 510848.69, 473306.78, 456541.16, 473540.21, 512595.56, 467456.51, 446428.94,
  476398.97, 474502.69, 451020.21, 481348.17, 430916.73, 458235.89, 444397.65, 430426.55,
  415085.91, 417911.64, 436369.99, 484361.62, 440134.02, 362948.05, 396036.50, 384804.20,
  387199.60, 378136.64, 357368.80, 357622.37, 361104.02, 339065.73, 381153.14, 331810.60,
  347896.74, 356242.19, 336489.22, 350602.02, 351757.33, 330724.43, 335019.59, 325583.24,
  305358.56, 317789.99, 314512.04, 326082.07, 340456.60, 314194.99, 295515.26, 325750.81,
  300986.18, 292445.43, 310402.28, 278468.31, 299321.46, 300918.10, 285564.84, 289948.60,
  279082.42, 130796.61, 284309.79, 292357.72, 301300.86, 294878.61, 285801.66, 271515.77,
  297112.02, 292714.58, 289073.19, 275043.85, 269321.81, 275403.45, 287322.28, 288279.62,
  271687.66, 260267.57, 264555.21, 289136.53, 273985.95, 268511.31, 245103.75, 262114.66,
  247655.81, 257949.75, 257194.51, 270394.52, 239157.47, 242115.26, 230533.78, 262718.07,
  248394.57, 260044.31, 245295.10, 249802.02, 236276.74, 219126.41, 236647.70, 239519.93,
  252793.25, 227407.01, 235476.99, 245272.46, 224050.33, 231277.32, 228118.75, 250302.53,
  242367.53, 252994.30, 241465.79, 234297.33, 221278.32, 240318.61, 236835.47, 237727.29,
  241493.15, 204093.69, 232380.23, 208244.31, 227943.43, 231480.25, 231465.91, 219980.16,
  223960.38, 221204.50, 196846.65, 199459.09, 197479.25, 219495.89, 217893.44, 202095.72,
  216073.83, 194929.06, 190793.54, 194871.33, 201772.02, 202144.73, 200787.10, 174875.45,
  194944.25, 200329.52, 187722.93, 184706.05, 186675.61, 192006.94, 173874.31, 188823.54,
  190123.15, 186345.47, 190898.70, 185781.04, 169298.33, 170127.86, 183839.65, 188030.29,
  181224.83, 180781.64, 178826.70, 179115.96, 179846.75, 147936.88, 174667.18, 174889.72,
  169918.68, 154920.34, 145460.69, 160843.56, 161742.53, 157315.04, 159904.41, 142711.08,
  157221.78, 154233.54, 155675.93, 159910.62, 149273.56, 132088.96, 142076.45, 131242.12,
  125125.97, 142236.48, 123674.54, 131749.25, 134915.59, 133188.16, 124136.31, 127442.95,
  115215.90, 120312.58, 113864.40, 101364.12, 115284.18, 105526.64, 110447.29, 111334.45,
  98321.22, 91639.47, 84828.10, 76632.71, 54489.46, 2366.02
];

export const MOCK_ROB = [
  3332424.42, 2821156.86, 2777572.44, 2739244.38, 2700280.91, 2527625.48, 2474234.97, 2330587.03,
  2201190.13, 2137020.74, 2111203.33, 2095130.28, 2038559.01, 1998734.30, 1975351.74, 376722.12,
  376251.66, 372165.18, 368939.56, 363957.39, 359847.12, 354093.16, 338163.75, 318804.08, 318062.03,
  315749.37, 314017.49, 308840.70, 306674.19, 296640.18, 294934.62, 260872.75, 248407.69, 231941.80,
  203454.76, 149620.64, 6849.46
];

export const MOCK_CMV = [
  1647668.39, 1064259.98, 1027235.27, 990890.94, 1025132.45, 941829.17, 930727.77, 830950.24,
  674534.45, 662001.71, 655706.89, 633892.84, 626952.40, 597709.49, 633828.25, 793205.01, 588748.23,
  550051.33, 576905.21, 555361.20, 568389.50, 558926.69, 524626.69, 511116.85, 494836.33, 505876.02,
  493497.95, 122266.17, 121925.07, 116500.90, 125542.79, 111498.52, 110417.05, 98242.40, 94339.76,
  85494.26, 77053.08
];

export const MOCK_MARGEM = [
  0.4185, 0.4778, 0.4916, 0.5204, 0.4840, 0.4877, 0.4794, 0.4989, 0.4943, 0.4420, 0.5442, 0.4855, 0.4857,
  0.4916, 0.4803, 0.4971, 0.4547, 0.4982, 0.4577, 0.4985, 0.5031, 0.5011, 0.4937, 0.4987, 0.4992, 0.4880,
  0.5123, 0.4813, 0.4870, 0.4047, 0.4838, 0.4156, 0.5039, 0.5007, 0.5133, 0.4922, 0.4861
];

export const MOCK_QTD_VENDA = [
  18354, 16881, 17326, 15436, 13342, 15840, 15502, 14551, 12098, 13826, 13401, 12219, 11057,
  12393, 12713, 10779, 11677, 11164, 10774, 11307, 12020, 10369, 10726, 11157, 11102, 9551,
  2436, 2620, 2504, 2645, 2667, 2410, 2505, 2748, 2575, 2557, 2478
];

// ── Exposição de produtos (PRODUTO) — inteiros, grandeza alinhada aos exemplos do spec

/** Qtd de clicks — ex.: 420, 721, 545… */
export const MOCK_EXP_CALC_CLICKS = [
  420, 721, 545, 668, 545, 512, 598, 634, 702, 481, 390, 655, 720, 540, 660, 430, 745, 525, 675,
  530, 610, 688, 455, 700, 515, 580, 640, 695, 500, 600, 715, 535, 665, 440, 710, 470, 625, 690,
];

/** Qtd braços de araras — ex.: 320, 465, 650… */
export const MOCK_EXP_VEST_BRACOS_ARARAS = [
  320, 465, 650, 487, 710, 340, 450, 620, 500, 690, 380, 470, 640, 495, 705, 315, 480, 655, 475,
  725, 360, 440, 625, 510, 680, 330, 460, 645, 490, 700, 350, 475, 635, 505, 715, 375, 455, 660,
];

/** Qtd mesas — ex.: 2, 4, 3, 1, 3 */
export const MOCK_EXP_VEST_MESAS = [
  2, 4, 3, 1, 3, 2, 2, 4, 1, 3, 2, 4, 3, 1, 4, 2, 3, 3, 1, 2, 4, 2, 3, 1, 5, 3, 2, 4, 1, 2, 3, 1,
];

/** Qtd braços de meias — ex.: 8, 10, 7, 6, 5 */
export const MOCK_EXP_MEIAS_BRACOS = [
  8, 10, 7, 6, 5, 6, 7, 8, 9, 10, 11, 5, 8, 7, 6, 10, 9, 7, 6, 5, 8, 10, 7, 6, 9, 7, 8, 6, 5, 10,
];

/** Qtd expositores de relógios — ex.: 1, 0, 0, 1, 2 */
export const MOCK_EXP_ACC_RELOGIOS = [
  1, 0, 0, 1, 2, 0, 1, 2, 0, 1, 1, 0, 0, 2, 1, 0, 1, 1, 0, 2, 0, 0, 1, 2, 1, 1, 0, 1, 0, 2, 0, 1,
];

/** Qtd expositores de óculos — ex.: 1, 0, 1, 0, 1 */
export const MOCK_EXP_ACC_OCULOS = [
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
];

/** Qtd cestos de bolas — ex.: 3, 2, 0, 1, 2 */
export const MOCK_EXP_CESTOS_BOLAS = [
  3, 2, 0, 1, 2, 0, 1, 2, 3, 4, 2, 3, 1, 0, 2, 3, 2, 1, 0, 1, 2, 3, 0, 2, 1, 2, 0, 3, 1, 2, 1, 0,
];

/** Qtd geladeiras — ex.: 1, 0, 0, 1, 0 */
export const MOCK_EXP_NUT_GELADEIRAS = [
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0,
];

export const MOCK_QTD_ESTOQUE = [
  10357, 11030, 10569, 11924, 4196, 7767, 7265, 10821, 9754, 13471, 13999, 10468, 6168, 10234,
  6847, 6581, 5398, 6001, 4679, 2025, 1497, 637, 1576, 2136, 880, 1352, 330, 1653, 524, 1802,
  4654, 1023, 1949, 2751, 872, 7862, 3895
];

export const MOCK_VLR_ESTOQUE = [
  1243680, 1325610, 1268280, 1430880, 503520, 932040, 871800, 1298520, 1170480, 1616520, 1679880,
  1256160, 740160, 1228080, 821640, 789720, 647760, 720120, 561480, 243000, 179640, 76440, 189120,
  256320, 105600, 162240, 39600, 198360, 62880, 216240, 558480, 122760, 233880, 330120, 104640,
  943440, 467400
];

export const MOCK_DEP = [
  69, 72, 59, 72, 70, 67, 70, 66, 77, 92, 123, 93, 74, 68, 69, 76, 69, 74, 67, 70, 79, 57,
  72, 86, 103, 96, 72, 84, 106, 78, 74, 62, 90, 77, 94, 104, 89
];

export const MOCK_DEF = [
  76.22, 83.77, 75.48, 80.72, 84.10, 81.49, 82.35, 89.88, 87.60, 101.79, 81.74, 91.19, 96.04,
  79.04, 99.31, 110.27, 118.02, 141.39, 93.77, 100.27, 141.03, 97.15, 85.78, 85.83, 108.22,
  92.94, 114.91, 136.92, 136.62, 139.10, 113.04, 173.81, 104.78, 133.52, 102.62, 119.48, 120.43
];

export const MOCK_LAST_ENTRY = [
  2, 5, 1, 0, 12, 4, 3, 15, 22, 8, 7, 30, 45, 60, 1, 0, 2, 9, 14, 21, 5, 3, 11, 18, 25, 6,
  4, 2, 1, 0, 8, 12, 20, 3, 5, 7, 10
];

export const MOCK_SSS = [
  0.1245, 0.0832, -0.0412, 0.1567, 0.0921, 0.1145, 0.0789, 0.0543, 0.1321, 0.1054,
  0.0876, 0.0432, 0.0211, -0.0123, 0.0567, 0.0890, 0.1234, 0.0678, 0.0456, 0.0321,
  0.0987, 0.1122, 0.0845, 0.0732, 0.0611, 0.0544, 0.0433, 0.0322, 0.0211, 0.0155,
  0.0877, 0.0933, 0.1044, 0.1155, 0.1266, 0.1377, 0.1488
];

// Giro de Estoque (Total de Vendas / Estoque Médio) - formato XX,X
export const MOCK_GIRO_ESTOQUE = [
  4.2, 3.8, 5.1, 4.7, 3.5, 4.0, 4.5, 4.3, 3.9, 4.6,
  5.2, 5.5, 5.8, 5.0, 4.4, 4.7, 5.3, 5.1, 4.2, 4.5,
  3.7, 4.1, 4.9, 4.6, 4.4, 4.0, 3.6, 3.8, 4.1, 4.4,
  4.7, 5.0, 5.3, 5.6, 5.9, 5.0, 4.5
];

// ──────────────────────────────────────────────────────────────
// Mock data for LOJA module metrics
// ──────────────────────────────────────────────────────────────

export const MOCK_VALOR_META = [
  285000, 275000, 290000, 280000, 265000, 270000, 285000, 275000, 260000, 280000,
  290000, 295000, 300000, 285000, 275000, 280000, 290000, 285000, 270000, 275000,
  265000, 270000, 285000, 280000, 275000, 270000, 260000, 265000, 270000, 275000,
  280000, 285000, 290000, 295000, 300000, 285000, 275000
];

export const MOCK_DESVIO_META_R = [
  12500, -8200, 15300, -12400, 18700, 9300, -7800, 14200, -5600, 11800,
  -9100, 13400, -6700, 10200, 15800, -11300, 8900, 12100, -9400, 7600,
  -13200, 9800, 11400, -8700, 13900, 10500, -7200, 8300, 12600, -9900,
  11200, 14300, -8100, 9700, 13100, -10400, 12800
];

export const MOCK_DESVIO_META_P = [
  0.0439, -0.0298, 0.0528, -0.0443, 0.0706, 0.0344, -0.0274, 0.0516, -0.0215, 0.0421,
  -0.0314, 0.0454, -0.0223, 0.0358, 0.0575, -0.0404, 0.0307, 0.0425, -0.0348, 0.0276,
  -0.0498, 0.0363, 0.0400, -0.0311, 0.0505, 0.0389, -0.0277, 0.0313, 0.0467, -0.0360,
  0.0400, 0.0502, -0.0279, 0.0329, 0.0437, -0.0365, 0.0465
];

export const MOCK_CONVERSAO = [
  0.4523, 0.4612, 0.4389, 0.4701, 0.4456, 0.4578, 0.4634, 0.4490, 0.4567, 0.4623,
  0.4489, 0.4712, 0.4534, 0.4601, 0.4678, 0.4523, 0.4590, 0.4645, 0.4512, 0.4589,
  0.4467, 0.4623, 0.4578, 0.4501, 0.4634, 0.4590, 0.4478, 0.4556, 0.4612, 0.4534,
  0.4601, 0.4678, 0.4545, 0.4623, 0.4689, 0.4567, 0.4634
];

export const MOCK_TKM = [
  156.32, 149.87, 162.45, 158.23, 147.56, 153.89, 160.12, 155.67, 149.34, 157.89,
  163.45, 166.78, 170.23, 162.56, 156.89, 159.34, 165.12, 162.45, 154.23, 157.67,
  151.34, 154.89, 162.78, 159.45, 157.12, 154.56, 148.89, 151.67, 154.34, 157.23,
  159.89, 162.56, 165.34, 168.12, 171.45, 162.89, 157.34
];

// Qtd de Vendas (LOJA) — proxy coerente: ROB / Ticket Médio (inteiro)
export const MOCK_QTD_VENDAS_LOJA = MOCK_ROB.map((rob, idx) =>
  Math.max(0, Math.round(rob / Math.max(MOCK_TKM[idx % MOCK_TKM.length], 1))),
);

export const MOCK_QTD_TICKETS = [
  1523, 1467, 1598, 1545, 1423, 1489, 1567, 1534, 1456, 1512,
  1589, 1634, 1678, 1612, 1556, 1587, 1645, 1598, 1501, 1545,
  1434, 1478, 1601, 1567, 1534, 1467, 1398, 1445, 1489, 1534,
  1578, 1623, 1667, 1712, 1756, 1623, 1567
];

export const MOCK_IPC = [
  3.24, 3.18, 3.31, 3.27, 3.15, 3.21, 3.29, 3.24, 3.17, 3.26,
  3.32, 3.35, 3.38, 3.31, 3.24, 3.27, 3.33, 3.31, 3.22, 3.25,
  3.18, 3.21, 3.29, 3.27, 3.25, 3.21, 3.16, 3.19, 3.22, 3.25,
  3.28, 3.31, 3.34, 3.37, 3.40, 3.31, 3.25
];

export const MOCK_CUPONS_MISTOS = [
  0.1823, 0.1756, 0.1892, 0.1834, 0.1701, 0.1778, 0.1845, 0.1789, 0.1723, 0.1812,
  0.1867, 0.1901, 0.1934, 0.1878, 0.1823, 0.1856, 0.1889, 0.1867, 0.1789, 0.1823,
  0.1745, 0.1778, 0.1845, 0.1823, 0.1801, 0.1767, 0.1712, 0.1745, 0.1778, 0.1812,
  0.1845, 0.1878, 0.1901, 0.1923, 0.1945, 0.1878, 0.1834
];

export const MOCK_NPS_VENDEDOR = [
  0.782, 0.756, 0.812, 0.789, 0.734, 0.767, 0.801, 0.778, 0.745, 0.790,
  0.823, 0.845, 0.867, 0.834, 0.801, 0.823, 0.856, 0.834, 0.778, 0.801,
  0.756, 0.778, 0.812, 0.789, 0.767, 0.745, 0.723, 0.745, 0.767, 0.790,
  0.812, 0.834, 0.856, 0.878, 0.890, 0.834, 0.789
];

export const MOCK_ENC_EXPRESSA = [
  0.6734, 0.6589, 0.6845, 0.6712, 0.6478, 0.6623, 0.6789, 0.6656, 0.6534, 0.6701,
  0.6867, 0.6923, 0.6978, 0.6890, 0.6801, 0.6845, 0.6912, 0.6867, 0.6734, 0.6789,
  0.6623, 0.6678, 0.6812, 0.6756, 0.6701, 0.6645, 0.6567, 0.6612, 0.6667, 0.6723,
  0.6778, 0.6834, 0.6889, 0.6934, 0.6978, 0.6890, 0.6756
];

export const MOCK_VLR_PLANO = [
  245000, 238000, 252000, 248000, 235000, 241000, 249000, 246000, 239000, 244000,
  250000, 256000, 262000, 258000, 254000, 250000, 257000, 253000, 247000, 251000,
  243000, 245000, 252000, 249000, 246000, 242000, 238000, 240000, 244000, 248000,
  252000, 256000, 260000, 264000, 268000, 255000, 247000
];

export const MOCK_QTD_PLANO = [
  1850, 1790, 1920, 1870, 1760, 1820, 1880, 1850, 1800, 1840,
  1890, 1940, 1990, 1960, 1930, 1890, 1950, 1920, 1870, 1900,
  1830, 1850, 1910, 1880, 1860, 1820, 1790, 1810, 1840, 1870,
  1900, 1930, 1960, 1990, 2020, 1930, 1870
];

export const MOCK_VLR_TARGET = [
  285000, 278000, 292000, 288000, 275000, 281000, 289000, 286000, 279000, 284000,
  290000, 296000, 302000, 298000, 294000, 290000, 297000, 293000, 287000, 291000,
  283000, 285000, 292000, 289000, 286000, 282000, 278000, 280000, 284000, 288000,
  292000, 296000, 300000, 304000, 308000, 295000, 287000
];

export const MOCK_QTD_TARGET = [
  2150, 2090, 2220, 2170, 2060, 2120, 2180, 2150, 2100, 2140,
  2190, 2240, 2290, 2260, 2230, 2190, 2250, 2220, 2170, 2200,
  2130, 2150, 2210, 2180, 2160, 2120, 2090, 2110, 2140, 2170,
  2200, 2230, 2260, 2290, 2320, 2230, 2170
];

// Desvio Plano (diferença entre realizado e plano)
export const MOCK_QTD_DESVIO_PLANO = [
  -120, -95, 80, 45, -110, -85, 95, 70, -105, -90,
  110, 125, 135, 120, 105, 90, 130, 115, -95, -80,
  -105, -90, 105, 95, 85, -95, -110, -100, -85, -70,
  90, 105, 120, 135, 150, 105, -95
];

export const MOCK_VLR_DESVIO_PLANO = [
  -15000, -12000, 10000, 6000, -14000, -11000, 12000, 9000, -13000, -11500,
  14000, 16000, 17000, 15000, 13000, 11000, 16500, 14500, -12000, -10000,
  -13000, -11000, 13000, 12000, 11000, -12000, -14000, -12500, -10500, -8500,
  11000, 13000, 15000, 17000, 19000, 13000, -12000
];

// Desvio Target (diferença entre realizado e target)
export const MOCK_QTD_DESVIO_TARGET = [
  -320, -295, -120, -155, -310, -285, -105, -80, -305, -290,
  -90, -75, -65, -80, -95, -110, -70, -85, -295, -280,
  -305, -290, -95, -105, -115, -295, -310, -300, -285, -270,
  -110, -95, -80, -65, -50, -95, -295
];

export const MOCK_VLR_DESVIO_TARGET = [
  -55000, -52000, -22000, -28000, -54000, -51000, -18000, -14000, -53000, -51500,
  -16000, -14000, -13000, -14500, -16000, -21000, -13500, -15500, -52000, -50000,
  -53000, -51000, -17000, -19000, -21000, -52000, -54000, -52500, -50500, -48500,
  -21000, -19000, -17000, -15000, -13000, -19000, -52000
];

// ══════════════════════════════════════════════════════════════
// Mock data — Módulo INDICADORES
// Prefixo MOCK_IND_ em todos os arrays para isolamento total.
// Valores calibrados nos ranges reais de operação de lojas.
//
// Para alterar dados de uma métrica: edite apenas o array abaixo.
// Para adicionar métrica: crie novo array seguindo o padrão.
// Mantenha 37 valores por array (mesma quantidade dos outros módulos).
// ══════════════════════════════════════════════════════════════

// TKM — Ticket Médio | integer | range: R$ 275–325
export const MOCK_IND_TKM = [
  295, 311, 299, 284, 287, 302, 318, 294, 276, 308,
  321, 315, 289, 297, 305, 312, 288, 301, 319, 295,
  283, 291, 307, 298, 286, 309, 316, 293, 279, 303,
  311, 299, 287, 315, 302, 294, 308,
];

// PMI — Preço Médio de Item | integer | range: R$ 130–160
export const MOCK_IND_PMI = [
  137, 145, 139, 148, 152, 141, 149, 136, 153, 144,
  138, 147, 151, 143, 150, 146, 140, 154, 137, 142,
  148, 153, 139, 145, 141, 149, 136, 152, 144, 138,
  147, 151, 143, 150, 146, 140, 154,
];

// IPC — Itens por Cliente | decimal 2 casas | range: 1,90–2,20
export const MOCK_IND_IPC = [
  1.96, 1.98, 2.01, 2.09, 2.13, 2.05, 1.94, 2.11, 2.08, 2.03,
  1.97, 2.07, 2.15, 2.02, 1.99, 2.06, 2.12, 1.95, 2.04, 2.10,
  2.08, 2.01, 1.97, 2.09, 2.14, 2.03, 1.96, 2.07, 2.11, 2.05,
  1.98, 2.06, 2.13, 2.02, 2.09, 1.95, 2.04,
];

// Paridade — Meias/Calçados | decimal 2 casas | range: 0,35–0,55
export const MOCK_IND_PARIDADE = [
  0.38, 0.42, 0.47, 0.51, 0.52, 0.44, 0.39, 0.49, 0.53, 0.41,
  0.46, 0.50, 0.55, 0.43, 0.48, 0.52, 0.40, 0.45, 0.54, 0.42,
  0.37, 0.46, 0.51, 0.47, 0.53, 0.44, 0.39, 0.48, 0.52, 0.41,
  0.45, 0.50, 0.55, 0.43, 0.49, 0.38, 0.47,
];

// Cupons Mistos — Calçado + Autosserviço | percent 2 casas | range: 21%–30%
export const MOCK_IND_CUPONS_MISTOS = [
  0.2110, 0.2246, 0.2954, 0.2876, 0.2645, 0.2312, 0.2178, 0.2834, 0.2567, 0.2423,
  0.2789, 0.2634, 0.2901, 0.2456, 0.2712, 0.2345, 0.2589, 0.2867, 0.2234, 0.2678,
  0.2512, 0.2789, 0.2134, 0.2956, 0.2401, 0.2678, 0.2923, 0.2345, 0.2812, 0.2567,
  0.2234, 0.2789, 0.2456, 0.2901, 0.2678, 0.2123, 0.2834,
];

// Fluxo — Pessoas entrantes | integer | range: 900–2.200
export const MOCK_IND_FLUXO = [
  1278, 1576,  987, 2126, 1865, 1423, 1089, 1734, 1956, 1312,
  1678, 2034, 1456, 1823, 1145, 1967, 2145, 1234, 1789, 1534,
  1089, 1867, 2213, 1345, 1678, 1934, 1123, 1789, 2056, 1412,
  1867, 2134, 1345, 1689, 1923, 1234, 1756,
];

// PMR — Prazo Médio de Recebimento | integer (dias) | range: 45–65
export const MOCK_IND_PMR = [
  49, 53, 54, 57, 61, 52, 48, 59, 63, 51,
  56, 60, 64, 50, 55, 58, 47, 53, 62, 49,
  54, 59, 65, 52, 48, 57, 61, 53, 50, 56,
  60, 63, 51, 55, 58, 47, 54,
];

// NPS — Satisfação do cliente | percent 1 casa | range: 85%–95%
export const MOCK_IND_NPS = [
  0.881, 0.897, 0.884, 0.937, 0.941, 0.912, 0.868, 0.925, 0.948, 0.893,
  0.876, 0.919, 0.932, 0.887, 0.904, 0.928, 0.861, 0.896, 0.943, 0.879,
  0.888, 0.921, 0.935, 0.906, 0.874, 0.917, 0.940, 0.892, 0.865, 0.910,
  0.924, 0.938, 0.884, 0.901, 0.929, 0.857, 0.913,
];

// Ruptura — Itens sem exposição | percent 2 casas | range: 1,5%–3,5%
export const MOCK_IND_RUPTURA = [
  0.0291, 0.0189, 0.0240, 0.0187, 0.0210, 0.0256, 0.0312, 0.0198, 0.0167, 0.0234,
  0.0278, 0.0205, 0.0163, 0.0249, 0.0221, 0.0195, 0.0318, 0.0243, 0.0174, 0.0267,
  0.0302, 0.0218, 0.0156, 0.0289, 0.0234, 0.0201, 0.0178, 0.0256, 0.0289, 0.0212,
  0.0234, 0.0198, 0.0267, 0.0145, 0.0289, 0.0323, 0.0201,
];

// EE — Encomenda Expressa | percent 1 casa | range: 2%–6%
export const MOCK_IND_EE = [
  0.0220, 0.0370, 0.0460, 0.0520, 0.0430, 0.0345, 0.0289, 0.0478, 0.0534, 0.0312,
  0.0267, 0.0412, 0.0489, 0.0356, 0.0423, 0.0501, 0.0278, 0.0389, 0.0512, 0.0334,
  0.0256, 0.0434, 0.0523, 0.0378, 0.0445, 0.0489, 0.0312, 0.0401, 0.0534, 0.0289,
  0.0367, 0.0456, 0.0523, 0.0345, 0.0412, 0.0278, 0.0489,
];

// PPA — Alteração de Preço | percent 1 casa | valores alinhados ao spec (71,2% … 82,9%)
export const MOCK_IND_PPA = [
  0.712, 0.695, 0.874, 0.958, 0.829,
  0.723, 0.688, 0.861, 0.942, 0.815, 0.701, 0.905, 0.967, 0.888, 0.734,
  0.756, 0.682, 0.891, 0.951, 0.803, 0.719, 0.866, 0.934, 0.812, 0.745,
  0.778, 0.691, 0.884, 0.919, 0.841, 0.706, 0.897, 0.963, 0.825, 0.738,
  0.764, 0.673, 0.852, 0.946, 0.818, 0.692, 0.871, 0.928, 0.836, 0.751,
];

// CKO Móvel — PDV móvel | percent 1 casa | range: 25%–32%
export const MOCK_IND_CKO_MOVEL = [
  0.2510, 0.2780, 0.3120, 0.2650, 0.2960, 0.2834, 0.2567, 0.3045, 0.2712, 0.2878,
  0.3156, 0.2623, 0.2945, 0.2789, 0.3078, 0.2534, 0.2867, 0.3134, 0.2678, 0.2912,
  0.3045, 0.2756, 0.2589, 0.3001, 0.2834, 0.2612, 0.2945, 0.3112, 0.2701, 0.2878,
  0.3034, 0.2767, 0.2601, 0.2923, 0.3089, 0.2645, 0.2956,
];

// Match de Preço | percent 1 casa | valores alinhados ao spec (11,3% … 8,9%)
export const MOCK_IND_MATCH_PRECO = [
  0.113, 0.097, 0.132, 0.104, 0.089,
  0.121, 0.091, 0.128, 0.099, 0.086, 0.118, 0.094, 0.131, 0.102, 0.088,
  0.124, 0.096, 0.129, 0.107, 0.087, 0.116, 0.093, 0.134, 0.101, 0.09,
  0.122, 0.098, 0.127, 0.105, 0.085, 0.119, 0.092, 0.133, 0.103, 0.091,
  0.115, 0.095, 0.126, 0.106, 0.084, 0.117, 0.1, 0.13, 0.108, 0.083,
];

// Conversão Click & Retire | percent 2 casas | range: 6%–10%
export const MOCK_IND_CONV_CLICK = [
  0.0672, 0.0789, 0.0935, 0.0851, 0.0880, 0.0712, 0.0645, 0.0878, 0.0934, 0.0756,
  0.0823, 0.0967, 0.0712, 0.0845, 0.0912, 0.0634, 0.0789, 0.0956, 0.0701, 0.0867,
  0.0923, 0.0678, 0.0812, 0.0945, 0.0756, 0.0889, 0.0623, 0.0801, 0.0934, 0.0712,
  0.0845, 0.0978, 0.0667, 0.0834, 0.0912, 0.0645, 0.0823,
];

export const METRIC_CONFIG: Record<string, { data: number[], format: 'currency' | 'percent' | 'integer' | 'days' | 'decimal' | 'decimal1' | 'percent1' | 'variation' }> = {
  // Produto metrics
  'venda': { data: MOCK_ROB, format: 'currency' },
  'sss': { data: MOCK_SSS, format: 'percent' },
  'cmv': { data: MOCK_CMV, format: 'currency' },
  'margem': { data: MOCK_MARGEM, format: 'percent' },
  'lucro_bruto': { data: MOCK_LUCRO_BRUTO, format: 'currency' },
  'qtd_venda': { data: MOCK_QTD_VENDA, format: 'integer' },
  'qtd_estoque': { data: MOCK_QTD_ESTOQUE, format: 'integer' },
  'vlr_estoque': { data: MOCK_VLR_ESTOQUE, format: 'currency' },
  'giro_estoque': { data: MOCK_GIRO_ESTOQUE, format: 'decimal1' },
  'dep': { data: MOCK_DEP, format: 'integer' },
  'def': { data: MOCK_DEF, format: 'currency' },
  'ultimo': { data: MOCK_LAST_ENTRY, format: 'days' },
  'vlr_plano': { data: MOCK_VLR_PLANO, format: 'currency' },
  'qtd_plano': { data: MOCK_QTD_PLANO, format: 'integer' },
  'qtd_desvio_plano': { data: MOCK_QTD_DESVIO_PLANO, format: 'variation' },
  'vlr_desvio_plano': { data: MOCK_VLR_DESVIO_PLANO, format: 'variation' },
  'vlr_target': { data: MOCK_VLR_TARGET, format: 'currency' },
  'qtd_target': { data: MOCK_QTD_TARGET, format: 'integer' },
  'qtd_desvio_target': { data: MOCK_QTD_DESVIO_TARGET, format: 'variation' },
  'vlr_desvio_target': { data: MOCK_VLR_DESVIO_TARGET, format: 'variation' },
  // PPA / Match (PRODUTO, LOJA — mesmos mocks que ind_*)
  'ppa': { data: MOCK_IND_PPA, format: 'percent1' },
  'match_preco': { data: MOCK_IND_MATCH_PRECO, format: 'percent1' },
  // Exposição de produtos (PRODUTO) — format integer (0 casas decimais)
  'exp_calc_clicks': { data: MOCK_EXP_CALC_CLICKS, format: 'integer' },
  'exp_vest_bracos_araras': { data: MOCK_EXP_VEST_BRACOS_ARARAS, format: 'integer' },
  'exp_vest_mesas': { data: MOCK_EXP_VEST_MESAS, format: 'integer' },
  'exp_meias_bracos': { data: MOCK_EXP_MEIAS_BRACOS, format: 'integer' },
  'exp_acc_torres_relogios': { data: MOCK_EXP_ACC_RELOGIOS, format: 'integer' },
  'exp_acc_torres_oculos': { data: MOCK_EXP_ACC_OCULOS, format: 'integer' },
  'exp_acc_cestos_bolas': { data: MOCK_EXP_CESTOS_BOLAS, format: 'integer' },
  'exp_nut_geladeiras': { data: MOCK_EXP_NUT_GELADEIRAS, format: 'integer' },
  // Loja metrics
  'rob': { data: MOCK_ROB, format: 'currency' },
  'qtd_vendas_loja': { data: MOCK_QTD_VENDAS_LOJA, format: 'integer' },
  'valor_meta': { data: MOCK_VALOR_META, format: 'currency' },
  'desvio_meta_r': { data: MOCK_DESVIO_META_R, format: 'variation' },
  'desvio_meta_p': { data: MOCK_DESVIO_META_P, format: 'variation' },
  'conversao': { data: MOCK_CONVERSAO, format: 'percent' },
  'tkm': { data: MOCK_TKM, format: 'currency' },
  'qtd_tickets': { data: MOCK_QTD_TICKETS, format: 'integer' },
  'ipc': { data: MOCK_IPC, format: 'decimal' },
  'cupons_mistos': { data: MOCK_CUPONS_MISTOS, format: 'percent' },
  'nps': { data: MOCK_NPS_VENDEDOR, format: 'percent1' },
  'enc_expressa': { data: MOCK_ENC_EXPRESSA, format: 'percent' },
  'margem_bruta': { data: MOCK_MARGEM, format: 'percent' },
  // ── Indicadores metrics ──────────────────────────────────
  // Prefixo ind_ — sem colisão com PRODUTO ou LOJA.
  // Formatos: todos já existem em formatMetricValue (nenhum novo necessário).
  'ind_tkm':           { data: MOCK_IND_TKM,          format: 'integer'  },
  'ind_pmi':           { data: MOCK_IND_PMI,           format: 'integer'  },
  'ind_ipc':           { data: MOCK_IND_IPC,           format: 'decimal'  },
  'ind_paridade':      { data: MOCK_IND_PARIDADE,      format: 'decimal'  },
  'ind_cupons_mistos': { data: MOCK_IND_CUPONS_MISTOS, format: 'percent'  },
  'ind_fluxo':         { data: MOCK_IND_FLUXO,         format: 'integer'  },
  'ind_pmr':           { data: MOCK_IND_PMR,           format: 'integer'  },
  'ind_nps':           { data: MOCK_IND_NPS,           format: 'percent1' },
  'ind_ruptura':       { data: MOCK_IND_RUPTURA,       format: 'percent'  },
  'ind_ee':            { data: MOCK_IND_EE,            format: 'percent1' },
  'ind_ppa':           { data: MOCK_IND_PPA,           format: 'percent1' },
  'ind_cko_movel':     { data: MOCK_IND_CKO_MOVEL,     format: 'percent1' },
  'ind_match_preco':   { data: MOCK_IND_MATCH_PRECO,   format: 'percent1' },
  'ind_conv_click':    { data: MOCK_IND_CONV_CLICK,    format: 'percent'  },
};

// Mapeamento de abreviações para exibição na tabela
export const METRIC_ABBREVIATIONS: Record<string, string> = {
  // Produto
  'venda': 'ROB',
  'sss': 'SSS',
  'cmv': 'CMV',
  'lucro_bruto': 'LB',
  'margem': 'MB',
  'qtd_venda': 'Qtd Venda',
  'qtd_estoque': 'Qtd Estoque',
  'vlr_estoque': 'Vlr Estoque',
  'giro_estoque': 'Giro Estoque',
  'dep': 'DEP',
  'def': 'DEF',
  'vlr_plano': 'Vlr Plano',
  'qtd_plano': 'Qtd Plano',
  'qtd_desvio_plano': 'Qtd Desv Plano',
  'vlr_desvio_plano': 'Vlr Desv Plano',
  'vlr_target': 'Vlr Target',
  'qtd_target': 'Qtd Target',
  'qtd_desvio_target': 'Qtd Desv Target',
  'vlr_desvio_target': 'Vlr Desv Target',
  'ppa': 'PPA',
  'match_preco': 'Match Preço',
  'exp_calc_clicks': 'Qtd de clicks',
  'exp_vest_bracos_araras': 'Qtd braços araras',
  'exp_vest_mesas': 'Qtd mesas',
  'exp_meias_bracos': 'Qtd braços meias',
  'exp_acc_torres_relogios': 'Qtd exp. relógios',
  'exp_acc_torres_oculos': 'Qtd exp. óculos',
  'exp_acc_cestos_bolas': 'Qtd cestos de bolas',
  'exp_nut_geladeiras': 'Qtd geladeiras',
  // Loja
  'rob': 'ROB',
  'qtd_vendas_loja': 'Qtd de Vendas',
  'margem_bruta': 'MB',
  'valor_meta': 'Valor Meta',
  'desvio_meta_r': 'Desvio $',
  'desvio_meta_p': 'Desvio %',
  'conversao': 'Conversão',
  // ── Indicadores ──────────────────────────────────────────
  'ind_tkm':           'TKM',
  'ind_pmi':           'PMI',
  'ind_ipc':           'IPC',
  'ind_paridade':      'Paridade',
  'ind_cupons_mistos': 'Cupons Mistos',
  'ind_fluxo':         'Fluxo',
  'ind_pmr':           'PMR',
  'ind_nps':           'NPS',
  'ind_ruptura':       'Ruptura',
  'ind_ee':            'EE',
  'ind_ppa':           'PPA',
  'ind_cko_movel':     'CKO Móvel',
  'ind_match_preco':   'Match Preço',
  'ind_conv_click':    'Conversão Click',
};

export const formatMetricValue = (value: number, format: string): string => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(value);
    case 'percent':
      return new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    case 'percent1':
      return new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
    case 'integer':
      return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(value);
    case 'decimal':
      return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
    case 'decimal1':
      return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
    case 'variation':
      // Para valores de variação (com cor positiva/negativa) - adiciona sinal
      const sign = value > 0 ? '+' : '';
      // Check if it's a percentage variation (small decimal) or currency variation (large number)
      if (Math.abs(value) < 1) {
        return sign + new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
      }
      return sign + new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(value);
    case 'days':
      return `${value} dias`;
    default:
      return value.toString();
  }
};
