function getPoliticalData(addressResult) {
    var locality,
        sublocality,
        administrative_area_level_1,
        administrative_area_level_2,
        administrative_area_level_3;
    var data = {};
    for (var i = 0; i < addressResult.length; i++) {
        var res = addressResult[i];
        var addrComponents = res.address_components;
        for (var j = 0; j < addrComponents.length; j++) {
            if (addrComponents[j].types.indexOf("administrative_area_level_1") != -1) {
                console.log(addrComponents[j].short_name);
                if (administrative_area_level_1 != addrComponents[j].short_name)
                    administrative_area_level_1 = addrComponents[j].short_name;
            }
            if (addrComponents[j].types.indexOf("administrative_area_level_2") != -1) {
                console.log(addrComponents[j].short_name);
                if (administrative_area_level_2 != addrComponents[j].short_name)
                    administrative_area_level_2 = addrComponents[j].short_name;
            }
            if (addrComponents[j].types.indexOf("administrative_area_level_3") != -1) {
                console.log(addrComponents[j].short_name);
                if (administrative_area_level_3 != addrComponents[j].short_name)
                    administrative_area_level_3 = addrComponents[j].short_name;
            }
            if (addrComponents[j].types.indexOf("locality") != -1) {
                if (locality != addrComponents[j].short_name)
                    locality = addrComponents[j].short_name;
            }
            if (addrComponents[j].types.indexOf("sublocality") != -1) {
                console.log(addrComponents[j].short_name);
                if (sublocality != addrComponents[j].short_name)
                    sublocality = addrComponents[j].short_name;
            }

        }
    }
    var manucipality =
        {
            locality: locality,
            sublocality: sublocality,
            administrative_area_level_1: administrative_area_level_1,
            administrative_area_level_2: administrative_area_level_2,
            administrative_area_level_3: administrative_area_level_3
        };
    return manucipality;
}

function getLocalityAndSublocality(addressResult) {
    var locality, sublocality;
    var data = {};
    for (var i = 0; i < addressResult.length; i++) {
        var res = addressResult[i];
        var addrComponents = res.address_components;
        for (var j = 0; j < addrComponents.length; j++) {
            if (addrComponents[j].types.indexOf("locality") != -1) {
                if (locality != addrComponents[j].short_name)
                    locality = addrComponents[j].short_name;
            }
            if (addrComponents[j].types.indexOf("sublocality") != -1) {
                console.log(addrComponents[j].short_name);
                if (sublocality != addrComponents[j].short_name)
                    sublocality = addrComponents[j].short_name;
            }
        }
    }
    var manucipality =
        {
            locality: locality,
            sublocality: sublocality,
        };
    return manucipality;
}

