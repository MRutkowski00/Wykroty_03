var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.011036105799217,
          "pitch": -0.001221416045446233,
          "rotation": 0,
          "target": "2-sala-konferencyjna---parter"
        },
        {
          "yaw": 1.2091722118772275,
          "pitch": 0.08063997871994033,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-komunikacja---parter",
      "name": "Komunikacja - parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4269290458053003,
          "pitch": 0.055547175085933986,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -2.6046964570920768,
          "pitch": 0.05862976342299753,
          "rotation": 0,
          "target": "3-wc-dla-ozn"
        },
        {
          "yaw": 0.025711499888508627,
          "pitch": -0.0025708612306836187,
          "rotation": 0,
          "target": "4-komunikacja---pitro-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-konferencyjna---parter",
      "name": "Sala konferencyjna - parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.164364757119542,
          "pitch": -0.0036369372815947543,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc-dla-ozn",
      "name": "WC dla OzN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.240388368506089,
          "pitch": 0.03710300739367689,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-komunikacja---pitro-a",
      "name": "Komunikacja - piętro A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6496007206644556,
          "pitch": 0.05539538302509506,
          "rotation": 0,
          "target": "1-komunikacja---parter"
        },
        {
          "yaw": -3.104014609029374,
          "pitch": 0.06257448172052982,
          "rotation": 0,
          "target": "5-open-space-a"
        },
        {
          "yaw": 0.0002687831810206376,
          "pitch": 0.038556050527921215,
          "rotation": 0,
          "target": "9-komunikacja---pitro-c"
        },
        {
          "yaw": 0.2540065640920979,
          "pitch": 0.037390671494897276,
          "rotation": 0,
          "target": "8-sala-konferencyjna---pitro-a"
        },
        {
          "yaw": 0.1325880679439475,
          "pitch": 0.03803514416266296,
          "rotation": 0,
          "target": "7-kantyna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.009173440849393089,
          "pitch": 0.19184561034934866,
          "title": "Zostanie dodana pośrednia wizualizacja komunikacji",
          "text": ""
        },
        {
          "yaw": -0.21627737835783023,
          "pitch": 0.03630019390227446,
          "title": "W opracowaniu",
          "text": ""
        }
      ]
    },
    {
      "id": "5-open-space-a",
      "name": "Open space A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1337550882151888,
          "pitch": 0.046169895771003056,
          "rotation": 0,
          "target": "4-komunikacja---pitro-a"
        },
        {
          "yaw": -1.384691423013015,
          "pitch": 0.033608674305313,
          "rotation": 0,
          "target": "6-open-space-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-open-space-b",
      "name": "Open space B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05914312106860464,
          "pitch": 0.02554921621854689,
          "rotation": 0,
          "target": "5-open-space-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kantyna",
      "name": "Kantyna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.33987258693957756,
          "pitch": 0.047995369892904094,
          "rotation": 0,
          "target": "4-komunikacja---pitro-a"
        },
        {
          "yaw": 0.49716906706555264,
          "pitch": 0.045176817478456144,
          "rotation": 0,
          "target": "9-komunikacja---pitro-c"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sala-konferencyjna---pitro-a",
      "name": "Sala konferencyjna - piętro A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9307456342161746,
          "pitch": 0.11858074976439426,
          "rotation": 0,
          "target": "4-komunikacja---pitro-a"
        },
        {
          "yaw": -2.213513238261978,
          "pitch": 0.08421276238472686,
          "rotation": 0,
          "target": "9-komunikacja---pitro-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.746946364780074,
          "pitch": 0.11352604301171709,
          "title": "W opracowaniu",
          "text": ""
        }
      ]
    },
    {
      "id": "9-komunikacja---pitro-c",
      "name": "Komunikacja - piętro C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-komunikacja---pitro-a"
        },
        {
          "yaw": -0.2353703711652564,
          "pitch": 0.0011991236413848583,
          "rotation": 0,
          "target": "7-kantyna"
        },
        {
          "yaw": -0.11516580531750975,
          "pitch": -0.0025411952558158646,
          "rotation": 0,
          "target": "8-sala-konferencyjna---pitro-a"
        },
        {
          "yaw": -0.5703708336439277,
          "pitch": 0.12566828802318142,
          "rotation": 0,
          "target": "10-sala-konferencyjna---pitro-b"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.002571707509851251,
          "pitch": 0.13798970317604287,
          "title": "Zostanie dodana pośrednia wizualizacja komunikacji",
          "text": ""
        },
        {
          "yaw": 2.9550956775209283,
          "pitch": 0.05363774911658936,
          "title": "W opracowaniu",
          "text": ""
        }
      ]
    },
    {
      "id": "10-sala-konferencyjna---pitro-b",
      "name": "Sala konferencyjna - piętro B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.606181807868687,
          "pitch": 0.06009247725175726,
          "rotation": 0,
          "target": "9-komunikacja---pitro-c"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0348984609189316,
          "pitch": 0.06748902910272747,
          "title": "W opracowaniu",
          "text": ""
        }
      ]
    }
  ],
  "name": "Wykroty_03",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
