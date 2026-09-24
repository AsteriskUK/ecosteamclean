/* =========================================================
   Ecologics Cleaning — location (area) landing page renderer
   Each areas/<file>.html sets data-slug; this fills it in.
   Data generated from the area list — see scripts/gen_areas.py
   ========================================================= */

const AREA_DETAILS = {
  "bromsgrove": {
    "name": "Bromsgrove",
    "county": "Worcestershire",
    "pcArea": "B",
    "central": "B60",
    "districts": [
      [
        "B60",
        "Town centre · Aston Fields · Stoke Prior"
      ],
      [
        "B61",
        "Catshill · Lickey End · Sidemoor"
      ],
      [
        "B45",
        "Rubery · Rednal · Lickey",
        "carpet-cleaning-b45.html"
      ],
      [
        "B48",
        "Alvechurch · Hopwood"
      ],
      [
        "B62 · B63",
        "Halesowen (nearby)",
        "carpet-cleaning-b62.html"
      ],
      [
        "B96 · B97",
        "Redditch (nearby)"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right here in Bromsgrove — our home town. From the B60 town centre and Aston Fields out to Catshill, Lickey End, Rubery and Alvechurch. Non-toxic, pet- and child-safe, fully insured, and carpets typically dry in just a few hours.",
    "faqs": [
      {
        "q": "Which parts of Bromsgrove do you cover?",
        "a": "All of the B60 and B61 postcodes across the town, plus nearby B45 Rubery, B48 Alvechurch and out towards Redditch and Droitwich. We're a local Bromsgrove business, so we're often just minutes away."
      },
      {
        "q": "Do you offer free quotes in Bromsgrove?",
        "a": "Yes — free, no-obligation quotes and an optional free on-site demonstration anywhere in Bromsgrove, with no cancellation fees."
      },
      {
        "q": "How soon can you visit?",
        "a": "As we're based in Bromsgrove, we usually have same-week (often next-day) availability locally, including evenings and weekends."
      }
    ]
  },
  "birmingham": {
    "name": "Birmingham",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B1",
    "districts": [
      [
        "B1",
        "City centre"
      ],
      [
        "B13",
        "Moseley"
      ],
      [
        "B14",
        "Kings Heath · Druids Heath",
        "carpet-cleaning-b14.html"
      ],
      [
        "B15",
        "Edgbaston"
      ],
      [
        "B17",
        "Harborne"
      ],
      [
        "B29",
        "Selly Oak · Bournbrook"
      ],
      [
        "B30",
        "Bournville · Stirchley"
      ],
      [
        "B31",
        "Northfield · Longbridge",
        "carpet-cleaning-b31.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across Birmingham — from the B1 city centre through Edgbaston, Harborne and Moseley down to Selly Oak, Bournville, Kings Heath and Northfield. Non-toxic, pet- and child-safe, fully insured, and just a short drive from our Bromsgrove base.",
    "faqs": [
      {
        "q": "Which parts of Birmingham do you cover?",
        "a": "We cover the B postcodes across the city, with a strong focus on south and central Birmingham — Selly Oak, Bournville, Northfield, Kings Heath, Edgbaston, Harborne, Moseley and the city centre. Send your postcode with your quote and we'll confirm."
      },
      {
        "q": "Are you a Birmingham-based company?",
        "a": "We're based just outside the city in Bromsgrove, which keeps our overheads (and your prices) low while still reaching Birmingham quickly — especially the southern suburbs."
      },
      {
        "q": "Do you clean rugs, stairs, curtains and mattresses too?",
        "a": "Yes — stairs, landings, area rugs, curtains and mattresses are all part of what we do across Birmingham, not just room carpets."
      }
    ]
  },
  "wv6": {
    "name": "WV6",
    "county": "West Midlands",
    "pcArea": "WV",
    "central": "WV6",
    "districts": [
      [
        "WV6",
        "Tettenhall · Compton · Wightwick"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "WV11",
        "Wednesfield · Essington",
        "carpet-cleaning-wv11.html"
      ],
      [
        "WV10",
        "Bushbury · Fallings Park · Featherstone",
        "carpet-cleaning-wv10.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to WV6 (Tettenhall · Compton · Wightwick). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Wolverhampton home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of WV6?",
        "a": "Yes — we clean homes and businesses right across WV6, including Tettenhall · Compton · Wightwick, plus the surrounding Wolverhampton area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WV6?",
        "a": "We usually have same-week availability in WV6, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WV6 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "wv5": {
    "name": "WV5",
    "county": "Staffordshire",
    "pcArea": "WV",
    "central": "WV5",
    "districts": [
      [
        "WV5",
        "Wombourne · Trysull · Himley"
      ],
      [
        "B78",
        "Kingsbury · Dordon · Polesworth",
        "carpet-cleaning-b78.html"
      ],
      [
        "B79",
        "Tamworth town centre · Bolehall · Amington",
        "carpet-cleaning-b79.html"
      ],
      [
        "B77",
        "Wilnecote · Glascote · Stonydelph",
        "carpet-cleaning-b77.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in WV5? We bring hot-water extraction steam cleaning to homes and businesses across Wombourne · Trysull · Himley, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of WV5?",
        "a": "Yes — we clean homes and businesses right across WV5, including Wombourne · Trysull · Himley, plus the surrounding Wombourne area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WV5?",
        "a": "We usually have same-week availability in WV5, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WV5 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "wv4": {
    "name": "WV4",
    "county": "West Midlands",
    "pcArea": "WV",
    "central": "WV4",
    "districts": [
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV11",
        "Wednesfield · Essington",
        "carpet-cleaning-wv11.html"
      ],
      [
        "WV10",
        "Bushbury · Fallings Park · Featherstone",
        "carpet-cleaning-wv10.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across WV4 — covering Penn · Bradmore · Ettingshall Park and the wider Wolverhampton area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of WV4?",
        "a": "Yes — we clean homes and businesses right across WV4, including Penn · Bradmore · Ettingshall Park, plus the surrounding Wolverhampton area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WV4?",
        "a": "We usually have same-week availability in WV4, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WV4 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b62": {
    "name": "B62",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B62",
    "districts": [
      [
        "B62",
        "Halesowen · Hasbury · Colley Gate"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ],
      [
        "B31",
        "Northfield · Longbridge · West Heath",
        "carpet-cleaning-b31.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B62 (Halesowen · Hasbury · Colley Gate). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Halesowen home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B62?",
        "a": "Yes — we clean homes and businesses right across B62, including Halesowen · Hasbury · Colley Gate, plus the surrounding Halesowen area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B62?",
        "a": "We usually have same-week availability in B62, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B62 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b32": {
    "name": "B32",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B32",
    "districts": [
      [
        "B32",
        "Bartley Green · Quinton · Woodgate"
      ],
      [
        "B31",
        "Northfield · Longbridge · West Heath",
        "carpet-cleaning-b31.html"
      ],
      [
        "B14",
        "Kings Heath · Druids Heath · Yardley Wood",
        "carpet-cleaning-b14.html"
      ],
      [
        "B38",
        "Kings Norton · West Heath",
        "carpet-cleaning-b38.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B32 (Bartley Green · Quinton · Woodgate). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Birmingham home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B32?",
        "a": "Yes — we clean homes and businesses right across B32, including Bartley Green · Quinton · Woodgate, plus the surrounding Birmingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B32?",
        "a": "We usually have same-week availability in B32, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B32 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b45": {
    "name": "B45",
    "county": "Worcestershire",
    "pcArea": "B",
    "central": "B45",
    "districts": [
      [
        "B45",
        "Rubery · Rednal · Cofton Hackett"
      ],
      [
        "B98",
        "Winyates · Church Hill · Matchborough",
        "carpet-cleaning-b98.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across B45 — covering Rubery · Rednal · Cofton Hackett and the wider Rubery area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of B45?",
        "a": "Yes — we clean homes and businesses right across B45, including Rubery · Rednal · Cofton Hackett, plus the surrounding Rubery area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B45?",
        "a": "We usually have same-week availability in B45, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B45 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b31": {
    "name": "B31",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B31",
    "districts": [
      [
        "B31",
        "Northfield · Longbridge · West Heath"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ],
      [
        "B14",
        "Kings Heath · Druids Heath · Yardley Wood",
        "carpet-cleaning-b14.html"
      ],
      [
        "B38",
        "Kings Norton · West Heath",
        "carpet-cleaning-b38.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in B31? We bring hot-water extraction steam cleaning to homes and businesses across Northfield · Longbridge · West Heath, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of B31?",
        "a": "Yes — we clean homes and businesses right across B31, including Northfield · Longbridge · West Heath, plus the surrounding Birmingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B31?",
        "a": "We usually have same-week availability in B31, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B31 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "wv11": {
    "name": "WV11",
    "county": "West Midlands",
    "pcArea": "WV",
    "central": "WV11",
    "districts": [
      [
        "WV11",
        "Wednesfield · Essington"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "WV10",
        "Bushbury · Fallings Park · Featherstone",
        "carpet-cleaning-wv10.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in WV11? We bring hot-water extraction steam cleaning to homes and businesses across Wednesfield · Essington, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of WV11?",
        "a": "Yes — we clean homes and businesses right across WV11, including Wednesfield · Essington, plus the surrounding Wolverhampton area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WV11?",
        "a": "We usually have same-week availability in WV11, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WV11 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "wv10": {
    "name": "WV10",
    "county": "West Midlands",
    "pcArea": "WV",
    "central": "WV10",
    "districts": [
      [
        "WV10",
        "Bushbury · Fallings Park · Featherstone"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "WV11",
        "Wednesfield · Essington",
        "carpet-cleaning-wv11.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across WV10 — covering Bushbury · Fallings Park · Featherstone and the wider Wolverhampton area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of WV10?",
        "a": "Yes — we clean homes and businesses right across WV10, including Bushbury · Fallings Park · Featherstone, plus the surrounding Wolverhampton area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WV10?",
        "a": "We usually have same-week availability in WV10, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WV10 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ws3": {
    "name": "WS3",
    "county": "West Midlands",
    "pcArea": "WS",
    "central": "WS3",
    "districts": [
      [
        "WS3",
        "Bloxwich · Pelsall · Little Bloxwich"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "B62",
        "Halesowen · Hasbury · Colley Gate",
        "carpet-cleaning-b62.html"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to WS3 (Bloxwich · Pelsall · Little Bloxwich). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Walsall home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of WS3?",
        "a": "Yes — we clean homes and businesses right across WS3, including Bloxwich · Pelsall · Little Bloxwich, plus the surrounding Walsall area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WS3?",
        "a": "We usually have same-week availability in WS3, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WS3 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ws8": {
    "name": "WS8",
    "county": "West Midlands",
    "pcArea": "WS",
    "central": "WS8",
    "districts": [
      [
        "WS8",
        "Brownhills · Walsall Wood · Clayhanger"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "B62",
        "Halesowen · Hasbury · Colley Gate",
        "carpet-cleaning-b62.html"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in WS8? We bring hot-water extraction steam cleaning to homes and businesses across Brownhills · Walsall Wood · Clayhanger, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of WS8?",
        "a": "Yes — we clean homes and businesses right across WS8, including Brownhills · Walsall Wood · Clayhanger, plus the surrounding Brownhills area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WS8?",
        "a": "We usually have same-week availability in WS8, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WS8 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ws9": {
    "name": "WS9",
    "county": "West Midlands",
    "pcArea": "WS",
    "central": "WS9",
    "districts": [
      [
        "WS9",
        "Aldridge · Stonnall · Walsall Wood"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "B62",
        "Halesowen · Hasbury · Colley Gate",
        "carpet-cleaning-b62.html"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to WS9 (Aldridge · Stonnall · Walsall Wood). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Aldridge home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of WS9?",
        "a": "Yes — we clean homes and businesses right across WS9, including Aldridge · Stonnall · Walsall Wood, plus the surrounding Aldridge area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to WS9?",
        "a": "We usually have same-week availability in WS9, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in WS9 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b74": {
    "name": "B74",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B74",
    "districts": [
      [
        "B74",
        "Four Oaks · Streetly · Little Aston"
      ],
      [
        "B75",
        "Mere Green · Roughley · Hill Hook",
        "carpet-cleaning-b75.html"
      ],
      [
        "B76",
        "Walmley · Minworth · Falcon Lodge",
        "carpet-cleaning-b76.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B74 (Four Oaks · Streetly · Little Aston). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Sutton Coldfield home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B74?",
        "a": "Yes — we clean homes and businesses right across B74, including Four Oaks · Streetly · Little Aston, plus the surrounding Sutton Coldfield area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B74?",
        "a": "We usually have same-week availability in B74, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B74 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b75": {
    "name": "B75",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B75",
    "districts": [
      [
        "B75",
        "Mere Green · Roughley · Hill Hook"
      ],
      [
        "B74",
        "Four Oaks · Streetly · Little Aston",
        "carpet-cleaning-b74.html"
      ],
      [
        "B76",
        "Walmley · Minworth · Falcon Lodge",
        "carpet-cleaning-b76.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across B75 — covering Mere Green · Roughley · Hill Hook and the wider Sutton Coldfield area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of B75?",
        "a": "Yes — we clean homes and businesses right across B75, including Mere Green · Roughley · Hill Hook, plus the surrounding Sutton Coldfield area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B75?",
        "a": "We usually have same-week availability in B75, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B75 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b76": {
    "name": "B76",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B76",
    "districts": [
      [
        "B76",
        "Walmley · Minworth · Falcon Lodge"
      ],
      [
        "B74",
        "Four Oaks · Streetly · Little Aston",
        "carpet-cleaning-b74.html"
      ],
      [
        "B75",
        "Mere Green · Roughley · Hill Hook",
        "carpet-cleaning-b75.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in B76? We bring hot-water extraction steam cleaning to homes and businesses across Walmley · Minworth · Falcon Lodge, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of B76?",
        "a": "Yes — we clean homes and businesses right across B76, including Walmley · Minworth · Falcon Lodge, plus the surrounding Sutton Coldfield area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B76?",
        "a": "We usually have same-week availability in B76, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B76 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b78": {
    "name": "B78",
    "county": "Staffordshire",
    "pcArea": "B",
    "central": "B78",
    "districts": [
      [
        "B78",
        "Kingsbury · Dordon · Polesworth"
      ],
      [
        "B79",
        "Tamworth town centre · Bolehall · Amington",
        "carpet-cleaning-b79.html"
      ],
      [
        "B77",
        "Wilnecote · Glascote · Stonydelph",
        "carpet-cleaning-b77.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across B78 — covering Kingsbury · Dordon · Polesworth and the wider Tamworth area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of B78?",
        "a": "Yes — we clean homes and businesses right across B78, including Kingsbury · Dordon · Polesworth, plus the surrounding Tamworth area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B78?",
        "a": "We usually have same-week availability in B78, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B78 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b79": {
    "name": "B79",
    "county": "Staffordshire",
    "pcArea": "B",
    "central": "B79",
    "districts": [
      [
        "B79",
        "Tamworth town centre · Bolehall · Amington"
      ],
      [
        "B78",
        "Kingsbury · Dordon · Polesworth",
        "carpet-cleaning-b78.html"
      ],
      [
        "B77",
        "Wilnecote · Glascote · Stonydelph",
        "carpet-cleaning-b77.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in B79? We bring hot-water extraction steam cleaning to homes and businesses across Tamworth town centre · Bolehall · Amington, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of B79?",
        "a": "Yes — we clean homes and businesses right across B79, including Tamworth town centre · Bolehall · Amington, plus the surrounding Tamworth area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B79?",
        "a": "We usually have same-week availability in B79, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B79 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b77": {
    "name": "B77",
    "county": "Staffordshire",
    "pcArea": "B",
    "central": "B77",
    "districts": [
      [
        "B77",
        "Wilnecote · Glascote · Stonydelph"
      ],
      [
        "B78",
        "Kingsbury · Dordon · Polesworth",
        "carpet-cleaning-b78.html"
      ],
      [
        "B79",
        "Tamworth town centre · Bolehall · Amington",
        "carpet-cleaning-b79.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B77 (Wilnecote · Glascote · Stonydelph). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Tamworth home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B77?",
        "a": "Yes — we clean homes and businesses right across B77, including Wilnecote · Glascote · Stonydelph, plus the surrounding Tamworth area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B77?",
        "a": "We usually have same-week availability in B77, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B77 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b37": {
    "name": "B37",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B37",
    "districts": [
      [
        "B37",
        "Chelmsley Wood · Marston Green · Kingshurst"
      ],
      [
        "B93",
        "Knowle · Dorridge · Bentley Heath",
        "carpet-cleaning-b93.html"
      ],
      [
        "B90",
        "Shirley · Dickens Heath · Monkspath",
        "carpet-cleaning-b90.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in B37? We bring hot-water extraction steam cleaning to homes and businesses across Chelmsley Wood · Marston Green · Kingshurst, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of B37?",
        "a": "Yes — we clean homes and businesses right across B37, including Chelmsley Wood · Marston Green · Kingshurst, plus the surrounding Solihull area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B37?",
        "a": "We usually have same-week availability in B37, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B37 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "cv4": {
    "name": "CV4",
    "county": "West Midlands",
    "pcArea": "CV",
    "central": "CV4",
    "districts": [
      [
        "CV4",
        "Canley · Tile Hill · Westwood Heath"
      ],
      [
        "CV3",
        "Cheylesmore · Willenhall · Binley · Finham",
        "carpet-cleaning-cv3.html"
      ],
      [
        "CV2",
        "Wyken · Walsgrave · Stoke · Henley Green",
        "carpet-cleaning-cv2.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in CV4? We bring hot-water extraction steam cleaning to homes and businesses across Canley · Tile Hill · Westwood Heath, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of CV4?",
        "a": "Yes — we clean homes and businesses right across CV4, including Canley · Tile Hill · Westwood Heath, plus the surrounding Coventry area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to CV4?",
        "a": "We usually have same-week availability in CV4, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in CV4 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b93": {
    "name": "B93",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B93",
    "districts": [
      [
        "B93",
        "Knowle · Dorridge · Bentley Heath"
      ],
      [
        "B37",
        "Chelmsley Wood · Marston Green · Kingshurst",
        "carpet-cleaning-b37.html"
      ],
      [
        "B90",
        "Shirley · Dickens Heath · Monkspath",
        "carpet-cleaning-b90.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across B93 — covering Knowle · Dorridge · Bentley Heath and the wider Solihull area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of B93?",
        "a": "Yes — we clean homes and businesses right across B93, including Knowle · Dorridge · Bentley Heath, plus the surrounding Solihull area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B93?",
        "a": "We usually have same-week availability in B93, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B93 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b90": {
    "name": "B90",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B90",
    "districts": [
      [
        "B90",
        "Shirley · Dickens Heath · Monkspath"
      ],
      [
        "B37",
        "Chelmsley Wood · Marston Green · Kingshurst",
        "carpet-cleaning-b37.html"
      ],
      [
        "B93",
        "Knowle · Dorridge · Bentley Heath",
        "carpet-cleaning-b93.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across B90 — covering Shirley · Dickens Heath · Monkspath and the wider Solihull area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of B90?",
        "a": "Yes — we clean homes and businesses right across B90, including Shirley · Dickens Heath · Monkspath, plus the surrounding Solihull area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B90?",
        "a": "We usually have same-week availability in B90, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B90 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b14": {
    "name": "B14",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B14",
    "districts": [
      [
        "B14",
        "Kings Heath · Druids Heath · Yardley Wood"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ],
      [
        "B31",
        "Northfield · Longbridge · West Heath",
        "carpet-cleaning-b31.html"
      ],
      [
        "B38",
        "Kings Norton · West Heath",
        "carpet-cleaning-b38.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B14 (Kings Heath · Druids Heath · Yardley Wood). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Birmingham home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B14?",
        "a": "Yes — we clean homes and businesses right across B14, including Kings Heath · Druids Heath · Yardley Wood, plus the surrounding Birmingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B14?",
        "a": "We usually have same-week availability in B14, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B14 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b38": {
    "name": "B38",
    "county": "West Midlands",
    "pcArea": "B",
    "central": "B38",
    "districts": [
      [
        "B38",
        "Kings Norton · West Heath"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ],
      [
        "B31",
        "Northfield · Longbridge · West Heath",
        "carpet-cleaning-b31.html"
      ],
      [
        "B14",
        "Kings Heath · Druids Heath · Yardley Wood",
        "carpet-cleaning-b14.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B38 (Kings Norton · West Heath). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Birmingham home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B38?",
        "a": "Yes — we clean homes and businesses right across B38, including Kings Norton · West Heath, plus the surrounding Birmingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B38?",
        "a": "We usually have same-week availability in B38, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B38 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "b98": {
    "name": "B98",
    "county": "Worcestershire",
    "pcArea": "B",
    "central": "B98",
    "districts": [
      [
        "B98",
        "Winyates · Church Hill · Matchborough"
      ],
      [
        "B45",
        "Rubery · Rednal · Cofton Hackett",
        "carpet-cleaning-b45.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to B98 (Winyates · Church Hill · Matchborough). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Redditch home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of B98?",
        "a": "Yes — we clean homes and businesses right across B98, including Winyates · Church Hill · Matchborough, plus the surrounding Redditch area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to B98?",
        "a": "We usually have same-week availability in B98, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in B98 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "cv37": {
    "name": "CV37",
    "county": "Warwickshire",
    "pcArea": "CV",
    "central": "CV37",
    "districts": [
      [
        "CV37",
        "Stratford-upon-Avon · Shottery · Tiddington"
      ],
      [
        "CV21",
        "Rugby town centre · Newbold-on-Avon · Brownsover",
        "carpet-cleaning-cv21.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in CV37? We bring hot-water extraction steam cleaning to homes and businesses across Stratford-upon-Avon · Shottery · Tiddington, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of CV37?",
        "a": "Yes — we clean homes and businesses right across CV37, including Stratford-upon-Avon · Shottery · Tiddington, plus the surrounding Stratford-upon-Avon area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to CV37?",
        "a": "We usually have same-week availability in CV37, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in CV37 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "cv21": {
    "name": "CV21",
    "county": "Warwickshire",
    "pcArea": "CV",
    "central": "CV21",
    "districts": [
      [
        "CV21",
        "Rugby town centre · Newbold-on-Avon · Brownsover"
      ],
      [
        "CV37",
        "Stratford-upon-Avon · Shottery · Tiddington",
        "carpet-cleaning-cv37.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across CV21 — covering Rugby town centre · Newbold-on-Avon · Brownsover and the wider Rugby area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of CV21?",
        "a": "Yes — we clean homes and businesses right across CV21, including Rugby town centre · Newbold-on-Avon · Brownsover, plus the surrounding Rugby area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to CV21?",
        "a": "We usually have same-week availability in CV21, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in CV21 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "cv3": {
    "name": "CV3",
    "county": "West Midlands",
    "pcArea": "CV",
    "central": "CV3",
    "districts": [
      [
        "CV3",
        "Cheylesmore · Willenhall · Binley · Finham"
      ],
      [
        "CV4",
        "Canley · Tile Hill · Westwood Heath",
        "carpet-cleaning-cv4.html"
      ],
      [
        "CV2",
        "Wyken · Walsgrave · Stoke · Henley Green",
        "carpet-cleaning-cv2.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across CV3 — covering Cheylesmore · Willenhall · Binley · Finham and the wider Coventry area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of CV3?",
        "a": "Yes — we clean homes and businesses right across CV3, including Cheylesmore · Willenhall · Binley · Finham, plus the surrounding Coventry area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to CV3?",
        "a": "We usually have same-week availability in CV3, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in CV3 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "cv2": {
    "name": "CV2",
    "county": "West Midlands",
    "pcArea": "CV",
    "central": "CV2",
    "districts": [
      [
        "CV2",
        "Wyken · Walsgrave · Stoke · Henley Green"
      ],
      [
        "CV4",
        "Canley · Tile Hill · Westwood Heath",
        "carpet-cleaning-cv4.html"
      ],
      [
        "CV3",
        "Cheylesmore · Willenhall · Binley · Finham",
        "carpet-cleaning-cv3.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to CV2 (Wyken · Walsgrave · Stoke · Henley Green). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Coventry home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of CV2?",
        "a": "Yes — we clean homes and businesses right across CV2, including Wyken · Walsgrave · Stoke · Henley Green, plus the surrounding Coventry area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to CV2?",
        "a": "We usually have same-week availability in CV2, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in CV2 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng13": {
    "name": "NG13",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG13",
    "districts": [
      [
        "NG13",
        "Bingham · Radcliffe-on-Trent · Cropwell Bishop"
      ],
      [
        "NG23",
        "Collingham · Sutton-on-Trent · Balderton villages",
        "carpet-cleaning-ng23.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG19",
        "Mansfield Woodhouse · Forest Town",
        "carpet-cleaning-ng19.html"
      ],
      [
        "NG20",
        "Warsop · Church Warsop · Shirebrook",
        "carpet-cleaning-ng20.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across NG13 — covering Bingham · Radcliffe-on-Trent · Cropwell Bishop and the wider Bingham area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of NG13?",
        "a": "Yes — we clean homes and businesses right across NG13, including Bingham · Radcliffe-on-Trent · Cropwell Bishop, plus the surrounding Bingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG13?",
        "a": "We usually have same-week availability in NG13, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG13 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng23": {
    "name": "NG23",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG23",
    "districts": [
      [
        "NG23",
        "Collingham · Sutton-on-Trent · Balderton villages"
      ],
      [
        "NG13",
        "Bingham · Radcliffe-on-Trent · Cropwell Bishop",
        "carpet-cleaning-ng13.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG19",
        "Mansfield Woodhouse · Forest Town",
        "carpet-cleaning-ng19.html"
      ],
      [
        "NG20",
        "Warsop · Church Warsop · Shirebrook",
        "carpet-cleaning-ng20.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG23? We bring hot-water extraction steam cleaning to homes and businesses across Collingham · Sutton-on-Trent · Balderton villages, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG23?",
        "a": "Yes — we clean homes and businesses right across NG23, including Collingham · Sutton-on-Trent · Balderton villages, plus the surrounding Newark area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG23?",
        "a": "We usually have same-week availability in NG23, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG23 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "dn14": {
    "name": "DN14",
    "county": "South Yorkshire",
    "pcArea": "DN",
    "central": "DN14",
    "districts": [
      [
        "DN14",
        "Goole · Snaith · Rawcliffe"
      ],
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton",
        "carpet-cleaning-dn9.html"
      ],
      [
        "DN11",
        "Harworth · Bircotes · Tickhill",
        "carpet-cleaning-dn11.html"
      ],
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands",
        "carpet-cleaning-dn6.html"
      ],
      [
        "DN8",
        "Thorne · Moorends · Hatfield",
        "carpet-cleaning-dn8.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in DN14? We bring hot-water extraction steam cleaning to homes and businesses across Goole · Snaith · Rawcliffe, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of DN14?",
        "a": "Yes — we clean homes and businesses right across DN14, including Goole · Snaith · Rawcliffe, plus the surrounding Goole area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to DN14?",
        "a": "We usually have same-week availability in DN14, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in DN14 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "dn9": {
    "name": "DN9",
    "county": "South Yorkshire",
    "pcArea": "DN",
    "central": "DN9",
    "districts": [
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton"
      ],
      [
        "DN11",
        "Harworth · Bircotes · Tickhill",
        "carpet-cleaning-dn11.html"
      ],
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands",
        "carpet-cleaning-dn6.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to DN9 (Auckley · Finningley · Epworth · Belton). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Doncaster home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of DN9?",
        "a": "Yes — we clean homes and businesses right across DN9, including Auckley · Finningley · Epworth · Belton, plus the surrounding Doncaster area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to DN9?",
        "a": "We usually have same-week availability in DN9, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in DN9 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "dn11": {
    "name": "DN11",
    "county": "South Yorkshire",
    "pcArea": "DN",
    "central": "DN11",
    "districts": [
      [
        "DN11",
        "Harworth · Bircotes · Tickhill"
      ],
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton",
        "carpet-cleaning-dn9.html"
      ],
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands",
        "carpet-cleaning-dn6.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in DN11? We bring hot-water extraction steam cleaning to homes and businesses across Harworth · Bircotes · Tickhill, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of DN11?",
        "a": "Yes — we clean homes and businesses right across DN11, including Harworth · Bircotes · Tickhill, plus the surrounding Doncaster area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to DN11?",
        "a": "We usually have same-week availability in DN11, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in DN11 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "dn6": {
    "name": "DN6",
    "county": "South Yorkshire",
    "pcArea": "DN",
    "central": "DN6",
    "districts": [
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands"
      ],
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton",
        "carpet-cleaning-dn9.html"
      ],
      [
        "DN11",
        "Harworth · Bircotes · Tickhill",
        "carpet-cleaning-dn11.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to DN6 (Adwick-le-Street · Carcroft · Skellow · Woodlands). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Doncaster home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of DN6?",
        "a": "Yes — we clean homes and businesses right across DN6, including Adwick-le-Street · Carcroft · Skellow · Woodlands, plus the surrounding Doncaster area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to DN6?",
        "a": "We usually have same-week availability in DN6, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in DN6 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "dn8": {
    "name": "DN8",
    "county": "South Yorkshire",
    "pcArea": "DN",
    "central": "DN8",
    "districts": [
      [
        "DN8",
        "Thorne · Moorends · Hatfield"
      ],
      [
        "DN14",
        "Goole · Snaith · Rawcliffe",
        "carpet-cleaning-dn14.html"
      ],
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton",
        "carpet-cleaning-dn9.html"
      ],
      [
        "DN11",
        "Harworth · Bircotes · Tickhill",
        "carpet-cleaning-dn11.html"
      ],
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands",
        "carpet-cleaning-dn6.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in DN8? We bring hot-water extraction steam cleaning to homes and businesses across Thorne · Moorends · Hatfield, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of DN8?",
        "a": "Yes — we clean homes and businesses right across DN8, including Thorne · Moorends · Hatfield, plus the surrounding Thorne area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to DN8?",
        "a": "We usually have same-week availability in DN8, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in DN8 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng16": {
    "name": "NG16",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG16",
    "districts": [
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across NG16 — covering Eastwood · Kimberley · Nuthall · Giltbrook and the wider Nottingham area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of NG16?",
        "a": "Yes — we clean homes and businesses right across NG16, including Eastwood · Kimberley · Nuthall · Giltbrook, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG16?",
        "a": "We usually have same-week availability in NG16, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG16 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng19": {
    "name": "NG19",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG19",
    "districts": [
      [
        "NG19",
        "Mansfield Woodhouse · Forest Town"
      ],
      [
        "NG13",
        "Bingham · Radcliffe-on-Trent · Cropwell Bishop",
        "carpet-cleaning-ng13.html"
      ],
      [
        "NG23",
        "Collingham · Sutton-on-Trent · Balderton villages",
        "carpet-cleaning-ng23.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG20",
        "Warsop · Church Warsop · Shirebrook",
        "carpet-cleaning-ng20.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across NG19 — covering Mansfield Woodhouse · Forest Town and the wider Mansfield area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of NG19?",
        "a": "Yes — we clean homes and businesses right across NG19, including Mansfield Woodhouse · Forest Town, plus the surrounding Mansfield area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG19?",
        "a": "We usually have same-week availability in NG19, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG19 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng20": {
    "name": "NG20",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG20",
    "districts": [
      [
        "NG20",
        "Warsop · Church Warsop · Shirebrook"
      ],
      [
        "NG13",
        "Bingham · Radcliffe-on-Trent · Cropwell Bishop",
        "carpet-cleaning-ng13.html"
      ],
      [
        "NG23",
        "Collingham · Sutton-on-Trent · Balderton villages",
        "carpet-cleaning-ng23.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG19",
        "Mansfield Woodhouse · Forest Town",
        "carpet-cleaning-ng19.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG20? We bring hot-water extraction steam cleaning to homes and businesses across Warsop · Church Warsop · Shirebrook, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG20?",
        "a": "Yes — we clean homes and businesses right across NG20, including Warsop · Church Warsop · Shirebrook, plus the surrounding Mansfield area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG20?",
        "a": "We usually have same-week availability in NG20, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG20 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng5": {
    "name": "NG5",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG5",
    "districts": [
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG5? We bring hot-water extraction steam cleaning to homes and businesses across Arnold · Sherwood · Bestwood · Top Valley, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG5?",
        "a": "Yes — we clean homes and businesses right across NG5, including Arnold · Sherwood · Bestwood · Top Valley, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG5?",
        "a": "We usually have same-week availability in NG5, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG5 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng6": {
    "name": "NG6",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG6",
    "districts": [
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ]
    ],
    "intro": "Ecologics Cleaning brings a greener clean to NG6 (Bulwell · Old Basford · Bestwood Village). From carpets and stairs to sofas, rugs, curtains and mattresses, our fully insured team refreshes your Nottingham home with eco-certified, non-toxic solutions and same-week appointments.",
    "faqs": [
      {
        "q": "Do you cover all of NG6?",
        "a": "Yes — we clean homes and businesses right across NG6, including Bulwell · Old Basford · Bestwood Village, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG6?",
        "a": "We usually have same-week availability in NG6, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG6 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng2": {
    "name": "NG2",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG2",
    "districts": [
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG2? We bring hot-water extraction steam cleaning to homes and businesses across West Bridgford · The Meadows · Colwick, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG2?",
        "a": "Yes — we clean homes and businesses right across NG2, including West Bridgford · The Meadows · Colwick, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG2?",
        "a": "We usually have same-week availability in NG2, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG2 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng7": {
    "name": "NG7",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG7",
    "districts": [
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across NG7 — covering Radford · Hyson Green · Lenton · The Park and the wider Nottingham area. Our insured technicians use non-toxic, pet- and child-safe solutions, and carpets are typically touch-dry in just a few hours.",
    "faqs": [
      {
        "q": "Do you cover all of NG7?",
        "a": "Yes — we clean homes and businesses right across NG7, including Radford · Hyson Green · Lenton · The Park, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG7?",
        "a": "We usually have same-week availability in NG7, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG7 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng8": {
    "name": "NG8",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG8",
    "districts": [
      [
        "NG8",
        "Aspley · Bilborough · Wollaton"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG8? We bring hot-water extraction steam cleaning to homes and businesses across Aspley · Bilborough · Wollaton, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG8?",
        "a": "Yes — we clean homes and businesses right across NG8, including Aspley · Bilborough · Wollaton, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG8?",
        "a": "We usually have same-week availability in NG8, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG8 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "ng11": {
    "name": "NG11",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG11",
    "districts": [
      [
        "NG11",
        "Clifton · Wilford · Ruddington"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ]
    ],
    "intro": "Looking for professional carpet and upholstery cleaning in NG11? We bring hot-water extraction steam cleaning to homes and businesses across Clifton · Wilford · Ruddington, using plant-based products that are safe for children and pets — with fast drying and honest, no-obligation quotes.",
    "faqs": [
      {
        "q": "Do you cover all of NG11?",
        "a": "Yes — we clean homes and businesses right across NG11, including Clifton · Wilford · Ruddington, plus the surrounding Nottingham area. Send your full postcode with your enquiry and we'll confirm your slot."
      },
      {
        "q": "How quickly can you come out to NG11?",
        "a": "We usually have same-week availability in NG11, and can often fit in next-day, evening or weekend visits. Just let us know what suits you when you request your free quote."
      },
      {
        "q": "Are your products safe for children and pets?",
        "a": "Always. Every clean in NG11 uses non-toxic, biodegradable, pet- and child-safe solutions — a deep, hygienic result with no harsh chemical smell left behind."
      }
    ]
  },
  "west-midlands": {
    "name": "West Midlands",
    "county": "West Midlands",
    "pcArea": "B / WV / WS / CV",
    "central": "",
    "districts": [
      [
        "B14",
        "Kings Heath · Druids Heath · Yardley Wood",
        "carpet-cleaning-b14.html"
      ],
      [
        "B31",
        "Northfield · Longbridge · West Heath",
        "carpet-cleaning-b31.html"
      ],
      [
        "B32",
        "Bartley Green · Quinton · Woodgate",
        "carpet-cleaning-b32.html"
      ],
      [
        "B37",
        "Chelmsley Wood · Marston Green · Kingshurst",
        "carpet-cleaning-b37.html"
      ],
      [
        "B38",
        "Kings Norton · West Heath",
        "carpet-cleaning-b38.html"
      ],
      [
        "B62",
        "Halesowen · Hasbury · Colley Gate",
        "carpet-cleaning-b62.html"
      ],
      [
        "B74",
        "Four Oaks · Streetly · Little Aston",
        "carpet-cleaning-b74.html"
      ],
      [
        "B75",
        "Mere Green · Roughley · Hill Hook",
        "carpet-cleaning-b75.html"
      ],
      [
        "B76",
        "Walmley · Minworth · Falcon Lodge",
        "carpet-cleaning-b76.html"
      ],
      [
        "B90",
        "Shirley · Dickens Heath · Monkspath",
        "carpet-cleaning-b90.html"
      ],
      [
        "B93",
        "Knowle · Dorridge · Bentley Heath",
        "carpet-cleaning-b93.html"
      ],
      [
        "CV2",
        "Wyken · Walsgrave · Stoke · Henley Green",
        "carpet-cleaning-cv2.html"
      ],
      [
        "CV3",
        "Cheylesmore · Willenhall · Binley · Finham",
        "carpet-cleaning-cv3.html"
      ],
      [
        "CV4",
        "Canley · Tile Hill · Westwood Heath",
        "carpet-cleaning-cv4.html"
      ],
      [
        "WS3",
        "Bloxwich · Pelsall · Little Bloxwich",
        "carpet-cleaning-ws3.html"
      ],
      [
        "WS8",
        "Brownhills · Walsall Wood · Clayhanger",
        "carpet-cleaning-ws8.html"
      ],
      [
        "WS9",
        "Aldridge · Stonnall · Walsall Wood",
        "carpet-cleaning-ws9.html"
      ],
      [
        "WV4",
        "Penn · Bradmore · Ettingshall Park",
        "carpet-cleaning-wv4.html"
      ],
      [
        "WV6",
        "Tettenhall · Compton · Wightwick",
        "carpet-cleaning-wv6.html"
      ],
      [
        "WV10",
        "Bushbury · Fallings Park · Featherstone",
        "carpet-cleaning-wv10.html"
      ],
      [
        "WV11",
        "Wednesfield · Essington",
        "carpet-cleaning-wv11.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across West Midlands. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of West Midlands do you cover?",
        "a": "We cover West Midlands widely — including B14, B31, B32, B37, B38 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across West Midlands?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in West Midlands."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "worcestershire": {
    "name": "Worcestershire",
    "county": "Worcestershire",
    "pcArea": "WR / B / DY",
    "central": "",
    "districts": [
      [
        "B45",
        "Rubery · Rednal · Cofton Hackett",
        "carpet-cleaning-b45.html"
      ],
      [
        "B98",
        "Winyates · Church Hill · Matchborough",
        "carpet-cleaning-b98.html"
      ],
      [
        "WR1 · WR3",
        "Worcester"
      ],
      [
        "DY10",
        "Kidderminster"
      ],
      [
        "WR9",
        "Droitwich Spa"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Worcestershire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Worcestershire do you cover?",
        "a": "We cover Worcestershire widely — including B45, B98, WR1 · WR3, DY10, WR9 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Worcestershire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Worcestershire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "staffordshire": {
    "name": "Staffordshire",
    "county": "Staffordshire",
    "pcArea": "ST / WS / B",
    "central": "",
    "districts": [
      [
        "B77",
        "Wilnecote · Glascote · Stonydelph",
        "carpet-cleaning-b77.html"
      ],
      [
        "B78",
        "Kingsbury · Dordon · Polesworth",
        "carpet-cleaning-b78.html"
      ],
      [
        "B79",
        "Tamworth town centre · Bolehall · Amington",
        "carpet-cleaning-b79.html"
      ],
      [
        "WV5",
        "Wombourne · Trysull · Himley",
        "carpet-cleaning-wv5.html"
      ],
      [
        "ST16 · ST17",
        "Stafford"
      ],
      [
        "ST5",
        "Newcastle-under-Lyme"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Staffordshire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Staffordshire do you cover?",
        "a": "We cover Staffordshire widely — including B77, B78, B79, WV5, ST16 · ST17 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Staffordshire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Staffordshire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "warwickshire": {
    "name": "Warwickshire",
    "county": "Warwickshire",
    "pcArea": "CV",
    "central": "",
    "districts": [
      [
        "CV21",
        "Rugby town centre · Newbold-on-Avon · Brownsover",
        "carpet-cleaning-cv21.html"
      ],
      [
        "CV37",
        "Stratford-upon-Avon · Shottery · Tiddington",
        "carpet-cleaning-cv37.html"
      ],
      [
        "CV11",
        "Nuneaton"
      ],
      [
        "CV34",
        "Warwick"
      ],
      [
        "CV32",
        "Leamington Spa"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Warwickshire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Warwickshire do you cover?",
        "a": "We cover Warwickshire widely — including CV21, CV37, CV11, CV34, CV32 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Warwickshire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Warwickshire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "nottinghamshire": {
    "name": "Nottinghamshire",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "",
    "districts": [
      [
        "Nottingham",
        "City & suburbs",
        "carpet-cleaning-nottingham.html"
      ],
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ],
      [
        "NG8",
        "Aspley · Bilborough · Wollaton",
        "carpet-cleaning-ng8.html"
      ],
      [
        "NG11",
        "Clifton · Wilford · Ruddington",
        "carpet-cleaning-ng11.html"
      ],
      [
        "NG13",
        "Bingham · Radcliffe-on-Trent · Cropwell Bishop",
        "carpet-cleaning-ng13.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ],
      [
        "NG19",
        "Mansfield Woodhouse · Forest Town",
        "carpet-cleaning-ng19.html"
      ],
      [
        "NG20",
        "Warsop · Church Warsop · Shirebrook",
        "carpet-cleaning-ng20.html"
      ],
      [
        "NG23",
        "Collingham · Sutton-on-Trent · Balderton villages",
        "carpet-cleaning-ng23.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Nottinghamshire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Nottinghamshire do you cover?",
        "a": "We cover Nottinghamshire widely — including Nottingham, NG2, NG5, NG6, NG7 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Nottinghamshire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Nottinghamshire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "south-yorkshire": {
    "name": "South Yorkshire",
    "county": "South Yorkshire",
    "pcArea": "DN / S",
    "central": "",
    "districts": [
      [
        "DN6",
        "Adwick-le-Street · Carcroft · Skellow · Woodlands",
        "carpet-cleaning-dn6.html"
      ],
      [
        "DN8",
        "Thorne · Moorends · Hatfield",
        "carpet-cleaning-dn8.html"
      ],
      [
        "DN9",
        "Auckley · Finningley · Epworth · Belton",
        "carpet-cleaning-dn9.html"
      ],
      [
        "DN11",
        "Harworth · Bircotes · Tickhill",
        "carpet-cleaning-dn11.html"
      ],
      [
        "DN14",
        "Goole · Snaith · Rawcliffe",
        "carpet-cleaning-dn14.html"
      ],
      [
        "DN1 · DN4",
        "Doncaster city"
      ],
      [
        "S1",
        "Sheffield (nearby)"
      ],
      [
        "S63",
        "Wath · Wombwell"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across South Yorkshire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of South Yorkshire do you cover?",
        "a": "We cover South Yorkshire widely — including DN6, DN8, DN9, DN11, DN14 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across South Yorkshire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in South Yorkshire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "leicestershire": {
    "name": "Leicestershire",
    "county": "Leicestershire",
    "pcArea": "LE",
    "central": "",
    "districts": [
      [
        "Leicester",
        "City & suburbs",
        "carpet-cleaning-leicester.html"
      ],
      [
        "LE10",
        "Hinckley · Burbage"
      ],
      [
        "LE11",
        "Loughborough"
      ],
      [
        "LE65",
        "Ashby-de-la-Zouch"
      ],
      [
        "LE67",
        "Coalville · Ibstock"
      ],
      [
        "LE12",
        "Shepshed · Quorn"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Leicestershire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Leicestershire do you cover?",
        "a": "We cover Leicestershire widely — including Leicester, LE10, LE11, LE65, LE67 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Leicestershire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Leicestershire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "derbyshire": {
    "name": "Derbyshire",
    "county": "Derbyshire",
    "pcArea": "DE / S / SK",
    "central": "",
    "districts": [
      [
        "DE1 · DE22",
        "Derby · Allestree · Mickleover"
      ],
      [
        "DE7",
        "Ilkeston · West Hallam"
      ],
      [
        "DE55",
        "Alfreton · South Normanton"
      ],
      [
        "S18",
        "Dronfield · Coal Aston"
      ],
      [
        "SK13",
        "Glossop · Hadfield"
      ],
      [
        "SK17",
        "Buxton · Chapel-en-le-Frith"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning right across Derbyshire. From busy family homes to offices and rental properties, our fully insured technicians bring professional hot-water extraction steam equipment and non-toxic, pet- and child-safe solutions to your door — with free quotes, an optional on-site demo and fast drying times.",
    "faqs": [
      {
        "q": "Which parts of Derbyshire do you cover?",
        "a": "We cover Derbyshire widely — including DE1 · DE22, DE7, DE55, S18, SK13 and many more towns and postcodes across the county. If you're not sure whether we reach your area, just ask when you request your quote."
      },
      {
        "q": "Is there a travel charge across Derbyshire?",
        "a": "No hidden travel fees — you'll always get a clear, all-in quote before we book, wherever you are in Derbyshire."
      },
      {
        "q": "What can you clean?",
        "a": "Carpets, stairs and landings, sofas and upholstery, area rugs, curtains, mattresses, whole-house deep cleans, end-of-tenancy cleans and commercial premises — all with eco-friendly, non-toxic products."
      }
    ]
  },
  "leicester": {
    "name": "Leicester",
    "county": "Leicestershire",
    "pcArea": "LE",
    "central": "LE1",
    "districts": [
      [
        "LE1",
        "City centre · Highfields"
      ],
      [
        "LE2",
        "Clarendon Park · Aylestone · Knighton"
      ],
      [
        "LE3",
        "Braunstone · New Parks · Westcotes"
      ],
      [
        "LE4",
        "Belgrave · Rushey Mead · Beaumont Leys"
      ],
      [
        "LE5",
        "Evington · Humberstone · Thurnby Lodge"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across Leicester and its suburbs — City centre · Clarendon Park · Braunstone · Belgrave and beyond. Non-toxic, pet- and child-safe, fully insured, with same-week appointments and carpets touch-dry in hours.",
    "faqs": [
      {
        "q": "Which areas of Leicester do you cover?",
        "a": "All of the LE postcodes across Leicester and the surrounding Leicestershire suburbs. Send your postcode with your enquiry and we'll confirm availability."
      },
      {
        "q": "How soon can you clean in Leicester?",
        "a": "We usually have same-week slots across Leicester, including evenings and weekends to fit around work and family."
      },
      {
        "q": "Are your products eco-friendly?",
        "a": "Yes — every Leicester clean uses plant-based, biodegradable products that are safe for children and pets, with a deep, hygienic finish and no harsh chemical smell."
      }
    ]
  },
  "nottingham": {
    "name": "Nottingham",
    "county": "Nottinghamshire",
    "pcArea": "NG",
    "central": "NG1",
    "districts": [
      [
        "NG2",
        "West Bridgford · The Meadows · Colwick",
        "carpet-cleaning-ng2.html"
      ],
      [
        "NG5",
        "Arnold · Sherwood · Bestwood · Top Valley",
        "carpet-cleaning-ng5.html"
      ],
      [
        "NG6",
        "Bulwell · Old Basford · Bestwood Village",
        "carpet-cleaning-ng6.html"
      ],
      [
        "NG7",
        "Radford · Hyson Green · Lenton · The Park",
        "carpet-cleaning-ng7.html"
      ],
      [
        "NG8",
        "Aspley · Bilborough · Wollaton",
        "carpet-cleaning-ng8.html"
      ],
      [
        "NG11",
        "Clifton · Wilford · Ruddington",
        "carpet-cleaning-ng11.html"
      ],
      [
        "NG16",
        "Eastwood · Kimberley · Nuthall · Giltbrook",
        "carpet-cleaning-ng16.html"
      ]
    ],
    "intro": "Eco-friendly carpet, upholstery and steam cleaning across Nottingham and its suburbs — West Bridgford · Arnold · Bulwell · Radford and beyond. Non-toxic, pet- and child-safe, fully insured, with same-week appointments and carpets touch-dry in hours.",
    "faqs": [
      {
        "q": "Which areas of Nottingham do you cover?",
        "a": "All of the NG postcodes across Nottingham and the surrounding Nottinghamshire suburbs. Send your postcode with your enquiry and we'll confirm availability."
      },
      {
        "q": "How soon can you clean in Nottingham?",
        "a": "We usually have same-week slots across Nottingham, including evenings and weekends to fit around work and family."
      },
      {
        "q": "Are your products eco-friendly?",
        "a": "Yes — every Nottingham clean uses plant-based, biodegradable products that are safe for children and pets, with a deep, hygienic finish and no harsh chemical smell."
      }
    ]
  }
};

function renderAreaDetail() {
  const slug = document.body.getAttribute("data-slug");
  const d = AREA_DETAILS[slug];
  const mount = document.getElementById("area-mount");
  if (!d || !mount) return;
  const I = window.ESC.ICON, C = window.ESC.CONFIG;
  const services = window.ESC.SERVICES;

  const districtCard = (row) => {
    const code = row[0], area = row[1], file = row[2];
    if (file) {
      return `
        <a class="svc-card" data-reveal href="../areas/${file}">
          <div class="svc-ic">${I.pin}</div>
          <h3>${code}</h3>
          <p>${area}</p>
          <span class="svc-link">View area ${I.arrow}</span>
        </a>`;
    }
    return `
      <div class="svc-card" data-reveal>
        <div class="svc-ic">${I.pin}</div>
        <h3>${code}</h3>
        <p>${area}</p>
      </div>`;
  };

  mount.innerHTML = `
  <div class="page-hero">
    <div class="wrap">
      <div class="crumbs"><a href="../index.html">Home</a>${I.arrow}<a href="../areas.html">Areas</a>${I.arrow}<span>${d.name}</span></div>
      <span class="kicker on-dark">${I.pin} ${d.county} · ${d.pcArea} postcodes</span>
      <h1 class="mt-2">Carpet &amp; Upholstery Cleaning in <span class="accent">${d.name}</span></h1>
      <p class="lead mt-2" style="color:#a9c4da">${d.intro}</p>
      <div class="hero-actions" style="margin-top:1.6rem">
        <a class="btn btn-primary btn-lg magnetic" href="../contact.html?service=${encodeURIComponent('Cleaning in ' + d.name)}">Get a free quote</a>
        <a class="btn btn-outline btn-lg" href="tel:${C.phoneRaw}">${I.phone} Call us</a>
      </div>
    </div>
  </div>

  <section class="section">
    <div class="wrap">
      <div class="section-head" data-reveal>
        <span class="kicker">Areas covered</span>
        <h2 class="h-lg mt-2">Where we clean around ${d.name}</h2>
        <p class="lead mt-2">Wherever you are in ${d.name}, our insured technicians bring professional steam equipment and eco-friendly, non-toxic solutions to your door.</p>
      </div>
      <div class="cards">
        ${d.districts.map(districtCard).join("")}
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal>
        <span class="kicker">Our services in ${d.name}</span>
        <h2 class="h-lg mt-2">What we clean in ${d.name}</h2>
      </div>
      <div class="cards">
        ${services.map(s => `
          <a class="svc-card" data-reveal href="../services/${s.slug}.html">
            <div class="svc-ic">${I[s.icon]}</div>
            <h3>${s.name}</h3>
            <p>${s.blurb}</p>
            <span class="svc-link">Learn more ${I.arrow}</span>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="cta-band" data-reveal>
        <span class="blob b1"></span><span class="blob b2"></span>
        <div class="cta-flex">
          <div><h2 class="h-lg">Book your ${d.name} clean</h2><p class="lead mt-2">Free quotes &amp; free on-site demos across ${d.name} (${d.pcArea}). Fully insured · non-toxic · pet-safe.</p></div>
          <a class="btn btn-primary btn-lg magnetic" href="../contact.html?service=${encodeURIComponent('Cleaning in ' + d.name)}">Get a free quote ${I.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section bg-soft">
    <div class="wrap">
      <div class="section-head" data-reveal><span class="kicker">Good to know</span><h2 class="h-lg mt-2">${d.name} cleaning — FAQs</h2></div>
      <div class="faq wrap-tight">
        ${d.faqs.map(f => `
          <details class="acc" data-reveal>
            <summary>${f.q}<span class="pm">${I.plus}</span></summary>
            <div class="acc-body">${f.a}</div>
          </details>`).join("")}
      </div>
      <p class="center mt-4"><a class="btn btn-outline" href="../areas.html">See all areas we cover ${I.arrow}</a></p>
    </div>
  </section>`;

  window.__reveal && window.__reveal();
  window.__esInteract && window.__esInteract();
}
document.addEventListener("DOMContentLoaded", () => setTimeout(renderAreaDetail, 0));