var tu =
    [
   {
       "address_components": [
          {
              "long_name": "1",
              "short_name": "1",
              "types": [
                 "street_number"
              ]
          },
          {
              "long_name": "ulitsa \"Rosario\"",
              "short_name": "ul. \"Rosario\"",
              "types": [
                 "route"
              ]
          },
          {
              "long_name": "Sofia",
              "short_name": "Sofia",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          },
          {
              "long_name": "1756",
              "short_name": "1756",
              "types": [
                 "postal_code"
              ]
          }
       ],
       "formatted_address": "ulitsa \"Rosario\" 1, 1756 Sofia, Bulgaria",
       "geometry": {
           "location": {
               "jb": 42.6569434,
               "kb": 23.352892200000042
           },
           "location_type": "ROOFTOP",
           "viewport": {
               "Z": {
                   "b": 42.6555944197085,
                   "d": 42.65829238029149
               },
               "fa": {
                   "b": 23.351543219708446,
                   "d": 23.354241180291524
               }
           }
       },
       "types": [
          "street_address"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "zh.k. Studentski grad",
              "short_name": "zh.k. Studentski grad",
              "types": [
                 "neighborhood",
                 "political"
              ]
          },
          {
              "long_name": "Sofia",
              "short_name": "Sofia",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Stolichna",
              "short_name": "Stolichna",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "zh.k. Studentski grad, Sofia, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.6369029,
                   "d": 42.6632649
               },
               "fa": {
                   "b": 23.333700399999998,
                   "d": 23.35979210000005
               }
           },
           "location": {
               "jb": 42.6509124,
               "kb": 23.347705399999995
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.6369029,
                   "d": 42.6632649
               },
               "fa": {
                   "b": 23.333700399999998,
                   "d": 23.35979210000005
               }
           }
       },
       "types": [
          "neighborhood",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Studentski",
              "short_name": "Studentski",
              "types": [
                 "sublocality",
                 "political"
              ]
          },
          {
              "long_name": "Sofia",
              "short_name": "Sofia",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Stolichna",
              "short_name": "Stolichna",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Studentski, Sofia, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.6243254,
                   "d": 42.6683599
               },
               "fa": {
                   "b": 23.33365839999999,
                   "d": 23.370029199999976
               }
           },
           "location": {
               "jb": 42.6443829,
               "kb": 23.34558960000004
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.6243254,
                   "d": 42.6683599
               },
               "fa": {
                   "b": 23.33365839999999,
                   "d": 23.370029199999976
               }
           }
       },
       "types": [
          "sublocality",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "1756",
              "short_name": "1756",
              "types": [
                 "postal_code"
              ]
          },
          {
              "long_name": "Sofia",
              "short_name": "Sofia",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Stolichna",
              "short_name": "Stolichna",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "1756 Sofia, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.6015999,
                   "d": 42.663417
               },
               "fa": {
                   "b": 23.337480400000004,
                   "d": 23.38585260000002
               }
           },
           "location": {
               "jb": 42.61314429999999,
               "kb": 23.360985700000015
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.6015999,
                   "d": 42.663417
               },
               "fa": {
                   "b": 23.337480400000004,
                   "d": 23.38585260000002
               }
           }
       },
       "types": [
          "postal_code"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Sofia-city, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.4125751,
                   "d": 42.8964344
               },
               "fa": {
                   "b": 23.051252299999987,
                   "d": 23.678680100000065
               }
           },
           "location": {
               "jb": 42.7570109,
               "kb": 23.45046830000001
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.4125751,
                   "d": 42.8964344
               },
               "fa": {
                   "b": 23.051252299999987,
                   "d": 23.678680100000065
               }
           }
       },
       "types": [
          "administrative_area_level_1",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Stolichna",
              "short_name": "Stolichna",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Stolichna, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.4125751,
                   "d": 42.8964344
               },
               "fa": {
                   "b": 23.051252299999987,
                   "d": 23.678680100000065
               }
           },
           "location": {
               "jb": 42.7570109,
               "kb": 23.45046830000001
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.4125751,
                   "d": 42.8964344
               },
               "fa": {
                   "b": 23.051252299999987,
                   "d": 23.678680100000065
               }
           }
       },
       "types": [
          "administrative_area_level_2",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Sofia",
              "short_name": "Sofia",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Stolichna",
              "short_name": "Stolichna",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Sofia-city",
              "short_name": "Sofia-city",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Sofia, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.4123617,
                   "d": 42.8964646
               },
               "fa": {
                   "b": 23.05109200000004,
                   "d": 23.678715799999964
               }
           },
           "location": {
               "jb": 42.6978388,
               "kb": 23.32166970000003
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.4123617,
                   "d": 42.8964646
               },
               "fa": {
                   "b": 23.05109200000004,
                   "d": 23.678715799999964
               }
           }
       },
       "types": [
          "locality",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 41.2354469,
                   "d": 44.2151244
               },
               "fa": {
                   "b": 22.357344600000033,
                   "d": 28.609263199999987
               }
           },
           "location": {
               "jb": 42.733883,
               "kb": 25.485829999999964
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 41.2354469,
                   "d": 44.2151244
               },
               "fa": {
                   "b": 22.357344600000033,
                   "d": 28.609263199999987
               }
           }
       },
       "types": [
          "country",
          "political"
       ]
   }
    ];

