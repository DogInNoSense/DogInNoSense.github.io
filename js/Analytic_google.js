// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{ "function": "__e" }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }, { "function": "__c", "vtp_value": "google.com.hk" }, { "function": "__c", "vtp_value": 0 }, { "function": "__c", "vtp_value": "google.com.hk" }, { "function": "__c", "vtp_value": 0 }, { "vtp_signal": 0, "function": "__c", "vtp_value": 0 }],
            "tags": [{ "function": "__gct", "vtp_trackingId": "G-37B3799Y3F", "vtp_sessionDuration": 0, "vtp_googleSignals": ["macro", 1], "vtp_foreignTld": ["macro", 2], "vtp_restrictDomain": ["macro", 3], "vtp_eventSettings": ["map"], "tag_id": 7 }, { "function": "__set_product_settings", "vtp_instanceDestinationId": "G-37B3799Y3F", "vtp_foreignTldMacroResult": ["macro", 4], "vtp_isChinaVipRegionMacroResult": ["macro", 5], "tag_id": 9 }, { "function": "__ogt_google_signals", "vtp_googleSignals": "DISABLED", "vtp_instanceDestinationId": "G-37B3799Y3F", "vtp_serverMacroResult": ["macro", 6], "tag_id": 11 }, { "function": "__ccd_em_scroll", "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 12 }, { "function": "__ccd_em_site_search", "vtp_searchQueryParams": "q,s,search,query,keyword", "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 13 }, { "function": "__ccd_em_form", "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 14 }, { "function": "__ccd_em_download", "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 15 }, { "function": "__ccd_em_page_view", "vtp_historyEvents": true, "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 16 }, { "function": "__ccd_em_outbound_click", "priority": 0, "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 17 }, { "function": "__ccd_em_video", "vtp_includeParams": true, "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 18 }, { "function": "__ccd_conversion_marking", "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]], "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 19 }, { "function": "__ccd_ga_regscope", "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""],
                    ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]
                ], "vtp_instanceDestinationId": "G-37B3799Y3F", "tag_id": 20 }],
            "predicates": [{ "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.js" }, { "function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.init" }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0]
                ],
                [
                    ["if", 1],
                    ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                ]
            ]
        },
        "runtime": [
            [50, "__ccd_em_video", [46, "a"],
                [50, "t", [46, "u"],
                    [52, "v", [8]],
                    [43, [15, "v"],
                        [15, "l"], true
                    ],
                    [43, [15, "v"],
                        [15, "f"], true
                    ],
                    [43, [15, "u"], "eventMetadata", [15, "v"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "templateStorage"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_video"],
                [52, "h", "video_start"],
                [52, "i", "video_progress"],
                [52, "j", "video_complete"],
                [52, "k", "isRegistered"],
                [52, "l", "em_event"],
                [52, "m", [17, [15, "a"], "instanceDestinationId"]],
                [22, ["c", [15, "m"],
                        [15, "g"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "n", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, [15, "n"],
                    [46, ["d", [15, "m"],
                        [51, "", [7, "u"],
                            [52, "v", [2, [15, "u"], "getEventName", [7]]],
                            [52, "w", [30, [30, [20, [15, "v"],
                                        [15, "h"]
                                    ],
                                    [20, [15, "v"],
                                        [15, "i"]
                                    ]
                                ],
                                [20, [15, "v"],
                                    [15, "j"]
                                ]
                            ]],
                            [22, [30, [28, [15, "w"]],
                                    [28, [2, [15, "u"], "getMetadata", [7, [15, "l"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "m"],
                                    [15, "g"]
                                ],
                                [46, [2, [15, "u"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "u"], "setMetadata", [7, [15, "f"], false]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "u"], "setHitData", [7, "video_current_time", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "video_duration", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "video_percent", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "video_provider", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "video_title", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "video_url", [44]]],
                                    [2, [15, "u"], "setHitData", [7, "visible", [44]]]
                                ]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "n"],
                        [2, [15, "e"], "getItem", [7, [15, "k"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "o", ["require", "internal.addDataLayerEventListener"]],
                [52, "p", ["require", "internal.enableAutoEventOnYouTubeActivity"]],
                [52, "q", ["require", "internal.getDestinationIds"]],
                [52, "r", ["require", "internal.sendGtagEvent"]],
                [52, "s", ["p", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]],
                [22, [28, [15, "s"]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [2, [15, "e"], "setItem", [7, [15, "k"], true]],
                ["o", "gtm.video", [51, "", [7, "u", "v"],
                        ["v"],
                        [52, "w", [16, [15, "u"], "gtm.videoStatus"]],
                        [41, "x"],
                        [22, [20, [15, "w"], "start"],
                            [46, [3, "x", [15, "h"]]],
                            [46, [22, [20, [15, "w"], "progress"],
                                [46, [3, "x", [15, "i"]]],
                                [46, [22, [20, [15, "w"], "complete"],
                                    [46, [3, "x", [15, "j"]]],
                                    [46, [36]]
                                ]]
                            ]]
                        ],
                        [52, "y", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                                [15, "n"]
                            ],
                            [8, "video_current_time", [16, [15, "u"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "u"], "gtm.videoDuration"], "video_percent", [16, [15, "u"], "gtm.videoPercent"], "video_provider", [16, [15, "u"], "gtm.videoProvider"], "video_title", [16, [15, "u"], "gtm.videoTitle"], "video_url", [16, [15, "u"], "gtm.videoUrl"], "visible", [16, [15, "u"], "gtm.videoVisible"]],
                            [8]
                        ]],
                        [52, "z", [8]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, [43, [15, "z"], "eventId", [16, [15, "u"], "gtm.uniqueEventId"]]]
                        ],
                        [22, [15, "n"],
                            [46, ["t", [15, "z"]],
                                ["r", ["q"],
                                    [15, "x"],
                                    [15, "y"],
                                    [15, "z"]
                                ]
                            ],
                            [46, ["r", [15, "m"],
                                [15, "x"],
                                [15, "y"],
                                [15, "z"]
                            ]]
                        ]
                    ],
                    [15, "s"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_outbound_click", [46, "a"],
                [50, "t", [46, "z"],
                    [22, [28, [15, "z"]],
                        [46, [36, [44]]]
                    ],
                    [41, "ba"],
                    [3, "ba", ""],
                    [22, [1, [15, "z"],
                            [17, [15, "z"], "href"]
                        ],
                        [46, [53, [41, "bb"],
                            [3, "bb", [2, [17, [15, "z"], "href"], "indexOf", [7, "#"]]],
                            [3, "ba", [39, [23, [15, "bb"], 0],
                                [17, [15, "z"], "href"],
                                [2, [17, [15, "z"], "href"], "substring", [7, 0, [15, "bb"]]]
                            ]]
                        ]]
                    ],
                    [36, [15, "ba"]]
                ],
                [50, "u", [46, "z"],
                    [22, [28, [15, "z"]],
                        [46, [36, [44]]]
                    ],
                    [41, "ba"],
                    [3, "ba", [17, [15, "z"], "hostname"]],
                    [52, "bb", [2, [15, "ba"], "match", [7, "^www\\d*\\."]]],
                    [22, [1, [15, "bb"],
                            [16, [15, "bb"], 0]
                        ],
                        [46, [3, "ba", [2, [15, "ba"], "substring", [7, [17, [16, [15, "bb"], 0], "length"]]]]]
                    ],
                    [36, [15, "ba"]]
                ],
                [50, "v", [46, "z"],
                    [22, [28, [15, "z"]],
                        [46, [36, false]]
                    ],
                    [52, "ba", [2, [17, [15, "z"], "hostname"], "toLowerCase", [7]]],
                    [41, "bb"],
                    [3, "bb", [2, ["u", ["r", ["q"]]], "toLowerCase", [7]]],
                    [41, "bc"],
                    [3, "bc", [37, [17, [15, "ba"], "length"],
                        [17, [15, "bb"], "length"]
                    ]],
                    [22, [1, [18, [15, "bc"], 0],
                            [29, [2, [15, "bb"], "charAt", [7, 0]], "."]
                        ],
                        [46, [32, [15, "bc"],
                                [3, "bc", [37, [15, "bc"], 1]]
                            ],
                            [3, "bb", [0, ".", [15, "bb"]]]
                        ]
                    ],
                    [22, [1, [19, [15, "bc"], 0],
                            [12, [2, [15, "ba"], "indexOf", [7, [15, "bb"],
                                    [15, "bc"]
                                ]],
                                [15, "bc"]
                            ]
                        ],
                        [46, [36, false]]
                    ],
                    [36, true]
                ],
                [50, "y", [46, "z"],
                    [52, "ba", [8]],
                    [43, [15, "ba"],
                        [15, "j"], true
                    ],
                    [43, [15, "ba"],
                        [15, "f"], true
                    ],
                    [43, [15, "z"], "eventMetadata", [15, "ba"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "templateStorage"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_outbound_click"],
                [52, "h", "click"],
                [52, "i", "isRegistered"],
                [52, "j", "em_event"],
                [52, "k", [17, [15, "a"], "instanceDestinationId"]],
                [22, ["c", [15, "k"],
                        [15, "g"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, [15, "l"],
                    [46, ["d", [15, "k"],
                        [51, "", [7, "z"],
                            [22, [30, [21, [2, [15, "z"], "getEventName", [7]],
                                        [15, "h"]
                                    ],
                                    [28, [2, [15, "z"], "getMetadata", [7, [15, "j"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "k"],
                                    [15, "g"]
                                ],
                                [46, [2, [15, "z"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "z"], "setMetadata", [7, [15, "f"], false]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "z"], "setHitData", [7, "link_id", [44]]],
                                    [2, [15, "z"], "setHitData", [7, "link_classes", [44]]],
                                    [2, [15, "z"], "setHitData", [7, "link_url", [44]]],
                                    [2, [15, "z"], "setHitData", [7, "link_domain", [44]]],
                                    [2, [15, "z"], "setHitData", [7, "outbound", [44]]]
                                ]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "l"],
                        [2, [15, "e"], "getItem", [7, [15, "i"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "m", ["require", "internal.addDataLayerEventListener"]],
                [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]],
                [52, "o", ["require", "internal.getDestinationIds"]],
                [52, "p", ["require", "internal.getRemoteConfigParameter"]],
                [52, "q", ["require", "getUrl"]],
                [52, "r", ["require", "parseUrl"]],
                [52, "s", ["require", "internal.sendGtagEvent"]],
                [52, "w", ["p", [15, "k"], "cross_domain_conditions"]],
                [52, "x", ["n", [8, "affiliateDomains", [15, "w"], "checkValidation", true, "waitForTags", false]]],
                [22, [28, [15, "x"]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [2, [15, "e"], "setItem", [7, [15, "i"], true]],
                ["m", "gtm.linkClick", [51, "", [7, "z", "ba"],
                        [52, "bb", ["r", [16, [15, "z"], "gtm.elementUrl"]]],
                        [22, [28, ["v", [15, "bb"]]],
                            [46, ["ba"],
                                [36]
                            ]
                        ],
                        [52, "bc", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                                [15, "l"]
                            ],
                            [8, "link_id", [16, [15, "z"], "gtm.elementId"], "link_classes", [16, [15, "z"], "gtm.elementClasses"], "link_url", ["t", [15, "bb"]], "link_domain", ["u", [15, "bb"]], "outbound", true],
                            [8]
                        ]],
                        [43, [15, "bc"], "event_callback", [15, "ba"]],
                        [52, "bd", [8]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, [43, [15, "bd"], "eventId", [16, [15, "z"], "gtm.uniqueEventId"]]]
                        ],
                        [22, [15, "l"],
                            [46, ["y", [15, "bd"]],
                                ["s", ["o"],
                                    [15, "h"],
                                    [15, "bc"],
                                    [15, "bd"]
                                ]
                            ],
                            [46, ["s", [15, "k"],
                                [15, "h"],
                                [15, "bc"],
                                [15, "bd"]
                            ]]
                        ]
                    ],
                    [15, "x"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_conversion_marking", [46, "a"],
                [50, "m", [46, "n"],
                    [52, "o", [2, [15, "j"], "parse", [7, [15, "n"]]]],
                    [22, [30, [30, [28, [15, "o"]],
                                [28, [16, [15, "o"], "args"]]
                            ],
                            [21, [17, [16, [15, "o"], "args"], "length"], 2]
                        ],
                        [46, [36]]
                    ],
                    [52, "p", [16, [16, [16, [15, "o"], "args"], 1], "contextValue"]],
                    [22, [30, [30, [30, [28, [15, "p"]],
                                    [21, [16, [15, "p"], "namespaceType"], 1]
                                ],
                                [21, [17, [16, [15, "p"], "keyParts"], "length"], 1]
                            ],
                            [21, [16, [16, [15, "p"], "keyParts"], 0], "eventName"]
                        ],
                        [46, [36, [44]]]
                    ],
                    [52, "q", [16, [16, [15, "o"], "args"], 0]],
                    [36, [1, [15, "q"],
                        [16, [15, "q"], "stringValue"]
                    ]]
                ],
                [22, [30, [28, [17, [15, "a"], "conversionRules"]],
                        [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "b", ["require", "internal.evaluateBooleanExpression"]],
                [52, "c", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", "is_conversion"],
                [52, "f", "syn_or_mod"],
                [22, [16, [15, "c"], "enableCcdGaConversions"],
                    [46, ["d", [17, [15, "a"], "instanceDestinationId"],
                            [51, "", [7, "n"],
                                [22, [2, [15, "n"], "getMetadata", [7, [15, "f"]]],
                                    [46, [36]]
                                ],
                                [52, "o", [8, "preHit", [15, "n"]]],
                                [65, "p", [17, [15, "a"], "conversionRules"],
                                    [46, [22, ["b", [17, [15, "p"], "matchingRules"],
                                            [15, "o"]
                                        ],
                                        [46, [2, [15, "n"], "setMetadata", [7, [15, "e"], true]],
                                            [4]
                                        ]
                                    ]]
                                ]
                            ]
                        ],
                        [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "g", ["require", "internal.setProductSettingsParameter"]],
                [52, "h", ["require", "internal.getProductSettingsParameter"]],
                [52, "i", ["require", "getContainerVersion"]],
                [52, "j", ["require", "JSON"]],
                [52, "k", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["i"], "containerId"]
                ]],
                [52, "l", [30, ["h", [15, "k"], "event_settings"],
                    [8]
                ]],
                [53, [41, "n"],
                    [3, "n", 0],
                    [63, [7, "n"],
                        [23, [15, "n"],
                            [17, [17, [15, "a"], "conversionRules"], "length"]
                        ],
                        [33, [15, "n"],
                            [3, "n", [0, [15, "n"], 1]]
                        ],
                        [46, [53, [52, "o", ["m", [16, [16, [17, [15, "a"], "conversionRules"],
                                [15, "n"]
                            ], "matchingRules"]]],
                            [22, [28, [15, "o"]],
                                [46, [6]]
                            ],
                            [41, "p"],
                            [3, "p", [16, [15, "l"],
                                [15, "o"]
                            ]],
                            [22, [28, [15, "p"]],
                                [46, [3, "p", [8]],
                                    [43, [15, "l"],
                                        [15, "o"],
                                        [15, "p"]
                                    ]
                                ]
                            ],
                            [43, [15, "p"], "conversion", true]
                        ]]
                    ]
                ],
                ["g", [15, "k"], "event_settings", [15, "l"]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_ga_regscope", [46, "a"],
                [50, "k", [46, "m"],
                    [22, [30, [28, [15, "i"]],
                            [21, [17, [15, "i"], "length"], 2]
                        ],
                        [46, [36, false]]
                    ],
                    [52, "n", ["l", [15, "m"]]],
                    [53, [41, "o"],
                        [3, "o", 0],
                        [63, [7, "o"],
                            [23, [15, "o"],
                                [17, [15, "n"], "length"]
                            ],
                            [33, [15, "o"],
                                [3, "o", [0, [15, "o"], 1]]
                            ],
                            [46, [53, [52, "p", [16, [15, "n"],
                                    [15, "o"]
                                ]],
                                [52, "q", [17, [15, "p"], "countryCode"]],
                                [52, "r", [17, [15, "p"], "regionCode"]],
                                [52, "s", [20, [15, "q"],
                                    [15, "i"]
                                ]],
                                [52, "t", [30, [28, [15, "r"]],
                                    [20, [15, "r"],
                                        [15, "j"]
                                    ]
                                ]],
                                [22, [1, [15, "s"],
                                        [15, "t"]
                                    ],
                                    [46, [36, true]]
                                ]
                            ]]
                        ]
                    ],
                    [36, false]
                ],
                [50, "l", [46, "m"],
                    [52, "n", [7]],
                    [22, [28, [15, "m"]],
                        [46, [36, [15, "n"]]]
                    ],
                    [52, "o", [2, [15, "m"], "split", [7, ","]]],
                    [53, [41, "p"],
                        [3, "p", 0],
                        [63, [7, "p"],
                            [23, [15, "p"],
                                [17, [15, "o"], "length"]
                            ],
                            [33, [15, "p"],
                                [3, "p", [0, [15, "p"], 1]]
                            ],
                            [46, [53, [52, "q", [2, [16, [15, "o"],
                                    [15, "p"]
                                ], "trim", [7]]],
                                [22, [28, [15, "q"]],
                                    [46, [6]]
                                ],
                                [52, "r", [2, [15, "q"], "split", [7, "-"]]],
                                [52, "s", [16, [15, "r"], 0]],
                                [52, "t", [39, [20, [17, [15, "r"], "length"], 2],
                                    [15, "q"],
                                    [44]
                                ]],
                                [22, [30, [28, [15, "s"]],
                                        [21, [17, [15, "s"], "length"], 2]
                                    ],
                                    [46, [6]]
                                ],
                                [22, [1, [21, [15, "t"],
                                            [44]
                                        ],
                                        [30, [23, [17, [15, "t"], "length"], 4],
                                            [18, [17, [15, "t"], "length"], 6]
                                        ]
                                    ],
                                    [46, [6]]
                                ],
                                [2, [15, "n"], "push", [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]]]
                            ]]
                        ]
                    ],
                    [36, [15, "n"]]
                ],
                [52, "b", ["require", "getContainerVersion"]],
                [52, "c", ["require", "internal.setRemoteConfigParameter"]],
                [52, "d", ["require", "internal.getCountryCode"]],
                [52, "e", ["require", "internal.getRegionCode"]],
                [22, [28, [17, [15, "a"], "settingsTable"]],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [41, "f"],
                [52, "g", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true],
                    [8, "name", "redact_device_info", "value", true]
                ]]],
                [52, "h", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["b"], "containerId"]
                ]],
                [52, "i", ["d"]],
                [52, "j", ["e"]],
                [53, [41, "m"],
                    [3, "m", 0],
                    [63, [7, "m"],
                        [23, [15, "m"],
                            [17, [17, [15, "a"], "settingsTable"], "length"]
                        ],
                        [33, [15, "m"],
                            [3, "m", [0, [15, "m"], 1]]
                        ],
                        [46, [53, [52, "n", [16, [17, [15, "a"], "settingsTable"],
                                [15, "m"]
                            ]],
                            [22, [30, [17, [15, "n"], "disallowAllRegions"],
                                    ["k", [17, [15, "n"], "disallowedRegions"]]
                                ],
                                [46, [53, [52, "o", [16, [15, "g"],
                                        [17, [15, "n"], "redactFieldGroup"]
                                    ]],
                                    [22, [28, [15, "o"]],
                                        [46, [6]]
                                    ],
                                    [53, [41, "p"],
                                        [3, "p", 0],
                                        [63, [7, "p"],
                                            [23, [15, "p"],
                                                [17, [15, "o"], "length"]
                                            ],
                                            [33, [15, "p"],
                                                [3, "p", [0, [15, "p"], 1]]
                                            ],
                                            [46, [53, [52, "q", [16, [15, "o"],
                                                    [15, "p"]
                                                ]],
                                                ["c", [15, "h"],
                                                    [17, [15, "q"], "name"],
                                                    [17, [15, "q"], "value"]
                                                ]
                                            ]]
                                        ]
                                    ]
                                ]]
                            ]
                        ]]
                    ]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_form", [46, "a"],
                [50, "s", [46, "x"],
                    [52, "y", [30, [16, [15, "x"],
                            [15, "l"]
                        ],
                        [8]
                    ]],
                    [43, [15, "y"], "event_usage", [7, 8]],
                    [43, [15, "x"],
                        [15, "l"],
                        [15, "y"]
                    ]
                ],
                [50, "t", [46, "x"],
                    [52, "y", [30, [16, [15, "x"],
                            [15, "l"]
                        ],
                        [8]
                    ]],
                    [43, [15, "y"],
                        [15, "k"], true
                    ],
                    [43, [15, "y"],
                        [15, "f"], true
                    ],
                    [43, [15, "x"],
                        [15, "l"],
                        [15, "y"]
                    ]
                ],
                [50, "u", [46, "x"],
                    [43, [15, "x"], "eventId", [17, [15, "a"], "gtmEventId"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "templateStorage"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_form"],
                [52, "h", "form_submit"],
                [52, "i", "form_start"],
                [52, "j", "isRegistered"],
                [52, "k", "em_event"],
                [52, "l", "eventMetadata"],
                [52, "m", [17, [15, "a"], "instanceDestinationId"]],
                [22, [1, [20, [2, [15, "m"], "indexOf", [7, "AW-"]], 0],
                        [28, [16, [15, "b"], "enableEmFormCcdPart2"]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [22, ["c", [15, "m"],
                        [15, "g"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "n", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, [15, "n"],
                    [46, ["d", [15, "m"],
                        [51, "", [7, "x"],
                            [52, "y", [2, [15, "x"], "getEventName", [7]]],
                            [52, "z", [30, [20, [15, "y"],
                                    [15, "i"]
                                ],
                                [20, [15, "y"],
                                    [15, "h"]
                                ]
                            ]],
                            [22, [30, [28, [15, "z"]],
                                    [28, [2, [15, "x"], "getMetadata", [7, [15, "k"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "m"],
                                    [15, "g"]
                                ],
                                [46, [2, [15, "x"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "x"], "setMetadata", [7, [15, "f"], false]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "x"], "setHitData", [7, "form_id", [44]]],
                                    [2, [15, "x"], "setHitData", [7, "form_name", [44]]],
                                    [2, [15, "x"], "setHitData", [7, "form_destination", [44]]],
                                    [2, [15, "x"], "setHitData", [7, "form_length", [44]]],
                                    [22, [20, [15, "y"],
                                            [15, "h"]
                                        ],
                                        [46, [2, [15, "x"], "setHitData", [7, "form_submit_text", [44]]]],
                                        [46, [22, [20, [15, "y"],
                                                [15, "i"]
                                            ],
                                            [46, [2, [15, "x"], "setHitData", [7, "first_field_id", [44]]],
                                                [2, [15, "x"], "setHitData", [7, "first_field_name", [44]]],
                                                [2, [15, "x"], "setHitData", [7, "first_field_type", [44]]],
                                                [2, [15, "x"], "setHitData", [7, "first_field_position", [44]]]
                                            ]
                                        ]]
                                    ]
                                ]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "n"],
                        [2, [15, "e"], "getItem", [7, [15, "j"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [2, [15, "e"], "setItem", [7, [15, "j"], true]],
                [52, "o", ["require", "internal.addFormInteractionListener"]],
                [52, "p", ["require", "internal.addFormSubmitListener"]],
                [52, "q", ["require", "internal.getDestinationIds"]],
                [52, "r", ["require", "internal.sendGtagEvent"]],
                [52, "v", [8]],
                [52, "w", [51, "", [7, "x"],
                    [52, "y", [16, [15, "x"], "gtm.elementId"]],
                    [22, [16, [15, "v"],
                            [15, "y"]
                        ],
                        [46, [36]]
                    ],
                    [43, [15, "v"],
                        [15, "y"], true
                    ],
                    [52, "z", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                            [15, "n"]
                        ],
                        [8, "form_id", [15, "y"], "form_name", [16, [15, "x"], "gtm.interactedFormName"], "form_destination", [16, [15, "x"], "gtm.elementUrl"], "form_length", [16, [15, "x"], "gtm.interactedFormLength"], "first_field_id", [16, [15, "x"], "gtm.interactedFormFieldId"], "first_field_name", [16, [15, "x"], "gtm.interactedFormFieldName"], "first_field_type", [16, [15, "x"], "gtm.interactedFormFieldType"], "first_field_position", [16, [15, "x"], "gtm.interactedFormFieldPosition"]],
                        [8]
                    ]],
                    [52, "ba", [8]],
                    ["s", [15, "ba"]],
                    [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                        [46, ["u", [15, "ba"]]]
                    ],
                    [22, [15, "n"],
                        [46, ["t", [15, "ba"]],
                            ["r", ["q"],
                                [15, "i"],
                                [15, "z"],
                                [15, "ba"]
                            ]
                        ],
                        [46, ["r", [15, "m"],
                            [15, "i"],
                            [15, "z"],
                            [15, "ba"]
                        ]]
                    ]
                ]],
                ["o", [15, "w"]],
                ["p", [51, "", [7, "x", "y"],
                        [22, [16, [15, "b"], "enableAlwaysSendFormStart"],
                            [46, ["w", [15, "x"]]]
                        ],
                        [52, "z", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                                [15, "n"]
                            ],
                            [8, "form_id", [16, [15, "x"], "gtm.elementId"], "form_name", [16, [15, "x"], "gtm.interactedFormName"], "form_destination", [16, [15, "x"], "gtm.elementUrl"], "form_length", [16, [15, "x"], "gtm.interactedFormLength"], "form_submit_text", [16, [15, "x"], "gtm.formSubmitButtonText"]],
                            [8]
                        ]],
                        [43, [15, "z"], "event_callback", [15, "y"]],
                        [52, "ba", [8]],
                        ["s", [15, "ba"]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, ["u", [15, "ba"]]]
                        ],
                        [22, [15, "n"],
                            [46, ["t", [15, "ba"]],
                                ["r", ["q"],
                                    [15, "h"],
                                    [15, "z"],
                                    [15, "ba"]
                                ]
                            ],
                            [46, ["r", [15, "m"],
                                [15, "h"],
                                [15, "z"],
                                [15, "ba"]
                            ]]
                        ]
                    ],
                    [8, "waitForCallbacks", false, "checkValidation", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_download", [46, "a"],
                [50, "s", [46, "y"],
                    [36, [1, [15, "y"],
                        [21, [2, [2, [15, "y"], "toLowerCase", [7]], "match", [7, [15, "r"]]],
                            [45]
                        ]
                    ]]
                ],
                [50, "t", [46, "y"],
                    [52, "z", [2, [17, [15, "y"], "pathname"], "split", [7, "."]]],
                    [52, "ba", [39, [18, [17, [15, "z"], "length"], 1],
                        [16, [15, "z"],
                            [37, [17, [15, "z"], "length"], 1]
                        ], ""
                    ]],
                    [36, [16, [2, [15, "ba"], "split", [7, "/"]], 0]]
                ],
                [50, "u", [46, "y"],
                    [36, [39, [12, [2, [17, [15, "y"], "pathname"], "substring", [7, 0, 1]], "/"],
                        [17, [15, "y"], "pathname"],
                        [0, "/", [17, [15, "y"], "pathname"]]
                    ]]
                ],
                [50, "v", [46, "y"],
                    [41, "z"],
                    [3, "z", ""],
                    [22, [1, [15, "y"],
                            [17, [15, "y"], "href"]
                        ],
                        [46, [53, [41, "ba"],
                            [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]],
                            [3, "z", [39, [23, [15, "ba"], 0],
                                [17, [15, "y"], "href"],
                                [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]
                            ]]
                        ]]
                    ],
                    [36, [15, "z"]]
                ],
                [50, "x", [46, "y"],
                    [52, "z", [8]],
                    [43, [15, "z"],
                        [15, "j"], true
                    ],
                    [43, [15, "z"],
                        [15, "f"], true
                    ],
                    [43, [15, "y"], "eventMetadata", [15, "z"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "templateStorage"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_downloads"],
                [52, "h", "file_download"],
                [52, "i", "isRegistered"],
                [52, "j", "em_event"],
                [52, "k", [17, [15, "a"], "instanceDestinationId"]],
                [22, ["c", [15, "k"],
                        [15, "g"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, [15, "l"],
                    [46, ["d", [15, "k"],
                        [51, "", [7, "y"],
                            [22, [30, [21, [2, [15, "y"], "getEventName", [7]],
                                        [15, "h"]
                                    ],
                                    [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "k"],
                                    [15, "g"]
                                ],
                                [46, [2, [15, "y"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "y"], "setMetadata", [7, [15, "f"], false]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "y"], "setHitData", [7, "link_id", [44]]],
                                    [2, [15, "y"], "setHitData", [7, "link_url", [44]]],
                                    [2, [15, "y"], "setHitData", [7, "link_text", [44]]],
                                    [2, [15, "y"], "setHitData", [7, "file_name", [44]]],
                                    [2, [15, "y"], "setHitData", [7, "file_extension", [44]]]
                                ]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "l"],
                        [2, [15, "e"], "getItem", [7, [15, "i"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "m", ["require", "internal.addDataLayerEventListener"]],
                [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]],
                [52, "o", ["require", "internal.getDestinationIds"]],
                [52, "p", ["require", "parseUrl"]],
                [52, "q", ["require", "internal.sendGtagEvent"]],
                [52, "r", [0, "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma"]],
                [52, "w", ["n", [8, "checkValidation", true]]],
                [22, [28, [15, "w"]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [2, [15, "e"], "setItem", [7, [15, "i"], true]],
                ["m", "gtm.linkClick", [51, "", [7, "y", "z"],
                        ["z"],
                        [52, "ba", [8]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, [43, [15, "ba"], "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]]
                        ],
                        [52, "bb", [16, [15, "y"], "gtm.elementUrl"]],
                        [52, "bc", ["p", [15, "bb"]]],
                        [22, [28, [15, "bc"]],
                            [46, [36]]
                        ],
                        [52, "bd", ["t", [15, "bc"]]],
                        [22, [28, ["s", [15, "bd"]]],
                            [46, [36]]
                        ],
                        [52, "be", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                                [15, "l"]
                            ],
                            [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_url", ["v", [15, "bc"]], "link_text", [16, [15, "y"], "gtm.elementText"], "file_name", ["u", [15, "bc"]], "file_extension", [15, "bd"]],
                            [8]
                        ]],
                        [22, [15, "l"],
                            [46, ["x", [15, "ba"]],
                                ["q", ["o"],
                                    [15, "h"],
                                    [15, "be"],
                                    [15, "ba"]
                                ]
                            ],
                            [46, ["q", [15, "k"],
                                [15, "h"],
                                [15, "be"],
                                [15, "ba"]
                            ]]
                        ]
                    ],
                    [15, "w"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_page_view", [46, "a"],
                [50, "s", [46, "t"],
                    [52, "u", [8]],
                    [43, [15, "u"],
                        [15, "k"], true
                    ],
                    [43, [15, "u"],
                        [15, "g"], true
                    ],
                    [43, [15, "t"], "eventMetadata", [15, "u"]]
                ],
                [22, [28, [17, [15, "a"], "historyEvents"]],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "internal.setRemoteConfigParameter"]],
                [52, "f", ["require", "templateStorage"]],
                [52, "g", "speculative"],
                [52, "h", "ae_block_history"],
                [52, "i", "page_view"],
                [52, "j", "isRegistered"],
                [52, "k", "em_event"],
                [52, "l", [17, [15, "a"], "instanceDestinationId"]],
                [22, ["c", [15, "l"],
                        [15, "h"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "m", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, [15, "m"],
                    [46, ["d", [15, "l"],
                        [51, "", [7, "t"],
                            [22, [30, [21, [2, [15, "t"], "getEventName", [7]],
                                        [15, "i"]
                                    ],
                                    [28, [2, [15, "t"], "getMetadata", [7, [15, "k"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "l"],
                                    [15, "h"]
                                ],
                                [46, [2, [15, "t"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "t"], "setMetadata", [7, [15, "g"], false]],
                            ["e", [15, "l"], "page_referrer", [2, [15, "t"], "getHitData", [7, "page_referrer"]]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "t"], "setHitData", [7, "page_location", [44]]],
                                    [2, [15, "t"], "setHitData", [7, "page_referrer", [44]]]
                                ]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "m"],
                        [2, [15, "f"], "getItem", [7, [15, "j"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "n", ["require", "internal.addDataLayerEventListener"]],
                [52, "o", ["require", "internal.enableAutoEventOnHistoryChange"]],
                [52, "p", ["require", "internal.getDestinationIds"]],
                [52, "q", ["require", "internal.sendGtagEvent"]],
                [52, "r", ["o", [8, "interval", 1000]]],
                [22, [28, [15, "r"]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [2, [15, "f"], "setItem", [7, [15, "j"], true]],
                ["n", "gtm.historyChange-v2", [51, "", [7, "t", "u"],
                        ["u"],
                        [52, "v", [16, [15, "t"], "gtm.oldUrl"]],
                        [22, [20, [16, [15, "t"], "gtm.newUrl"],
                                [15, "v"]
                            ],
                            [46, [36]]
                        ],
                        [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]],
                        [22, [1, [1, [21, [15, "w"], "pushState"],
                                    [21, [15, "w"], "popstate"]
                                ],
                                [21, [15, "w"], "replaceState"]
                            ],
                            [46, [36]]
                        ],
                        [52, "x", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]],
                                [15, "m"]
                            ],
                            [8, "page_location", [16, [15, "t"], "gtm.newUrl"], "page_referrer", [15, "v"]],
                            [8]
                        ]],
                        [52, "y", [8]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, [43, [15, "y"], "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]]
                        ],
                        [22, [15, "m"],
                            [46, ["s", [15, "y"]],
                                ["q", ["p"],
                                    [15, "i"],
                                    [15, "x"],
                                    [15, "y"]
                                ]
                            ],
                            [46, ["q", [15, "l"],
                                    [15, "i"],
                                    [15, "x"],
                                    [15, "y"]
                                ],
                                ["e", [15, "l"], "page_referrer", [15, "v"]]
                            ]
                        ]
                    ],
                    [15, "r"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_site_search", [46, "a"],
                [50, "f", [46, "k"],
                    [52, "l", [2, [30, [15, "k"], ""], "split", [7, ","]]],
                    [53, [41, "m"],
                        [3, "m", 0],
                        [63, [7, "m"],
                            [23, [15, "m"],
                                [17, [15, "l"], "length"]
                            ],
                            [33, [15, "m"],
                                [3, "m", [0, [15, "m"], 1]]
                            ],
                            [46, [53, [52, "n", ["c", [2, [16, [15, "l"],
                                    [15, "m"]
                                ], "trim", [7]]]],
                                [22, [21, [15, "n"],
                                        [44]
                                    ],
                                    [46, [36, [15, "n"]]]
                                ]
                            ]]
                        ]
                    ]
                ],
                [50, "g", [46, "k", "l"],
                    [52, "m", [8, "search_term", [15, "k"]]],
                    [52, "n", [2, [30, [15, "l"], ""], "split", [7, ","]]],
                    [53, [41, "o"],
                        [3, "o", 0],
                        [63, [7, "o"],
                            [23, [15, "o"],
                                [17, [15, "n"], "length"]
                            ],
                            [33, [15, "o"],
                                [3, "o", [0, [15, "o"], 1]]
                            ],
                            [46, [53, [52, "p", [2, [16, [15, "n"],
                                    [15, "o"]
                                ], "trim", [7]]],
                                [52, "q", ["c", [15, "p"]]],
                                [22, [21, [15, "q"],
                                        [44]
                                    ],
                                    [46, [43, [15, "m"],
                                        [0, "q_", [15, "p"]],
                                        [15, "q"]
                                    ]]
                                ]
                            ]]
                        ]
                    ],
                    [36, [15, "m"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "getQueryParameters"]],
                [52, "d", ["require", "internal.sendGtagEvent"]],
                [52, "e", ["require", "getContainerVersion"]],
                [52, "h", ["f", [17, [15, "a"], "searchQueryParams"]]],
                [52, "i", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["e"], "containerId"]
                ]],
                [52, "j", [8, "deferrable", true]],
                [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                    [46, [43, [15, "j"], "eventId", [17, [15, "a"], "gtmEventId"]]]
                ],
                [22, [15, "h"],
                    [46, [53, [52, "k", [39, [28, [28, [17, [15, "a"], "includeParams"]]],
                            ["g", [15, "h"],
                                [17, [15, "a"], "additionalQueryParams"]
                            ],
                            [8]
                        ]],
                        ["d", [15, "i"], "view_search_results", [15, "k"],
                            [15, "j"]
                        ]
                    ]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__set_product_settings", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["c"], "containerId"]
                ]],
                ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]],
                ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ogt_google_signals", [46, "a"],
                [52, "b", ["require", "internal.setProductSettingsParameter"]],
                [52, "c", ["require", "getContainerVersion"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [30, [17, [15, "a"], "instanceDestinationId"],
                    [17, ["c"], "containerId"]
                ]],
                ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]],
                [22, [17, [15, "d"], "enableGa4OnoRemarketing"],
                    [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__ccd_em_scroll", [46, "a"],
                [50, "r", [46, "s"],
                    [52, "t", [8]],
                    [43, [15, "t"],
                        [15, "j"], true
                    ],
                    [43, [15, "t"],
                        [15, "f"], true
                    ],
                    [43, [15, "s"], "eventMetadata", [15, "t"]]
                ],
                [52, "b", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "c", ["require", "internal.getProductSettingsParameter"]],
                [52, "d", ["require", "internal.registerCcdCallback"]],
                [52, "e", ["require", "templateStorage"]],
                [52, "f", "speculative"],
                [52, "g", "ae_block_scroll"],
                [52, "h", "scroll"],
                [52, "i", "isRegistered"],
                [52, "j", "em_event"],
                [52, "k", [17, [15, "a"], "instanceDestinationId"]],
                [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]],
                [22, ["c", [15, "k"],
                        [15, "g"]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [22, [15, "l"],
                    [46, ["d", [15, "k"],
                        [51, "", [7, "s"],
                            [22, [30, [21, [2, [15, "s"], "getEventName", [7]],
                                        [15, "h"]
                                    ],
                                    [28, [2, [15, "s"], "getMetadata", [7, [15, "j"]]]]
                                ],
                                [46, [36]]
                            ],
                            [22, ["c", [15, "k"],
                                    [15, "g"]
                                ],
                                [46, [2, [15, "s"], "abort", [7]],
                                    [36]
                                ]
                            ],
                            [2, [15, "s"], "setMetadata", [7, [15, "f"], false]],
                            [22, [28, [17, [15, "a"], "includeParams"]],
                                [46, [2, [15, "s"], "setHitData", [7, "percent_scrolled", [44]]]]
                            ]
                        ]
                    ]]
                ],
                [22, [1, [15, "l"],
                        [2, [15, "e"], "getItem", [7, [15, "i"]]]
                    ],
                    [46, [2, [15, "a"], "gtmOnSuccess", [7]],
                        [36]
                    ]
                ],
                [52, "m", ["require", "internal.addDataLayerEventListener"]],
                [52, "n", ["require", "internal.enableAutoEventOnScroll"]],
                [52, "o", ["require", "internal.getDestinationIds"]],
                [52, "p", ["require", "internal.sendGtagEvent"]],
                [52, "q", ["n", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]],
                [22, [28, [15, "q"]],
                    [46, [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [2, [15, "e"], "setItem", [7, [15, "i"], true]],
                ["m", "gtm.scrollDepth", [51, "", [7, "s", "t"],
                        ["t"],
                        [52, "u", [8]],
                        [22, [28, [28, [16, [15, "b"], "enableSendGtagEventId"]]],
                            [46, [43, [15, "u"], "eventId", [16, [15, "s"], "gtm.uniqueEventId"]]]
                        ],
                        [22, [28, [15, "l"]],
                            [46, [53, [52, "w", [39, [28, [28, [17, [15, "a"], "includeParams"]]],
                                    [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]],
                                    [8]
                                ]],
                                ["p", [15, "k"],
                                    [15, "h"],
                                    [15, "w"],
                                    [15, "u"]
                                ],
                                [36]
                            ]]
                        ],
                        [52, "v", [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]]],
                        ["r", [15, "u"]],
                        ["p", ["o"],
                            [15, "h"],
                            [15, "v"],
                            [15, "u"]
                        ]
                    ],
                    [15, "q"]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ]
        ],
        "permissions": { "__ccd_em_video": { "listen_data_layer": { "accessType": "specific", "allowedEvents": ["gtm.video"] }, "process_dom_events": { "targets": [{ "targetType": "element", "eventName": "onStateChange" }, { "targetType": "element", "eventName": "onPlaybackRateChange" }] }, "access_template_storage": {} }, "__ccd_em_outbound_click": { "get_url": { "urlParts": "any", "queriesAllowed": "any" }, "listen_data_layer": { "accessType": "specific", "allowedEvents": ["gtm.linkClick"] }, "process_dom_events": { "targets": [{ "targetType": "document", "eventName": "click" }, { "targetType": "document", "eventName": "auxclick" }] }, "access_template_storage": {} }, "__ccd_conversion_marking": { "read_container_data": {} }, "__ccd_ga_regscope": { "read_container_data": {} }, "__ccd_em_form": { "access_template_storage": {} }, "__ccd_em_download": { "listen_data_layer": { "accessType": "specific", "allowedEvents": ["gtm.linkClick"] }, "process_dom_events": { "targets": [{ "targetType": "document", "eventName": "click" }, { "targetType": "document", "eventName": "auxclick" }] }, "access_template_storage": {} }, "__ccd_em_page_view": { "listen_data_layer": { "accessType": "specific", "allowedEvents": ["gtm.historyChange-v2"] }, "process_dom_events": { "targets": [{ "targetType": "window", "eventName": "pushstate" }, { "targetType": "window", "eventName": "popstate" }] }, "access_template_storage": {} }, "__ccd_em_site_search": { "get_url": { "urlParts": "any", "queriesAllowed": "any" }, "read_container_data": {} }, "__set_product_settings": { "read_container_data": {} }, "__ogt_google_signals": { "read_container_data": {} }, "__ccd_em_scroll": { "listen_data_layer": { "accessType": "specific", "allowedEvents": ["gtm.scrollDepth"] }, "process_dom_events": { "targets": [{ "targetType": "window", "eventName": "resize" }, { "targetType": "window", "eventName": "scroll" }] }, "access_template_storage": {} } }

        ,
        "security_groups": {
            "google": ["__ccd_em_video", "__ccd_em_outbound_click", "__ccd_conversion_marking", "__ccd_ga_regscope", "__ccd_em_form", "__ccd_em_download", "__ccd_em_page_view", "__ccd_em_site_search", "__set_product_settings", "__ogt_google_signals", "__ccd_em_scroll"]
        },
        "infra": ["__ccd_em_video", "__ccd_conversion_marking", "__ogt_google_signals", "__set_product_settings", "__ccd_em_scroll", "__ccd_em_page_view", "__ccd_em_download", "__ccd_ga_regscope", "__ccd_em_site_search", "__ccd_em_form", "__ccd_em_outbound_click"]

    };


    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = function(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } },
        da = function(a) { return a.raw = a },
        ea = "function" == typeof Object.create ? Object.create : function(a) { var b = function() {};
            b.prototype = a; return new b },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else { var ha;
        a: { var ja = { a: !0 },
                ka = {}; try { ka.__proto__ = ja;
                ha = ka.a; break a } catch (a) {}
            ha = !1 }
        fa = ha ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var la = fa,
        ma = function(a, b) { a.prototype = ea(b.prototype);
            a.prototype.constructor = a; if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d) } else a[c] = b[c];
            a.sl = b.prototype },
        na = this || self,
        oa = function(a) { return a };
    var pa = function(a, b) { this.h = a;
        this.B = b };
    var ra = function(a) { return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10) },
        sa = function() { this.D = {};
            this.F = !1;
            this.I = {} },
        ta = function(a, b) { var c = [],
                d; for (d in a.D)
                if (a.D.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d); break;
                    case 2:
                        c.push(a.get(d)); break;
                    case 3:
                        c.push([d, a.get(d)]) }
                return c };
    sa.prototype.get = function(a) { return this.D["dust." + a] };
    sa.prototype.set = function(a, b) { this.F || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.D[a] = b)) };
    sa.prototype.has = function(a) { return this.D.hasOwnProperty("dust." + a) };
    var ua = function(a, b) { b = "dust." + b;
        a.F || a.I.hasOwnProperty(b) || delete a.D[b] };
    sa.prototype.Mb = function() { this.F = !0 };
    sa.prototype.Me = function() { return this.F };
    var va = function(a) { this.B = new sa;
        this.h = [];
        this.D = !1;
        a = a || []; for (var b in a) a.hasOwnProperty(b) && (ra(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b])) };
    ba = va.prototype;
    ba.toString = function(a) { if (a && 0 <= a.indexOf(this)) return ""; for (var b = [], c = 0; c < this.h.length; c++) { var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof va ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString()) } return b.join(",") };
    ba.set = function(a, b) { if (!this.D)
            if ("length" === a) { if (!ra(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b) } else ra(a) ? this.h[Number(a)] = b : this.B.set(a, b) };
    ba.get = function(a) { return "length" === a ? this.length() : ra(a) ? this.h[Number(a)] : this.B.get(a) };
    ba.length = function() { return this.h.length };
    ba.Lb = function() { for (var a = ta(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + ""); return new va(a) };
    var wa = function(a, b) { ra(b) ? delete a.h[Number(b)] : ua(a.B, b) };
    ba = va.prototype;
    ba.pop = function() { return this.h.pop() };
    ba.push = function(a) { return this.h.push.apply(this.h, Array.prototype.slice.call(arguments)) };
    ba.shift = function() { return this.h.shift() };
    ba.splice = function(a, b, c) { return new va(this.h.splice.apply(this.h, arguments)) };
    ba.unshift = function(a) { return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments)) };
    ba.has = function(a) { return ra(a) && this.h.hasOwnProperty(a) || this.B.has(a) };
    ba.Mb = function() { this.D = !0;
        Object.freeze(this.h);
        this.B.Mb() };
    ba.Me = function() { return this.D };
    var xa = function() { this.quota = {} };
    xa.prototype.reset = function() { this.quota = {} };
    var ya = function(a, b) { this.T = a;
        this.I = function(c, d, e) { return c.apply(d, e) };
        this.D = b;
        this.B = new sa;
        this.h = this.F = void 0 };
    ya.prototype.add = function(a, b) { za(this, a, b, !1) };
    var za = function(a, b, c, d) { if (!a.B.Me())
            if (d) { var e = a.B;
                e.set(b, c);
                e.I["dust." + b] = !0 } else a.B.set(b, c) };
    ya.prototype.set = function(a, b) { this.B.Me() || (!this.B.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.B.set(a, b)) };
    ya.prototype.get = function(a) { return this.B.has(a) ? this.B.get(a) : this.D ? this.D.get(a) : void 0 };
    ya.prototype.has = function(a) { return !!this.B.has(a) || !(!this.D || !this.D.has(a)) };
    var Aa = function(a) { var b = new ya(a.T, a);
        a.F && (b.F = a.F);
        b.I = a.I;
        b.h = a.h; return b };
    var Ba = function() {},
        Ca = function(a) { return "function" === typeof a },
        k = function(a) { return "string" === typeof a },
        Da = function(a) { return "number" === typeof a && !isNaN(a) },
        Ea = Array.isArray,
        Ha = function(a, b) { if (a && Ea(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c] },
        Ja = function(a, b) { if (!Da(a) || !Da(b) || a > b) a = 0, b = 2147483647; return Math.floor(Math.random() * (b - a + 1) + a) },
        La = function(a, b) { for (var c = new Ka, d = 0; d < a.length; d++) c.set(a[d], !0); for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1 },
        Ma = function(a,
            b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]) },
        Na = function(a) { return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee")) },
        Oa = function(a) { return Math.round(Number(a)) || 0 },
        Pa = function(a) { return "false" === String(a).toLowerCase() ? !1 : !!a },
        Qa = function(a) { var b = []; if (Ea(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c])); return b },
        Ra = function(a) { return a ? a.replace(/^\s+|\s+$/g, "") : "" },
        Sa = function() { return new Date(Date.now()) },
        Ta = function() { return Sa().getTime() },
        Ka = function() { this.prefix = "gtm.";
            this.values = {} };
    Ka.prototype.set = function(a, b) { this.values[this.prefix + a] = b };
    Ka.prototype.get = function(a) { return this.values[this.prefix + a] };
    var Ua = function(a, b, c) { return a && a.hasOwnProperty(b) ? a[b] : c },
        Va = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = void 0; try { c() } catch (d) {} } } },
        Wa = function(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) },
        Xa = function(a) { for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1 },
        Ya = function(a, b) { for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []); return c },
        ab = function(a, b) {
            var c = m;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        bb = function(a, b) { for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b; return c },
        cb = /^\w{1,9}$/,
        db = function(a, b) { a = a || {};
            b = b || ","; var c = [];
            Ma(a, function(d, e) { cb.test(d) && e && c.push(d) }); return c.join(b) },
        eb = function(a, b) {
            function c() {++d === b && (e(), e = null, c.done = !0) } var d = 0,
                e = a;
            c.done = !1; return c };
    var fb = function(a, b) { sa.call(this);
        this.T = a;
        this.Ca = b };
    ma(fb, sa);
    fb.prototype.toString = function() { return this.T };
    fb.prototype.Lb = function() { return new va(ta(this, 1)) };
    fb.prototype.h = function(a, b) { return this.Ca.apply(new gb(this, a), Array.prototype.slice.call(arguments, 1)) };
    fb.prototype.B = function(a, b) { try { return this.h.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (c) {} };
    var ib = function(a, b) { for (var c, d = 0; d < b.length && !(c = hb(a, b[d]), c instanceof pa); d++); return c },
        hb = function(a, b) { try { var c = a.get(String(b[0])); if (!(c && c instanceof fb)) throw Error("Attempting to execute non-function " + b[0] + "."); return c.h.apply(c, [a].concat(b.slice(1))) } catch (e) { var d = a.F;
                d && d(e, b.context ? { id: b[0], line: b.context.line } : null); throw e; } },
        gb = function(a, b) { this.B = a;
            this.h = b },
        z = function(a, b) { return Ea(b) ? hb(a.h, b) : b },
        F = function(a) { return a.B.T };
    var jb = function() { sa.call(this) };
    ma(jb, sa);
    jb.prototype.Lb = function() { return new va(ta(this, 1)) };
    var kb = {
        map: function(a) { for (var b = new jb, c = 0; c < arguments.length - 1; c += 2) { var d = z(this, arguments[c]) + "",
                    e = z(this, arguments[c + 1]);
                b.set(d, e) } return b },
        list: function(a) { for (var b = new va, c = 0; c < arguments.length; c++) { var d = z(this, arguments[c]);
                b.push(d) } return b },
        fn: function(a, b, c) {
            var d = this.h,
                e = z(this, b);
            if (!(e instanceof va)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new fb(a, function() {
                return function(g) {
                    var h = Aa(d);
                    void 0 ===
                        h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = z(this, l[n]), l[n] instanceof pa) return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new va(l));
                    var r = ib(h, f);
                    if (r instanceof pa) return "return" === r.h ? r.B : r
                }
            }())
        },
        control: function(a, b) { return new pa(a, z(this, b)) },
        undefined: function() {}
    };
    var lb = function() { this.D = new xa;
            this.h = new ya(this.D) },
        mb = function(a, b, c) { var d = new fb(b, c);
            d.Mb();
            a.h.set(b, d) },
        nb = function(a, b, c) { kb.hasOwnProperty(b) && mb(a, c || b, kb[b]) };
    lb.prototype.execute = function(a, b) { var c = Array.prototype.slice.call(arguments, 0); return this.B(c) };
    lb.prototype.B = function(a) { for (var b, c = 0; c < arguments.length; c++) b = hb(this.h, arguments[c]); return b };
    lb.prototype.F = function(a, b) { var c = Aa(this.h);
        c.h = a; for (var d, e = 1; e < arguments.length; e++) d = d = hb(c, arguments[e]); return d };

    function ob() { for (var a = pb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c; return b }

    function qb() { var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_"; return a + "." }
    var pb, rb;

    function sb(a) { pb = pb || qb();
        rb = rb || ob(); for (var b = [], c = 0; c < a.length; c += 3) { var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                l = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(pb[l], pb[n], pb[p], pb[q]) } return b.join("") }

    function tb(a) {
        function b(l) { for (; d < a.length;) { var n = a.charAt(d++),
                    p = rb[n]; if (null != p) return p; if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n); } return l }
        pb = pb || qb();
        rb = rb || ob(); for (var c = "", d = 0;;) { var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64); if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h))) } };
    var ub = {},
        vb = function(a, b) { ub[a] = ub[a] || [];
            ub[a][b] = !0 },
        wb = function() { delete ub.GA4_EVENT },
        xb = function(a) { var b = ub[a]; if (!b || 0 === b.length) return ""; for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d)); return sb(c.join("")).replace(/\.+$/, "") };
    var yb = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1 };
    var zb, Ab = function() { if (void 0 === zb) { var a = null,
                b = na.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: oa, createScript: oa, createScriptURL: oa }) } catch (c) { na.console && na.console.error(c.message) }
                zb = a } else zb = a } return zb };
    var Cb = function(a, b) { this.h = b === Bb ? a : "" };
    Cb.prototype.toString = function() { return this.h + "" };
    var Db = function(a) { return a instanceof Cb && a.constructor === Cb ? a.h : "type_error:TrustedResourceUrl" },
        Bb = {},
        Eb = function(a) { var b = a,
                c = Ab(),
                d = c ? c.createScriptURL(b) : b; return new Cb(d, Bb) };
    var Fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Gb() { var a = na.navigator; if (a) { var b = a.userAgent; if (b) return b } return "" }

    function Hb(a) { return -1 != Gb().indexOf(a) };

    function Ib() { return Hb("Firefox") || Hb("FxiOS") }

    function Jb() { return (Hb("Chrome") || Hb("CriOS")) && !Hb("Edge") || Hb("Silk") };
    var Kb = {},
        Lb = function(a, b) { this.h = b === Kb ? a : "" };
    Lb.prototype.toString = function() { return this.h.toString() };
    var Mb = function(a) { return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeHtml" },
        Nb = function(a) { var b = a,
                c = Ab(),
                d = c ? c.createHTML(b) : b; return new Lb(d, Kb) };
    /*
        
         SPDX-License-Identifier: Apache-2.0
        */
    var Ob = {};
    var Pb = function() {},
        Qb = function(a) { this.h = a };
    ma(Qb, Pb);
    Qb.prototype.toString = function() { return this.h };

    function Rb(a, b) { var c = [new Qb(Sb[0].toLowerCase(), Ob)]; if (0 === c.length) throw Error("No prefixes are provided"); var d = c.map(function(f) { var g; if (f instanceof Qb) g = f.h;
                else throw Error(""); return g }),
            e = b.toLowerCase(); if (d.every(function(f) { return 0 !== e.indexOf(f) })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true") }

    function Tb(a) { if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript."); if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet."); };
    var m = window,
        G = document,
        Ub = navigator,
        Vb = G.currentScript && G.currentScript.src,
        Wb = function(a, b) { var c = m[a];
            m[a] = void 0 === c ? b : c; return m[a] },
        Xb = function(a, b) { b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() { a.readyState in { loaded: 1, complete: 1 } && (a.onreadystatechange = null, b()) }) },
        Yb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Zb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };

    function $b(a, b, c) { b && Ma(b, function(d, e) { d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e) }) }
    var ac = function(a, b, c, d, e) { var f = G.createElement("script");
            $b(f, d, Yb);
            f.type = "text/javascript";
            f.async = !0; var g = Eb(a);
            f.src = Db(g); var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            Xb(f, b);
            c && (f.onerror = c); if (e) e.appendChild(f);
            else { var q = G.getElementsByTagName("script")[0] || G.body || G.head;
                q.parentNode.insertBefore(f, q) } return f },
        bc = function() {
            if (Vb) {
                var a =
                    Vb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        cc = function(a, b, c, d, e) { var f;
            f = void 0 === f ? !0 : f; var g = e,
                h = !1;
            g || (g = G.createElement("iframe"), h = !0);
            $b(g, c, Zb);
            d && Ma(d, function(n, p) { g.dataset[n] = p });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden"); if (h) { var l = G.body && G.body.lastChild || G.body || G.head;
                l.parentNode.insertBefore(g, l) }
            Xb(g, b);
            void 0 !== a && (g.src = a); return g },
        dc = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload =
                function() { d.onload = null;
                    b && b() };
            d.onerror = function() { d.onerror = null;
                c && c() };
            d.src = a
        },
        ec = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c) },
        fc = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c) },
        H = function(a) { m.setTimeout(a, 0) },
        gc = function(a, b) { return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null },
        hc = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,
                ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        ic = function(a) { var b = G.createElement("div"),
                c = b,
                d = Nb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Tb(c);
            c.innerHTML = Mb(d);
            b = b.lastChild; for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild)); return e },
        jc = function(a, b, c) { c = c || 100; for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0; for (var f = a, g = 0; f && g <= c; g++) { if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement } return null },
        kc = function(a) {
            var b;
            try { b = Ub.sendBeacon && Ub.sendBeacon(a) } catch (c) {
                vb("TAGGING",
                    15)
            }
            b || dc(a)
        },
        lc = function(a, b) { var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal); return c },
        mc = function() { var a = m.performance; if (a && Ca(a.now)) return a.now() };
    var nc = function(a, b) { return z(this, a) && z(this, b) },
        oc = function(a, b) { return z(this, a) === z(this, b) },
        pc = function(a, b) { return z(this, a) || z(this, b) },
        rc = function(a, b) { a = z(this, a);
            b = z(this, b); return -1 < String(a).indexOf(String(b)) },
        sc = function(a, b) { a = String(z(this, a));
            b = String(z(this, b)); return a.substring(0, b.length) === b },
        tc = function(a, b) { a = z(this, a);
            b = z(this, b); switch (a) {
                case "pageLocation":
                    var c = m.location.href;
                    b instanceof jb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, "")); return c } };
    var vc = function() { this.h = new lb;
        uc(this) };
    vc.prototype.execute = function(a) { return this.h.B(a) };
    var uc = function(a) { nb(a.h, "map"); var b = function(c, d) { mb(a.h, c, d) };
        b("and", nc);
        b("contains", rc);
        b("equals", oc);
        b("or", pc);
        b("startsWith", sc);
        b("variable", tc) };
    var wc = function(a) { if (a instanceof wc) return a;
        this.Ya = a };
    wc.prototype.toString = function() { return String(this.Ya) };
    var yc = function(a) { sa.call(this);
        this.h = a;
        this.set("then", xc(this));
        this.set("catch", xc(this, !0));
        this.set("finally", xc(this, !1, !0)) };
    ma(yc, jb);
    var xc = function(a, b, c) { b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c; return new fb("", function(d, e) { b && (e = d, d = void 0);
            c && (e = d);
            d instanceof fb || (d = void 0);
            e instanceof fb || (e = void 0); var f = Aa(this.h),
                g = function(l) { return function(n) { return c ? (l.h(f), a.h) : l.h(f, n) } },
                h = a.h.then(d && g(d), e && g(e)); return new yc(h) }) };
    /*
         jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var zc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ac = function(a) { if (null == a) return String(a); var b = zc.exec(Object.prototype.toString.call(Object(a))); return b ? b[1].toLowerCase() : "object" },
        Bc = function(a, b) { return Object.prototype.hasOwnProperty.call(Object(a), b) },
        Cc = function(a) {
            if (!a || "object" != Ac(a) || a.nodeType || a == a.window) return !1;
            try { if (a.constructor && !Bc(a, "constructor") && !Bc(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            for (var b in a);
            return void 0 ===
                b || Bc(a, b)
        },
        I = function(a, b) { var c = b || ("array" == Ac(a) ? [] : {}),
                d; for (d in a)
                if (Bc(a, d)) { var e = a[d]; "array" == Ac(e) ? ("array" != Ac(c[d]) && (c[d] = []), c[d] = I(e, c[d])) : Cc(e) ? (Cc(c[d]) || (c[d] = {}), c[d] = I(e, c[d])) : c[d] = e }
            return c };
    var Ec = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, l) { for (var n = ta(h, 1), p = 0; p < n.length; p++) l[n[p]] = g(h.get(n[p])) },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (h instanceof va) { var n = [];
                        d.push(h);
                        e.push(n); for (var p = h.Lb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q))); return n }
                    if (h instanceof yc) return h.h;
                    if (h instanceof jb) { var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r); return r }
                    if (h instanceof fb) {
                        var u = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), w = 0; w < v.length; w++) v[w] = Dc(v[w],
                                b, c);
                            var x = new ya(b ? b.T : new xa);
                            b && (x.h = b.h);
                            return g(h.h.apply(h, [x].concat(v)))
                        };
                        d.push(h);
                        e.push(u);
                        f(h, u);
                        return u
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0; break;
                        case 2:
                            t = !1; break;
                        case 3:
                            t = !1; break;
                        default:
                    }
                    if (h instanceof wc && t) return h.Ya;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null }
                };
            return g(a)
        },
        Dc = function(a,
            b, c) {
            var d = [],
                e = [],
                f = function(h, l) { for (var n in h) h.hasOwnProperty(n) && l.set(n, g(h[n])) },
                g = function(h) {
                    var l = d.indexOf(h);
                    if (-1 < l) return e[l];
                    if (Ea(h) || Na(h)) { var n = new va([]);
                        d.push(h);
                        e.push(n); for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p])); return n }
                    if (Cc(h)) { var q = new jb;
                        d.push(h);
                        e.push(q);
                        f(h, q); return q }
                    if ("function" === typeof h) {
                        var r = new fb("", function(y) { for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = Ec(z(this, A[B]), b, c); return g((0, this.h.I)(h, h, A)) });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var w = typeof h;
                    if (null === h || "string" === w || "number" === w || "boolean" === w) return h;
                    var x = !1;
                    switch (c) {
                        case 1:
                            x = !0;
                            break;
                        case 2:
                            x = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && x) return new wc(h)
                };
            return g(a)
        };
    var Fc = function(a) { for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c)); return b },
        Gc = function(a) { if (void 0 === a || Ea(a) || Cc(a)) return !0; switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0 } return !1 };
    var Hc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof va)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new va(c) },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e)); return new va(d) },
        forEach: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this) },
        hasOwnProperty: function(a, b) { return this.has(b) },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) { for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d)); return c.join(b) },
        lastIndexOf: function(a, b, c) { var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e)); for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1 },
        map: function(a, b) { for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this)); return new va(d) },
        pop: function() { return this.pop() },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) { var d = this.length(),
                e, f = 0; if (void 0 !== c) e = c;
            else { if (0 === d) throw Error("TypeError: Reduce on List with no elements."); for (var g = 0; g < d; g++)
                    if (this.has(g)) { e = this.get(g);
                        f = g + 1; break }
                if (g === d) throw Error("TypeError: Reduce on List with no elements."); } for (var h = f; h < d; h++) this.has(h) && (e = b.h(a, e, this.get(h), h, this)); return e },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) { e = this.get(d - g);
                        f = d - (g + 1); break }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() { for (var a = Fc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : wa(this, c); return this },
        shift: function() { return this.shift() },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new va(e)
        },
        some: function(a, b) { for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
            return !1 },
        sort: function(a, b) { var c = Fc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) { return Number(b.h(a, e, f)) }); for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : wa(this, d); return this },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() { return this.toString() },
        unshift: function(a, b) { return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1)) }
    };
    var Ic = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Jc = new pa("break"),
        Kc = new pa("continue"),
        Lc = function(a, b) { return z(this, a) + z(this, b) },
        Mc = function(a, b) { return z(this, a) && z(this, b) },
        Nc = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (!(c instanceof va)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) { if ("toString" === b) { if (d && c.length()) { var e = Ec(c.get(0)); try { return a.toString(e) } catch (q) {} } return a.toString() } throw Error("TypeError: " + a + "." + b + " is not a function."); }
            if ("string" === typeof a) { if (0 <= Ic.indexOf(b)) { var f = Ec(c); return Dc(a[b].apply(a, f), this.h) } throw Error("TypeError: " + b + " is not a function"); }
            if (a instanceof va) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof fb) { var h = Fc(c);
                        h.unshift(this.h); return g.h.apply(g, h) }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= Hc.supportedMethods.indexOf(b)) { var l = Fc(c);
                    l.unshift(this.h); return Hc[b].apply(a, l) }
            }
            if (a instanceof fb || a instanceof jb) { if (a.has(b)) { var n = a.get(b); if (n instanceof fb) { var p = Fc(c);
                        p.unshift(this.h); return n.h.apply(n, p) } throw Error("TypeError: " + b + " is not a function"); } if ("toString" === b) return a instanceof fb ? a.T : a.toString(); if ("hasOwnProperty" === b) return a.has.apply(a, Fc(c)) }
            if (a instanceof wc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Oc = function(a, b) { a = z(this, a); if ("string" !== typeof a) throw Error("Invalid key name given for assignment."); var c = this.h; if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b); var d = z(this, b);
            c.set(a, d); return d },
        Pc = function(a) { var b = Aa(this.h),
                c = ib(b, Array.prototype.slice.apply(arguments)); if (c instanceof pa) return c },
        Qc = function() { return Jc },
        Rc = function(a) { for (var b = z(this, a), c = 0; c < b.length; c++) { var d = z(this, b[c]); if (d instanceof pa) return d } },
        Sc = function(a) {
            for (var b =
                    this.h, c = 0; c < arguments.length - 1; c += 2) { var d = arguments[c]; if ("string" === typeof d) { var e = z(this, arguments[c + 1]);
                    za(b, d, e, !0) } }
        },
        Tc = function() { return Kc },
        Uc = function(a, b, c) { var d = new va;
            b = z(this, b); for (var e = 0; e < b.length; e++) d.push(b[e]); var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, z(this, f)) },
        Vc = function(a, b) { return z(this, a) / z(this, b) },
        Wc = function(a, b) {
            a = z(this, a);
            b = z(this, b);
            var c = a instanceof wc,
                d = b instanceof wc;
            return c || d ? c && d ? a.Ya == b.Ya : !1 : a ==
                b
        },
        Xc = function(a) { for (var b, c = 0; c < arguments.length; c++) b = z(this, arguments[c]); return b };

    function Yc(a, b, c, d) { for (var e = 0; e < b(); e++) { var f = a(c(e)),
                g = ib(f, d); if (g instanceof pa) { if ("break" === g.h) break; if ("return" === g.h) return g } } }

    function Zc(a, b, c) { if ("string" === typeof b) return Yc(a, function() { return b.length }, function(f) { return f }, c); if (b instanceof jb || b instanceof va || b instanceof fb) { var d = b.Lb(),
                e = d.length(); return Yc(a, function() { return e }, function(f) { return d.get(f) }, c) } }
    var $c = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return Zc(function(e) { d.set(a, e); return d }, b, c) },
        ad = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return Zc(function(e) { var f = Aa(d);
                za(f, a, e, !0); return f }, b, c) },
        bd = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return Zc(function(e) { var f = Aa(d);
                f.add(a, e); return f }, b, c) },
        dd = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return cd(function(e) { d.set(a, e); return d }, b, c) },
        ed =
        function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return cd(function(e) { var f = Aa(d);
                za(f, a, e, !0); return f }, b, c) },
        fd = function(a, b, c) { a = z(this, a);
            b = z(this, b);
            c = z(this, c); var d = this.h; return cd(function(e) { var f = Aa(d);
                f.add(a, e); return f }, b, c) };

    function cd(a, b, c) { if ("string" === typeof b) return Yc(a, function() { return b.length }, function(d) { return b[d] }, c); if (b instanceof va) return Yc(a, function() { return b.length() }, function(d) { return b.get(d) }, c); throw new TypeError("The value is not iterable."); }
    var gd = function(a, b, c, d) {
            function e(p, q) { for (var r = 0; r < f.length(); r++) { var u = f.get(r);
                    q.add(u, p.get(u)) } } var f = z(this, a); if (!(f instanceof va)) throw Error("TypeError: Non-List argument given to ForLet instruction."); var g = this.h;
            d = z(this, d); var h = Aa(g); for (e(g, h); hb(h, b);) { var l = ib(h, d); if (l instanceof pa) { if ("break" === l.h) break; if ("return" === l.h) return l } var n = Aa(g);
                e(h, n);
                hb(n, c);
                h = n } },
        hd = function(a) { a = z(this, a); var b = this.h,
                c = !1; if (c && !b.has(a)) throw new ReferenceError(a + " is not defined."); return b.get(a) },
        id = function(a, b) { var c;
            a = z(this, a);
            b = z(this, b); if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + "."); if (a instanceof jb || a instanceof va || a instanceof fb) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : ra(b) && (c = a[b]);
            else if (a instanceof wc) return; return c },
        jd = function(a, b) {
            return z(this, a) > z(this,
                b)
        },
        kd = function(a, b) { return z(this, a) >= z(this, b) },
        ld = function(a, b) { a = z(this, a);
            b = z(this, b);
            a instanceof wc && (a = a.Ya);
            b instanceof wc && (b = b.Ya); return a === b },
        md = function(a, b) { return !ld.call(this, a, b) },
        nd = function(a, b, c) { var d = [];
            z(this, a) ? d = z(this, b) : c && (d = z(this, c)); var e = ib(this.h, d); if (e instanceof pa) return e },
        od = function(a, b) { return z(this, a) < z(this, b) },
        pd = function(a, b) { return z(this, a) <= z(this, b) },
        qd = function(a, b) { return z(this, a) % z(this, b) },
        rd = function(a, b) { return z(this, a) * z(this, b) },
        sd = function(a) {
            return -z(this,
                a)
        },
        td = function(a) { return !z(this, a) },
        ud = function(a, b) { return !Wc.call(this, a, b) },
        vd = function() { return null },
        wd = function(a, b) { return z(this, a) || z(this, b) },
        xd = function(a, b) { var c = z(this, a);
            z(this, b); return c },
        yd = function(a) { return z(this, a) },
        zd = function(a) { return Array.prototype.slice.apply(arguments) },
        Ad = function(a) { return new pa("return", z(this, a)) },
        Bd = function(a, b, c) {
            a = z(this, a);
            b = z(this, b);
            c = z(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof fb || a instanceof va || a instanceof jb) && a.set(b, c);
            return c
        },
        Cd = function(a, b) { return z(this, a) - z(this, b) },
        Dd = function(a, b, c) {
            a = z(this, a);
            var d = z(this, b),
                e = z(this, c);
            if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === z(this, d[h]))
                    if (f = z(this, e[h]), f instanceof pa) { var l = f.h; if ("break" === l) return; if ("return" === l || "continue" === l) return f } else g = !0;
            if (e.length === d.length + 1 && (f = z(this, e[e.length - 1]), f instanceof pa && ("return" === f.h || "continue" ===
                    f.h))) return f
        },
        Ed = function(a, b, c) { return z(this, a) ? z(this, b) : z(this, c) },
        Fd = function(a) { a = z(this, a); return a instanceof fb ? "function" : typeof a },
        Jd = function(a) { for (var b = this.h, c = 0; c < arguments.length; c++) { var d = arguments[c]; "string" !== typeof d || b.add(d, void 0) } },
        Kd = function(a, b, c, d) {
            var e = z(this, d);
            if (z(this, c)) { var f = ib(this.h, e); if (f instanceof pa) { if ("break" === f.h) return; if ("return" === f.h) return f } }
            for (; z(this, a);) {
                var g = ib(this.h, e);
                if (g instanceof pa) { if ("break" === g.h) break; if ("return" === g.h) return g }
                z(this,
                    b)
            }
        },
        Ld = function(a) { return ~Number(z(this, a)) },
        Md = function(a, b) { return Number(z(this, a)) << Number(z(this, b)) },
        Nd = function(a, b) { return Number(z(this, a)) >> Number(z(this, b)) },
        Od = function(a, b) { return Number(z(this, a)) >>> Number(z(this, b)) },
        Pd = function(a, b) { return Number(z(this, a)) & Number(z(this, b)) },
        Qd = function(a, b) { return Number(z(this, a)) ^ Number(z(this, b)) },
        Rd = function(a, b) { return Number(z(this, a)) | Number(z(this, b)) };
    var Td = function() { this.h = new lb;
        Sd(this) };
    Td.prototype.execute = function(a) { return Ud(this.h.B(a)) };
    var Vd = function(a, b, c) { return Ud(a.h.F(b, c)) },
        Sd = function(a) {
            var b = function(d, e) { nb(a.h, d, String(e)) };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) { mb(a.h, String(d), e) };
            c(0, Lc);
            c(1, Mc);
            c(2, Nc);
            c(3, Oc);
            c(53, Pc);
            c(4, Qc);
            c(5, Rc);
            c(52, Sc);
            c(6, Tc);
            c(9, Rc);
            c(50, Uc);
            c(10, Vc);
            c(12, Wc);
            c(13, Xc);
            c(47, $c);
            c(54, ad);
            c(55, bd);
            c(63, gd);
            c(64, dd);
            c(65, ed);
            c(66, fd);
            c(15, hd);
            c(16, id);
            c(17, id);
            c(18, jd);
            c(19, kd);
            c(20, ld);
            c(21, md);
            c(22, nd);
            c(23, od);
            c(24, pd);
            c(25, qd);
            c(26, rd);
            c(27,
                sd);
            c(28, td);
            c(29, ud);
            c(45, vd);
            c(30, wd);
            c(32, xd);
            c(33, xd);
            c(34, yd);
            c(35, yd);
            c(46, zd);
            c(36, Ad);
            c(43, Bd);
            c(37, Cd);
            c(38, Dd);
            c(39, Ed);
            c(40, Fd);
            c(41, Jd);
            c(42, Kd);
            c(58, Ld);
            c(57, Md);
            c(60, Nd);
            c(61, Od);
            c(56, Pd);
            c(62, Qd);
            c(59, Rd)
        };

    function Ud(a) { if (a instanceof pa || a instanceof fb || a instanceof va || a instanceof jb || a instanceof wc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a };
    var Wd = function() {
        var a = function(b) { return { toString: function() { return b } } };
        return {
            yi: a("consent"),
            yg: a("convert_case_to"),
            zg: a("convert_false_to"),
            Ag: a("convert_null_to"),
            Bg: a("convert_true_to"),
            Cg: a("convert_undefined_to"),
            fl: a("debug_mode_metadata"),
            cb: a("function"),
            zf: a("instance_name"),
            mj: a("live_only"),
            nj: a("malware_disabled"),
            oj: a("metadata"),
            rj: a("original_activity_id"),
            ml: a("original_vendor_template_id"),
            kl: a("once_on_load"),
            qj: a("once_per_event"),
            Eh: a("once_per_load"),
            nl: a("priority_override"),
            ol: a("respected_consent_types"),
            Ih: a("setup_tags"),
            fd: a("tag_id"),
            Jh: a("teardown_tags")
        }
    }();
    var re;
    var se = [],
        te = [],
        ue = [],
        ve = [],
        we = [],
        xe = {},
        ze, Ae, Ce = function() { var a = Be;
            Ae = Ae || a },
        De, Ee = function(a, b) { var c = {};
            c["function"] = "__" + a; for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]); return c },
        Fe = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = xe[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Oh && d.Oh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.Nh && (f.vtp_gtmCachedValues = d.Nh);
            if (b) {
                if (null ==
                    b.name) { var h;
                    a: { var l = b.index; if (null == l) h = "";
                        else { var n; switch (b.type) {
                                case 2:
                                    n = se[l]; break;
                                case 1:
                                    n = ve[l]; break;
                                default:
                                    h = ""; break a } var p = n && n[Wd.zf];
                            h = p ? String(p) : "" } }
                    b.name = h }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : re(c, f, b)
        },
        He = function(a, b, c) { c = c || []; var d = {},
                e; for (e in a) a.hasOwnProperty(e) && (d[e] = Ge(a[e], b, c)); return d },
        Ge = function(a, b, c) {
            if (Ea(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Ge(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = se[f];
                        if (!g || b.Vf(g)) return;
                        c[f] = !0;
                        var h = String(g[Wd.zf]);
                        try { var l = He(g, b, c);
                            l.vtp_gtmEventId = b.id;
                            b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                            d = Fe(l, { event: b, index: f, type: 2, name: h });
                            De && (d = De.Ej(d, l)) } catch (y) { b.ai && b.ai(y, Number(f), h), d = !1 }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Ge(a[n], b, c)] = Ge(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Ge(a[q], b, c);
                            Ae && (p = p || r === Ae.se);
                            d.push(r)
                        }
                        return Ae && p ? Ae.Fj(d) : d.join("");
                    case "escape":
                        d = Ge(a[1], b, c);
                        if (Ae && Ea(a[1]) && "macro" === a[1][0] && Ae.gk(a)) return Ae.Bk(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) Xd[a[u]] && (d = Xd[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!ve[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return d = { Th: a[2], index: t };
                    case "zb":
                        var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        v["function"] = a[1];
                        var w = Ie(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        Ie = function(a, b, c) { try { return ze(He(a, b, c)) } catch (d) { JSON.stringify(a) } return 2 };
    var Je = function(a, b, c) { var d;
        d = Error.call(this);
        this.message = d.message; "stack" in d && (this.stack = d.stack);
        this.B = a;
        this.h = c };
    ma(Je, Error);

    function Ke(a, b) { if (Ea(a)) { Object.defineProperty(a, "context", { value: { line: b[0] } }); for (var c = 1; c < a.length; c++) Ke(a[c], b[c]) } };
    var Le = function(a, b) { var c;
        c = Error.call(this);
        this.message = c.message; "stack" in c && (this.stack = c.stack);
        this.wk = a;
        this.B = b;
        this.h = [] };
    ma(Le, Error);
    var Ne = function() { return function(a, b) { a instanceof Le || (a = new Le(a, Me));
            b && a.h.push(b); throw a; } };

    function Me(a) { if (!a.length) return a;
        a.push({ id: "main", line: 0 }); for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1); for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1); return a };
    var Qe = function(a) {
            function b(r) { for (var u = 0; u < r.length; u++) d[r[u]] = !0 } for (var c = [], d = [], e = Oe(a), f = 0; f < te.length; f++) { var g = te[f],
                    h = Pe(g, e); if (h) { for (var l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                    b(g.block || []) } else null === h && b(g.block || []); } for (var p = [], q = 0; q < ve.length; q++) c[q] && !d[q] && (p[q] = !0); return p },
        Pe = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) { var e = b(c[d]); if (0 === e) return !1; if (2 === e) return null }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) { var h = b(f[g]); if (2 === h) return null; if (1 === h) return !1 }
            return !0
        },
        Oe = function(a) { var b = []; return function(c) { void 0 === b[c] && (b[c] = Ie(ue[c], a)); return b[c] } };
    var Re = { Ej: function(a, b) { b[Wd.yg] && "string" === typeof a && (a = 1 == b[Wd.yg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Wd.Ag) && null === a && (a = b[Wd.Ag]);
            b.hasOwnProperty(Wd.Cg) && void 0 === a && (a = b[Wd.Cg]);
            b.hasOwnProperty(Wd.Bg) && !0 === a && (a = b[Wd.Bg]);
            b.hasOwnProperty(Wd.zg) && !1 === a && (a = b[Wd.zg]); return a } };
    var Se = function() { this.h = {} };

    function Te(a, b, c, d) { if (a)
            for (var e = 0; e < a.length; e++) { var f = void 0,
                    g = "A policy function denied the permission request"; try { f = a[e].call(void 0, b, c, d), g += "." } catch (h) { g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "." } if (!f) throw new Je(c, d, g); } }

    function Ue(a, b, c) { return function() { var d = arguments[0]; if (d) { var e = a.h[d],
                    f = a.h.all; if (e || f) { var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Te(e, b, d, g);
                    Te(f, b, d, g) } } } };
    var Ye = function() { var a = data.permissions || {},
                b = Ve.N,
                c = this;
            this.B = new Se;
            this.h = {}; var d = {},
                e = Ue(this.B, b, function() { var f = arguments[0]; return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {} });
            Ma(a, function(f, g) { var h = {};
                Ma(g, function(l, n) { var p = We(l, n);
                    h[l] = p.assert;
                    d[l] || (d[l] = p.ca) });
                c.h[f] = function(l, n) { var p = h[l]; if (!p) throw Xe(l, {}, "The requested permission " + l + " is not configured."); var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q) } }) },
        $e = function(a) { return Ze.h[a] || function() {} };

    function We(a, b) { var c = Ee(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Xe; try { return Fe(c) } catch (d) { return { assert: function(e) { throw new Je(e, {}, "Permission " + e + " is unknown."); }, ca: function() { for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f]; return e } } } }

    function Xe(a, b, c) { return new Je(a, b, c) };
    var af = !1;
    var bf = {};
    bf.bl = Pa('');
    bf.Ij = Pa('');
    var cf = af,
        df = bf.Ij,
        ef = bf.bl;
    var ff = function(a, b) { var c = String(a); return c };
    var gf = [];
    gf[7] = !0;
    gf[9] = !0;
    gf[27] = !0;
    gf[6] = !0;
    gf[12] = !0;
    gf[11] = !0;
    gf[13] = !0;
    gf[15] = !0;
    gf[18] = !0;
    gf[23] = !0;
    gf[29] = !0;
    gf[33] = !0;
    gf[35] = !0;
    gf[36] = !0;
    gf[38] = !0;
    gf[43] = !0;
    gf[44] = !0;
    hf(46, 47);
    gf[51] = !0;
    gf[54] = !0;
    gf[57] = !0;

    function hf(a, b) { for (var c, d, e = 0; c === d;)
            if (c = Math.floor(2 * Math.random()), d = Math.floor(2 * Math.random()), e++, 20 < e) return;
        c ? gf[a] = !0 : gf[b] = !0; }
    var K = function(a) { return !!gf[a] };
    var nf = function(a) { var b = {},
                c = 0,
                d = K(51) ? 27 : 10;
            Ma(a, function(f, g) { if (void 0 !== g)
                    if (g = ff(g, 100), jf.hasOwnProperty(f)) b[jf[f]] = kf(g);
                    else if (lf.hasOwnProperty(f)) { var h = lf[f],
                        l = kf(g);
                    b.hasOwnProperty(h) || (b[h] = l) } else if ("category" === f)
                    for (var n = kf(g).split("/", 5), p = 0; p < n.length; p++) { var q = mf[p],
                            r = n[p];
                        b.hasOwnProperty(q) || (b[q] = r) } else if (c < d) { var u = 10 > c ? "" + c : String.fromCharCode(65 + c - 10);
                        b["k" + u] = kf(ff(f, 40));
                        b["v" + u] = kf(g);
                        c++ } }); var e = [];
            Ma(b, function(f, g) { e.push("" + f + g) }); return e.join("~") },
        kf =
        function(a) { return ("" + a).replace(/~/g, function() { return "~~" }) },
        jf = { item_id: "id", item_name: "nm", item_brand: "br", item_category: "ca", item_category2: "c2", item_category3: "c3", item_category4: "c4", item_category5: "c5", item_variant: "va", price: "pr", quantity: "qt", coupon: "cp", item_list_name: "ln", index: "lp", item_list_id: "li", discount: "ds", affiliation: "af", promotion_id: "pi", promotion_name: "pn", creative_name: "cn", creative_slot: "cs", location_id: "lo" },
        lf = {
            id: "id",
            name: "nm",
            brand: "br",
            variant: "va",
            list_name: "ln",
            list_position: "lp",
            list: "ln",
            position: "lp",
            creative: "cn"
        },
        mf = ["ca", "c2", "c3", "c4", "c5"];
    var of = function(a) { var b = [];
            Ma(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d))) }); return b.join("&") },
        pf = function(a, b, c, d) { this.Ha = a.Ha;
            this.Tb = a.Tb;
            this.Pf = a.Pf;
            this.h = b;
            this.F = c;
            this.D = of(a.Ha);
            this.B = of(a.Pf);
            this.I = this.B.length; if (d && 16384 < this.I) throw Error("EVENT_TOO_LARGE"); };
    var qf = function() { this.events = [];
        this.h = this.Ha = "";
        this.D = 0;
        this.B = !1 };
    qf.prototype.add = function(a) { return this.F(a) ? (this.events.push(a), this.Ha = a.D, this.h = a.h, this.D += a.I, this.B = a.F, !0) : !1 };
    qf.prototype.F = function(a) { var b = 20 > this.events.length && 16384 > a.I + this.D,
            c = this.Ha === a.D && this.h === a.h && this.B === a.F; return 0 == this.events.length || b && c };
    var rf = function(a, b) { Ma(a, function(c, d) { null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d)) }) },
        sf = function(a, b) { var c = [];
            a.D && c.push(a.D);
            b && c.push("_s=" + b);
            rf(a.Tb, c); var d = !1;
            a.B && (c.push(a.B), d = !0); var e = c.join("&"),
                f = "",
                g = e.length + a.h.length + 1;
            d && 2048 < g && (f = c.pop(), e = c.join("&")); return { ig: e, body: f } },
        tf = function(a, b) {
            var c = a.events;
            if (1 == c.length) return sf(c[0], b);
            var d = [];
            a.Ha && d.push(a.Ha);
            for (var e = {}, f = 0; f < c.length; f++) Ma(c[f].Tb, function(u, t) {
                null != t && (e[u] = e[u] || {}, e[u][String(t)] =
                    e[u][String(t)] + 1 || 1)
            });
            var g = {};
            Ma(e, function(u, t) { var v, w = -1,
                    x = 0;
                Ma(t, function(y, A) { x += A; var B = (y.length + u.length + 2) * (A - 1);
                    B > w && (v = y, w = B) });
                x == c.length && (g[u] = v) });
            rf(g, d);
            b && d.push("_s=" + b);
            for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = { Pd: n.Pd }, p++) { var q = [];
                n.Pd = {};
                Ma(c[p].Tb, function(u) { return function(t, v) { g[t] != "" + v && (u.Pd[t] = v) } }(n));
                c[p].B && q.push(c[p].B);
                rf(n.Pd, q);
                l.push(q.join("&")) }
            var r = l.join("\r\n");
            return { ig: h, body: r }
        };
    var Df = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Ef(a, b) { return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b] };
    var Ff = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
        If = { Fn: "function", DustMap: "Object", List: "Array" },
        L = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Ff.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    l = c[d];
                if (null == l) { if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied."); } else if ("*" !== h) {
                    var n = typeof l;
                    l instanceof fb ? n = "Fn" : l instanceof va ? n = "List" : l instanceof jb ? n = "DustMap" : l instanceof wc && (n = "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (If[n] || n) + ", which does not match required type " + (If[h] || h) + ".");
                }
            }
        };

    function Jf(a) { return "" + a }

    function Kf(a, b) { var c = []; return c };
    var Lf = function(a, b) { var c = new fb(a, function() { for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = z(this, d[e]); return b.apply(this, d) });
            c.Mb(); return c },
        Mf = function(a, b) { var c = new jb,
                d; for (d in b)
                if (b.hasOwnProperty(d)) { var e = b[d];
                    Ca(e) ? c.set(d, Lf(a + "_" + d, e)) : (Da(e) || k(e) || "boolean" === typeof e) && c.set(d, e) }
            c.Mb(); return c };
    var Nf = function(a, b) { L(F(this), ["apiName:!string", "message:?string"], arguments); var c = {},
            d = new jb; return d = Mf("AssertApiSubject", c) };
    var Of = function(a, b) { L(F(this), ["actual:?*", "message:?string"], arguments); if (a instanceof yc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."); var c = {},
            d = new jb; return d = Mf("AssertThatSubject", c) };

    function Pf(a) { return function() { for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(Ec(arguments[d], c)); return Dc(a.apply(null, b)) } }
    var Rf = function() { for (var a = Math, b = Qf, c = {}, d = 0; d < b.length; d++) { var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Pf(a[e].bind(a))) } return c };
    var Sf = function(a) { var b; return b };
    var Tf = function(a) { var b; return b };
    var Uf = function(a) { return encodeURI(a) };
    var Vf = function(a) { return encodeURIComponent(a) };
    var Wf = function(a) { L(F(this), ["message:?string"], arguments); };
    var Xf = function(a, b) { L(F(this), ["min:!number", "max:!number"], arguments); return Ja(a, b) };
    var M = function(a, b, c) { var d = a.h.h; if (!d) throw Error("Missing program state.");
        d.Cj.apply(null, Array.prototype.slice.call(arguments, 1)) };
    var Yf = function() { M(this, "read_container_data"); var a = new jb;
        a.set("containerId", 'G-37B3799Y3F');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", cf);
        a.set("previewMode", ef);
        a.set("environmentMode", df);
        a.Mb(); return a };
    var Zf = function() { return (new Date).getTime() };
    var $f = function(a) { if (null === a) return "null"; if (a instanceof va) return "array"; if (a instanceof fb) return "function"; if (a instanceof wc) { a = a.Ya; if (void 0 === a.constructor || void 0 === a.constructor.name) { var b = String(a); return b.substring(8, b.length - 1) } return String(a.constructor.name) } return typeof a };
    var ag = function(a) {
        function b(c) { return function(d) { try { return c(d) } catch (e) {
                    (cf || ef) && a.call(this, e.message) } } } return { parse: b(function(c) { return Dc(JSON.parse(c)) }), stringify: b(function(c) { return JSON.stringify(Ec(c)) }) } };
    var bg = function(a) { return Oa(Ec(a, this.h)) };
    var cg = function(a) { return Number(Ec(a, this.h)) };
    var dg = function(a) { return null === a ? "null" : void 0 === a ? "undefined" : a.toString() };
    var eg = function(a, b, c) { var d = null,
            e = !1; return e ? d : null };
    var Qf = "floor ceil round max min abs pow sqrt".split(" ");
    var fg = function() { var a = {}; return { Tj: function(b) { return a.hasOwnProperty(b) ? a[b] : void 0 }, Tk: function(b, c) { a[b] = c }, reset: function() { a = {} } } },
        gg = function(a, b) { return function() { var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b); return fb.prototype.h.apply(a, c) } },
        hg = function(a, b) { L(F(this), ["apiName:!string", "mock:?*"], arguments); };
    var ig = {};
    ig.keys = function(a) { return new va };
    ig.values = function(a) { return new va };
    ig.entries = function(a) { return new va };
    ig.freeze = function(a) { return a };
    ig.delete = function(a, b) { return !1 };
    var kg = function() { this.h = {};
        this.B = {}; };
    kg.prototype.get = function(a, b) { var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0; return c };
    kg.prototype.add = function(a, b, c) { if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + "."; if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ca(b) ? Lf(a, b) : Mf(a, b) };

    function lg(a, b) { var c = void 0; return c };

    function mg() { var a = {}; return a };
    var og = function(a) { return ng ? G.querySelectorAll(a) : null },
        pg = function(a, b) {
            if (!ng) return null;
            if (Element.prototype.closest) try { return a.closest(b) } catch (e) { return null }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!G.documentElement.contains(d)) return null;
            do { try { if (c.call(d, b)) return d } catch (e) { break }
                d = d.parentElement || d.parentNode } while (null !== d && 1 === d.nodeType);
            return null
        },
        qg = !1;
    if (G.querySelectorAll) try { var rg = G.querySelectorAll(":root");
        rg && 1 == rg.length && rg[0] == G.documentElement && (qg = !0) } catch (a) {}
    var ng = qg;
    var P = function(a) { vb("GTM", a) };
    var sg = function(a) { return null == a ? "" : k(a) ? Ra(String(a)) : "e0" },
        ug = function(a) { return a.replace(tg, "") },
        wg = function(a) { return vg(a.replace(/\s/g, "")) },
        vg = function(a) { return Ra(a.replace(xg, "").toLowerCase()) },
        zg = function(a) { a = a.replace(/[\s-()/.]/g, ""); "+" !== a.charAt(0) && (a = "+" + a); return yg.test(a) ? a : "e0" },
        Bg = function(a) { var b = a.toLowerCase().split("@"); if (2 == b.length) { var c = b[0]; /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1]; if (Ag.test(c)) return c } return "e0" },
        Eg = function(a,
            b) { window.Promise || b([]);
            Promise.all(a.map(function(c) { return c.value && -1 !== Cg.indexOf(c.name) ? Dg(c.value).then(function(d) { c.value = d }) : Promise.resolve() })).then(function() { b(a) }).catch(function() { b([]) }) },
        Dg = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (m.crypto && m.crypto.subtle) {
                if (Fg.test(a)) return Promise.resolve(a);
                try {
                    var b = Gg(a);
                    return m.crypto.subtle.digest("SHA-256", b).then(function(c) {
                        var d = Array.from(new Uint8Array(c)).map(function(e) { return String.fromCharCode(e) }).join("");
                        return m.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                    }).catch(function() { return "e2" })
                } catch (c) { return Promise.resolve("e2") }
            } else return Promise.resolve("e1")
        },
        Gg = function(a) {
            var b;
            if (m.TextEncoder) b = (new m.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63,
                        128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        xg = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        Ag = /^\S+@\S+\.\S+$/,
        yg = /^\+\d{10,15}$/,
        tg = /[.~]/g,
        Hg = /^[0-9A-Za-z_-]{43}$/,
        Fg = /^[0-9A-Fa-f]{64}$/,
        Ig = {},
        Jg = (Ig.email = "em", Ig.phone_number = "pn", Ig.first_name = "fn", Ig.last_name = "ln", Ig.street = "sa", Ig.city = "ct", Ig.region = "rg", Ig.country = "co", Ig.postal_code = "pc", Ig.error_code = "ec", Ig),
        Kg = {},
        Lg = (Kg.email = "sha256_email_address", Kg.phone_number = "sha256_phone_number", Kg.first_name = "sha256_first_name", Kg.last_name =
            "sha256_last_name", Kg.street = "sha256_street", Kg),
        Mg = function(a, b) {
            function c(u, t, v, w) { var x = sg(u); "" !== x && (Fg.test(x) ? l.push({ name: t, value: x, index: w }) : l.push({ name: t, value: v(x), index: w })) }

            function d(u, t) { var v = u; if (k(v) || Ea(v)) { v = Ea(u) ? u : [u]; for (var w = 0; w < v.length; ++w) { var x = sg(v[w]),
                            y = Fg.test(x);
                        t && !y && P(89);!t && y && P(88) } } }

            function e(u, t) { var v = u[t];
                d(v, !1); var w = Lg[t];
                u.hasOwnProperty(w) && (u.hasOwnProperty(t) && P(90), v = u[w], d(v, !0)); return v }

            function f(u, t, v) {
                var w = e(u, t);
                w = Ea(w) ? w : [w];
                for (var x =
                        0; x < w.length; ++x) c(w[x], t, v)
            }

            function g(u, t, v, w) { var x = e(u, t);
                c(x, t, v, w) }

            function h(u) { return function(t) { P(64); return u(t) } }
            var l = [];
            if ("https:" === m.location.protocol) {
                f(a, "email", Bg);
                f(a, "phone_number", zg);
                f(a, "first_name", h(wg));
                f(a, "last_name", h(wg));
                var n = a.home_address || {};
                f(n, "street", h(vg));
                f(n, "city", h(vg));
                f(n, "postal_code", h(ug));
                f(n, "region", h(vg));
                f(n, "country", h(ug));
                var p = a.address || {};
                p = Ea(p) ? p : [p];
                for (var q = 0; q < p.length; q++) {
                    var r = p[q];
                    g(r, "first_name", wg, q);
                    g(r, "last_name", wg, q);
                    g(r, "street", vg, q);
                    g(r, "city", vg, q);
                    g(r, "postal_code", ug, q);
                    g(r, "region", vg, q);
                    g(r, "country", ug, q)
                }
                Eg(l, b)
            } else l.push({ name: "error_code", value: "e3", index: void 0 }), b(l)
        },
        Ng = function(a, b) { Mg(a, function(c) { for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) { var g = c[f].name,
                        h = c[f].value,
                        l = c[f].index,
                        n = Jg[g];
                    n && h && (-1 === Cg.indexOf(g) || /^e\d+$/.test(h) || Hg.test(h) || Fg.test(h)) && (void 0 !== l && (n += l), d.push(n + "." + h), e++) }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e) }) },
        Og = function(a) {
            if (m.Promise) try {
                return new Promise(function(b) {
                    Ng(a,
                        function(c, d) { b({ Cd: c, Ak: d }) })
                })
            } catch (b) {}
        },
        Cg = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var S = {
            g: {
                J: "ad_storage",
                Z: "analytics_storage",
                Ue: "region",
                xg: "consent_updated",
                Ve: "wait_for_update",
                Ci: "app_remove",
                Di: "app_store_refund",
                Ei: "app_store_subscription_cancel",
                Fi: "app_store_subscription_convert",
                Gi: "app_store_subscription_renew",
                Dg: "add_payment_info",
                Eg: "add_shipping_info",
                Dc: "add_to_cart",
                Ec: "remove_from_cart",
                Fg: "view_cart",
                Yb: "begin_checkout",
                Fc: "select_item",
                Fb: "view_item_list",
                Zb: "select_promotion",
                Gb: "view_promotion",
                Ja: "purchase",
                Gc: "refund",
                Oa: "view_item",
                Gg: "add_to_wishlist",
                Hi: "first_open",
                Ii: "first_visit",
                Da: "gtag.config",
                Ka: "gtag.get",
                Ji: "in_app_purchase",
                Hc: "page_view",
                Ki: "session_start",
                Xe: "user_engagement",
                ac: "gclid",
                na: "ads_data_redaction",
                fa: "allow_ad_personalization_signals",
                Ye: "allow_custom_scripts",
                Li: "allow_display_features",
                Ic: "allow_enhanced_conversions",
                Jc: "allow_google_signals",
                Ea: "allow_interest_groups",
                Td: "auid",
                Mi: "auto_detection_enabled",
                kb: "aw_remarketing",
                Ud: "aw_remarketing_only",
                Kc: "discount",
                Lc: "aw_feed_country",
                Mc: "aw_feed_language",
                ia: "items",
                Nc: "aw_merchant_id",
                Hg: "aw_basket_type",
                Vd: "campaign_content",
                Wd: "campaign_id",
                Xd: "campaign_medium",
                Yd: "campaign_name",
                Oc: "campaign",
                Zd: "campaign_source",
                ae: "campaign_term",
                xb: "client_id",
                Ni: "content_group",
                Oi: "content_type",
                La: "conversion_cookie_prefix",
                Pc: "conversion_id",
                lb: "conversion_label",
                ya: "conversion_linker",
                Ze: "conversion_api",
                nb: "cookie_domain",
                Pa: "cookie_expires",
                ob: "cookie_flags",
                Qc: "cookie_name",
                af: "cookie_path",
                Za: "cookie_prefix",
                Hb: "cookie_update",
                bc: "country",
                va: "currency",
                Rc: "customer_lifetime_value",
                Sc: "custom_map",
                Pi: "debug_mode",
                ja: "developer_id",
                Ig: "disable_merchant_reported_purchases",
                Qi: "dc_custom_params",
                Ri: "dc_natural_search",
                bf: "dynamic_event_settings",
                Si: "affiliation",
                Jg: "checkout_option",
                Kg: "checkout_step",
                Ti: "coupon",
                Lg: "item_list_name",
                Mg: "list_name",
                Ui: "promotions",
                Tc: "shipping",
                Ng: "tax",
                be: "engagement_time_msec",
                Uc: "enhanced_client_id",
                Vc: "enhanced_conversions",
                Og: "enhanced_conversions_automatic_settings",
                Wc: "estimated_delivery_date",
                cf: "euid_logged_in_state",
                cc: "event_callback",
                fc: "event_developer_id_string",
                Pg: "event",
                ce: "event_settings",
                de: "event_timeout",
                Vi: "experiments",
                df: "firebase_id",
                ee: "first_party_collection",
                fe: "_x_20",
                Ib: "_x_19",
                Qg: "fledge",
                Rg: "flight_error_code",
                Sg: "flight_error_message",
                Tg: "gac_gclid",
                he: "gac_wbraid",
                Ug: "gac_wbraid_multiple_conversions",
                Xc: "ga_restrict_domain",
                ef: "ga_temp_client_id",
                Vg: "gdpr_applies",
                Wg: "geo_granularity",
                pb: "value_callback",
                ab: "value_key",
                hc: "global_developer_id_string",
                il: "google_ono",
                yb: "google_signals",
                ie: "google_tld",
                je: "groups",
                Xg: "gsa_experiment_id",
                Yg: "iframe_state",
                ke: "ignore_referrer",
                ff: "internal_traffic_results",
                me: "is_legacy_loaded",
                Zg: "is_passthrough",
                Qa: "language",
                hf: "legacy_developer_id_string",
                za: "linker",
                ic: "accept_incoming",
                jc: "decorate_forms",
                aa: "domains",
                Yc: "url_position",
                ah: "method",
                kc: "new_customer",
                bh: "non_interaction",
                Wi: "optimize_id",
                Ra: "page_location",
                jf: "page_path",
                Sa: "page_referrer",
                mc: "page_title",
                dh: "passengers",
                eh: "phone_conversion_callback",
                Xi: "phone_conversion_country_code",
                fh: "phone_conversion_css_class",
                Yi: "phone_conversion_ids",
                gh: "phone_conversion_number",
                hh: "phone_conversion_options",
                ih: "quantity",
                Zc: "redact_device_info",
                kf: "redact_enhanced_user_id",
                Zi: "redact_ga_client_id",
                aj: "redact_user_id",
                ne: "referral_exclusion_definition",
                zb: "restricted_data_processing",
                bj: "retoken",
                jh: "screen_name",
                Jb: "screen_resolution",
                cj: "search_term",
                Fa: "send_page_view",
                Kb: "send_to",
                ad: "session_duration",
                oe: "session_engaged",
                lf: "session_engaged_time",
                Ab: "session_id",
                pe: "session_number",
                nc: "delivery_postal_code",
                kh: "tc_privacy_string",
                lh: "temporary_client_id",
                dj: "tracking_id",
                nf: "traffic_type",
                Ma: "transaction_id",
                wa: "transport_url",
                mh: "trip_type",
                bd: "update",
                qb: "url_passthrough",
                pf: "_user_agent_architecture",
                qf: "_user_agent_bitness",
                rf: "_user_agent_full_version_list",
                nh: "_user_agent_mobile",
                sf: "_user_agent_model",
                tf: "_user_agent_platform",
                uf: "_user_agent_platform_version",
                oh: "_user_agent_wait",
                vf: "_user_agent_wow64",
                ka: "user_data",
                ph: "user_data_auto_latency",
                qh: "user_data_auto_meta",
                rh: "user_data_auto_multi",
                sh: "user_data_auto_selectors",
                th: "user_data_auto_status",
                uh: "user_data_mode",
                wf: "user_data_settings",
                Aa: "user_id",
                Ta: "user_properties",
                vh: "us_privacy_string",
                ra: "value",
                qe: "wbraid",
                wh: "wbraid_multiple_conversions",
                zh: "_host_name",
                Ah: "_in_page_command",
                Bh: "_is_linker_valid",
                Ch: "_is_passthrough_cid",
                Dh: "non_personalized_ads"
            }
        },
        Pg = {},
        Qg = Object.freeze((Pg[S.g.fa] = 1, Pg[S.g.Ic] = 1, Pg[S.g.Jc] = 1, Pg[S.g.ia] = 1, Pg[S.g.nb] = 1, Pg[S.g.Pa] = 1, Pg[S.g.ob] = 1, Pg[S.g.Qc] = 1, Pg[S.g.af] = 1, Pg[S.g.Za] = 1, Pg[S.g.Hb] = 1, Pg[S.g.Sc] = 1, Pg[S.g.ja] = 1, Pg[S.g.bf] =
            1, Pg[S.g.cc] = 1, Pg[S.g.ce] = 1, Pg[S.g.de] = 1, Pg[S.g.ee] = 1, Pg[S.g.Xc] = 1, Pg[S.g.yb] = 1, Pg[S.g.ie] = 1, Pg[S.g.je] = 1, Pg[S.g.ff] = 1, Pg[S.g.me] = 1, Pg[S.g.za] = 1, Pg[S.g.kf] = 1, Pg[S.g.ne] = 1, Pg[S.g.zb] = 1, Pg[S.g.Fa] = 1, Pg[S.g.Kb] = 1, Pg[S.g.ad] = 1, Pg[S.g.lf] = 1, Pg[S.g.nc] = 1, Pg[S.g.wa] = 1, Pg[S.g.bd] = 1, Pg[S.g.wf] = 1, Pg[S.g.Ta] = 1, Pg));
    Object.freeze([S.g.Ra, S.g.Sa, S.g.mc, S.g.Qa, S.g.jh, S.g.Aa, S.g.df, S.g.Ni]);
    var Rg = {},
        Sg = Object.freeze((Rg[S.g.Ci] = 1, Rg[S.g.Di] = 1, Rg[S.g.Ei] = 1, Rg[S.g.Fi] = 1, Rg[S.g.Gi] = 1, Rg[S.g.Hi] = 1, Rg[S.g.Ii] = 1, Rg[S.g.Ji] = 1, Rg[S.g.Ki] = 1, Rg[S.g.Xe] = 1, Rg)),
        Tg = {},
        Ug = Object.freeze((Tg[S.g.Dg] = 1, Tg[S.g.Eg] = 1, Tg[S.g.Dc] = 1, Tg[S.g.Ec] = 1, Tg[S.g.Fg] = 1, Tg[S.g.Yb] = 1, Tg[S.g.Fc] = 1, Tg[S.g.Fb] = 1, Tg[S.g.Zb] = 1, Tg[S.g.Gb] = 1, Tg[S.g.Ja] = 1, Tg[S.g.Gc] = 1, Tg[S.g.Oa] = 1, Tg[S.g.Gg] = 1, Tg)),
        Vg = Object.freeze([S.g.fa, S.g.Jc, S.g.Hb]),
        Wg = Object.freeze([].concat(Vg)),
        Xg = Object.freeze([S.g.Pa, S.g.de, S.g.ad, S.g.lf, S.g.be]),
        Yg = Object.freeze([].concat(Xg)),
        Zg = {},
        $g = (Zg[S.g.J] = "1", Zg[S.g.Z] = "2", Zg),
        ah = {},
        bh = Object.freeze((ah[S.g.fa] = 1, ah[S.g.Ic] = 1, ah[S.g.Ea] = 1, ah[S.g.kb] = 1, ah[S.g.Ud] = 1, ah[S.g.Kc] = 1, ah[S.g.Lc] = 1, ah[S.g.Mc] = 1, ah[S.g.ia] = 1, ah[S.g.Nc] = 1, ah[S.g.La] = 1, ah[S.g.ya] = 1, ah[S.g.nb] = 1, ah[S.g.Pa] = 1, ah[S.g.ob] = 1, ah[S.g.Za] = 1, ah[S.g.va] = 1, ah[S.g.Rc] = 1, ah[S.g.ja] = 1, ah[S.g.Ig] = 1, ah[S.g.Vc] = 1, ah[S.g.Wc] = 1, ah[S.g.df] = 1, ah[S.g.ee] = 1, ah[S.g.me] = 1, ah[S.g.Qa] = 1, ah[S.g.kc] = 1, ah[S.g.Ra] = 1, ah[S.g.Sa] = 1, ah[S.g.eh] = 1, ah[S.g.fh] = 1,
            ah[S.g.gh] = 1, ah[S.g.hh] = 1, ah[S.g.zb] = 1, ah[S.g.Fa] = 1, ah[S.g.Kb] = 1, ah[S.g.nc] = 1, ah[S.g.Ma] = 1, ah[S.g.wa] = 1, ah[S.g.bd] = 1, ah[S.g.qb] = 1, ah[S.g.ka] = 1, ah[S.g.Aa] = 1, ah[S.g.ra] = 1, ah));
    Object.freeze(S.g);
    var ch = {},
        dh = m.google_tag_manager = m.google_tag_manager || {},
        eh = Math.random();
    ch.ed = "b20";
    ch.Cf = Number("0") || 0;
    ch.ma = "dataLayer";
    ch.Ai = "ChEI8PCSmwYQg5rI4sPAqJvGARIlAIdmXBrP7mhjWYM6qJQuuJM/Y1db8PGYnbp1sOwGIJiLl8KIKRoCG+8\x3d";
    var fh = { __cl: !0, __ecl: !0, __ehl: !0, __evl: !0, __fal: !0, __fil: !0, __fsl: !0, __hl: !0, __jel: !0, __lcl: !0, __sdl: !0, __tl: !0, __ytl: !0 },
        gh = { __paused: !0, __tg: !0 },
        hh;
    for (hh in fh) fh.hasOwnProperty(hh) && (gh[hh] = !0);
    var ih = Pa(""),
        jh = Pa("true"),
        kh, lh = !1;
    lh = !0;
    kh = lh;
    var mh, nh = !1;
    mh = nh;
    var oh, ph = !1;
    oh = ph;
    var qh, rh = !1;
    qh = rh;
    ch.Sd = "www.googletagmanager.com";
    var sh = "" + ch.Sd + (kh ? "/gtag/js" : "/gtm.js"),
        th = null,
        uh = null,
        vh = {},
        wh = {},
        xh = {},
        yh = function() { var a = dh.sequence || 1;
            dh.sequence = a + 1; return a };
    ch.zi = "true";
    var zh = "";
    ch.we = zh;
    var Ah = new Ka,
        Bh = {},
        Ch = {},
        Mh = { name: ch.ma, set: function(a, b) { I(bb(a, b), Bh);
                Kh() }, get: function(a) { return Lh(a, 2) }, reset: function() { Ah = new Ka;
                Bh = {};
                Kh() } },
        Lh = function(a, b) { return 2 != b ? Ah.get(a) : Nh(a) },
        Nh = function(a, b) { var c = a.split(".");
            b = b || []; for (var d = Bh, e = 0; e < c.length; e++) { if (null === d) return !1; if (void 0 === d) break;
                d = d[c[e]]; if (-1 !== b.indexOf(d)) return } return d },
        Oh = function(a, b) { Ch.hasOwnProperty(a) || (Ah.set(a, b), I(bb(a, b), Bh), Kh()) },
        Ph = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) { var c = a[b],
                    d = Lh(c, 1); if (Ea(d) || Cc(d)) d = I(d);
                Ch[c] = d }
        },
        Kh = function(a) { Ma(Ch, function(b, c) { Ah.set(b, c);
                I(bb(b), Bh);
                I(bb(b, c), Bh);
                a && delete Ch[b] }) },
        Qh = function(a, b) { var c, d = 1 !== (void 0 === b ? 2 : b) ? Nh(a) : Ah.get(a); "array" === Ac(d) || "object" === Ac(d) ? c = I(d) : c = d; return c };
    var Rh, Sh = !1;

    function Th() { Sh = !0;
        Rh = Rh || {} }
    var Uh = function(a) { Sh || Th(); return Rh[a] };
    var Vh = function() { var a = m.screen; return { width: a ? a.width : 0, height: a ? a.height : 0 } },
        Wh = function(a) {
            if (G.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
            var c = m.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = m.getComputedStyle(d, null))
            }
            return !1
        };
    var Xh = function() { var a = G.body,
                b = G.documentElement || a && a.parentElement,
                c, d; if (G.compatMode && "BackCompat" !== G.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else { var e = function(f, g) { return f && g ? Math.min(f, g) : Math.max(f, g) };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0) } return { width: d, height: c } },
        Yh = function(a) {
            var b = Xh(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var Zh = [],
        $h = !(!m.IntersectionObserver || !m.IntersectionObserverEntry),
        ai = function(a, b, c) { for (var d = new m.IntersectionObserver(a, { threshold: c }), e = 0; e < b.length; e++) d.observe(b[e]); for (var f = 0; f < Zh.length; f++)
                if (!Zh[f]) return Zh[f] = d, f;
            return Zh.push(d) - 1 },
        bi = function(a, b, c) {
            function d(h, l) {
                var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
                    p = {
                        boundingClientRect: h.getBoundingClientRect(),
                        intersectionRatio: l,
                        intersectionRect: n,
                        isIntersecting: 0 < l,
                        rootBounds: n,
                        target: h,
                        time: Ta()
                    };
                H(function() { return a(p) })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(h, l) { return h - l });
            return function() { for (var h = 0; h < b.length; h++) { var l = Yh(b[h]); if (l > e[h])
                        for (; f[h] < c.length - 1 && l >= c[f[h] + 1];) d(b[h], l), f[h]++;
                    else if (l < e[h])
                        for (; 0 <= f[h] && l <= c[f[h]];) d(b[h], l), f[h]--;
                    e[h] = l } }
        },
        ci = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if ($h) {
                var e = !1;
                H(function() {
                    e ||
                        bi(a, b, c)()
                });
                return ai(function(f) { e = !0; for (var g = { yc: 0 }; g.yc < f.length; g = { yc: g.yc }, g.yc++) H(function(h) { return function() { return a(f[h.yc]) } }(g)) }, b, c)
            }
            return m.setInterval(bi(a, b, c), 1E3)
        },
        di = function(a) { $h ? 0 <= a && a < Zh.length && Zh[a] && (Zh[a].disconnect(), Zh[a] = void 0) : m.clearInterval(a) };
    var ei = /:[0-9]+$/,
        fi = function(a, b, c, d) { for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) { var h = f[g].split("="); if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) { var l = h.slice(1).join("="); if (!c) return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                    e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " ")) } } return c ? e : void 0 },
        ii = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = gi(a.protocol) || gi(m.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                m.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || m.location.hostname).replace(ei, "").toLowerCase());
            return hi(a, b, c, d, e)
        },
        hi = function(a, b, c, d, e) {
            var f, g = gi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ji(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(ei, "").toLowerCase();
                    if (c) { var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length)) }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ===
                        g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || vb("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var l = f.split("/");
                    0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
                    f = l.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = fi(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        gi = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        ji = function(a) { var b = ""; if (a && a.href) { var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c) } return b },
        ki = function(a) { var b = G.createElement("a");
            a && (b.href = a); var c = b.pathname; "/" !== c[0] && (a || vb("TAGGING", 1), c = "/" + c); var d = b.hostname.replace(ei, ""); return { href: b.href, protocol: b.protocol, host: b.host, hostname: d, pathname: c, search: b.search, hash: b.hash, port: b.port } },
        li = function(a) {
            function b(n) { var p = n.split("=")[0]; return 0 > d.indexOf(p) ? n : p + "=0" }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !==
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = ki(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var l = "" + f + g + h;
            "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
            return l
        };
    var mi = {};
    var oi = function(a, b, c) { if (a) { var d = a.element,
                    e = { Xa: a.Xa, tagName: d.tagName, type: 1 };
                b && (e.querySelector = ni(d));
                c && (e.isVisible = !Wh(d)); return e } },
        ri = function(a) { if (0 != a.length) { var b;
                b = pi(a, function(c) { return !qi.test(c.Xa) });
                b = pi(b, function(c) { return "INPUT" === c.element.tagName.toUpperCase() });
                b = pi(b, function(c) { return !Wh(c.element) }); return b[0] } },
        pi = function(a, b) { if (1 >= a.length) return a; var c = a.filter(b); return 0 == c.length ? a : c },
        ni = function(a) {
            var b;
            if (a === G.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else { var d; if (a.parentElement) { var e;
                        a: { var f = a.parentElement; if (f) { for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) { e = g + 1; break a }
                                e = -1 } else e = 1 }
                        d = ni(a.parentElement) + ">:nth-child(" + e + ")" } else d = "";
                    c = d }
                b = c
            }
            return b
        },
        si = !0,
        ti = !1;
    mi.wi = "true";
    var ui = function(a) { if ("false" === mi.wi || !si) return !1; if (ti) return !0; var b = Uh("AW-" + a); return !!b && !!b.preAutoPii },
        vi = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
        wi = /@(gmail|googlemail)\./i,
        qi = /support|noreply/i,
        xi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
        yi = ["BR"],
        zi = {},
        Ai = function(a) {
            a = a || { Ob: !0, Pb: !0 };
            a.rb = a.rb || { email: !0, phone: !0, address: !0 };
            var b, c = a,
                d = !!c.Ob + "." + !!c.Pb;
            c && c.od && c.od.length && (d += "." + c.od.join("."));
            c && c.rb && (d += "." + c.rb.email + "." + c.rb.phone + "." + c.rb.address);
            b = d;
            var e = zi[b];
            if (e && 200 > Ta() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = G.body;
            if (h) { for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) { var p = l[n]; if (!(0 <= xi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) { for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= yi.indexOf(p.children[r].tagName.toUpperCase()))) { q = !0; break }
                        q || g.push(p) } }
                f = { elements: g, status: 1E4 < l.length ? "2" : "1" } } else f = { elements: g, status: "4" };
            var u = f,
                t = u.status,
                v = [],
                w;
            if (a.rb && a.rb.email) {
                for (var x =
                        u.elements, y = [], A = 0; A < x.length; A++) { var B = x[A],
                        C = B.textContent; "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value); if (C) { var E = C.match(vi); if (E) { var J = E[0],
                                D; if (m.location) { var N = hi(m.location, "host", !0);
                                D = 0 <= J.toLowerCase().indexOf(N) } else D = !1;
                            D || y.push({ element: B, Xa: J }) } } }
                var Q = a && a.od;
                if (Q && 0 !== Q.length) { for (var V = [], qa = 0; qa < y.length; qa++) { for (var R = !0, O = 0; O < Q.length; O++) { var ia = Q[O]; if (ia && pg(y[qa].element, ia)) { R = !1; break } }
                        R && V.push(y[qa]) }
                    v = V } else v = y;
                w = ri(v);
                10 < y.length && (t = "3")
            }
            var aa = [];
            !a.qg && w && (v = [w]);
            for (var W = 0; W < v.length; W++) aa.push(oi(v[W], a.Ob, a.Pb));
            var Fa = { elements: aa.slice(0, 10), Ne: oi(w, a.Ob, a.Pb), status: t };
            zi[b] = { timestamp: Ta(), result: Fa };
            return Fa
        },
        Bi = function(a) { return a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + wi.test(a.Xa) };
    var Ci = function(a, b, c) {
            if (!c) return !1;
            var d = c.selector_type,
                e = String(c.value),
                f;
            if ("js_variable" === d) { e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, ""); for (var g = e.split(","), h = 0; h < g.length; h++) { var l = g[h].trim(); if (l) { if (0 === l.indexOf("dataLayer.")) f = Lh(l.substring(10));
                        else { var n = l.split(".");
                            f = m[n.shift()]; for (var p = 0; p < n.length; p++) f = f && f[n[p]] } if (void 0 !== f) break } } } else if ("css_selector" === d && ng) {
                var q = og(e);
                if (q && 0 < q.length) {
                    f = [];
                    for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(hc(q[r]) ||
                        Ra(q[r].value));
                    f = 1 === f.length ? f[0] : f
                }
            }
            return f ? (a[b] = f, !0) : !1
        },
        Di = function(a) {
            if (a) {
                var b = {},
                    c = !1;
                c = Ci(b, "email", a.email) || c;
                c = Ci(b, "phone_number", a.phone) || c;
                b.address = [];
                for (var d = a.name_and_address || [], e = 0; e < d.length; e++) { var f = {};
                    c = Ci(f, "first_name", d[e].first_name) || c;
                    c = Ci(f, "last_name", d[e].last_name) || c;
                    c = Ci(f, "street", d[e].street) || c;
                    c = Ci(f, "city", d[e].city) || c;
                    c = Ci(f, "region", d[e].region) || c;
                    c = Ci(f, "country", d[e].country) || c;
                    c = Ci(f, "postal_code", d[e].postal_code) || c;
                    b.address.push(f) }
                return c ?
                    b : void 0
            }
        },
        Ei = function(a) { return a.D[S.g.wf] },
        Fi = function(a) { if (!Cc(a)) return !1; var b = a.mode; return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code },
        Gi = function(a) {
            if (a) {
                if ("selectors" === a.mode || Cc(a.selectors)) return Di(a.selectors);
                if ("auto_detect" === a.mode || Cc(a.auto_detect)) {
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ai({ Ob: !1, Pb: !1, od: c.exclude_element_selectors, rb: { email: !!c.email, phone: !!c.phone, address: !!c.address } }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g =
                                    d[f];
                                if (1 === g.type) { e.email = g.Xa; break }
                            }
                        b = e
                    } else b = void 0;
                    return b
                }
            }
        };
    var Oi = {},
        Pi = function(a, b) { if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
            void 0 === Oi[a] && (Oi[a] = Math.floor(Math.random() * b)); return Oi[a] };
    var Ri = { Kf: "HK", gi: "" };
    var Si = new function(a, b) { this.h = a;
        this.defaultValue = void 0 === b ? !1 : b }(1933);
    var Ti = function(a) { Ti[" "](a); return a };
    Ti[" "] = function() {};
    var Vi = function() { var a = Ui,
            b = "Tf"; if (a.Tf && a.hasOwnProperty(b)) return a.Tf; var c = new a; return a.Tf = c };
    var Ui = function() { var a = {};
        this.h = function() { var b = Si.h,
                c = Si.defaultValue; return null != a[b] ? a[b] : c };
        this.B = function() { a[Si.h] = !0 } };
    var Wi = [];

    function Xi() { var a = Wb("google_tag_data", {});
        a.ics || (a.ics = { entries: {}, set: Yi, update: Zi, addListener: $i, notifyListeners: aj, active: !1, usedDefault: !1, usedUpdate: !1, accessedDefault: !1, accessedAny: !1, wasSetLate: !1 }); return a.ics }

    function Yi(a, b, c, d, e, f) {
        var g = Xi();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                l = h[a] || {},
                n = l.region,
                p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update),
                    r = { region: p, initial: "granted" === b, update: l.update, quiet: q };
                if ("" !== d || !1 !== l.initial) h[a] = r;
                q && m.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, bj(a), aj(), vb("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function Zi(a, b) { var c = Xi();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0; if (void 0 != b) { var d = cj(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b; var g = cj(c, a);
            f.quiet ? (f.quiet = !1, bj(a)) : g !== d && bj(a) } }

    function $i(a, b) { Wi.push({ If: a, Nj: b }) }

    function bj(a) { for (var b = 0; b < Wi.length; ++b) { var c = Wi[b];
            Ea(c.If) && -1 !== c.If.indexOf(a) && (c.di = !0) } }

    function aj(a, b) { for (var c = 0; c < Wi.length; ++c) { var d = Wi[c]; if (d.di) { d.di = !1; try { d.Nj({ consentEventId: a, consentPriorityId: b }) } catch (e) {} } } }

    function cj(a, b) { var c = a.entries[b] || {}; return void 0 !== c.update ? c.update : c.initial }
    var dj = function(a) { var b = Xi();
            b.accessedAny = !0; return cj(b, a) },
        ej = function(a) { var b = Xi();
            b.accessedDefault = !0; return (b.entries[a] || {}).initial },
        fj = function(a) { var b = Xi();
            b.accessedAny = !0; return !(b.entries[a] || {}).quiet },
        gj = function() { if (!Vi().h()) return !1; var a = Xi();
            a.accessedAny = !0; return a.active },
        hj = function() { var a = Xi();
            a.accessedDefault = !0; return a.usedDefault },
        ij = function(a, b) { Xi().addListener(a, b) },
        jj = function(a, b) { Xi().notifyListeners(a, b) },
        kj = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!fj(b[e])) return !0;
                return !1
            }
            if (c()) { var d = !1;
                ij(b, function(e) { d || c() || (d = !0, a(e)) }) } else a({})
        },
        lj = function(a, b) {
            function c() { for (var f = [], g = 0; g < d.length; g++) { var h = d[g];!1 === dj(h) || e[h] || (f.push(h), e[h] = !0) } return f } var d = k(b) ? [b] : b,
                e = {};
            c().length !== d.length && ij(d, function(f) { var g = c();
                0 < g.length && (f.If = g, a(f)) }) };

    function mj() {}

    function nj() {};

    function oj(a) { for (var b = [], c = 0; c < pj.length; c++) { var d = a(pj[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-" } return b.join("") }
    var pj = [S.g.J, S.g.Z],
        qj = function(a) { var b = a[S.g.Ue];
            b && P(40); var c = a[S.g.Ve];
            c && P(41); for (var d = Ea(b) ? b : [b], e = { zc: 0 }; e.zc < d.length; e = { zc: e.zc }, ++e.zc) Ma(a, function(f) { return function(g, h) { if (g !== S.g.Ue && g !== S.g.Ve) { var l = d[f.zc],
                            n = Ri.Kf,
                            p = Ri.gi;
                        Xi().set(g, h, l, n, p, c) } } }(e)) },
        rj = 0,
        sj = function(a, b) { Ma(a, function(e, f) { Xi().update(e, f) });
            jj(b.eventId, b.priorityId); var c = Ta(),
                d = c - rj;
            rj && 0 <= d && 1E3 > d && P(66);
            rj = c },
        tj = function(a) { var b = dj(a); return void 0 != b ? b : !0 },
        uj = function() { return "G1" + oj(dj) },
        vj = function(a,
            b) { ij(a, b) },
        wj = function(a, b) { lj(a, b) },
        xj = function(a, b) { kj(a, b) };
    var yj = function(a) { var b = 1,
            c, d, e; if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b; return b };
    var zj = function(a, b, c) { for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) { var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, ""); if (h && h == a) { var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l) } } return d };
    var Aj = function(a, b) { var c = function() {};
            c.prototype = a.prototype; var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1)); return d },
        Bj = function(a) { var b = a; return function() { if (b) { var c = b;
                    b = null;
                    c() } } };

    function Cj(a) { return "null" !== a.origin };
    var Fj = function(a, b, c, d) { return Dj(d) ? zj(a, String(b || Ej()), c) : [] },
        Ij = function(a, b, c, d, e) { if (Dj(e)) { var f = Gj(a, d, e); if (1 === f.length) return f[0].id; if (0 !== f.length) { f = Hj(f, function(g) { return g.De }, b); if (1 === f.length) return f[0].id;
                    f = Hj(f, function(g) { return g.Dd }, c); return f[0] ? f[0].id : void 0 } } };

    function Jj(a, b, c, d) { var e = Ej(),
            f = window;
        Cj(f) && (f.document.cookie = a); var g = Ej(); return e != g || void 0 != c && 0 <= Fj(b, g, !1, d).indexOf(c) }
    var Nj = function(a, b, c, d) {
            function e(w, x, y) { if (null == y) return delete h[x], w;
                h[x] = y; return w + "; " + x + "=" + y }

            function f(w, x) { if (null == x) return delete h[x], w;
                h[x] = !0; return w + "; " + x }
            if (!Dj(c.Db)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Kj(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            g = e(g, "expires", l);
            g = e(g, "max-age", c.sk);
            g = e(g, "samesite",
                c.Mk);
            c.Ok && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) { for (var p = Lj(), q = void 0, r = !1, u = 0; u < p.length; ++u) { var t = "none" !== p[u] ? p[u] : void 0,
                        v = e(g, "domain", t);
                    v = f(v, c.flags); try { d && d(a, h) } catch (w) { q = w; continue }
                    r = !0; if (!Mj(t, c.path) && Jj(v, a, b, c.Db)) return 0 } if (q && !r) throw q; return 1 }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Mj(n, c.path) ? 1 : Jj(g, a, b, c.Db) ? 0 : 1
        },
        Oj = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Nj(a,
                b, c)
        };

    function Hj(a, b, c) { for (var d = [], e = [], f, g = 0; g < a.length; g++) { var h = a[g],
                l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h], f = l) : l === f && e.push(h) } return 0 < d.length ? d : e }

    function Gj(a, b, c) { for (var d = [], e = Fj(a, void 0, void 0, c), f = 0; f < e.length; f++) { var g = e[f].split("."),
                h = g.shift(); if (!b || -1 !== b.indexOf(h)) { var l = g.shift();
                l && (l = l.split("-"), d.push({ id: g.join("."), De: 1 * l[0] || 1, Dd: 1 * l[1] || 1 })) } } return d }
    var Kj = function(a) { a && 1200 < a.length && (a = a.substring(0, 1200)); return a },
        Pj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Qj = /(^|\.)doubleclick\.net$/i,
        Mj = function(a, b) { return Qj.test(window.document.location.hostname) || "/" === b && Pj.test(a) },
        Ej = function() { return Cj(window) ? window.document.cookie : "" },
        Lj = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) { var c = b[b.length - 1]; if (parseInt(c, 10).toString() === c) return ["none"] }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Qj.test(e) || Pj.test(e) || a.push("none");
            return a
        },
        Dj = function(a) { if (!Vi().h() || !a || !gj()) return !0; if (!fj(a)) return !1; var b = dj(a); return null == b ? !0 : !!b };
    var Rj = function(a) { var b = Math.round(2147483647 * Math.random()); return a ? String(b ^ yj(a) & 2147483647) : String(b) },
        Sj = function(a) { return [Rj(a), Math.round(Ta() / 1E3)].join(".") },
        Vj = function(a, b, c, d, e) { var f = Tj(b); return Ij(a, f, Uj(c), d, e) },
        Wj = function(a, b, c, d) { var e = "" + Tj(c),
                f = Uj(d);
            1 < f && (e += "-" + f); return [b, e, a].join(".") },
        Tj = function(a) { if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a; return a.split(".").length },
        Uj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };
    var Xj = function() { dh.dedupe_gclid || (dh.dedupe_gclid = "" + Sj()); return dh.dedupe_gclid };
    var Yj = function() { var a = !1; return a };
    var Ve = { N: "G-37B3799Y3F", Xb: "96315181" },
        Zj = { bi: "G-37B3799Y3F|GT-5734RSG", ci: "G-37B3799Y3F" };
    Ve.Af = Pa("");
    var ak = function() { return Zj.bi ? Zj.bi.split("|") : [Ve.N] },
        bk = function() { if (Zj.ci) return Zj.ci.split("|");
            P(84); return [] },
        ck = function() { this.container = {};
            this.destination = {};
            this.canonical = {} },
        ek = function() { for (var a = dk(), b = ak(), c = 0; c < b.length; c++) { var d = a.container[b[c]];!d || Da(d) ? a.container[b[c]] = { state: 2 } : d.state = 2 } for (var e = bk(), f = 0; f < e.length; f++) { var g = a.destination[e[f]];
                g && 0 === g.state && P(93);
                g ? g.state = 2 : a.destination[e[f]] = { state: 2 } }
            a.canonical[Ve.Xb] = 2 },
        fk = function(a) { return !!dk().container[a] },
        gk = function() { var a = dk().container,
                b; for (b in a)
                if (a.hasOwnProperty(b)) { var c = a[b]; if (Da(c)) { if (1 === c) return !0 } else if (1 === c.state) return !0 }
            return !1 },
        hk = function() { var a = {};
            Ma(dk().destination, function(b, c) { 0 === c.state && (a[b] = c) }); return a };

    function dk() { var a = dh.tidr;
        a || (a = new ck, dh.tidr = a); return a }
    var ik = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", GT: "t", HA: "h", MC: "m", GTM: "g", OPT: "o" },
        jk = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
        kk = function(a) {
            var b = Ve.N.split("-"),
                c = b[0].toUpperCase();
            if (K(45)) {
                var d = {};
                d.Gj = Ve.N;
                d.Ik = ch.Cf;
                d.Lk = ch.ed;
                d.qk = Ve.Af ? 2 : 1;
                kh ? (d.Qe = jk[c], d.Qe || (d.Qe = 0)) : d.Qe = qh ? 13 : 10;
                oh ? d.Zh = 1 : Yj() && (d.Zh = 2);
                var e;
                var f = d.Qe,
                    g = d.Zh;
                void 0 === f ? e = "" : (g || (g = 0), e = "" + Ef(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
                var h = d.pl,
                    l = 4 + e + (h ? "" + Ef(2, 1) +
                        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] : ""),
                    n, p = d.Lk;
                n = p && Df.test(p) ? "" + Ef(3, 2) + p : "";
                var q, r = d.Ik;
                q = r ? "" + Ef(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
                var u;
                var t = d.Gj;
                if (t && a) { var v = t.split("-"),
                        w = v[0].toUpperCase(); if ("GTM" !== w && "OPT" !== w) u = "";
                    else { var x = v[1];
                        u = "" + Ef(5, 3) + (1 + x.length) + (d.qk || 0) + x } } else u = "";
                return l + n + q + u
            }
            var y = ik[c] || "i",
                A = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                B = "w";
            kh && (B = Yj() ? "s" : "o");
            mh ? ("w" === B && (B = "x"), "o" === B &&
                (B = "q")) : oh ? ("w" === B && (B = "y"), "o" === B && (B = "r")) : qh && (B = "z");
            return "2" + B + y + (4 === ch.ed.length ? ch.ed.slice(1) : ch.ed) + A
        };

    function lk(a, b) { if ("" === a) return b; var c = Number(a); return isNaN(c) ? b : c };
    var mk = function(a, b, c) { a.addEventListener && a.addEventListener(b, c, !1) };

    function nk() { return Hb("iPhone") && !Hb("iPod") && !Hb("iPad") }

    function ok() { nk() || Hb("iPad") || Hb("iPod") };
    Hb("Opera");
    Hb("Trident") || Hb("MSIE");
    Hb("Edge");
    !Hb("Gecko") || -1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") || Hb("Trident") || Hb("MSIE") || Hb("Edge"); - 1 != Gb().toLowerCase().indexOf("webkit") && !Hb("Edge") && Hb("Mobile");
    Hb("Macintosh");
    Hb("Windows");
    Hb("Linux") || Hb("CrOS");
    var pk = na.navigator || null;
    pk && (pk.appVersion || "").indexOf("X11");
    Hb("Android");
    nk();
    Hb("iPad");
    Hb("iPod");
    ok();
    Gb().toLowerCase().indexOf("kaios");
    var qk = function(a, b, c, d) { for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) { var g = a.charCodeAt(e - 1); if (38 == g || 63 == g) { var h = a.charCodeAt(e + f); if (!h || 61 == h || 38 == h || 35 == h) return e }
                e += f + 1 } return -1 },
        rk = /#|$/,
        sk = function(a, b) { var c = a.search(rk),
                d = qk(a, 0, b, c); if (0 > d) return null; var e = a.indexOf("&", d); if (0 > e || e > c) e = c;
            d += b.length + 1; return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")) },
        tk = /[?&]($|#)/,
        uk = function(a, b, c) {
            for (var d, e = a.search(rk), f = 0, g, h = []; 0 <= (g = qk(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(tk, "$1");
            var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) { var q, r = d.indexOf("#");
                0 > r && (r = d.length); var u = d.indexOf("?"),
                    t;
                0 > u || u > r ? (u = r, t = "") : t = d.substring(u + 1, r);
                q = [d.slice(0, u), t, d.slice(r)]; var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                l = q[0] + (q[1] ? "?" + q[1] : "") + q[2] } else l = d;
            return l
        };
    var vk = function(a, b) { if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a) };

    function wk(a) { if (!a || !G.head) return null; var b = xk("META");
        G.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a; return b }
    var yk = function() { if (m.top == m) return 0; var a = m.location.ancestorOrigins; if (a) return a[a.length - 1] == m.location.origin ? 1 : 2; var b; var c = m.top; try { var d; if (d = !!c && null != c.location.href) b: { try { Ti(c.foo);
                        d = !0; break b } catch (e) {}
                    d = !1 }
                b = d } catch (e) { b = !1 } return b ? 1 : 2 },
        xk = function(a, b) { b = void 0 === b ? document : b; return b.createElement(String(a).toLowerCase()) };

    function zk(a, b, c) { a.google_image_requests || (a.google_image_requests = []); var d = xk("IMG", a.document); if (c) { var e = function() { if (c) { var f = a.google_image_requests,
                        g = yb(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1) }
                d.removeEventListener && d.removeEventListener("load", e, !1);
                d.removeEventListener && d.removeEventListener("error", e, !1) };
            mk(d, "load", e);
            mk(d, "error", e) }
        d.src = b;
        a.google_image_requests.push(d) }
    var Bk = function(a) { var b;
            b = void 0 === b ? !1 : b; var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            vk(a, function(d, e) { d && (c += "&" + e + "=" + encodeURIComponent(d)) });
            Ak(c, b) },
        Ak = function(a, b) { var c = window;
            b = void 0 === b ? !1 : b;
            c.fetch ? c.fetch(a, { keepalive: !0, credentials: "include", redirect: "follow", method: "get", mode: "no-cors" }) : zk(c, a, void 0 === b ? !1 : b) };
    var Ck = function() {};
    var Dk = function(a) { void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0); return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3 },
        Ek = function(a, b, c) { this.B = a;
            this.h = null;
            this.I = {};
            this.Ca = 0;
            this.T = void 0 === b ? 500 : b;
            this.F = void 0 === c ? !1 : c;
            this.D = null };
    ma(Ek, Ck);
    Ek.prototype.addEventListener = function(a) {
        var b = this,
            c = { internalBlockOnErrors: this.F },
            d = Bj(function() { return a(c) }),
            e = 0; - 1 !== this.T && (e = setTimeout(function() { c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d() }, this.T));
        var f = function(g, h) { clearTimeout(e);
            g ? (c = g, c.internalErrorState = Dk(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c) };
        try { Fk(this, "addEventListener", f) } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Ek.prototype.removeEventListener = function(a) { a && a.listenerId && Fk(this, "removeEventListener", null, a.listenerId) };
    var Hk = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: { if (a.publisher && a.publisher.restrictions) { var f = a.publisher.restrictions[b]; if (void 0 !== f) { e = f[void 0 === d ? "755" : d]; break a } }
                e = void 0 }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var l;
            if (0 === h)
                if (a.purpose && a.vendor) { var n = Gk(a.vendor.consents, void 0 === d ? "755" : d);
                    l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Gk(a.purpose.consents, b) } else l = !0;
            else l = 1 === h ? a.purpose && a.vendor ? Gk(a.purpose.legitimateInterests,
                b) && Gk(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return l
        },
        Gk = function(a, b) { return !(!a || !a[b]) },
        Fk = function(a, b, c, d) { c || (c = function() {}); if ("function" === typeof a.B.__tcfapi) { var e = a.B.__tcfapi;
                e(b, 2, c, d) } else if (Ik(a)) { Jk(a); var f = ++a.Ca;
                a.I[f] = c; if (a.h) { var g = {};
                    a.h.postMessage((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }, g), "*") } } else c({}, !1) },
        Ik = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.B, d = 0; 50 > d; ++d) {
                    var e;
                    try { e = !(!c.frames || !c.frames.__tcfapiLocator) } catch (h) {
                        e = !1
                    }
                    if (e) { b = c; break a }
                    var f;
                    b: { try { var g = c.parent; if (g && g != c) { f = g; break b } } catch (h) {}
                        f = null }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Jk = function(a) { a.D || (a.D = function(b) { try { var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.I[c.callId](c.returnValue, c.success) } catch (d) {} }, mk(a.B, "message", a.D)) },
        Kk = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Dk(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Bk({ e: String(a.internalErrorState) }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Lk = !0;
    Lk = !1;
    var Mk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        Nk = lk("", 550),
        Ok = lk("", 500);

    function Pk() { var a = dh.tcf || {}; return dh.tcf = a }
    var Uk = function() {
        var a = Pk(),
            b = new Ek(m, Lk ? 3E3 : -1);
        if (!0 === m.gtag_enable_tcf_support && !a.active && ("function" === typeof m.__tcfapi || "function" === typeof b.B.__tcfapi || null != Ik(b))) {
            a.active = !0;
            a.Gd = {};
            Qk();
            var c = null;
            Lk ? c = m.setTimeout(function() { Rk(a);
                Sk(a);
                c = null }, Ok) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) Rk(a), Sk(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = Tk(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) { var f = {},
                                g; for (g in Mk)
                                if (Mk.hasOwnProperty(g))
                                    if ("1" === g) { var h, l = d,
                                            n = !0;
                                        n = void 0 === n ? !1 : n;
                                        h = Kk(l) ? !1 === l.gdprApplies || "tcunavailable" === l.tcString || void 0 === l.gdprApplies && !n || "string" !== typeof l.tcString || !l.tcString.length ? !0 : Hk(l, "1", 0) : !1;
                                        f["1"] = h } else f[g] = Hk(d, g, Mk[g]);
                            e = f }
                        e && (a.tcString = d.tcString || "tcempty", a.Gd = e, Sk(a))
                    }
                })
            } catch (d) { c && (clearTimeout(c), c = null), Rk(a), Sk(a) }
        }
    };

    function Rk(a) { a.type = "e";
        a.tcString = "tcunavailable";
        Lk && (a.Gd = Tk()) }

    function Qk() { var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Nk, a);
        qj(b) }

    function Tk() { var a = {},
            b; for (b in Mk) Mk.hasOwnProperty(b) && (a[b] = !0); return a }

    function Sk(a) { var b = {},
            c = (b.ad_storage = a.Gd["1"] ? "granted" : "denied", b);
        sj(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Vk() }) }
    var Vk = function() { var a = Pk(); return a.active ? a.tcString || "" : "" },
        Wk = function() { var a = Pk(); return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "" },
        Xk = function(a) { if (!Mk.hasOwnProperty(String(a))) return !0; var b = Pk(); return b.active && b.Gd ? !!b.Gd[String(a)] : !0 };

    function Yk(a, b, c, d) { var e, f = Number(null != a.hb ? a.hb : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3))); return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, Db: d } };
    var Zk = ["1"],
        $k = {},
        al = {},
        cl = function(a) { return $k[bl(a)] },
        fl = function(a, b) { b = void 0 === b ? !0 : b; var c = bl(a.prefix); if (!$k[c] && !dl(c, a.path, a.domain) && b) { var d = bl(a.prefix),
                    e = Sj(); if (0 === el(d, e, a)) { var f = Wb("google_tag_data", {});
                    f._gcl_au ? vb("GTM", 57) : f._gcl_au = e }
                dl(c, a.path, a.domain) } };

    function el(a, b, c, d) { var e = Wj(b, "1", c.domain, c.path),
            f = Yk(c, d);
        f.Db = "ad_storage"; return Oj(a, e, f) }

    function dl(a, b, c) { var d = Vj(a, b, c, Zk, "ad_storage"); if (!d) return !1; var e = d.split(".");
        5 === e.length ? ($k[a] = e.slice(0, 2).join("."), al[a] = { id: e.slice(2, 4).join("."), Yh: Number(e[4]) || 0 }) : 3 === e.length ? al[a] = { id: e.slice(0, 2).join("."), Yh: Number(e[2]) || 0 } : $k[a] = d; return !0 }

    function bl(a) { return (a || "_gcl") + "_au" };
    var gl;
    var kl = function() { var a = hl,
                b = il,
                c = jl(),
                d = function(g) { a(g.target || g.srcElement || {}) },
                e = function(g) { b(g.target || g.srcElement || {}) }; if (!c.init) { ec(G, "mousedown", d);
                ec(G, "keyup", d);
                ec(G, "submit", e); var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() { b(this);
                    f.call(this) };
                c.init = !0 } },
        ll = function(a, b, c, d, e) { var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e };
            jl().decorators.push(f) },
        ml = function(a, b, c) {
            for (var d = jl().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: { var l = g.domains,
                        n = a,
                        p = !!g.sameHost; if (l && (p || n !== G.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) { if (l[q].test(n)) { h = !0; break a } } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) { h = !0; break a }
                    h = !1 }
                if (h) { var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback()) }
            }
            return e
        };

    function jl() { var a = Wb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b); return b };
    var nl = /(.*?)\*(.*?)\*(.*)/,
        El = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Fl = /^(?:www\.|m\.|amp\.)+/,
        Gl = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Hl(a) { return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)") }
    var Jl = function(a) { var b = [],
            c; for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(sb(String(d)))) }
        var e = b.join("*"); return ["1", Il(e), e].join("*") };

    function Il(a, b) { var c = [m.navigator.userAgent, (new Date).getTimezoneOffset(), Ub.userLanguage || Ub.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d; if (!(d = gl)) { for (var e = Array(256), f = 0; 256 > f; f++) { for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g }
            d = e }
        gl = d; for (var l = 4294967295, n = 0; n < c.length; n++) l = l >>> 8 ^ gl[(l ^ c.charCodeAt(n)) & 255]; return ((l ^ -1) >>> 0).toString(36) }

    function Kl() { return function(a) { var b = ki(m.location.href),
                c = b.search.replace("?", ""),
                d = fi(c, "_gl", !1, !0) || "";
            a.query = Ll(d) || {}; var e = ii(b, "fragment").match(Hl("_gl"));
            a.fragment = Ll(e && e[3] || "") || {} } }

    function Ml(a, b) { var c = Hl(a).exec(b),
            d = b; if (c) { var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f) } return d }
    var Nl = function(a, b) { b || (b = "_gl"); var c = Gl.exec(a); if (!c) return ""; var d = c[1],
                e = Ml(b, (c[2] || "").slice(1)),
                f = Ml(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f); return "" + d + e + f },
        Ol = function(a) { var b = Kl(),
                c = jl();
            c.data || (c.data = { query: {}, fragment: {} }, b(c.data)); var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment)); return d },
        Ll = function(a) {
            try { var b = Pl(a, 3); if (void 0 !== b) { for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) { var f = d[e],
                            g = tb(d[e + 1]);
                        c[f] = g }
                    vb("TAGGING", 6); return c } } catch (h) {
                vb("TAGGING",
                    8)
            }
        };

    function Pl(a, b) { if (a) { var c;
            a: { for (var d = a, e = 0; 3 > e; ++e) { var f = nl.exec(d); if (f) { c = f; break a }
                    d = decodeURIComponent(d) }
                c = void 0 }
            var g = c; if (g && "1" === g[1]) { var h = g[3],
                    l;
                a: { for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Il(h, p)) { l = !0; break a }
                    l = !1 }
                if (l) return h;
                vb("TAGGING", 7) } } }

    function Ql(a, b, c, d) {
        function e(p) { p = Ml(a, p); var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&"); return p + n }
        d = void 0 === d ? !1 : d; var f = Gl.exec(c); if (!f) return ""; var g = f[1],
            h = f[2] || "",
            l = f[3] || "",
            n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1)); return "" + g + h + l }

    function Rl(a, b) { var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = ml(b, 1, c),
            e = ml(b, 2, c),
            f = ml(b, 3, c); if (Xa(d)) { var g = Jl(d);
            c ? Sl("_gl", g, a) : Tl("_gl", g, a, !1) } if (!c && Xa(e)) { var h = Jl(e);
            Tl("_gl", h, a, !0) } for (var l in f)
            if (f.hasOwnProperty(l)) a: { var n = l,
                    p = f[l],
                    q = a; if (q.tagName) { if ("a" === q.tagName.toLowerCase()) { Tl(n, p, q); break a } if ("form" === q.tagName.toLowerCase()) { Sl(n, p, q); break a } } "string" == typeof q && Ql(n, p, q) } }

    function Tl(a, b, c, d) { if (c.href) { var e = Ql(a, b, c.href, void 0 === d ? !1 : d);
            Fb.test(e) && (c.href = e) } }

    function Sl(a, b, c) { if (c && c.action) { var d = (c.method || "").toLowerCase(); if ("get" === d) { for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) { var h = e[g]; if (h.name === a) { h.setAttribute("value", b);
                        f = !0; break } } if (!f) { var l = G.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l) } } else if ("post" === d) { var n = Ql(a, b, c.action);
                Fb.test(n) && (c.action = n) } } }

    function hl(a) { try { var b;
            a: { for (var c = a, d = 100; c && 0 < d;) { if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) { b = c; break a }
                    c = c.parentNode;
                    d-- }
                b = null }
            var e = b; if (e) { var f = e.protocol; "http:" !== f && "https:" !== f || Rl(e, e.hostname) } } catch (g) {} }

    function il(a) { try { if (a.action) { var b = ii(ki(a.action), "host");
                Rl(a, b) } } catch (c) {} }
    var Ul = function(a, b, c, d) { kl();
            ll(a, b, "fragment" === c ? 2 : 1, !!d, !1) },
        Vl = function(a, b) { kl();
            ll(a, [hi(m.location, "host", !0)], b, !0, !0) },
        Wl = function() {
            var a = G.location.hostname,
                b = El.exec(G.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) { var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g) } else if (d) { if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-") }
            var h = a.replace(Fl, ""),
                l = e.replace(Fl, ""),
                n;
            if (!(n = h === l)) {
                var p = "." + l;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        Xl = function(a, b) { return !1 === a ? !1 : a || b || Wl() };
    var Yl = {};
    var Zl = function(a) { for (var b = [], c = G.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) { var f = c[e].match(d);
            f && b.push({ sg: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 }) }
        b.sort(function(g, h) { return h.timestamp - g.timestamp }); return b };

    function $l(a, b) { var c = Zl(a),
            d = {}; if (!c || !c.length) return d; for (var e = 0; e < c.length; e++) { var f = c[e].value.split("."); if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) { d[c[e].sg] || (d[c[e].sg] = []); var g = { version: f[0], timestamp: 1E3 * Number(f[1]), la: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].sg].push(g) } } return d };
    var am = /^\w+$/,
        bm = /^[\w-]+$/,
        cm = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        dm = function() { if (!Vi().h() || !gj()) return !0; var a = dj("ad_storage"); return null == a ? !0 : !!a },
        em = function(a, b) { fj("ad_storage") ? dm() ? a() : lj(a, "ad_storage") : b ? vb("TAGGING", 3) : kj(function() { em(a, !0) }, ["ad_storage"]) },
        gm = function(a) { return fm(a).map(function(b) { return b.la }) },
        fm = function(a) {
            var b = [];
            if (!Cj(m) || !G.cookie) return b;
            var c = Fj(a, G.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Nd: d.Nd }, e++) { var f = hm(c[e]); if (null != f) { var g = f,
                        h = g.version;
                    d.Nd = g.la; var l = g.timestamp,
                        n = g.labels,
                        p = Ha(b, function(q) { return function(r) { return r.la === q.Nd } }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, l), p.labels = im(p.labels, n || [])) : b.push({ version: h, la: d.Nd, timestamp: l, labels: n }) } }
            b.sort(function(q, r) { return r.timestamp - q.timestamp });
            return jm(b)
        };

    function im(a, b) { for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]); for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]); return d }

    function km(a) { return a && "string" == typeof a && a.match(am) ? a : "_gcl" }
    var mm = function() { var a = ki(m.location.href),
                b = ii(a, "query", !1, void 0, "gclid"),
                c = ii(a, "query", !1, void 0, "gclsrc"),
                d = ii(a, "query", !1, void 0, "wbraid"),
                e = ii(a, "query", !1, void 0, "dclid"); if (!b || !c || !d) { var f = a.hash.replace("#", "");
                b = b || fi(f, "gclid", !1);
                c = c || fi(f, "gclsrc", !1);
                d = d || fi(f, "wbraid", !1) } return lm(b, c, e, d) },
        lm = function(a, b, c, d) {
            var e = {},
                f = function(g, h) { e[h] || (e[h] = []);
                    e[h].push(g) };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && bm.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(bm)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        om = function(a) { var b = mm();
            em(function() { nm(b, !1, a) }) };

    function nm(a, b, c, d, e) {
        function f(w, x) { var y = pm(w, g);
            y && (Oj(y, x, h), l = !0) }
        c = c || {};
        e = e || [];
        var g = km(c.prefix);
        d = d || Ta();
        var h = Yk(c, d, !0);
        h.Db = "ad_storage";
        var l = !1,
            n = Math.round(d / 1E3),
            p = function(w) { var x = ["GCL", n, w];
                0 < e.length && x.push(e.join(".")); return x.join(".") };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Yl.enable_gbraid_cookie_write ? 0 : Yl.enable_gbraid_cookie_write) && !l && a.gb) {
            var q = a.gb[0],
                r = pm("gb",
                    g),
                u = !1;
            if (!b)
                for (var t = fm(r), v = 0; v < t.length; v++) t[v].la === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
            u || f("gb", p(q))
        }
    }
    var rm = function(a, b) { var c = Ol(!0);
            em(function() { for (var d = km(b.prefix), e = 0; e < a.length; ++e) { var f = a[e]; if (void 0 !== cm[f]) { var g = pm(f, d),
                            h = c[g]; if (h) { var l = Math.min(qm(h), Ta()),
                                n;
                            b: { var p = l; if (Cj(m))
                                    for (var q = Fj(g, G.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (qm(q[r]) > p) { n = !0; break b }
                                n = !1 }
                            if (!n) { var u = Yk(b, l, !0);
                                u.Db = "ad_storage";
                                Oj(g, h, u) } } } }
                nm(lm(c.gclid, c.gclsrc), !1, b) }) },
        pm = function(a, b) { var c = cm[a]; if (void 0 !== c) return b + c },
        qm = function(a) {
            return 0 !== sm(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function hm(a) { var b = sm(a.split(".")); return 0 === b.length ? null : { version: b[0], la: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3) } }

    function sm(a) { return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !bm.test(a[2]) ? [] : a }
    var tm = function(a, b, c, d, e) { if (Ea(b) && Cj(m)) { var f = km(e),
                    g = function() { for (var h = {}, l = 0; l < a.length; ++l) { var n = pm(a[l], f); if (n) { var p = Fj(n, G.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1]) } } return h };
                em(function() { Ul(g, b, c, d) }) } },
        jm = function(a) { return a.filter(function(b) { return bm.test(b.la) }) },
        um = function(a, b) {
            if (Cj(m)) {
                for (var c = km(b.prefix), d = {}, e = 0; e < a.length; e++) cm[a[e]] && (d[a[e]] = cm[a[e]]);
                em(function() {
                    Ma(d, function(f, g) {
                        var h = Fj(c + g, G.cookie, void 0, "ad_storage");
                        h.sort(function(u,
                            t) { return qm(t) - qm(u) });
                        if (h.length) { var l = h[0],
                                n = qm(l),
                                p = 0 !== sm(l.split(".")).length ? l.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== sm(l.split(".")).length ? l.split(".")[2] : void 0;
                            q[f] = [r];
                            nm(q, !0, b, n, p) }
                    })
                })
            }
        };

    function vm(a, b) { for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1 }
    var wm = function(a) {
            function b(e, f, g) { g && (e[f] = g) } if (gj()) { var c = mm(); if (vm(c, a)) { var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Vl(function() { return d }, 3);
                    Vl(function() { var e = {}; return e._up = "1", e }, 1) } } },
        xm = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!dm()) return e;
            var f = fm(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    l = f[0].timestamp,
                    n = [h.version, Math.round(l /
                        1E3), h.la].concat(h.labels || [], [b]).join("."),
                    p = Yk(c, l, !0);
                p.Db = "ad_storage";
                Oj(a, n, p)
            }
            return e
        };

    function ym(a, b) { var c = km(b),
            d = pm(a, c); if (!d) return 0; for (var e = fm(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp); return f }

    function zm(a) { var b = 0,
            c; for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp)); return b }
    var Am = function(a) { var b = Math.max(ym("aw", a), zm(dm() ? $l() : {})); return Math.max(ym("gb", a), zm(dm() ? $l("_gac_gb", !0) : {})) > b };
    var Fm = /[A-Z]+/,
        Gm = /\s/,
        Hm = function(a) { if (k(a)) { a = Ra(a); var b = a.indexOf("-"); if (!(0 > b)) { var c = a.substring(0, b); if (Fm.test(c)) { for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Gm.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return { id: a, prefix: c, V: c + "-" + d[0], M: d } } } } },
        Jm = function(a) { for (var b = {}, c = 0; c < a.length; ++c) { var d = Hm(a[c]);
                d && (b[d.id] = d) }
            Im(b); var e = [];
            Ma(b, function(f, g) { e.push(g) }); return e };

    function Im(a) { var b = [],
            c; for (c in a)
            if (a.hasOwnProperty(c)) { var d = a[c]; "AW" === d.prefix && d.M[1] && b.push(d.V) }
        for (var e = 0; e < b.length; ++e) delete a[b[e]] };
    var Lm = function(a, b, c, d) { return (2 === Km() || d || "http:" != m.location.protocol ? a : b) + c },
        Km = function() { var a = bc(),
                b; if (1 === a) a: { var c = sh;c = c.toLowerCase(); for (var d = "https://" + c, e = "http://" + c, f = 1, g = G.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) { var l = g[h].src; if (l) { l = l.toLowerCase(); if (0 === l.indexOf(e)) { b = 3; break a }
                        1 === f && 0 === l.indexOf(d) && (f = 2) } }
                b = f }
            else b = a; return b };
    var Xm = function(a, b, c) { this.target = a;
            this.eventName = b;
            this.s = c;
            this.C = {};
            this.metadata = I(c.eventMetadata || {});
            this.K = !1 },
        Ym = function(a, b, c) { var d = T(a.s, b);
            void 0 !== d ? a.C[b] = d : void 0 !== c && (a.C[b] = c) },
        Zm = function(a, b, c) { var d = Uh(a.target.V); return d && d.hasOwnProperty(b) ? d[b] : c };

    function $m(a) {
        return {
            getDestinationId: function() { return a.target.V },
            getEventName: function() { return a.eventName },
            setEventName: function(b) { return void(a.eventName = b) },
            getHitData: function(b) { return a.C[b] },
            setHitData: function(b, c) { return void(a.C[b] = c) },
            setHitDataIfNotDefined: function(b, c) { void 0 === a.C[b] && (a.C[b] = c) },
            copyToHitData: function(b, c) { Ym(a, b, c) },
            getMetadata: function(b) { return a.metadata[b] },
            setMetadata: function(b, c) { return void(a.metadata[b] = c) },
            abort: function() { return void(a.K = !0) },
            getProcessedEvent: function() { return a },
            getFromEventContext: function(b) { return T(a.s, b) }
        }
    };
    var bn = function(a) { var b = an[a.target.V]; if (!a.K && b)
                for (var c = $m(a), d = 0; d < b.length; ++d) { try { b[d](c) } catch (e) { a.K = !0 } if (a.K) break } },
        cn = function(a, b) { var c = an[a];
            c || (c = an[a] = []);
            c.push(b) },
        an = {};
    var un = ["L", "S", "Y"],
        vn = ["S", "E"],
        wn = { sampleRate: "0.005000", ui: "", si: Number("5"), ri: Number("") },
        xn = 0 <= G.location.search.indexOf("?gtm_latency=") || 0 <= G.location.search.indexOf("&gtm_latency="),
        yn;
    if (!(yn = xn)) { var zn = Math.random(),
            An = wn.sampleRate;
        yn = zn < An }
    var Bn = yn,
        Cn = "https://www.googletagmanager.com/a?id=" + Ve.N + "&cv=1",
        Dn = { label: Ve.N + " Container", children: [{ label: "Initialization", children: [] }] };

    function En() { return [Cn, "&v=3&t=t", "&pid=" + Ja(), "&rv=" + ch.ed].join("") }
    var Fn = En();

    function Gn() { Fn = En() }
    var Hn = {},
        In = "",
        Jn = "",
        Kn = "",
        Ln = "",
        Mn = [],
        Nn = "",
        On = {},
        Pn = !1,
        Qn = {},
        Rn = {},
        Sn = {},
        Tn = "",
        Un = void 0,
        Vn = {},
        Wn = {},
        Xn = void 0,
        Yn = 5;
    0 < wn.si && (Yn = wn.si);
    var Zn = function(a, b) { for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0); return { hk: function() { return c < a ? !1 : Ta() - d[c % a] < b }, Fk: function() { var f = c++ % a;
                    d[f] = Ta() } } }(Yn, 1E3),
        $n = 1E3;

    function ao(a, b) {
        var c = Un;
        if (void 0 === c) return "";
        var d = xb("GTM"),
            e = xb("TAGGING"),
            f = xb("HEALTH"),
            g = Fn,
            h = Hn[c] ? "" : "&es=1",
            l = Vn[c],
            n = bo(c),
            p = co(),
            q = In,
            r = Jn,
            u = Tn,
            t = eo(a),
            v = Kn,
            w = Ln,
            x = fo(a, b),
            y;
        return [g, h, l, n, d ? "&u=" + d : "", e ? "&ut=" + e : "", f ? "&h=" + f : "", p, q, r, u, t, v, w, x, y, Nn ? "&dl=" + encodeURIComponent(Nn) : "", 0 < Mn.length ? "&tdp=" + Mn.join(".") :
            "", ch.Cf ? "&x=" + ch.Cf : "", "&z=0"
        ].join("")
    }

    function ho(a) { Xn && (m.clearTimeout(Xn), Xn = void 0); if (void 0 !== Un && (!Hn[Un] || In || Jn || io(a)))
            if (void 0 === jo[Un] && (Wn[Un] || Zn.hk() || 0 >= $n--)) P(1), Wn[Un] = !0;
            else { void 0 === jo[Un] && Zn.Fk(); var b = ao(!0, a);
                a ? kc(b) : dc(b); if (Ln || Nn && 0 < Mn.length) { var c = b.replace("/a?", "/td?");
                    dc(c) }
                Hn[Un] = !0;
                Nn = Ln = Kn = Tn = Jn = In = "";
                Mn = [] } }

    function ko() { Xn || (Xn = m.setTimeout(ho, 500)) }

    function lo(a) { return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*" }

    function mo() { 2022 <= ao().length && ho() }

    function co() { return "&tc=" + ve.filter(function(a) { return a }).length }
    var oo = function(a, b) { if (Bn && !Wn[a] && Un !== a) { ho();
                Un = a;
                Kn = In = "";
                Vn[a] = "&e=" + lo(b) + "&eid=" + a;
                ko(); } },
        po = function(a, b, c, d) { if (Bn && b) { var e, f = String(b[Wd.cb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f; var g = c + e; if (!Wn[a]) { a !== Un && (ho(), Un = a);
                    In = In ? In + "." + g : "&tr=" + g; var l = b["function"]; if (!l) throw Error("Error: No function name given for function call."); var n = (xe[l] ? "1" : "2") + e;
                    Kn = Kn ? Kn + "." + n : "&ti=" + n;
                    ko();
                    mo() } } };

    function eo(a) {}

    function bo(a) {}
    var wo = function(a, b, c) { if (Bn && void 0 !== a && !Wn[a]) { a !== Un && (ho(), Un = a); var d = c + b;
                Jn = Jn ? Jn + "." + d : "&epr=" + d;
                ko();
                mo() } },
        xo = function(a, b, c) {},
        yo = ["S", "P", "C", "Z"],
        zo = {},
        Ao = (zo[1] = 5, zo[2] = 5, zo[3] = 5, zo),
        Bo = {},
        jo = {},
        go = void 0,
        Co = function(a, b) {
            var c = !1;
            if (!Bn || jo[a] || 0 === Ao[b]) return !1;
            --Ao[b];
            jo[a] = b;
            c = !0;
            return c
        },
        Do = function(a, b, c) { if (!Bn || !jo[a]) return; var d = Bo[a];
            d || (Bo[a] = d = {});
            d[b] = c; };

    function fo(a, b) { var c; if (!Un || !io(b)) return ""; var d = Bo[Un];
        c = "&al=" + yo.filter(function(e) { return void 0 !== d[e] }).map(function(e) { return e + Math.floor(d[e]) }).join(".") + (".Z" + jo[Un]);
        a && delete Bo[Un]; return c }

    function io(a) { var b = !1; if (!Un || !Bo[Un]) return !1;
        b = a || "C" in Bo[Un]; return b }
    var Eo = function() { if (Bn) { m.setInterval(Gn, 864E5);
            ec(m, "pagehide", function() { Un && jo[Un] && ho(!0); for (var a in Bo) Bo.hasOwnProperty(a) && (Un = Number(a), ho(!0)); }); } };
    var Fo = function(a, b, c, d, e, f, g, h, l, n, p, q) { this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.I = d;
            this.B = e;
            this.F = f;
            this.T = g;
            this.D = h;
            this.eventMetadata = l;
            this.X = n;
            this.W = p;
            this.H = q },
        T = function(a, b, c) { if (void 0 !== a.h[b]) return a.h[b]; if (void 0 !== a.I[b]) return a.I[b]; if (void 0 !== a.B[b]) return a.B[b];
            Bn && Go(a, a.F[b], a.T[b]) && (P(71), P(79)); return void 0 !== a.F[b] ? a.F[b] : void 0 !== a.D[b] ? a.D[b] : c },
        Ho = function(a) {
            function b(g) { for (var h = Object.keys(g), l = 0; l < h.length; ++l) c[h[l]] = 1 }
            var c = {};
            b(a.h);
            b(a.I);
            b(a.B);
            b(a.F);
            if (Bn)
                for (var d = Object.keys(a.T), e = 0; e < d.length; e++) { var f = d[e]; if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) { P(71);
                        P(80); break } }
            return Object.keys(c)
        },
        Io = function(a, b, c) {
            function d(l) { Cc(l) && Ma(l, function(n, p) { f = !0;
                    e[n] = p }) } var e = {},
                f = !1;
            c && 1 !== c || (d(a.D[b]), d(a.F[b]), d(a.B[b]), d(a.I[b]));
            c && 2 !== c || d(a.h[b]); if (Bn) { var g = f,
                    h = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.D[b]), d(a.T[b]), d(a.B[b]), d(a.I[b]));
                c && 2 !== c || d(a.h[b]); if (f !== g || Go(a, e, h)) P(71), P(81);
                f = g;
                e = h } return f ? e : void 0 },
        Jo = function(a) { var b = [S.g.Oc, S.g.Vd, S.g.Wd, S.g.Xd, S.g.Yd, S.g.Zd, S.g.ae],
                c = {},
                d = !1,
                e = function(h) { for (var l = 0; l < b.length; l++) void 0 !== h[b[l]] && (c[b[l]] = h[b[l]], d = !0); return d }; if (e(a.h) || e(a.I) || e(a.B)) return c;
            e(a.F); if (Bn) { var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.T);
                Go(a, c, f) && (P(71), P(82));
                c = f;
                d = g } if (d) return c;
            e(a.D); return c },
        Go = function(a, b, c) {
            if (!Bn) return !1;
            try {
                if (b === c) return !1;
                var d = Ac(b);
                if (d !== Ac(c) || !(Cc(b) && Cc(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (Go(a,
                                b[e], c[e])) return !0
                } else { for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || Go(a, b[g], c[g])) return !0 }
            } catch (h) { P(72) }
            return !1
        },
        Ko = function(a, b) { this.gj = a;
            this.ij = b;
            this.F = {};
            this.xh = {};
            this.h = {};
            this.I = {};
            this.B = {};
            this.cd = {};
            this.D = {};
            this.Cc = function() {};
            this.Ca = function() {};
            this.T = !1 },
        Lo = function(a, b) { a.F = b; return a },
        Mo = function(a, b) { a.xh = b; return a },
        No = function(a, b) { a.h = b; return a },
        Oo = function(a, b) { a.I = b; return a },
        Po = function(a, b) { a.B = b; return a },
        Qo = function(a,
            b) { a.cd = b; return a },
        Ro = function(a, b) { a.D = b || {}; return a },
        So = function(a, b) { a.Cc = b; return a },
        To = function(a, b) { a.Ca = b; return a },
        Uo = function(a) { a.T = !0; return a },
        Vo = function(a) { return new Fo(a.gj, a.ij, a.F, a.xh, a.h, a.I, a.B, a.cd, a.D, a.Cc, a.Ca, a.T) };
    var Zo = function(a) { for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128) } return b };
    Ib();
    nk() || Hb("iPod");
    Hb("iPad");
    !Hb("Android") || Jb() || Ib() || Hb("Opera") || Hb("Silk");
    Jb();
    !Hb("Safari") || Jb() || Hb("Coast") || Hb("Opera") || Hb("Edge") || Hb("Edg/") || Hb("OPR") || Ib() || Hb("Silk") || Hb("Android") || ok();
    var $o = {},
        ap = null,
        bp = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) { var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e }
            var f = 4;
            void 0 === f && (f = 0);
            if (!ap) { ap = {}; for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) { var n = g.concat(h[l].split(""));
                    $o[l] = n; for (var p = 0; p < n.length; p++) { var q = n[p];
                        void 0 === ap[q] && (ap[q] = p) } } }
            for (var r = $o[f], u = Array(Math.floor(b.length / 3)), t = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    C = r[(x & 3) << 4 | y >> 4],
                    E = r[(y & 15) << 2 | A >> 6],
                    J = r[A & 63];
                u[w++] = "" + B + C + E + J
            }
            var D = 0,
                N = t;
            switch (b.length - v) {
                case 2:
                    D = b[v + 1], N = r[(D & 15) << 2] || t;
                case 1:
                    var Q = b[v];
                    u[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | D >> 4] + N + t }
            return u.join("")
        };
    var cp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function dp(a) { var b; return null != (b = a.google_tag_data) ? b : a.google_tag_data = {} }

    function ep() { var a = m.google_tag_data,
            b; if (null != a && a.uach) { var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d } else b = null; return b }

    function fp() { var a, b; return null != (b = null == (a = m.google_tag_data) ? void 0 : a.uach_promise) ? b : null }

    function gp(a) { var b, c; return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues) }

    function hp() { var a = m; if (!gp(a)) return null; var b = dp(a); if (b.uach_promise) return b.uach_promise; var c = a.navigator.userAgentData.getHighEntropyValues(cp).then(function(d) { null != b.uach || (b.uach = d); return d }); return b.uach_promise = c };
    var ip, jp = function() { if (gp(m) && (ip = Ta(), !fp())) { var a = hp();
                a && (a.then(function() { P(95); }), a.catch(function() { P(96) })) } },
        lp = function(a) {
            var b = kp.al,
                c = function(g, h) { try { a(g, h) } catch (l) {} },
                d = ep();
            if (d) c(d);
            else {
                var e = fp();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = m.setTimeout(function() { c.zd || (c.zd = !0, P(106), c(null, Error("Timeout"))) }, b);
                    e.then(function(g) { c.zd || (c.zd = !0, P(104), m.clearTimeout(f), c(g)) }).catch(function(g) { c.zd || (c.zd = !0, P(105), m.clearTimeout(f), c(null, g)) })
                } else c(null)
            }
        },
        mp = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            a && (b.C[S.g.pf] = a.architecture, b.C[S.g.qf] = a.bitness, a.fullVersionList && (b.C[S.g.rf] = a.fullVersionList.map(function(d) {
                return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version ||
                    "")
            }).join("|")), c && (b.C[S.g.nh] = a.mobile ? "1" : "0"), b.C[S.g.sf] = a.model, b.C[S.g.tf] = a.platform, b.C[S.g.uf] = a.platformVersion, b.C[S.g.vf] = a.wow64 ? "1" : "0")
        };

    function np() { return "attribution-reporting" }

    function op(a) { var b;
        b = void 0 === b ? document : b; var c; return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a)) };
    var pp = !1;

    function qp() { if (op("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup)) return !0;
        pp || (wk('A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), pp = !0); return op("join-ad-interest-group") && Ca(Ub.joinAdInterestGroup) }

    function rp(a, b) { var c = void 0; try { c = G.querySelector('iframe[data-tagging-id="' + b + '"]') } catch (e) {} if (c) { var d = Number(c.dataset.loadTime); if (d && 6E4 > Ta() - d) { vb("TAGGING", 9); return } } else try { if (50 <= G.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) { vb("TAGGING", 10); return } } catch (e) {}
        cc(a, void 0, { allow: "join-ad-interest-group" }, { taggingId: b, loadTime: Ta() }, c) }

    function sp() { return K(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net" };
    var tp = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        up = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        vp = /^\d+\.fls\.doubleclick\.net$/,
        wp = /;gac=([^;?]+)/,
        xp = /;gacgb=([^;?]+)/,
        yp = /;gclaw=([^;?]+)/,
        zp = /;gclgb=([^;?]+)/;

    function Ap(a, b) { if (vp.test(G.location.host)) { var c = G.location.href.match(b); return c && 2 == c.length && c[1].match(tp) ? decodeURIComponent(c[1]) : "" } var d = [],
            e; for (e in a) { for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].la);
            d.push(e + ":" + f.join(",")) } return 0 < d.length ? d.join(";") : "" }
    var Bp = function(a, b, c) { var d = dm() ? $l("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g; for (g in d) { var h = xm("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) { return 1 === l });
            e.push(g + ":" + h.join(",")) } return { Qj: f ? e.join(";") : "", Pj: Ap(d, xp) } };

    function Cp(a, b, c) { if (vp.test(G.location.host)) { var d = G.location.href.match(c); if (d && 2 == d.length && d[1].match(up)) return [{ la: d[1] }] } else return fm((a || "_gcl") + b); return [] }
    var Dp = function(a) { return Cp(a, "_aw", yp).map(function(b) { return b.la }).join(".") },
        Ep = function(a) { return Cp(a, "_gb", zp).map(function(b) { return b.la }).join(".") },
        Fp = function(a, b) { var c = xm((b && b.prefix || "_gcl") + "_gb", a, b); return 0 === c.length || c.every(function(d) { return 0 === d }) ? "" : c.join(".") };
    var Gp = function() { if (Ca(m.__uspapi)) { var a = ""; try { m.__uspapi("getUSPData", 1, function(b, c) { if (c && b) { var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d) } }) } catch (b) {} return a } };
    var pq = function(a, b) { var c = m,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e; if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b; return !0 };
    var qq = function(a, b) { var c = sk(a, "fmt"); if (b) { var d = sk(a, "random"),
                e = sk(a, "label") || ""; if (!d) return !1; var f = bp(decodeURIComponent(e.replace(/\+/g, " ")) + ":" + decodeURIComponent(d.replace(/\+/g, " "))); if (!pq(f, b)) return !1 }
        c && 4 != c && (a = uk(a, "rfmt", c)); var g = uk(a, "fmt", 4);
        ac(g, function() { m.google_noFurtherRedirects && b && b.call && (m.google_noFurtherRedirects = null, b()) }, void 0, void 0, G.getElementsByTagName("script")[0].parentElement || void 0); return !0 };
    var Gq = function() { this.h = {} },
        Hq = function(a, b, c) { null != c && (a.h[b] = c) },
        Iq = function(a) { return Object.keys(a.h).map(function(b) { return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]) }).join("&") },
        Kq = function(a, b, c, d, e) {};

    function Mq(a, b) { if (a) { var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c); "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1)); return ki("" + c + b).href } }

    function Nq(a, b) { return mh || oh ? Mq(a, b) : void 0 }

    function Oq() { return !!ch.we && "SGTM_TOKEN" !== ch.we.split("@@").join("") };
    var Qq = function(a, b, c, d) { if (!Pq() && !fk(a)) { var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + ch.ma,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c"); var h = Oq();
                h && (f += "&sign=" + ch.we); var l = Nq(b, e + f); if (!l) { var n = ch.Sd + e;
                    h && Vb && g && (n = Vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    l = Lm("https://", "http://", n + f) }
                dk().container[a] = { state: 1, context: d };
                ac(l) } },
        Rq = function(a, b, c) {
            var d;
            if (d = !Pq()) { var e = dk().destination[a];
                d = !(e && e.state) }
            if (d)
                if (gk()) dk().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                }, P(91);
                else { var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ch.ma + "&cx=c";
                    Oq() && (f += "&sign=" + ch.we); var g = Nq(b, f);
                    g || (g = Lm("https://", "http://", ch.Sd + f));
                    dk().destination[a] = { state: 1, context: c };
                    ac(g) }
        };

    function Pq() { if (Yj()) { return !0 } return !1 };
    var Sq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Tq = { cl: ["ecl"], customPixels: ["nonGooglePixels"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"], html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"], nonGooglePixels: [], nonGoogleScripts: ["nonGooglePixels"], nonGoogleIframes: ["nonGooglePixels"] },
        Uq = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Vq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Yq = function(a) {
            var b = Lh("gtm.allowlist") || Lh("gtm.whitelist");
            b && P(9);
            kh && (b = ["google", "gtagfl", "lcl", "zone"]);
            Wq && Xq() &&
                (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."));
            var c = b && Ya(Qa(b), Tq),
                d = Lh("gtm.blocklist") || Lh("gtm.blacklist");
            d || (d = Lh("tagTypeBlacklist")) && P(3);
            d ? P(8) : d = [];
            Xq() && (d = Qa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Qa(d).indexOf("google") && P(2);
            var e = d && Ya(Qa(d), Uq),
                f = {};
            return function(g) {
                var h = g && g[Wd.cb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var l = wh[h] || [],
                    n = a(h, l);
                if (b) {
                    var p;
                    if (p = n) a: { if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) { if (0 > c.indexOf(l[q])) { P(11);
                                        p = !1; break a } } else { p = !1; break a }
                            p = !0 }
                    n = p
                }
                var r = !1;
                if (d) { var u = 0 <= e.indexOf(h); if (u) r = u;
                    else { var t = La(e, l || []);
                        t && P(10);
                        r = t } }
                var v = !n || r;
                v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = La(e, Vq));
                return f[h] = v
            }
        },
        Wq = !1;
    var Xq = function() { return Sq.test(m.location && m.location.hostname) };
    var Zq = { initialized: 11, complete: 12, interactive: 13 },
        $q = {},
        ar = Object.freeze(($q[S.g.Fa] = !0, $q)),
        br = 0 <= G.location.search.indexOf("?gtm_diagnostics=") || 0 <= G.location.search.indexOf("&gtm_diagnostics="),
        dr = function(a, b, c) {
            if (Bn && "config" === a && !(1 < Hm(b).M.length)) {
                var d, e = Wb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = I(c.F);
                I(c.h, f);
                var g = [],
                    h;
                for (h in d) { var l = cr(d[h], f);
                    l.length && (br && console.log(l), g.push(h)) }
                if (g.length) {
                    if (g.length) { var n = b + "*" + g.join(".");
                        Ln = Ln ? Ln + "!" + n : "&tdc=" + n }
                    vb("TAGGING",
                        Zq[G.readyState] || 14)
                }
                d[b] = f
            }
        };

    function er(a, b) { var c = {},
            d; for (d in b) b.hasOwnProperty(d) && (c[d] = !0); for (var e in a) a.hasOwnProperty(e) && (c[e] = !0); return c }

    function cr(a, b, c, d) { c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d; if (a === b) return []; var e = function(q, r) { var u = r[q]; return void 0 === u ? ar[q] : u },
            f; for (f in er(a, b)) { var g = (d ? d + "." : "") + f,
                h = e(f, a),
                l = e(f, b),
                n = "object" === Ac(h) || "array" === Ac(h),
                p = "object" === Ac(l) || "array" === Ac(l); if (n && p) cr(h, l, c, g);
            else if (n || p || h !== l) c[g] = !0 } return Object.keys(c) };
    var fr = !1,
        gr = 0,
        hr = [];

    function ir(a) { if (!fr) { var b = G.createEventObject,
                c = "complete" == G.readyState,
                d = "interactive" == G.readyState; if (!a || "readystatechange" != a.type || c || !b && d) { fr = !0; for (var e = 0; e < hr.length; e++) H(hr[e]) }
            hr.push = function() { for (var f = 0; f < arguments.length; f++) H(arguments[f]); return 0 } } }

    function jr() { if (!fr && 140 > gr) { gr++; try { G.documentElement.doScroll("left"), ir() } catch (a) { m.setTimeout(jr, 50) } } }
    var kr = function(a) { fr ? a() : hr.push(a) };
    var lr = function() { this.I = 0;
        this.h = {} };
    lr.prototype.B = function(a, b, c) { var d = ++this.I;
        this.h[a] = this.h[a] || {};
        this.h[a][String(d)] = { listener: b, ib: c }; return d };
    lr.prototype.D = function(a, b) { var c = this.h[a],
            d = String(b); if (!c || !c[d]) return !1;
        delete c[d]; return !0 };
    lr.prototype.F = function(a, b) { var c = [];
        Ma(this.h[a], function(d, e) { 0 > c.indexOf(e.listener) && (void 0 === e.ib || 0 <= b.indexOf(e.ib)) && c.push(e.listener) }); return c };
    var mr = function(a, b, c) { return { entityType: a, indexInOriginContainer: b, nameInOriginContainer: c, originContainerId: Ve.N } };
    var or = function(a, b) { this.h = !1;
            this.F = [];
            this.I = { tags: [] };
            this.T = !1;
            this.B = this.D = 0;
            nr(this, a, b) },
        pr = function(a, b, c, d) { if (gh.hasOwnProperty(b) || "__zone" === b) return -1; var e = {};
            Cc(d) && (e = I(d, e));
            e.id = c;
            e.status = "timeout"; return a.I.tags.push(e) - 1 },
        qr = function(a, b, c, d) { var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d) },
        rr = function(a) { if (!a.h) { for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0 } },
        nr = function(a, b, c) { void 0 !== b && a.ye(b);
            c && m.setTimeout(function() { return rr(a) }, Number(c)) };
    or.prototype.ye = function(a) { var b = this,
            c = Va(function() { return H(function() { a(Ve.N, b.I) }) });
        this.h ? c() : this.F.push(c) };
    var sr = function(a) { a.D++; return Va(function() { a.B++;
                a.T && a.B >= a.D && rr(a) }) },
        tr = function(a) { a.T = !0;
            a.B >= a.D && rr(a) };
    var ur = function() {
            function a(d) { return !Da(d) || 0 > d ? 0 : d } if (!dh._li && m.performance && m.performance.timing) { var b = m.performance.timing.navigationStart,
                    c = Da(Mh.get("gtm.start")) ? Mh.get("gtm.start") : 0;
                dh._li = { cst: a(c - b), cbt: a(uh - b) } } },
        vr = function(a) { m.performance && m.performance.mark(Ve.N + "_" + a + "_start") },
        wr = function(a) {
            if (m.performance) {
                var b = Ve.N + "_" + a + "_start",
                    c = Ve.N + "_" + a + "_duration";
                m.performance.measure(c, b);
                var d = m.performance.getEntriesByName(c)[0];
                m.performance.clearMarks(b);
                m.performance.clearMeasures(c);
                var e = dh._p || {};
                void 0 === e[a] && (e[a] = d.duration, dh._p = e);
                return d.duration
            }
        },
        xr = function() { var a = mc(); if (void 0 !== a) { var b = dh._p || {};
                b.PAGEVIEW = a;
                dh._p = b } };
    var yr = {},
        zr = function() { return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject] },
        Ar = !1;

    function Dr() { return m.GoogleAnalyticsObject || "ga" }
    var Er = function(a) {},
        Fr = function(a, b) {
            return function() {
                var c = zr(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            l = 0 > g.indexOf("&tid=" + b);
                        l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        l && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Kr(a, b, c, d) { var e = ve[a],
            f = Lr(a, b, c, d); if (!f) return null; var g = Ge(e[Wd.Ih], c, []); if (g && g.length) { var h = g[0];
            f = Kr(h.index, { X: f, W: 1 === h.Th ? b.terminate : f, terminate: b.terminate }, c, d) } return f }

    function Lr(a, b, c, d) {
        function e() {
            if (f[Wd.nj]) h();
            else {
                var w = He(f, c, []),
                    x = w[Wd.yi];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!tj(x[y])) { h(); return }
                var A = pr(c.Bb, String(f[Wd.cb]), Number(f[Wd.fd]), w[Wd.oj]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() { if (!B) { B = !0; var J = Ta() - E;
                        po(c.id, ve[a], "5", J);
                        qr(c.Bb, A, "success", J);
                        g() } };
                w.vtp_gtmOnFailure = function() { if (!B) { B = !0; var J = Ta() - E;
                        po(c.id, ve[a], "6", J);
                        qr(c.Bb, A, "failure", J);
                        h() } };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                po(c.id, f, "1");
                var C = function() { var J = Ta() - E;
                    po(c.id, f, "7", J);
                    qr(c.Bb, A, "exception", J);
                    B || (B = !0, h()) };
                var E = Ta();
                try { Fe(w, { event: c, index: a, type: 1 }) } catch (J) { C(J) }
            }
        }
        var f = ve[a],
            g = b.X,
            h = b.W,
            l = b.terminate;
        if (c.Vf(f)) return null;
        var n = Ge(f[Wd.Jh], c, []);
        if (n && n.length) { var p = n[0],
                q = Kr(p.index, { X: g, W: h, terminate: l }, c, d); if (!q) return null;
            g = q;
            h = 2 === p.Th ? l : q }
        if (f[Wd.Eh] || f[Wd.qj]) { var r = f[Wd.Eh] ? we : c.Uk,
                u = g,
                t = h; if (!r[a]) { e = Va(e); var v = Mr(a, r, e);
                g = v.X;
                h = v.W } return function() { r[a](u, t) } }
        return e
    }

    function Mr(a, b, c) { var d = [],
            e = [];
        b[a] = Nr(d, e, c); return { X: function() { b[a] = Or; for (var f = 0; f < d.length; f++) d[f]() }, W: function() { b[a] = Pr; for (var f = 0; f < e.length; f++) e[f]() } } }

    function Nr(a, b, c) { return function(d, e) { a.push(d);
            b.push(e);
            c() } }

    function Or(a) { a() }

    function Pr(a, b) { b() };
    var Rr = function(a, b) { return 1 === arguments.length ? Qr("set", a) : Qr("set", a, b) },
        Sr = function(a, b) { return 1 === arguments.length ? Qr("config", a) : Qr("config", a, b) },
        Tr = function(a, b, c) { c = c || {};
            c[S.g.Kb] = a; return Qr("event", b, c) };

    function Qr(a) { return arguments }
    var Ur = function() { this.h = [];
        this.B = [] };
    Ur.prototype.enqueue = function(a, b, c) { var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d; var e = { message: a, notBeforeEventId: b, priorityId: d, messageContext: c };
        this.h.push(e); for (var f = 0; f < this.B.length; f++) try { this.B[f](e) } catch (g) {} };
    Ur.prototype.listen = function(a) { this.B.push(a) };
    Ur.prototype.get = function() { for (var a = {}, b = 0; b < this.h.length; b++) { var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c) } return a };
    Ur.prototype.prune = function(a) { for (var b = [], c = [], d = 0; d < this.h.length; d++) { var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e) }
        this.h = c; return b };
    var Wr = function(a, b, c) { Vr().enqueue(a, b, c) },
        Yr = function() { var a = Xr;
            Vr().listen(a) };

    function Vr() { var a = dh.mb;
        a || (a = new Ur, dh.mb = a); return a }
    var fs = function(a) { var b = dh.zones; return b ? b.getIsAllowedFn(ak(), a) : function() { return !0 } },
        gs = function(a) { var b = dh.zones; return b ? b.isActive(ak(), a) : !0 };
    var js = function(a, b) { for (var c = [], d = 0; d < ve.length; d++)
            if (a[d]) { var e = ve[d]; var f = sr(b.Bb); try { var g = Kr(d, { X: f, W: f, terminate: f }, b, d); if (g) { var h = c,
                            l = h.push,
                            n = d,
                            p = e["function"]; if (!p) throw "Error: No function name given for function call."; var q = xe[p];
                        l.call(h, { mi: n, ei: q ? q.priorityOverride || 0 : 0, execute: g }) } else hs(d, b), f() } catch (u) { f() } }
        c.sort(is); for (var r = 0; r < c.length; r++) c[r].execute(); return 0 < c.length };
    var ls = function(a, b) { if (!ks) return !1; var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
            d = ks.F(a.event, c ? String(c).split(",") : []); if (!d.length) return !1; for (var e = 0; e < d.length; ++e) { var f = sr(b); try { d[e](a, f) } catch (g) { f() } } return !0 };

    function is(a, b) { var c, d = b.ei,
            e = a.ei;
        c = d > e ? 1 : d < e ? -1 : 0; var f; if (0 !== c) f = c;
        else { var g = a.mi,
                h = b.mi;
            f = g > h ? 1 : g < h ? -1 : 0 } return f }

    function hs(a, b) { if (Bn) { var c = function(d) { var e = b.Vf(ve[d]) ? "3" : "4",
                    f = Ge(ve[d][Wd.Ih], b, []);
                f && f.length && c(f[0].index);
                po(b.id, ve[d], e); var g = Ge(ve[d][Wd.Jh], b, []);
                g && g.length && c(g[0].index) };
            c(a) } }
    var ms = !1,
        ks;
    var ns = function() { ks || (ks = new lr); return ks };
    var ss = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) { if (ms) return !1;
            ms = !0; }
        var h, l = !1;
        if (gs(c)) h = fs(c);
        else { if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            l = !0;
            h = fs(Number.MAX_SAFE_INTEGER) }
        oo(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = { id: c, priorityId: d, name: e, Vf: Yq(h), Uk: [], ai: function() { P(6);
                    vb("HEALTH", 0) }, Nh: os(), Oh: ps(c), Bb: new or(q, p) },
            u = Qe(r);
        l && (u = qs(u));
        var t = js(u, r),
            v = !1;
        v = ls(a, r.Bb);
        tr(r.Bb);
        "gtm.js" !== e && "gtm.sync" !== e || Er(Ve.N);
        return rs(u, t) || v
    };

    function ps(a) { return function(b) { Bn && (Gc(b) || xo(a, "input", b)) } }

    function os() { var a = {};
        a.event = Qh("event", 1);
        a.ecommerce = Qh("ecommerce", 1);
        a.gtm = Qh("gtm");
        a.eventModel = Qh("eventModel"); return a }

    function qs(a) { for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) { var d = String(ve[c][Wd.cb]); if (fh[d] || void 0 !== ve[c][Wd.rj] || xh[d]) b[c] = !0;
                K(58) || 0 !== ve[c][Wd.cb].indexOf("__ccd") && 0 !== ve[c][Wd.cb].indexOf("__ogt") && "__set_product_settings" !== ve[c][Wd.cb] || (b[c] = !0) }
        return b }

    function rs(a, b) { if (!b) return b; for (var c = 0; c < a.length; c++)
            if (a[c] && ve[c] && !gh[String(ve[c][Wd.cb])]) return !0;
        return !1 }
    var us = function(a, b, c, d) { ts.push("event", [b, a], c, d) },
        vs = function(a, b, c, d) { ts.push("get", [a, b], c, d) },
        ws = function() { this.status = 1;
            this.I = {};
            this.h = {};
            this.B = {};
            this.T = null;
            this.F = {};
            this.D = !1 },
        xs = function(a, b, c, d) { var e = Ta();
            this.type = a;
            this.B = e;
            this.da = b || "";
            this.h = c;
            this.messageContext = d },
        ys = function() { this.B = {};
            this.D = {};
            this.h = [] },
        zs = function(a, b) { var c = Hm(b); return a.B[c.V] = a.B[c.V] || new ws },
        As = function(a, b, c, d) {
            if (d.da) {
                var e = zs(a, d.da),
                    f = e.T;
                if (f) {
                    var g = I(c),
                        h = I(e.I[d.da]),
                        l = I(e.F),
                        n = I(e.h),
                        p = I(a.D),
                        q = {};
                    if (Bn) try { q = I(Bh) } catch (v) { P(72) }
                    var r = Hm(d.da).prefix,
                        u = function(v) { wo(d.messageContext.eventId, r, v); var w = g[S.g.cc];
                            w && H(w) },
                        t = Vo(To(So(Ro(Po(Oo(Qo(No(Mo(Lo(new Ko(d.messageContext.eventId, d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() { if (u) { var v = u;
                                u = void 0;
                                v("2") } }), function() { if (u) { var v = u;
                                u = void 0;
                                v("3") } }));
                    try { wo(d.messageContext.eventId, r, "1"), dr(d.type, d.da, t), f(d.da, b, d.B, t) } catch (v) { wo(d.messageContext.eventId, r, "4") }
                }
            }
        };
    ys.prototype.register = function(a, b, c) { var d = zs(this, a);
        3 !== d.status && (d.T = b, d.status = 3, c && (I(d.h, c), d.h = c), this.flush()) };
    ys.prototype.push = function(a, b, c, d) { if (void 0 !== c) { if (!Hm(c)) return; if (c) { var e = Hm(c);
                e && 1 === zs(this, c).status && (zs(this, c).status = 2, this.push("require", [{}], e.V, {})) }
            zs(this, c).D && (d.deferrable = !1) }
        this.h.push(new xs(a, c, b, d));
        d.deferrable || this.flush() };
    ys.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.da || zs(this, f.da).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = zs(this, f.da);
                        if (3 !== g.status && !a) { this.h.push.apply(this.h, c); return }
                        break;
                    case "set":
                        Ma(f.h[0], function(r, u) { I(bb(r, u), b.D) });
                        break;
                    case "config":
                        g = zs(this, f.da);
                        e.ub = {};
                        Ma(f.h[0], function(r) { return function(u, t) { I(bb(u, t), r.ub) } }(e));
                        var h = !!e.ub[S.g.bd];
                        delete e.ub[S.g.bd];
                        var l = Hm(f.da),
                            n = l.V === l.id;
                        h || (n ? g.F = {} : g.I[f.da] = {});
                        g.D && h || As(this, S.g.Da, e.ub, f);
                        g.D = !0;
                        n ? I(e.ub, g.F) : (I(e.ub, g.I[f.da]), P(70));
                        d = !0;
                        break;
                    case "event":
                        g = zs(this, f.da);
                        e.Md = {};
                        Ma(f.h[0], function(r) { return function(u, t) { I(bb(u, t), r.Md) } }(e));
                        As(this, f.h[1], e.Md, f);
                        break;
                    case "get":
                        g = zs(this, f.da);
                        var p = {},
                            q = (p[S.g.ab] = f.h[0], p[S.g.pb] = f.h[1], p);
                        As(this, S.g.Ka, q, f)
                }
                this.h.shift();
                Bs(this, f)
            }
            e = { ub: e.ub, Md: e.Md }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Bs = function(a, b) { if ("require" !== b.type)
                if (b.da)
                    for (var c = zs(a, b.da).B[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.B)
                        if (a.B.hasOwnProperty(e)) { var f = a.B[e]; if (f && f.B)
                                for (var g = f.B[b.type] || [], h = 0; h < g.length; h++) g[h]() } },
        Cs = function(a, b) { var c = ts,
                d = I(b);
            I(zs(c, a).h, d);
            zs(c, a).h = d },
        ts = new ys;
    var Ze;
    var Ds = {},
        Es = {},
        Fs = function(a) { for (var b = [], c = [], d = {}, e = 0; e < a.length; d = { Rd: d.Rd, Od: d.Od }, e++) { var f = a[e]; if (0 <= f.indexOf("-")) { if (d.Rd = Hm(f), d.Rd) { var g = bk();
                        Ha(g, function(q) { return function(r) { return q.Rd.V === r } }(d)) ? b.push(f) : c.push(f) } } else { var h = Ds[f] || [];
                    d.Od = {};
                    h.forEach(function(q) { return function(r) { return q.Od[r] = !0 } }(d)); for (var l = ak(), n = 0; n < l.length; n++)
                        if (d.Od[l[n]]) { b = b.concat(bk()); break }
                    var p = Es[f] || [];
                    p.length && (b = b.concat(p)) } } return { rk: b, uk: c } },
        Gs = function(a) {
            Ma(Ds, function(b, c) {
                var d =
                    c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Hs = function(a) { Ma(Es, function(b, c) { var d = c.indexOf(a);
                0 <= d && c.splice(d, 1) }) };
    var Is = "HA GF G UA AW DC MC".split(" "),
        Js = !1,
        Ks = !1;

    function Ls(a, b) { a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: yh() });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"]; return { eventId: b.eventId, priorityId: b.priorityId } }
    var Ms = {
            config: function(a, b) {
                var c = Ls(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var d = {};
                    if (2 < a.length) { if (void 0 != a[2] && !Cc(a[2]) || 3 < a.length) return;
                        d = a[2] }
                    var e = Hm(a[1]);
                    if (e) {
                        oo(c.eventId, "gtag.config");
                        var f = e.V,
                            g = e.id !== f;
                        if (g ? -1 === bk().indexOf(f) : -1 === ak().indexOf(f)) { if (!K(61) || !d[S.g.me]) { var h = d[S.g.wa] || ts.D[S.g.wa];
                                g ? Rq(f, h, { source: 2, fromContainerExecution: b.fromContainerExecution }) : Qq(f, h, !0, { source: 2, fromContainerExecution: b.fromContainerExecution }) } } else {
                            if (jh && !g && !d[S.g.bd]) {
                                var l = Ks;
                                Ks = !0;
                                if (l) return
                            }
                            Js || P(43);
                            if (!b.noTargetGroup)
                                if (g) { Hs(e.id); var n = e.id,
                                        p = d[S.g.je] || "default";
                                    p = String(p).split(","); for (var q = 0; q < p.length; q++) { var r = Es[p[q]] || [];
                                        Es[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n) } } else { Gs(e.id); var u = e.id,
                                        t = d[S.g.je] || "default";
                                    t = t.toString().split(","); for (var v = 0; v < t.length; v++) { var w = Ds[t[v]] || [];
                                        Ds[t[v]] = w;
                                        0 > w.indexOf(u) && w.push(u) } }
                            delete d[S.g.je];
                            var x = b.eventMetadata || {};
                            x.hasOwnProperty("is_external_event") || (x.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                x;
                            delete d[S.g.cc];
                            for (var y = g ? [e.id] : bk(), A = 0; A < y.length; A++) { var B = I(b);
                                ts.push("config", [d], y[A], B) }
                        }
                    }
                }
            },
            consent: function(a, b) { if (3 === a.length) { P(39); var c = Ls(a, b),
                        d = a[1]; "default" === d ? qj(a[2]) : "update" === d && sj(a[2], c) } },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) { if (!Cc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2] }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = I(e), e[S.g.cc] && (g.eventCallback = e[S.g.cc]), e[S.g.de] && (g.eventTimeout = e[S.g.de]));
                    var h = Ls(a, b),
                        l = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = l;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[S.g.Kb];
                    void 0 === r && (r = Lh(S.g.Kb, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ea(r)) { var u = r.toString().replace(/\s+/g, "").split(","),
                            t = Fs(u),
                            v = t.rk,
                            w = t.uk; if (w.length)
                            for (var x = q && q[S.g.wa] || ts.D[S.g.wa], y = 0; y < w.length; y++) { var A = Hm(w[y]);
                                A && Rq(A.V, x, { source: 3, fromContainerExecution: b.fromContainerExecution }) }
                        p = Jm(v) } else p = void 0;
                    var B = p;
                    if (B) {
                        oo(l,
                            c);
                        for (var C = [], E = 0; E < B.length; E++) { var J = B[E],
                                D = I(b); if (-1 !== Is.indexOf(J.prefix)) { var N = I(d),
                                    Q = D.eventMetadata || {};
                                Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !D.fromContainerExecution);
                                D.eventMetadata = Q;
                                delete N[S.g.cc];
                                us(c, N, J.id, D) }
                            C.push(J.id) }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[S.g.Kb] = C.join() : delete g.eventModel[S.g.Kb];
                        Js || P(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                P(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Ca(a[3])) {
                    var c = Hm(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) { Js || P(43); var f = ts.D[S.g.wa]; if (!Ha(bk(), function(h) { return c.V === h })) Rq(c.V, f, { source: 4, fromContainerExecution: b.fromContainerExecution });
                        else if (-1 !== Is.indexOf(c.prefix)) { Ls(a, b); var g = {};
                            mj(I((g[S.g.ab] = d, g[S.g.pb] = e, g)));
                            vs(d, function(h) { H(function() { return e(h) }) }, c.id, b) } }
                }
            },
            js: function(a, b) { if (2 == a.length && a[1].getTime) { Js = !0; var c = Ls(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {}; return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f } },
            policy: function(a) {
                if (3 ===
                    a.length && k(a[1]) && Ca(a[2])) { var b = a[1],
                        c = a[2],
                        d = Ze.B;
                    d.h[b] ? d.h[b].push(c) : d.h[b] = [c]; if (P(74), "all" === a[1]) { P(75); var e = !1; try { e = a[2](Ve.N, "unknown", {}) } catch (f) {}
                        e || P(76) } } else { P(73); }
            },
            set: function(a, b) {
                var c;
                2 == a.length && Cc(a[1]) ? c = I(a[1]) : 3 == a.length && k(a[1]) &&
                    (c = {}, Cc(a[2]) || Ea(a[2]) ? c[a[1]] = I(a[2]) : c[a[1]] = a[2]);
                if (c) { var d = Ls(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    I(c); var g = I(c);
                    ts.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    K(30) && delete c.event;
                    b.overwriteModelFields = !0; return c }
            }
        },
        Ns = { policy: !0 };
    var Os = function(a) { var b = m[ch.ma].hide; if (b && void 0 !== b[a] && b.end) { b[a] = !1; var c = !0,
                    d; for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) { c = !1; break }
                c && (b.end(), b.end = null) } },
        Ps = function(a) { var b = m[ch.ma],
                c = b && b.hide;
            c && c.end && (c[a] = !0) };
    var Qs = !1,
        Rs = [];

    function Ss() { if (!Qs) { Qs = !0; for (var a = 0; a < Rs.length; a++) H(Rs[a]) } }
    var Ts = function(a) { Qs ? H(a) : Rs.push(a) };
    var Ht = function(a) { if (Gt(a)) return a;
        this.Ya = a };
    Ht.prototype.getUntrustedMessageValue = function() { return this.Ya };
    var Gt = function(a) { return !a || "object" !== Ac(a) || Cc(a) ? !1 : "getUntrustedMessageValue" in a };
    Ht.prototype.getUntrustedMessageValue = Ht.prototype.getUntrustedMessageValue;
    var It = 0,
        Jt = {},
        Kt = [],
        Lt = [],
        Mt = !1,
        Nt = !1;

    function Ot(a, b) { return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId }
    var Pt = function(a) { return m[ch.ma].push(a) },
        Qt = function(a, b, c) { a.eventCallback = b;
            c && (a.eventTimeout = c); return Pt(a) },
        Rt = function(a, b) { var c = dh[ch.ma],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = m.setTimeout(function() { f || (f = !0, a());
                g = void 0 }, b)); return function() {++e === d && (g && (m.clearTimeout(g), g = void 0), f || (a(), f = !0)) } };

    function St(a, b) { var c = a._clear || b.overwriteModelFields;
        Ma(a, function(e, f) { "_clear" !== e && (c && Oh(e), Oh(e, f)) });
        th || (th = a["gtm.start"]); var d = a["gtm.uniqueEventId"]; if (!a.event) return !1; "number" !== typeof d && (d = yh(), a["gtm.uniqueEventId"] = d, Oh("gtm.uniqueEventId", d)); return ss(a) }

    function Tt(a) { if (null == a || "object" !== typeof a) return !1; if (a.event) return !0; if (Na(a)) { var b = a[0]; if ("config" === b || "event" === b || "js" === b || "get" === b) return !0 } return !1 }

    function Ut() {
        var a;
        if (Lt.length) a = Lt.shift();
        else if (Kt.length) a = Kt.shift();
        else return;
        var b;
        var c = a;
        if (Mt || !Tt(c.message)) b = c;
        else {
            Mt = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = yh());
            var e = {},
                f = { message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e), messageContext: { eventId: d - 2 } },
                g = {},
                h = { message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g), messageContext: { eventId: d - 1 } };
            Kt.unshift(h, c);
            if (Bn && Ve.N) {
                var l;
                if (Ve.Af) {
                    var n = Ve.N,
                        p = dk().destination[n];
                    l = p && p.context
                } else { var q = Ve.N,
                        r = dk().container[q];
                    l = r && r.context }
                var u = l,
                    t, v = ki(m.location.href);
                t = v.hostname + v.pathname;
                var w = u && u.fromContainerExecution,
                    x = u && u.source,
                    y = Ve.N,
                    A = Ve.Xb,
                    B = Ve.Af;
                Nn || (Nn = t);
                Mn.push(y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Vt() {
        for (var a = !1, b; !Nt && (b = Ut());) {
            Nt = !0;
            delete Bh.eventModel;
            Kh();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Nt = !1;
            else {
                e.fromContainerExecution && Ph();
                try {
                    if (Ca(d)) try { d.call(Mh) } catch (x) {} else if (Ea(d)) { var f = d; if (k(f[0])) { var g = f[0].split("."),
                                h = g.pop(),
                                l = f.slice(1),
                                n = Lh(g.join("."), 2); if (null != n) try { n[h].apply(n, l) } catch (x) {} } } else {
                        var p = void 0,
                            q = !1;
                        if (Na(d)) {
                            a: {
                                if (d.length &&
                                    k(d[0])) { var r = Ms[d[0]]; if (r && (!e.fromContainerExecution || !Ns[d[0]])) { p = r(d, e); break a } }
                                p = void 0
                            }(q = p && "set" === d[0] && !!p.event) && P(101)
                        }
                        else p = d;
                        if (p) { var u = St(p, e);
                            a = u || a;
                            q && u && P(113) }
                    }
                } finally { e.fromContainerExecution && Kh(!0); var t = d["gtm.uniqueEventId"]; if ("number" === typeof t) { for (var v = Jt[String(t)] || [], w = 0; w < v.length; w++) Lt.push(Wt(v[w]));
                        v.length && Lt.sort(Ot);
                        delete Jt[String(t)];
                        t > It && (It = t) }
                    Nt = !1 }
            }
        }
        return !a
    }

    function Xt() { var b = Vt(); try { Os(Ve.N) } catch (c) {} return b }

    function Xr(a) { if (It < a.notBeforeEventId) { var b = String(a.notBeforeEventId);
            Jt[b] = Jt[b] || [];
            Jt[b].push(a) } else Lt.push(Wt(a)), Lt.sort(Ot), H(function() { Nt || Vt() }) }

    function Wt(a) { return { message: a.message, messageContext: a.messageContext } }
    var Zt = function() {
            function a(f) { var g = {}; if (Gt(f)) { var h = f;
                    f = Gt(h) ? h.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0 } return { message: f, messageContext: g } }
            var b = Wb(ch.ma, []),
                c = dh[ch.ma] = dh[ch.ma] || {};
            !0 === c.pruned && P(83);
            Jt = Vr().get();
            Yr();
            kr(function() { if (!c.gtmDom) { c.gtmDom = !0; var f = {};
                    b.push((f.event = "gtm.dom", f)) } });
            Ts(function() { if (!c.gtmLoad) { c.gtmLoad = !0; var f = {};
                    b.push((f.event = "gtm.load", f)) } });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < dh.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Ht(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var h = f.map(function(q) { return a(q) });
                Kt.push.apply(Kt, h);
                var l = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (P(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof l || l;
                return Vt() && p
            };
            var e = b.slice(0).map(function(f) { return a(f) });
            Kt.push.apply(Kt, e);
            if (Yt()) { H(Xt) }
        },
        Yt = function() { var a = !0; return a };

    function $t(a) { if (null == a || 0 === a.length) return !1; var b = Number(a),
            c = Ta(); return b < c + 3E5 && b > c - 9E5 }

    function au(a) { return a && 0 === a.indexOf("pending:") ? $t(a.substr(8)) : !1 };
    var Be = {};
    Be.se = new String("undefined");
    var du = function(a, b, c) { var d = { event: b, "gtm.element": a, "gtm.elementClasses": lc(a, "className"), "gtm.elementId": a["for"] || gc(a, "id") || "", "gtm.elementTarget": a.formTarget || lc(a, "target") || "" };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || lc(a, "href") || a.src || a.code || a.codebase || ""; return d },
        eu = function(a) {
            dh.hasOwnProperty("autoEventsSettings") || (dh.autoEventsSettings = {});
            var b = dh.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        fu = function(a, b, c) { eu(a)[b] = c },
        gu = function(a, b, c, d) { var e = eu(a),
                f = Ua(e, b, d);
            e[b] = c(f) },
        hu = function(a, b, c) { var d = eu(a); return Ua(d, b, c) },
        iu = function(a) { return "string" === typeof a ? a : String(yh()) };
    var ju = ["input", "select", "textarea"],
        ku = ["button", "hidden", "image", "reset", "submit"],
        lu = function(a) { var b = a.tagName.toLowerCase(); return 0 > ju.indexOf(b) || "input" === b && 0 <= ku.indexOf(a.type.toLowerCase()) ? !1 : !0 },
        mu = function(a) { return a.form ? a.form.tagName ? a.form : G.getElementById(a.form) : jc(a, ["form"], 100) },
        nu = function(a, b, c) { if (!a.elements) return 0; for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) { var g = a.elements[e]; if (lu(g)) { if (g.dataset[c] === d) return f;
                    f++ } } return 0 };
    var ou = !!m.MutationObserver,
        pu = void 0,
        qu = function(a) { if (!pu) { var b = function() { var c = G.body; if (c)
                        if (ou)(new MutationObserver(function() { for (var e = 0; e < pu.length; e++) H(pu[e]) })).observe(c, { childList: !0, subtree: !0 });
                        else { var d = !1;
                            ec(c, "DOMNodeInserted", function() { d || (d = !0, H(function() { d = !1; for (var e = 0; e < pu.length; e++) H(pu[e]) })) }) } };
                pu = [];
                G.body ? b() : H(b) }
            pu.push(a) };
    var Bu = function(a, b, c) {
        function d() { var g = a();
            f += e ? (Ta() - e) * g.playbackRate / 1E3 : 0;
            e = Ta() }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, l) {
                var n = a(),
                    p = n.Of,
                    q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Of * h) : Math.round(n.Rh),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    u = G.hidden ? !1 : .5 <= Yh(c);
                d();
                var t = void 0;
                void 0 !== b && (t = [b]);
                var v = du(c, "gtm.video", t);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = u;
                return v
            },
            ji: function() { e = Ta() },
            qc: function() { d() }
        }
    };
    var Cu = m.clearTimeout,
        Du = m.setTimeout,
        U = function(a, b, c, d) { if (Yj()) { b && H(b) } else return ac(a, b, c, d) },
        Eu = function() { return new Date },
        Fu = function() { return m.location.href },
        Gu = function(a) { return ii(ki(a), "fragment") },
        Hu = function(a) { return ji(ki(a)) },
        Iu = function(a, b) { return Lh(a, b || 2) },
        Ju = function(a, b, c) { return b ? Qt(a, b, c) : Pt(a) },
        Ku = function(a, b) { m[a] = b },
        X = function(a, b, c) { b && (void 0 === m[a] || c && !m[a]) && (m[a] = b); return m[a] },
        Lu = function(a, b, c) { return Fj(a, b, void 0 === c ? !0 : !!c) },
        Mu = function(a, b, c) { return 0 === Oj(a, b, c) },
        Nu = function(a, b) { if (Yj()) { b && H(b) } else cc(a, b) },
        Ou = function(a) { return !!hu(a, "init", !1) },
        Pu = function(a) { fu(a, "init", !0) },
        Qu = function(a, b, c) { Bn && (Gc(a) || xo(c, b, a)) };
    var nv = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function ov(a, b) { a = String(a);
        b = String(b); var c = a.length - b.length; return 0 <= c && a.indexOf(b, c) === c }
    var pv = new Ka;

    function qv(a, b, c) { var d = c ? "i" : void 0; try { var e = String(b) + d,
                f = pv.get(e);
            f || (f = new RegExp(b, d), pv.set(e, f)); return f.test(a) } catch (g) { return !1 } }

    function rv(a, b) {
        function c(g) { var h = ki(g),
                l = ii(h, "protocol"),
                n = ii(h, "host", !0),
                p = ii(h, "port"),
                q = ii(h, "path").toLowerCase().replace(/\/$/, ""); if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p) l = "web", p = "default"; return [l, n, p, q] } for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0 }

    function sv(a, b) { return 0 <= String(a).indexOf(String(b)) }

    function tv(a, b) { return String(a) === String(b) }

    function uv(a, b) { return Number(a) >= Number(b) }

    function vv(a, b) { return Number(a) <= Number(b) }

    function wv(a, b) { return Number(a) > Number(b) }

    function xv(a, b) { return Number(a) < Number(b) }

    function yv(a, b) { return 0 === String(a).indexOf(String(b)) }

    function zv(a) { return Av(a) ? 1 : 0 }

    function Av(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) { for (var d = 0; d < c.length; d++) { var e = I(a, {});
                I({ arg1: c[d], any_of: void 0 }, e); if (zv(e)) return !0 } return !1 }
        switch (a["function"]) {
            case "_cn":
                return sv(b, c);
            case "_css":
                var f;
                a: { if (b) try { for (var g = 0; g < nv.length; g++) { var h = nv[g]; if (b[h]) { f = b[h](c); break a } } } catch (l) {}
                    f = !1 }
                return f;
            case "_ew":
                return ov(b, c);
            case "_eq":
                return tv(b, c);
            case "_ge":
                return uv(b, c);
            case "_gt":
                return wv(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return vv(b, c);
            case "_lt":
                return xv(b, c);
            case "_re":
                return qv(b, c, a.ignore_case);
            case "_sw":
                return yv(b, c);
            case "_um":
                return rv(b, c)
        }
        return !1
    };

    function Bv(a, b) { var c = this; }
    Bv.R = "addConsentListener";
    var Cv;
    var Dv = function(a) { for (var b = 0; b < a.length; ++b)
            if (Cv) try { a[b]() } catch (c) { P(77) } else a[b]() };

    function Ev(a, b, c) { var d = this,
            e;
        L(F(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments), Dv([function() { return M(d, "listen_data_layer", a) }]), e = ns().B(a, Ec(b), c); return e }
    Ev.P = "internal.addDataLayerEventListener";

    function Fv(a, b, c) {}
    Fv.R = "addDocumentEventListener";

    function Gv(a, b, c, d) {}
    Gv.R = "addElementEventListener";

    function Hv(a) {}
    Hv.R = "addEventCallback";

    function Lv(a) {}
    Lv.P = "internal.addFormAbandonmentListener";
    var Mv = {},
        Nv = [],
        Ov = {},
        Pv = 0,
        Qv = 0;
    var Sv = function() { ec(G, "change", function(a) { for (var b = 0; b < Nv.length; b++) Nv[b](a) });
            ec(m, "pagehide", function() { Rv() }) },
        Rv = function() { Ma(Ov, function(a, b) { var c = Mv[a];
                c && Ma(b, function(d, e) { Tv(e, c) }) }) },
        Wv = function(a, b) {
            var c = "" + a;
            if (Mv[c]) Mv[c].push(b);
            else {
                var d = [b];
                Mv[c] = d;
                var e = Ov[c];
                e || (e = {}, Ov[c] = e);
                Nv.push(function(f) {
                    var g = f.target;
                    if (g) {
                        var h = mu(g);
                        if (h) {
                            var l = Uv(h, "gtmFormInteractId", function() { return Pv++ }),
                                n = Uv(g, "gtmFormInteractFieldId", function() { return Qv++ }),
                                p = e[l];
                            p ? (p.Ba && (m.clearTimeout(p.Ba),
                                p.qa.dataset.gtmFormInteractFieldId !== n && Tv(p, d)), p.qa = g, Vv(p, d, a)) : (e[l] = { form: h, qa: g, Eb: 0, Ba: null }, Vv(e[l], d, a))
                        }
                    }
                })
            }
        },
        Tv = function(a, b) {
            var c = a.form,
                d = a.qa,
                e = du(c, "gtm.formInteract"),
                f = c.action;
            f && f.tagName && (f = c.cloneNode(!1).action);
            e["gtm.elementUrl"] = f;
            e["gtm.interactedFormName"] = c.getAttribute("name");
            e["gtm.interactedFormLength"] = c.length;
            e["gtm.interactedFormField"] = d;
            e["gtm.interactedFormFieldPosition"] = nu(c, d, "gtmFormInteractFieldId");
            e["gtm.interactSequenceNumber"] = a.Eb;
            e["gtm.interactedFormFieldId"] =
                d.id;
            e["gtm.interactedFormFieldName"] = d.getAttribute("name");
            e["gtm.interactedFormFieldType"] = d.getAttribute("type");
            for (var g = 0; g < b.length; g++) b[g](e);
            a.Eb++;
            a.Ba = null
        },
        Vv = function(a, b, c) { c ? a.Ba = m.setTimeout(function() { Tv(a, b) }, c) : Tv(a, b) },
        Uv = function(a, b, c) { var d = a.dataset[b]; if (d) return d;
            d = String(c()); return a.dataset[b] = d };

    function Xv(a, b) { L(F(this), ["callback:!Fn", "options:?*"], arguments); var c = Ec(b) || {},
            d = Number(c.interval); if (!d || 0 > d) d = 0; var e = Ec(a),
            f;
        hu("pix.fil", "init") ? f = hu("pix.fil", "reg") : (Sv(), f = Wv, fu("pix.fil", "reg", Wv), fu("pix.fil", "init", !0));
        f(d, e); }
    Xv.P = "internal.addFormInteractionListener";
    var Zv = function(a, b, c) { var d = du(a, "gtm.formSubmit");
            d["gtm.interactedFormName"] = a.getAttribute("name");
            d["gtm.interactedFormLength"] = a.length;
            d["gtm.willOpenInCurrentWindow"] = !b && Yv(a);
            c && c.value && (d["gtm.formSubmitButtonText"] = c.value); if (K(18)) { var e = a.action;
                e && e.tagName && (e = a.cloneNode(!1).action);
                d["gtm.elementUrl"] = e } return d },
        $v = function(a, b) { var c = hu("pix.fsl", a ? "nv.mwt" : "mwt", 0);
            m.setTimeout(b, c) },
        aw = function(a, b, c, d, e) {
            var f = hu("pix.fsl", c ? "nv.mwt" : "mwt", 0),
                g = hu("pix.fsl", c ? "runIfCanceled" :
                    "runIfUncanceled", []);
            if (!g.length) return !0;
            K(32) ? P(110) : K(31) && P(109);
            var h = Zv(a, c, e);
            if (d && f) { for (var l = eb(b, g.length), n = 0; n < g.length; ++n) g[n](h, l); return l.done }
            for (var p = 0; p < g.length; ++p) g[p](h, function() {});
            return !0
        },
        bw = function() { var a = [],
                b = function(c) { return Ha(a, function(d) { return d.form === c }) }; return { store: function(c, d) { var e = b(c);
                    e ? e.button = d : a.push({ form: c, button: d }) }, get: function(c) { var d = b(c); return d ? d.button : null } } },
        Yv = function(a) {
            var b = lc(a, "target");
            return b && "_self" !== b && "_parent" !==
                b && "_top" !== b ? !1 : !0
        },
        cw = function() {
            var a = bw(),
                b = HTMLFormElement.prototype.submit;
            ec(G, "click", function(c) { var d = c.target; if (d && (d = jc(d, ["button", "input"], 100)) && ("submit" == d.type || "image" == d.type) && d.name && gc(d, "value")) { var e = mu(d);
                    e && a.store(e, d) } }, !1);
            ec(G, "submit", function(c) {
                var d = c.target;
                if (!d) return c.returnValue;
                var e = c.defaultPrevented || !1 === c.returnValue,
                    f = Yv(d) && !e,
                    g = a.get(d),
                    h = !0,
                    l = function() {
                        if (h) {
                            var n;
                            g && (n = G.createElement("input"), n.type = "hidden", n.name = g.name, n.value = g.value, d.appendChild(n));
                            b.call(d);
                            n && d.removeChild(n)
                        }
                    };
                if (aw(d, l, e, f, g)) return h = !1, c.returnValue;
                $v(e, l);
                e || (c.preventDefault && c.preventDefault(), c.returnValue = !1);
                return !1
            }, !1);
            HTMLFormElement.prototype.submit = function() { var c = this,
                    d = !0,
                    e = function() { d && b.call(c) };
                aw(c, e, !1, Yv(c)) ? (b.call(c), d = !1) : $v(!1, e) }
        };

    function dw(a, b) {
        L(F(this), ["callback:!Fn", "options:?DustMap"], arguments);
        var c = Ec(b) || {},
            d = c.waitForCallbacks,
            e = c.waitForCallbacksTimeout,
            f = c.checkValidation;
        e = e && 0 < e ? e : 2E3;
        var g = Ec(a);
        if (d) { var h = function(n) { return Math.max(e, n) };
            gu("pix.fsl", "mwt", h, 0);
            f || gu("pix.fsl", "nv.mwt", h, 0) }
        var l = function(n) { n.push(g); return n };
        gu("pix.fsl", "runIfUncanceled", l, []);
        f || gu("pix.fsl", "runIfCanceled", l, []);
        hu("pix.fsl", "init") || (cw(), fu("pix.fsl",
            "init", !0));
    }
    dw.P = "internal.addFormSubmitListener";

    function iw(a) {}
    iw.P = "internal.addGaSendListener";
    var jw = {},
        kw = [];
    var rw = function(a, b) {};
    rw.P = "internal.addHistoryChangeListener";

    function sw(a, b, c) {}
    sw.R = "addWindowEventListener";

    function tw(a, b) { return !0 }
    tw.R = "aliasInWindow";

    function uw(a, b, c) {}
    uw.P = "internal.appendRemoteConfigParameter";

    function vw() { var a = 2; return a };

    function ww(a, b) { var c; return c }
    ww.R = "callInWindow";

    function xw(a) {}
    xw.R = "callLater";

    function yw(a) {}
    yw.P = "callOnDomReady";

    function zw(a) {}
    zw.P = "callOnWindowLoad";

    function Aw(a) { var b; return b }
    Aw.P = "internal.computeGtmParameter";

    function Bw(a, b) { var c; var d = Dc(c, this.h, vw());
        void 0 === d && void 0 !== c && P(45); return d }
    Bw.R = "copyFromDataLayer";

    function Cw(a) { var b; return b }
    Cw.R = "copyFromWindow";

    function Dw(a, b) { var c; return c }
    Dw.P = "internal.copyPreHit";

    function Ew(a, b) { var c = null,
            d = vw(); return Dc(c, this.h, d) }
    Ew.R = "createArgumentsQueue";

    function Fw(a) {
        var b;
        return Dc(b, this.h,
            vw())
    }
    Fw.R = "createQueue";
    var Gw = {},
        Hw = [],
        Iw = {},
        Jw = 0,
        Kw = 0;

    function Qw(a, b) { var c = this; return b }
    Qw.P = "internal.enableAutoEventOnFormInteraction";

    function Vw(a, b) { var c = this; return b }
    Vw.P = "internal.enableAutoEventOnFormSubmit";

    function $w() { var a = this; }
    $w.P = "internal.enableAutoEventOnGaSend";
    var ax = {},
        bx = [];
    var dx = function(a, b) { var c = "" + b; if (ax[c]) ax[c].push(a);
            else { var d = [a];
                ax[c] = d; var e = cx(),
                    f = -1;
                bx.push(function(g) { 0 <= f && m.clearTimeout(f);
                    b ? f = m.setTimeout(function() { e(g, d);
                        f = -1 }, b) : e(g, d) }) } },
        cx = function() {
            var a = m.location.href,
                b = { source: null, state: m.history.state || null, url: ji(ki(a)), U: ii(ki(a), "fragment") };
            return function(c, d) {
                var e = b,
                    f = {};
                f[e.source] = !0;
                f[c.source] = !0;
                if (!f.popstate || !f.hashchange || e.U != c.U) {
                    var g = {},
                        h = (g.event = "gtm.historyChange-v2", g["gtm.historyChangeSource"] = c.source, g["gtm.oldUrlFragment"] =
                            b.U, g["gtm.newUrlFragment"] = c.U, g["gtm.oldHistoryState"] = b.state, g["gtm.newHistoryState"] = c.state, g["gtm.oldUrl"] = b.url, g["gtm.newUrl"] = c.url, g["gtm.triggers"] = d.join(","), g);
                    b = c;
                    Pt(h)
                }
            }
        },
        ex = function(a, b) { var c = m.history,
                d = c[a]; if (Ca(d)) try { c[a] = function(e, f, g) { d.apply(c, [].slice.call(arguments, 0)); var h = m.location.href;
                    b({ source: a, state: e, url: ji(ki(h)), U: ii(ki(h), "fragment") }) } } catch (e) {} },
        gx = function(a) {
            m.addEventListener("popstate", function(b) {
                var c = fx(b);
                a({
                    source: "popstate",
                    state: b.state,
                    url: ji(ki(c)),
                    U: ii(ki(c), "fragment")
                })
            })
        },
        hx = function(a) { m.addEventListener("hashchange", function(b) { var c = fx(b);
                a({ source: "hashchange", state: null, url: ji(ki(c)), U: ii(ki(c), "fragment") }) }) },
        fx = function(a) { return a.target && a.target.location && a.target.location.href ? a.target.location.href : m.location.href };

    function ix(a, b) {
        var c = this;
        L(F(this), ["options:?DustMap", "triggerId:?*"], arguments);
        Dv([function() { return M(c, "process_dom_events", "window", "popstate") }, function() { return M(c, "process_dom_events", "window", "pushstate") }]);
        b = iu(b);
        var d = Number(a && a.get("interval"));
        0 < d && isFinite(d) || (d = 0);
        if (hu("ehl", "init", !1)) { var e = hu("ehl", "reg");
            e && e(b, d) } else {
            var f = function(g) { for (var h = 0; h < bx.length; h++) bx[h](g) };
            hx(f);
            gx(f);
            ex("pushState",
                f);
            ex("replaceState", f);
            dx(b, d);
            fu("ehl", "reg", dx);
            fu("ehl", "init", !0)
        }
        return b
    }
    ix.P = "internal.enableAutoEventOnHistoryChange";
    var jx = function(a, b) { if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) return !1; var c = lc(b, "href"),
                d = c.indexOf("#"),
                e = lc(b, "target"); if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d) return !1; if (0 < d) { var f = ji(ki(c)),
                    g = ji(ki(m.location.href)); return f !== g } return !0 },
        kx = function(a, b) { for (var c = ii(ki((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || lc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++) try { if ((new RegExp(a[d])).test(c)) return !1 } catch (e) {}
            return !0 },
        lx = function() {
            var a = 0,
                b = function(c) {
                    var d = c.target;
                    if (d && 3 !== c.which && !(c.Wf || c.timeStamp && c.timeStamp === a)) {
                        a = c.timeStamp;
                        d = jc(d, ["a", "area"], 100);
                        if (!d) return c.returnValue;
                        var e = c.defaultPrevented || !1 === c.returnValue,
                            f = hu("aelc", e ? "nv.mwt" : "mwt", 0),
                            g;
                        g = e ? hu("aelc", "nv.ids", []) : hu("aelc", "ids", []);
                        for (var h = [], l = 0; l < g.length; l++) { var n = g[l],
                                p = hu("aelc", "aff.map", {})[n];
                            p && !kx(p, d) || h.push(n) }
                        if (h.length) {
                            var q = jx(c, d),
                                r = du(d, "gtm.linkClick", h);
                            r["gtm.elementText"] = hc(d);
                            r["gtm.willOpenInNewWindow"] = !q;
                            if (q && !e && f && d.href) {
                                var u = !!Ha(String(lc(d, "rel") || "").split(" "), function(x) { return "noreferrer" === x.toLowerCase() });
                                u && P(36);
                                var t = m[(lc(d, "target") || "_self").substring(1)],
                                    v = !0,
                                    w = Rt(function() { var x; if (x = v && t) { var y;
                                            a: if (u) { var A; try { A = new MouseEvent(c.type, { bubbles: !0 }) } catch (B) { if (!G.createEvent) { y = !1; break a }
                                                    A = G.createEvent("MouseEvents");
                                                    A.initEvent(c.type, !0, !0) }
                                                A.Wf = !0;
                                                c.target.dispatchEvent(A);
                                                y = !0 } else y = !1;
                                            x = !y }
                                        x && (t.location.href = lc(d, "href")) }, f);
                                if (Qt(r, w, f)) v = !1;
                                else return c.preventDefault &&
                                    c.preventDefault(), c.returnValue = !1
                            } else Qt(r, function() {}, f || 2E3);
                            return !0
                        }
                    }
                };
            ec(G, "click", b, !1);
            ec(G, "auxclick", b, !1)
        };

    function mx(a, b) {
        var c = this;
        L(F(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
        Dv([function() { return M(c, "process_dom_events", "document", "click") }, function() { return M(c, "process_dom_events", "document", "auxclick") }]);
        var d = Ec(a),
            e = d && !!d.waitForTags,
            f = d && !!d.checkValidation,
            g = d ? d.affiliateDomains : void 0;
        b = iu(b);
        if (e) {
            var h = Number(d.waitForTagsTimeout);
            0 < h && isFinite(h) || (h = 2E3);
            var l = function(p) { return Math.max(h, p) };
            gu("aelc", "mwt", l, 0);
            f || gu("aelc", "nv.mwt", l, 0)
        }
        var n = function(p) { p.push(b); return p };
        gu("aelc", "ids", n, []);
        f || gu("aelc", "nv.ids", n, []);
        g && gu("aelc", "aff.map", function(p) { p[b] = g; return p }, {});
        hu("aelc", "init", !1) || (lx(), fu("aelc", "init", !0));
        return b
    }
    mx.P = "internal.enableAutoEventOnLinkClick";
    var nx, ox;
    var px = function(a) { return hu("sdl", a, {}) },
        qx = function(a, b, c) { b && (Array.isArray(a) || (a = [a]), gu("sdl", c, function(d) { for (var e = 0; e < a.length; e++) { var f = String(a[e]);
                    d.hasOwnProperty(f) || (d[f] = []);
                    d[f].push(b) } return d }, {})) },
        tx = function() {
            var a = 250,
                b = !1;
            G.scrollingElement && G.documentElement && m.addEventListener && (a = 50, b = !0);
            var c = 0,
                d = !1,
                e = function() { d ? c = m.setTimeout(e, a) : (c = 0, rx(), hu("sdl", "init", !1) && !sx() && (fc(m, "scroll", f), fc(m, "resize", f), fu("sdl", "init", !1)));
                    d = !1 },
                f = function() {
                    b && nx();
                    c ? d = !0 : (c =
                        m.setTimeout(e, a), fu("sdl", "pending", !0))
                };
            return f
        },
        rx = function() { var a = nx(),
                b = a.Mf,
                c = a.Nf,
                d = b / ox.scrollWidth * 100,
                e = c / ox.scrollHeight * 100;
            ux(b, "horiz.pix", "PIXELS", "horizontal");
            ux(d, "horiz.pct", "PERCENT", "horizontal");
            ux(c, "vert.pix", "PIXELS", "vertical");
            ux(e, "vert.pct", "PERCENT", "vertical");
            fu("sdl", "pending", !1) },
        ux = function(a, b, c, d) {
            var e = px(b),
                f = {},
                g;
            for (g in e) {
                f.Vb = g;
                if (e.hasOwnProperty(f.Vb)) {
                    var h = Number(f.Vb);
                    if (!(a < h)) {
                        var l = {};
                        Pt((l.event = "gtm.scrollDepth", l["gtm.scrollThreshold"] = h,
                            l["gtm.scrollUnits"] = c.toLowerCase(), l["gtm.scrollDirection"] = d, l["gtm.triggers"] = e[f.Vb].join(","), l));
                        gu("sdl", b, function(n) { return function(p) { delete p[n.Vb]; return p } }(f), {})
                    }
                }
                f = { Vb: f.Vb }
            }
        },
        wx = function() { gu("sdl", "scr", function(a) { a || (a = G.scrollingElement || G.body && G.body.parentNode); return ox = a }, !1);
            gu("sdl", "depth", function(a) { a || (a = vx()); return nx = a }, !1) },
        vx = function() {
            var a = 0,
                b = 0;
            return function() {
                var c = Xh(),
                    d = c.height;
                a = Math.max(ox.scrollLeft + c.width, a);
                b = Math.max(ox.scrollTop + d, b);
                return {
                    Mf: a,
                    Nf: b
                }
            }
        },
        sx = function() { return !!(Object.keys(px("horiz.pix")).length || Object.keys(px("horiz.pct")).length || Object.keys(px("vert.pix")).length || Object.keys(px("vert.pct")).length) };

    function xx(a, b) {
        var c = this;
        L(F(this), ["options:!DustMap", "triggerId:?*"], arguments);
        Dv([function() { return M(c, "process_dom_events", "window", "resize") }, function() { return M(c, "process_dom_events", "window", "scroll") }]);
        wx();
        if (!ox) return;
        b = iu(b);
        var d = Ec(a);
        switch (d.horizontalThresholdUnits) {
            case "PIXELS":
                qx(d.horizontalThresholds, b, "horiz.pix"); break;
            case "PERCENT":
                qx(d.horizontalThresholds, b, "horiz.pct") }
        switch (d.verticalThresholdUnits) {
            case "PIXELS":
                qx(d.verticalThresholds,
                    b, "vert.pix");
                break;
            case "PERCENT":
                qx(d.verticalThresholds, b, "vert.pct")
        }
        hu("sdl", "init", !1) ? hu("sdl", "pending", !1) || H(function() { return rx() }) : (fu("sdl", "init", !0), fu("sdl", "pending", !0), H(function() { rx(); if (sx()) { var e = tx();
                ec(m, "scroll", e);
                ec(m, "resize", e) } else fu("sdl", "init", !1) }));
        return b
    }
    xx.P = "internal.enableAutoEventOnScroll";
    var Sb = da(["data-gtm-yt-inspected-"]),
        yx = ["www.youtube.com", "www.youtube-nocookie.com"],
        zx, Ax = !1;
    var Bx = function(a, b, c) { var d = a.map(function(g) { return { xa: g, Hd: g, Ed: void 0 } }); if (!b.length) return d; var e = b.map(function(g) { return { xa: g * c, Hd: void 0, Ed: g } }); if (!d.length) return e; var f = d.concat(e);
            f.sort(function(g, h) { return g.xa - h.xa }); return f },
        Cx = function(a) { a = void 0 === a ? [] : a; for (var b = [], c = 0; c < a.length; c++) 0 > a[c] || b.push(a[c]);
            b.sort(function(d, e) { return d - e }); return b },
        Dx = function(a) {
            a = void 0 === a ? [] : a;
            for (var b = [], c = 0; c < a.length; c++) 100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
            b.sort(function(d, e) {
                return d -
                    e
            });
            return b
        },
        Ex = function(a, b) {
            var c, d;

            function e() { u = Bu(function() { return { url: w, title: x, Of: v, Rh: a.getCurrentTime(), playbackRate: y } }, b.ib, a.getIframe());
                v = 0;
                x = w = "";
                y = 1; return f }

            function f(E) { switch (E) {
                    case 1:
                        v = Math.round(a.getDuration());
                        w = a.getVideoUrl(); if (a.getVideoData) { var J = a.getVideoData();
                            x = J ? J.title : "" }
                        y = a.getPlaybackRate();
                        b.Hf ? Pt(u.createEvent("start")) : u.qc();
                        t = Bx(b.lg, b.kg, a.getDuration()); return g(E);
                    default:
                        return f } }

            function g() { A = a.getCurrentTime();
                B = Sa().getTime();
                u.ji();
                r(); return h }

            function h(E) { var J; switch (E) {
                    case 0:
                        return n(E);
                    case 2:
                        J = "pause";
                    case 3:
                        var D = a.getCurrentTime() - A;
                        J = 1 < Math.abs((Sa().getTime() - B) / 1E3 * y - D) ? "seek" : J || "buffering";
                        a.getCurrentTime() && (b.Gf ? Pt(u.createEvent(J)) : u.qc());
                        q(); return l;
                    case -1:
                        return e(E);
                    default:
                        return h } }

            function l(E) { switch (E) {
                    case 0:
                        return n(E);
                    case 1:
                        return g(E);
                    case -1:
                        return e(E);
                    default:
                        return l } }

            function n() { for (; d;) { var E = c;
                    m.clearTimeout(d);
                    E() }
                b.Ff && Pt(u.createEvent("complete", 1)); return e(-1) }

            function p() {}

            function q() {
                d &&
                    (m.clearTimeout(d), d = 0, c = p)
            }

            function r() { if (t.length && 0 !== y) { var E = -1,
                        J;
                    do { J = t[0]; if (J.xa > a.getDuration()) return;
                        E = (J.xa - a.getCurrentTime()) / y; if (0 > E && (t.shift(), 0 === t.length)) return } while (0 > E);
                    c = function() { d = 0;
                        c = p;
                        0 < t.length && t[0].xa === J.xa && (t.shift(), Pt(u.createEvent("progress", J.Ed, J.Hd)));
                        r() };
                    d = m.setTimeout(c, 1E3 * E) } }
            var u, t = [],
                v, w, x, y, A, B, C = e(-1);
            d = 0;
            c = p;
            return { onStateChange: function(E) { C = C(E) }, onPlaybackRateChange: function(E) { A = a.getCurrentTime();
                    B = Sa().getTime();
                    u.qc();
                    y = E;
                    q();
                    r() } }
        },
        Gx =
        function(a) { H(function() {
                function b() { for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++) Fx(d[f], a) } var c = G;
                b();
                qu(b) }) },
        Fx = function(a, b) { if (!a.getAttribute("data-gtm-yt-inspected-" + b.ib) && (Rb(a, "data-gtm-yt-inspected-" + b.ib), Hx(a, b.sd))) { a.id || (a.id = Ix()); var c = m.YT,
                    d = c.get(a.id);
                d || (d = new c.Player(a.id)); var e = Ex(d, b),
                    f = {},
                    g; for (g in e) f.Ac = g, e.hasOwnProperty(f.Ac) && d.addEventListener(f.Ac, function(h) { return function(l) { return e[h.Ac](l.data) } }(f)), f = { Ac: f.Ac } } },
        Hx = function(a, b) {
            var c =
                a.getAttribute("src");
            if (Jx(c, "embed/")) { if (0 < c.indexOf("enablejsapi=1")) return !0; if (b) { var d; var e = -1 !== c.indexOf("?") ? "&" : "?"; - 1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (zx || (zx = G.location.protocol + "//" + G.location.hostname, G.location.port && (zx += ":" + G.location.port)), d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(zx)); var f;
                    f = Eb(d);
                    a.src = Db(f).toString(); return !0 } }
            return !1
        },
        Jx = function(a, b) { if (!a) return !1; for (var c = 0; c < yx.length; c++)
                if (0 <= a.indexOf("//" + yx[c] + "/" + b)) return !0;
            return !1 },
        Ix = function() {
            var a =
                Math.round(1E9 * Math.random()) + "";
            return G.getElementById(a) ? Ix() : a
        };

    function Kx(a, b) {
        var c = this;
        L(F(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
        Dv([function() { return M(c, "process_dom_events", "element", "onStateChange") }, function() { return M(c, "process_dom_events", "element", "onPlaybackRateChange") }]);
        b = iu(b);
        var d = !!a.get("captureStart"),
            e = !!a.get("captureComplete"),
            f = !!a.get("capturePause"),
            g = Dx(Ec(a.get("progressThresholdsPercent"))),
            h = Cx(Ec(a.get("progressThresholdsTimeInSeconds"))),
            l = !!a.get("fixMissingApi");
        if (!(d || e || f || g.length || h.length)) return;
        var n = { Hf: d, Ff: e, Gf: f, kg: g, lg: h, sd: l, ib: b },
            p = m.YT,
            q = function() { Gx(n) };
        if (p) return p.ready && p.ready(q), b;
        var r = m.onYouTubeIframeAPIReady;
        m.onYouTubeIframeAPIReady = function() { r && r();
            q() };
        H(function() {
            for (var u = G.getElementsByTagName("script"), t = u.length, v = 0; v < t; v++) { var w = u[v].getAttribute("src"); if (Jx(w, "iframe_api") || Jx(w, "player_api")) return b }
            for (var x = G.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++)
                if (!Ax && Hx(x[A], n.sd)) return ac("https://www.youtube.com/iframe_api"),
                    Ax = !0, b
        });
        return b
    }
    Kx.P = "internal.enableAutoEventOnYouTubeActivity";

    function Lx(a, b) { var c = !1;
        L(F(this), ["booleanExpression:!string", "context:?DustMap"], arguments); var d = JSON.parse(a); if (!d) throw Error("Invalid boolean expression string was given."); var e = b ? Ec(b) : {};
        c = Mx(d, e); return c }
    var Nx = function(a, b) { for (var c = 0; c < b.length; c++) { if (void 0 === a) return;
                a = a[b[c]] } return a },
        Ox = function(a, b) {
            if (1 === a.namespaceType) {
                var c = b.preHit;
                if (!c) return;
                var d = a.keyParts;
                if (!d || 0 === d.length) return;
                var e = d[0];
                switch (e) {
                    case "hitData":
                        return 2 > d.length ? void 0 : Nx(c.getHitData(d[1]), d.slice(2));
                    case "metadata":
                        return 2 > d.length ? void 0 : Nx(c.getMetadata(d[1]), d.slice(2));
                    case "eventName":
                        return c.getEventName();
                    case "destinationId":
                        return c.getDestinationId();
                    default:
                        throw Error(e + " is not a valid field that can be accessed\n                        from PreHit data.");
                }
            }
            throw Error("Unknown Namespace Type used:\n                      " + a.namespaceType);
        },
        Px = function(a, b) {
            if (a) {
                if (void 0 !== a.contextValue) return Ox(a.contextValue, b);
                if (void 0 !== a.booleanExpressionValue) return Mx(a.booleanExpressionValue, b);
                if (void 0 !== a.booleanValue) return !!a.booleanValue;
                if (void 0 !== a.stringValue) return String(a.stringValue);
                if (void 0 !== a.integerValue) return Number(a.integerValue);
                if (void 0 !== a.doubleValue) return Number(a.doubleValue);
                throw Error("Unknown field used for variable of type ExpressionValue:" +
                    a);
            }
        },
        Mx = function(a, b) {
            var c = a.args;
            if (!Ea(c) || 0 === c.length) throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
            var d = function(g) { return Px(g, b) };
            switch (a.type) {
                case 1:
                    for (var e = 0; e < c.length; e++)
                        if (d(c[e])) return !0;
                    return !1;
                case 2:
                    for (var f = 0; f < c.length; f++)
                        if (!d(c[f])) return !1;
                    return 0 < c.length;
                case 3:
                    return !d(c[0]);
                case 4:
                    return qv(d(c[0]), d(c[1]), !1);
                case 5:
                    return tv(d(c[0]), d(c[1]));
                case 6:
                    return yv(d(c[0]), d(c[1]));
                case 7:
                    return ov(d(c[0]),
                        d(c[1]));
                case 8:
                    return sv(d(c[0]), d(c[1]));
                case 9:
                    return xv(d(c[0]), d(c[1]));
                case 10:
                    return vv(d(c[0]), d(c[1]));
                case 11:
                    return wv(d(c[0]), d(c[1]));
                case 12:
                    return uv(d(c[0]), d(c[1]));
                default:
                    throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
            }
        };
    Lx.P = "internal.evaluateBooleanExpression";
    var Qx;

    function Rx(a) { var b = !1; return b }
    Rx.P = "internal.evaluateMatchingRules";
    var Tx = function(a, b, c) { if (c) switch (c.type) {
                case "event_name":
                    return a;
                case "const":
                    return c.const_value;
                case "event_param":
                    var d = c.event_param.param_name; if (d === S.g.jf) return Sx(b); return b[d] } },
        Xx = function(a, b, c, d) { Ux = !1; if (c && !Vx(a, b, c)) return !1; if (!d || 0 === d.length) return !0; for (var e = 0; e < d.length; e++)
                if (Wx(a, b, d[e].predicates || [])) return !0;
            return !1 },
        Wx = function(a, b, c) {
            for (var d = 0; d < c.length; d++)
                if (!Vx(a,
                        b, c[d])) return !1;
            return !0
        },
        Vx = function(a, b, c) {
            var d = c.values || [],
                e = Tx(a, b, d[0]),
                f = Tx(a, b, d[1]),
                g = c.type;
            if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g) k(e) && (e = e.toLowerCase()), k(f) && (f = f.toLowerCase());
            var h = !1;
            switch (g) {
                case "eq":
                case "eqi":
                    h = tv(e, f);
                    break;
                case "sw":
                case "swi":
                    h = yv(e, f);
                    break;
                case "ew":
                case "ewi":
                    h = ov(e, f);
                    break;
                case "cn":
                case "cni":
                    h = sv(e, f);
                    break;
                case "lt":
                    h = xv(e, f);
                    break;
                case "le":
                    h = vv(e, f);
                    break;
                case "gt":
                    h = wv(e, f);
                    break;
                case "ge":
                    h = uv(e, f);
                    break;
                case "re":
                case "rei":
                    h = qv(e,
                        f, "rei" === g)
            }
            return !!c.negate !== h
        },
        Ux = !1;
    var Sx = function(a) { var b = a[S.g.jf]; if (b) return b;
        Ux = !0; var c = a[S.g.Ra]; if (k(c)) { var d = K(57); if (Ca(URL)) try { var e = new URL(c); return e.pathname + (d ? e.search : "") } catch (h) { return }
            var f = ki(c); if (f.hostname) { var g = d ? ii(f, "query") : "";
                g && (g = "?" + g); return ii(f, "path") + g } } };

    function Yx(a, b) { var c = !1; return c }
    Yx.P = "internal.evaluatePredicates";
    var Zx = function(a) { var b; return b };

    function $x(a, b) { b = void 0 === b ? !0 : b; var c; return c }
    $x.R = "getCookieValues";

    function ay() { return Ri.Kf }
    ay.P = "internal.getCountryCode";

    function by() { var a = [];
        a = bk(); return Dc(a) }
    by.P = "internal.getDestinationIds";

    function cy(a) { var b = null; return b }
    cy.R = "getElementById";
    var dy = {};
    dy.enableAdsHistoryChangeEvents = K(36);
    dy.enableAlwaysSendFormStart = K(38);
    dy.enableCcdEnhancedMeasurement = K(41);
    dy.enableCcdEventBlocking = K(40);
    dy.enableCcdEventEditingAndCreation = K(26);
    dy.enableCcdGaConversions = K(39);
    dy.enableCcdPreAutoPiiDetection = K(49);
    dy.enableCcdUserData = K(16);
    dy.enableEesPagePath = K(43);
    dy.enableEmFormCcd = K(35);
    dy.enableEmFormCcdPart2 = K(31) || K(33);
    dy.enableEuidAutoMode = K(37);
    dy.enableGa4OnoRemarketing = K(34);
    dy.enableSendGtagEventId = K(44);
    dy.autoPiiEligible = !0;

    function ey() { return Dc(dy) }
    ey.P = "internal.getFlags";

    function fy(a, b) { var c;
        L(F(this), ["targetId:!string", "name:!string"], arguments); var d = Uh(a) || {};
        c = Dc(d[b], this.h); return c }
    fy.P = "internal.getProductSettingsParameter";

    function gy(a, b) { var c;
        L(F(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        M(this, "get_url", "query", a); var d = ii(ki(m.location.href), "query"),
            e = fi(d, a, b);
        c = Dc(e, this.h); return c }
    gy.R = "getQueryParameters";

    function hy(a, b) { var c; return c }
    hy.R = "getReferrerQueryParameters";

    function iy(a) { var b = ""; return b }
    iy.R = "getReferrerUrl";

    function jy() { return Ri.gi }
    jy.P = "internal.getRegionCode";

    function ky(a, b) { var c;
        L(F(this), ["targetId:!string", "name:!string"], arguments); var d = zs(ts, a).h;
        c = Dc(d[b], this.h); return c }
    ky.P = "internal.getRemoteConfigParameter";

    function ly(a) { var b = "";
        L(F(this), ["component:?string"], arguments), M(this, "get_url", a), b = ii(ki(m.location.href), a); return b }
    ly.R = "getUrl";

    function my() { M(this, "get_user_agent"); return m.navigator.userAgent }
    my.R = "getUserAgent";

    function ny(a) { if (!a) return {}; var b = a.Mj; return mr(b.type, b.index, b.name) }

    function oy(a) { return a ? { originatingEntity: ny(a) } : {} };

    function qy(a, b) {}
    qy.R = "gtagSet";

    function ry(a, b) {}
    ry.R = "injectHiddenIframe";
    var sy = {};

    function uy(a, b, c, d) {}
    var vy = Object.freeze({ dl: 1, id: 1 }),
        wy = {};

    function xy(a, b, c, d) {}
    uy.R = "injectScript";
    xy.P = "internal.injectScript";

    function yy(a) { var b = !0; return b }
    yy.R = "isConsentGranted";
    var zy = function() { var a = ag(function(b) { this.h.h.log("error", b) });
        a.R = "JSON"; return a };
    var Ay = function() { return !1 },
        By = {
            getItem: function(a) { var b = null; return b },
            setItem: function(a,
                b) { return !1 },
            removeItem: function(a) {}
        };
    var Cy = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Dy(a) { var b; return b }
    Dy.P = "internal.locateUserData";

    function Fy() {}
    Fy.R = "logToConsole";

    function Gy(a) {
        var b = void 0;
        if ("function" === typeof URL) {
            var c;
            a: {
                var d;
                try { d = new URL(a) } catch (w) { c = void 0; break a }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) { var h = f[g][0],
                        l = f[g][1];
                    e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], l] : e[h].push(l) : e[h] = l }
                c = Dc({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try { n = ki(a) } catch (w) { return }
        if (!n.protocol || !n.host) return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) { var u = q[r].split("="),
                    t = u[0],
                    v = decodeURIComponent(u.splice(1).join("="));
                p.hasOwnProperty(t) ? "string" === typeof p[t] ? p[t] = [p[t], v] : p[t].push(v) : p[t] = v }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = Dc(n);
        return b
    }
    Gy.R = "parseUrl";

    function Hy(a) {}
    Hy.P = "internal.processAsNewEvent";

    function Iy(a, b) { var c = !1; return c }
    Iy.R = "queryPermission";

    function Jy() { var a = ""; return a }
    Jy.R = "readCharacterSet";

    function Ky() { var a = ""; return a }
    Ky.R = "readTitle";

    function Ly(a, b) { var c = this;
        L(F(this), ["destinationId:!string", "callback:!Fn"], arguments), cn(a, function(d) { b.h(c.h, Dc(d, c.h, 1)) }); }
    Ly.P = "internal.registerCcdCallback";
    var My = Object.freeze(["config", "event", "get", "set"]);

    function Ny(a, b, c) {}
    Ny.P = "internal.registerGtagCommandListener";

    function Oy(a, b) { var c = !1; return c }
    Oy.P = "internal.removeDataLayerEventListener";

    function Py() {}
    Py.R = "resetDataLayer";
    var Qy = function(a) { var b = !1; return b },
        Ry = function(a) { if (a.metadata.is_merchant_center) return !1; var b = T(a.s, S.g.ee); return !(!0 !== b && "true" !== b || !T(a.s, S.g.wa)) },
        Sy = function(a) { var b = a.metadata.user_data; if (Cc(b)) return b },
        Ty = function(a, b) { var c = Zm(a, S.g.ce, a.s.D[S.g.ce]); if (c && void 0 !== c[b || a.eventName]) return c[b || a.eventName] };
    var Uy = !1,
        Vy = function(a) { var b = a.eventName === S.g.Hc && gj() && Ry(a),
                c = a.metadata.batch_on_navigation,
                d = a.metadata.is_conversion,
                e = a.metadata.is_session_start,
                f = a.metadata.create_dc_join,
                g = a.metadata.create_google_join,
                h = a.metadata.euid_mode_enabled && !!Sy(a); return !(!Ub.sendBeacon || d || h || e || f || g || b || !c && Uy) };
    var Wy = function(a) { vb("GA4_EVENT", a) };
    var Yy = function(a) { return !a || Xy.test(a) || Sg.hasOwnProperty(a) },
        Zy = function(a, b, c) { for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) { var f = d[e]; if (f.edit_param) { var g = f.edit_param.param_name,
                        h = Tx(a, b, f.edit_param.param_value),
                        l; if (h) { var n = Number(h);
                        l = isNaN(n) ? h : n } else l = h;
                    b[g] = l } else f.delete_param && delete b[f.delete_param.param_name] } },
        Xy = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var $y = function(a) { var b = 0,
                c = 0; return { start: function() { b = Ta() }, stop: function() { c = this.get() }, get: function() { var d = 0;
                    a.Yf() && (d = Ta() - b); return d + c } } },
        az = function() { this.h = void 0;
            this.B = 0;
            this.isActive = this.isVisible = this.D = !1;
            this.I = this.F = void 0 };
    ba = az.prototype;
    ba.jj = function(a) {
        var b = this;
        if (!this.h) {
            this.D = G.hasFocus();
            this.isVisible = !G.hidden;
            this.isActive = !0;
            var c = function(d, e, f) { ec(d, e, function(g) { b.h.stop();
                    f(g);
                    b.Yf() && b.h.start() }) };
            c(m, "focus", function() { b.D = !0 });
            c(m, "blur", function() {
                b.D = !1
            });
            c(m, "pageshow", function(d) { b.isActive = !0;
                d.persisted && P(56);
                b.I && b.I() });
            c(m, "pagehide", function() { b.isActive = !1;
                b.F && b.F() });
            c(G, "visibilitychange", function() { b.isVisible = !G.hidden });
            Ry(a) && -1 === (Ub.userAgent || "").indexOf("Firefox") && -1 === (Ub.userAgent || "").indexOf("FxiOS") && c(m, "beforeunload", function() { Uy = !0 });
            this.ng();
            this.B = 0
        }
    };
    ba.ng = function() { this.B += this.Je();
        this.h = $y(this);
        this.Yf() && this.h.start() };
    ba.Xk = function(a) { var b = this.Je();
        0 < b && (a.C[S.g.be] = b) };
    ba.Zj = function(a) {
        a.C[S.g.be] =
            void 0;
        this.ng();
        this.B = 0
    };
    ba.Yf = function() { return this.D && this.isVisible && this.isActive };
    ba.Wj = function() { return this.B + this.Je() };
    ba.Je = function() { return this.h && this.h.get() || 0 };
    ba.Hk = function(a) { this.F = a };
    ba.hi = function(a) { this.I = a };

    function bz() { return m.gaGlobal = m.gaGlobal || {} }
    var cz = function() { var a = bz();
            a.hid = a.hid || Ja(); return a.hid },
        dz = function(a, b) { var c = bz(); if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b };
    var ez = function(a, b, c) { var d = a.metadata.client_id_source; if (void 0 === d || c <= d) a.C[S.g.xb] = b, a.metadata.client_id_source = c },
        hz = function(a, b) { var c; var d = b.metadata.cookie_options,
                e = d.prefix + "_ga",
                f = Yk(d, void 0, void 0, S.g.Z); if (!1 === T(b.s, S.g.Hb) && fz(b) === a) c = !0;
            else { var g = Wj(a, gz[0], d.domain, d.path);
                c = 1 !== Oj(e, g, f) } return c },
        fz = function(a) { var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = Vj(c, b.domain, b.path, gz, S.g.Z); if (!d) { var e = String(T(a.s, S.g.Qc, ""));
                e && e != c && (d = Vj(e, b.domain, b.path, gz, S.g.Z)) } return d },
        gz = ["GA1"],
        iz = function(a, b) { var c = a.C[S.g.xb]; if (b && c === b) return c; if (c) { c = "" + c; if (!hz(c, a)) return P(31), a.K = !0, "";
                dz(c, tj(S.g.Z)); return c }
            P(32);
            a.K = !0; return "" };
    var lz = function(a, b, c) { if (!b) return a; if (!a) return b; var d = jz(a); if (!d) return b; var e, f = Oa(null != (e = T(c.s, S.g.ad)) ? e : 30); if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.Ad + 60 * f)) return a; var g = jz(b); if (!g) return a;
            g.Sb = d.Sb + 1; var h; return null != (h = kz(g.sessionId, g.Sb, g.wc, g.Ad, g.Zf, g.Qb, g.nd)) ? h : b },
        oz = function(a, b) {
            var c = b.metadata.cookie_options,
                d = mz(b, c),
                e = Wj(a, nz[0], c.domain, c.path),
                f = { Db: S.g.Z, domain: c.domain, path: c.path, expires: c.hb ? new Date(Ta() + 1E3 * c.hb) : void 0, flags: c.flags };
            K(52) &&
                Oj(d, void 0, f);
            return 1 !== Oj(d, e, f)
        },
        pz = function(a) { var b = a.metadata.cookie_options,
                c = mz(a, b),
                d = Vj(c, b.domain, b.path, nz, S.g.Z); if (!d || !Bn && !K(52)) return d; var e = Fj(c, void 0, void 0, S.g.Z); if (d && 1 < e.length) { P(114); for (var f = void 0, g = void 0, h = 0; h < e.length; h++) { var l = e[h].split("."); if (!(7 > l.length)) { var n = Number(l[5]);
                        n && (!g || n > g) && (g = n, f = e[h]) } }
                f && !f.endsWith(d) && (P(115), K(52) && (d = f.split(".").slice(2).join("."))) } return d },
        kz = function(a, b, c, d, e, f, g) {
            if (a && b) {
                var h = [a, b, Oa(c), d, e];
                h.push(f ? "1" : "0");
                h.push(g || "0");
                return h.join(".")
            }
        },
        nz = ["GS1"],
        mz = function(a, b) { return b.prefix + "_ga_" + a.target.M[0] },
        jz = function(a) { if (a) { var b = a.split("."); if (!(5 > b.length || 7 < b.length)) return 7 > b.length && P(67), { sessionId: b[0], Sb: Number(b[1]), wc: !!Number(b[2]), Ad: Number(b[3]), Zf: Number(b[4] || 0), Qb: "1" === b[5], nd: "0" !== b[6] ? b[6] : void 0 } } },
        qz = function(a) { return kz(a.C[S.g.Ab], a.C[S.g.pe], a.C[S.g.oe], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[S.g.cf], a.C[S.g.Uc]) };

    var rz = function(a) { var b = T(a.s, S.g.za),
                c = a.s.D[S.g.za]; if (c === b) return c; var d = I(b);
            c && c[S.g.aa] && (d[S.g.aa] = (d[S.g.aa] || []).concat(c[S.g.aa])); return d },
        sz = function(a, b) { var c = Ol(!0); return "1" !== c._up ? {} : { clientId: c[a], ki: c[b] } },
        tz = function(a, b, c) { var d = Ol(!0),
                e = d[b];
            e && (ez(a, e, 2), hz(e, a)); var f = d[c];
            f && oz(f, a); return !(!e || !f) },
        uz = !1,
        vz = function(a) {
            var b = rz(a) || {},
                c = a.metadata.cookie_options,
                d = c.prefix + "_ga",
                e = mz(a, c);
            Xl(b[S.g.ic], !!b[S.g.aa]) && tz(a, d, e) && (uz = !0);
            b[S.g.aa] && Ul(function() {
                var f = {},
                    g = fz(a);
                g && (f[d] = g);
                var h = pz(a);
                h && (f[e] = h);
                var l = Fj("FPLC", void 0, void 0, S.g.Z);
                l.length && (f._fplc = l[0]);
                return f
            }, b[S.g.aa], b[S.g.Yc], !!b[S.g.jc])
        },
        xz = function(a) { if (!T(a.s, S.g.qb)) return {}; var b = a.metadata.cookie_options,
                c = b.prefix + "_ga",
                d = mz(a, b);
            Vl(function() { var e; if (tj("analytics_storage")) e = {};
                else { var f = {};
                    e = (f._up = "1", f[c] = a.C[S.g.xb], f[d] = qz(a), f) } return e }, 1); return !tj("analytics_storage") && wz() ? sz(c, d) : {} },
        wz = function() {
            var a = hi(m.location, "host"),
                b = hi(ki(G.referrer), "host");
            return a &&
                b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
        },
        yz = function(a) { if (!a) return a; var b = String(a);
            b = Nl(b); return b = Nl(b, "_ga") };
    var zz = function() { var a = Ta(),
            b = a + 864E5,
            c = 20,
            d = 5E3; return function() { var e = Ta();
            e >= b && (b = e + 864E5, d = 5E3); if (1 > d) return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e; if (1 > c) return !1;
            d--;
            c--; return !0 } };
    var Az = function() { var a = !0;
            Xk(7) && Xk(9) && Xk(10) || (a = !1); return a },
        Bz = function() { var a = !0;
            Xk(3) && Xk(4) || (a = !1); return a };
    var Cz = function(a, b) { if (Ry(b)) { var c = Gp();
                c && (a.us_privacy = c); var d = Wk();
                d && (a.gdpr = d); var e = Vk();
                e && (a.gdpr_consent = e) } },
        Dz = function(a, b) { if (gj()) { a.gcs = uj(); var c = b.metadata.is_consent_update;
                c && (a.gcu = "1"); if (Ry(b)) { hj() && (a.gcd = "G1" + oj(ej)); var d = T(b.s, S.g.na);
                    a.adr = void 0 !== d && !1 !== d ? "1" : "0";
                    c && (a.gcut = $g[b.metadata.consent_update_type || ""]) } } },
        Ez = function(a, b, c) { void 0 === c && (c = {}); if ("object" === typeof b)
                for (var d in b) Ez(a + "." + d, b[d], c);
            else c[a] = b; return c },
        Hz = function(a) {
            if (a.metadata.is_merchant_center) return "https://www.merchant-center-analytics.goog/mc/collect";
            var b = Mq(T(a.s, S.g.wa), "/g/collect");
            if (b) return b;
            var c = Zm(a, S.g.yb, T(a.s, S.g.yb));
            var d = T(a.s, S.g.Jc);
            return c && !Zm(a, S.g.Xc, !1) && !1 !== d && Az() && tj(S.g.J) && tj(S.g.Z) ? Fz() : Gz()
        },
        Iz = "",
        Jz = !1;
    Jz = !0;
    var Kz = {};
    Kz[S.g.dj] = "tid";
    Kz[S.g.xb] = "cid";
    Kz[S.g.Qa] = "ul";
    Kz[S.g.df] = "_fid";
    Kz[S.g.nf] = "tt";
    Kz[S.g.ke] = "ir";
    Kz[S.g.Jb] = "sr";
    Kz[S.g.hc] = "gdid";
    Kz[S.g.Zc] = "_rdi";
    Kz[S.g.Wg] = "_geo";
    Kz[S.g.Ch] = "gtm_up";
    Kz[S.g.Bh] = "_glv";
    Kz[S.g.pf] =
        "uaa", Kz[S.g.qf] = "uab", Kz[S.g.rf] = "uafvl", Kz[S.g.nh] = "uamb", Kz[S.g.sf] = "uam", Kz[S.g.tf] = "uap", Kz[S.g.uf] = "uapv", Kz[S.g.oh] = "uaW", Kz[S.g.vf] = "uaw";
    var Lz = {};
    Lz[S.g.Ab] = "sid";
    Lz[S.g.pe] = "sct";
    Lz[S.g.oe] = "seg";
    Lz[S.g.Ra] = "dl";
    Lz[S.g.Sa] = "dr";
    Lz[S.g.mc] = "dt";
    Lz[S.g.va] = "cu";
    Lz[S.g.Aa] = "uid";
    Lz[S.g.Vd] = "cc";
    Lz[S.g.Wd] = "ci";
    Lz[S.g.Xd] = "cm";
    Lz[S.g.Yd] = "cn";
    Lz[S.g.Zd] = "cs";
    Lz[S.g.ae] = "ck";
    var Mz = {};
    Mz[S.g.be] = "_et";
    Mz[S.g.fc] = "edid";
    var Nz = {};
    Nz[S.g.Vd] = "cc";
    Nz[S.g.Wd] = "ci";
    Nz[S.g.Xd] = "cm";
    Nz[S.g.Yd] = "cn";
    Nz[S.g.Zd] = "cs";
    Nz[S.g.ae] = "ck";
    var Oz = {},
        Pz = Object.freeze((Oz[S.g.ka] = !0, Oz)),
        Gz = function() { var a = "www";
            Jz && Iz && (a = Iz); return "https://" + a + ".google-analytics.com/g/collect" },
        Fz = function() { var a;
            Jz && Iz && (a = Iz); return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect" },
        Qz = function(a, b, c) {
            var d = {},
                e = {},
                f = {};
            d.v = "2";
            d.tid = a.target.V;
            d.gtm = kk();
            d._p = cz();
            c && (d.em = c);
            a.metadata.create_google_join && (d._gaz = 1);
            Dz(d, a);
            Cz(d, a);
            var g = a.C[S.g.hc];
            g && (d.gdid = g);
            e.en = ff(a.eventName, 40);
            a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
            a.metadata.is_new_to_site && (e._nsi = 1);
            a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ?
                2 : 1);
            a.metadata.is_conversion && (e._c = 1);
            a.metadata.is_external_event && (e._ee = 1);
            if (a.metadata.is_ecommerce) { var h = a.C[S.g.ia] || T(a.s, S.g.ia); if (Ea(h))
                    for (var l = 0; l < h.length && 200 > l; l++) e["pr" + (l + 1)] = nf(h[l]) }
            var n = a.C[S.g.fc];
            n && (e.edid = n);
            var p = function(t, v) { if (!K(23) || "object" !== typeof v || !Pz[t]) { t = ff(t, 40); var w = "ep." + t,
                            x = "epn." + t;
                        t = Da(v) ? x : w; var y = Da(v) ? w : x;
                        e.hasOwnProperty(y) && delete e[y];
                        e[t] = ff(v, 100) } },
                q = function(t, v) {
                    if (K(23)) return !1;
                    var w = t.split(".");
                    if (t === S.g.ka && "object" !== typeof v) return p(t,
                        v), !0;
                    if (w[0] === S.g.ka) { if ((1 < w.length || "object" === typeof v) && Ry(a)) { var x = Ez(t, v);
                            Ma(x, function(y, A) { return void p(y, A) }) } return !0 }
                    return !1
                };
            Ma(a.C, function(t, v) {
                if (void 0 !== v && !Qg.hasOwnProperty(t)) {
                    null === v && (v = "");
                    var w;
                    t !== S.g.Uc ? w = !1 : a.metadata.euid_mode_enabled ? (d.ecid = v, w = !0) : w = void 0;
                    if (!w && t !== S.g.cf) {
                        var x = v;
                        !0 === v && (x = "1");
                        !1 === v && (x = "0");
                        var y;
                        if (Kz[t]) y = Kz[t], d[y] = ff(x, 420);
                        else if (Lz[t]) y = Lz[t], f[y] = ff(x, 420);
                        else if (Mz[t]) y = Mz[t], e[y] = ff(x, 420);
                        else if ("_" === t.charAt(0)) d[t] = ff(x,
                            420);
                        else { var A;
                            (A = q(t, v)) || (Nz[t] ? A = !0 : t !== S.g.Oc ? A = !1 : ("object" !== typeof v && p(t, v), A = !0));
                            A || p(t, v) }
                    }
                }
            });
            a.metadata.user_data && q("user_data", a.metadata.user_data);
            var r = a.C[S.g.Ta] || {};
            !1 !== T(a.s, S.g.fa) && Bz() || (r._npa = "1");
            Ma(r, function(t, v) { if (void 0 !== v)
                    if (null === v && (v = ""), t === S.g.Aa && !f.uid) f.uid = ff(v, 36);
                    else if (b[t] !== v) { var w = (Da(v) ? "upn." : "up.") + ff(t, 24);
                    e[w] = ff(v, 36);
                    b[t] = v } });
            var u = !1;
            return pf.call(this, { Ha: d, Tb: f, Pf: e }, Hz(a), Ry(a), u) || this
        };
    ma(Qz, pf);
    var Rz = function(a, b) { return a.replace(/\$\{([^\}]+)\}/g, function(c, d) { return b[d] || c }) },
        Sz = function(a) { var b = a.search; return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse") },
        Tz = function(a) { var b = {},
                c = "",
                d = a.pathname.indexOf("/g/collect");
            0 <= d && (c = a.pathname.substring(0, d));
            b.transport_url = a.protocol + "//" + a.hostname + c; return b },
        Uz = function(a, b) {
            var c = new m.XMLHttpRequest;
            c.withCredentials = !0;
            var d = b ? "POST" : "GET",
                e = "",
                f = 0,
                g = ki(a),
                h = Tz(g),
                l = Sz(g);
            c.onprogress = function(n) {
                if (200 ===
                    c.status) {
                    e += c.responseText.substring(f);
                    f = n.loaded;
                    for (var p = Rz(e, h), q = p.indexOf("\n\n"); - 1 !== q;) {
                        var r;
                        a: { var u, t = p.substring(0, q).split("\n"),
                                v = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];u = v ? v.call(t) : { next: ca(t) }; var w = u.next().value,
                                x = u.next().value; if (w.startsWith("event: message") && x.startsWith("data: ")) try { r = JSON.parse(x.substring(x.indexOf(":") + 1)); break a } catch (B) {}
                            r = void 0 }
                        if (r) { var y = r.send_pixel || []; if (Array.isArray(y))
                                for (var A = 0; A < y.length; A++) dc(y[A]) }
                        p = p.substring(q +
                            2);
                        q = p.indexOf("\n\n")
                    }
                    e = p
                }
            };
            c.open(d, l);
            c.send(b)
        };
    var Xz = function(a, b, c, d) { var e = a + "?" + b;
            Vz && (d = !(0 === e.indexOf(Gz()) || 0 === e.indexOf(Fz())));
            d && !Uy ? Uz(e, c) : Wz(a, b, c) },
        Yz = function(a) {},
        Zz = function(a, b) {
            function c(u) { q.push(u + "=" + encodeURIComponent("" + a.Ha[u])) }
            var d = b.Pk,
                e = b.Qk,
                f = b.Yj,
                g = b.zj,
                h = b.yj,
                l = b.fk,
                n = b.Rk,
                p = b.ek;
            if (d || e || n) {
                var q = [];
                c("tid");
                c("cid");
                c("gtm");
                q.push("aip=1");
                a.Tb.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Tb.uid));
                d && (Wz("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")), nj("https://stats.g.doubleclick.net/g/collect?v=2&" +
                    q.join("&")));
                if (e) { q.push("z=" + Ja()); if (!l) { var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                        r && dc(r + q.join("&")) }
                    K(28) && g && h && qp() && function() { var u = sp() + "/td/ga/rul?";
                        q = [];
                        c("tid");
                        q.push("gacid=" + encodeURIComponent(String(a.Ha.cid)));
                        c("gtm");
                        q.push("aip=1");
                        q.push("fledge=1");
                        q.push("z=" + Ja());
                        rp(u + q.join("&"), a.Ha.tid) }() }
                n && Yz(a)
            }
        },
        Vz = !1;
    var $z = function() { this.F = 1;
        this.I = {};
        this.h = new qf;
        this.B = -1 };
    $z.prototype.D = function(a, b) {
        var c = this,
            d;
        d = new Qz(a, this.I, b);
        var e = Vy(a);
        e && this.h.F(d) || this.flush();
        if (e && this.h.add(d)) { if (0 > this.B) { var f = m.setTimeout,
                    g;
                Ry(a) ? aA ? (aA = !1, g = bA) : g = cA : g = 5E3;
                this.B = f.call(m, function() { return c.flush() }, g) } } else {
            var h = sf(d, this.F++);
            Xz(d.h, h.ig, h.body, d.F);
            var l = a.metadata.create_dc_join,
                n = a.metadata.create_google_join,
                p = !1 !== T(a.s, S.g.Ea),
                q = !1 !== T(a.s, S.g.fa),
                r = { eventId: a.s.eventId, priorityId: a.s.priorityId },
                u = { Pk: l, Qk: n, Yj: String(Zm(a, S.g.ie, T(a.s, S.g.ie))), zj: p, yj: q, fk: Zm(a, S.g.Xc, !1), ek: a.metadata.euid_mode_enabled, rl: r };
            Zz(d, u)
        }
    };
    $z.prototype.add = function(a) { a.metadata.euid_mode_enabled && !Uy ? this.T(a) : this.D(a) };
    $z.prototype.flush = function() {
        if (this.h.events.length) {
            var a =
                tf(this.h, this.F++);
            Xz(this.h.h, a.ig, a.body, this.h.B);
            this.h = new qf;
            0 <= this.B && (m.clearTimeout(this.B), this.B = -1)
        }
    };
    $z.prototype.T = function(a) { var b = this,
            c = Sy(a);
        c ? Ng(c, function(d) { b.D(a, 1 === d.split("~").length ? void 0 : d) }) : this.D(a) };
    var Wz = function(a, b, c) { var d = a + "?" + b; if (c) try { Ub.sendBeacon && Ub.sendBeacon(d, c) } catch (e) { vb("TAGGING", 15) } else kc(d) },
        bA = lk('', 500),
        cA = lk('', 5E3),
        aA = !0;
    var dA = window,
        eA = document,
        fA = function(a) { var b = dA._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === dA["ga-disable-" + a]) return !0; try { var c = dA.external; if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0 } catch (f) {} for (var d = zj("AMP_TOKEN", String(eA.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return eA.getElementById("__gaOptOutExtension") ? !0 : !1 };
    var gA = function(a, b, c) { c || (c = function() {});
            void 0 !== a.C[b] && (a.C[b] = c(a.C[b])) },
        hA = function(a, b) { var c = S.g.J;
            tj(c) || wj(function() { b.metadata.is_consent_update = !0;
                b.metadata.consent_update_type = c;
                a.Lh(b) }, c) },
        iA = function(a, b, c) { void 0 === c && (c = {}); if ("object" === typeof b)
                for (var d in b) iA(a + "." + d, b[d], c);
            else c[a] = b; return c },
        jA = !1;
    var kp = { Kj: "", al: Number("") },
        kA = {},
        lA = (kA[S.g.Vd] = !0, kA[S.g.Wd] = !0, kA[S.g.Xd] = !0, kA[S.g.Yd] = !0, kA[S.g.Zd] = !0, kA[S.g.ae] = !0, kA),
        mA = function(a) { this.T = a;
            this.Ca = new $z;
            this.B = void 0;
            this.F = new az;
            this.D = this.h = void 0;
            this.I = !1;
            this.cd = void 0;
            this.Cc = !1 };
    ba = mA.prototype;
    ba.Ck = function(a, b, c) {
        var d = this,
            e = Hm(this.T);
        if (e)
            if (c.eventMetadata.is_external_event && "_" === a.charAt(0)) c.W();
            else { a !== S.g.Da && a !== S.g.Ka && Yy(a) && P(58);
                nA(c.h); var f = new Xm(e, a, c);
                f.metadata.event_start_timestamp_ms = b; var g = [S.g.Z];
                (Zm(f, S.g.yb, T(f.s, S.g.yb)) || Ry(f)) && g.push(S.g.J); var h = function() { xj(function() { d.Dk(f) }, g) };
                K(11) && K(25) ? lp(h) : h() }
        else c.W()
    };
    ba.Dk = function(a) {
        this.D = a;
        try {
            fA(a.target.V) && (P(28), a.K = !0);
            if (0 <= kp.Kj.replace(/\s+/g, "").split(",").indexOf(a.eventName)) P(33), a.K = !0;
            else { var b = Ty(a);
                b && b.blacklisted && (P(34), a.K = !0) }
            var c = G.location.protocol;
            "http:" != c && "https:" != c && (P(29), a.K = !0);
            Ub && "preview" == Ub.loadPurpose && (P(30), a.K = !0);
            var d = dh.grl;
            d || (d = zz(), dh.grl = d);
            d() || (P(35), a.K = !0);
            if (a.K) { a.s.W();
                wb(); return }
            var e = { prefix: String(T(a.s, S.g.Za, "")), path: String(T(a.s, S.g.af, "/")), flags: String(T(a.s, S.g.ob, "")), domain: String(T(a.s, S.g.nb, "auto")), hb: Number(T(a.s, S.g.Pa, 63072E3)) };
            a.metadata.cookie_options = e;
            oA(a);
            this.kj(a);
            this.F.Xk(a);
            a.metadata.is_merchant_center || T(a.s, S.g.kf) ? a.metadata.euid_mode_enabled = !1 : a.metadata.euid_mode_enabled = Fi(Ei(a.s));
            if (a.metadata.euid_mode_enabled) {
                var f =
                    Ei(a.s);
                if (Fi(f)) { var g = T(a.s, S.g.ka); if (void 0 !== g) a.metadata.user_data = g, a.C._udm = "c";
                    else { var h = Gi(f);
                        a.metadata.user_data = h; if ("selectors" === f.mode || Cc(f.selectors)) a.C._udm = "s";
                        else if ("auto_detect" === f.mode || Cc(f.auto_detect)) a.C._udm = "a" } }
            }
            var l = this.fi,
                n;
            T(a.s, S.g.qb) && (tj(S.g.Z) || T(a.s, S.g.xb) || (a.C[S.g.Ch] = !0));
            var p;
            var q;
            q = void 0 === q ? 3 : q;
            var r = m.location.href;
            if (r) { var u = ki(r).search.replace("?", ""),
                    t = fi(u, "_gl", !1, !0) || "";
                p = t ? void 0 !== Pl(t, q) : !1 } else p = !1;
            p && Ry(a) && (a.C[S.g.Bh] = !0);
            a.eventName ===
                S.g.Da ? (T(a.s, S.g.qb) && wm(["aw", "dc"]), vz(a), n = xz(a)) : n = {};
            l.call(this, n);
            a.eventName == S.g.Da && (T(a.s, S.g.Fa, !0) ? (a.s.h[S.g.ja] && (a.s.B[S.g.ja] = a.s.h[S.g.ja], a.s.h[S.g.ja] = void 0, a.C[S.g.ja] = void 0), a.eventName = S.g.Hc) : a.K = !0);
            var v = db(Io(a.s, S.g.ja, 1), ".");
            v && (a.C[S.g.hc] = v);
            var w = db(Io(a.s, S.g.ja, 2), ".");
            w && (a.C[S.g.fc] = w);
            var x = this.h,
                y = this.F,
                A = !this.Cc,
                B = this.B,
                C = T(a.s, S.g.xb),
                E = C ? 1 : 8;
            a.metadata.is_new_to_site = !1;
            C || (C = fz(a), E = 3);
            C || (C = B, E = 5);
            if (!C) {
                var J = tj(S.g.Z),
                    D = bz();
                C = !D.from_cookie || J ?
                    D.vid : void 0;
                E = 6
            }
            C ? C = "" + C : (C = Sj(), E = 7, a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
            ez(a, C, E);
            var N = Math.floor(a.metadata.event_start_timestamp_ms / 1E3),
                Q = void 0;
            a.metadata.is_new_to_site || (Q = pz(a) || x);
            var V = Oa(T(a.s, S.g.ad, 30));
            V = Math.min(475, V);
            V = Math.max(5, V);
            var qa = Oa(T(a.s, S.g.lf, 1E4)),
                R = jz(Q);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            R && R.Zf && (a.metadata.join_timer_sec = Math.max(0, R.Zf - Math.max(0, N - R.Ad)));
            var O = !1;
            R || (O = a.metadata.is_first_visit = !0, R = { sessionId: String(N), Sb: 1, wc: !1, Ad: N, Qb: !1, nd: void 0 });
            N > R.Ad + 60 * V && (O = !0, R.sessionId = String(N), R.Sb++, R.wc = !1, R.nd = void 0);
            if (O) a.metadata.is_session_start = !0, y.Zj(a);
            else if (y.Wj() > qa || a.eventName == S.g.Hc) R.wc = !0;
            a.metadata.euid_mode_enabled ? T(a.s, S.g.Aa) ? R.Qb = !0 : (R.Qb && (R.nd = void 0), R.Qb = !1) : R.Qb = !1;
            var ia = R.nd;
            if (a.metadata.euid_mode_enabled) {
                var aa = T(a.s, S.g.Uc),
                    W = aa ? 1 : 8;
                aa || (aa = ia, W = 4);
                aa || (aa = Rj(), W = 7);
                var Fa = W,
                    Za = a.metadata.enhanced_client_id_source;
                if (void 0 === Za || Fa <= Za) a.C[S.g.Uc] =
                    aa.toString(), a.metadata.enhanced_client_id_source = Fa
            }
            A ? (Ym(a, S.g.Ab, R.sessionId), Ym(a, S.g.pe, R.Sb), Ym(a, S.g.oe, R.wc ? 1 : 0)) : (a.C[S.g.Ab] = R.sessionId, a.C[S.g.pe] = R.Sb, a.C[S.g.oe] = R.wc ? 1 : 0);
            a.metadata[S.g.cf] = R.Qb ? 1 : 0;
            pA(a);
            var Ga = "",
                Ia = G.location;
            if (Ia) { var $a = Ia.pathname || ""; "/" != $a.charAt(0) && ($a = "/" + $a);
                Ga = Ia.protocol + "//" + Ia.hostname + $a + Ia.search }
            Ym(a, S.g.Ra, Ga);
            var Gd = S.g.Sa,
                qc;
            a: {
                var ye = Fj("_opt_expid", void 0, void 0, S.g.Z)[0];
                if (ye) {
                    var dt = decodeURIComponent(ye).split("$");
                    if (3 === dt.length) {
                        qc =
                            dt[2];
                        break a
                    }
                }
                if (void 0 !== dh.ga4_referrer_override) qc = dh.ga4_referrer_override;
                else { var et = Lh("gtm.gtagReferrer." + a.target.V);
                    qc = et ? "" + et : G.referrer }
            }
            Ym(a, Gd, qc || void 0);
            Ym(a, S.g.mc, G.title);
            Ym(a, S.g.Qa, (Ub.language || "").toLowerCase());
            var ft = Vh();
            Ym(a, S.g.Jb, ft.width + "x" + ft.height);
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!a.metadata.is_merchant_center && !1 !== T(a.s, S.g.Jc) && Az() && tj(S.g.J)) { var Dh = Zm(a, S.g.yb, T(a.s, S.g.yb)); if (a.metadata.is_session_start || T(a.s, S.g.ef)) { a.metadata.create_dc_join = !!Dh; } var gt;
                gt = a.metadata.join_timer_sec;
                Dh && 0 === (gt || 0) && (a.metadata.join_timer_sec = 60, a.metadata.create_google_join = !0) }
            qA(a);
            Ug.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0, Ym(a, S.g.ia), Ym(a, S.g.va));
            Ym(a, S.g.nf);
            for (var ht = T(a.s, S.g.ff) || [], ol = 0; ol < ht.length; ol++) { var it = ht[ol]; if (it.rule_result) { Ym(a, S.g.nf, it.traffic_type);
                    Wy(3); break } }
            if (!a.metadata.is_merchant_center && T(a.s, S.g.wa)) { var jt = rz(a) || {},
                    WC = (Xl(jt[S.g.ic], !!jt[S.g.aa]) ? Ol(!0)._fplc : void 0) || (0 < Fj("FPLC", void 0, void 0, S.g.Z).length ? void 0 : "0");
                a.C._fplc = WC }
            if (void 0 !== T(a.s, S.g.ke)) Ym(a, S.g.ke);
            else {
                var kt = T(a.s, S.g.ne),
                    pl, Eh;
                a: {
                    if (uz) {
                        var ql = rz(a) || {};
                        if (ql && ql[S.g.aa])
                            for (var lt = ii(ki(a.C[S.g.Sa]),
                                    "host", !0), Fh = ql[S.g.aa], Gf = 0; Gf < Fh.length; Gf++)
                                if (Fh[Gf] instanceof RegExp) { if (Fh[Gf].test(lt)) { Eh = !0; break a } } else if (0 <= lt.indexOf(Fh[Gf])) { Eh = !0; break a }
                    }
                    Eh = !1
                }
                if (!(pl = Eh)) { var Gh; if (Gh = kt) a: { for (var mt = kt.include_conditions || [], XC = ii(ki(a.C[S.g.Sa]), "host", !0), rl = 0; rl < mt.length; rl++)
                            if (mt[rl].test(XC)) { Gh = !0; break a }
                        Gh = !1 }
                    pl = Gh }
                pl && (a.C[S.g.ke] = "1", Wy(4))
            }
            Ry(a) && (Oq() || (a.C._uc = Ri.Kf), gj() && (a.C._rnd = Xj()));
            a: if (K(11))
                if (K(25) && (a.C[S.g.oh] = "1"), !gp(m)) P(87);
                else
            if (void 0 !== ip) {
                P(85);
                var nt =
                    ep();
                if (nt) { if (K(59)) { if (T(a.s, S.g.Zc) && !Ry(a)) break a } else if (T(a.s, S.g.Zc)) break a;
                    mp(nt, a, !0) } else P(86)
            }
            K(61) && T(a.s, S.g.me) && Wy(12);
            if (a.eventName == S.g.Ka) { var ot = T(a.s, S.g.ab),
                    YC = T(a.s, S.g.pb),
                    pt = void 0;
                pt = a.C[ot];
                YC(pt || T(a.s, ot));
                a.K = !0 }
            if (!K(26) && !a.s.eventMetadata.syn_or_mod) {
                var sl = T(a.s, S.g.bf);
                if (sl) {
                    var Hd = I(a.s.h);
                    I(a.C, Hd);
                    for (var qt = sl.edit_rules || [], rt = !1, tl = 0; tl < qt.length; tl++) {
                        var Hh;
                        a: {
                            var Ih = a,
                                Id = qt[tl];
                            if (Xx(Ih.eventName, Hd, Id.event_name_predicate, Id.conditions || [])) {
                                if (Id.new_event_name) {
                                    var st =
                                        k(Id.new_event_name) ? String(Id.new_event_name) : Tx(Ih.eventName, Hd, Id.new_event_name);
                                    if (Yy(st)) { Hh = !1; break a }
                                    Ih.eventName = String(st)
                                }
                                Zy(Ih.eventName, Hd, Id);
                                Wy(2);
                                Hh = !0
                            } else Hh = !1
                        }
                        Hh && (rt = !0)
                    }
                    for (var tt = sl.synthesis_rules || [], ul = 0; ul < tt.length; ul++) {
                        var vl = a,
                            Hf = tt[ul];
                        if (Xx(vl.eventName, Hd, Hf.event_name_predicate, Hf.conditions || [])) {
                            var wl = Hf.new_event_name;
                            if (!Yy(wl)) {
                                var ut = Hf.merge_source_event_params ? I(Hd) : {};
                                Zy(wl, ut, Hf);
                                var vt = {},
                                    xl = { eventMetadata: (vt.syn_or_mod = !0, vt) };
                                xl.eventMetadata.event_usage = [11];
                                Ux && xl.eventMetadata.event_usage.push(10);
                                var ZC = Tr(vl.target.V, wl, ut);
                                Wr(ZC, vl.s.eventId, xl);
                                Wy(1)
                            }
                        }
                    }
                    if (rt) { for (var yl = {}, wt = { eventMetadata: (yl.syn_or_mod = !0, yl.is_external_event = !!a.s.eventMetadata.is_external_event, yl) }, xt, zl = [], yt = ub.GA4_EVENT || [], Jh = 0; Jh < yt.length; Jh++) yt[Jh] && zl.push(Jh);
                        (xt = 0 < zl.length ? zl : void 0) && (wt.eventMetadata.event_usage = xt); var $C = Tr(a.target.V, a.eventName, Hd);
                        Wr($C, a.s.eventId, wt);
                        a.K = !0 }
                }
            }
            bn(a);
            rA(a);
            var Al = a.metadata.event_usage;
            if (Ea(Al))
                for (var Bl = 0; Bl < Al.length; Bl++) Wy(Al[Bl]);
            var zt = xb("GA4_EVENT");
            zt && (a.C._eu = zt);
            Ym(a, S.g.Aa);
            Ym(a, S.g.Ta);
            if (a.metadata.speculative || a.K) { a.s.W();
                wb(); return }
            var bD = this.fi,
                At, cD = this.B,
                Cl;
            a: { var Dl = qz(a); if (Dl) { if (oz(Dl, a)) { Cl = Dl; break a }
                    P(25);
                    a.K = !0 }
                Cl = void 0 }
            var dD = Cl;
            At = { clientId: iz(a, cD), ki: dD };
            bD.call(this, At);
            this.Cc = !0;
            this.Vk(a);
            if (Ry(a)) { var eD = a.metadata.is_conversion;
                ("page_view" === a.eventName || eD) && hA(this, a) }
            this.F.ng();
            this.cd = sA(a, this.cd);
            T(a.s, S.g.Zc) && (a.C[S.g.Zc] = !0, gA(a, S.g.Jb));
            Ym(a, S.g.Wg);
            if (a.K) { a.s.W();
                wb(); return }
            this.Lh(a);
            a.s.X()
        } catch (lE) { a.s.W() }
        wb()
    };
    ba.Lh = function(a) { this.Ca.add(a) };
    ba.fi = function(a) { var b = a.clientId,
            c = a.ki;
        b && c && (this.B = b, this.h = c) };
    ba.flush = function() { this.Ca.flush() };
    ba.Vk = function(a) {
        var b = this;
        if (!this.I) {
            var c = tj(S.g.Z);
            vj([S.g.Z], function() {
                var d = tj(S.g.Z);
                if (c ^ d && b.D && b.h && b.B) {
                    var e = b.B;
                    if (d) {
                        var f = fz(b.D);
                        if (f) { b.B = f; var g = pz(b.D);
                            g ? K(12) ? (b.h = lz(g, b.h, b.D), oz(b.h, b.D)) : b.h = g : oz(b.h, b.D) } else hz(b.B, b.D), dz(b.B, !0), oz(b.h, b.D);
                        var h = {};
                        h[S.g.ef] = e;
                        var l = Tr(b.T, S.g.Xe, h);
                        Wr(l, a.s.eventId, {});
                    } else { b.h = void 0;
                        b.B = void 0;
                        m.gaGlobal = {}; }
                    c = d
                }
            });
            this.I = !0
        }
    };
    ba.kj = function(a) { a.eventName !== S.g.Ka && this.F.jj(a) };
    var rA = function(a) {
            if (K(23) && Ry(a)) {
                var b = function(d) { var e = iA(S.g.ka, d);
                        Ma(e, function(f, g) { a.C[f] = g }) },
                    c = T(a.s, S.g.ka);
                void 0 !== c ? b(c) : b(a.metadata.user_data);
                a.metadata.user_data =
                    void 0
            }
        },
        oA = function(a) {
            function b(c, d) { Qg[c] || void 0 === d || (a.C[c] = d) }
            Ma(a.s.B, b);
            Ma(a.s.h, b) },
        pA = function(a) { var b = Jo(a.s),
                c = function(d, e) { lA[d] && (a.C[d] = e) };
            Cc(b[S.g.Oc]) ? Ma(b[S.g.Oc], function(d, e) { c((S.g.Oc + "_" + d).toLowerCase(), e) }) : Ma(b, c) },
        qA = function(a) {
            var b = function(c) { return !!c && c.conversion };
            a.metadata.is_conversion = b(Ty(a));
            a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(Ty(a, "first_visit")));
            a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(Ty(a,
                "session_start")))
        },
        sA = function(a, b) { var c = void 0; return c };

    function nA(a) { Ma(a, function(c) { "_" === c.charAt(0) && delete a[c] }); var b = a[S.g.Ta] || {};
        Ma(b, function(c) { "_" === c.charAt(0) && delete b[c] }) };
    var tA = function(a) { if ("prerender" == G.visibilityState) return !1;
            a(); return !0 },
        uA = function(a) { if (!tA(a)) { var b = !1,
                    c = function() {!b && tA(a) && (b = !0, fc(G, "visibilitychange", c), P(55)) };
                ec(G, "visibilitychange", c);
                P(54) } };
    var wA = function(a, b) { uA(function() { var c = Hm(a); if (c) { var d = vA(c, b);
                ts.register(a, d) } }); };

    function vA(a, b) { var c = function() {}; var d = new mA(a.id),
            e = "MC" === a.prefix;
        c = function(f, g, h, l) { e && (l.eventMetadata.is_merchant_center = !0);
            d.Ck(g, h, l) };
        xA(a, d, b); return c }

    function xA(a, b, c) { var d = b.F,
            e = {},
            f = { eventId: c, eventMetadata: (e.batch_on_navigation = !0, e) };
        d.Hk(function() { Uy = !0;
            ts.flush();
            1E3 <= d.Je() && Ub.sendBeacon && us(S.g.Xe, {}, a.id, f);
            b.flush();
            d.hi(function() { Uy = !1;
                d.hi() }) }); };
    var sC = vA;

    function uC(a, b, c, d) {
        L(F(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
        var e = c ? Ec(c) : {},
            f = Ec(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? Ec(d) : {},
            h = this.h.h;
        g.originatingEntity = ny(h);
        for (var l = 0; l < f.length; l++) {
            var n = f[l];
            if ("string" === typeof n) {
                var p = I(e),
                    q = I(g),
                    r = Tr(n, b, p);
                Wr(r, g.eventId || h.eventId, q)
            }
        }
    }
    uC.P = "internal.sendGtagEvent";

    function vC(a, b, c) {}
    vC.R = "sendPixel";

    function wC(a, b, c, d) { var e = this;
        d = void 0 === d ? !0 : d; var f = !1; return f }
    wC.R = "setCookie";

    function xC(a) { L(F(this), ["consentSettings:!DustMap"], arguments); for (var b = a.Lb(), c = b.length(), d = 0; d < c; d++) { var e = b.get(d);
            e === S.g.Ue || K(17) && e === S.g.Ve || M(this, "access_consent", e, "write") } var f = this.h.h,
            g = f.eventId,
            h = oy(f),
            l = Qr("consent", "default", Ec(a));
        Wr(l, g, h) }
    xC.R = "setDefaultConsentState";

    function yC(a, b, c) { return !1 }
    yC.R = "setInWindow";

    function zC(a, b, c) { L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments); var d = Uh(a) || {};
        d[b] = Ec(c, this.h); var e = a;
        Sh || Th();
        Rh[e] = d; }
    zC.P = "internal.setProductSettingsParameter";

    function AC(a, b, c) { L(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments); for (var d = b.split("."), e = zs(ts, a).h, f = 0; f < d.length - 1; f++) { if (void 0 === e[d[f]]) e[d[f]] = {};
            else if (!Cc(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]] }
        e[d[f]] = Ec(c, this.h); }
    AC.P = "internal.setRemoteConfigParameter";

    function BC(a, b, c, d) { var e = this; }
    BC.R = "sha256";

    function CC(a, b, c) {}
    CC.P = "internal.sortRemoteConfigParameters";
    var DC = {},
        EC = {};
    DC.R = "templateStorage";
    DC.getItem = function(a) { var b = null;
        M(this, "access_template_storage"); var c = this.h.h; if (!c) throw Error("invalid program state"); var d = c.ud();
        EC[d] && (b = EC[d].hasOwnProperty("gtm." + a) ? EC[d]["gtm." + a] : null); return b };
    DC.setItem = function(a, b) { M(this, "access_template_storage"); var c = this.h.h; if (!c) throw Error("invalid program state"); var d = c.ud();
        EC[d] = EC[d] || {};
        EC[d]["gtm." + a] = b; };
    DC.removeItem = function(a) { M(this, "access_template_storage"); var b = this.h.h; if (!b) throw Error("invalid program state"); var c = b.ud(); if (!EC[c] || !EC[c].hasOwnProperty("gtm." + a)) return;
        delete EC[c]["gtm." + a]; };
    DC.clear = function() { M(this, "access_template_storage"); var a = this.h.h; if (!a) throw Error("invalid program state");
        delete EC[a.ud()]; };
    var FC = function(a) { var b; return b };

    function GC(a) { L(F(this), ["consentSettings:!DustMap"], arguments); var b = Ec(a),
            c; for (c in b) b.hasOwnProperty(c) && M(this, "access_consent", c, "write"); var d = this.h.h;
        Wr(Qr("consent", "update", b), d.eventId, oy(d)) }
    GC.R = "updateConsentState";
    var HC = function() {
        var a = new kg,
            b = function(d) { var e = d.P; if (a.B.hasOwnProperty(e)) throw "Attempting to add a private function which already exists: " + e + "."; if (a.h.hasOwnProperty(e)) throw "Attempting to add a private function with an existing API name: " + e + ".";
                a.B[e] = Ca(d) ? Lf(e, d) : Mf(e, d) },
            c = function(d) { return a.add(d.R, d) };
        c(Bv);
        c(Hv);
        c(tw);
        c(ww);
        c(xw);
        c(Bw);
        c(Cw);
        c(Ew);
        c(zy());
        c(Fw);
        c($x);
        c(gy);
        c(hy);
        c(iy);
        c(ly);
        c(qy);
        c(ry);
        c(uy);
        c(yy);
        c(Fy);
        c(Gy);
        c(Iy);
        c(Jy);
        c(Ky);
        c(vC);
        c(wC);
        c(xC);
        c(yC);
        c(BC);
        c(DC);
        c(GC);
        a.add("Math", Rf());
        a.add("Object", ig);
        a.add("TestHelper", mg());
        a.add("assertApi", Nf);
        a.add("assertThat", Of);
        a.add("decodeUri", Sf);
        a.add("decodeUriComponent", Tf);
        a.add("encodeUri", Uf);
        a.add("encodeUriComponent", Vf);
        a.add("fail", Wf);
        a.add("generateRandom", Xf);
        a.add("getContainerVersion", Yf);
        a.add("getTimestamp", Zf);
        a.add("getTimestampMillis", Zf);
        a.add("getType", $f);
        a.add("makeInteger", bg);
        a.add("makeNumber", cg);
        a.add("makeString", dg);
        a.add("makeTableMap", eg);
        a.add("mock", hg);
        a.add("fromBase64",
            Zx, !("atob" in m));
        a.add("localStorage", By, !Ay());
        a.add("toBase64", FC, !("btoa" in m));
        b(Ev);
        b(Xv);
        b(dw);
        b(iw);
        b(rw);
        b(uw);
        b(zw);
        b(Dw);
        b(Qw);
        b(Vw);
        b($w);
        b(ix);
        b(mx);
        b(xx);
        b(Kx);
        b(Lx);
        b(Rx);
        b(ay);
        b(by);
        b(ey);
        b(fy);
        b(jy);
        b(ky);
        b(xy);
        b(Dy);
        b(Hy);
        b(Ly);
        b(Ny);
        b(Oy);
        b(uC);
        b(zC);
        b(AC);
        b(CC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d)) e = a.get(d, this);
            else {
                var f;
                if (f = a.B.hasOwnProperty(d)) {
                    var g = !1,
                        h = this.h.h;
                    if (h) { var l = h.ud(); if (l) { 0 !== l.indexOf("__cvt_") && (g = !0); } }
                    f =
                        g
                }
                if (f) { var n = a.B.hasOwnProperty(d) ? a.B[d] : void 0;
                    e = n } else throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var IC = function() { return !1 },
        JC = function() { var a = {}; return function(b, c, d) {} };
    var KC;

    function LC() {
        var a = KC;
        return function(b, c, d) {
            var e = d && d.event;
            MC(c);
            var f = new jb;
            Ma(c, function(q, r) { var u = Dc(r);
                void 0 === u && void 0 !== r && P(44);
                f.set(q, u) });
            a.h.h.F = Ne();
            var g = { Cj: $e(b), eventId: void 0 !== e ? e.id : void 0, priorityId: void 0 !== e ? e.priorityId : void 0, ye: void 0 !== e ? function(q) { return e.Bb.ye(q) } : void 0, ud: function() { return b }, log: function() {}, Mj: { index: d && d.index, type: d && d.type, name: d && d.name } };
            if (IC()) {
                var h = JC(),
                    l = void 0,
                    n = void 0;
                g.Wa = {
                    rg: [],
                    hd: {},
                    fb: function(q, r, u) {
                        1 === r && (l = q);
                        7 === r && (n =
                            u);
                        h(q, r, u)
                    },
                    dg: fg()
                };
                g.log = function(q, r) { if (l) { var u = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, { level: q, source: n, message: u }) } }
            }
            var p = Vd(a, g, [b, f]);
            a.h.h.F = void 0;
            p instanceof pa && "return" === p.h && (p = p.B);
            return Ec(p)
        }
    }

    function MC(a) { var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ca(b) && (a.gtmOnSuccess = function() { H(b) });
        Ca(c) && (a.gtmOnFailure = function() { H(c) }) }

    function NC() { KC.h.h.I = function(a, b, c) { dh.SANDBOXED_JS_SEMAPHORE = dh.SANDBOXED_JS_SEMAPHORE || 0;
            dh.SANDBOXED_JS_SEMAPHORE++; try { return a.apply(b, c) } finally { dh.SANDBOXED_JS_SEMAPHORE-- } } }

    function OC(a) { void 0 !== a && Ma(a, function(b, c) { for (var d = 0; d < c.length; d++) { var e = c[d].replace(/^_*/, "");
                wh[e] = wh[e] || [];
                wh[e].push(b) } }) };
    var PC = encodeURI,
        Y = encodeURIComponent,
        QC = function(a, b, c) { dc(a, b, c) },
        RC = function(a, b) { if (!a) return !1; var c = ii(ki(a), "host"); if (!c) return !1; for (var d = 0; b && d < b.length; d++) { var e = b[d] && b[d].toLowerCase(); if (e) { var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e); if (0 <= f && c.indexOf(e, f) == f) return !0 } } return !1 },
        SC = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Z = { m: {} };
    Z.m.access_template_storage = ["google"],
        function() {
            (function(a) { Z.__access_template_storage = a;
                Z.__access_template_storage.o = "access_template_storage";
                Z.__access_template_storage.isVendorTemplate = !0;
                Z.__access_template_storage.priorityOverride = 0;
                Z.__access_template_storage.isInfrastructure = !1 })(function() { return { assert: function() {}, ca: function() { return {} } } }) }();

    Z.m.c = ["google"],
        function() {
            (function(a) { Z.__c = a;
                Z.__c.o = "c";
                Z.__c.isVendorTemplate = !0;
                Z.__c.priorityOverride = 0;
                Z.__c.isInfrastructure = !1 })(function(a) { Qu(a.vtp_value, "c", a.vtp_gtmEventId); return a.vtp_value }) }();
    Z.m.e = ["google"],
        function() {
            (function(a) { Z.__e = a;
                Z.__e.o = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
                Z.__e.isInfrastructure = !1 })(function(a) { return String(a.vtp_gtmCachedValues.event) }) }();
    Z.m.v = ["google"],
        function() {
            (function(a) { Z.__v = a;
                Z.__v.o = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
                Z.__v.isInfrastructure = !1 })(function(a) { var b = a.vtp_name; if (!b || !b.replace) return !1; var c = Iu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Qu(d, "v", a.vtp_gtmEventId); return d }) }();

    Z.m.process_dom_events = ["google"],
        function() {
            function a(b, c, d) { return { targetType: c, eventName: d } }(function(b) { Z.__process_dom_events = b;
                Z.__process_dom_events.o = "process_dom_events";
                Z.__process_dom_events.isVendorTemplate = !0;
                Z.__process_dom_events.priorityOverride = 0;
                Z.__process_dom_events.isInfrastructure = !1 })(function(b) {
                for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) { var g = c[f];
                    e[g.targetType] = e[g.targetType] || [];
                    e[g.targetType].push(g.eventName) }
                return {
                    assert: function(h,
                        l, n) { if (!e[l]) throw d(h, {}, "Prohibited event target " + l + "."); if (-1 === e[l].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + "."); },
                    ca: a
                }
            })
        }();







    Z.m.read_container_data = ["google"],
        function() {
            (function(a) { Z.__read_container_data = a;
                Z.__read_container_data.o = "read_container_data";
                Z.__read_container_data.isVendorTemplate = !0;
                Z.__read_container_data.priorityOverride = 0;
                Z.__read_container_data.isInfrastructure = !1 })(function() { return { assert: function() {}, ca: function() { return {} } } }) }();
    Z.m.listen_data_layer = ["google"],
        function() {
            function a(b, c) { return { eventName: c } }(function(b) { Z.__listen_data_layer = b;
                Z.__listen_data_layer.o = "listen_data_layer";
                Z.__listen_data_layer.isVendorTemplate = !0;
                Z.__listen_data_layer.priorityOverride = 0;
                Z.__listen_data_layer.isInfrastructure = !1 })(function(b) {
                var c = b.vtp_accessType,
                    d = b.vtp_allowedEvents || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g) {
                        if (!k(g)) throw e(f, { eventName: g }, "Event name must be a string.");
                        if (!("any" === c || "specific" ===
                                c && 0 <= d.indexOf(g))) throw e(f, { eventName: g }, "Prohibited listen on data layer event.");
                    },
                    ca: a
                }
            })
        }();


    Z.m.get_url = ["google"],
        function() {
            function a(b, c, d) { return { component: c, queryKey: d } }(function(b) { Z.__get_url = b;
                Z.__get_url.o = "get_url";
                Z.__get_url.isVendorTemplate = !0;
                Z.__get_url.priorityOverride = 0;
                Z.__get_url.isInfrastructure = !1 })(function(b) {
                var c = "any" === b.vtp_urlParts ? null : [];
                c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
                var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null,
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f, g, h) {
                        if (g) { if (!k(g)) throw e(f, {}, "URL component must be a string."); if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g); if ("query" === g && d) { if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified."); if (!k(h)) throw e(f, {}, "Query key must be a string."); if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h); } } else if (c) throw e(f, {},
                            "Prohibited from getting entire URL when components are specified.");
                    },
                    ca: a
                }
            })
        }();
    Z.m.gct = ["google"],
        function() {
            function a(d) { for (var e = [], f = 0; f < d.length; f++) try { e.push(new RegExp(d[f])) } catch (g) {}
                return e }

            function b(d) { return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&") }

            function c(d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].matchValue,
                        h; switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            h = "^" + b(g); break;
                        case "ENDS_WITH":
                            h = b(g) + "$"; break;
                        case "EQUALS":
                            h = "^" + b(g) + "$"; break;
                        case "REGEX":
                            h = g; break;
                        default:
                            h = b(g) }
                    e.push(h) } return e }(function(d) {
                Z.__gct = d;
                Z.__gct.o = "gct";
                Z.__gct.isVendorTemplate = !0;
                Z.__gct.priorityOverride = 0;
                Z.__gct.isInfrastructure = !1
            })(function(d) {
                var e = {},
                    f = d.vtp_sessionDuration;
                0 < f && (e[S.g.ad] = f);
                e[S.g.ce] = d.vtp_eventSettings;
                e[S.g.bf] = d.vtp_dynamicEventSettings;
                e[S.g.yb] = 1 === d.vtp_googleSignals;
                e[S.g.ie] = d.vtp_foreignTld;
                e[S.g.Xc] = 1 === d.vtp_restrictDomain;
                e[S.g.ff] = d.vtp_internalTrafficResults;
                var g = S.g.za,
                    h = d.vtp_linker;
                h && h[S.g.aa] && (h[S.g.aa] = a(h[S.g.aa]));
                e[g] = h;
                var l = S.g.ne,
                    n = d.vtp_referralExclusionDefinition;
                n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
                e[l] = n;
                var p = d.vtp_trackingId,
                    q = zs(ts, p).h,
                    r = q.referral_exclusion_conditions;
                r && (r.length && "object" === typeof r[0] && (r = c(r)), e[S.g.ne] = { include_conditions: a(r) });
                var u = q.cross_domain_conditions;
                if (u) { u.length && "object" === typeof u[0] && (u = c(u)); var t = {};
                    e[S.g.za] = (t[S.g.aa] = a(u), t[S.g.jc] = !0, t[S.g.ic] = !0, t[S.g.Yc] = "query", t) }
                Cs(p, e);
                wA(p, d.vtp_gtmEventId);
                H(d.vtp_gtmOnSuccess)
            })
        }();

    Z.m.get = ["google"],
        function() {
            (function(a) { Z.__get = a;
                Z.__get.o = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0;
                Z.__get.isInfrastructure = !1 })(function(a) { var b = a.vtp_settings,
                    c = b.eventParameters || {},
                    d = String(a.vtp_eventName),
                    e = {};
                e.eventId = a.vtp_gtmEventId;
                e.priorityId = a.vtp_gtmPriorityId;
                a.vtp_deferrable && (e.deferrable = !0); var f = Tr(String(b.streamId), d, c);
                Wr(f, e.eventId, e);
                a.vtp_gtmOnSuccess() }) }();





    var jE = {};
    jE.dataLayer = Mh;
    jE.callback = function(a) { vh.hasOwnProperty(a) && Ca(vh[a]) && vh[a]();
        delete vh[a] };
    jE.bootstrap = 0;
    jE._spx = !1;

    function kE() { dh[Ve.N] = dh[Ve.N] || jE;
        Ve.Xb && (dh["ctid_" + Ve.Xb] = jE);
        ek();
        gk() || Ma(hk(), function(a, b) { Rq(a, b.transportUrl, b.context);
            P(92) });
        Wa(wh, Z.m);
        De = Re }
    (function(a) {
        function b() { l = G.documentElement.getAttribute("data-tag-assistant-present");
            $t(l) && (h = g.ej) }
        if (!m["__TAGGY_INSTALLED"]) { var c = !1; if (G.referrer) { var d = ki(G.referrer);
                c = "cct.google" === hi(d, "host") } if (!c) { var e = Fj("googTaggyReferrer");
                c = e.length && e[0].length }
            c && (m["__TAGGY_INSTALLED"] = !0, ac("https://cct.google/taggy/agent.js")) }
        if (qh) a();
        else {
            var f = function(t) {
                    var v = "GTM",
                        w = "GTM";
                    kh ? (v = "OGT", w = "GTAG") : qh && (w = v = "OPT");
                    var x = m["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        m["google.tagmanager.debugui2.queue"] = x, ac("https://" + ch.Sd + "/debug/bootstrap?id=" + Ve.N + "&src=" + w + "&cond=" + t + "&gtm=" + kk()));
                    var y = { messageType: "CONTAINER_STARTING", data: { scriptSource: Vb, containerProduct: v, debug: !1, id: Ve.N, isGte: jh } };
                    y.data.resume = function() { a() };
                    ch.zi && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = { jl: 1, fj: 2, sj: 3, Bi: 4, ej: 5 },
                h = void 0,
                l = void 0,
                n = ii(m.location, "query", !1, void 0, "gtm_debug");
            $t(n) && (h = g.fj);
            if (!h && G.referrer) { var p = ki(G.referrer); "tagassistant.google.com" === hi(p, "host") && (h = g.sj) }
            if (!h) {
                var q =
                    Fj("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Bi)
            }
            h || b();
            if (!h && K(54) && au(l)) { var r = function() { if (u) return !0;
                        u = !0;
                        b();
                        h && Vb ? f(h) : a() },
                    u = !1;
                ec(G, "TADebugSignal", function() { r() }, !1);
                m.setTimeout(function() { r() }, 200) } else h && Vb ? f(h) : a()
        }
    })(function() {
        var a = !1;
        a && vr("INIT");
        Vi().B();
        Uk();
        Yl.enable_gbraid_cookie_write = !0;
        if (Ve.Xb ? dh["ctid_" + Ve.Xb] : dh[Ve.N]) { var b = dh.zones;
            b && b.unregisterChild(ak()); } else {
            (K(11) || K(13) || K(55) || K(48)) && jp();
            for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) se.push(d[e]);
            for (var f = c.tags || [], g = 0; g < f.length; g++) ve.push(f[g]);
            for (var h = c.predicates || [], l = 0; l <
                h.length; l++) ue.push(h[l]);
            for (var n = c.rules || [], p = 0; p < n.length; p++) { for (var q = n[p], r = {}, u = 0; u < q.length; u++) r[q[u][0]] = Array.prototype.slice.call(q[u], 1);
                te.push(r) }
            xe = Z;
            ze = zv;
            Ze = new Ye;
            var t = data.sandboxed_scripts,
                v = data.security_groups,
                w = data.infra,
                x = data.runtime || [],
                y = data.runtime_lines;
            KC = new Td;
            NC();
            re = LC();
            var A = KC,
                B = HC();
            mb(A.h, "require", B);
            for (var C = 0; C < x.length; C++) { var E = x[C]; if (!Ea(E) || 3 > E.length) { if (0 === E.length) continue; break }
                y && y[C] && y[C].length && Ke(E, y[C]);
                KC.execute(E) }
            if (void 0 !==
                t)
                for (var J = ["sandboxedScripts"], D = 0; D < t.length; D++) { var N = t[D].replace(/^_*/, "");
                    wh[N] = J }
            OC(v);
            if (void 0 !== w)
                for (var Q = 0; Q < w.length; Q++) xh[w[Q]] = !0;
            kE();
            Zt();
            fr = !1;
            gr = 0;
            if ("interactive" == G.readyState && !G.createEventObject || "complete" == G.readyState) ir();
            else { ec(G, "DOMContentLoaded", ir);
                ec(G, "readystatechange", ir); if (G.createEventObject && G.documentElement.doScroll) { var V = !0; try { V = !m.frameElement } catch (aa) {}
                    V && jr() }
                ec(m, "load", ir) }
            Qs = !1;
            "complete" === G.readyState ? Ss() : ec(m, "load", Ss);
            Eo();
            K(46) && (P(111), vb("HEALTH", 1));
            K(47) && (P(112), vb("HEALTH", 2));
            uh = Ta();
            jE.bootstrap =
                uh;
            if (a) { var ia = wr("INIT"); }
        }
    });

})()