var selo =
    [
   {
       "address_components": [
          {
              "long_name": "101",
              "short_name": "101",
              "types": [
                 "route"
              ]
          },
          {
              "long_name": "Hayredin",
              "short_name": "Hayredin",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Hayredin",
              "short_name": "Hayredin",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Vraca",
              "short_name": "Vraca",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          },
          {
              "long_name": "3357",
              "short_name": "3357",
              "types": [
                 "postal_code"
              ]
          }
       ],
       "formatted_address": "101, 3357 Hayredin, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 43.5991144,
                   "d": 43.6001658
               },
               "fa": {
                   "b": 23.65858520000006,
                   "d": 23.660495800000035
               }
           },
           "location": {
               "jb": 43.59964009999999,
               "kb": 23.65954050000005
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 43.5982911197085,
                   "d": 43.6009890802915
               },
               "fa": {
                   "b": 23.658191519708453,
                   "d": 23.66088948029153
               }
           }
       },
       "types": [
          "route"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Hayredin",
              "short_name": "Hayredin",
              "types": [
                 "locality",
                 "political"
              ]
          },
          {
              "long_name": "Hayredin",
              "short_name": "Hayredin",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Vraca",
              "short_name": "Vraca",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          },
          {
              "long_name": "3357",
              "short_name": "3357",
              "types": [
                 "postal_code"
              ]
          }
       ],
       "formatted_address": "3357 Hayredin, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 43.5921161,
                   "d": 43.6162198
               },
               "fa": {
                   "b": 23.63668800000005,
                   "d": 23.68114860000003
               }
           },
           "location": {
               "jb": 43.6024355,
               "kb": 23.65867860000003
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 43.5921161,
                   "d": 43.6162198
               },
               "fa": {
                   "b": 23.63668800000005,
                   "d": 23.68114860000003
               }
           }
       },
       "types": [
          "locality",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "3357",
              "short_name": "3357",
              "types": [
                 "postal_code"
              ]
          },
          {
              "long_name": "Vraca",
              "short_name": "Vraca",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "3357, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 43.5751714,
                   "d": 43.6610637
               },
               "fa": {
                   "b": 23.579891299999986,
                   "d": 23.719272700000033
               }
           },
           "location": {
               "jb": 43.6137314,
               "kb": 23.636736199999973
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 43.5751714,
                   "d": 43.6610637
               },
               "fa": {
                   "b": 23.579891299999986,
                   "d": 23.719272700000033
               }
           }
       },
       "types": [
          "postal_code"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Hayredin",
              "short_name": "Hayredin",
              "types": [
                 "administrative_area_level_2",
                 "political"
              ]
          },
          {
              "long_name": "Vraca",
              "short_name": "Vraca",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Hayredin, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 43.4941617,
                   "d": 43.6610637
               },
               "fa": {
                   "b": 23.544740700000034,
                   "d": 23.78021519999993
               }
           },
           "location": {
               "jb": 43.6024412,
               "kb": 23.6586681
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 43.4941617,
                   "d": 43.6610637
               },
               "fa": {
                   "b": 23.544740700000034,
                   "d": 23.78021519999993
               }
           }
       },
       "types": [
          "administrative_area_level_2",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Vraca",
              "short_name": "Vraca",
              "types": [
                 "administrative_area_level_1",
                 "political"
              ]
          },
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Vratsa Province, Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 42.9938934,
                   "d": 43.8059022
               },
               "fa": {
                   "b": 23.31701380000004,
                   "d": 24.32412249999993
               }
           },
           "location": {
               "jb": 43.2101806,
               "kb": 23.55292099999997
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 42.9938934,
                   "d": 43.8059022
               },
               "fa": {
                   "b": 23.31701380000004,
                   "d": 24.32412249999993
               }
           }
       },
       "types": [
          "administrative_area_level_1",
          "political"
       ]
   },
   {
       "address_components": [
          {
              "long_name": "Bulgaria",
              "short_name": "BG",
              "types": [
                 "country",
                 "political"
              ]
          }
       ],
       "formatted_address": "Bulgaria",
       "geometry": {
           "bounds": {
               "Z": {
                   "b": 41.2354469,
                   "d": 44.2151244
               },
               "fa": {
                   "b": 22.357344600000033,
                   "d": 28.609263199999987
               }
           },
           "location": {
               "jb": 42.733883,
               "kb": 25.485829999999964
           },
           "location_type": "APPROXIMATE",
           "viewport": {
               "Z": {
                   "b": 41.2354469,
                   "d": 44.2151244
               },
               "fa": {
                   "b": 22.357344600000033,
                   "d": 28.609263199999987
               }
           }
       },
       "types": [
          "country",
          "political"
       ]
   }
    ];

